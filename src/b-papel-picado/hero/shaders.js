// GLSL for the papel picado hero. Written GLSL1-style; three.js converts for WebGL2.
// Everything shades in linear space and writes sRGB itself (no renderer tone mapping),
// so flat brand colours (yellow wall, pink counter) land on their exact hex values.

export const MAX_STR = 10; // half-strings: 4 outdoor strings × 2 halves + 1 string inside the shop × 2

const COMMON = /* glsl */ `
vec3 toLin(vec3 c){ return pow(max(c, 0.0), vec3(2.2)); }
vec3 toSRGB(vec3 c){ return pow(max(c, 0.0), vec3(1.0/2.2)); }
float hash11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash21(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 x){
  vec2 i = floor(x), f = fract(x); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash21(i), hash21(i+vec2(1,0)), u.x), mix(hash21(i+vec2(0,1)), hash21(i+vec2(1,1)), u.x), u.y);
}
// soft shoulder on the brightest channel: highlights roll off without bleaching the hue
vec3 shoulder(vec3 c){
  float l = max(max(c.r, c.g), c.b);
  float l2 = l / (1.0 + max(l - 0.8, 0.0) * 1.5);
  return c * (l2 / max(l, 1e-4));
}
`;

// ------------------------------------------------------------------ flags (cloth)
const FLAG_HEAD = /* glsl */ `
attribute vec2 iT;      // t0,t1 along the half-string curve
attribute vec4 iTile;   // atlas rect (u0, v0, du, dv)
attribute vec3 iCol;    // tissue colour (linear)
attribute vec4 iMisc;   // x string index, y seed, z flag height (m), w flag width (m)
uniform vec3 uA[${MAX_STR}];
uniform vec3 uC[${MAX_STR}];
uniform vec3 uE[${MAX_STR}];
uniform float uFl[${MAX_STR}];
uniform float uLv[${MAX_STR}];
uniform float uGa[${MAX_STR}];
uniform float uTime;
uniform float uWind;
uniform vec3 uPtrO;
uniform vec3 uPtrD;
uniform float uPtrAmt;
uniform float uPtrR;
varying vec2 vUV;
varying vec4 vTile;
varying vec3 vCol;
varying vec4 vMisc;

vec3 bez(int s, float t){ float r = 1.0 - t; return r*r*uA[s] + 2.0*r*t*uC[s] + t*t*uE[s]; }

vec3 bezD(int s, float t){ return 2.0*(1.0-t)*(uC[s]-uA[s]) + 2.0*t*(uE[s]-uC[s]); }
// a flag is a rigid sheet hung at its centre on the cord; its top edge follows the cord's slope but
// pivots toward level (uLv) so it never shears. When a half is gathered (uGa) the sheets overlap like
// a drawn curtain, fanned slightly in depth (sheets nearer the centre in front).
vec3 flagTop(int s, float u){
  float tc = 0.5 * (iT.x + iT.y);
  vec3 c = bez(s, tc);
  vec3 tg = bezD(s, tc);
  tg = normalize(tg + vec3(1e-5, 0.0, 0.0));
  tg *= tg.x < 0.0 ? -1.0 : 1.0;
  vec3 dir = normalize(mix(tg, vec3(1.0, 0.0, 0.0), uLv[s]));
  vec3 p = c + dir * ((u - 0.5) * iMisc.w);
  p.z += uGa[s] * tc * 0.16;
  return p;
}

vec3 flagPos(vec2 uv, int s){
  vec3 top = flagTop(s, uv.x);
  float h = iMisc.z;
  float v = uv.y;
  float w = pow(v, 1.25);
  float ph = iMisc.y * 6.2831853;
  float fl = uFl[s] * uWind;
  float T = uTime;
  // pendulum swing about the string, a slow drift plus quicker gusts
  float sw = fl * (0.12*sin(T*1.05 + ph) + 0.055*sin(T*2.2 + ph*1.9) + 0.025*sin(T*4.1 + ph*3.3));
  // pointer: a puff of air that pushes nearby flags back toward the wall
  vec3 rest = top - vec3(0.0, v*h, 0.0);
  vec3 dl = rest - uPtrO;
  vec3 perp = dl - uPtrD * dot(dl, uPtrD);
  float dd = length(perp);
  float k = uPtrAmt * exp(-dd*dd / (uPtrR*uPtrR));
  sw -= k * 0.95;
  vec3 hang = vec3(0.0, -cos(sw), sin(sw));
  vec3 p = top + hang * (v*h);
  // travelling ripples of thin tissue
  float rip = sin(uv.x*3.3 + T*2.9 + ph) * sin(v*2.7 - T*2.3 + ph*0.7)
            + 0.55*sin(uv.x*6.5 - T*4.3 + ph*2.3 + v*3.4)
            + 0.35*sin(uv.x*11.0 + v*7.0 - T*6.1 + ph);
  p.z += rip * 0.05 * h * (0.6 + fl) * w;
  p.x += (sin(T*1.6 + ph*1.3 + v*2.2) * 0.035 * fl + (perp.x / (dd + 1e-3)) * k * 0.4) * h * w;
  p.y += abs(rip) * 0.012 * h * fl * w;
  return p;
}
`;

