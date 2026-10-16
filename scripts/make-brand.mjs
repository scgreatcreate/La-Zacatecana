// Builds the brand vectors used by all three directions:
//   assets/brand/logo-round.svg   — clean SVG re-drawing of the round "La Zacatecana Gourmet" logo
//   assets/brand/wordmark.svg     — "La Zacatecana / Ice cream & Mex Snacks" sign wordmark (+ sundae icon)
//   assets/brand/wordmark-mono.svg — same, single colour (currentColor)
//   assets/brand/sundae.svg        — the sundae illustration alone
// Text is converted to outlines with opentype.js so the SVGs need no fonts.
// NOTE: these are hand-built stand-ins traced from low-res photos. The owner must supply the
// original logo files (AI/PDF/SVG) before launch. [CONFIRM WITH OWNER]
import fs from 'node:fs';
import path from 'node:path';
import opentype from 'opentype.js';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const out = (f, s) => { fs.writeFileSync(path.join(root, 'assets/brand', f), s); console.log('wrote', f); };
const font = (p) => opentype.parse(fs.readFileSync(path.join(root, 'node_modules/@fontsource', p)).buffer);

const script = font('pacifico/files/pacifico-latin-400-normal.woff');
const bold = font('fredoka/files/fredoka-latin-700-normal.woff');
const medium = font('fredoka/files/fredoka-latin-500-normal.woff');
const zac = fs.readFileSync(path.join(root, 'assets/brand/zacatecas-path.txt'), 'utf8').trim();

const C = {
  pink: '#E0457F', pinkDeep: '#C2185B', pale: '#F9D3DC', ruffle: '#EE7FA6', ruffleDeep: '#D95C8A',
  waffle: '#E9B36A', waffleDeep: '#C4863A', choc: '#6B3A23', chocHi: '#8C5235', straw: '#F48FB1',
  strawHi: '#F9B6CB', cherry: '#D3203A', cactus: '#3E9E4F', cactusHi: '#62BF6E', wafer: '#E2A85C',
};

// glyph path centred on its own advance, baseline at y = 0
function glyph(f, ch, size) {
  const g = f.charToGlyph(ch);
  const adv = (g.advanceWidth / f.unitsPerEm) * size;
  const d = g.getPath(-adv / 2, 0, size).toPathData(2);
  return { d, adv };
}
function textOnArc(f, text, { cx, cy, r, size, top = true, fill, tracking = 0 }) {
  const gl = [...text].map((ch) => glyph(f, ch, size));
  const total = gl.reduce((s, g) => s + g.adv + tracking, -tracking);
  let s = -total / 2;
  return gl.map((g) => {
    const mid = s + g.adv / 2; s += g.adv + tracking;
    const phi = top ? -Math.PI / 2 + mid / r : Math.PI / 2 - mid / r;
    const x = cx + r * Math.cos(phi), y = cy + r * Math.sin(phi);
    const rot = (phi * 180) / Math.PI + (top ? 90 : -90);
    return g.d ? `<path fill="${fill}" transform="translate(${x.toFixed(2)} ${y.toFixed(2)}) rotate(${rot.toFixed(2)})" d="${g.d}"/>` : '';
  }).join('');
}
function textLine(f, text, { x, y, size, fill, anchor = 'middle', tracking = 0 }) {
  const gl = [...text].map((ch) => glyph(f, ch, size));
  const total = gl.reduce((s, g) => s + g.adv + tracking, -tracking);
  let s = anchor === 'middle' ? x - total / 2 : x;
  const parts = gl.map((g) => { const cx = s + g.adv / 2; s += g.adv + tracking; return g.d ? `<path transform="translate(${cx.toFixed(2)} ${y})" d="${g.d}"/>` : ''; });
  return { svg: `<g fill="${fill}">${parts.join('')}</g>`, width: total };
}

