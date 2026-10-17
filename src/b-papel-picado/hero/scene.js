// Papel picado hero scene. Choreography is a pure function of p ∈ [0,1]; time only drives ambient
// wind / flutter / pointer billow on top of it. Rendering: a small WebGL2 layer (gl.js) + three.js math.
import { Vector3 } from 'three/src/math/Vector3.js';
import { Vector4 } from 'three/src/math/Vector4.js';
import { Renderer, PerspCamera, OrthoCamera, box } from './gl.js';
import * as SH from './shaders.js';
import { rasterizeAtlas, TILE, HEADER, tileRect } from './atlas.js';
import { PRODUCTS } from './products.js';
import zacSvg from '../../../assets/brand/zacatecas.svg';
import wordmarkSvg from '../../../assets/brand/wordmark.svg';

const MAXS = SH.MAX_STR;
const MAXF = 200;
export const COUNTER_HEX = '#EE8DB2'; // = --counter on .hero--b = #antojo's top edge

// ---------------------------------------------------------------- palette
const HEX = {
  magenta: '#D6246E', sunflower: '#F7C815', green: '#2E9E5B', pink: '#F0567A', mango: '#F39A1E',
  cream: '#FFF6E8', chamoy: '#A3182E', yellowWall: '#F2C418', counter: COUNTER_HEX, cantera: '#E7A9AE',
  pinkWall: '#EC8DB0', white: '#F6F1EA', top: '#F4F1EC', ceiling: '#F3E6DA',
};
const srgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
const lin = (hex) => srgb(hex).map((c) => Math.pow(c, 2.2));
const v3 = (a) => new Vector3(a[0], a[1], a[2]);

const MOTIF_COLORS = ['magenta', 'sunflower', 'green', 'pink', 'mango', 'cream', 'magenta', 'green', 'sunflower', 'chamoy', 'mango', 'pink'];
const LETTER_COLORS = ['magenta', 'green', 'mango', 'chamoy', 'green', 'magenta', 'mango'];
const MOTIFS = [TILE.cone, TILE.strawberry, TILE.elote, TILE.chile, TILE.cactus, TILE.zacatecas, TILE.dalia, TILE.paleta];

// key light: warm daylight from the upper left, high enough that the tissue's light falls well below it
const LDIR = new Vector3(-0.34, 0.6, 0.72).normalize();
const KEY = [1.0, 0.92, 0.8].map((c) => c * 1.5);
const SKY = [0.6, 0.68, 0.86].map((c) => c * 0.34);
const BOUNCE = [0.55, 0.36, 0.34].map((c) => c * 0.2);

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => { t = clamp01(t); return t * t * (3 - 2 * t); };
const smoother = (t) => { t = clamp01(t); return t * t * t * (t * (t * 6 - 15) + 10); };
const span = (p, a, b) => clamp01((p - a) / (b - a));
const fract = (x) => x - Math.floor(x);
const rnd = (n) => fract(Math.sin(n * 127.1 + 311.7) * 43758.5453);

export function webglAvailable() {
  try { return !!document.createElement('canvas').getContext('webgl2'); } catch (e) { return false; }
}

function svgToCanvas(svgText, width, height) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(new Blob([svgText], { type: 'image/svg+xml' }));
    const img = new Image();
    img.onload = () => {
      const cv = document.createElement('canvas');
      cv.width = width; cv.height = height;
      cv.getContext('2d').drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url);
      resolve(cv);
    };
    img.onerror = (e) => { URL.revokeObjectURL(url); reject(e); };
    img.src = url;
  });
}
function wordmarkFallback() {
  const cv = document.createElement('canvas');
  cv.width = 2048; cv.height = 434;
  const g = cv.getContext('2d');
  g.font = '700 230px Fredoka, "Lilita One", system-ui, sans-serif';
  g.textBaseline = 'middle'; g.lineJoin = 'round';
  g.lineWidth = 28; g.strokeStyle = '#fff'; g.strokeText('La Zacatecana', 60, 200);
  g.fillStyle = '#C2185B'; g.fillText('La Zacatecana', 60, 200);
  return cv;
}

function bezier(a, c, e, t) {
  const r = 1 - t;
  return new Vector3().addScaledVector(a, r * r).addScaledVector(c, 2 * r * t).addScaledVector(e, t * t);
}

