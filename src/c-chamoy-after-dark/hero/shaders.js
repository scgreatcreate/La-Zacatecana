// GLSL for the Direction C hero.
// The fluid passes (advect / curl / vorticity / divergence / pressure / gradient-subtract / splat)
// follow the stable-fluids structure popularised by PavelDoGreat/WebGL-Fluid-Simulation
// (MIT, Copyright (c) 2017 Pavel Dobryakov — see LICENSE-fluid.txt), rewritten for WebGL2 and
// extended with dye-weighted gravity, a scroll-driven drain force, neon-sign drag and a pool reservoir.

const H = '#version 300 es\nprecision highp float;\nprecision highp sampler2D;\n';

export const VS = `${H}
in vec2 aPos;
out vec2 vUv; out vec2 vL; out vec2 vR; out vec2 vT; out vec2 vB;
uniform vec2 uTexel;
void main () {
  vUv = aPos * 0.5 + 0.5;
  vL = vUv - vec2(uTexel.x, 0.0); vR = vUv + vec2(uTexel.x, 0.0);
  vT = vUv + vec2(0.0, uTexel.y); vB = vUv - vec2(0.0, uTexel.y);
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FS = (body) => `${H}in vec2 vUv; in vec2 vL; in vec2 vR; in vec2 vT; in vec2 vB;\nout vec4 o;\n${body}`;

export const COPY = FS(`
uniform sampler2D uSrc; uniform vec4 uScale;
void main () { o = texture(uSrc, vUv) * uScale; }`);

export const SPLAT = FS(`
uniform sampler2D uTarget;
uniform float uAspect;
uniform int uCount;
uniform vec4 uP[12];   // x, y (uv), radius x, radius y (uv-y units)
uniform vec4 uV[12];   // value to add (velocity xy / premultiplied dye rgb + thickness)
uniform float uM[12];  // 0 = add, 1 = blend toward value (emitter)
uniform float uMaxA;   // dye: max thickness (0 = velocity target)
void main () {
  vec4 c = texture(uTarget, vUv);
  for (int i = 0; i < 12; i++) {
    if (i >= uCount) break;
    vec2 d = vUv - uP[i].xy; d.x *= uAspect; d /= uP[i].zw;
    float g = exp(-dot(d, d));
    if (uM[i] > 0.5) c = mix(c, uV[i], g); else c += g * uV[i];
  }
  if (uMaxA > 0.0 && c.a > uMaxA) c *= uMaxA / c.a;
  o = c;
}`);

export const ADVECT = FS(`
uniform sampler2D uVelocity; uniform sampler2D uSource;
uniform vec2 uVelTexel;
uniform float uDt; uniform float uDiss; uniform float uTime;
uniform vec4 uPool;      // x: pool surface (uv y), y: target thickness, z: refill rate, w: enabled
uniform vec3 uPoolCol;
uniform sampler2D uNeon; uniform vec4 uNeonRect; uniform float uNeonDiss;
void main () {
  vec2 coord = vUv - uDt * texture(uVelocity, vUv).xy * uVelTexel;
  float m = uNeonDiss > 0.0 ? textureLod(uNeon, (vUv - uNeonRect.xy) / uNeonRect.zw, 2.0).r : 0.0;
  vec4 r = texture(uSource, coord) / (1.0 + (uDiss + m * uNeonDiss) * uDt);
  if (uPool.w > 0.5) {
    float top = uPool.x + 0.006 * sin(vUv.x * 9.0 + uTime * 0.8) + 0.004 * sin(vUv.x * 23.0 - uTime * 1.3);
    float inPool = smoothstep(top + 0.002, top - 0.01, vUv.y);
    float k = clamp((uPool.y * inPool - r.a) * uPool.z * uDt, 0.0, 1.0);
    r += k * vec4(uPoolCol, 1.0);
  }
  o = r;
}`);

export const CURL = FS(`
uniform sampler2D uVelocity;
void main () {
  float L = texture(uVelocity, vL).y; float R = texture(uVelocity, vR).y;
  float T = texture(uVelocity, vT).x; float B = texture(uVelocity, vB).x;
  o = vec4(0.5 * (R - L - T + B), 0.0, 0.0, 1.0);
}`);

// vorticity confinement + dye-weighted gravity + drain + drag over the neon tubes + walls
export const FORCES = FS(`
uniform sampler2D uVelocity; uniform sampler2D uCurl; uniform sampler2D uDye; uniform sampler2D uNeon;
uniform float uCurlK; uniform float uDt; uniform float uGrav; uniform float uDrain; uniform float uDrag;
uniform float uNeonLod; uniform vec2 uTexel; uniform vec4 uNeonRect;
uniform vec2 uPoolV;   // x: pool surface (uv y), y: viscous damping inside the pool
void main () {
  float L = texture(uCurl, vL).x; float R = texture(uCurl, vR).x;
  float T = texture(uCurl, vT).x; float B = texture(uCurl, vB).x;
  float C = texture(uCurl, vUv).x;
  vec2 f = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
  f /= length(f) + 0.0001;
  f *= uCurlK * C; f.y *= -1.0;
  vec2 v = texture(uVelocity, vUv).xy + f * uDt;
  float h = texture(uDye, vUv).a;
  v.y -= (uGrav * min(h, 1.6) + uDrain) * uDt;
  float m = clamp(textureLod(uNeon, (vUv - uNeonRect.xy) / uNeonRect.zw, uNeonLod).r * 3.0, 0.0, 1.0);
  v *= exp(-m * uDrag * uDt);
  float inPool = smoothstep(uPoolV.x + 0.02, uPoolV.x - 0.06, vUv.y);
  v *= exp(-inPool * uPoolV.y * uDt);
  if (vUv.y < uTexel.y * 1.5) v.y = max(v.y, 0.0);
  if (vUv.x < uTexel.x * 1.5) v.x = max(v.x, 0.0);
  if (vUv.x > 1.0 - uTexel.x * 1.5) v.x = min(v.x, 0.0);
  o = vec4(clamp(v, vec2(-3000.0), vec2(3000.0)), 0.0, 1.0);
}`);

export const DIVERGENCE = FS(`
uniform sampler2D uVelocity;
void main () {
  float L = texture(uVelocity, vL).x; float R = texture(uVelocity, vR).x;
  float T = texture(uVelocity, vT).y; float B = texture(uVelocity, vB).y;
  vec2 C = texture(uVelocity, vUv).xy;
  if (vL.x < 0.0) L = -C.x; if (vR.x > 1.0) R = -C.x;
  if (vT.y > 1.0) T = -C.y; if (vB.y < 0.0) B = -C.y;
  o = vec4(0.5 * (R - L + T - B), 0.0, 0.0, 1.0);
}`);

export const PRESSURE = FS(`
uniform sampler2D uPressure; uniform sampler2D uDivergence;
void main () {
  float L = texture(uPressure, vL).x; float R = texture(uPressure, vR).x;
  float T = texture(uPressure, vT).x; float B = texture(uPressure, vB).x;
  float d = texture(uDivergence, vUv).x;
  o = vec4((L + R + B + T - d) * 0.25, 0.0, 0.0, 1.0);
}`);

export const GRADIENT = FS(`
uniform sampler2D uPressure; uniform sampler2D uVelocity;
void main () {
  float L = texture(uPressure, vL).x; float R = texture(uPressure, vR).x;
  float T = texture(uPressure, vT).x; float B = texture(uPressure, vB).x;
  vec2 v = texture(uVelocity, vUv).xy - vec2(R - L, T - B);
  o = vec4(v, 0.0, 1.0);
}`);

// seeds the dye from the static first frame (frozen pour + pool rasterised from the SVG)
export const SEED = FS(`
uniform sampler2D uSeed; uniform float uK;
void main () { vec4 t = texture(uSeed, vUv); float a = t.a * uK; o = vec4(t.rgb * a, a); }`);

// ---------------------------------------------------------------- shared chunks
// meniscus of the draining liquid (pure function of uLevel = f(scroll) + ambient time)
const SURF = `
uniform float uLevel; uniform float uTime; uniform vec2 uRes; uniform float uPx;
uniform float uStreamX; uniform float uMound; uniform float uShiftBg;
float surfY (float x) {
  float a = 5.5 * uPx / uRes.y;
  float s = uLevel + a * sin(x * 7.0 + uTime * 1.1) + a * 0.6 * sin(x * 17.0 - uTime * 1.7 + 1.3)
          + a * 0.3 * sin(x * 41.0 + uTime * 2.9);
  float dx = (x - uStreamX) * uRes.x / uPx;
  s += uMound * (14.0 * uPx / uRes.y) * exp(-dx * dx / 1500.0);
  return s;
}
float nightMask (vec2 uv) {
  float s = surfY(uv.x); float aa = 0.8 * uPx / uRes.y;
  return smoothstep(s + aa, s - aa, uv.y);
}`;

const NEON = `
uniform sampler2D uNeon;
uniform vec4 uNeonRect;  // where the neon texture sits on the canvas (uv: x, y, w, h)
uniform vec4 uNeonI;   // x: "La", y: "Zacatecana", z: stuttering letter id, w: stutter depth
const vec3 PINK = vec3(1.0, 0.31, 0.64);
vec4 neonAt (vec2 uv, float lod) {
  vec4 t = textureLod(uNeon, (uv - uNeonRect.xy) / uNeonRect.zw, lod);
  float tube = t.r;
  if (tube < 0.002) return vec4(0.0);
  float id = floor(t.b / tube * 255.0 / 16.0 + 0.5) - 1.0;
  float I = id < 1.5 ? uNeonI.x : uNeonI.y;
  if (abs(id - uNeonI.z) < 0.5) I *= 1.0 - uNeonI.w;
  float core = clamp(t.g / tube, 0.0, 1.0);
  vec3 lit = mix(PINK * 1.05, vec3(1.0, 0.9, 0.96) * 1.18, smoothstep(0.25, 0.95, core));
  vec3 glass = mix(vec3(0.17, 0.10, 0.15), vec3(0.36, 0.25, 0.31), core);
  return vec4(tube * mix(glass, lit, I), tube * I);
}`;

// ---------------------------------------------------------------- Tajín flecks
export const P_UPDATE = FS(`
uniform sampler2D uState; uniform sampler2D uVelocity;
uniform vec2 uVelTexel; uniform float uDt; uniform float uSeedT; uniform float uPoolY;
uniform vec4 uSpawn;    // pour inlet x, y, width, active
float hash (float n) { return fract(sin(n) * 43758.5453123); }
void main () {
  vec4 s = texture(uState, vUv);
  vec2 p = s.xy; float age = s.z; float id = s.w;
  p += texture(uVelocity, p).xy * uVelTexel * uDt;
  p.y -= 0.004 * uDt;
  age += uDt;
  float life = 5.0 + 8.0 * hash(id * 3.17);
  if (age > life || p.y < -0.01 || p.y > 1.02 || p.x < -0.01 || p.x > 1.01) {
    float r1 = hash(id * 12.9898 + uSeedT * 1.7), r2 = hash(id * 78.233 + uSeedT * 3.1), r3 = hash(id * 4.1 + uSeedT * 0.37);
    if (r3 < 0.22) p = vec2(r1, r2 * uPoolY);
    else if (r3 < 0.68 && uSpawn.w > 0.5) p = vec2(uSpawn.x + (r1 - 0.5) * uSpawn.z, uSpawn.y - r2 * 0.06);
    else p = vec2(r1, r2);
    age = 0.0;
  }
  o = vec4(p, age, id);
}`);

export const P_VS = `${H}
uniform sampler2D uState; uniform sampler2D uDye;
uniform int uN; uniform float uShift; uniform float uPointPx; uniform float uGlint;
${SURF}
out float vA; out vec3 vC; out float vS; out float vR;
float hash (float n) { return fract(sin(n) * 43758.5453123); }
void main () {
  int i = gl_VertexID;
  vec4 s = texelFetch(uState, ivec2(i % uN, i / uN), 0);
  vec2 p = s.xy;
  float h = textureLod(uDye, p, 0.0).a;
  vec2 sp = vec2(p.x, p.y - uShift);
  float life = 5.0 + 8.0 * hash(s.w * 3.17);
  float fade = smoothstep(0.0, 0.5, s.z) * (1.0 - smoothstep(life - 0.7, life, s.z));
  float r = hash(s.w * 91.7);
  vA = smoothstep(0.22, 0.6, h) * fade * nightMask(sp) * (sp.y < 1.0 ? 1.0 : 0.0);
  vC = mix(vec3(0.894, 0.341, 0.180), vec3(0.50, 0.08, 0.04), hash(s.w * 17.3));
  vC = mix(vC, vec3(1.0, 0.55, 0.16), step(0.82, hash(s.w * 5.9)));
  float tw = sin(uTime * (3.0 + 5.0 * r) + s.w * 40.0);
  vS = uGlint * step(0.8, r) * pow(max(tw, 0.0), 30.0);
  vR = hash(s.w * 2.3) * 6.283;
  gl_Position = vec4(sp * 2.0 - 1.0, 0.0, 1.0);
  gl_PointSize = uPointPx * (0.65 + 0.9 * hash(s.w * 7.7)) * (1.0 + vS * 0.6);
}`;

export const P_FS = `${H}
in float vA; in vec3 vC; in float vS; in float vR;
out vec4 o;
void main () {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float ang = atan(q.y, q.x);
  float r = length(q) * (1.0 + 0.28 * sin(ang * 3.0 + vR) + 0.12 * sin(ang * 5.0 - vR));
  float a = smoothstep(1.0, 0.55, r) * vA;
  if (a < 0.004) discard;
  vec3 c = vC * (0.8 + 0.35 * (1.0 - r)) + vS * vec3(1.0, 0.86, 0.62) * (1.2 - r);
  o = vec4(c * a, a);
}`;

// ---------------------------------------------------------------- bloom
export const B_EMIT = FS(`
${SURF}
${NEON}
void main () {
  vec4 n = neonAt(vUv + vec2(0.0, uShiftBg), 1.0);
  vec3 e = n.a * PINK;
  o = vec4(e * nightMask(vUv), 1.0);
}`);

export const B_DOWN = FS(`
uniform sampler2D uSrc; uniform vec2 uSrcTexel;
void main () {
  vec2 d = uSrcTexel;
  o = 0.25 * (texture(uSrc, vUv + vec2(-d.x, -d.y)) + texture(uSrc, vUv + vec2(d.x, -d.y))
            + texture(uSrc, vUv + vec2(-d.x, d.y)) + texture(uSrc, vUv + vec2(d.x, d.y)));
}`);

export const B_UP = FS(`
uniform sampler2D uSrc; uniform vec2 uSrcTexel; uniform float uK;
void main () {
  vec2 d = uSrcTexel;
  vec4 c = texture(uSrc, vUv) * 4.0;
  c += (texture(uSrc, vUv + vec2(-d.x, 0.0)) + texture(uSrc, vUv + vec2(d.x, 0.0))
      + texture(uSrc, vUv + vec2(0.0, -d.y)) + texture(uSrc, vUv + vec2(0.0, d.y))) * 2.0;
  c += texture(uSrc, vUv + vec2(-d.x, -d.y)) + texture(uSrc, vUv + vec2(d.x, -d.y))
     + texture(uSrc, vUv + vec2(-d.x, d.y)) + texture(uSrc, vUv + vec2(d.x, d.y));
  o = c / 16.0 * uK;
}`);

// ---------------------------------------------------------------- final composite
export const COMPOSITE = FS(`
uniform sampler2D uDye; uniform sampler2D uBg; uniform sampler2D uBloom;
uniform vec2 uDyeTexel; uniform float uShift; uniform float uBloomK;
uniform vec4 uCopy; uniform float uCopyK;      // copy-safe rect (css px, top-left) + strength
uniform float uDiv[24]; uniform float uDivN;   // liquid divider x (uv), top -> bottom
uniform vec4 uStream;                          // x: half width (css px), y: visibility, z: bead speed
uniform float uDrip; uniform float uDripS;
${SURF}
${NEON}
const vec3 CHAMOY = vec3(0.70, 0.07, 0.18);
const vec3 DEEP = vec3(0.43, 0.043, 0.11);