// The sundae illustration, drawn in a 300×300 box, centre-bottom at (150, 270)
function sundae({ withMap = true } = {}) {
  const ruffle = Array.from({ length: 9 }, (_, i) => {
    const x = 78 + i * 18;
    return `<circle cx="${x}" cy="236" r="12"/>`;
  }).join('');
  const hatch = [];
  for (let i = -6; i <= 8; i++) hatch.push(`<path d="M${80 + i * 16} 168 l48 64"/>`, `<path d="M${128 + i * 16} 168 l-48 64"/>`);
  const cactus = (x, flip) => `
    <g transform="translate(${x} 0) scale(${flip ? -1 : 1} 1)">
      <path fill="${C.cactus}" d="M-11 236 V140 a11 11 0 0 1 22 0 V236 Z"/>
      <path fill="${C.cactus}" d="M-11 196 H-26 a9 9 0 0 1 -9 -9 V160 a7 7 0 0 1 14 0 V182 H-11 Z"/>
      <path fill="${C.cactus}" d="M11 182 H23 V168 a7 7 0 0 1 14 0 V184 a9 9 0 0 1 -9 9 H11 Z"/>
      <path stroke="${C.cactusHi}" stroke-width="2.4" stroke-linecap="round" fill="none" d="M-4 146 V230 M4 146 V230"/>
    </g>`;
  return `
  ${withMap ? `<g transform="translate(6 18) scale(0.30)"><path fill="${C.pale}" d="${zac}"/></g>` : ''}
  ${cactus(54, false)}${cactus(246, true)}
  <g fill="${C.ruffle}">${ruffle}</g>
  <path fill="${C.ruffleDeep}" opacity=".35" d="M70 236 h160 v6 H70z"/>
  <!-- wafer roll -->
  <g transform="rotate(24 176 120)"><rect x="168" y="62" width="16" height="84" rx="4" fill="${C.wafer}"/>
    <path stroke="${C.waffleDeep}" stroke-width="2" d="M168 76 h16 M168 92 h16 M168 108 h16 M168 124 h16"/></g>
  <!-- scoops -->
  <path fill="${C.choc}" d="M88 170 c-6 -34 22 -58 52 -54 c28 4 40 30 32 54 Z"/>
  <path fill="${C.chocHi}" opacity=".7" d="M104 140 c6 -10 18 -14 28 -12 c-12 4 -20 10 -24 20 Z"/>
  <path fill="${C.straw}" d="M140 170 c-4 -32 20 -52 46 -48 c26 4 38 28 28 48 Z"/>
  <path fill="${C.strawHi}" d="M156 138 c6 -8 16 -10 24 -8 c-10 4 -16 8 -20 16 Z"/>
  <!-- cherry -->
  <path stroke="#5B7F2A" stroke-width="3" fill="none" stroke-linecap="round" d="M152 104 c2 -14 8 -22 16 -26"/>
  <circle cx="150" cy="114" r="13" fill="${C.cherry}"/><circle cx="145" cy="109" r="4" fill="#fff" opacity=".7"/>
  <!-- waffle basket -->
  <path fill="${C.waffle}" d="M78 166 h144 l-18 66 h-108 Z"/>
  <clipPath id="bk"><path d="M78 166 h144 l-18 66 h-108 Z"/></clipPath>
  <g clip-path="url(#bk)" stroke="${C.waffleDeep}" stroke-width="2.6">${hatch.join('')}</g>
  <path fill="${C.waffle}" stroke="${C.waffleDeep}" stroke-width="2" d="M72 168 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 v6 h-144 Z"/>
  `;
}

// ---------- round logo ----------
{
  const top = textOnArc(script, 'La Zacatecana', { cx: 300, cy: 300, r: 206, size: 66, top: true, fill: C.pink, tracking: 1 });
  const bottom = textOnArc(script, 'Gourmet', { cx: 300, cy: 300, r: 214, size: 60, top: false, fill: C.pink, tracking: 1 });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" role="img" aria-labelledby="t">
<title id="t">La Zacatecana Gourmet logo</title>
<circle cx="300" cy="300" r="296" fill="#fff"/>
<g transform="translate(118 118) scale(1.22)">${sundae()}</g>
${top}${bottom}
</svg>
`;
  out('logo-round.svg', svg);
}

// ---------- sundae alone ----------
out('sundae.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 260" role="img" aria-labelledby="t"><title id="t">Sundae illustration</title>${sundae()}</svg>\n`);

// ---------- wordmark ----------
function wordmark(mono) {
  const fill = mono ? 'currentColor' : C.pinkDeep;
  const main = textLine(bold, 'La Zacatecana', { x: 20, y: 112, size: 128, fill, anchor: 'start', tracking: -2 });
  const sub = textLine(medium, 'Ice cream & Mex Snacks', { x: 0, y: 0, size: 44, fill, anchor: 'start', tracking: 0.5 });
  const subX = 20 + (main.width - sub.width) / 2;
  const pillPad = 22, pillW = sub.width + pillPad * 2, pillX = subX - pillPad;
  const w = Math.ceil(main.width + 40 + 210), h = 230;
  const outline = mono ? '' : `<g stroke="#fff" stroke-width="14" stroke-linejoin="round" fill="#fff">${main.svg.replace(/<g fill="[^"]+">/, '<g>')}</g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="t">
<title id="t">La Zacatecana — Ice cream &amp; Mex Snacks</title>
${outline}${main.svg}
<rect x="${pillX.toFixed(1)}" y="138" width="${pillW.toFixed(1)}" height="60" rx="30" fill="${mono ? 'none' : '#fff'}" stroke="${fill}" stroke-width="4"/>
<g transform="translate(${subX.toFixed(1)} 182)">${sub.svg}</g>
<g transform="translate(${(main.width + 40).toFixed(1)} -6) scale(0.72)">${mono ? `<g fill="currentColor" opacity=".9">${sundae({ withMap: false }).replace(/fill="#[0-9A-Fa-f]{6}"/g, '').replace(/stroke="#[0-9A-Fa-f]{6}"/g, 'stroke="currentColor"')}</g>` : sundae({ withMap: true })}</g>
</svg>
`;
}
out('wordmark.svg', wordmark(false));
out('wordmark-mono.svg', wordmark(true));
