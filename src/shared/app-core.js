// Shared browser behaviour for all three directions. Plain DOM, no framework.
// Runs as a classic deferred script (bundled IIFE) so the builds also work from file://.
import { ORDER_CONFIG as BUILT_ORDER, BUSINESS } from './config.mjs';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const RM = matchMedia('(prefers-reduced-motion: reduce)');
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode */ } },
};

// ───────── order config (one object retargets every Order button) ─────────
export function orderConfig() {
  return Object.assign({}, BUILT_ORDER, window.LZ_ORDER_CONFIG || {});
}
export function orderHref(kind, itemId) {
  const c = orderConfig();
  if (kind === 'pickup') return c.pickupUrl || c.defaultUrl;
  if (kind === 'delivery') return c.deliveryUrl || c.defaultUrl;
  if (kind === 'item' && itemId && typeof c.itemUrl === 'function') return c.itemUrl(itemId) || c.defaultUrl;
  return c.defaultUrl;
}
function applyOrderLinks(root = document) {
  for (const a of $$('[data-order]', root)) a.href = orderHref(a.dataset.order, a.dataset.item);
  const c = orderConfig();
  for (const a of $$('[data-fallback]', root)) { const f = c.fallbacks?.[+a.dataset.fallback]; if (f) a.href = f.url; }
}

// ───────── language ─────────
let lang = document.documentElement.lang === 'es' ? 'es' : 'en';
export const getLang = () => lang;
const listeners = [];
export const onLang = (fn) => listeners.push(fn);
function applyLang(next, persist) {
  lang = next;
  const html = document.documentElement;
  html.lang = next; html.classList.toggle('lang-es', next === 'es'); html.classList.toggle('lang-en', next === 'en');
  for (const el of $$('[data-i18n-en]')) {
    const v = el.getAttribute(next === 'es' ? 'data-i18n-es' : 'data-i18n-en');
    if (v != null && el.textContent !== v) el.textContent = v;
  }
  for (const el of $$('[data-ph-en]')) el.placeholder = el.dataset[next === 'es' ? 'phEs' : 'phEn'];
  for (const el of $$('img[data-alt-es]')) {
    if (!el.dataset.altEn) el.dataset.altEn = el.alt;
    el.alt = next === 'es' ? el.dataset.altEs : el.dataset.altEn;
  }
  for (const b of $$('[data-lang]')) b.setAttribute('aria-pressed', String(b.dataset.lang === next));
  if (persist) store.set('lz-lang', next);
  listeners.forEach((fn) => fn(next));
}
function initLang() {
  for (const b of $$('[data-lang]')) b.addEventListener('click', () => applyLang(b.dataset.lang, true));
  applyLang(lang, false);
}

// ───────── header state ─────────
function initHeader() {
  const h = $('[data-header]'); if (!h) return;
  const onScroll = () => h.classList.toggle('is-scrolled', scrollY > 24);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
}

// ───────── hero loader (after first paint) ─────────
function webglOK() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; }
}
function initHero() {
  const hero = $('[data-hero]'); if (!hero) return;
  if (RM.matches || !webglOK() || /[?&]static\b/.test(location.search)) { hero.classList.add('is-static'); return; }
  const load = () => requestAnimationFrame(() => {
    const s = document.createElement('script'); s.src = 'hero.js'; s.async = true; document.body.appendChild(s);
  });
  if (document.readyState === 'complete') load(); else addEventListener('load', load, { once: true });
}

