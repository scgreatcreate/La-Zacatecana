// Procedural Mangonada: PET cup + lid, swirled mango sorbet, chamoy liner with drips, mango cubes,
// Tajín flakes, tamarind banderilla, straw, contact shadow. All deterministic (seeded).
import {
  BufferGeometry, Float32BufferAttribute, LatheGeometry, CylinderGeometry, OctahedronGeometry, PlaneGeometry,
  Mesh, InstancedMesh, Group, Vector2, Color, DoubleSide, MeshPhysicalMaterial, MeshStandardMaterial,
  MeshBasicMaterial, AdditiveBlending, DynamicDrawUsage, InstancedBufferAttribute,
} from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { NOISE_GLSL, BUMP_GLSL, CLEAR_TRANSMISSION, CLEAR_BACKPASS, CLEAR_OUTPUT, patch } from './glsl.js';
import { makeWordmarkTexture, makeRadialTexture, DECAL_ASPECT } from './decal.js';
import { lerp, rng, vnoise, fbm, smooth, clamp01 } from './util.js';

// ---------------------------------------------------------------- dimensions (world units ≈ 1 : 10 cm)
export const CUP = { y0: 0.03, y1: 1.575, rb: 0.45, rt: 0.615, rim: 1.61, lidTop: 1.69 };
export const outerR = (y) => lerp(CUP.rb, CUP.rt, (y - CUP.y0) / (CUP.y1 - CUP.y0));
export const innerR = (y) => outerR(y) - 0.016;

export const PAL = {
  mango: new Color('#F58A06'), mangoDeep: new Color('#D45604'), cream: new Color('#FFB52E'),
  chamoy: new Color('#560A13'), chamoyHi: new Color('#8A171B'), tajin: new Color('#C93522'),
};

// ---------------------------------------------------------------- generic revolve grid (indexed, seamless)
function revolveGrid(rows, cols, fn, extraSize = 0) {
  const nv = (rows + 1) * cols;
  const pos = new Float32Array(nv * 3);
  const extra = extraSize ? new Float32Array(nv * extraSize) : null;
  const out = { x: 0, y: 0, z: 0, e: [0, 0, 0, 0] };
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j < cols; j++) {
      fn(i / rows, (j / cols) * Math.PI * 2, out);
      const k = i * cols + j;
      pos[k * 3] = out.x; pos[k * 3 + 1] = out.y; pos[k * 3 + 2] = out.z;
      if (extra) for (let q = 0; q < extraSize; q++) extra[k * extraSize + q] = out.e[q];
    }
  }
  const idx = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const a = i * cols + j, b = i * cols + ((j + 1) % cols), c = (i + 1) * cols + j, d = (i + 1) * cols + ((j + 1) % cols);
      idx.push(a, b, c, b, d, c);
    }
  }
  const g = new BufferGeometry();
  g.setIndex(idx);
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  if (extra) g.setAttribute('aExtra', new Float32BufferAttribute(extra, extraSize));
  g.computeVertexNormals();
  // pole rows: force clean axial normals (no pinch star)
  const n = g.attributes.normal;
  for (const [row, ny] of [[0, -1], [rows, 1]]) {
    const r0 = Math.hypot(pos[row * cols * 3], pos[row * cols * 3 + 2]);
    if (r0 < 1e-4) for (let j = 0; j < cols; j++) n.setXYZ(row * cols + j, 0, ny, 0);
  }
  return g;
}

/** polyline (r,y) → arc-length resampler returning {r,y,nr,ny,L} */
function profileSampler(pts) {
  const L = [0];
  for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const total = L[L.length - 1];
  return {
    total,
    at(s, o) {
      const d = s * total;
      let i = 1;
      while (i < L.length - 1 && L[i] < d) i++;
      const t = (d - L[i - 1]) / (L[i] - L[i - 1] || 1);
      const a = pts[i - 1], b = pts[i];
      o.r = lerp(a[0], b[0], t); o.y = lerp(a[1], b[1], t);
      // tangent averaged with neighbours for smooth normals
      const tx = b[0] - a[0], ty = b[1] - a[1], tl = Math.hypot(tx, ty) || 1;
      o.nr = ty / tl; o.ny = -tx / tl; // outward for a profile walked bottom → top
      o.L = d;
      return o;
    },
  };
}

