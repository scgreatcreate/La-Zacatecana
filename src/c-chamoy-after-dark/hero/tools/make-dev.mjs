// Builds dev.html (NOT shipped) = mock shell (fixed header + Order pill, phone bottom bar,
// fake #antojo section) around the current hero.html partial.
//   node src/c-chamoy-after-dark/hero/tools/make-dev.mjs
import fs from 'node:fs';
import path from 'node:path';
const HERE = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const partial = fs.readFileSync(path.join(HERE, 'hero.html'), 'utf8');
const NM = '../../../node_modules/@fontsource/';
const fonts = ['unbounded/600.css', 'unbounded/700.css', 'unbounded/800.css', 'manrope/500.css', 'manrope/600.css',
  'manrope/700.css', 'manrope/800.css', 'sacramento/400.css', 'fredoka/600.css'];
const ORDER = 'https://order.online/business/la-zacatecana-ice-cream-shop--mex-snacks-13924473';
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Hero C · Chamoy After Dark — dev</title>
${fonts.map((f) => `<link rel="stylesheet" href="${NM}${f}">`).join('\n')}
<style>
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; background: #0E0710; }
  body { font-family: 'Manrope', system-ui, sans-serif; color: #FFF1E6; }
  .site-header { position: fixed; inset: 0 0 auto 0; height: 64px; z-index: 100; display: flex; align-items: center;
    justify-content: space-between; padding: 0 24px; background: linear-gradient(180deg, rgba(14,7,16,.85), rgba(14,7,16,0)); }
  .site-header .wm { font: 600 22px/1 'Fredoka', sans-serif; color: #FF4FA3; text-decoration: none; }
  .site-header .right { display: flex; gap: 10px; align-items: center; }
  .site-header .lang { font: 700 13px/1 'Manrope'; color: #FFF1E6; background: none; border: 1px solid rgba(255,241,230,.4); border-radius: 999px; padding: 8px 10px; }
  .site-header .btn-order { font: 800 14px/1 'Manrope'; color: #0E0710; background: #FF4FA3; padding: 11px 18px; border-radius: 999px; text-decoration: none; }
  .mobile-bar { display: none; }
  @media (max-width: 719px) {
    .site-header { height: 56px; padding: 0 14px; }
    .site-header .btn-order { padding: 9px 14px; }
    .mobile-bar { position: fixed; inset: auto 0 0 0; height: calc(64px + env(safe-area-inset-bottom)); z-index: 100; display: grid;
      grid-template-columns: repeat(4, 1fr); background: #1A0C17; border-top: 1px solid rgba(255,255,255,.08); padding-bottom: env(safe-area-inset-bottom); }
    .mobile-bar a { display: grid; place-items: center; font: 700 12px/1 'Manrope'; color: #FFF1E6; text-decoration: none; }
    .mobile-bar a:first-child { color: #FF4FA3; }
  }
  #antojo { min-height: 120vh; background: #1A0C17; padding: 120px 24px; scroll-margin-top: 64px; }
  #antojo h2 { font: 800 40px/1.1 'Unbounded'; margin: 0 0 12px; }
  #antojo .mood { font: 700 18px/1 'Manrope'; color: #FF9F1C; }
</style>
<link rel="stylesheet" href="hero.css">
</head>
<body>
<header class="site-header">
  <a class="wm" href="#">La Zacatecana</a>
  <div class="right">
    <button class="lang" type="button" id="lang">ES</button>
    <a class="btn-order" data-order="default" href="${ORDER}">Order</a>
  </div>
</header>
<main>
${partial}
<section id="antojo">
  <h2>Antojo finder (fake next section)</h2>
  <p class="mood">mood: <span id="mood">—</span></p>
</section>
</main>
<nav class="mobile-bar" aria-label="Quick actions">
  <a data-order="default" href="${ORDER}">Order</a><a href="#antojo">Menu</a><a href="tel:+1">Call</a><a href="#">Directions</a>
</nav>
<script>
  // mimic the shell: i18n swap + data-mood click + inject hero.js after load + one rAF
  document.getElementById('lang').addEventListener('click', (e) => {
    const es = document.documentElement.lang !== 'es';
    document.documentElement.lang = es ? 'es' : 'en';
    e.target.textContent = es ? 'EN' : 'ES';
    document.querySelectorAll('[data-i18n-en]').forEach((el) => { el.textContent = el.dataset[es ? 'i18nEs' : 'i18nEn']; });
  });
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-mood]');
    if (a) document.getElementById('mood').textContent = a.dataset.mood;
  });
  const boot = () => requestAnimationFrame(() => { const s = document.createElement('script'); s.src = '.dev/hero.js'; document.body.appendChild(s); });
  if (!/[?&]nojs/.test(location.search)) { if (document.readyState === 'complete') boot(); else addEventListener('load', boot); }
</script>
</body>
</html>
`;
fs.writeFileSync(path.join(HERE, 'dev.html'), html);
console.log('dev.html written');