// ───────── craving finder + menu ─────────
const fold = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const active = new Set();
let query = '';
function initFinder() {
  const cards = $$('.mcard');
  if (!cards.length) return;
  const chips = $$('.chip[data-mood]');
  const countEl = $('[data-result-count]');
  const clearBtn = $('[data-clear]');
  const empty = $('[data-empty]');
  const groups = $$('[data-cat-group]');
  const tabs = $$('[data-tab]');
  const search = $('[data-search]');
  const total = cards.length;

  // chip counts (how many items carry each mood)
  for (const c of chips) {
    const n = cards.filter((k) => k.dataset.moods.split(' ').includes(c.dataset.mood)).length;
    $('.chip__count', c).textContent = n;
  }
  const label = (n) => (n === 1 ? '1 antojo' : `${n} antojos`) + (n < total ? (lang === 'es' ? ` de ${total}` : ` of ${total}`) : '');

  function run() {
    const q = fold(query.trim());
    const words = q ? q.split(/\s+/) : [];
    let shown = 0;
    for (const k of cards) {
      const moods = k.dataset.moods.split(' ');
      const okMood = [...active].every((m) => moods.includes(m));
      const okQ = words.every((w) => k.dataset.search.includes(w));
      const show = okMood && okQ;
      k.hidden = !show; if (show) shown++;
    }
    for (const g of groups) {
      const any = $$('.mcard', g).some((k) => !k.hidden);
      g.hidden = !any;
      const tab = tabs.find((t) => t.dataset.tab === g.dataset.catGroup); if (tab) tab.hidden = !any;
    }
    countEl.textContent = label(shown);
    clearBtn.hidden = !(active.size || q);
    empty.hidden = shown > 0;
    for (const c of chips) c.setAttribute('aria-pressed', String(active.has(c.dataset.mood)));
    document.documentElement.classList.toggle('is-filtering', !!(active.size || q));
  }
  for (const c of chips) c.addEventListener('click', () => {
    const m = c.dataset.mood; active.has(m) ? active.delete(m) : active.add(m); run();
  });
  clearBtn.addEventListener('click', () => { active.clear(); query = ''; if (search) search.value = ''; run(); });
  let t; search?.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => { query = search.value; run(); }, 90); });
  search?.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); scrollToEl($('[data-groups]'), 8); search.blur(); } });
  onLang(() => run());

  // entry points: any link with data-mood (e.g. the hero split, favourites) sets that single mood
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-mood]'); if (!a) return;
    e.preventDefault();
    active.clear(); active.add(a.dataset.mood); query = ''; if (search) search.value = ''; run();
    scrollToEl($('#antojo'), 0);
  });
  const m = new URLSearchParams(location.search).get('mood') || (location.hash.match(/mood=(\w+)/) || [])[1];
  if (m && chips.some((c) => c.dataset.mood === m)) active.add(m);
  run();

  // "See all" per category
  for (const b of $$('[data-more]')) b.addEventListener('click', () => { const g = b.closest('[data-cat-group]'); g.classList.add('is-open'); b.setAttribute('aria-expanded', 'true'); });
  // tabs: click → smooth scroll with header offset; scrollspy highlights the current category
  for (const tb of tabs) tb.addEventListener('click', (e) => { e.preventDefault(); scrollToEl($(tb.getAttribute('href')), 10); });
  const io = new IntersectionObserver((ents) => {
    for (const en of ents) if (en.isIntersecting) {
      const id = en.target.dataset.catGroup;
      for (const tb of tabs) { const on = tb.dataset.tab === id; tb.classList.toggle('is-active', on); if (on) tb.setAttribute('aria-current', 'true'); else tb.removeAttribute('aria-current'); if (on) keepTabVisible(tb); }
    }
  }, { rootMargin: '-35% 0px -60% 0px' });
  groups.forEach((g) => io.observe(g));
}
function keepTabVisible(tb) {
  const bar = tb.parentElement; const l = tb.offsetLeft, r = l + tb.offsetWidth;
  if (l < bar.scrollLeft + 16 || r > bar.scrollLeft + bar.clientWidth - 16) bar.scrollTo({ left: l - 24, behavior: RM.matches ? 'auto' : 'smooth' });
}
function headerOffset() {
  const h = $('[data-header]')?.offsetHeight || 0;
  const bar = $('[data-menubar]'); const barH = bar && getComputedStyle(bar).position === 'sticky' ? bar.offsetHeight : 0;
  return h + barH;
}
export function scrollToEl(el, extra = 0) {
  if (!el) return;
  const y = el.getBoundingClientRect().top + scrollY - headerOffset() - extra;
  scrollTo({ top: Math.max(0, y), behavior: RM.matches ? 'auto' : 'smooth' });
}

