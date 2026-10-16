// Asset pipeline for the Direction C hero (run from repo root):
//   node src/c-chamoy-after-dark/hero/tools/make-assets.mjs
// 1. Crops/grades the storefront-at-night photo (removes the black side bars and the two
//    Google-Maps arrow buttons) into a soft, darkened atmosphere plate.
// 2. Writes lighter derivatives of the real product cutouts in assets/menu/hero/.
// 3. Converts "La Zacatecana" (Sacramento, OFL) into SVG path data for the neon sign and
//    prints the <svg> markup used in hero.html (the JS reads the same paths from the DOM).
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import sharp from 'sharp';

const require = createRequire(import.meta.url);
const opentype = require('opentype.js');

const ROOT = process.cwd();
const HERE = path.join(ROOT, 'src/c-chamoy-after-dark/hero');
const OUT = path.join(HERE, 'assets');
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(path.join(HERE, 'tools/out'), { recursive: true });

// ---------- 1. storefront plate ----------
{
  const src = path.join(ROOT, 'reference/storefront-night.webp');
  // content spans x 20..711; arrows sit at y ~ 832..875 -> keep 0..826
  const base = sharp(src).extract({ left: 20, top: 0, width: 692, height: 826 });
  await base
    .clone()
    .blur(2.4)
    .modulate({ brightness: 0.66, saturation: 1.15 })
    .linear([0.92, 0.8, 0.98], [6, 0, 10]) // push toward plum
    .webp({ quality: 74, effort: 6 })
    .toFile(path.join(OUT, 'storefront-night.webp'));
}

// ---------- 2. products ----------
const products = [
  ['fresas-con-crema-y-nutella.webp', 'fresas-con-crema.webp', 720],
  ['waffle-de-burbuja.webp', 'waffle-de-burbuja.webp', 720],
  ['mangonada.webp', 'mangonada.webp', 760],
  ['esquite-con-hot-cheetos.webp', 'esquite-hot-cheetos.webp', 660],
  ['sandifresa.webp', 'sandifresa.webp', 720],
];
const optional = []; // esquite-con-takis looks near-identical to the hot-Cheetos cup; not used
for (const [inName, outName, size] of [...products, ...optional]) {
  const src = path.join(ROOT, 'assets/menu/hero', inName);
  if (!fs.existsSync(src)) { console.log('skip (missing)', inName); continue; }
  const img = sharp(src).trim({ threshold: 1 });
  await img
    .resize(size, size, { fit: 'inside' })
    .webp({ quality: 80, alphaQuality: 90, effort: 6 })
    .toFile(path.join(OUT, outName));
  const m = await sharp(path.join(OUT, outName)).metadata();
  console.log(outName, m.width + 'x' + m.height, fs.statSync(path.join(OUT, outName)).size);
}

// ---------- 3. neon wordmark paths ----------
// opentype's compact toPathData() mangles "-0.0" values ("63.80" glues two numbers), so serialize ourselves.
function ser(cmds, dp = 1) {
  const f = (v) => { let s = (+v.toFixed(dp)).toString(); if (s === '-0') s = '0'; return s; };
  const j = (a) => a.map(f).join(' ');
  let out = '', prev = null;
  for (const c of cmds) {
    if (c.type === 'M') out += 'M' + j([c.x, c.y]);
    else if (c.type === 'L') { if (prev && prev.x === c.x && prev.y === c.y) { prev = c; continue; } out += 'L' + j([c.x, c.y]); }
    else if (c.type === 'Q') out += 'Q' + j([c.x1, c.y1, c.x, c.y]);
    else if (c.type === 'C') out += 'C' + j([c.x1, c.y1, c.x2, c.y2, c.x, c.y]);
    else if (c.type === 'Z') out += 'Z';
    prev = c;
  }
  return out;
}
const fontFile = path.join(ROOT, 'node_modules/@fontsource/sacramento/files/sacramento-latin-400-normal.woff');
const buf = fs.readFileSync(fontFile);
const font = opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
// Stacked neon-sign layout: a smaller "La" tucked above the sweep of the "Z".
const groups = [
  { seg: 'la', text: 'La', x: -4, y: -30, size: 78, l0: 0 },
  { seg: 'zac', text: 'Zacatecana', x: 0, y: 40, size: 100, l0: 2 },
];
let bb = { x1: 1e9, y1: 1e9, x2: -1e9, y2: -1e9 };
const out = [];
for (const g of groups) {
  const ps = font.getPaths(g.text, g.x, g.y, g.size);
  const els = [];
  ps.forEach((p, i) => {
    const b = p.getBoundingBox();
    if (b.x2 - b.x1 <= 0) return;
    bb.x1 = Math.min(bb.x1, b.x1); bb.y1 = Math.min(bb.y1, b.y1);
    bb.x2 = Math.max(bb.x2, b.x2); bb.y2 = Math.max(bb.y2, b.y2);
    els.push(`<path data-l="${g.l0 + i}" d="${ser(p.commands)}"/>`);
  });
  out.push(`<g data-seg="${g.seg}">${els.join('')}</g>`);
}
const PAD = 7;
const vb = [bb.x1 - PAD, bb.y1 - PAD, bb.x2 - bb.x1 + PAD * 2, bb.y2 - bb.y1 + PAD * 2].map((v) => Math.round(v * 10) / 10);
const svg = `<!-- viewBox="${vb.join(' ')}" -->\n${out.join('\n')}\n`;
fs.writeFileSync(path.join(HERE, 'tools/out/neon-wordmark.svg.txt'), svg);
console.log('wordmark viewBox', vb.join(' '), 'aspect', (vb[2] / vb[3]).toFixed(3), 'bytes', svg.length);