// ---------------------------------------------------------------- materials
function clearPlastic(thickness, key) {
  const m = new MeshPhysicalMaterial({
    color: 0xffffff, metalness: 0, roughness: 0.06, transmission: 1, thickness, ior: 1.57,
    specularIntensity: 1, envMapIntensity: 2.6, side: DoubleSide,
    attenuationColor: new Color('#fff3ee'), attenuationDistance: 2.5,
  });
  m.userData.u = { uHaze: { value: 0.05 }, uEdgeHaze: { value: 0.3 }, uHazeColor: { value: new Color(0.42, 0.3, 0.36) } };
  return patch(m, {
    uniforms: m.userData.u,
    fragmentHead: 'uniform float uHaze; uniform float uEdgeHaze; uniform vec3 uHazeColor;',
    replaceFragment: { transmission_fragment: CLEAR_TRANSMISSION, tonemapping_fragment: CLEAR_OUTPUT, colorspace_fragment: '' },
    fragment: { opaque_fragment: CLEAR_BACKPASS },
  }, key);
}

// ---------------------------------------------------------------- cup
function cupGeometry(segs) {
  const P = [];
  const add = (x, y) => P.push(new Vector2(x, y));
  add(0, 0.03); add(0.2, 0.03); add(0.31, 0.028); add(0.348, 0.022); add(0.372, 0.009); add(0.394, 0.001);
  add(0.42, 0.0015); add(0.44, 0.008); add(0.4485, 0.026);
  for (const y of [0.06, 0.4, 0.8, 1.2, 1.37, 1.385, 1.395, 1.405, 1.415, 1.43, 1.5, 1.556]) {
    add(outerR(y) + 0.006 * Math.exp(-(((y - 1.4) / 0.013) ** 2)), y);
  }
  const cx = 0.628, cy = 1.592, rr = 0.0175;
  for (const a of [1.0, 0.82, 0.62, 0.42, 0.22, 0.02, -0.2, -0.42, -0.62, -0.78]) add(cx + rr * Math.cos(a * Math.PI), cy + rr * Math.sin(a * Math.PI));
  return new LatheGeometry(P, segs);
}

function lidGeometry(segs) {
  const P = [];
  const add = (x, y) => P.push(new Vector2(x, y));
  // outer skirt → over the rim bead → plateau → raised flat top → straw-hole collar
  add(0.648, 1.566); add(0.652, 1.585); add(0.6565, 1.603); add(0.654, 1.619); add(0.646, 1.629); add(0.632, 1.634);
  add(0.605, 1.636); add(0.58, 1.638); add(0.566, 1.643); add(0.556, 1.656); add(0.548, 1.669); add(0.535, 1.677);
  add(0.5, 1.68); add(0.32, 1.681); add(0.14, 1.681); add(0.1, 1.683); add(0.083, 1.692); add(0.07, 1.697);
  add(0.06, 1.69); add(0.054, 1.674); add(0.052, 1.662);
  return new LatheGeometry(P.reverse(), segs);
}

