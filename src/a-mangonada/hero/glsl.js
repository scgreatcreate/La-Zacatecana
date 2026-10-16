// GLSL snippets + a tiny onBeforeCompile patch helper.

export const NOISE_GLSL = /* glsl */`
float zHash13(vec3 p){ p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float zNoise(vec3 p){
  vec3 i = floor(p); vec3 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(zHash13(i), zHash13(i + vec3(1,0,0)), f.x), mix(zHash13(i + vec3(0,1,0)), zHash13(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(zHash13(i + vec3(0,0,1)), zHash13(i + vec3(1,0,1)), f.x), mix(zHash13(i + vec3(0,1,1)), zHash13(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float zFbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * zNoise(p); p *= 2.03; a *= 0.5; } return s / 0.9375; }
`;

/**
 * patch(material, { uniforms, vertexHead, vertex: {chunk: code-after}, fragmentHead, fragment: {chunk: code-after}, replace: {chunk: code} })
 * Injects code after (or instead of) three's #include chunks.
 */
export function patch(material, spec, key) {
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, spec.uniforms || {});
    let vs = shader.vertexShader, fs = shader.fragmentShader;
    if (spec.vertexHead) vs = vs.replace('#include <common>', `#include <common>\n${spec.vertexHead}`);
    if (spec.fragmentHead) fs = fs.replace('#include <common>', `#include <common>\n${spec.fragmentHead}`);
    for (const [chunk, code] of Object.entries(spec.vertex || {})) vs = vs.replace(`#include <${chunk}>`, `#include <${chunk}>\n${code}`);
    for (const [chunk, code] of Object.entries(spec.fragment || {})) fs = fs.replace(`#include <${chunk}>`, `#include <${chunk}>\n${code}`);
    for (const [chunk, code] of Object.entries(spec.replaceFragment || {})) fs = fs.replace(`#include <${chunk}>`, code);
    shader.vertexShader = vs; shader.fragmentShader = fs;
  };
  material.customProgramCacheKey = () => key;
  return material;
}

/**
 * Transmission for a TRANSPARENT canvas. three clears the transmission target to (1,1,1,0.5) when the
 * canvas clear alpha < 1, which would turn an empty PET cup milky. We decode coverage from that
 * convention and output premultiplied colour (+ specular, + a whisper of haze) so the clear plastic
 * composites physically over the CSS studio backdrop. Back faces (DoubleSide back pass, compiled with
 * FLIP_SIDED) re-encode into the same convention so the far wall's highlights survive.
 */
export const CLEAR_TRANSMISSION = /* glsl */`
#ifdef USE_TRANSMISSION
  material.transmission = transmission;
  material.transmissionAlpha = 1.0;
  material.thickness = thickness;
  material.attenuationDistance = attenuationDistance;
  material.attenuationColor = attenuationColor;
  vec3 tPos = vWorldPosition;
  vec3 tV = normalize( cameraPosition - tPos );
  vec3 tN = transformNormalByInverseViewMatrix( normal, viewMatrix );
  vec3 tRay = getVolumeTransmissionRay( tN, tV, material.thickness, material.ior, modelMatrix );
  vec4 tNdc = projectionMatrix * viewMatrix * vec4( tPos + tRay, 1.0 );
  vec2 tUv = ( tNdc.xy / tNdc.w + 1.0 ) * 0.5;
  vec4 tS = getTransmissionSample( tUv, material.roughness, material.ior );
  float tCov = clamp( ( tS.a - 0.5 ) * 2.0, 0.0, 1.0 );
  vec3 tPremul = max( tS.rgb - ( 1.0 - tCov ), 0.0 );
  vec3 tF = EnvironmentBRDF( tN, tV, material.specularColorBlended, material.specularF90, material.roughness );
  float tFres = pow( 1.0 - saturate( abs( dot( tN, tV ) ) ), 3.0 );
  float tHaze = uHaze + uEdgeHaze * tFres;
  vec3 tCol = ( 1.0 - tF ) * material.diffuseContribution * tPremul * volumeAttenuation( length( tRay ), material.attenuationColor, material.attenuationDistance );
  material.transmissionAlpha = mix( 1.0, clamp( tCov + tHaze, 0.0, 1.0 ), material.transmission );
  totalDiffuse = mix( totalDiffuse, tCol + tHaze * uHazeColor, material.transmission );
#endif
`;
export const CLEAR_BACKPASS = /* glsl */`
#ifdef FLIP_SIDED
  gl_FragColor = vec4( gl_FragColor.rgb + ( 1.0 - gl_FragColor.a ), 0.5 + 0.5 * gl_FragColor.a );
#endif
`;

/** Output for the clear plastic: un-premultiply → tone-map → sRGB → re-premultiply (main pass only). */
export const CLEAR_OUTPUT = /* glsl */`
#ifndef FLIP_SIDED
  float zA = clamp( max( gl_FragColor.a, max( gl_FragColor.r, max( gl_FragColor.g, gl_FragColor.b ) ) ), 0.0, 1.0 );
  vec3 zC = gl_FragColor.rgb / max( zA, 1e-4 );
  #if defined( TONE_MAPPING )
    zC = toneMapping( zC );
  #endif
  gl_FragColor = vec4( linearToOutputTexel( vec4( zC, 1.0 ) ).rgb * zA, zA );
#endif
`;

/** procedural bump in view space (no tangents needed) */
export const BUMP_GLSL = /* glsl */`
vec3 zBump( vec3 pos, vec3 n, float h ) {
  vec3 dpx = dFdx( pos ), dpy = dFdy( pos );
  float dhx = dFdx( h ), dhy = dFdy( h );
  vec3 r1 = cross( dpy, n ), r2 = cross( n, dpx );
  float det = dot( dpx, r1 );
  vec3 grad = sign( det ) * ( dhx * r1 + dhy * r2 );
  return normalize( abs( det ) * n - grad );
}
`;
