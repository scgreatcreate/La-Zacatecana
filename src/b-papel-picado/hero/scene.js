// Papel picado hero scene (three.js). Choreography is a pure function of p ∈ [0,1];
// time only drives ambient wind/flutter on top of it.
import {
  WebGLRenderer, Scene, PerspectiveCamera, OrthographicCamera, Mesh, BufferGeometry, BufferAttribute,
  InstancedBufferGeometry, InstancedBufferAttribute, BoxGeometry, ShaderMaterial, WebGLRenderTarget,
  CanvasTexture, Vector3, Matrix4, LinearFilter, LinearMipmapLinearFilter, RepeatWrapping, ClampToEdgeWrapping,
  CustomBlending, ZeroFactor, SrcColorFactor, MinEquation, AddEquation, OneFactor, BackSide, DoubleSide,
  NoColorSpace,
} from 'three';
import * as SH from './shaders.js';
import { rasterizeAtlas, TILE, HEADER, tileRect } from './atlas.js';
import zacSvg from '../../../assets/brand/zacatecas.svg';
import wordmarkSvg from '../../../assets/brand/wordmark.svg';

const MAXS = SH.MAX_STR;
const MAXF = 160;

// ---------------------------------------------------------------- palette
const HEX = {
  magenta: '#D6246E', sunflower: '#F7C815', green: '#2E9E5B', pink: '#F0567A', mango: '#F39A1E',
  cream: '#FFF6E8', chamoy: '#A3182E', yellowWall: '#F2C418', counter: '#E87FA4', cantera: '#E7A9AE',
  pinkWall: '#EC8DB0', white: '#F6F1EA', top: '#F4F1EC',
};
const srgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
const lin = (hex) => srgb(hex).map((c) => Math.pow(c, 2.2));
const v3 = (a) => new Vector3(a[0], a[1], a[2]);

const MOTIF_COLORS = ['magenta', 'sunflower', 'green', 'pink', 'mango', 'cream', 'magenta', 'green', 'sunflower', 'chamoy', 'mango', 'pink'];
const LETTER_COLORS = ['magenta', 'green', 'mango', 'chamoy', 'green', 'magenta', 'mango'];
const MOTIFS = [TILE.cone, TILE.strawberry, TILE.elote, TILE.chile, TILE.cactus, TILE.zacatecas, TILE.dalia, TILE.paleta];

// key light: warm daylight from the upper left, slightly in front of the wall
const LDIR = new Vector3(-0.42, 0.58, 0.7).normalize();
const KEY = [1.0, 0.93, 0.82].map((c) => c * 1.25);
const SKY = [0.62, 0.7, 0.85].map((c) => c * 0.42);
const BOUNCE = [0.55, 0.36, 0.34].map((c) => c * 0.2);

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => { t = clamp01(t); return t * t * (3 - 2 * t); };
const smoother = (t) => { t = clamp01(t); return t * t * t * (t * (t * 6 - 15) + 10); };
const span = (p, a, b) => clamp01((p - a) / (b - a));

export function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (e) { return false; }
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

// ---------------------------------------------------------------- geometry builders
function flagGrid(nx, ny) {
  const pos = [], idx = [];
  for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) pos.push(i / nx, j / ny, 0);
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, d = c + 1;
    idx.push(a, c, b, b, c, d);
  }
  const g = new InstancedBufferGeometry();
  g.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3));
  g.setIndex(idx);
  return g;
}

function cordGeometry(seg) {
  const pos = [], idx = [];
  for (let s = 0; s < MAXS; s++) {
    const base = pos.length / 3;
    for (let i = 0; i <= seg; i++) { pos.push(i / seg, -1, s, i / seg, 1, s); }
    for (let i = 0; i < seg; i++) { const a = base + i * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3));
  g.setIndex(idx);
  return g;
}