// ---------------------------------------------------------------- sorbet: piped soft-serve coil packed in the cup
function sorbetGeometry(rows, cols) {
  const yb = 0.07, ys = 1.31, peak = 1.585;
  const pts = [[0, yb]];
  for (let i = 1; i <= 6; i++) pts.push([lerp(0, innerR(yb) - 0.05, i / 6), yb]);
  for (let i = 1; i <= 6; i++) { const a = (i / 6) * Math.PI / 2; pts.push([innerR(yb + 0.05) - 0.05 * Math.cos(a), yb + 0.05 * Math.sin(a)]); }
  for (let i = 1; i <= 24; i++) { const y = lerp(yb + 0.05, ys, i / 24); pts.push([innerR(y) - 0.018, y]); }
  const a0 = innerR(ys) - 0.018;
  for (let i = 1; i <= 30; i++) { const a = (i / 30) * Math.PI / 2; pts.push([a0 * Math.cos(a), ys + (peak - ys) * Math.sin(a)]); }
  const prof = profileSampler(pts);
  const pitch = 0.25;
  const o = {};
  return revolveGrid(rows, cols, (s, th, out) => {
    prof.at(s, o);
    const sx = Math.sin(th), cz = Math.cos(th);
    const px0 = o.r * sx, pz0 = o.r * cz;
    // wobbling, slightly tilted coil (hand-piped, not machined)
    const wob = 0.16 * Math.sin(th + 0.6) + 0.09 * Math.sin(2 * th + o.L * 2.3) + 0.35 * (fbm(px0 * 1.6 + 11, o.y * 1.6, pz0 * 1.6, 2) - 0.5);
    const phi = o.L / pitch - th / (Math.PI * 2) + wob;
    const f = phi - Math.floor(phi);
    const b = Math.sqrt(Math.max(0, 1 - (2 * f - 1) ** 2));
    const bp = Math.pow(b, 0.7);
    const wBottom = smooth(clamp01((o.L - 0.16) / 0.22));
    const wTip = smooth(clamp01(o.r / 0.1));
    const w = wBottom * wTip;
    const n1 = fbm(px0 * 2.6 + 7, o.y * 2.6, pz0 * 2.6, 3);
    // twisted star-nozzle flutes (the swirl) + shallow piped layers + lumps
    const fc = Math.cos(6 * th + o.L * 5.4 + 1.2 * (n1 - 0.5));
    const flute = Math.sign(fc) * Math.pow(Math.abs(fc), 0.65);
    let disp = w * (0.034 * flute + 0.013 * (bp - 1));
    disp += 0.028 * (n1 - 0.5) * (0.5 + 0.5 * w);
    const yy = o.y + o.ny * disp;
    // pressed against the PET: never through the wall (flute crests flatten where they touch)
    const r = Math.max(0, Math.min(o.r + o.nr * disp, innerR(Math.min(yy, 1.57)) - 0.006));
    out.x = r * sx; out.z = r * cz; out.y = yy;
    const coil = Math.floor(phi);
    const streak = vnoise(coil * 1.7 + 0.3, Math.cos(th) * 1.4 + 3, Math.sin(th) * 1.4 + f * 1.2);
    const fIdx = Math.floor((6 * th + o.L * 5.4) / (Math.PI * 2) + 0.5);
    const thr = 0.12 + 0.62 * vnoise(fIdx * 1.31 + 0.5, o.L * 1.6, 2.2);
    out.e[0] = smooth(clamp01((-fc - thr) / 0.55)) * w; // chamoy rides the flute valleys, unevenly
    out.e[1] = streak;
    out.e[2] = clamp01((o.y - yb) / (peak - yb));
    out.e[3] = (1 - b) * w; // layer seams (occlusion only)
  }, 4);
}