// reveal of the opening (wall thickness) + protruding sill, normals facing into the opening
function revealArrays(hw, ySill, ySpring, depth, sill) {
  const P = [], N = [], I = [];
  const quad = (a, b, c, d, n) => {
    const o = P.length / 3;
    P.push(...a, ...b, ...c, ...d); for (let i = 0; i < 4; i++) N.push(...n);
    I.push(o, o + 1, o + 2, o, o + 2, o + 3);
  };
  const pts = [[-hw, ySill], [-hw, ySpring]];
  const n = 28;
  for (let i = 1; i < n; i++) { const a = Math.PI - (i / n) * Math.PI; pts.push([Math.cos(a) * hw, ySpring + Math.sin(a) * hw]); }
  pts.push([hw, ySpring], [hw, ySill]);
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i], [x1, y1] = pts[i + 1];
    let nx = -(y1 - y0), ny = x1 - x0; const l = Math.hypot(nx, ny); nx /= l; ny /= l;
    quad([x0, y0, 0], [x0, y0, -depth], [x1, y1, -depth], [x1, y1, 0], [-nx, -ny, 0]);
  }
  const { hx, th, pr } = sill;
  const y0 = ySill - th, y1 = ySill, z0 = -depth, z1 = pr;
  quad([-hx, y1, z1], [hx, y1, z1], [hx, y1, z0], [-hx, y1, z0], [0, 1, 0]);
  quad([-hx, y0, z1], [hx, y0, z1], [hx, y1, z1], [-hx, y1, z1], [0, 0, 1]);
  quad([-hx, y0, z0], [hx, y0, z0], [hx, y0, z1], [-hx, y0, z1], [0, -1, 0]);
  quad([-hx, y0, z0], [-hx, y0, z1], [-hx, y1, z1], [-hx, y1, z0], [-1, 0, 0]);
  quad([hx, y0, z1], [hx, y0, z0], [hx, y1, z0], [hx, y1, z1], [1, 0, 0]);
  return { position: new Float32Array(P), normal: new Float32Array(N), index: I };
}