export const FLAG_VS = /* glsl */ `
${FLAG_HEAD}
varying vec3 vN;
varying vec3 vW;
void main(){
  int s = int(iMisc.x + 0.5);
  vec2 uv = position.xy;
  vec3 p = flagPos(uv, s);
  vec3 px = flagPos(uv + vec2(0.03, 0.0), s);
  vec3 py = flagPos(uv + vec2(0.0, 0.03), s);
  vN = normalize(cross(py - p, px - p));
  vUV = uv; vTile = iTile; vCol = iCol; vMisc = iMisc; vW = p;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`;

export const FLAG_FS = /* glsl */ `
${COMMON}
uniform sampler2D uAtlas;
uniform vec3 uL;
uniform vec3 uKey;
uniform vec3 uSky;
uniform float uHeader;
uniform vec2 uRes;
uniform float uVig;
varying vec2 vUV;
varying vec4 vTile;
varying vec3 vCol;
varying vec4 vMisc;
varying vec3 vN;
varying vec3 vW;
void main(){
  vec2 auv = vTile.xy + vUV * vTile.zw;
  float m = texture2D(uAtlas, auv).r;
  float aa = max(fwidth(m) * 0.75, 0.02);
  float cov = smoothstep(0.5 - aa, 0.5 + aa, m);
  if (cov < 0.02) discard;
  vec3 N = normalize(vN);
  if (!gl_FrontFacing) N = -N;
  float seed = vMisc.y * 37.0;
  // crinkle: tissue was folded to be cut — a vertical centre crease, two cross creases, plus noise
  float cx = vUV.x - 0.5;
  float crease = sign(cx) * exp(-abs(cx) * 34.0) * 0.22;
  float cy1 = vUV.y - 0.36, cy2 = vUV.y - 0.68;
  float creaseY = sign(cy1) * exp(-abs(cy1) * 40.0) * 0.12 + sign(cy2) * exp(-abs(cy2) * 40.0) * 0.1;
  vec2 q = vUV * vec2(6.0, 7.5) + seed;
  float n1 = vnoise(q), n2 = vnoise(q * 2.7 + 3.1);
  vec3 bump = vec3(crease + (n1 - 0.5) * 0.35 + (n2 - 0.5) * 0.18, creaseY + (vnoise(q + 9.0) - 0.5) * 0.35, 0.0);
  N = normalize(N + bump);
  // fibres: long thin streaks
  float fib = vnoise(vec2(vUV.x * 160.0 + seed, vUV.y * 18.0)) * 0.6 + vnoise(vec2(vUV.x * 60.0, vUV.y * 240.0 + seed)) * 0.4;
  vec3 base = vCol * (0.93 + 0.12 * fib);
  float ndl = max(dot(N, uL), 0.0);
  float back = max(dot(-N, uL), 0.0);
  // light passing through thin tissue: brighter and more saturated than reflected light
  vec3 trans = pow(vCol, vec3(1.35)) * (0.42 + 0.9 * back) + vCol * 0.05;
  vec3 col = base * (uKey * (0.32 + 0.68 * ndl) * 0.72 + uSky * 0.42) + trans * 0.55;
  // folded header: two layers of paper — denser, a soft fold shadow at its lower edge
  float hdr = 1.0 - smoothstep(uHeader - 0.004, uHeader + 0.004, vUV.y);
  col *= mix(1.0, 0.86, hdr);
  col *= 1.0 - 0.28 * exp(-pow((vUV.y - uHeader) * 90.0, 2.0));
  // freshly cut edges catch light
  float edge = 1.0 - smoothstep(0.5, 0.9, m);
  col = mix(col, col * 1.18 + 0.025, edge * 0.5);
  vec2 sp = gl_FragCoord.xy / uRes - 0.5;
  col *= 1.0 - uVig * dot(sp, sp);
  gl_FragColor = vec4(toSRGB(shoulder(col)), cov);
}`;