function sorbetMaterial() {
  const m = new MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.55, specularIntensity: 0.38, sheen: 0.08, sheenColor: new Color('#ff9a20'), sheenRoughness: 0.5, envMapIntensity: 0.22 });
  const u = {
    uMango: { value: PAL.mango }, uMangoDeep: { value: PAL.mangoDeep }, uCream: { value: PAL.cream },
    uChamoy: { value: PAL.chamoy }, uTajin: { value: PAL.tajin },
  };
  return patch(m, {
    uniforms: u,
    vertexHead: 'attribute vec4 aExtra; varying vec4 vSorb; varying vec3 vObj;',
    vertex: { begin_vertex: 'vSorb = aExtra; vObj = position;' },
    fragmentHead: `${NOISE_GLSL}${BUMP_GLSL}\nvarying vec4 vSorb; varying vec3 vObj; uniform vec3 uMango, uMangoDeep, uCream, uChamoy, uTajin; float zGroove;`,
    fragment: {
      color_fragment: `
        float nA = zFbm(vObj * 4.0);
        float nB = zNoise(vObj * vec3(9.0, 3.0, 9.0) + 2.0);
        vec3 sc = mix(uMango, uMangoDeep, smoothstep(0.35, 0.85, nA));
        sc *= 1.0 - 0.14 * smoothstep(0.45, 0.98, vSorb.w);
        sc = mix(sc, uCream, smoothstep(0.55, 0.85, vSorb.y) * 0.45 * smoothstep(0.25, 0.75, nB));
        zGroove = smoothstep(0.32, 0.78, vSorb.x * (0.65 + 0.7 * nB) + 0.35 * vSorb.w * smoothstep(0.55, 0.8, nA));
        sc = mix(sc, uChamoy * (0.75 + 0.5 * nA), zGroove);
        float fl = smoothstep(0.8, 0.86, zNoise(vObj * 64.0)) * (0.2 + 0.8 * max(zGroove, smoothstep(0.7, 1.0, vSorb.z)));
        sc = mix(sc, uTajin * 0.7, fl * 0.85);
        diffuseColor.rgb = sc;`,
      roughnessmap_fragment: 'roughnessFactor = mix(0.6, 0.12, zGroove) + (zNoise(vObj * 40.0) - 0.5) * 0.18;',
      normal_fragment_maps: 'normal = zBump(-vViewPosition, normal, (zNoise(vObj * 15.0) * 0.004 + zNoise(vObj * 70.0) * 0.0009) * (1.0 - zGroove * 0.9));',
      emissivemap_fragment: 'totalEmissiveRadiance += diffuseColor.rgb * 0.13 * (1.0 - zGroove);',
    },
  }, 'zaca-sorbet');
}

// ---------------------------------------------------------------- chamoy liner with drip mask
const LINER = { y0: 0.2, y1: 1.592 };
function linerGeometry(segs) {
  const P = [];
  for (let i = 0; i <= 18; i++) { const y = lerp(LINER.y0, LINER.y1, i / 18); P.push(new Vector2(outerR(y) - 0.0085, y)); }
  return new LatheGeometry(P, segs);
}
function linerMaterial() {
  const m = new MeshPhysicalMaterial({
    color: 0xffffff, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.06, side: DoubleSide,
    alphaTest: 0.5, alphaToCoverage: true, envMapIntensity: 0.75,
  });
  m.userData.u = { uDrip: { value: 1 }, uFresh: { value: 0 }, uChamoy: { value: PAL.chamoy }, uChamoyHi: { value: PAL.chamoyHi }, uTajin: { value: PAL.tajin } };
  const H = (LINER.y1 - LINER.y0).toFixed(4);
  return patch(m, {
    uniforms: m.userData.u,
    vertexHead: 'varying vec2 vLUv; varying vec3 vObj;',
    vertex: { begin_vertex: 'vLUv = uv; vObj = position;' },
    fragmentHead: `${NOISE_GLSL}
      varying vec2 vLUv; varying vec3 vObj; uniform float uDrip, uFresh; uniform vec3 uChamoy, uChamoyHi, uTajin;
      float zSmin(float a, float b, float k){ float h = max(k - abs(a - b), 0.0) / k; return min(a, b) - h * h * k * 0.25; }
      float zChamoy(vec2 uv){
        const float C = 3.77; const float N = 14.0;
        float Y = (1.0 - uv.y) * ${H};
        float tau = 6.2831853 * uv.x;
        float band = 0.12 + 0.04 * sin(tau * 3.0 + 0.7) + 0.024 * sin(tau * 7.0 + 2.1) + 0.012 * sin(tau * 13.0 + 0.3);
        float d = Y - band;
        float cell = floor(uv.x * N);
        for (int k = -1; k <= 1; k++) {
          float c = mod(cell + float(k) + N, N);
          float h1 = zHash13(vec3(c, 1.7, 3.1)), h2 = zHash13(vec3(c, 5.3, 1.9)), h3 = zHash13(vec3(c, 9.1, 7.7));
          float cx = (c + 0.25 + 0.5 * h1) / N;
          float dx = (fract(uv.x - cx + 0.5) - 0.5) * C;
          float w = 0.024 + 0.03 * h2;
          float fresh = (c == 0.0 || c == 1.0 || c == 12.0) ? 1.0 : 0.0;
          float L = (h3 > 0.15 ? (0.08 + 0.8 * pow(h3, 1.5)) : 0.0) * uDrip + fresh * uFresh * (0.45 + 0.3 * h2);
          float yEnd = band + L;
          float t = clamp(Y / max(yEnd, 0.001), 0.0, 1.0);
          float dSeg = length(vec2(dx, Y - clamp(Y, 0.0, yEnd))) - w * (0.7 + 0.3 * t);
          float dBulb = length(vec2(dx, (Y - yEnd) * 0.85)) - w * 1.3;
          d = zSmin(d, min(dSeg, dBulb), 0.06);
        }
        return d;
      }
      float zEdge;`,
    fragment: {
      color_fragment: `
        float cd = zChamoy(vLUv);
        diffuseColor.a = clamp(0.5 - cd / max(fwidth(cd), 1e-4), 0.0, 1.0);
        zEdge = smoothstep(-0.03, 0.0, cd);
        float nC = zFbm(vObj * 9.0);
        vec3 cc = mix(uChamoy * (0.8 + 0.35 * nC), uChamoyHi, zEdge * 0.45);
        float fl = smoothstep(0.8, 0.86, zNoise(vObj * 70.0));
        diffuseColor.rgb = mix(cc, uTajin * 0.8, fl * 0.7);`,
      emissivemap_fragment: 'totalEmissiveRadiance += uChamoyHi * 0.05 * zEdge;',
    },
  }, 'zaca-liner');
}