// ---------------------------------------------------------------- scene
export async function createScene({ canvas, stage, getCopyRect, phone, assetBase = 'assets/', hiDpi = false }) {
  const r = new Renderer(canvas);

  // ---- textures: flag atlas (SVG → Image → canvas) and the brand wordmark
  const [atlasCanvas, markCanvas] = await Promise.all([
    rasterizeAtlas(zacSvg),
    svgToCanvas(wordmarkSvg, 2048, Math.round((2048 * 230) / 1087)).catch(() => wordmarkFallback()),
  ]);
  const atlas = r.texture(atlasCanvas, { flipY: false, aniso: 8 });
  const mark = r.texture(markCanvas, { flipY: true, aniso: 8 });

  // ---- fullscreen triangle + one-time cantera bake (tileable mottling / grain / pores / clasts)
  const fsGeo = r.geometry({ attributes: {
    position: { array: new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), size: 3 },
    uv: { array: new Float32Array([0, 0, 2, 0, 0, 2]), size: 2 },
  } });
  const fsCam = new OrthoCamera().update();
  const stoneRT = r.target(1024, 1024, { wrap: 'repeat', mip: true });
  r.setTarget(stoneRT);
  r.draw({ geo: fsGeo, vs: SH.FS_VS, fs: SH.STONE_BAKE_FS, depthTest: false, depthWrite: false }, fsCam);
  r.finishTarget(stoneRT);

  // ---- light's-eye transmittance targets: crisp render, then a wide separable blur at half resolution
  const shSize = phone ? [1024, 1024] : [2048, 1280];
  const shA = r.target(shSize[0], shSize[1]);
  const shB = r.target(shSize[0] / 2, shSize[1] / 2);
  const shC = r.target(shSize[0] / 2, shSize[1] / 2);
  const lightCam = new OrthoCamera();
  lightCam.near = 0.1; lightCam.far = 60;

  // ---- shared uniforms
  const U = {
    uA: { value: Array.from({ length: MAXS }, () => new Vector3(0, -50, 0)) },
    uC: { value: Array.from({ length: MAXS }, () => new Vector3(0, -50, 0)) },
    uE: { value: Array.from({ length: MAXS }, () => new Vector3(0, -50, 0)) },
    uFl: { value: new Float32Array(MAXS).fill(1) },
    uLv: { value: new Float32Array(MAXS).fill(0.25) },
    uGa: { value: new Float32Array(MAXS).fill(0) },
    uTime: { value: 0 },
    uWind: { value: 1 },
    uPtrO: { value: new Vector3(0, 0, 50) },
    uPtrD: { value: new Vector3(0, 0, -1) },
    uPtrAmt: { value: 0 },
    uPtrR: { value: 0.5 },
    uAtlas: { value: atlas },
    uHeader: { value: HEADER },
    uL: { value: LDIR.clone() },
    uKey: { value: v3(KEY) },
    uSky: { value: v3(SKY) },
    uBounce: { value: v3(BOUNCE) },
    uRes: { value: [1, 1] },
    uVig: { value: 0.32 },
  };

  // ---- flags: one instanced draw for every flag outside and inside the shop
  const NX = phone ? 9 : 10, NY = phone ? 12 : 14;
  const grid = [], gidx = [];
  for (let j = 0; j <= NY; j++) for (let i = 0; i <= NX; i++) grid.push(i / NX, j / NY, 0);
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) { const a = j * (NX + 1) + i, b = a + 1, c = a + NX + 1, d = c + 1; gidx.push(a, c, b, b, c, d); }
  const aT = new Float32Array(MAXF * 2), aTile = new Float32Array(MAXF * 4), aCol = new Float32Array(MAXF * 3), aMisc = new Float32Array(MAXF * 4);
  const flagGeo = r.geometry({ attributes: {
    position: { array: new Float32Array(grid), size: 3 },
    iT: { array: aT, size: 2, divisor: 1, dynamic: true },
    iTile: { array: aTile, size: 4, divisor: 1, dynamic: true },
    iCol: { array: aCol, size: 3, divisor: 1, dynamic: true },
    iMisc: { array: aMisc, size: 4, divisor: 1, dynamic: true },
  }, index: gidx });
  flagGeo.instanceCount = 0;
  const flags = { geo: flagGeo, vs: SH.FLAG_VS, fs: SH.FLAG_FS, uniforms: U, cull: 'none', a2c: true };
  const flagsSh = { geo: flagGeo, vs: SH.FLAG_SH_VS, fs: SH.FLAG_SH_FS, uniforms: U, cull: 'none', depthTest: false, depthWrite: false, blend: 'multiply-min' };

  // ---- cords
  const cp = [], ci = [];
  for (let s = 0; s < MAXS; s++) {
    const base = cp.length / 3, seg = 48;
    for (let i = 0; i <= seg; i++) cp.push(i / seg, -1, s, i / seg, 1, s);
    for (let i = 0; i < seg; i++) { const a = base + i * 2; ci.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  }
  const cordGeo = r.geometry({ attributes: { position: { array: new Float32Array(cp), size: 3 } }, index: ci });
  const cordU = { ...U, uW: { value: 0.006 }, uView: { value: LDIR.clone() }, uUseView: { value: 0 } };
  const cords = { geo: cordGeo, vs: SH.CORD_VS, fs: SH.CORD_FS, uniforms: cordU, cull: 'none' };
  const cordsSh = { geo: cordGeo, vs: SH.CORD_SH_VS, fs: SH.CORD_SH_FS, uniforms: { ...cordU, uUseView: { value: 1 } }, cull: 'none', depthTest: false, depthWrite: false, blend: 'multiply-min' };

  // ---- cantera façade with an arched opening, its reveal and sill
  const WALL = { hw: 1.0, hRect: 1.25, ySill: 1.05, depth: 0.45 };
  WALL.ySpring = WALL.ySill + WALL.hRect;
  const sill = { hx: WALL.hw + 0.16, th: 0.12, pr: 0.15 };
  // albedo calibration: a sunlit, unshadowed, average block lands on the cantera hex
  const calib = (() => {
    const tgt = lin(HEX.cantera), c0 = [0.85, 0.6, 0.62].map((c) => Math.pow(c, 2.2));
    return tgt.map((t, i) => t / (c0[i] * (KEY[i] * LDIR.z + SKY[i] * 0.62 + BOUNCE[i] * 0.5)));
  })();
  const wallU = {
    ...U,
    uStone: { value: stoneRT },
    uShA: { value: shA },
    uShB: { value: shC },
    uLightVP: { value: lightCam.viewProj },
    uWin: { value: [0, WALL.ySill, WALL.ySpring, WALL.hw] },
    uSill: { value: [sill.hx, sill.th, sill.pr, WALL.depth] },
    uAlb: { value: v3(calib) },
    uShOn: { value: 1 },
    uSoft: { value: 1 },
    uIsJamb: { value: 0 },
  };
  const X = 40, Y0 = -30, Y1 = 40;
  const wall = { geo: r.geometry({ attributes: {
    position: { array: new Float32Array([-X, Y0, 0, X, Y0, 0, X, Y1, 0, -X, Y1, 0]), size: 3 },
    normal: { array: new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]), size: 3 },
  }, index: [0, 1, 2, 0, 2, 3] }), vs: SH.WALL_VS, fs: SH.WALL_FS, uniforms: wallU, cull: 'none' };
  const rv = revealArrays(WALL.hw, WALL.ySill, WALL.ySpring, WALL.depth, sill);
  const reveal = { geo: r.geometry({ attributes: { position: { array: rv.position, size: 3 }, normal: { array: rv.normal, size: 3 } }, index: rv.index }),
    vs: SH.WALL_VS, fs: SH.WALL_FS, uniforms: { ...wallU, uIsJamb: { value: 1 } }, cull: 'none' };

  // ---- interior: one box for the room (seen from inside), one for the counter
  const ROOM = { x0: -3.8, x1: 3.8, y0: 0, y1: 3.6, z0: -5.6, z1: -WALL.depth };
  const CTR = { x0: -2.3, x1: 2.3, h: 1.02, zf: ROOM.z0 + 1.6, depth: 0.65 };
  const roomU = {
    uMark: { value: mark },
    uMarkRect: { value: [-1, 1.6, 2, 0.4] },
    uMin: { value: new Vector3(ROOM.x0, ROOM.y0, ROOM.z0) },
    uMax: { value: new Vector3(ROOM.x1, ROOM.y1, ROOM.z1) },
    uYellow: { value: v3(lin(HEX.yellowWall)) },
    uPinkWall: { value: v3(lin(HEX.pinkWall)) },
    uWhite: { value: v3(lin(HEX.white)) },
    uCeil: { value: v3(lin(HEX.ceiling)) },
    uExpo: { value: 0.85 },
    uRes: U.uRes, uVig: U.uVig,
    uWainscot: { value: 1.3 },
  };
  const rb = box(ROOM.x1 - ROOM.x0, ROOM.y1 - ROOM.y0, ROOM.z1 - ROOM.z0, (ROOM.x0 + ROOM.x1) / 2, (ROOM.y0 + ROOM.y1) / 2, (ROOM.z0 + ROOM.z1) / 2);
  const room = { geo: r.geometry({ attributes: { position: { array: rb.position, size: 3 }, normal: { array: rb.normal, size: 3 } }, index: rb.index }),
    vs: SH.WALL_VS, fs: SH.ROOM_FS, uniforms: roomU, cull: 'front' };
  const counterU = {
    uPink: { value: v3(lin(HEX.counter)) },
    uTop: { value: v3(lin(HEX.top)) },
    uH: { value: CTR.h },
    uExpo: roomU.uExpo, uRes: U.uRes, uVig: U.uVig,
    uFlat: { value: 0 },
    uProd: { value: Array.from({ length: 4 }, () => new Vector4(99, 99, 0.01, 0.01)) },
    uProdOn: { value: 0 },
  };
  const cb = box(CTR.x1 - CTR.x0, CTR.h, CTR.depth, (CTR.x0 + CTR.x1) / 2, CTR.h / 2, CTR.zf - CTR.depth / 2);
  const counter = { geo: r.geometry({ attributes: { position: { array: cb.position, size: 3 }, normal: { array: cb.normal, size: 3 } }, index: cb.index }),
    vs: SH.WALL_VS, fs: SH.COUNTER_FS, uniforms: counterU, cull: 'back' };

  // ---- real product cutouts on the counter ("the counter becomes the menu"), loaded after first paint
  const pRect = new Float32Array(16), pPos = new Float32Array(16), pAsp = new Float32Array(4);
  const prodGeo = r.geometry({ attributes: {
    position: { array: new Float32Array([0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0]), size: 3 },
    iRect: { array: pRect, size: 4, divisor: 1, dynamic: true },
    iPos: { array: pPos, size: 4, divisor: 1, dynamic: true },
    iAsp: { array: pAsp, size: 1, divisor: 1, dynamic: true },
  }, index: [0, 1, 2, 0, 2, 3] });
  prodGeo.instanceCount = 0;
  const prodU = { uTex: { value: null }, uExpo: roomU.uExpo, uFade: { value: 1 } };
  const products = { geo: prodGeo, vs: SH.PROD_VS, fs: SH.PROD_FS, uniforms: prodU, cull: 'none', a2c: true, visible: false };
  {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => {
      if (r.gl.isContextLost()) return;
      prodU.uTex.value = r.texture(img, { flipY: false, aniso: 4 });
      products.visible = true;
      counterU.uProdOn.value = 1;
    };
    // Opened straight from disk (file://), Chrome won't upload file images to WebGL, so the build
    // also ships the same image as a data URI in products.data.js; load that instead.
    if (location.protocol === 'file:') {
      const sc = document.createElement('script');
      sc.src = assetBase + 'products.data.js';
      sc.onload = () => { if (window.__LZ_B_PRODUCTS) img.src = window.__LZ_B_PRODUCTS; };
      document.head.appendChild(sc);
    } else img.src = assetBase + 'products.webp';
  }

  const blurU = { uTex: { value: shA }, uDir: { value: [1, 0] } };
  const blur = { geo: fsGeo, vs: SH.FS_VS, fs: SH.BLUR_FS, uniforms: blurU, depthTest: false, depthWrite: false };
  const camera = new PerspCamera(40, 1, 0.05, 80);

  // ---------------------------------------------------------------- layout (viewport-dependent, not p-dependent)
  let L = null;
  const strings = [];

  function layout(W, H) {
    const a = W / H;
    const copy = getCopyRect ? getCopyRect() : null;
    const portrait = a < 0.9;
    const fov0 = portrait ? 50 : 36;
    const fov1 = portrait ? 50 : 38;
    const t0 = Math.tan((fov0 * Math.PI) / 360);
    // the arched opening sits above the copy on phones and beside it on desktop
    let fw, sxw, sySill;
    if (portrait) {
      fw = 0.54; sxw = 0.5;
      sySill = copy ? Math.min(0.7, (copy.top - 46) / H) : 0.62;
    } else {
      fw = Math.min(0.3, 0.34 / a);
      const right = copy ? copy.right / W : 0.46;
      sxw = Math.min(0.8, right + (1 - right) * 0.5);
      sySill = copy ? Math.min(0.93, copy.bottom / H) : 0.9;
    }
    const visW = (2 * WALL.hw) / fw;
    const visH = visW / a;
    const D = visH / (2 * t0);
    const cx = -(sxw - 0.5) * visW;
    const cy = WALL.ySill - (0.5 - sySill) * visH;

    // interior framing at p = 1: counter top and wordmark land where we want them
    const t1 = Math.tan((fov1 * Math.PI) / 360);
    const syCt = portrait ? 0.62 : 0.63;
    const dC = portrait ? 1.9 : 2.6;
    const ycam1 = CTR.h + (syCt - 0.5) * 2 * dC * t1;
    const zcam1 = CTR.zf + dC;
    const dY = zcam1 - ROOM.z0;
    const syWm = portrait ? 0.305 : 0.31;
    const yWm = ycam1 + (0.5 - syWm) * 2 * dY * t1;
    const Ww = Math.min(2.5, (portrait ? 0.86 : 0.5) * 2 * dY * t1 * a);
    const Wh = (Ww * 230) / 1087;
    roomU.uMarkRect.value = [-Ww / 2, yWm - Wh / 2, Ww, Wh];

    // ---- strings: screen-space design (y at the left / right edges + extra dip at the centre) at a depth
    // in front of the wall. Each string is two halves joined at the centre: the curtain parts there.
    // Phones: three strings, letters lowest/front. Desktop: the letter banner rides highest/front with two
    // motif strings below it, leaving clear air above the copy.
    const design = portrait
      ? [ { yl: 0.085, yr: 0.135, dip: 0.022, z: 0.4, kind: 'motif' },
          { yl: 0.19, yr: 0.165, dip: 0.022, z: 0.65, kind: 'motif' },
          { yl: 0.305, yr: 0.305, dip: 0.026, z: 1.0, kind: 'letters' } ]
      : [ { yl: 0.095, yr: 0.095, dip: 0.036, z: 1.05, kind: 'letters' },
          { yl: 0.195, yr: 0.17, dip: 0.08, z: 0.5, kind: 'motif' },
          { yl: 0.275, yr: 0.3, dip: 0.07, z: 0.75, kind: 'motif' } ];
    const motifPitch = portrait ? W / 4.6 : Math.max(64, Math.min(92, W * 0.053));
    strings.length = 0;
    const inst = [];
    const word = ['dalia', 'L', 'A', 'zacatecas', 'Z', 'A', 'C', 'A', 'T', 'E', 'C', 'A', 'N', 'A', 'dalia'];
    const letters = portrait ? word.slice(1, 14) : word;
    let colorIx = 0, letterIx = 0;

    // half-string builder: parabola y = yM + b·X + k·X² around the joint x0 (X = x − x0)
    function addHalves({ x0, z, yM, b, k, Wd, st, lift, kinds, pitch, fwid, fh, interior }) {
      for (const side of [-1, 1]) {
        const Xa = side * Wd;
        const yA = yM + b * Xa + k * Xa * Xa;
        const slope = b + 2 * k * Xa;
        const A0 = new Vector3(x0 + Xa, yA, z);
        const E0 = new Vector3(x0, yM, z);
        const C0 = new Vector3(x0 + Xa / 2, yA - slope * (Xa / 2), z);
        const N = 96, tab = [0];
        let prev = bezier(A0, C0, E0, 1), acc = 0;
        for (let j = 1; j <= N; j++) { const pt = bezier(A0, C0, E0, 1 - j / N); acc += pt.distanceTo(prev); prev = pt; tab.push(acc); }
        const tAt = (sArc) => {
          for (let j = 1; j <= N; j++) if (tab[j] >= sArc) { const f = (sArc - tab[j - 1]) / (tab[j] - tab[j - 1]); return 1 - (j - 1 + f) / N; }
          return 0;
        };
        const hs = strings.length;
        strings.push({ side, A0, C0, E0, Wd, hv: Wd / 1.3, z, lift, st, interior: !!interior });
        kinds(side).forEach((kind, e) => {
          const c = (e + 0.5) * pitch;
          const ta = tAt(c - fwid / 2), tb = tAt(c + fwid / 2);
          const lo = Math.min(ta, tb), hi = Math.max(ta, tb);
          const isLetter = typeof kind === 'string' && kind.length === 1;
          const tile = typeof kind === 'number' ? kind : TILE[kind];
          const colName = isLetter ? null : MOTIF_COLORS[(colorIx++) % MOTIF_COLORS.length];
          inst.push({ t0: side < 0 ? lo : hi, t1: side < 0 ? hi : lo, tile, hs, fh, fw: fwid, isLetter, colName, side, e });
        });
      }
    }

    const nOut = design.length;
    design.forEach((d, i) => {
      const sc = (D - d.z) / D;
      const hv = (visW * sc) / 2;
      const yAt = (sy) => cy + (0.5 - sy) * visH * sc;
      const yl = yAt(d.yl), yr = yAt(d.yr), yM = (yl + yr) / 2 - d.dip * visH * sc;
      const bb = (yr - yl) / (2 * hv), kk = ((yl + yr) / 2 - yM) / (hv * hv);
      const isLetters = d.kind === 'letters';
      const pitchPx = isLetters ? Math.min(motifPitch * (portrait ? 1 : 1.1), (W * (portrait ? 0.975 : 0.9)) / letters.length) : motifPitch * (1 - i * 0.04);
      const pitch = (pitchPx / W) * visW * sc;
      const fwid = pitch * (isLetters ? 0.9 : 0.85);
      const fh = fwid * 1.25;
      const nL = isLetters ? Math.ceil(letters.length / 2) : 0;
      const x0 = cx + (isLetters && letters.length % 2 ? pitch / 2 : 0);
      const ytop = cy + (visH * sc) / 2;
      const lift = ytop - Math.min(yl, yr) + fh * 1.4 + 0.5;
      // the front-most string parts first
      const order = [...design].sort((p1, p2) => p2.z - p1.z).indexOf(d);
      addHalves({
        x0, z: d.z, yM, b: bb, k: kk, Wd: hv * 1.3, st: order * 0.05, lift, pitch, fwid, fh,
        kinds: (side) => {
          const seq = [];
          if (isLetters) {
            seq.push(...(side < 0 ? letters.slice(0, nL).reverse() : letters.slice(nL)));
            const extra = Math.ceil(hv / pitch) + 1 - seq.length;
            for (let e = 0; e < extra; e++) seq.push(MOTIFS[(e * 3 + (side > 0 ? 1 : 4)) % MOTIFS.length]);
          } else {
            const n = Math.ceil(hv / pitch) + 1;
            for (let e = 0; e < n; e++) seq.push(MOTIFS[Math.floor(rnd(i * 31 + e * 7 + (side > 0 ? 3 : 0)) * MOTIFS.length)]);
          }
          return seq;
        },
      });
    });
    void nOut;

    // ---- papel picado inside the shop (half-strings 8–13; the light pass skips them): two strings across the
    // room near the ceiling (seen while passing through the arch) and one along the top of the logo wall.
    while (strings.length < 8) strings.push({ unused: true });
    const interiorString = (zI, yTopSy, dip, pitch, seed) => {
      const dI = Math.max(0.6, zcam1 - zI);
      const yTopI = Math.min(ROOM.y1 - 0.12, ycam1 + (0.5 - yTopSy) * 2 * dI * t1);
      const hvI = Math.min(ROOM.x1 - 0.1, dI * t1 * a + 0.2);
      addHalves({
        x0: 0, z: zI, yM: yTopI - dip, b: 0, k: dip / (hvI * hvI), Wd: hvI * 1.12, st: 2, lift: 0,
        pitch, fwid: pitch * 0.86, fh: pitch * 0.86 * 1.25, interior: true,
        kinds: (side) => { const n = Math.ceil(hvI / pitch) + 1; const q = []; for (let e = 0; e < n; e++) q.push(MOTIFS[(e * 3 + seed + (side > 0 ? 5 : 1)) % MOTIFS.length]); return q; },
      });
    };
    interiorString(ROOM.z0 + 0.45, 0.085, portrait ? 0.12 : 0.08, portrait ? 0.24 : 0.25, 0);
    // these two hang near the ceiling of the front of the room: overhead on the way in, out of frame at p = 1
    const ceilStr = (zI, dip, seed) => {
      const yTop = ROOM.y1 - 0.1, hvI = ROOM.x1 - 0.1, pitch = 0.27;
      addHalves({
        x0: 0, z: zI, yM: yTop - dip, b: 0, k: dip / (hvI * hvI), Wd: hvI, st: 2, lift: 0,
        pitch, fwid: pitch * 0.86, fh: pitch * 0.86 * 1.25, interior: true,
        kinds: (side) => { const q = []; for (let e = 0; e < Math.ceil(hvI / pitch); e++) q.push(MOTIFS[(e * 5 + seed + (side > 0 ? 2 : 0)) % MOTIFS.length]); return q; },
      });
    };
    ceilStr(-1.1, 0.42, 3);
    ceilStr(-2.6, 0.36, 6);

    inst.filter((f) => f.isLetter)
      .sort((p1, p2) => (p1.side * (p1.e + 0.5)) - (p2.side * (p2.e + 0.5)))
      .forEach((f) => { f.colName = LETTER_COLORS[(letterIx++) % LETTER_COLORS.length]; });
    inst.forEach((f, n) => {
      if (n >= MAXF) return;
      aT[n * 2] = f.t0; aT[n * 2 + 1] = f.t1;
      aTile.set(tileRect(f.tile), n * 4);
      aCol.set(lin(HEX[f.colName]), n * 3);
      aMisc.set([f.hs, rnd(n * 3.7 + 1.3), f.fh, f.fw], n * 4);
    });
    flagGeo.instanceCount = Math.min(MAXF, inst.length);
    ['iT', 'iTile', 'iCol', 'iMisc'].forEach((k) => flagGeo.update(k));

    // ---- products across the counter top, tall ones at the ends, framed for p = 1
    {
      const order = portrait ? [1, 2, 3] : [1, 0, 2, 3];
      const zP = CTR.zf - 0.2;
      const fwC = 2 * (zcam1 - zP) * t1 * a;
      const spread = fwC * (portrait ? 0.68 : 0.56);
      const scl = portrait ? 0.82 : 1.05;
      order.forEach((pi, j) => {
        const P = PRODUCTS[pi];
        const xP = -spread / 2 + (spread * j) / (order.length - 1);
        pRect.set(P.uv, j * 4);
        pPos.set([xP, CTR.h - 0.004, zP, P.h * scl], j * 4);
        pAsp[j] = P.aspect;
        counterU.uProd.value[j].set(xP, zP + 0.01, P.h * scl * P.aspect * 0.42, 0.07);
      });
      for (let j = order.length; j < 4; j++) counterU.uProd.value[j].set(99, 99, 0.01, 0.01);
      prodGeo.instanceCount = order.length;
      ['iRect', 'iPos', 'iAsp'].forEach((k) => prodGeo.update(k));
    }

    L = { W, H, a, portrait, fov0, fov1, D, cx, cy, visW, visH, ycam1, zcam1, yWinMid: WALL.ySill + 1.05 };
    U.uPtrR.value = visW * 0.07;
    cordU.uW.value = Math.max(0.0035, visW * 0.0011);

    // light camera covers the visible wall at p = 0 (+ margins), looking along −LDIR
    lightCam.position.set(cx, cy, 0).addScaledVector(LDIR, 20);
    lightCam.lookAt(new Vector3(cx, cy, 0));
    lightCam.update();
    let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
    for (const [px, py] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
      const v = new Vector3(cx + px * visW * 0.62, cy + py * visH * 0.62, 0).applyMatrix4(lightCam.view);
      x0 = Math.min(x0, v.x); x1 = Math.max(x1, v.x); y0 = Math.min(y0, v.y); y1 = Math.max(y1, v.y);
    }
    Object.assign(lightCam, { left: x0, right: x1, top: y1, bottom: y0 });
    lightCam.update();
  }

  // ---------------------------------------------------------------- choreography: pure in p
  const tmp = new Vector3();
  const cubic = (a, b, c, d, u, out) => {
    const v = 1 - u;
    return out.set(0, 0, 0).addScaledVector(a, v * v * v).addScaledVector(b, 3 * v * v * u).addScaledVector(c, 3 * v * u * u).addScaledVector(d, u * u * u);
  };
  const P0 = new Vector3(), P1 = new Vector3(), P2 = new Vector3(), P3 = new Vector3();
  const T0 = new Vector3(), T1 = new Vector3(), T2 = new Vector3(), T3 = new Vector3();
  let shadowsOn = true;

  function applyP(p) {
    // strings part at the centre like a theatre curtain, front string first: the inner ends draw out to the
    // edges (flags gather toward the sides), then the whole string flies up out of frame.
    strings.forEach((s, k) => {
      const A = U.uA.value[k], C = U.uC.value[k], E = U.uE.value[k];
      if (s.unused) { A.set(0, -50, 0); C.set(0, -50, 0); E.set(0, -50, 0); return; }
      if (s.interior) { A.copy(s.A0); C.copy(s.C0); E.copy(s.E0); U.uFl.value[k] = 0.8; U.uLv.value[k] = 0.25; U.uGa.value[k] = 0; return; }
      const sp = span(p, s.st, s.st + 0.5);
      const ex = smooth(span(sp, 0.0, 0.75));   // parting
      const ey = smooth(span(sp, 0.35, 1.0));   // flying out
      A.set(s.A0.x + s.side * s.hv * 0.15 * ey, s.A0.y + s.lift * ey, s.z);
      E.set(s.E0.x + s.side * s.hv * 1.02 * ex, s.E0.y + (s.A0.y - s.E0.y) * 0.55 * ex + s.lift * 1.05 * ey, s.z);
      const mx0 = (s.A0.x + s.E0.x) / 2, my0 = (s.A0.y + s.E0.y) / 2;
      const tight = 1 - 0.7 * ex;
      C.set((A.x + E.x) / 2 + (s.C0.x - mx0) * tight, (A.y + E.y) / 2 + (s.C0.y - my0) * tight, s.z + 0.28 * Math.sin(Math.PI * sp));
      U.uFl.value[k] = 1 + 2.1 * Math.sin(Math.PI * Math.min(1, sp * 1.25));
      U.uLv.value[k] = 0.25 + 0.5 * ex;
      U.uGa.value[k] = ex;
    });
    // camera: dolly toward the arched opening, through it (gaze kept low so the shop, not its ceiling,
    // fills the arch), and settle on the yellow logo wall above the pink counter
    const u = smoother(span(p, 0.04, 0.97));
    P0.set(L.cx, L.cy, L.D);
    P1.set(lerp(L.cx, 0, 0.5), lerp(L.cy, L.yWinMid, 0.7), L.D * 0.6);
    P2.set(0, L.yWinMid - 0.1, -0.7);
    P3.set(0, L.ycam1, L.zcam1);
    cubic(P0, P1, P2, P3, u, camera.position);
    T0.set(L.cx, L.cy, 0);
    T1.set(lerp(L.cx, 0, 0.8), lerp(L.cy, L.yWinMid, 0.8) - 0.05, -1.5);
    T2.set(0, L.ycam1 + 0.1, ROOM.z0);
    T3.set(0, L.ycam1, ROOM.z0);
    cubic(T0, T1, T2, T3, u, tmp);
    tmp.y += Math.sin(Math.PI * span(p, 0.0, 0.32)) * 0.4; // a small upward glance as the curtain flies
    camera.lookAt(tmp);
    camera.fov = lerp(L.fov0, L.fov1, u);
    camera.update();
    roomU.uExpo.value = lerp(0.82, 1.0, smooth(span(p, 0.4, 0.75)));
    counterU.uFlat.value = smooth(span(p, 0.85, 1.0));
    U.uVig.value = lerp(0.32, 0.18, smooth(span(p, 0.5, 1.0)));
    shadowsOn = p < 0.64;
  }

  // ---------------------------------------------------------------- render
  let W = 0, H = 0, p = 0;
  function resize(force) {
    const w = Math.max(1, stage.clientWidth), h = Math.max(1, stage.clientHeight);
    if (!force && w === W && Math.abs(h - H) < 160) return false;
    W = w; H = h;
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, hiDpi ? 3 : phone ? 1.5 : 2));
    r.setSize(W, H);
    camera.aspect = W / H;
    U.uRes.value = r.drawingSize;
    layout(W, H);
    return true;
  }

  const BLUR = [[1.0, 0], [0, 1.0], [1.9, 0], [0, 1.9]];
  function render(time) {
    r.info.calls = 0; r.info.triangles = 0;
    U.uTime.value = time;
    applyP(p);
    if (shadowsOn) {
      // 1) tissue transmittance from the sun's view, 2) wide two-iteration separable blur at half res
      r.setTarget(shA); r.clear(1, 1, 1, 1);
      r.draw(flagsSh, lightCam); r.draw(cordsSh, lightCam);
      BLUR.forEach(([dx, dy], i) => {
        const src = i === 0 ? shA : (i % 2 ? shB : shC);
        const dst = i % 2 ? shC : shB;
        blurU.uTex.value = src;
        blurU.uDir.value = [dx / shB.width, dy / shB.height];
        r.setTarget(dst); r.draw(blur, fsCam);
      });
      wallU.uShOn.value = 1;
    } else wallU.uShOn.value = 0;
    // 3) main view
    r.setTarget(null);
    const c = srgb(HEX.cantera);
    r.clear(c[0], c[1], c[2], 1);
    for (const m of [room, counter, products, wall, reveal, flags, cords]) r.draw(m, camera);
  }

  function setPointerRay(nx, ny, amt) {
    U.uPtrO.value.copy(camera.position);
    camera.ray(nx, ny, U.uPtrD.value);
    U.uPtrAmt.value = amt;
  }

  resize(true);

  return {
    resize, render,
    setP(v) { p = v; },
    setWind(w) { U.uWind.value = w; },
    setPointerRay,
    info: () => ({ calls: r.info.calls, triangles: r.info.triangles, flags: flagGeo.instanceCount, dpr: r.dpr, size: [W, H], shadow: shSize }),
    dispose() { r.disposed = true; },
    get layout() { return L; },
  };
}