// light's-eye pass: colour transmitted through the tissue (white where cut), alpha = distance to wall
export const FLAG_SH_VS = /* glsl */ `
${FLAG_HEAD}
varying float vD;
void main(){
  int s = int(iMisc.x + 0.5);
  vec3 p = flagPos(position.xy, s);
  vUV = position.xy; vTile = iTile; vCol = iCol; vMisc = iMisc;
  vD = clamp(p.z / 3.2, 0.0, 1.0);
  gl_Position = s >= 8 ? vec4(2.0, 2.0, 2.0, 1.0) : projectionMatrix * viewMatrix * vec4(p, 1.0);
}`;

export const FLAG_SH_FS = /* glsl */ `
uniform sampler2D uAtlas;
uniform float uHeader;
varying vec2 vUV;
varying vec4 vTile;
varying vec3 vCol;
varying vec4 vMisc;
varying float vD;
void main(){
  float m = texture2D(uAtlas, vTile.xy + vUV * vTile.zw).r;
  float cov = smoothstep(0.32, 0.68, m);
  if (cov < 0.01) discard;
  // tissue transmits its own hue strongly; doubled header transmits less
  vec3 tr = pow(vCol, vec3(0.88)) * 0.9 + 0.02;
  float hdr = 1.0 - step(uHeader, vUV.y);
  tr = mix(tr, tr * tr * 1.05, hdr);
  gl_FragColor = vec4(mix(vec3(1.0), tr, cov), vD);
}`;

// ------------------------------------------------------------------ cords
const CORD_HEAD = /* glsl */ `
uniform vec3 uA[${MAX_STR}];
uniform vec3 uC[${MAX_STR}];
uniform vec3 uE[${MAX_STR}];
uniform float uW;
uniform vec3 uView; // for the light pass: direction to the light
uniform float uUseView;
vec3 bez(int s, float t){ float r = 1.0 - t; return r*r*uA[s] + 2.0*r*t*uC[s] + t*t*uE[s]; }
vec3 bezD(int s, float t){ return 2.0*(1.0-t)*(uC[s]-uA[s]) + 2.0*t*(uE[s]-uC[s]); }
vec3 cordPos(out float side){
  int s = int(position.z + 0.5);
  float t = position.x;
  side = position.y;
  vec3 p = bez(s, t);
  vec3 tg = normalize(bezD(s, t) + vec3(1e-5, 0.0, 0.0));
  vec3 vd = uUseView > 0.5 ? uView : normalize(cameraPosition - p);
  vec3 sd = normalize(cross(tg, vd));
  p += sd * side * uW;
  p.z -= 0.004;
  return p;
}
`;
export const CORD_VS = /* glsl */ `
${CORD_HEAD}
varying float vSide;
varying vec3 vW;
void main(){
  float side;
  vec3 p = cordPos(side);
  vSide = side; vW = p;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`;
export const CORD_FS = /* glsl */ `
${COMMON}
uniform vec3 uKey;
uniform vec3 uSky;
varying float vSide;
varying vec3 vW;
void main(){
  // twisted cotton: a round profile with a faint twist
  float r = 1.0 - vSide * vSide;
  float tw = 0.85 + 0.15 * sin(vW.x * 900.0 + vSide * 3.0);
  vec3 c = toLin(vec3(0.93, 0.89, 0.82)) * (uKey * 0.55 * (0.4 + 0.6 * r) + uSky * 0.35) * tw;
  gl_FragColor = vec4(toSRGB(c), 1.0);
}`;
export const CORD_SH_VS = /* glsl */ `
${CORD_HEAD}
varying float vD;
void main(){
  float side;
  vec3 p = cordPos(side);
  vD = clamp(p.z / 3.2, 0.0, 1.0);
  gl_Position = position.z > 7.5 ? vec4(2.0, 2.0, 2.0, 1.0) : projectionMatrix * viewMatrix * vec4(p, 1.0);
}`;
export const CORD_SH_FS = /* glsl */ `
varying float vD;
void main(){ gl_FragColor = vec4(vec3(0.42, 0.4, 0.38), vD); }`;