float hash2 (vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

float divX (float yTop) {
  float f = clamp(yTop, 0.0, 1.0) * (uDivN - 1.0);
  int n = int(uDivN) - 1;
  int i = min(int(floor(f)), n - 1);
  float t = f - float(i);
  float p0 = uDiv[max(i - 1, 0)], p1 = uDiv[i], p2 = uDiv[min(i + 1, n)], p3 = uDiv[min(i + 2, n)];
  return 0.5 * ((2.0 * p1) + (-p0 + p2) * t + (2.0 * p0 - 5.0 * p1 + 4.0 * p2 - p3) * t * t
              + (-p0 + 3.0 * p1 - 3.0 * p2 + p3) * t * t * t);
}

float copyMask (vec2 uv) {
  vec2 q = vec2(uv.x, 1.0 - uv.y) * uRes / uPx;
  vec2 c = (uCopy.xy + uCopy.zw) * 0.5; vec2 hs = (uCopy.zw - uCopy.xy) * 0.5;
  vec2 d = abs(q - c) - hs;
  float sd = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
  return 1.0 - smoothstep(-24.0, 36.0, sd);
}

// glossy syrup: Beer-Lambert body over what is behind + sharp key highlight + neon-tinted reflections
vec3 syrup (vec3 behind, vec3 col, float H, vec3 n, vec3 glow) {
  vec3 T = exp(-((1.0 - col) * 2.4 + 0.1) * H * 1.3);
  vec3 tint = pow(max(col, vec3(0.001)), vec3(0.88, 1.12, 1.3)) * mix(1.25, 0.58, smoothstep(0.5, 2.8, H));
  vec3 body = behind * T + tint * (1.0 - T) * (0.82 + 1.4 * dot(glow, vec3(0.3333)));
  // key light (upper left) + a soft fill from the lower right
  vec3 hv = normalize(vec3(-0.42, 0.68, 0.6) + vec3(0.0, 0.0, 1.0));
  float nh = max(dot(n, hv), 0.0);
  float spec = pow(nh, 70.0) * 1.25 + pow(nh, 16.0) * 0.12;
  vec3 hv2 = normalize(vec3(0.5, -0.25, 0.83) + vec3(0.0, 0.0, 1.0));
  spec += pow(max(dot(n, hv2), 0.0), 40.0) * 0.25;
  // environment: slopes that face up mirror the neon sign above, slopes that face down see the dark street
  vec3 r = vec3(2.0 * n.z * n.x, 2.0 * n.z * n.y, 2.0 * n.z * n.z - 1.0);
  float fres = 0.05 + 0.95 * pow(1.0 - clamp(n.z, 0.0, 1.0), 4.0);
  vec3 env = mix(vec3(0.04, 0.012, 0.02), vec3(0.72, 0.2, 0.17) + glow * 1.4, smoothstep(0.02, 0.55, r.y));
  return body + spec * (vec3(1.0, 0.9, 0.9) + glow * 0.6) + env * fres * 0.55;
}

void main () {
  vec2 uv = vUv;
  vec2 cssRes = uRes / uPx;
  float surf = surfY(uv.x);
  float aa = 0.8 / cssRes.y;
  float night = smoothstep(surf + aa, surf - aa, uv.y);
  float below = (surf - uv.y) * cssRes.y;            // css px under the meniscus
  vec3 glow = texture(uBloom, uv).rgb * uBloomK;
  vec2 cpx = uv * cssRes;
  float up = -below;                                    // css px above the meniscus
  // analytic heights (derivatives must be taken outside divergent branches)
  float lip = uLevel < 1.03 ? 1.15 * exp(-max(below, 0.0) / 15.0) : 0.0;
  vec2 glip = vec2(dFdx(lip), dFdy(lip)) * uPx;
  // drips: rivulets left behind on the glass while it drains (attached to the meniscus = pure f(scroll))
  float cw = 31.0 * uDripS;
  float ci = floor(cpx.x / cw);
  float r0 = hash2(vec2(ci, 3.7)), r1 = hash2(vec2(ci, 9.1)), r2 = hash2(vec2(ci, 1.3));
  float dH = 0.0;
  if (r0 > 0.38 && uDrip > 0.0) {
    float L = (10.0 + 62.0 * r1 * r1) * uDrip * uDripS; // rivulet length (css px)
    float w = (2.2 + 2.6 * r2) * uDripS;                // neck half-width
    float bulb = w * 1.55;                              // rounded drop at the trailing end
    float cx = (ci + 0.5 + (r2 - 0.5) * 0.4) * cw;
    float ddx = cpx.x - cx;
    float t = clamp(up / max(L, 1.0), 0.0, 1.0);
    float hw2 = mix(w * 1.25, w * 0.8, t) + 7.0 * uDripS * exp(-max(up, 0.0) / (5.0 * uDripS));   // fillet
    float k = 1.0 - ddx * ddx / (hw2 * hw2);
    float by = L - bulb * 0.4;                          // drop centre
    float dy = up - by;
    float kb = 1.0 - (ddx * ddx + dy * dy) / (bulb * bulb);
    k = up < by ? k : -1.0;
    dH = max(max(k, kb), 0.0) * step(-1.0, up);
  }
  vec2 gdrip = vec2(dFdx(dH), dFdy(dH)) * uPx;

  // ----------------------------------------------------------- A · the night, under the meniscus
  vec3 A = vec3(0.0);
  if (night > 0.0) {
    vec2 duv = vec2(uv.x, uv.y + uShift);
    vec2 e = uDyeTexel * 1.5;
    float ok = step(duv.y, 1.0);
    vec4 dye = texture(uDye, duv) * ok;
    float hL = texture(uDye, duv - vec2(e.x, 0.0)).a * ok;
    float hR = texture(uDye, duv + vec2(e.x, 0.0)).a * ok;
    float hB = texture(uDye, duv - vec2(0.0, e.y)).a * step(duv.y - e.y, 1.0);
    float hT = texture(uDye, duv + vec2(0.0, e.y)).a * step(duv.y + e.y, 1.0);
    float h = dye.a;
    vec3 col = dye.rgb / max(h, 0.001);
    vec2 g = vec2(hR - hL, hT - hB) / (2.0 * e * cssRes);
    // meniscus: thick chamoy lip right under the surface while draining
    float Hh = max(h, lip);
    col = mix(col, CHAMOY, smoothstep(0.0, 0.25, lip - h));
    vec2 grad = g + glip;
    float cover = smoothstep(0.1, 0.26, Hh);                // crisp liquid edge, no smoky film
    vec2 rp = cpx * vec2(0.055, 0.09);
    vec2 ripple = vec2(sin(rp.x + uTime * 1.3 + 2.0 * sin(rp.y * 0.7 + uTime * 0.4)), cos(rp.y * 1.3 - uTime * 1.1 + 1.7 * sin(rp.x * 0.6)));
    grad += ripple * 0.009 * smoothstep(0.9, 1.6, Hh);
    vec3 n = normalize(vec3(-grad * 12.0, 1.0));
    vec2 refr = n.xy * 0.022 * cover * vec2(1.0, cssRes.x / cssRes.y);
    vec2 buv = uv + refr + vec2(0.0, uShiftBg);
    vec3 bg = texture(uBg, buv).rgb;
    vec3 neon = neonAt(buv, 0.0).rgb;
    bg += neon;
    vec3 liq = syrup(bg, col, Hh, n, glow);
    liq += neon * 0.5 * smoothstep(0.3, 1.2, dot(neon, vec3(0.3333)));   // the tubes still burn through the syrup
    liq = mix(liq, liq * 0.4, copyMask(uv) * uCopyK * (1.0 - smoothstep(0.0, 0.5, lip)));
    A = mix(bg, liq, cover);
    A += glow * (1.0 - 0.45 * cover);
  }

  // ----------------------------------------------------------- B · above it: the liquid divider + film left on the glass
  vec4 B = vec4(0.0);
  if (night < 1.0) {
    // the stream (dividing ¿dulce o picante?)
    float yTop = 1.0 - uv.y;
    float sx = divX(yTop);
    float ph = cpx.y / 34.0 + uTime * uStream.z;
    float hw = uStream.x * (1.0 + 0.17 * sin(ph * 6.2832) + 0.07 * sin(ph * 15.0 + 1.0));
    hw += 7.0 * exp(-max(up, 0.0) / 9.0) * uStream.y;   // flares into the pool
    float dx = (uv.x - sx) * cssRes.x;
    float s = dx / max(hw, 0.5);
    float sA = smoothstep(1.0 + 1.2 / hw, 1.0 - 1.2 / hw, abs(s)) * uStream.y;
    float sH = sqrt(max(1.0 - s * s, 0.0)) * 1.3;
    float dA = smoothstep(0.0, 0.12, dH);
    float a = max(sA, dA);
    if (a > 0.0) {
      vec3 n;
      float Hh;
      if (sA >= dA) { n = normalize(vec3(s * 1.5, -0.15 * sin(ph * 6.2832), sqrt(max(1.0 - s * s, 0.05)))); Hh = sH; }
      else { n = normalize(vec3(-gdrip * 3.0, 1.0)); Hh = dH * 1.1; }
      vec3 base = mix(DEEP * 0.55, CHAMOY * 0.7, smoothstep(0.0, 0.8, Hh));
      vec3 c = syrup(base, CHAMOY, Hh, n, vec3(0.0));
      // mango glints + Tajín specks riding the stream
      c += vec3(1.0, 0.55, 0.12) * 0.22 * smoothstep(0.55, 0.0, abs(s + 0.35)) * sA;
      vec2 sc = vec2(dx / 2.2, (cpx.y + uTime * 150.0) / 2.6);
      float sp = step(0.94, hash2(floor(sc))) * sA * smoothstep(0.85, 0.3, abs(s));
      c = mix(c, vec3(0.85, 0.30, 0.15), sp * 0.85);
      B = vec4(c * a, a);
    }
  }
  o = vec4(A, 1.0) * night + B * (1.0 - night);
}`);