// reveal of the opening (wall thickness) + protruding sill, normals facing into the opening
function revealGeometry(hw, ySill, ySpring, depth, sill) {
  const P = [], N = [], I = [];
  const quad = (a, b, c, d, n) => {
    const o = P.length / 3;
    P.push(...a, ...b, ...c, ...d); for (let i = 0; i < 4; i++) N.push(...n);
    I.push(o, o + 1, o + 2, o, o + 2, o + 3);
  };
  // outline from bottom-left, up, over the arch, down to bottom-right
  const pts = [];
  pts.push([-hw, ySill]);
  pts.push([-hw, ySpring]);
  const n = 28;
  for (let i = 1; i < n; i++) { const a = Math.PI - (i / n) * Math.PI; pts.push([Math.cos(a) * hw, ySpring + Math.sin(a) * hw]); }
  pts.push([hw, ySpring]);
  pts.push([hw, ySill]);
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i], [x1, y1] = pts[i + 1];
    // inward normal: points toward the opening centre
    let nx = -(y1 - y0), ny = x1 - x0; const l = Math.hypot(nx, ny); nx /= l; ny /= l;
    quad([x0, y0, 0], [x0, y0, -depth], [x1, y1, -depth], [x1, y1, 0], [-nx, -ny, 0]);
  }
  // sill block
  const { hx, th, pr } = sill;
  const y0 = ySill - th, y1 = ySill, z0 = -depth, z1 = pr;
  quad([-hx, y1, z1], [hx, y1, z1], [hx, y1, z0], [-hx, y1, z0], [0, 1, 0]);
  quad([-hx, y0, z1], [hx, y0, z1], [hx, y1, z1], [-hx, y1, z1], [0, 0, 1]);
  quad([-hx, y0, z0], [hx, y0, z0], [hx, y0, z1], [-hx, y0, z1], [0, -1, 0]);
  quad([-hx, y0, z0], [-hx, y0, z1], [-hx, y1, z1], [-hx, y1, z0], [-1, 0, 0]);
  quad([hx, y0, z1], [hx, y0, z0], [hx, y1, z0], [hx, y1, z1], [1, 0, 0]);
  const g = new BufferGeometry();
  g.setAttribute('position', new BufferAttribute(new Float32Array(P), 3));
  g.setAttribute('normal', new BufferAttribute(new Float32Array(N), 3));
  g.setIndex(I);
  return g;
}

