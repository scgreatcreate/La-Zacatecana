// Direction C · "Chamoy After Dark" — hero entry (bundled as an IIFE).
// Static first frame = hero.html + hero.css. This file upgrades it to WebGL: a chamoy fluid sim with
// Tajín flecks, a neon sign that flickers on (bloom), a pour that drips over it, and a scroll-driven
// drain (pure function of scroll progress p) that reveals the draggable ¿dulce o picante? split.
// Debug params: ?seed=N (deterministic RNG) · ?freeze=S (simulate S seconds, then hold the fluid still
// so screenshots at equal p match exactly) · ?fps (log frame time).
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createContext } from './gl.js';
import { createFluid } from './fluid.js';
import { createDivider } from './divider.js';
import { paintNeon, paintNight, paintSeed, ignite, IGNITE_MS, stageBox, DYE_RGB } from './neon.js';

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const sm = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Everything scroll controls. Pure: same p -> same state, up or down.
export function choreo(p) {
  const x = clamp((p - 0.03) / 0.8);
  const d = x * 0.7 + easeInOut(x) * 0.3;             // near-linear: p = .5 is mid-drain
  const level = 1.08 - 1.27 * d;                       // meniscus height (uv, 1 = top)
  return {
    level,
    shift: 1.08 - level,                               // the liquid goes down with its surface
    shiftBg: 0.45 * (1.08 - level),                    // the night behind it, slower (parallax)
    drain: sm(0.02, 0.45, p) * (1 - sm(0.88, 1, p)),   // downward body force while draining
    copyO: 1 - sm(0.015, 0.14, p),
    copyY: -46 * sm(0.015, 0.2, p),
    splitO: sm(0.3, 0.6, p),
    plateS: 1.1 - 0.1 * sm(0.12, 0.72, p),
    handleO: sm(0.58, 0.76, p),
    stream: sm(0.03, 0.13, p),
    drip: sm(0.04, 0.15, p) * (1 - sm(0.64, 0.82, p)),
  };
}

const settle = (pr, ms) => Promise.race([pr.catch(() => {}), new Promise((r) => setTimeout(r, ms))]);

