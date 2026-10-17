// Direction B — "Papel Picado" hero. Bundled as a classic IIFE by esbuild.
// p ∈ [0,1] is a pure function of scroll (ScrollTrigger progress over the CSS-sticky track);
// wind, flutter and pointer billow are ambient motion layered on top.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createScene, webglAvailable } from './scene.js';

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const smooth = (t) => { t = clamp01(t); return t * t * (3 - 2 * t); };
const span = (p, a, b) => clamp01((p - a) / (b - a));

function boot() {
  const section = document.querySelector('.hero--b[data-hero]');
  if (!section || section.__heroB) return;
  section.__heroB = true;
  const stage = section.querySelector('.hero-stage');
  const canvas = section.querySelector('.hero-b__gl');
  const copy = section.querySelector('.hero-b__copy');
  const outro = section.querySelector('.hero-b__outro');
  const seam = section.querySelector('.hero-b__seam');
  const q = new URLSearchParams(location.search);
  const freeze = q.has('freeze');
  const mqReduce = matchMedia('(prefers-reduced-motion: reduce)');
  const phone = matchMedia('(max-width: 719px)').matches
    || (matchMedia('(pointer: coarse)').matches && Math.min(screen.width, screen.height) < 720);

  const api = { p: 0, target: 0, ready: false, static: false };
  window.__heroB = api;

  let sceneApi = null;
  let st = null;
  let raf = 0;

  function goStatic(reason) {
    api.static = reason || true;
    cancelAnimationFrame(raf); raf = 0;
    const top = section.getBoundingClientRect().top + window.scrollY;
    const before = section.offsetHeight;
    const y = window.scrollY;
    section.classList.add('is-static');
    section.classList.remove('is-gl');
    if (st) { st.kill(); st = null; }
    const delta = before - section.offsetHeight;
    if (delta > 0 && y > top) window.scrollTo(0, y > top + before - innerHeight ? y - delta : top);
    if (window.ScrollTrigger) ScrollTrigger.refresh();
    if (sceneApi) { try { sceneApi.dispose(); } catch (e) { /* ignore */ } sceneApi = null; }
  }

  if (mqReduce.matches || q.has('static') || !canvas || !webglAvailable()) { goStatic(mqReduce.matches ? 'reduced-motion' : 'no-webgl'); return; }

  // ---- DOM choreography (pure in p)
  function applyDom(p) {
    const o = 1 - smooth(span(p, 0.03, 0.17));
    copy.style.opacity = o.toFixed(3);
    copy.style.transform = `translate3d(0, ${(-56 * smooth(span(p, 0.02, 0.2))).toFixed(1)}px, 0)`;
    copy.style.visibility = o < 0.01 ? 'hidden' : 'visible';
    if (outro) {
      const oo = smooth(span(p, 0.86, 0.97));
      outro.style.opacity = oo.toFixed(3);
      outro.style.transform = `translate3d(0, ${((1 - oo) * 22).toFixed(1)}px, 0)`;
      outro.style.visibility = oo < 0.01 ? 'hidden' : 'visible';
      outro.toggleAttribute('aria-hidden', oo < 0.5);
    }
    if (seam) seam.style.opacity = smooth(span(p, 0.88, 1)).toFixed(3);
  }

  // ---- inputs
  let ptr = { x: 0, y: 0, on: false, amt: 0, speed: 0, last: 0, lx: 0, ly: 0, touch: 0 };
  let wind = 1, vel = 0;
  stage.addEventListener('pointermove', (e) => {
    const r = stage.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width) * 2 - 1, ny = -(((e.clientY - r.top) / r.height) * 2 - 1);
    const now = performance.now();
    const dt = Math.max(8, now - ptr.last);
    const d = Math.hypot(e.clientX - ptr.lx, e.clientY - ptr.ly);
    ptr.speed = Math.min(1, ptr.speed * 0.5 + (d / dt) * 0.25);
    ptr.last = now; ptr.lx = e.clientX; ptr.ly = e.clientY;
    ptr.x = nx; ptr.y = ny; ptr.on = true;
    if (e.pointerType === 'touch') ptr.touch = 1;
  }, { passive: true });
  stage.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'touch') return;
    const r = stage.getBoundingClientRect();
    ptr.x = ((e.clientX - r.left) / r.width) * 2 - 1; ptr.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
    ptr.on = true; ptr.touch = 1; ptr.speed = 0.8;
  }, { passive: true });
  stage.addEventListener('pointerleave', () => { ptr.on = false; }, { passive: true });

  // ---- scroll progress
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  // ---- loop
  let running = false, visible = true, pageVisible = !document.hidden, last = 0, tSim = 0, held = false;
  function frame(now) {
    raf = 0;
    if (!running || !sceneApi) return;
    const rawDt = last ? (now - last) / 1000 : 0.016;
    const dt = Math.min(0.05, rawDt);
    last = now;
    // ease toward the scroll target (converges exactly; same state up or down). Slow devices catch up in
    // fewer, larger steps so a still frame is always the scroll state within a few frames.
    const k = 1 - Math.exp(-Math.min(0.25, rawDt) * 12);
    api.p += (api.target - api.p) * k;
    if (Math.abs(api.target - api.p) < 1e-4) api.p = api.target;
    // ambient wind: base + scroll velocity (touch devices get their gusts from scrolling)
    vel *= Math.exp(-dt * 2.2);
    const wTarget = 1 + Math.min(1.6, Math.abs(vel) / 1600);
    wind += (wTarget - wind) * (1 - Math.exp(-dt * 3));
    // pointer billow
    ptr.speed *= Math.exp(-dt * 3.5);
    ptr.touch *= Math.exp(-dt * 1.6);
    const aTarget = ptr.on ? (ptr.touch > 0.05 ? 0.9 * ptr.touch : 0.3 + 0.9 * ptr.speed) : 0;
    ptr.amt += (aTarget - ptr.amt) * (1 - Math.exp(-dt * 6));
    tSim = freeze ? 2.0 : tSim + dt;
    sceneApi.setP(api.p);
    sceneApi.setWind(freeze ? 1 : wind);
    sceneApi.render(tSim);
    if (!freeze) sceneApi.setPointerRay(ptr.x, ptr.y, ptr.amt);
    applyDom(api.p);
    if (!api.ready) {
      api.ready = true;
      section.classList.add('is-gl');
    }
    raf = requestAnimationFrame(frame);
  }
  function setRunning() {
    const should = visible && pageVisible && !!sceneApi && !api.static && !held;
    if (should && !running) { running = true; last = 0; raf = requestAnimationFrame(frame); }
    else if (!should && running) { running = false; cancelAnimationFrame(raf); raf = 0; }
  }

  api.settled = () => api.ready && Math.abs(api.target - api.p) < 1e-4;
  api.hold = (on) => { held = !!on; setRunning(); }; // dev: freeze the loop (poster capture)
  api.info = () => (sceneApi ? sceneApi.info() : null);

  canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); if (!api.static) goStatic('context-lost'); }, false);

  const copyRect = () => {
    if (!copy) return null;
    const s = stage.getBoundingClientRect(), r = copy.getBoundingClientRect();
    // measure without the scroll transform
    const tr = copy.style.transform; copy.style.transform = 'none';
    const rr = copy.getBoundingClientRect(); copy.style.transform = tr;
    return { left: rr.left - s.left, right: rr.right - s.left, top: rr.top - s.top, bottom: rr.bottom - s.top, width: r.width };
  };

  createScene({ canvas, stage, phone, getCopyRect: copyRect, assetBase: section.dataset.assetBase || 'assets/', hiDpi: q.has('hidpi') }).then((s) => {
    sceneApi = s;
    if (api.static) { s.dispose(); sceneApi = null; return; }
    st = ScrollTrigger.create({
      trigger: section, start: 'top top', end: 'bottom bottom',
      onUpdate: (self) => { api.target = self.progress; vel = self.getVelocity(); },
      onRefresh: (self) => { api.target = self.progress; },
    });
    api.target = st.progress;
    api.p = q.has('p') ? api.target : api.target; // start exactly on the scroll state
    new IntersectionObserver((ents) => { visible = ents[0].isIntersecting; setRunning(); }, { rootMargin: '64px' }).observe(section);
    document.addEventListener('visibilitychange', () => { pageVisible = !document.hidden; setRunning(); });
    let rt = 0;
    window.addEventListener('resize', () => {
      clearTimeout(rt);
      rt = setTimeout(() => { if (sceneApi && sceneApi.resize()) ScrollTrigger.refresh(); }, 120);
    });
    mqReduce.addEventListener && mqReduce.addEventListener('change', (e) => { if (e.matches) goStatic('reduced-motion'); });
    setRunning();
  }).catch((err) => {
    console.warn('[hero-b] falling back to static frame:', err);
    goStatic('init-failed');
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
else boot();