// ------------------------------------------------------------------ fullscreen passes
export const FS_VS = /* glsl */ `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

export const BLUR_FS = /* glsl */ `
uniform sampler2D uTex;
uniform vec2 uDir;
varying vec2 vUv;
void main(){
  // 13-tap gaussian (linear-sampled offsets)
  vec4 c = texture2D(uTex, vUv) * 0.1964825501511404;
  c += texture2D(uTex, vUv + uDir * 1.411764705882353) * 0.2969069646728344;
  c += texture2D(uTex, vUv - uDir * 1.411764705882353) * 0.2969069646728344;
  c += texture2D(uTex, vUv + uDir * 3.2941176470588234) * 0.09447039785044732;
  c += texture2D(uTex, vUv - uDir * 3.2941176470588234) * 0.09447039785044732;
  c += texture2D(uTex, vUv + uDir * 5.176470588235294) * 0.010381362401148057;
  c += texture2D(uTex, vUv - uDir * 5.176470588235294) * 0.010381362401148057;
  gl_FragColor = c;
}`;

// one-time bake of a tileable cantera texture: R mottling, G grain height, B pores, A pale clasts
export const STONE_BAKE_FS = /* glsl */ `
varying vec2 vUv;
float hashP(vec2 c, vec2 P){ c = mod(c, P); vec3 p3 = fract(vec3(c.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnP(vec2 x, vec2 P){
  vec2 i = floor(x), f = fract(x); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hashP(i,P), hashP(i+vec2(1,0),P), u.x), mix(hashP(i+vec2(0,1),P), hashP(i+vec2(1,1),P), u.x), u.y);
}
float fbmP(vec2 x, vec2 P, int oct){
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 7; i++){ if (i >= oct) break; s += a * vnP(x, P); x *= 2.0; P *= 2.0; a *= 0.5; }
  return s;
}
float cellsP(vec2 x, vec2 P, float density, float rMin, float rMax){
  vec2 i = floor(x), f = fract(x); float best = 0.0;
  for (int y = -1; y <= 1; y++) for (int xx = -1; xx <= 1; xx++){
    vec2 g = vec2(float(xx), float(y));
    vec2 c = i + g;
    float h = hashP(c, P);
    if (h > density) continue;
    vec2 o = vec2(hashP(c + 17.0, P), hashP(c + 41.0, P));
    float r = mix(rMin, rMax, hashP(c + 73.0, P));
    float d = length(g + o - f);
    best = max(best, 1.0 - smoothstep(r * 0.55, r, d));
  }
  return best;
}
void main(){
  vec2 uv = vUv;
  // flow banding typical of ignimbrite (cantera): stretched noise
  float mott = fbmP(uv * vec2(3.0, 6.0) + vec2(0.0, fbmP(uv * 4.0, vec2(4.0), 3) * 0.6), vec2(3.0, 6.0), 5);
  float grain = fbmP(uv * 48.0, vec2(48.0), 4);
  float pores = cellsP(uv * 110.0, vec2(110.0), 0.3, 0.1, 0.3);
  pores = max(pores, cellsP(uv * 34.0 + 0.5, vec2(34.0), 0.08, 0.06, 0.16) * 0.8);
  float clasts = cellsP(uv * 70.0 + 0.25, vec2(70.0), 0.18, 0.1, 0.3) * smoothstep(0.45, 0.75, vnP(uv * 9.0, vec2(9.0)));
  gl_FragColor = vec4(mott, grain, pores, clasts);
}`;

// ------------------------------------------------------------------ cantera façade
export const WALL_VS = /* glsl */ `
varying vec3 vW;
varying vec3 vNo;
void main(){
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vNo = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`;

export const WALL_FS = /* glsl */ `
${COMMON}
uniform sampler2D uStone;
uniform sampler2D uShA;
uniform sampler2D uShB;
uniform mat4 uLightVP;
uniform vec3 uL;
uniform vec3 uKey;
uniform vec3 uSky;
uniform vec3 uBounce;
uniform vec4 uWin;     // x centre, y sill, y springline, half width
uniform vec4 uSill;    // half width, thickness, protrusion, wall depth
uniform vec3 uAlb;     // base albedo (linear)
uniform vec2 uRes;
uniform float uVig;
uniform float uShOn;
uniform float uSoft;
uniform float uIsJamb;
varying vec3 vW;
varying vec3 vNo;

float sdOpening(vec2 p){
  vec2 q = p - vec2(uWin.x, uWin.z);
  float dRect = max(max(abs(q.x) - uWin.w, uWin.y - p.y), q.y);
  float dDisk = max(length(q) - uWin.w, -q.y);
  return min(dRect, dDisk);
}

// relief + ids. returns vec4(height, blockHash, band(0/1), jointAO)
vec4 masonry(vec2 p){
  float d = sdOpening(p);
  vec2 q = p - vec2(uWin.x, uWin.z);
  float h = 0.0, id = 0.0, band = 0.0, joint = 1.0;
  // quoins / voussoirs: alternating long/short dressed stones around the opening
  float bw; float je;
  if (q.y > 0.0) {
    float th = atan(q.y, q.x);
    float n = 13.0;
    float a = th / 3.14159265 * n;
    float k = floor(a);
    bw = (abs(k - 6.0) < 0.5) ? 0.5 : 0.33;
    je = min(fract(a), 1.0 - fract(a)) * 3.14159265 / n * length(q);
    id = k + 50.0;
  } else {
    float yy = p.y - uWin.y;
    float k = floor(yy / 0.42);
    bw = mod(k, 2.0) < 0.5 ? 0.30 : 0.44;
    float fy = fract(yy / 0.42) * 0.42;
    je = min(fy, 0.42 - fy);
    id = k + 20.0 + step(0.0, q.x) * 7.0;
  }
  if (d < bw && d > -0.001) {
    band = 1.0;
    je = min(je, bw - d);
    // archivolt profile: a bead at the arris, a fillet groove, flat dressed face
    float bead = smoothstep(0.012, 0.03, d) * (1.0 - smoothstep(0.05, 0.07, d));
    float groove = exp(-pow((d - 0.11) / 0.012, 2.0));
    h = 0.75 + bead * 0.35 - groove * 0.4;
    if (q.y > 0.0 && bw > 0.45) h += 0.25; // keystone stands proud
  } else {
    // ashlar coursing
    float ch = 0.48;
    float row = floor(p.y / ch);
    float L = mix(0.78, 1.32, hash11(row * 1.73 + 3.0));
    float off = hash11(row * 3.11 + 1.0) * L;
    float col = floor((p.x + off) / L);
    vec2 lp = vec2(fract((p.x + off) / L) * L, fract(p.y / ch) * ch);
    je = min(min(lp.x, L - lp.x), min(lp.y, ch - lp.y));
    if (d > 0.0) je = min(je, d - bw);
    id = hash21(vec2(col, row));
    h = 0.6;
  }
  // impost moulding at the springline
  if (abs(p.y - uWin.z + 0.06) < 0.07 && abs(q.x) < uWin.w + 0.56) {
    float t = 1.0 - abs(p.y - uWin.z + 0.06) / 0.07;
    h = max(h, 0.8 + 0.25 * smoothstep(0.0, 0.5, t));
    band = 1.0;
    je = min(je, min(abs(p.y - uWin.z + 0.13), abs(p.y - uWin.z + 0.0)) + 0.004);
  }
  float face = smoothstep(0.003, 0.018, je);
  joint = mix(0.62, 1.0, smoothstep(0.0, 0.022, je));
  return vec4(h * face, id, band, joint);
}

float heightAt(vec2 p, vec2 suv){
  vec4 m = masonry(p);
  vec4 st = texture2D(uStone, suv);
  return m.x + (st.g - 0.5) * 0.34 - st.b * 0.2;
}

void main(){
  vec3 Ng = normalize(vNo);
  vec2 p; vec2 suv;
  if (uIsJamb > 0.5) {
    // reveal / sill: map the surface to stone space by its dominant axis
    if (abs(Ng.x) > 0.5) p = vec2(vW.z * 1.0 + 31.0, vW.y);
    else if (abs(Ng.y) > 0.5) p = vec2(vW.x, vW.z + 17.0);
    else p = vW.xy;
  } else {
    p = vW.xy;
    if (sdOpening(p) < 0.0) discard;
  }
  suv = p / 2.7;
  vec4 m = (uIsJamb > 0.5) ? vec4(0.75, 7.0, 1.0, 1.0) : masonry(p);
  vec4 st = texture2D(uStone, suv);
  vec4 st2 = texture2D(uStone, p / 9.3 + vec2(0.31, 0.57));
  // normal from relief (3 taps)
  vec3 N = Ng;
  if (uIsJamb < 0.5) {
    float e = 0.006;
    float h0 = heightAt(p, suv);
    float hx = heightAt(p + vec2(e, 0.0), (p + vec2(e, 0.0)) / 2.7);
    float hy = heightAt(p + vec2(0.0, e), (p + vec2(0.0, e)) / 2.7);
    N = normalize(vec3(-(hx - h0) / e * 0.02, -(hy - h0) / e * 0.02, 1.0));
  } else {
    float h0 = (st.g - 0.5) * 0.22 - st.b * 0.35;
    N = normalize(Ng + (vec3(dFdx(h0), dFdy(h0), 0.0)) * 0.0);
  }
  // cantera palette: per-block tint, flow mottling, pores and pale clasts
  float bh = fract(m.y * 7.31);
  vec3 c0 = toLin(vec3(0.85, 0.60, 0.62));
  vec3 cWarm = toLin(vec3(0.87, 0.62, 0.56));
  vec3 cMauve = toLin(vec3(0.80, 0.57, 0.62));
  vec3 cPale = toLin(vec3(0.90, 0.71, 0.70));
  vec3 alb = c0;
  alb = mix(alb, cWarm, smoothstep(0.6, 1.0, bh) * 0.55);
  alb = mix(alb, cMauve, smoothstep(0.4, 0.0, bh) * 0.5);
  alb = mix(alb, cPale, m.z * 0.4 + smoothstep(0.35, 0.65, bh) * 0.15);
  alb *= 0.84 + 0.32 * (st.r * 0.5 + st2.r * 0.5);
  alb *= 0.93 + 0.14 * fract(m.y * 13.7);
  // weathering: soft darker blooms and pale salt bloom that differ block to block
  float wth = vnoise(p * 1.7 + m.y * 31.0);
  alb *= mix(1.0, 0.86, smoothstep(0.62, 0.9, wth) * step(0.45, fract(m.y * 5.3)));
  alb = mix(alb, alb * 1.08 + 0.015, smoothstep(0.7, 0.95, vnoise(p * 3.1 - m.y * 17.0)) * 0.6);
  alb = mix(alb, alb * toLin(vec3(0.66, 0.48, 0.52)), st.b * 0.7);
  alb = mix(alb, toLin(vec3(0.97, 0.87, 0.83)), st.a * 0.32);
  alb *= uAlb;
  // weathering: a little darker toward the ground
  alb *= mix(0.86, 1.0, smoothstep(-0.5, 2.2, vW.y));

  // colour transmitted through the papel picado (projective lookup from the key light)
  vec3 T = vec3(1.0);
  if (uShOn > 0.5) {
    vec4 lp = uLightVP * vec4(vW, 1.0);
    vec2 s = lp.xy * 0.5 + 0.5;
    float inside = step(0.002, s.x) * step(s.x, 0.998) * step(0.002, s.y) * step(s.y, 0.998);
    vec4 a = texture2D(uShA, s);
    vec4 b = texture2D(uShB, s);
    // occluder distance: from the crisp map where there is tissue, else from the blurred one
    float zEst = a.a < 0.999 ? a.a : b.a;
    float w = smoothstep(0.04, 0.42, zEst) * 0.8 + uSoft;
    vec3 TT = mix(a.rgb, b.rgb, clamp(w, 0.0, 1.0));
    // light through dyed tissue reads richer than a plain multiply: push its saturation a little
    float lt = dot(TT, vec3(0.3, 0.5, 0.2));
    TT = max(mix(vec3(lt), TT, 1.35), 0.0);
    T = mix(vec3(1.0), TT, inside);
  }
  // sill shadow on the wall below it
  float sh = 1.0;
  if (uIsJamb < 0.5) {
    float yb = uWin.y - uSill.y;
    if (vW.y < yb) {
      float t = (yb - vW.y) / uL.y;
      float z = uL.z * t;
      float x = vW.x + uL.x * t - uWin.x;
      sh = 1.0 - (1.0 - smoothstep(uSill.z - 0.03, uSill.z + 0.03, z)) * (1.0 - smoothstep(uSill.x - 0.03, uSill.x + 0.03, abs(x)));
    }
  } else {
    // inside the reveal: the façade edge shades the jambs (cheap: by depth and facing)
    float depth = clamp(-vW.z / uSill.w, 0.0, 1.0);
    sh = mix(1.0, 0.75, depth);
  }
  float ndl = max(dot(N, uL), 0.0);
  vec3 amb = uSky * (0.62 + 0.38 * N.y) + uBounce * (0.5 - 0.5 * N.y);
  if (uIsJamb > 0.5) amb += uKey * 0.2 * (1.0 - ndl);
  // coloured light on pink stone goes muddy if multiplied straight; let the tinted part see a more neutral stone
  float tint = 1.0 - min(min(T.r, T.g), T.b);
  vec3 albD = mix(alb, vec3(dot(alb, vec3(0.3, 0.55, 0.15))) * 1.12, 0.5 * tint);
  vec3 col = albD * uKey * ndl * T * sh + alb * amb * m.w;
  vec2 sp = gl_FragCoord.xy / uRes - 0.5;
  col *= 1.0 - uVig * dot(sp, sp);
  gl_FragColor = vec4(toSRGB(shoulder(col)), 1.0);
}`;

// ------------------------------------------------------------------ interior (room box + counter)
export const ROOM_FS = /* glsl */ `
${COMMON}
uniform sampler2D uMark;
uniform vec4 uMarkRect;  // x0, y0, w, h on the back wall (world)
uniform vec3 uMin;
uniform vec3 uMax;
uniform vec3 uYellow;
uniform vec3 uPinkWall;
uniform vec3 uWhite;
uniform float uExpo;
uniform vec2 uRes;
uniform float uVig;
uniform float uWainscot;
varying vec3 vW;
varying vec3 vNo;
void main(){
  vec3 n = -normalize(vNo); // BackSide box: inward normal
  vec3 col;
  float dx0 = vW.x - uMin.x, dx1 = uMax.x - vW.x, dy0 = vW.y - uMin.y, dy1 = uMax.y - vW.y, dz0 = vW.z - uMin.z;
  float ao = 1.0;
  float paint = 0.97 + 0.03 * vnoise(vW.xy * 30.0);
  if (n.z > 0.5) {
    // the sunflower logo wall
    col = uYellow * paint;
    float wash = exp(-pow((vW.x - (uMin.x + uMax.x) * 0.5) / 3.2, 2.0)) * smoothstep(uMin.y, uMax.y, vW.y + 0.6);
    col *= 0.84 + 0.16 * wash;
    // recessed downlights graze the wall in soft scallops
    float sc = 0.0;
    for (int i = -2; i <= 2; i++) {
      float lx = (uMin.x + uMax.x) * 0.5 + float(i) * 1.55;
      float dxl = vW.x - lx;
      float yTopS = uMax.y - 0.28 - dxl * dxl * 1.9;
      sc += smoothstep(yTopS + 0.05, yTopS - 0.5, vW.y) * exp(-dxl * dxl * 1.1) * smoothstep(-0.4, 1.4, vW.y);
    }
    col *= 0.9 + 0.22 * sc;
    vec2 mu = (vW.xy - uMarkRect.xy) / uMarkRect.zw;
    if (mu.x > 0.0 && mu.x < 1.0 && mu.y > 0.0 && mu.y < 1.0) {
      vec4 mk = texture2D(uMark, mu);
      // painted-on decal, a whisper of shadow below the white outline
      vec4 sh = texture2D(uMark, mu + vec2(-0.002, 0.03));
      col *= 1.0 - sh.a * 0.12;
      col = mix(col, toLin(mk.rgb) * (0.94 + 0.08 * wash), mk.a);
    }
    ao *= smoothstep(-0.1, 0.9, min(dx0, dx1)) * 0.25 + 0.75;
    ao *= smoothstep(-0.1, 0.7, dy1) * 0.2 + 0.8;
  } else if (n.y > 0.5) {
    // grey wood-look plank floor
    float plank = floor(vW.x / 0.19);
    float tone = hash11(plank * 1.3);
    float seam = smoothstep(0.0, 0.006, abs(fract(vW.x / 0.19) - 0.5) * 0.19 - 0.09);
    col = toLin(vec3(0.47, 0.45, 0.44)) * (0.85 + 0.25 * tone) * (0.92 + 0.08 * vnoise(vec2(vW.x * 4.0, vW.z * 40.0)));
    col *= mix(0.7, 1.0, seam);
    ao *= smoothstep(-0.2, 1.2, min(min(dx0, dx1), dz0)) * 0.35 + 0.65;
  } else if (n.y < -0.5) {
    // drop ceiling with tiles and a couple of light panels
    vec2 g = vW.xz / 0.61;
    vec2 fg = abs(fract(g) - 0.5);
    float grid = smoothstep(0.47, 0.49, max(fg.x, fg.y));
    col = uWhite * 0.86 * (1.0 - grid * 0.18);
    vec2 cell = floor(g);
    if (mod(cell.x, 4.0) == 1.0 && mod(cell.y, 3.0) == 1.0) col = vec3(1.25, 1.22, 1.15);
  } else {
    // side walls: pink wainscot + white above (their real wall language)
    col = vW.y < uWainscot ? uPinkWall : uWhite;
    if (vW.y < 0.1) col = toLin(vec3(0.12, 0.1, 0.1));
    col *= paint;
    ao *= smoothstep(-0.1, 1.0, min(dz0, uMax.z - vW.z)) * 0.3 + 0.7;
  }
  ao *= smoothstep(-0.1, 0.5, min(dy0, dy1)) * 0.25 + 0.75;
  col *= ao * uExpo;
  vec2 sp = gl_FragCoord.xy / uRes - 0.5;
  col *= 1.0 - uVig * dot(sp, sp);
  gl_FragColor = vec4(toSRGB(col), 1.0);
}`;

export const COUNTER_FS = /* glsl */ `
${COMMON}
uniform vec3 uPink;
uniform vec3 uTop;
uniform float uH;
uniform float uExpo;
uniform vec2 uRes;
uniform float uVig;
uniform float uFlat;
uniform vec4 uProd[4];  // x, z, radius x, radius z
uniform float uProdOn;
varying vec3 vW;
varying vec3 vNo;
void main(){
  vec3 n = normalize(vNo);
  vec3 col;
  if (n.y > 0.5) {
    // white quartz-look top
    col = uTop * (0.92 + 0.06 * vnoise(vW.xz * 18.0));
    float occ = 0.0;
    for (int i = 0; i < 4; i++) {
      vec2 d = (vW.xz - uProd[i].xy) / uProd[i].zw;
      occ = max(occ, exp(-dot(d, d) * 2.2));
    }
    col *= 1.0 - 0.45 * occ * uProdOn;
  } else {
    col = uPink;
    float y = vW.y;
    if (y > uH - 0.035) col = uTop * 0.93;                                   // slab edge
    else col *= 1.0 - 0.22 * exp(-pow((uH - 0.035 - y) / 0.03, 2.0));       // shadow under the lip
    if (y < 0.12) col = toLin(vec3(0.13, 0.11, 0.12));                       // kick plate
    if (n.z < 0.5) col *= 0.88;                                              // ends
  }
  col *= mix(uExpo, 1.0, uFlat);
  vec2 sp = gl_FragCoord.xy / uRes - 0.5;
  col *= 1.0 - uVig * (1.0 - uFlat) * dot(sp, sp);
  gl_FragColor = vec4(toSRGB(col), 1.0);
}`;

// ------------------------------------------------------------------ product cutouts standing on the counter
export const PROD_VS = /* glsl */ `
attribute vec4 iRect;   // atlas rect (u0, v0 from top, du, dv)
attribute vec4 iPos;    // x, base y, z, height
attribute float iAsp;   // width / height
varying vec2 vUv;
void main(){
  vec2 c = position.xy;  // (0..1, 0..1)
  vec3 p = vec3(iPos.x + (c.x - 0.5) * iPos.w * iAsp, iPos.y + c.y * iPos.w, iPos.z);
  vUv = vec2(iRect.x + c.x * iRect.z, iRect.y + (1.0 - c.y) * iRect.w);
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`;
export const PROD_FS = /* glsl */ `
${COMMON}
uniform sampler2D uTex;
uniform float uExpo;
uniform float uFade;
varying vec2 vUv;
void main(){
  vec4 t = texture2D(uTex, vUv);
  float a = smoothstep(0.35, 0.65, t.a) * uFade;
  if (a < 0.02) discard;
  vec3 c = toLin(t.rgb) * (0.96 * uExpo + 0.06);
  gl_FragColor = vec4(toSRGB(c), a);
}`;