async function boot() {
  const section = document.querySelector('.hero--c[data-hero]');
  if (!section || section.__hcBooted) return;
  section.__hcBooted = true;
  // measure only once the storefront plate and the fonts are in (we may run before window 'load')
  const ph = section.querySelector('.hc-night__photo');
  await Promise.all([
    ph && !ph.complete ? settle(new Promise((r, j) => { ph.addEventListener('load', r, { once: true }); ph.addEventListener('error', j, { once: true }); }), 4000) : null,
    document.fonts && document.fonts.ready ? settle(document.fonts.ready, 2500) : null,
  ]);
  window.__hcBoot = true;

  const $ = (s) => section.querySelector(s);
  const stage = $('.hero-stage');
  const canvas = $('.hc-canvas');
  const split = $('.hc-split');
  const dulce = $('.hc-half--dulce');
  const handle = $('.hc-handle');
  const copy = $('.hc-copy');
  const sign = $('.hc-sign');
  const signSvg = $('.hc-sign__svg');
  const pool = $('.hc-pool');
  const photo = $('.hc-night__photo');
  const words = $('.hc-words');
  const actions = $('.hc-actions');
  const cue = $('.hc-cue');
  const q = new URLSearchParams(location.search);
  const freeze = q.has('freeze') ? Math.max(0.5, parseFloat(q.get('freeze')) || 2.5) : 0;
  const rand = mulberry32(q.has('seed') ? parseInt(q.get('seed'), 10) || 1 : (Math.random() * 1e9) | 0);
  const logFps = q.has('fps');

  const goStatic = (why) => {
    section.classList.remove('is-live', 'is-split', 'is-copy-off');
    section.classList.add('is-static');
    section.dataset.heroMode = 'static:' + why;
    if (handle) handle.hidden = true;
  };
  const mqReduce = matchMedia('(prefers-reduced-motion: reduce)');
  if (mqReduce.matches) return goStatic('reduced-motion');
  if (!stage || !canvas || !signSvg) return goStatic('markup');

  const ctx = createContext(canvas);
  if (!ctx) return goStatic('no-webgl');
  const { gl } = ctx;

  let fluid;
  try { fluid = createFluid(ctx); } catch (e) { console.warn('[hero-c]', e); return goStatic('shader'); }
  const divider = createDivider({ split, dulce, handle, hint: !freeze });

  // ---------------------------------------------------------------- layout / textures
  const L = {};
  const phoneish = () => Math.min(innerWidth, innerHeight) < 600 || matchMedia('(pointer: coarse)').matches;
  function measure() {
    L.cssW = stage.clientWidth;
    L.cssH = split.offsetHeight || innerHeight;     // max(100svh, 100lvh)
    L.svh = stage.clientHeight;
    L.dpr = Math.min(window.devicePixelRatio || 1, 2);
    L.phone = phoneish();
    L.desk = matchMedia('(min-width: 720px)').matches;
  }
  function layoutTextures() {
    // neon sign: texture of the sign box (no transforms -> offset chain)
    const box = stageBox(sign, stage);
    const k = Math.min(L.dpr * 1.15, 2.5);
    const n = paintNeon(signSvg, box, k);
    L.neonRect = [n.rect.x / L.cssW, 1 - (n.rect.y + n.rect.h) / L.cssH, n.rect.w / L.cssW, n.rect.h / L.cssH];
    fluid.setNeon(n.canvas, L.neonRect);
    // where the static pour falls (onto the top of the "t" loop: viewBox x 197.3, half width 6.1) and where letters sit
    const vb = signSvg.viewBox.baseVal;
    const s = Math.min(box.w / vb.width, box.h / vb.height);
    const ox = box.x + (box.w - vb.width * s) / 2 - vb.x * s, oy = box.y + (box.h - vb.height * s) / 2 - vb.y * s;
    L.pourX = (ox + 197.3 * s) / L.cssW;
    L.pourHalf = Math.max(4, 6.1 * s);
    L.tFoot = { x: ox + 199 * s, y: oy + 42 * s };
    L.letters = { x0: ox + 95 * s, x1: ox + 380 * s, y: oy + 41 * s, s };
    // copy-safe rect (legibility mask), css px top-left
    const bs = [words, actions, cue].filter(Boolean).map((el) => stageBox(el, stage));
    L.copy = [Math.min(...bs.map((b) => b.x)), Math.min(...bs.map((b) => b.y)),
      Math.max(...bs.map((b) => b.x + b.w)), Math.max(...bs.map((b) => b.y + b.h))];
    // pool surface (matches the static SVG pool: path top ~30% of its box)
    const pb = pool ? pool.getBoundingClientRect() : null;
    const cb = canvas.getBoundingClientRect();
    L.poolY = pb ? 1 - (pb.top - cb.top + pb.height * 0.3) / L.cssH : 0.1;
    // the night backdrop: storefront plate + the CSS shade, painted once
    const kb = L.desk ? 0.6 : 1;
    let night;
    try {
      night = paintNight(photo && photo.complete ? photo : null, stageBox(photo, stage), L.cssW, L.cssH, kb, L.desk);
      fluid.setBackdrop(night.canvas);
    } catch (e) { // file:// taints the canvas: fall back to the shade only
      night = paintNight(null, null, L.cssW, L.cssH, kb, L.desk);
      fluid.setBackdrop(night.canvas);
    }
  }
  function allocate() {
    measure();
    canvas.width = Math.round(L.cssW * L.dpr);
    canvas.height = Math.round(L.cssH * L.dpr);
    fluid.resize({
      cssW: L.cssW, cssH: L.cssH, pxW: canvas.width, pxH: canvas.height, dpr: L.dpr, rand,
      simArea: L.phone ? 128 * 128 : 176 * 176,
      dyeArea: L.phone ? 512 * 512 : 960 * 960,
      particlesN: L.phone ? 48 : 72,
    });
    L.iters = L.phone ? 16 : 20;
    divider.setSize(L.cssW, L.cssH, L.svh);
    layoutTextures();
  }

  // ---------------------------------------------------------------- state
  let pTarget = 0, p = 0;
  let simT = 0;                      // fluid clock (drives the pour)
  let ambT = 0;                      // ambient clock (waves, idle swirl)
  let igniteStart = performance.now();
  const lit = signSvg.querySelector('.hc-neon-lit--zac');
  try { // sync with the CSS flicker that already started on first paint
    const a = lit && lit.getAnimations ? lit.getAnimations()[0] : null;
    if (a && a.currentTime != null) igniteStart = performance.now() - a.currentTime;
    else igniteStart = -1e9;
  } catch (_) { igniteStart = -1e9; }
  let nextDrip = 1.6 + rand() * 1.2;
  let nextRibbon = 0.4;
  let stutter = { at: 6 + rand() * 5, letter: 2, t: -1 };
  let palette = 0;
  const ptr = { x: 0, y: 0, has: false, moved: false, dx: 0, dy: 0 };
  const vars = new Map();
  const setVar = (k, v) => { if (vars.get(k) !== v) { vars.set(k, v); section.style.setProperty(k, v); } };
  const setCls = (c, on) => { if (section.classList.contains(c) !== on) section.classList.toggle(c, on); };

  allocate();
  fluid.seed(paintSeed(
    [{ svg: signSvg, box: stageBox(sign, stage) }, ...(pool ? [{ svg: pool, box: (() => {
      const pb = pool.getBoundingClientRect(), cb = canvas.getBoundingClientRect();
      return { x: pb.left - cb.left, y: pb.top - cb.top, w: pb.width, h: pb.height };
    })() }] : [])],
    L.cssW, L.cssH, fluid.dims.dw, fluid.dims.dh));

  // ---------------------------------------------------------------- forces / inputs
  const toTex = () => fluid.dims.sh / L.cssH;        // css px -> sim texels
  // the intro pour lands on the "t": thick for 0.6 s, gone by 1.0 s (the name reads well inside 1.5 s);
  // afterwards a short glug now and then keeps the sign dripping
  function pour(t) {
    const intro = t < 0.6 ? 1 : 1 - sm(0.6, 1.0, t);
    const u = (t - 5.5) % 8.5;
    const glug = t > 5.5 && u < 0.5 ? Math.sin((u / 0.5) * Math.PI) * 0.55 : 0;
    return Math.max(intro, glug);
  }
  function inputs(dt, c) {
    const k = toTex();
    const live = c.level > 0.98;
    // pour (intro)
    const pw = pour(simT);
    if (pw > 0.001 && live) {
      const hw = L.pourHalf * (0.35 + 0.65 * pw);
      fluid.splat('dye', L.pourX, 1 - 4 / L.cssH, hw / L.cssH, 28 / L.cssH,
        DYE_RGB.chamoy.map((v) => v * 1.6).concat(1.6), 1);
      fluid.splat('vel', L.pourX, 1 - 4 / L.cssH, hw / L.cssH, 40 / L.cssH, [0, -430 * k * Math.max(pw, 0.55)], 1);
    }
    // ambient drips off the letters
    if (live && simT > nextDrip) {
      nextDrip = simT + 0.45 + rand() * 1.0;
      const atT = rand() < 0.45;   // most drips come off the foot of the "t" the pour ran down
      const x = atT ? L.tFoot.x + (rand() - 0.5) * 3 : L.letters.x0 + rand() * (L.letters.x1 - L.letters.x0);
      const y = atT ? L.tFoot.y : L.letters.y + 2;
      const col = rand() < 0.75 ? DYE_RGB.chamoy : DYE_RGB.deep;
      const r = 4 + rand() * 3;
      fluid.splat('dye', x / L.cssW, 1 - y / L.cssH, r / L.cssH, (r + 2) / L.cssH, col.map((v) => v * 1.5).concat(1.5), 0);
      fluid.splat('vel', x / L.cssW, 1 - y / L.cssH, 6 / L.cssH, 8 / L.cssH, [0, -60 * k], 0);
    }
    // ambient ribbons of mango and strawberry folding into the chamoy pool
    if (live && simT > nextRibbon) {
      nextRibbon = simT + 1.6 + rand() * 1.8;
      const col = rand() < 0.55 ? DYE_RGB.mango : DYE_RGB.fresa;
      const x = 0.12 + rand() * 0.76, y = L.poolY * (0.35 + rand() * 0.5), dir = rand() < 0.5 ? -1 : 1;
      fluid.splat('dye', x, y, 16 / L.cssH, 9 / L.cssH, col.map((v) => v * 0.9).concat(0.9), 0);
      fluid.splat('vel', x, y, 24 / L.cssH, 12 / L.cssH, [dir * 110 * k, 0], 0);
    }
    // idle swirl (two slow stirrers)
    const t = ambT;
    for (const [ax, ay, sx, sy, ph, R] of [[0.5, 0.46, 0.3, 0.14, 1.7, 80]]) {
      const x = ax + sx * Math.sin(t * 0.21 + ph), y = ay + sy * Math.sin(t * 0.33 + ph * 1.3);
      const vx = sx * 0.21 * Math.cos(t * 0.21 + ph), vy = sy * 0.33 * Math.cos(t * 0.33 + ph * 1.3);
      fluid.splat('vel', x, y, R / L.cssH, R / L.cssH, [vx * L.cssW * k * 1.4, vy * L.cssH * k * 1.4], 0);
    }
    // pointer / finger stirs (and paints a little syrup)
    if (ptr.moved && c.level > 0.25) {
      const sp = Math.hypot(ptr.dx, ptr.dy);
      const vx = clamp(ptr.dx / Math.max(dt, 1 / 120), -2400, 2400), vy = clamp(-ptr.dy / Math.max(dt, 1 / 120), -2400, 2400);
      fluid.splat('vel', ptr.x / L.cssW, 1 - ptr.y / L.cssH, 26 / L.cssH, 26 / L.cssH, [vx * k * 0.9, vy * k * 0.9], 0);
      const col = [DYE_RGB.chamoy, DYE_RGB.mango, DYE_RGB.fresa][palette % 3];
      const a = 0.32 * clamp(sp / 18);
      if (a > 0.02) fluid.splat('dye', ptr.x / L.cssW, 1 - ptr.y / L.cssH, 11 / L.cssH, 11 / L.cssH, col.map((v) => v * a).concat(a), 0);
      ptr.moved = false; ptr.dx = 0; ptr.dy = 0;
    }
  }
  function onMove(x, y) {
    const r = canvas.getBoundingClientRect();
    const nx = x - r.left, ny = y - r.top;
    if (ptr.has) { ptr.dx += nx - ptr.x; ptr.dy += ny - ptr.y; ptr.moved = true; }
    ptr.x = nx; ptr.y = ny; ptr.has = true;
  }
  section.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse') onMove(e.clientX, e.clientY); }, { passive: true });
  section.addEventListener('pointerleave', () => { ptr.has = false; }, { passive: true });
  section.addEventListener('pointerdown', (e) => { if (e.pointerType === 'mouse') palette++; }, { passive: true });
  section.addEventListener('touchstart', (e) => { const t = e.touches[0]; ptr.has = false; palette++; onMove(t.clientX, t.clientY); }, { passive: true });
  section.addEventListener('touchmove', (e) => { const t = e.touches[0]; onMove(t.clientX, t.clientY); }, { passive: true });
  section.addEventListener('touchend', () => { ptr.has = false; }, { passive: true });

  // ---------------------------------------------------------------- frame
  function neonLevels(now) {
    if (freeze) return [1, 1, -9, 0];
    const t = now - igniteStart;
    let la = ignite('la', t), zac = ignite('zac', t);
    let letter = -9, dip = 0;
    if (t > IGNITE_MS) { // the odd stutter of one letter, like a real tube
      const sec = ambT;
      if (stutter.t < 0 && sec > stutter.at) { stutter.t = sec; stutter.letter = 2 + Math.floor(rand() * 10); }
      if (stutter.t >= 0) {
        const u = (sec - stutter.t) / 0.42;
        if (u > 1) { stutter = { at: sec + 7 + rand() * 6, letter: 2, t: -1 }; }
        else { letter = stutter.letter; dip = [0.9, 0.1, 0.75, 0.0, 0.55, 0.2, 0][Math.floor(u * 7)] || 0; }
      }
    }
    return [la, zac, letter, dip];
  }

  const F = { // fluid parameters
    curl: 1.2, iters: 16, velDiss: 1.5, dyeDiss: 0.022, visc: 0.45,
    poolCol: DYE_RGB.chamoy.map((v) => v), poolA: 1.5, poolRate: 0.9, poolDamp: 0.7, neonDiss: 1.8,
  };
  const frameState = {};
  let last = performance.now();
  let frames = 0, ftAcc = 0;

  function frame(now, dtOverride) {
    const t0 = performance.now();
    const elapsed = dtOverride != null ? dtOverride : Math.max(0, (now - last) / 1000);
    const dt = Math.min(1 / 30, elapsed);
    last = now;
    // scroll progress (tiny smoothing on wall time, converges to the exact value)
    p += (pTarget - p) * (1 - Math.exp(-elapsed * 14));
    if (Math.abs(pTarget - p) < 0.0004) p = pTarget;
    window.__hcP = p; window.__hcPT = pTarget;
    const c = choreo(p);
    if (!freeze) ambT += dt;

    // DOM (only writes on change)
    setVar('--hc-copy-o', c.copyO.toFixed(3));
    setVar('--hc-copy-y', c.copyY.toFixed(1) + 'px');
    setVar('--hc-split-o', c.splitO.toFixed(3));
    setVar('--hc-split-y', ((1 - c.splitO) * 26).toFixed(1) + 'px');
    setVar('--hc-plate-s', c.plateS.toFixed(4));
    setVar('--hc-handle-o', c.handleO.toFixed(3));
    setCls('is-copy-off', c.copyO < 0.02);
    const splitOn = c.level < 1.04;
    setCls('is-split', splitOn);
    const handleOn = c.handleO > 0.02;
    if (handle.hidden === handleOn) { handle.hidden = !handleOn; handle.tabIndex = handleOn ? 0 : -1; }
    divider.setActive(c.handleO > 0.5);
    const div = divider.update(dt, freeze ? 0 : ambT);
    divider.apply(splitOn);

    // fluid (skipped once fully drained: nothing visible to simulate)
    const simulate = !freeze && c.level > -0.05;
    if (simulate) {
      inputs(dt, c);
      fluid.step(dt, { ...F, iters: L.iters, time: ambT, grav: 0.78 * fluid.dims.sh, drain: c.drain * 0.9 * fluid.dims.sh,
        drag: 1.5, poolY: c.level > 0.2 ? L.poolY : 0 });
      fluid.stepParticles(dt, { seedT: ambT, poolY: L.poolY, spawn: [L.pourX, 0.98, (L.pourHalf * 2) / L.cssW, 0] });
      simT += dt;
    }

    const neonBottom = L.neonRect[1] - c.shiftBg;
    const ni = neonLevels(now);
    // the sign shorts out as the liquid drains past it (stutter keyed to scroll, so it rewinds exactly)
    const nTop = neonBottom + L.neonRect[3];
    const under = clamp((c.level - neonBottom - 0.04) / (nTop - neonBottom));
    if (under < 1) {
      const k = Math.floor(p * 160);
      const flick = (Math.sin(k * 12.9898) * 43758.5453) % 1;
      const f = under * (Math.abs(flick) > 0.35 ? 1 : 0.25);
      ni[0] *= f; ni[1] *= f;
    }
    Object.assign(frameState, {
      level: c.level, time: freeze ? 3.0 : ambT, streamX: divider.base, mound: c.stream * (c.level > -0.02 ? 1 : 0),
      neonI: ni, shift: c.shift, shiftBg: c.shiftBg,
      bloomK: c.level > neonBottom - 0.03 ? 0.62 : 0.0,
      copy: L.copy, copyK: c.copyO,
      dripS: L.desk ? 1.35 : 1, div, divN: divider.N, stream: [L.desk ? 9.5 : 6.5, c.stream * (c.level < 1.02 ? 1 : 0), 2.6, 0], drip: c.drip,
      flecks: c.level > -0.05, fleckPx: 1.9 * L.dpr, glint: 1,
    });
    fluid.render(frameState);
    frames++;
    window.__hcFrames = frames;
    if (logFps) { ftAcc += performance.now() - t0; if (frames % 120 === 0) { console.log('[hero-c] js+gl submit ms/frame', (ftAcc / 120).toFixed(2)); ftAcc = 0; } }
  }

  // freeze: simulate a fixed, seeded intro, then hold the fluid still (deterministic screenshots)
  if (freeze) {
    const steps = Math.round(freeze * 60);
    for (let i = 0; i < steps; i++) {
      const c = choreo(0);
      inputs(1 / 60, c);
      fluid.step(1 / 60, { ...F, iters: L.iters, time: ambT, grav: 0.78 * fluid.dims.sh, drain: 0, drag: 1.5, poolY: L.poolY });
      fluid.stepParticles(1 / 60, { seedT: ambT, poolY: L.poolY, spawn: [L.pourX, 0.98, (L.pourHalf * 2) / L.cssW, 0] });
      simT += 1 / 60; ambT += 1 / 60;
    }
  }

  // ---------------------------------------------------------------- scroll (CSS sticky pin; p = pure f(scroll))
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  const st = ScrollTrigger.create({
    trigger: section, start: 'top top', end: 'bottom bottom',
    onUpdate: (self) => { pTarget = self.progress; },
  });
  pTarget = p = st.progress;

  // first frame, then hand over from the static frame in the same task (no visible seam)
  frame(performance.now(), 0);
  section.classList.add('is-live');
  section.dataset.heroMode = 'webgl';

  // ---------------------------------------------------------------- loop gating
  let raf = 0, visible = true, running = false;
  const loop = (now) => { raf = requestAnimationFrame(loop); frame(now); };
  const sync = () => {
    const want = visible && !document.hidden && !gl.isContextLost();
    if (want && !running) { running = true; last = performance.now(); raf = requestAnimationFrame(loop); }
    else if (!want && running) { running = false; cancelAnimationFrame(raf); }
  };
  new IntersectionObserver((es) => { visible = es[0].isIntersecting; sync(); }, { rootMargin: '80px' }).observe(section);
  document.addEventListener('visibilitychange', sync);
  sync();

  // ---------------------------------------------------------------- resize (no realloc on small height-only changes)
  let lastW = L.cssW, lastH = L.cssH, rto = 0;
  addEventListener('resize', () => {
    clearTimeout(rto);
    rto = setTimeout(() => {
      const w = stage.clientWidth, h = split.offsetHeight;
      if (w === lastW && Math.abs(h - lastH) < 160) return;
      lastW = w; lastH = h;
      allocate();
      if (!running) frame(performance.now(), 0);
    }, 160);
  });

  // ---------------------------------------------------------------- fallbacks
  canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    cancelAnimationFrame(raf); running = false;
    st.kill();
    goStatic('context-lost');
    divider.setActive(false);
  });
  const onReduce = () => { if (mqReduce.matches) { cancelAnimationFrame(raf); running = false; st.kill(); goStatic('reduced-motion'); } };
  if (mqReduce.addEventListener) mqReduce.addEventListener('change', onReduce);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
else boot();