// ───────── "Sorpréndeme" slot machine ─────────
function initMachine() {
  const m = $('[data-machine]'); if (!m) return;
  const reel = $('[data-reel]', m); const btn = $('[data-spin]', m);
  const out = $('[data-machine-result]', m);
  let items = $$('.reel__item', reel);
  const itemH = () => items[0].getBoundingClientRect().height;
  let pos = 0; let spinning = false; let spins = 0;
  // duplicate the strip so we can spin through it several times
  const original = items.map((li) => li.cloneNode(true));
  for (let k = 0; k < 3; k++) original.forEach((li) => reel.appendChild(li.cloneNode(true)));
  items = $$('.reel__item', reel);
  for (const img of $$('img', reel)) img.loading = 'lazy';
  const N = original.length;

  function pick() {
    // respect active moods when choosing; fall back to any photo item
    const pool = $$('.mcard[data-photo]').filter((k) => !k.hidden).map((k) => k.dataset.id);
    const ids = original.map((li) => li.dataset.id);
    const allowed = ids.filter((id) => pool.includes(id));
    const list = allowed.length ? allowed : ids;
    return list[Math.floor(Math.random() * list.length)];
  }
  function show(id) {
    const card = document.getElementById('item-' + id);
    $('[data-machine-name]', m).textContent = $('.mcard__name', card).textContent;
    const price = $('.mcard__price', card);
    $('[data-machine-price]', m).textContent = price.textContent;
    const o = $('[data-machine-order]', m); o.dataset.item = id; o.href = orderHref('item', id);
    $('[data-machine-see]', m).href = '#item-' + id;
    out.hidden = false; m.classList.add('has-result');
    $('[data-spin-label]', m).textContent = lang === 'es' ? 'Otra vez' : 'Spin again';
  }
  $('[data-machine-see]', m).addEventListener('click', (e) => {
    e.preventDefault(); const el = $(e.currentTarget.getAttribute('href'));
    if (el.hidden) { active.clear(); $('[data-clear]')?.click(); }
    el.closest('[data-cat-group]')?.classList.add('is-open');
    scrollToEl(el, 24); el.classList.add('is-pinged'); setTimeout(() => el.classList.remove('is-pinged'), 1600);
  });
  btn.addEventListener('click', () => {
    if (spinning) return;
    // first press only preloads reel images (they're lazy) — load them now
    for (const img of $$('img', reel)) if (img.loading === 'lazy') img.loading = 'eager';
    const id = pick();
    const idx = original.findIndex((li) => li.dataset.id === id);
    const h = itemH();
    const startIdx = Math.round(pos / h) % N;
    const target = (2 * N + idx); // land on the third copy
    const from = startIdx * h;
    const to = target * h;
    m.classList.remove('has-result'); m.classList.add('is-spinning'); spinning = true; spins++;
    btn.setAttribute('aria-busy', 'true');
    if (RM.matches) { reel.style.transform = `translateY(${-idx * h}px)`; pos = idx * h; done(); return; }
    const dur = 2300 + Math.random() * 500;
    const anim = reel.animate([
      { transform: `translateY(${-from}px)`, filter: 'blur(0px)' },
      { transform: `translateY(${-(from + (to - from) * 0.12)}px)`, filter: 'blur(3px)', offset: 0.12 },
      { transform: `translateY(${-(from + (to - from) * 0.8)}px)`, filter: 'blur(2px)', offset: 0.62 },
      { transform: `translateY(${-(to + h * 0.18)}px)`, filter: 'blur(0px)', offset: 0.9 },
      { transform: `translateY(${-to}px)`, filter: 'blur(0px)' },
    ], { duration: dur, easing: 'cubic-bezier(.2,.0,.1,1)', fill: 'forwards' });
    anim.onfinish = () => {
      pos = idx * h; reel.style.transform = `translateY(${-pos}px)`; anim.cancel(); done();
    };
    function done() {
      spinning = false; m.classList.remove('is-spinning'); btn.removeAttribute('aria-busy');
      m.classList.add('is-landed'); setTimeout(() => m.classList.remove('is-landed'), 900);
      sprinkle(m); show(id);
    }
  });
  addEventListener('resize', () => { if (!spinning && out.hidden === false) { const id = $('[data-machine-order]', m).dataset.item; const idx = original.findIndex((li) => li.dataset.id === id); pos = idx * itemH(); reel.style.transform = `translateY(${-pos}px)`; } });
}
// small celebratory sprinkles (brand colours come from CSS vars)
function sprinkle(host) {
  if (RM.matches) return;
  const box = host.querySelector('.machine__window'); if (!box) return;
  const n = 18;
  for (let i = 0; i < n; i++) {
    const s = document.createElement('i'); s.className = 'sprinkle'; s.style.setProperty('--h', i % 4);
    box.appendChild(s);
    const a = (Math.PI * 2 * i) / n + Math.random() * 0.4; const d = 70 + Math.random() * 70;
    s.animate([{ transform: 'translate(-50%,-50%) rotate(0deg) scale(1)', opacity: 1 },
      { transform: `translate(calc(-50% + ${Math.cos(a) * d}px), calc(-50% + ${Math.sin(a) * d}px)) rotate(${Math.random() * 540}deg) scale(.6)`, opacity: 0 }],
    { duration: 700 + Math.random() * 300, easing: 'cubic-bezier(.1,.7,.3,1)' }).onfinish = () => s.remove();
  }
}

