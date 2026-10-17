// Direction A — "La Mangonada, Desarmada". Entry (bundled as an IIFE by the shell).
import {
  WebGLRenderer, Scene, PerspectiveCamera, PMREMGenerator, DirectionalLight, NeutralToneMapping,
  Matrix4, Vector3, Color, Mesh, BoxGeometry, MeshBasicMaterial,
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { buildMangonada } from './parts.js';
import { applyPose, domState, shotWeights, PIN_P, W as WIN, k as partK } from './choreo.js';
import { createCallouts } from './callouts.js';
import { lerp, clamp01, seg, smooth, DEG } from './util.js';

const FOV = 22;
const TANH = Math.tan((FOV * DEG) / 2);
export const FRAME0 = 2.74;        // world units spanned by the poster/cup box height at p = 0
const TARGET0 = [0, 1.07, 0];
const SHOT0 = { D: 7.6, az: 0, el: 9 * DEG };

function boot() {
  const section = document.querySelector('.hero--a[data-hero]');
  if (!section || section.__zacaA) return;
  section.__zacaA = true;
  const POSTER = window.__HERO_A_POSTER__ || null; // tooling: render the static first frame
  const STILL = !!window.__HERO_A_STILL__ || !!POSTER; // tooling: freeze ambient time for exact up/down pairs
  const goStatic = (why) => {
    section.classList.add('is-static');
    section.classList.remove('is-live', 'is-done');
    section.dataset.heroState = `static:${why}`;
  };
  if (!POSTER && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return goStatic('reduced-motion');
  const canvas = section.querySelector('.hero-gl');
  let gl = null;
  try {
    gl = canvas.getContext('webgl2', { antialias: true, alpha: true, premultipliedAlpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: !!POSTER });
  } catch (e) { gl = null; }
  if (!gl) return goStatic('no-webgl');
  try { start(section, canvas, gl, POSTER, STILL, goStatic); } catch (e) { console.error('[hero-a]', e); goStatic('error'); }
}

function tintRoom(room) {
  room.traverse((o) => {
    if (!o.isMesh) return;
    const m = o.material;
    if (m.side === 1 /* BackSide: the room shell */) m.color = new Color('#efe4e2');
    else if (m.isMeshBasicMaterial && o.position.x > 14) m.color.setRGB(1, 0.78, 0.2).multiplyScalar(22); // sunflower panel, right
    else if (m.isMeshBasicMaterial && o.position.z > 14) m.color.setRGB(1, 0.94, 0.95).multiplyScalar(40);
  });
  // bottle-photography rig: two tall strip softboxes in front + black flags outside them.
  // Strips give PET its vertical highlight lines, flags give it dark edges → it reads as clear plastic.
  const box = new BoxGeometry(1, 1, 1);
  const flagMat = new MeshBasicMaterial({ color: new Color('#120509') });
  const stripMat = new MeshBasicMaterial({ color: new Color(1, 0.97, 0.94).multiplyScalar(30) });
  for (const x of [-1, 1]) {
    const strip = new Mesh(box, stripMat);
    strip.position.set(x * 4.2, 5.5, 9.5);
    strip.rotation.y = x * 0.42;
    strip.scale.set(1.1, 11, 0.1);
    const flag = new Mesh(box, flagMat);
    flag.position.set(x * 8.2, 5.5, 5.5);
    flag.rotation.y = x * -0.75;
    flag.scale.set(0.2, 13, 4.5);
    room.add(strip, flag);
  }
}

function start(section, canvas, gl, POSTER, STILL, goStatic) {
  const stage = section.querySelector('.hero-stage');
  const cupBox = section.querySelector('.hero-cup');
  const copy = section.querySelector('.hero-copy');
  const cue = section.querySelector('.hero-cue');
  const chApart = section.querySelector('.hero-chapter--apart');
  const chWhole = section.querySelector('.hero-chapter--together');
  const phoneQ = window.matchMedia('(max-width: 719px)');
  const tier = POSTER ? 'hi' : (phoneQ.matches || Math.min(screen.width, screen.height) < 600 ? 'phone' : 'hi');
  const phone = tier === 'phone';
  const coarse = window.matchMedia('(hover: none)').matches;

  // ------------------------------------------------------------------ renderer / scene
  const renderer = new WebGLRenderer({ canvas, context: gl, antialias: true, alpha: true, premultipliedAlpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = NeutralToneMapping;
  renderer.toneMappingExposure = 0.96;
  renderer.transmissionResolutionScale = phone ? 0.6 : 0.8;
  renderer.setPixelRatio(POSTER ? 1 : Math.min(window.devicePixelRatio || 1, phone ? 1.5 : 2));

  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  tintRoom(room);
  scene.environment = pmrem.fromScene(room, 0.035).texture;
  scene.environmentIntensity = 0.72;
  room.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); o.material.dispose(); } });
  pmrem.dispose();

  const key = new DirectionalLight(new Color('#ffe08a'), 1.5);
  key.position.set(3.2, 4.5, 2.6);
  const fill = new DirectionalLight(new Color('#ffeedd'), 0.4);
  fill.position.set(-4, 1.8, 2.5);
  const rim = new DirectionalLight(new Color('#ffffff'), 0.75);
  rim.position.set(-1.5, 3.5, -4);
  scene.add(key, fill, rim);

  const P = buildMangonada({ phone, maxAniso: renderer.capabilities.getMaxAnisotropy() });
  scene.add(P.root);

  const camera = new PerspectiveCamera(FOV, 1, 0.1, 100);
  camera.updateProjectionMatrix();
  const baseProj = camera.projectionMatrix.clone();
  const M = new Matrix4();
  const tgt = new Vector3();

  /** shot = { cx, cy, scale (px per world unit), D, tx, ty, tz, az, el } in canvas (= viewport) px */
  function applyShot(s, Wc, Hc) {
    tgt.set(s.tx, s.ty, s.tz);
    const ce = Math.cos(s.el);
    camera.position.set(tgt.x + s.D * Math.sin(s.az) * ce, tgt.y + s.D * Math.sin(s.el), tgt.z + s.D * Math.cos(s.az) * ce);
    camera.lookAt(tgt);
    camera.updateMatrixWorld();
    const h = s.scale * 2 * s.D * TANH;
    M.set(h / Wc, 0, 0, (s.cx / Wc) * 2 - 1, 0, h / Hc, 0, 1 - (s.cy / Hc) * 2, 0, 0, 1, 0, 0, 0, 0, 1);
    camera.projectionMatrix.copy(baseProj).premultiply(M);
    camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
  }
  const lerpShot = (a, b, t) => {
    const o = {};
    for (const k of Object.keys(a)) o[k] = lerp(a[k], b[k], t);
    return o;
  };

  // ------------------------------------------------------------------ poster tooling path
  if (POSTER) {
    const Wp = POSTER.w, Hp = POSTER.h;
    canvas.style.cssText = `position:fixed;left:0;top:0;width:${Wp}px;height:${Hp}px;visibility:visible;z-index:9999;background:transparent`;
    renderer.setSize(Wp, Hp, false);
    applyPose(P, 0, 0, true);
    applyShot({ cx: Wp / 2, cy: Hp / 2, scale: Hp / FRAME0, D: SHOT0.D, tx: TARGET0[0], ty: TARGET0[1], tz: TARGET0[2], az: SHOT0.az, el: SHOT0.el }, Wp, Hp);
    renderer.render(scene, camera);
    renderer.render(scene, camera);
    window.__HERO_A_POSTER_DATA__ = canvas.toDataURL('image/png');
    return;
  }

  // ------------------------------------------------------------------ layout (measured on refresh)
  const L = { vw: 1, vh: 1, cw: 1, ch: 1, sectionTop: 0, pinDist: 1, pinEnd: 1, endScroll: 2, stageH: 1, top: 64, bottom: 0, cup: { x: 0, y: 0, w: 1, h: 1 }, slot: null, img: null, fit: 'contain', hasSlot: false };
  function measure() {
    const sy = window.scrollY;
    L.vw = window.innerWidth; L.vh = window.innerHeight;
    const sr = section.getBoundingClientRect();
    L.sectionTop = sr.top + sy;
    L.stageH = stage.offsetHeight;
    L.pinDist = Math.max(1, section.offsetHeight - L.stageH);
    L.pinEnd = L.sectionTop + L.pinDist;
    const cs = getComputedStyle(section);
    L.top = parseFloat(cs.getPropertyValue('--a-top')) || 64;
    L.bottom = parseFloat(cs.getPropertyValue('--a-bottom')) || 0;
    const st = stage.getBoundingClientRect();
    const cr = cupBox.getBoundingClientRect();
    L.cup = { x: cr.left - st.left, y: cr.top - st.top, w: cr.width, h: cr.height };
    L.slot = document.querySelector('[data-flip-target="mangonada"] .flip-slot');
    L.img = L.slot ? L.slot.querySelector('img') : null;
    L.hasSlot = !!L.slot;
    if (L.img) { L.fit = getComputedStyle(L.img).objectFit || 'fill'; scanPhoto(); }
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - L.vh);
    if (L.hasSlot) {
      const r = L.slot.getBoundingClientRect();
      const want = r.top + sy + r.height / 2 - L.vh * (phoneQ.matches ? 0.47 : 0.5);
      L.endScroll = Math.min(maxScroll, Math.max(L.pinEnd + L.vh * 0.3, want));
    } else {
      L.endScroll = Math.min(maxScroll, L.pinEnd + L.vh * 0.5);
    }
    L.endScroll = Math.max(L.endScroll, L.pinEnd + 1);
  }
  const pFromScroll = (s) => {
    if (s <= L.sectionTop) return 0;
    if (s <= L.pinEnd) return (PIN_P * (s - L.sectionTop)) / L.pinDist;
    return Math.min(1, PIN_P + ((1 - PIN_P) * (s - L.pinEnd)) / (L.endScroll - L.pinEnd));
  };
  const scrollForP = (p) => (p <= PIN_P ? L.sectionTop + (p / PIN_P) * L.pinDist : L.pinEnd + ((p - PIN_P) / (1 - PIN_P)) * (L.endScroll - L.pinEnd));
  const stageTopAt = (s) => (s < L.sectionTop ? L.sectionTop - s : s <= L.pinEnd ? 0 : L.pinEnd - s);

  // ------------------------------------------------------------------ shots
  const shot0 = (st) => ({ cx: L.cup.x + L.cup.w / 2, cy: st + L.cup.y + L.cup.h / 2, scale: L.cup.h / FRAME0, D: SHOT0.D, tx: TARGET0[0], ty: TARGET0[1], tz: TARGET0[2], az: SHOT0.az, el: SHOT0.el });
  const FRAME_APART = 8.1;
  function shotApart(st) {
    const narrow = L.vw < 720;
    const top = L.top + (narrow ? 70 : 22), bot = L.stageH - (narrow ? L.bottom + 6 : 22);
    const h = bot - top;
    return { cx: narrow ? L.vw * 0.33 : L.vw * 0.52, cy: st + top + h / 2, scale: h / FRAME_APART, D: 14, tx: 0, ty: 3.5, tz: 0, az: 32 * DEG, el: 15 * DEG };
  }
  function shotWhole(st) {
    const narrow = L.vw < 720;
    const top = L.top + (narrow ? 84 : 30), bot = L.stageH - (narrow ? L.bottom + 18 : 34);
    const h = bot - top;
    return { cx: narrow ? L.vw * 0.5 : L.vw * 0.63, cy: st + top + h * 0.5, scale: (h * 0.94) / 2.95, D: 8.2, tx: 0, ty: 1.05, tz: 0, az: -5 * DEG, el: 10 * DEG };
  }
  // landing: fit the projected cup (base → lid, no straw) onto the painted photo inside .flip-slot
  const LAND = { D: 9, az: 0, el: 12 * DEG, tx: 0, ty: 0.85, tz: 0 };
  const landRef = (() => {
    // project silhouette points with cx=cy=0, scale=1 in a 2×2 px canvas → px offsets at scale 1
    applyShot({ cx: 0, cy: 0, scale: 1, ...LAND }, 2, 2);
    let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      for (const v of [new Vector3(Math.sin(a) * 0.656, 1.69, Math.cos(a) * 0.656), new Vector3(Math.sin(a) * 0.45, 0, Math.cos(a) * 0.45)]) {
        v.project(camera);
        const px = v.x + 1, py = 1 - v.y;
        x0 = Math.min(x0, px); x1 = Math.max(x1, px); y0 = Math.min(y0, py); y1 = Math.max(y1, py);
      }
    }
    return { x0, x1, y0, y1 };
  })();
  function paintedPhoto() {
    // the photo's own box (robust to however the shell sizes it), then its object-fit content box
    const r = (L.img || L.slot).getBoundingClientRect();
    const nw = (L.img && L.img.naturalWidth) || 1074, nh = (L.img && L.img.naturalHeight) || 1400;
    let w = r.width, h = r.height;
    if (L.img && (L.fit === 'contain' || L.fit === 'scale-down' || L.fit === 'cover')) {
      const s = L.fit === 'cover' ? Math.max(r.width / nw, r.height / nh) : Math.min(r.width / nw, r.height / nh);
      w = nw * s; h = nh * s;
    } else if (!L.img) { h = r.height * 0.92; w = h * 0.77; }
    return { x: r.left + (r.width - w) / 2, y: r.top + (r.height - h) / 2, w, h };
  }
  // where the cup actually sits inside the slot photo (shell photos may be padded squares).
  // Scanned once from the image's alpha; same-origin in production. Falls back to "fills the frame".
  const photoBox = { x0: 0, y0: 0, x1: 1, y1: 1 };
  let scanned = '';
  function scanPhoto() {
    const src = L.img && (L.img.currentSrc || L.img.src);
    if (!src || src === scanned) return;
    scanned = src;
    const im = new Image();
    im.decoding = 'async';
    im.src = src;
    (im.decode ? im.decode() : new Promise((r, j) => { im.onload = r; im.onerror = j; })).then(() => {
      const w = 96, h = Math.max(8, Math.round((96 * im.naturalHeight) / im.naturalWidth));
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      const g = c.getContext('2d', { willReadFrequently: true });
      g.drawImage(im, 0, 0, w, h);
      const d = g.getImageData(0, 0, w, h).data;
      let x0 = w, y0 = h, x1 = -1, y1 = -1;
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (d[(y * w + x) * 4 + 3] > 110) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
      if (x1 > x0 && y1 > y0 && (x1 - x0) * (y1 - y0) > w * h * 0.08) Object.assign(photoBox, { x0: x0 / w, y0: y0 / h, x1: (x1 + 1) / w, y1: (y1 + 1) / h });
    }).catch(() => {});
  }
  function shotLand() {
    const pp = paintedPhoto();
    const pr = { x: pp.x + pp.w * photoBox.x0, y: pp.y + pp.h * photoBox.y0, w: pp.w * (photoBox.x1 - photoBox.x0), h: pp.h * (photoBox.y1 - photoBox.y0) };
    const scale = (pr.h * 0.995) / (landRef.y1 - landRef.y0);
    const midX = ((landRef.x0 + landRef.x1) / 2) * scale, midY = ((landRef.y0 + landRef.y1) / 2) * scale;
    return { cx: pr.x + pr.w * 0.5 - midX, cy: pr.y + pr.h * 0.5 - midY, scale, ...LAND };
  }

  // ------------------------------------------------------------------ canvas sizing (iOS-safe)
  let allocW = 0, allocH = 0;
  function sizeCanvas(force) {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    if (force || w !== allocW || Math.abs(h - allocH) >= 160) {
      allocW = w; allocH = h;
      renderer.setSize(w, h, false);
    }
    L.cw = w; L.ch = h;
  }

  // ------------------------------------------------------------------ callouts
  const callouts = createCallouts(section);
  const anchorV = new Vector3();
  const camRight = new Vector3();
  function project(v) {
    v.project(camera);
    return { x: ((v.x + 1) / 2) * L.cw, y: ((1 - v.y) / 2) * L.ch };
  }
  // part → anchor in root space (pivot + offset along camera-right)
  const CALL = [
    { part: 'chamoy', obj: () => P.chamoy, off: [0, 0.6, 0], r: 0.6, win: WIN.chamoy },
    { part: 'sorbet', obj: () => P.sorbet, off: [0, 0.28, 0], r: 0.6, win: WIN.sorbet },
    { part: 'mango', obj: null, at: [0, 4.72, 0], r: 0.7, win: WIN.cubes },
    { part: 'tajin', obj: null, at: [0, 5.28, 0], r: 0.84, win: WIN.tajin },
    { part: 'banderilla', obj: () => P.band, local: [0, 0.46, 0], win: WIN.band },
  ];

  // ------------------------------------------------------------------ DOM writes (cached)
  const cache = new Map();
  const setStyle = (el, prop, val) => {
    const k = el; let c = cache.get(k); if (!c) { c = {}; cache.set(k, c); }
    if (c[prop] !== val) { c[prop] = val; el.style[prop] = val; }
  };

  // ------------------------------------------------------------------ pointer
  const ptr = { x: 0, y: 0, tx: 0, ty: 0 };
  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    ptr.tx = (e.clientX / window.innerWidth) * 2 - 1;
    ptr.ty = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });

  // ------------------------------------------------------------------ frame
  let raf = 0, last = 0, t0 = -1, pDisp = -1, lost = false, docVisible = !document.hidden, inView = true, live = false;
  const info = { calls: 0, triangles: 0, frameMs: 0, frames: 0 };
  let lastSig = '';

  function render(now) {
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
    last = now;
    if (t0 < 0) t0 = now;
    const t = STILL ? 0 : (now - t0) / 1000;
    const s = window.scrollY;
    const pT = pFromScroll(s);
    if (pDisp < 0 || STILL) pDisp = pT;
    else { pDisp += (pT - pDisp) * (1 - Math.exp(-dt * 11)); if (Math.abs(pT - pDisp) < 2e-4) pDisp = pT; }
    const p = pDisp;
    const tStart = performance.now();

    // ---- camera shot (pure function of p, plus damped pointer / ambient)
    const st = stageTopAt(s);
    const w = shotWeights(p);
    let sh = lerpShot(shot0(st), shotApart(st), w.a);
    sh = lerpShot(sh, shotWhole(st), w.b);
    if (w.c > 0) sh = lerpShot(sh, L.hasSlot ? shotLand() : { ...shotWhole(st), scale: shotWhole(st).scale * 0.6 }, w.c);
    const settle = 1 - smooth(seg(p, 0.84, 0.95));
    const k = 1 - Math.exp(-dt * 3.5);
    ptr.x += (ptr.tx - ptr.x) * k; ptr.y += (ptr.ty - ptr.y) * k;
    const auto = coarse && !STILL ? Math.sin(t * 0.32) : 0;
    sh.az += (ptr.x * 0.16 + auto * 0.09) * settle;
    sh.el += (ptr.y * 0.07 + (coarse && !STILL ? Math.sin(t * 0.21 + 1) * 0.025 : 0)) * settle;
    applyShot(sh, L.cw, L.ch);

    // ---- scene pose
    applyPose(P, p, t, STILL);
    const apart = clamp01(w.a * (1 - w.b));
    const swayAmp = (STILL ? 0 : 1) * lerp(1, 0.3, apart) * settle;
    P.root.rotation.y = swayAmp * 0.34 * Math.sin(t * 0.42);

    // ---- DOM
    const D = domState(p);
    setStyle(copy, 'opacity', D.copy.toFixed(3));
    setStyle(copy, 'transform', `translate3d(0, ${(-28 * (1 - D.copy)).toFixed(1)}px, 0)`);
    setStyle(copy, 'visibility', D.copy < 0.01 ? 'hidden' : '');
    if (cue) setStyle(cue, 'opacity', D.cue.toFixed(3));
    setStyle(chApart, 'opacity', D.apart.toFixed(3));
    setStyle(chApart, 'visibility', D.apart < 0.01 ? 'hidden' : 'visible');
    setStyle(chWhole, 'opacity', D.whole.toFixed(3));
    setStyle(chWhole, 'visibility', D.whole < 0.01 ? 'hidden' : 'visible');
    if (L.img) setStyle(L.img, 'opacity', L.hasSlot ? D.photo.toFixed(3) : '');
    setStyle(canvas, 'opacity', (1 - D.photo).toFixed(3));
    const done = pT >= 1 && pDisp >= 1;
    section.classList.toggle('is-done', done);

    // ---- callouts
    const anchors = {};
    if (D.callOut > 0 && apart > 0.2) {
      camRight.setFromMatrixColumn(camera.matrixWorld, 0).normalize();
      P.root.updateMatrixWorld();
      for (const c of CALL) {
        const wEnd = c.win.ex[1];
        const draw = smooth(seg(p, wEnd - 0.06, wEnd + 0.03));
        const a = draw > 0 ? Math.min(1, draw * 3) * D.callOut : 0;
        if (a <= 0) continue;
        if (c.local) anchorV.set(...c.local).applyMatrix4(c.obj().matrixWorld);
        else {
          if (c.obj) anchorV.copy(c.obj().position).add(tgt.set(...c.off)).applyMatrix4(P.root.matrixWorld);
          else anchorV.set(...c.at).applyMatrix4(P.root.matrixWorld);
          anchorV.addScaledVector(camRight, c.r);
        }
        const pr = project(anchorV);
        anchors[c.part] = { x: pr.x, y: pr.y, a, d: draw };
      }
    }
    const narrow = L.vw < 720;
    const colX = narrow ? Math.min(L.vw - 152, sh.cx + 0.98 * sh.scale + 14) : sh.cx + 1.18 * sh.scale + 34;
    callouts.update(anchors, colX, [L.top + 12, L.vh - L.bottom - 12]);

    // ---- render (skip identical frames: frozen tooling mode, or p/pointer settled with no ambient)
    const sig = `${p}|${sh.cx.toFixed(2)}|${sh.cy.toFixed(2)}|${sh.az.toFixed(5)}|${sh.el.toFixed(5)}|${L.cw}x${L.ch}`;
    const same = STILL && sig === lastSig;
    lastSig = sig;
    if (!done && !same) {
      renderer.render(scene, camera);
      info.calls = renderer.info.render.calls; info.triangles = renderer.info.render.triangles; info.frames++;
    }
    info.frameMs = performance.now() - tStart;
    info.p = p;
  }

  function shouldRun() {
    if (lost || !docVisible) return false;
    const pT = pFromScroll(window.scrollY);
    return (inView || pT < 1) && (pT < 1 || pDisp < 1);
  }
  function loop(now) {
    raf = 0;
    if (!shouldRun()) {
      // leaving (or jumped past) the hero: settle exactly on the scroll target so nothing is left mid-flight
      if (live && !lost) { pDisp = pFromScroll(window.scrollY); render(now); }
      last = 0;
      return;
    }
    render(now);
    raf = requestAnimationFrame(loop);
  }
  function wake() { if (!raf && live && !lost) raf = requestAnimationFrame(loop); }

  // ------------------------------------------------------------------ scroll + lifecycle
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  const trigger = ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: () => { measure(); return L.endScroll; },
    invalidateOnRefresh: true,
    onUpdate: wake, onToggle: wake, onRefresh: () => { sizeCanvas(false); callouts.measure(); wake(); },
  });
  window.addEventListener('scroll', wake, { passive: true });
  window.addEventListener('resize', () => { sizeCanvas(false); wake(); }, { passive: true });
  document.addEventListener('visibilitychange', () => { docVisible = !document.hidden; last = 0; wake(); });
  const io = new IntersectionObserver((es) => { inView = es[0].isIntersecting; wake(); }, { rootMargin: '0px 0px 40% 0px' });
  io.observe(section);
  let roT = 0;
  const ro = new ResizeObserver(() => { clearTimeout(roT); roT = setTimeout(() => ScrollTrigger.refresh(), 160); });
  const fav = document.querySelector('[data-flip-target="mangonada"]');
  if (fav) ro.observe(fav.closest('section') || fav);

  canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    lost = true;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    const s = window.scrollY;
    const wasPast = s > L.pinEnd, wasIn = s > L.sectionTop && !wasPast;
    if (L.img) L.img.style.opacity = '';
    trigger.kill();
    goStatic('context-lost');
    // keep the reader where they were once the pinned track collapses
    if (wasPast) window.scrollTo(0, s - L.pinDist); else if (wasIn) window.scrollTo(0, L.sectionTop);
  });

  // ------------------------------------------------------------------ first frame → hand-off from the poster
  measure();
  sizeCanvas(true);
  callouts.measure();
  const begin = () => {
    if (lost) return;
    render(performance.now());
    requestAnimationFrame(() => {
      section.classList.add('is-live');
      section.dataset.heroState = 'live';
      live = true;
      last = 0;
      wake();
    });
  };
  const ready = renderer.compileAsync ? renderer.compileAsync(scene, camera).catch(() => {}) : Promise.resolve();
  ready.then(begin);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { callouts.measure(); });

  // QA hooks (read-only; used by tools/shots.mjs and tools/check.mjs)
  window.__heroA = {
    info: () => ({ ...info, programs: renderer.info.programs ? renderer.info.programs.length : 0, geometries: renderer.info.memory.geometries, textures: renderer.info.memory.textures }),
    scrollForP: (p) => { measure(); return scrollForP(p); },
    p: () => pDisp,
    running: () => !!raf,
    layout: () => ({ ...L, slot: !!L.slot, img: !!L.img, photoBox: { ...photoBox } }),
  };
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
else boot();