// ---------------------------------------------------------------- scene
export async function createScene({ canvas, stage, getCopyRect, phone, debug = {} }) {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance', stencil: false });
  renderer.autoClear = true;
  renderer.info.autoReset = false;
  renderer.outputColorSpace = 'srgb-linear'; // shaders write sRGB themselves
  const gl = renderer.getContext();
  const maxAniso = renderer.capabilities.getMaxAnisotropy();

  // ---- textures
  const [atlasCanvas, markCanvas] = await Promise.all([
    rasterizeAtlas(zacSvg),
    svgToCanvas(wordmarkSvg, 2048, Math.round((2048 * 230) / 1087)).catch(() => wordmarkFallback()),
  ]);
  const atlas = new CanvasTexture(atlasCanvas);
  atlas.flipY = false; atlas.colorSpace = NoColorSpace;
  atlas.minFilter = LinearMipmapLinearFilter; atlas.magFilter = LinearFilter; atlas.anisotropy = Math.min(8, maxAniso);
  atlas.generateMipmaps = true;
  const mark = new CanvasTexture(markCanvas);
  mark.colorSpace = NoColorSpace; mark.anisotropy = Math.min(8, maxAniso);
  mark.minFilter = LinearMipmapLinearFilter;

  // stone bake
  const stoneRT = new WebGLRenderTarget(1024, 1024, { generateMipmaps: true, minFilter: LinearMipmapLinearFilter, magFilter: LinearFilter, wrapS: RepeatWrapping, wrapT: RepeatWrapping, depthBuffer: false });
  stoneRT.texture.wrapS = stoneRT.texture.wrapT = RepeatWrapping;
  stoneRT.texture.anisotropy = Math.min(4, maxAniso);
  const fsGeo = new BufferGeometry();
  fsGeo.setAttribute('position', new BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
  fsGeo.setAttribute('uv', new BufferAttribute(new Float32Array([0, 0, 2, 0, 0, 2]), 2));
  const fsCam = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const bakeScene = new Scene();
  const bakeMesh = new Mesh(fsGeo, new ShaderMaterial({ vertexShader: SH.FS_VS, fragmentShader: SH.STONE_BAKE_FS, depthTest: false, depthWrite: false }));
  bakeMesh.frustumCulled = false;
  bakeScene.add(bakeMesh);
  renderer.setRenderTarget(stoneRT);
  renderer.render(bakeScene, fsCam);
  renderer.setRenderTarget(null);
  bakeMesh.material.dispose();

  // ---- shadow (light's-eye) targets
  const shSize = phone ? [1024, 1024] : [2048, 1280];
  const shA = new WebGLRenderTarget(shSize[0], shSize[1], { depthBuffer: false, minFilter: LinearFilter, magFilter: LinearFilter, wrapS: ClampToEdgeWrapping, wrapT: ClampToEdgeWrapping });
  const shB = new WebGLRenderTarget(shSize[0] / 2, shSize[1] / 2, { depthBuffer: false, minFilter: LinearFilter, magFilter: LinearFilter });
  const shC = new WebGLRenderTarget(shSize[0] / 2, shSize[1] / 2, { depthBuffer: false, minFilter: LinearFilter, magFilter: LinearFilter });
  const lightCam = new OrthographicCamera(-5, 5, 5, -5, 0.1, 60);
  const lightVP = new Matrix4();

  // ---- shared uniforms
  const U = {
    uA: { value: Array.from({ length: MAXS }, () => new Vector3()) },
    uC: { value: Array.from({ length: MAXS }, () => new Vector3()) },
    uE: { value: Array.from({ length: MAXS }, () => new Vector3()) },
    uFl: { value: new Float32Array(MAXS).fill(1) },
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

  // ---- flags
  const flagGeo = flagGrid(phone ? 10 : 12, phone ? 13 : 16);
  const aT = new InstancedBufferAttribute(new Float32Array(MAXF * 2), 2);
  const aTile = new InstancedBufferAttribute(new Float32Array(MAXF * 4), 4);
  const aCol = new InstancedBufferAttribute(new Float32Array(MAXF * 3), 3);
  const aMisc = new InstancedBufferAttribute(new Float32Array(MAXF * 4), 4);
  flagGeo.setAttribute('iT', aT); flagGeo.setAttribute('iTile', aTile);
  flagGeo.setAttribute('iCol', aCol); flagGeo.setAttribute('iMisc', aMisc);
  flagGeo.instanceCount = 0;
  const flagMat = new ShaderMaterial({
    uniforms: U, vertexShader: SH.FLAG_VS, fragmentShader: SH.FLAG_FS, side: DoubleSide,
    alphaToCoverage: true, transparent: false,
  });
  const flags = new Mesh(flagGeo, flagMat);
  flags.frustumCulled = false;
  const flagShMat = new ShaderMaterial({
    uniforms: U, vertexShader: SH.FLAG_SH_VS, fragmentShader: SH.FLAG_SH_FS, side: DoubleSide,
    depthTest: false, depthWrite: false, transparent: true,
    blending: CustomBlending, blendEquation: AddEquation, blendSrc: ZeroFactor, blendDst: SrcColorFactor,
    blendEquationAlpha: MinEquation, blendSrcAlpha: OneFactor, blendDstAlpha: OneFactor,
  });
  const flagsSh = new Mesh(flagGeo, flagShMat);
  flagsSh.frustumCulled = false;

  // ---- cords
  const cordGeo = cordGeometry(48);
  const cordU = { ...U, uW: { value: 0.006 }, uView: { value: LDIR.clone() }, uUseView: { value: 0 } };
  const cordMat = new ShaderMaterial({ uniforms: cordU, vertexShader: SH.CORD_VS, fragmentShader: SH.CORD_FS, side: DoubleSide });
  const cords = new Mesh(cordGeo, cordMat);
  cords.frustumCulled = false;
  const cordShU = { ...cordU, uUseView: { value: 1 }, uW: { value: 0.006 } };
  const cordShMat = new ShaderMaterial({
    uniforms: cordShU, vertexShader: SH.CORD_SH_VS, fragmentShader: SH.CORD_SH_FS, side: DoubleSide,
    depthTest: false, depthWrite: false, transparent: true,
    blending: CustomBlending, blendEquation: AddEquation, blendSrc: ZeroFactor, blendDst: SrcColorFactor,
    blendEquationAlpha: MinEquation, blendSrcAlpha: OneFactor, blendDstAlpha: OneFactor,
  });
  const cordsSh = new Mesh(cordGeo, cordShMat);
  cordsSh.frustumCulled = false;

  // ---- façade + reveal
  const WALL = { hw: 1.0, hRect: 1.25, ySill: 1.05, depth: 0.45 };
  WALL.ySpring = WALL.ySill + WALL.hRect;
  const sill = { hx: WALL.hw + 0.16, th: 0.12, pr: 0.15 };
  // albedo calibration: a sunlit, unshadowed, average block should land on the cantera hex
  const calib = (() => {
    const tgt = lin(HEX.cantera), c0 = [0.85, 0.6, 0.62].map((c) => Math.pow(c, 2.2));
    const ndl = LDIR.z;
    return tgt.map((t, i) => t / (c0[i] * (KEY[i] * ndl + SKY[i] * 0.62 + BOUNCE[i] * 0.5)));
  })();
  const wallU = {
    ...U,
    uStone: { value: stoneRT.texture },
    uShA: { value: shA.texture },
    uShB: { value: shC.texture },
    uLightVP: { value: lightVP },
    uWin: { value: [0, WALL.ySill, WALL.ySpring, WALL.hw] },
    uSill: { value: [sill.hx, sill.th, sill.pr, WALL.depth] },
    uAlb: { value: v3(calib) },
    uShOn: { value: 1 },
    uSoft: { value: 0.18 },
    uIsJamb: { value: 0 },
  };
  const wallMat = new ShaderMaterial({ uniforms: wallU, vertexShader: SH.WALL_VS, fragmentShader: SH.WALL_FS });
  const wallGeo = new BufferGeometry();
  {
    const X = 40, Y0 = -30, Y1 = 40;
    wallGeo.setAttribute('position', new BufferAttribute(new Float32Array([-X, Y0, 0, X, Y0, 0, X, Y1, 0, -X, Y1, 0]), 3));
    wallGeo.setAttribute('normal', new BufferAttribute(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]), 3));
    wallGeo.setIndex([0, 1, 2, 0, 2, 3]);
  }
  const wall = new Mesh(wallGeo, wallMat);
  wall.frustumCulled = false;
  const revealMat = new ShaderMaterial({ uniforms: { ...wallU, uIsJamb: { value: 1 } }, vertexShader: SH.WALL_VS, fragmentShader: SH.WALL_FS });
  const reveal = new Mesh(revealGeometry(WALL.hw, WALL.ySill, WALL.ySpring, WALL.depth, sill), revealMat);

  // ---- interior
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
    uExpo: { value: 0.85 },
    uRes: U.uRes, uVig: U.uVig,
    uWainscot: { value: 1.3 },
  };
  const roomGeo = new BoxGeometry(ROOM.x1 - ROOM.x0, ROOM.y1 - ROOM.y0, ROOM.z1 - ROOM.z0);
  roomGeo.translate((ROOM.x0 + ROOM.x1) / 2, (ROOM.y0 + ROOM.y1) / 2, (ROOM.z0 + ROOM.z1) / 2);
  const room = new Mesh(roomGeo, new ShaderMaterial({ uniforms: roomU, vertexShader: SH.WALL_VS, fragmentShader: SH.ROOM_FS, side: BackSide }));
  const counterU = {
    uPink: { value: v3(lin(HEX.counter)) },
    uTop: { value: v3(lin(HEX.top)) },
    uH: { value: CTR.h },
    uExpo: roomU.uExpo, uRes: U.uRes, uVig: U.uVig,
    uFlat: { value: 0 },
  };
  const ctrGeo = new BoxGeometry(CTR.x1 - CTR.x0, CTR.h, CTR.depth);
  ctrGeo.translate((CTR.x0 + CTR.x1) / 2, CTR.h / 2, CTR.zf - CTR.depth / 2);
  const counter = new Mesh(ctrGeo, new ShaderMaterial({ uniforms: counterU, vertexShader: SH.WALL_VS, fragmentShader: SH.COUNTER_FS }));

  const scene = new Scene();
  scene.add(room, counter, wall, reveal, flags, cords);
  const shScene = new Scene();
  shScene.add(flagsSh, cordsSh);
  const blurU = { uTex: { value: shA.texture }, uDir: { value: [1 / shSize[0], 0] } };
  const blurMesh = new Mesh(fsGeo, new ShaderMaterial({ uniforms: blurU, vertexShader: SH.FS_VS, fragmentShader: SH.BLUR_FS, depthTest: false, depthWrite: false }));
  blurMesh.frustumCulled = false;
  const blurScene = new Scene();
  blurScene.add(blurMesh);

  const camera = new PerspectiveCamera(40, 1, 0.05, 80);

  // ---------------------------------------------------------------- layout (viewport-dependent, not p-dependent)
  let L = null;
  const strings = []; // per half-string: { i, side, A0, E0, S, W, z, lift, x0, Y, st }

  function layout(W, H) {
    const a = W / H;
    const copy = getCopyRect ? getCopyRect() : null;
    const portrait = a < 0.9;
    const fov0 = portrait ? 50 : 36;
    const fov1 = portrait ? 50 : 38;
    const t0 = Math.tan((fov0 * Math.PI) / 360);
    // where the window (arched opening) sits on screen: above the copy on phones, beside it on desktop
    let fw, sxw, sySill;
    if (portrait) {
      fw = 0.54;
      sxw = 0.5;
      sySill = copy ? Math.min(0.7, (copy.top - 14) / H) : 0.64;
    } else {
      fw = Math.min(0.3, 0.34 / a);
      const right = copy ? copy.right / W : 0.46;
      sxw = Math.min(0.8, right + (1 - right) * 0.5);
      sySill = copy ? Math.min(0.93, (copy.bottom) / H) : 0.9;
    }
    const visW = (2 * WALL.hw) / fw;
    const visH = visW / a;
    const D = visH / (2 * t0);
    const cx = -(sxw - 0.5) * visW;
    const cy = WALL.ySill - (0.5 - sySill) * visH;

    // strings: screen y at the screen edge and at the centre dip; depth from the wall
    const edges = portrait ? [0.08, 0.155, 0.23, 0.305] : [0.09, 0.18, 0.27, 0.35];
    const dip = portrait ? 0.03 : 0.045;
    const depths = [0.35, 0.6, 0.85, 1.1];
    const motifPitch = portrait ? W / 4.4 : Math.max(84, Math.min(132, W * 0.078));
    strings.length = 0;
    const inst = [];
    const word = ['dalia', 'L', 'A', 'zacatecas', 'Z', 'A', 'C', 'A', 'T', 'E', 'C', 'A', 'N', 'A', 'dalia'];
    const letters = portrait ? word.slice(1, 14) : word;
    let colorIx = 0;
    for (let i = 0; i < 4; i++) {
      const z = depths[i];
      const sc = (D - z) / D;
      const hv = (visW * sc) / 2;                       // visible half width at this depth
      const yAt = (sy) => cy + (0.5 - sy) * visH * sc;   // screen y → world y at this depth
      const yEdge = yAt(edges[i]), yMid = yAt(edges[i] + dip);
      const Wd = hv * 1.3;                              // anchors beyond the screen edge
      const k = (yEdge - yMid) / (hv * hv);
      const S = k * Wd * Wd;                            // sag from anchor to centre
      const Y = yMid + S;
      const isLetters = i === 3;
      const pitchPx = isLetters ? Math.min(motifPitch * (portrait ? 1 : 0.92), (W * (portrait ? 0.975 : 0.93)) / letters.length) : motifPitch * (1 - i * 0.04);
      const pitch = (pitchPx / W) * visW * sc;
      const fwid = pitch * (isLetters ? 0.9 : 0.86);
      const fh = fwid * 1.25;
      // letter string: joint between two flags so the word is centred; motif strings: centred joint
      const nL = isLetters ? Math.ceil(letters.length / 2) : 0;
      const x0 = cx + (isLetters && letters.length % 2 ? pitch / 2 : 0);
      const ytop = cy + (visH * sc) / 2;
      const lift = ytop - Y + fh * 1.6 + 0.6;
      const st = [0.1, 0.07, 0.04, 0.01][i];
      for (const side of [-1, 1]) {
        const A0 = new Vector3(x0 + side * Wd, Y, z);
        const E0 = new Vector3(x0, Y - S, z);
        const C0 = new Vector3(x0 + side * Wd / 2, Y - S, z);
        // arc-length table from the joint (t=1) toward the anchor (t=0)
        const N = 96, tab = [0];
        let prev = bezier(A0, C0, E0, 1), acc = 0;
        for (let j = 1; j <= N; j++) {
          const pt = bezier(A0, C0, E0, 1 - j / N);
          acc += pt.distanceTo(prev); prev = pt; tab.push(acc);
        }
        const tAt = (s) => {
          for (let j = 1; j <= N; j++) if (tab[j] >= s) { const f = (s - tab[j - 1]) / (tab[j] - tab[j - 1]); return 1 - (j - 1 + f) / N; }
          return 0;
        };
        const hs = strings.length;
        strings.push({ i, side, A0, C0, E0, S, Wd, z, lift, x0, Y, st, hv });
        // flags along this half
        const seq = [];
        if (isLetters) {
          const left = letters.slice(0, nL).reverse();
          const right = letters.slice(nL);
          seq.push(...(side < 0 ? left : right));
          // pad desktop letter string with motifs to the edges
          const extra = Math.ceil(hv / pitch) + 1 - seq.length;
          for (let e = 0; e < extra; e++) seq.push(MOTIFS[(e * 3 + (side > 0 ? 1 : 4)) % MOTIFS.length]);
        } else {
          const n = Math.ceil(hv / pitch) + 1;
          for (let e = 0; e < n; e++) seq.push(MOTIFS[(e * 5 + i * 3 + (side > 0 ? 2 : 0)) % MOTIFS.length]);
        }
        const off = isLetters && letters.length % 2 ? 0 : 0;
        seq.forEach((kind, e) => {
          const c = (e + 0.5) * pitch + off;
          const t0 = tAt(c - fwid / 2), t1 = tAt(c + fwid / 2);
          const tile = typeof kind === 'number' ? kind : TILE[kind];
          const isLetter = typeof kind === 'string' && kind.length === 1;
          let colName;
          if (isLetter) {
            const li = letters.indexOf(kind) + (side > 0 ? nL : 0) + e;
            colName = LETTER_COLORS[li % LETTER_COLORS.length];
          } else colName = MOTIF_COLORS[(colorIx++) % MOTIF_COLORS.length];
          // left half runs right→left; keep the sheet facing the viewer (u from left to right)
          const ta = side < 0 ? t1 : t0, tb = side < 0 ? t0 : t1;
          inst.push({ ta: side < 0 ? Math.min(t0, t1) : Math.min(t0, t1), tb: side < 0 ? Math.max(t0, t1) : Math.max(t0, t1), side, tile, col: lin(HEX[colName]), hs, fh, isLetter, ta2: ta, tb2: tb });
        });
      }
    }
    // write instance attributes (back strings first)
    inst.forEach((f, n) => {
      if (n >= MAXF) return;
      // u runs left→right on screen. On the left half t grows toward the joint (rightward), on the right half t shrinks.
      const t0 = f.side < 0 ? f.ta : f.tb, t1 = f.side < 0 ? f.tb : f.ta;
      aT.array[n * 2] = t0; aT.array[n * 2 + 1] = t1;
      const r = tileRect(f.tile);
      aTile.array.set(r, n * 4);
      aCol.array.set(f.col, n * 3);
      aMisc.array.set([f.hs, fract(Math.sin(n * 91.7 + 3.1) * 4375.5), f.fh, f.isLetter ? 1 : 0], n * 4);
    });
    flagGeo.instanceCount = Math.min(MAXF, inst.length);
    aT.needsUpdate = aTile.needsUpdate = aCol.needsUpdate = aMisc.needsUpdate = true;

    // interior framing at p = 1 (solve so the counter top and wordmark land where we want them)
    const t1 = Math.tan((fov1 * Math.PI) / 360);
    const syCt = portrait ? 0.6 : 0.62;
    const dC = portrait ? 1.9 : 2.6;
    const ycam1 = CTR.h + (syCt - 0.5) * 2 * dC * t1;
    const zcam1 = CTR.zf + dC;
    const dY = zcam1 - ROOM.z0;
    const syWm = portrait ? 0.31 : 0.33;
    const yWm = ycam1 + (0.5 - syWm) * 2 * dY * t1;
    const Ww = Math.min(2.5, (portrait ? 0.86 : 0.5) * 2 * dY * t1 * a);
    const Wh = (Ww * 230) / 1087;
    roomU.uMarkRect.value = [-Ww / 2, yWm - Wh / 2, Ww, Wh];

    L = { W, H, a, portrait, fov0, fov1, D, cx, cy, visW, visH, ycam1, zcam1, yWinMid: WALL.ySill + 0.85 };
    U.uPtrR.value = visW * 0.07;
    cordU.uW.value = Math.max(0.0035, visW * 0.0011);

    // light camera covers the visible wall at p = 0 (+ margins), looking along -LDIR
    const target = new Vector3(cx, cy, 0);
    lightCam.position.copy(target).addScaledVector(LDIR, 20);
    lightCam.up.set(0, 1, 0);
    lightCam.lookAt(target);
    lightCam.updateMatrixWorld();
    const inv = lightCam.matrixWorldInverse;
    let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
    for (const [px, py, pz] of [[-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0], [-1, 1, 1.3], [1, 1, 1.3]]) {
      const v = new Vector3(cx + px * visW * 0.6, cy + py * visH * 0.6, pz).applyMatrix4(inv);
      x0 = Math.min(x0, v.x); x1 = Math.max(x1, v.x); y0 = Math.min(y0, v.y); y1 = Math.max(y1, v.y);
    }
    lightCam.left = x0; lightCam.right = x1; lightCam.top = y1; lightCam.bottom = y0;
    lightCam.updateProjectionMatrix();
    lightVP.multiplyMatrices(lightCam.projectionMatrix, lightCam.matrixWorldInverse);
  }

  function bezier(a, c, e, t) {
    const r = 1 - t;
    return new Vector3().addScaledVector(a, r * r).addScaledVector(c, 2 * r * t).addScaledVector(e, t * t);
  }
  function fract(x) { return x - Math.floor(x); }

  // ---------------------------------------------------------------- choreography: pure in p
  const tmp = new Vector3(), tmp2 = new Vector3();
  const cubic = (a, b, c, d, u, out) => {
    const v = 1 - u;
    return out.set(0, 0, 0).addScaledVector(a, v * v * v).addScaledVector(b, 3 * v * v * u).addScaledVector(c, 3 * v * u * u).addScaledVector(d, u * u * u);
  };
  const P0 = new Vector3(), P1 = new Vector3(), P2 = new Vector3(), P3 = new Vector3();
  const T0 = new Vector3(), T1 = new Vector3(), T2 = new Vector3(), T3 = new Vector3();

  function applyP(p) {
    // strings part from the centre and lift like a curtain, front string first
    strings.forEach((s, k) => {
      const sp = smoother(span(p, s.st, s.st + 0.34));
      const ex = 1 - Math.pow(1 - sp, 1.6);   // parting leads
      const ey = Math.pow(sp, 1.25);         // lifting follows
      const A = U.uA.value[k], C = U.uC.value[k], E = U.uE.value[k];
      A.set(s.A0.x + s.side * s.Wd * 0.1 * ey, s.A0.y + s.lift * ey, s.z);
      E.set(s.x0 + s.side * s.Wd * 0.72 * ex, s.E0.y + (s.S + s.lift * 1.15) * ey, s.z);
      const sag = (s.S / 2) * (1 - 0.5 * sp) + s.S * 0.35 * Math.sin(Math.PI * sp);
      C.set((A.x + E.x) / 2, (A.y + E.y) / 2 - sag, s.z + 0.35 * Math.sin(Math.PI * sp));
      U.uFl.value[k] = 1 + 1.9 * Math.sin(Math.PI * sp);
    });
    // camera: dolly toward the arched opening, through it, and settle on the yellow wall + counter
    const u = smoother(span(p, 0.03, 0.97));
    P0.set(L.cx, L.cy, L.D);
    P1.set(lerp(L.cx, 0, 0.55), lerp(L.cy, L.yWinMid, 0.75), L.D * 0.32);
    P2.set(0, L.yWinMid - 0.1, -0.7);
    P3.set(0, L.ycam1, L.zcam1);
    cubic(P0, P1, P2, P3, u, camera.position);
    T0.set(L.cx, L.cy, 0);
    T1.set(lerp(L.cx, 0, 0.8), lerp(L.cy, L.yWinMid, 0.8), -1.5);
    T2.set(0, L.yWinMid - 0.15, ROOM.z0);
    T3.set(0, L.ycam1, ROOM.z0);
    cubic(T0, T1, T2, T3, u, tmp);
    // a small upward glance as the curtain lifts
    tmp.y += Math.sin(Math.PI * span(p, 0.0, 0.32)) * 0.5;
    camera.lookAt(tmp);
    camera.fov = lerp(L.fov0, L.fov1, u);
    camera.updateProjectionMatrix();
    roomU.uExpo.value = lerp(0.8, 1.0, smooth(span(p, 0.45, 0.8)));
    counterU.uFlat.value = smooth(span(p, 0.85, 1.0));
    U.uVig.value = lerp(0.32, 0.18, smooth(span(p, 0.5, 1.0)));
    const show = p < 0.62;
    flags.visible = cords.visible = show;
  }

  // ---------------------------------------------------------------- render
  let W = 0, H = 0, dpr = 1;
  function resize(force) {
    const w = Math.max(1, stage.clientWidth), h = Math.max(1, stage.clientHeight);
    if (!force && w === W && Math.abs(h - H) < 160) return false;
    W = w; H = h;
    dpr = Math.min(window.devicePixelRatio || 1, phone ? 1.5 : 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    U.uRes.value = [W * dpr, H * dpr];
    layout(W, H);
    return true;
  }

  let p = 0;
  function setP(v) { p = v; }

  function render(time) {
    renderer.info.reset();
    U.uTime.value = time;
    applyP(p);
    // 1) light's-eye transmittance of the tissue, 2) separable blur, 3) main view
    if (flags.visible) {
      renderer.setClearColor(0xffffff, 1);
      renderer.setRenderTarget(shA);
      renderer.clear();
      renderer.render(shScene, lightCam);
      blurU.uTex.value = shA.texture; blurU.uDir.value = [2.2 / shSize[0], 0];
      renderer.setRenderTarget(shB); renderer.render(blurScene, fsCam);
      blurU.uTex.value = shB.texture; blurU.uDir.value = [0, 2.2 / shSize[1]];
      renderer.setRenderTarget(shC); renderer.render(blurScene, fsCam);
      wallU.uShOn.value = 1;
    } else {
      wallU.uShOn.value = 0;
    }
    renderer.setRenderTarget(null);
    renderer.setClearColor(0xe7a9ae, 1);
    renderer.render(scene, camera);
  }

  // pointer / wind inputs (ambient, not choreography)
  const ndc = new Vector3();
  function setPointerRay(nx, ny, amt) {
    ndc.set(nx, ny, 0.5).unproject(camera);
    U.uPtrO.value.copy(camera.position);
    U.uPtrD.value.copy(ndc.sub(camera.position).normalize());
    U.uPtrAmt.value = amt;
  }
  function setWind(w) { U.uWind.value = w; }

  resize(true);

  return {
    renderer, resize, render, setP, setPointerRay, setWind,
    info: () => ({ calls: renderer.info.render.calls, triangles: renderer.info.render.triangles, flags: flagGeo.instanceCount, dpr, size: [W, H], shadow: shSize }),
    dispose() {
      renderer.dispose();
      [atlas, mark, stoneRT, shA, shB, shC].forEach((t) => t.dispose());
    },
    get layout() { return L; },
  };
}
