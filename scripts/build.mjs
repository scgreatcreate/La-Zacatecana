// Builds each direction into a self-contained, offline folder: directions/<dir>/
//   index.html, app.js, app.css, hero.js, order-config.js, fonts/, assets/, brand/
// Usage: node scripts/build.mjs [a-mangonada|b-papel-picado|c-chamoy-after-dark ...]
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import * as esbuild from 'esbuild';
import sharp from 'sharp';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const ALL = ['a-mangonada', 'b-papel-picado', 'c-chamoy-after-dark'];
const dirs = process.argv.slice(2).filter((a) => !a.startsWith('-'));
const targets = dirs.length ? dirs : ALL;

const copyDir = (from, to, filter = () => true) => {
  if (!fs.existsSync(from)) return 0;
  fs.mkdirSync(to, { recursive: true });
  let n = 0;
  for (const e of fs.readdirSync(from, { withFileTypes: true })) {
    const a = path.join(from, e.name), b = path.join(to, e.name);
    if (e.isDirectory()) { if (!e.name.startsWith('.')) n += copyDir(a, b, filter); }
    else if (filter(e.name)) { fs.copyFileSync(a, b); n++; }
  }
  return n;
};

const { ORDER_CONFIG } = await import(pathToFileURL(path.join(root, 'src/shared/config.mjs')));

for (const dir of targets) {
  const t0 = Date.now();
  const src = path.join(root, 'src', dir);
  const out = path.join(root, 'directions', dir);
  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(out, { recursive: true });

  // 1) app bundle (+ CSS incl. hero.css so the static hero frame paints with first CSS)
  const optionalHeroCss = { name: 'optional-hero-css', setup(b) {
    b.onResolve({ filter: /hero\/hero\.css$/ }, (a) => { const p = path.resolve(a.resolveDir, a.path); return fs.existsSync(p) ? { path: p } : { path: p, namespace: 'empty' }; });
    b.onLoad({ filter: /.*/, namespace: 'empty' }, () => ({ contents: '', loader: 'css' }));
  } };
  await esbuild.build({
    plugins: [optionalHeroCss],
    entryPoints: { app: path.join(src, 'app.js') },
    bundle: true, format: 'iife', minify: true, target: ['es2020', 'safari15'],
    outdir: out, assetNames: 'fonts/[name]-[hash]',
    loader: { '.woff2': 'file', '.woff': 'file', '.svg': 'file', '.webp': 'file', '.png': 'file' },
    legalComments: 'none', logLevel: 'warning',
  });
  // 2) hero bundle (three.js etc.), loaded after first paint
  const heroEntry = path.join(src, 'hero/hero.js');
  if (fs.existsSync(heroEntry)) {
    await esbuild.build({
      entryPoints: { hero: heroEntry }, bundle: true, format: 'iife', minify: true, target: ['es2020', 'safari15'],
      outdir: out, assetNames: 'hero-assets/[name]-[hash]', loader: { '.woff2': 'file', '.woff': 'file', '.webp': 'file', '.png': 'file', '.svg': 'text', '.glsl': 'text', '.vert': 'text', '.frag': 'text' },
      legalComments: 'eof', logLevel: 'warning',
    });
    const heroCss = path.join(out, 'hero.css'); if (fs.existsSync(heroCss)) fs.rmSync(heroCss); // already inside app.css
    for (const lic of fs.readdirSync(path.join(src, 'hero')).filter((f) => /^LICENSE/i.test(f))) fs.copyFileSync(path.join(src, 'hero', lic), path.join(out, lic));
  }

  // 3) runtime order config (owner-editable, retargets every Order button)
  fs.writeFileSync(path.join(out, 'order-config.js'), `/* One place to retarget every Order button on this site.
   provider: who handles ordering · defaultUrl: every "Order" button · pickupUrl / deliveryUrl: the two big buttons
   itemUrl: optional function (itemId) => url for per-item deep links (not verified on order.online yet → null)
   fallbacks: the small "Also on" links */
window.LZ_ORDER_CONFIG = ${JSON.stringify({ ...ORDER_CONFIG, itemUrl: null }, null, 2)};
`);

  // 4) assets (only what the page uses)
  // menu photos are copied after the HTML is written: only the sizes the page actually references
  copyDir(path.join(root, 'assets/menu/pm'), path.join(out, 'assets/menu/pm'));
  copyDir(path.join(root, 'assets/shop'), path.join(out, 'assets/shop'), (f) => f.endsWith('.webp'));
  copyDir(path.join(root, 'assets/brand'), path.join(out, 'brand'), (f) => f.endsWith('.svg'));
  copyDir(path.join(src, 'hero/assets'), path.join(out, 'hero-assets'));
  // file:// fallback for WebGL textures (Chrome blocks file images in WebGL): same image as a data URI
  const prod = path.join(out, 'hero-assets/products.webp');
  if (fs.existsSync(prod)) fs.writeFileSync(path.join(out, 'hero-assets/products.data.js'), `window.__LZ_B_PRODUCTS="data:image/webp;base64,${fs.readFileSync(prod).toString('base64')}";\n`);
  copyDir(path.join(src, 'static'), out);
  fs.copyFileSync(path.join(root, 'assets/brand/logo-round.svg'), path.join(out, 'favicon.svg'));
  await sharp(path.join(root, 'assets/brand/logo-round.svg')).resize(512, 512).png().toFile(path.join(out, 'logo.png'));

  // 5) HTML
  const heroHtmlPath = path.join(src, 'hero/hero.html');
  let heroHtml = fs.existsSync(heroHtmlPath) ? fs.readFileSync(heroHtmlPath, 'utf8') : '';
  // hero partials reference their assets as "assets/..." relative to src/<dir>/hero → served from hero-assets/
  heroHtml = heroHtml.replace(/(["'(])assets\//g, '$1hero-assets/');
  const page = (await import(pathToFileURL(path.join(src, 'page.mjs')) + `?t=${Date.now()}`)).default;
  const html = page({ heroHtml, dir });
  fs.writeFileSync(path.join(out, 'index.html'), html);
  const used = new Set([...html.matchAll(/assets\/menu\/([a-z0-9-]+-\d+\.webp)/g)].map((m) => m[1]));
  fs.mkdirSync(path.join(out, 'assets/menu'), { recursive: true });
  for (const f of used) fs.copyFileSync(path.join(root, 'assets/menu/web', f), path.join(out, 'assets/menu', f));

  const size = (f) => (fs.existsSync(path.join(out, f)) ? (fs.statSync(path.join(out, f)).size / 1024).toFixed(0) + ' kB' : '—');
  console.log(`✓ ${dir}  html ${size('index.html')} · app.js ${size('app.js')} · app.css ${size('app.css')} · hero.js ${size('hero.js')}  (${Date.now() - t0} ms)`);
}