// ---------------------------------------------------------------- banderilla (tamarind candy stick)
const BAND = { len: 1.18, r: 0.064, stick: 0.24 };
function banderillaGeometry(rows, cols) {
  const h = BAND.len / 2, R = BAND.r;
  const pts = [];
  for (let i = 0; i <= 8; i++) { const a = -Math.PI / 2 + (i / 8) * Math.PI / 2; pts.push([R * Math.cos(a), -h + R + R * Math.sin(a)]); }
  for (let i = 1; i < 20; i++) pts.push([R, lerp(-h + R, h - R, i / 20)]);
  for (let i = 0; i <= 8; i++) { const a = (i / 8) * Math.PI / 2; pts.push([R * Math.cos(a), h - R + R * Math.sin(a)]); }
  const prof = profileSampler(pts);
  const o = {};
  const g = revolveGrid(rows, cols, (s, th, out) => {
    prof.at(s, o);
    const sx = Math.sin(th), cz = Math.cos(th);
    const px = o.r * sx, pz = o.r * cz;
    const n = fbm(px * 14 + 3, o.y * 14, pz * 14, 3);
    const clump = vnoise(px * 5 + 1, o.y * 4.5, pz * 5);
    const disp = R * (0.34 * (n - 0.5) + 0.22 * (clump - 0.5)) * (o.r / R);
    const r = o.r + o.nr * disp;
    out.x = r * sx; out.z = r * cz; out.y = o.y + o.ny * disp;
    const speck = vnoise(px * 60, o.y * 60, pz * 60);
    out.e[0] = n; out.e[1] = speck; out.e[2] = clump;
  }, 3);
  return g;
}
function banderillaMaterial() {
  const m = new MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.7, clearcoat: 0.25, clearcoatRoughness: 0.5, specularIntensity: 0.5, sheen: 0.45, sheenColor: new Color('#a02818'), sheenRoughness: 0.8, envMapIntensity: 0.3 });
  return patch(m, {
    vertexHead: 'attribute vec3 aExtra; varying vec3 vBand;',
    vertex: { begin_vertex: 'vBand = aExtra;' },
    fragmentHead: 'varying vec3 vBand;',
    fragment: {
      color_fragment: `
        vec3 bc = mix(vec3(0.16, 0.022, 0.016), vec3(0.3, 0.04, 0.025), vBand.x);
        bc = mix(bc, vec3(0.58, 0.07, 0.03), smoothstep(0.66, 0.76, vBand.y));
        bc = mix(bc, vec3(0.07, 0.012, 0.01), smoothstep(0.3, 0.05, vBand.z) * 0.6);
        diffuseColor.rgb = bc;`,
      roughnessmap_fragment: 'roughnessFactor = mix(0.75, 0.32, smoothstep(0.55, 0.85, vBand.x));',
    },
  }, 'zaca-band');
}

