// Papel picado hero scene (three.js). Choreography is a pure function of p ∈ [0,1];
// time only drives ambient wind/flutter on top of it.
import {
  WebGLRenderer, Scene, PerspectiveCamera, OrthographicCamera, Mesh, BufferGeometry, BufferAttribute,
  InstancedBufferGeometry, InstancedBufferAttribute, BoxGeometry, ShaderMaterial, WebGLRenderTarget,
  CanvasTexture, Texture, Vector3, Vector4, Matrix4, LinearFilter, LinearMipmapLinearFilter, RepeatWrapping, ClampToEdgeWrapping,
  CustomBlending, ZeroFactor, SrcColorFactor, MinEquation, AddEquation, OneFactor, BackSide, DoubleSide,
  NoColorSpace,
} from 'three';
import * as SH from './shaders.js';
import { rasterizeAtlas, TILE, HEADER, tileRect } from './atlas.js';
import { PRODUCTS } from './products.js';
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
const LDIR = new Vector3(-0.36, 0.5, 0.79).normalize();
const KEY = [1.0, 0.92, 0.8].map((c) => c * 1.5);
const SKY = [0.6, 0.68, 0.86].map((c) => c * 0.34);
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
export async function createScene({ canvas, stage, getCopyRect, phone, assetBase = 'assets/' }) {
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
    uLv: { value: new Float32Array(MAXS).fill(0.3) },
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
    uSoft: { value: 0.04 },
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
    uProd: { value: Array.from({ length: 4 }, () => new Vector4(0, 0, 1, 1)) },
    uProdOn: { value: 0 },
  };
  const ctrGeo = new BoxGeometry(CTR.x1 - CTR.x0, CTR.h, CTR.depth);
  ctrGeo.translate((CTR.x0 + CTR.x1) / 2, CTR.h / 2, CTR.zf - CTR.depth / 2);
  const counter = new Mesh(ctrGeo, new ShaderMaterial({ uniforms: counterU, vertexShader: SH.WALL_VS, fragmentShader: SH.COUNTER_FS }));

  // ---- real product cutouts on the counter ("the counter becomes the menu"); loaded after first paint
  const prodGeo = new InstancedBufferGeometry();
  prodGeo.setAttribute('position', new BufferAttribute(new Float32Array([0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0]), 3));
  prodGeo.setIndex([0, 1, 2, 0, 2, 3]);
  const pRect = new InstancedBufferAttribute(new Float32Array(16), 4);
  const pPos = new InstancedBufferAttribute(new Float32Array(16), 4);
  const pAsp = new InstancedBufferAttribute(new Float32Array(4), 1);
  prodGeo.setAttribute('iRect', pRect); prodGeo.setAttribute('iPos', pPos); prodGeo.setAttribute('iAsp', pAsp);
  prodGeo.instanceCount = 0;
  const prodU = { uTex: { value: null }, uExpo: roomU.uExpo, uFade: { value: 0 } };
  const products = new Mesh(prodGeo, new ShaderMaterial({ uniforms: prodU, vertexShader: SH.PROD_VS, fragmentShader: SH.PROD_FS, alphaToCoverage: true }));
  products.frustumCulled = false;
  products.visible = false;
  {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => {
      const tex = new Texture(img);
      tex.flipY = false; tex.colorSpace = NoColorSpace; tex.anisotropy = Math.min(4, maxAniso);
      tex.minFilter = LinearMipmapLinearFilter; tex.needsUpdate = true;
      prodU.uTex.value = tex;
      products.visible = true;
      prodU.uFade.value = 1;
      counterU.uProdOn.value = 1;
    };
    img.src = assetBase + 'products.webp';
  }

  const scene = new Scene();
  scene.add(room, counter, products, wall, reveal, flags, cords);
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
      sySill = copy ? Math.min(0.7, (copy.top - 34) / H) : 0.62;
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

    // interior framing at p = 1 (solve so the counter top and wordmark land where we want them)
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


    // ---- strings. Screen-space design (y at left edge, right edge, extra dip at the centre), placed at a depth
    // in front of the wall. Each string is two halves joined at the centre: the curtain parts there.
    const design = portrait
      ? [ { yl: 0.085, yr: 0.15, dip: 0.022, z: 0.3 }, { yl: 0.175, yr: 0.105, dip: 0.022, z: 0.5 },
          { yl: 0.235, yr: 0.25, dip: 0.03, z: 0.7 }, { yl: 0.325, yr: 0.325, dip: 0.028, z: 0.9 } ]
      : [ { yl: 0.1, yr: 0.13, dip: 0.06, z: 0.3 }, { yl: 0.2, yr: 0.17, dip: 0.06, z: 0.55 },
          { yl: 0.3, yr: 0.3, dip: 0.055, z: 0.85 } ];
    const motifPitch = portrait ? W / 4.3 : Math.max(80, Math.min(124, W * 0.07));
    strings.length = 0;
    const inst = [];
    const word = ['dalia', 'L', 'A', 'zacatecas', 'Z', 'A', 'C', 'A', 'T', 'E', 'C', 'A', 'N', 'A', 'dalia'];
    const letters = portrait ? word.slice(1, 14) : word;
    let colorIx = 0, letterIx = 0;
    const rnd = (n) => fract(Math.sin(n * 127.1 + 311.7) * 43758.5453);

    // generic half-string builder: parabola y = yM + b·X + k·X² around the joint x0 (X = x − x0)
    function addHalves({ x0, z, yM, b, k, Wd, st, lift, kinds, pitch, fwid, fh, interior }) {
      for (const side of [-1, 1]) {
        const X = side * Wd;
        const yA = yM + b * X + k * X * X;
        const slope = b + 2 * k * X;
        const A0 = new Vector3(x0 + X, yA, z);
        const E0 = new Vector3(x0, yM, z);
        const C0 = new Vector3(x0 + X / 2, yA - slope * (X / 2), z);
        const N = 96, tab = [0];
        let prev = bezier(A0, C0, E0, 1), acc = 0;
        for (let j = 1; j <= N; j++) { const pt = bezier(A0, C0, E0, 1 - j / N); acc += pt.distanceTo(prev); prev = pt; tab.push(acc); }
        const tAt = (sArc) => {
          for (let j = 1; j <= N; j++) if (tab[j] >= sArc) { const f = (sArc - tab[j - 1]) / (tab[j] - tab[j - 1]); return 1 - (j - 1 + f) / N; }
          return 0;
        };
        const hs = strings.length;
        strings.push({ side, A0, C0, E0, Wd, hv: Wd / 1.3, z, lift, st, interior: !!interior });
        const seq = kinds(side);
        seq.forEach((kind, e) => {
          const c = (e + 0.5) * pitch;
          const ta = tAt(c - fwid / 2), tb = tAt(c + fwid / 2);
          const lo = Math.min(ta, tb), hi = Math.max(ta, tb);
          const isLetter = typeof kind === 'string' && kind.length === 1;
          const tile = typeof kind === 'number' ? kind : TILE[kind];
          const colName = isLetter ? null : MOTIF_COLORS[(colorIx++) % MOTIF_COLORS.length];
          inst.push({ t0: side < 0 ? lo : hi, t1: side < 0 ? hi : lo, tile, hs, fh, fw: fwid, isLetter, colName, kind, side, e });
        });
      }
    }

    design.forEach((d, i) => {
      const sc = (D - d.z) / D;
      const hv = (visW * sc) / 2;
      const yAt = (sy) => cy + (0.5 - sy) * visH * sc;
      const yl = yAt(d.yl), yr = yAt(d.yr), yM = (yl + yr) / 2 - d.dip * visH * sc;
      const bb = (yr - yl) / (2 * hv), kk = ((yl + yr) / 2 - yM) / (hv * hv);
      const isLetters = i === design.length - 1;
      const pitchPx = isLetters ? Math.min(motifPitch * (portrait ? 1 : 0.95), (W * (portrait ? 0.975 : 0.93)) / letters.length) : motifPitch * (1 - i * 0.05);
      const pitch = (pitchPx / W) * visW * sc;
      const fwid = pitch * (isLetters ? 0.9 : 0.85);
      const fh = fwid * 1.25;
      const nL = isLetters ? Math.ceil(letters.length / 2) : 0;
      const x0 = cx + (isLetters && letters.length % 2 ? pitch / 2 : 0);
      const ytop = cy + (visH * sc) / 2;
      const lift = ytop - Math.min(yl, yr) + fh * 1.4 + 0.5;
      addHalves({
        x0, z: d.z, yM, b: bb, k: kk, Wd: hv * 1.3, st: (design.length - 1 - i) * 0.05, lift, pitch, fwid, fh,
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

    // ---- a small string inside the shop, along the top of the yellow wall (no curtain move, no cast shadow).
    // It always occupies half-strings 8 and 9 (the light pass skips those); unused outdoor slots stay degenerate.
    while (strings.length < 8) strings.push({ unused: true });
    {
      const zI = ROOM.z0 + 0.45;
      const dI = zcam1 - zI;
      const yTopI = ycam1 + (0.5 - (portrait ? 0.085 : 0.085)) * 2 * dI * t1;
      const hvI = dI * t1 * a + 0.2;
      const pitchI = portrait ? 0.24 : 0.25;
      const dipI = portrait ? 0.12 : 0.08;
      addHalves({
        x0: 0, z: zI, yM: yTopI - dipI, b: 0, k: dipI / (hvI * hvI), Wd: hvI * 1.15, st: 2, lift: 0,
        pitch: pitchI, fwid: pitchI * 0.86, fh: pitchI * 0.86 * 1.25, interior: true,
        kinds: (side) => { const n = Math.ceil(hvI / pitchI) + 1; const q = []; for (let e = 0; e < n; e++) q.push(MOTIFS[(e * 3 + (side > 0 ? 5 : 1)) % MOTIFS.length]); return q; },
      });
    }

    // colours: letters alternate strong tissue colours so the cut letters (showing the pale wall) read clearly
    inst.filter((f) => f.isLetter)
      .sort((p1, p2) => (p1.side * (p1.e + 0.5)) - (p2.side * (p2.e + 0.5)))
      .forEach((f) => { f.colName = LETTER_COLORS[(letterIx++) % LETTER_COLORS.length]; });
    inst.forEach((f, n) => {
      if (n >= MAXF) return;
      aT.array[n * 2] = f.t0; aT.array[n * 2 + 1] = f.t1;
      aTile.array.set(tileRect(f.tile), n * 4);
      aCol.array.set(lin(HEX[f.colName]), n * 3);
      aMisc.array.set([f.hs, rnd(n * 3.7 + 1.3), f.fh, f.fw], n * 4);
    });
    flagGeo.instanceCount = Math.min(MAXF, inst.length);
    aT.needsUpdate = aTile.needsUpdate = aCol.needsUpdate = aMisc.needsUpdate = true;

    // products across the counter top, tall ones at the ends, framed for p = 1
    {
      const order = portrait ? [1, 2, 3] : [1, 0, 2, 3];
      const zP = CTR.zf - 0.2;
      const fwC = 2 * (zcam1 - zP) * t1 * a;
      const spread = fwC * (portrait ? 0.68 : 0.56);
      const scl = portrait ? 0.82 : 1.05;
      order.forEach((pi, j) => {
        const P = PRODUCTS[pi];
        const xP = order.length === 1 ? 0 : -spread / 2 + (spread * j) / (order.length - 1);
        pRect.array.set(P.uv, j * 4);
        pPos.array.set([xP, CTR.h - 0.004, zP, P.h * scl], j * 4);
        pAsp.array[j] = P.aspect;
        counterU.uProd.value[j].set(xP, zP + 0.01, P.h * scl * P.aspect * 0.42, 0.07);
      });
      for (let j = order.length; j < 4; j++) counterU.uProd.value[j].set(99, 99, 0.01, 0.01);
      prodGeo.instanceCount = order.length;
      pRect.needsUpdate = pPos.needsUpdate = pAsp.needsUpdate = true;
    }

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
      const act = Math.sin(Math.PI * Math.min(1, sp * 1.25));
      U.uFl.value[k] = 1 + 2.1 * act;
      U.uLv.value[k] = 0.25 + 0.5 * ex;
      U.uGa.value[k] = ex;
    });
    // camera: dolly toward the arched opening, through it, and settle on the yellow wall + counter
    const u = smoother(span(p, 0.04, 0.97));
    P0.set(L.cx, L.cy, L.D);
    P1.set(lerp(L.cx, 0, 0.5), lerp(L.cy, L.yWinMid, 0.7), L.D * 0.6);
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
    shadowsOn = p < 0.64;
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

  let p = 0, shadowsOn = true;
  function setP(v) { p = v; }

  function render(time) {
    renderer.info.reset();
    U.uTime.value = time;
    applyP(p);
    // 1) light's-eye transmittance of the tissue, 2) separable blur, 3) main view
    if (shadowsOn) {
      renderer.setClearColor(0xffffff, 1);
      renderer.setRenderTarget(shA);
      renderer.clear();
      renderer.render(shScene, lightCam);
      blurU.uTex.value = shA.texture; blurU.uDir.value = [1.0 / shSize[0], 0];
      renderer.setRenderTarget(shB); renderer.render(blurScene, fsCam);
      blurU.uTex.value = shB.texture; blurU.uDir.value = [0, 1.0 / shSize[1]];
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