// ───────── hours / open now ─────────
function nowInShop() {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: BUSINESS.timeZone, weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t)?.value;
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { day, mins: (+get('hour') % 24) * 60 + +get('minute') };
}
function initHours() {
  const el = $('[data-open-status]'); const table = $('[data-hours]');
  const toMin = (s) => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };
  const fmt = (s) => { const [h] = s.split(':').map(Number); return (h > 12 ? h - 12 : h) + (h >= 12 ? ' PM' : ' AM'); };
  function update() {
    const { day, mins } = nowInShop();
    const today = BUSINESS.hours.find((h) => h.days.includes(day));
    const open = today && mins >= toMin(today.open) && mins < toMin(today.close);
    if (table) for (const tr of $$('tr', table)) tr.classList.toggle('is-today', tr.dataset.days.split(',').map(Number).includes(day));
    if (!el) return;
    let next = today && mins < toMin(today.open) ? today.open : BUSINESS.hours.find((h) => h.days.includes((day + 1) % 7)).open;
    el.textContent = open ? (lang === 'es' ? 'Abierto ahora · hasta las 9 PM' : 'Open now · until 9 PM')
      : (lang === 'es' ? `Cerrado ahora · abre a las ${fmt(next)}` : `Closed now · opens ${fmt(next)}`);
    el.classList.toggle('is-open', !!open); el.hidden = false;
    document.documentElement.classList.toggle('shop-open', !!open);
  }
  update(); onLang(update); setInterval(update, 60000);
}

// ───────── map (click to load Google Maps; works offline without it) ─────────
function initMap() {
  const host = $('[data-map]'); const btn = $('[data-map-load]'); if (!host || !btn) return;
  btn.addEventListener('click', () => {
    const f = document.createElement('iframe');
    f.src = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.maps.query)}&output=embed`;
    f.title = 'Map: La Zacatecana, 6790 GA-92 Ste 104, Acworth, GA'; f.loading = 'lazy'; f.referrerPolicy = 'no-referrer-when-downgrade';
    f.className = 'mapcard__frame'; host.classList.add('has-frame'); $('.mapcard__art', host).appendChild(f); btn.hidden = true;
  });
}

// ───────── favourites carousel buttons ─────────
function initFavs() {
  const tr = $('[data-favs]'); if (!tr) return;
  const step = () => (tr.querySelector('.fav')?.getBoundingClientRect().width || 300) + 20;
  $('[data-favs-prev]')?.addEventListener('click', () => tr.scrollBy({ left: -step(), behavior: 'smooth' }));
  $('[data-favs-next]')?.addEventListener('click', () => tr.scrollBy({ left: step(), behavior: 'smooth' }));
}

// ───────── reveals (never block content: visible unless JS + IO are ready) ─────────
function initReveal() {
  if (RM.matches || !('IntersectionObserver' in window)) return;
  const els = $$('.reveal');
  const io = new IntersectionObserver((ents) => {
    for (const e of ents) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -8% 0px' });
  for (const el of els) {
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight) el.classList.add('is-in'); else { el.classList.add('reveal-armed'); io.observe(el); }
  }
}

export function boot(opts = {}) {
  initLang();
  applyOrderLinks();
  initHeader();
  initFinder();
  initMachine();
  initHours();
  initMap();
  initFavs();
  initReveal();
  initHero();
  opts.after?.();
  window.LZ = { orderHref, applyOrderLinks, getLang, onLang, scrollToEl };
}