// ---------------------------------------------------------------- build everything
export function buildMangonada({ phone, maxAniso }) {
  const q = phone ? 0.72 : 1;
  const parts = {};
  const root = new Group();

  // cup + print + floor shadow
  const cupG = new Group();
  const cupMat = clearPlastic(0.16, 'zaca-cup');
  const cup = new Mesh(cupGeometry(phone ? 72 : 96), cupMat);
  cup.renderOrder = 2;
  cupG.add(cup);

  const decalH = 0.34, decalY = 0.35, rMid = outerR(decalY + decalH / 2);
  const span = (decalH * DECAL_ASPECT) / rMid;
  const dP = [];
  for (let i = 0; i <= 6; i++) { const y = decalY + (decalH * i) / 6; dP.push(new Vector2(outerR(y) + 0.0022, y)); }
  const decalTex = makeWordmarkTexture(maxAniso, phone ? 1536 : 2048);
  const decal = new Mesh(
    new LatheGeometry(dP, 48, 0.17 - span / 2, span),
    new MeshStandardMaterial({ map: decalTex, emissiveMap: decalTex, emissive: new Color('#ffffff'), emissiveIntensity: 0.22, transparent: true, roughness: 0.45, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }),
  );
  decal.renderOrder = 3;
  cupG.add(decal);

  const shadowTex = makeRadialTexture([[0, 1], [0.35, 0.62], [0.7, 0.16], [1, 0]]);
  const contactTex = makeRadialTexture([[0, 1], [0.45, 0.7], [0.8, 0.12], [1, 0]]);
  const shadowMat = new MeshBasicMaterial({ color: new Color('#6b1e3a'), alphaMap: shadowTex, transparent: true, depthWrite: false, opacity: 0.34 });
  const contactMat = new MeshBasicMaterial({ color: new Color('#4a0f26'), alphaMap: contactTex, transparent: true, depthWrite: false, opacity: 0.5 });
  const shadow = new Mesh(new PlaneGeometry(2.05, 2.05), shadowMat);
  shadow.rotation.x = -Math.PI / 2; shadow.position.set(0.06, 0.001, -0.05); shadow.scale.set(1, 0.85, 1);
  const contact = new Mesh(new PlaneGeometry(1.2, 1.2), contactMat);
  contact.rotation.x = -Math.PI / 2; contact.position.y = 0.002;
  const causticMat = new MeshBasicMaterial({ color: new Color('#ff9a2a'), alphaMap: shadowTex, transparent: true, depthWrite: false, blending: AdditiveBlending, opacity: 0.0 });
  const caustic = new Mesh(new PlaneGeometry(1.2, 1.2), causticMat);
  caustic.rotation.x = -Math.PI / 2; caustic.position.set(-0.38, 0.003, 0.32); caustic.scale.set(1.1, 0.7, 1);
  shadow.renderOrder = contact.renderOrder = caustic.renderOrder = 1;
  const floor = new Group();
  floor.add(shadow, contact, caustic);
  root.add(floor);
  root.add(cupG);
  parts.cup = cupG; parts.floor = floor;

  // chamoy liner
  const linerMat = linerMaterial();
  const linerG = new Group();
  const linerMesh = new Mesh(linerGeometry(phone ? 72 : 96), linerMat);
  linerMesh.position.y = -0.9;
  linerG.add(linerMesh);
  linerG.position.y = 0.9;
  root.add(linerG);
  parts.chamoy = linerG;

  // sorbet
  const sorbetG = new Group();
  const sorbetMesh = new Mesh(sorbetGeometry(Math.round(170 * q), Math.round(144 * q)), sorbetMaterial());
  sorbetMesh.position.y = -0.8;
  sorbetG.add(sorbetMesh);
  sorbetG.position.y = 0.8;
  root.add(sorbetG);
  parts.sorbet = sorbetG; parts.sorbetMesh = sorbetMesh;

  // mango cubes
  const R = rng(19);
  const nCubes = phone ? 26 : 34;
  const cubeMat = new MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.3, clearcoat: 0.45, clearcoatRoughness: 0.18, specularIntensity: 0.6, sheen: 0.15, sheenColor: new Color('#ffa030'), sheenRoughness: 0.45, envMapIntensity: 0.32 });
  patch(cubeMat, {
    uniforms: { uChamoy: { value: PAL.chamoy }, uTajin: { value: PAL.tajin } },
    vertexHead: 'attribute float aCoat; varying float vCoat; varying vec3 vCL;',
    vertex: { begin_vertex: 'vCoat = aCoat; vCL = position;' },
    fragmentHead: `${NOISE_GLSL}\nvarying float vCoat; varying vec3 vCL; uniform vec3 uChamoy, uTajin;`,
    fragment: {
      color_fragment: `
        float fib = zNoise(vCL * vec3(3.0, 24.0, 3.0) + vCoat * 9.0);
        diffuseColor.rgb *= 0.86 + 0.26 * fib;
        float ct = vCoat * smoothstep(0.42, 0.62, zNoise(vCL * 3.5 + vCoat * 13.0) + vCL.y * 0.9);
        diffuseColor.rgb = mix(diffuseColor.rgb, uChamoy * 1.1, ct * 0.9);
        float fl = smoothstep(0.8, 0.86, zNoise(vCL * 30.0 + 4.0)) * (0.35 + 0.65 * vCoat);
        diffuseColor.rgb = mix(diffuseColor.rgb, uTajin * 0.85, fl);`,
      emissivemap_fragment: 'totalEmissiveRadiance += diffuseColor.rgb * 0.1;',
    },
  }, 'zaca-cube');
  const cubeGeo = new RoundedBoxGeometry(1, 1, 1, 2, 0.17);
  const coat = new Float32Array(nCubes);
  const cubes = new InstancedMesh(cubeGeo, cubeMat, nCubes);
  cubes.instanceMatrix.setUsage(DynamicDrawUsage);
  const mangoShades = ['#F59A12', '#F08A0C', '#F7A825', '#E87C0A', '#FAB232', '#F39612'].map((c) => new Color(c));
  const cubeData = [];
  for (let i = 0; i < nCubes; i++) {
    const s = 0.15 + R() * 0.06;
    const scale = [s * (0.9 + R() * 0.2), s * (0.85 + R() * 0.2), s * (0.9 + R() * 0.2)];
    // assembled: a third crown the top, a third press against the wall, the rest hide inside
    let ax, ay, az;
    const th = R() * Math.PI * 2;
    if (i < nCubes * 0.42) { const rr = Math.sqrt(R()) * 0.42; ay = 1.45 + R() * 0.1 - rr * 0.18; ax = Math.sin(th) * rr; az = Math.cos(th) * rr; }
    else if (i < nCubes * 0.8) { ay = 0.3 + R() * 1.0; const rr = innerR(ay) - s * 0.44; ax = Math.sin(th) * rr; az = Math.cos(th) * rr; }
    else { ay = 0.3 + R() * 1.0; const rr = R() * 0.25; ax = Math.sin(th) * rr; az = Math.cos(th) * rr; }
    // exploded: a loose double ring hovering above the sorbet
    const ring = i % 3 === 0 ? 0.3 : 0.62;
    const eth = (i / nCubes) * Math.PI * 2 * 2.0 + R() * 0.25;
    const e = [Math.sin(eth) * (ring + R() * 0.08), 4.72 + (R() - 0.5) * 0.2 + (ring < 0.4 ? 0.08 : 0), Math.cos(eth) * (ring + R() * 0.08)];
    cubeData.push({
      a: [ax, ay, az], e, scale,
      ra: [R() * 6, R() * 6, R() * 6], re: [R() * 0.6 - 0.3, R() * 6, R() * 0.6 - 0.3],
      d: (R() - 0.5) * 0.05,
    });
    cubes.setColorAt(i, mangoShades[i % mangoShades.length]);
    coat[i] = i < nCubes * 0.42 ? 0.65 + R() * 0.35 : R() * 0.5;
  }
  cubeGeo.setAttribute('aCoat', new InstancedBufferAttribute(coat, 1));
  cubes.userData.coat = coat;
  root.add(cubes);
  parts.cubes = cubes; parts.cubeData = cubeData;

  // Tajín flakes
  const nT = phone ? 650 : 1100;
  const tGeo = new OctahedronGeometry(1, 0);
  const tMat = new MeshStandardMaterial({ color: 0xffffff, roughness: 0.78, envMapIntensity: 0.5 });
  const tajin = new InstancedMesh(tGeo, tMat, nT);
  tajin.instanceMatrix.setUsage(DynamicDrawUsage);
  const tShades = ['#D9432B', '#C9361F', '#E85A33', '#A82A1C', '#F0703E', '#B8301E'].map((c) => new Color(c));
  const tData = [];
  for (let i = 0; i < nT; i++) {
    const s = 0.0075 + R() * 0.0095;
    let a;
    const th = R() * Math.PI * 2;
    if (i < nT * 0.75) { // dusted over the sorbet crown
      const rr = Math.sqrt(R()) * 0.5;
      const yTop = 1.31 + (1.585 - 1.31) * Math.sqrt(Math.max(0, 1 - (rr / 0.585) ** 2));
      a = [Math.sin(th) * rr, yTop + 0.012 + R() * 0.02, Math.cos(th) * rr];
    } else { // caught on the chamoy rim
      const y = 1.42 + R() * 0.15; const rr = innerR(y) - 0.02 - R() * 0.03;
      a = [Math.sin(th) * rr, y, Math.cos(th) * rr];
    }
    const er = Math.pow(R(), 0.6) * 0.88;
    const eth = R() * Math.PI * 2;
    const e = [Math.sin(eth) * er, 5.28 + (R() - 0.5) * 0.12 * (1.2 - er), Math.cos(eth) * er];
    tData.push({ a, e, s: [s * (0.7 + R() * 0.6), s * (0.45 + R() * 0.4), s * (0.7 + R() * 0.6)], r: [R() * 6, R() * 6, R() * 6], d: (R() - 0.5) * 0.06, swirl: 0.8 + R() * 1.4 });
    tajin.setColorAt(i, tShades[Math.floor(R() * tShades.length)]);
  }
  root.add(tajin);
  parts.tajin = tajin; parts.tajinData = tData;

  // banderilla
  const bandG = new Group();
  const bandInner = new Group();
  const coatMesh = new Mesh(banderillaGeometry(Math.round(90 * q), Math.round(40 * q)), banderillaMaterial());
  const stick = new Mesh(new CylinderGeometry(0.02, 0.022, BAND.stick + 0.1, 12, 1), new MeshPhysicalMaterial({ color: new Color('#E9D3A6'), roughness: 0.7, sheen: 0.2 }));
  stick.position.y = -BAND.len / 2 - BAND.stick / 2 + 0.05;
  bandInner.add(coatMesh, stick);
  bandG.add(bandInner);
  root.add(bandG);
  parts.band = bandG;

  // lid + straw
  const lidG = new Group();
  const lidMat = clearPlastic(0.1, 'zaca-lid');
  const lid = new Mesh(lidGeometry(phone ? 72 : 96), lidMat);
  lid.renderOrder = 4;
  lid.position.y = -1.65;
  lidG.add(lid);
  lidG.position.y = 1.65;
  root.add(lidG);
  parts.lid = lidG;

  const strawG = new Group();
  const straw = new Mesh(new CylinderGeometry(0.041, 0.041, 1.26, 24, 1, true), new MeshPhysicalMaterial({ color: new Color('#C2185B'), roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.08, side: DoubleSide }));
  strawG.add(straw);
  strawG.position.y = 1.53;
  root.add(strawG);
  parts.straw = strawG;

  parts.mats = { cupMat, lidMat, linerMat, causticMat, shadowMat, contactMat };
  parts.root = root;
  parts.BAND = BAND;
  return parts;
}
