// Writes tools/out/neon-svg-snippet.html: the neon wordmark (<defs> once, <use> per layer) and the
// frozen chamoy pour. The pour lands on the top of the "t" loop (viewBox 197,-19), coats the stem and
// crossbar and drips off the baseline, so "La Zacatecana" stays readable.
//   node src/c-chamoy-after-dark/hero/tools/make-neon-snippet.mjs && node src/c-chamoy-after-dark/hero/tools/inline-neon.mjs
import fs from 'node:fs';
import path from 'node:path';
const HERE = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const raw = fs.readFileSync(path.join(HERE, 'tools/out/neon-wordmark.svg.txt'), 'utf8');
const vb = raw.match(/viewBox="([^"]+)"/)[1];
const la = raw.match(/<g data-seg="la">(.*?)<\/g>/)[1];
const zac = raw.match(/<g data-seg="zac">(.*?)<\/g>/)[1];

const f = (n) => +n.toFixed(1);
function drip(x, y0, y1, w, r) {
  const L = y1 - y0;
  return `M${f(x - w)} ${y0}C${f(x - w)} ${f(y0 + L * 0.55)} ${f(x - r)} ${f(y1 - 2.2 * r)} ${f(x - r)} ${f(y1 - r)}` +
    `A${r} ${r} 0 1 0 ${f(x + r)} ${f(y1 - r)}C${f(x + r)} ${f(y1 - 2.2 * r)} ${f(x + w)} ${f(y0 + L * 0.55)} ${f(x + w)} ${y0}Z`;
}
// stream + coat on the "t": down the right edge of the stream, over the loop top, along the crossbar,
// down the stem, round the foot, back up the left side
const stream = [
  'M191.2 -2400L203.4 -2400C203 -300 202.2 -60 202 -27',
  'C202.4 -22 205 -18.5 205.2 -13.5C205.4 -10.6 208.4 -10.6 211.6 -10',
  'C214.6 -9.4 214.8 -6 211.8 -5.4C207.8 -4.8 205.8 -3.6 205.4 0.5',
  'C204.4 12 203.8 26 204.8 35.5C205.4 41.5 201.6 44.6 198.2 44.2',
  'C194.4 43.6 193.6 38 193.7 30.5C193.4 18 192.5 6.5 192 -3.8',
  'C191.4 -6 188.2 -5.2 184.4 -5.6C180.6 -6 180.2 -9.2 183.2 -9.8',
  'C186.2 -10.4 190.2 -10.2 190.6 -13.6C190.8 -18.5 191.4 -22.5 191.4 -27',
  'C191.4 -60 190.8 -300 191.2 -2400Z',
].join('');
const drips = [drip(199.2, 42, 76, 2.6, 3.9), drip(183.6, -6.5, 9, 1.7, 2.6), drip(211.4, -6.5, 11, 1.8, 2.8)];
const flecks = [[195, -300, 1], [199, -190, 0.8], [194.5, -110, 0.9], [200.5, -60, 0.7], [196, -34, 0.9], [199, -16, 0.8],
  [209, -8, 0.7], [186, -7.6, 0.7], [197.5, 6, 0.8], [201.5, 18, 0.7], [197, 30, 0.8], [199.6, 56, 0.7], [193, -150, 0.6]];
const shine = 'M193.6 -2400C193.8 -300 194.2 -60 194.4 -28M193.6 -16C193.9 -12 194.4 -6 194.6 2M195.6 8C195.6 18 196 28 196.6 36M186 -8.6C190 -9.2 193 -9 195 -9.4';

const snippet = `<svg class="hc-sign__svg" viewBox="${vb}" overflow="visible" data-neon data-liquid focusable="false">
        <defs>
          <g id="hc-wm-la">${la}</g>
          <g id="hc-wm-zac">${zac}</g>
          <filter id="hc-glow" x="-15%" y="-40%" width="130%" height="180%" color-interpolation-filters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="wide"/>
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.6" result="mid"/>
            <feMerge><feMergeNode in="wide"/><feMergeNode in="wide"/><feMergeNode in="mid"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id="hc-pour-g" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stop-color="#5E0918"/><stop offset=".28" stop-color="#C3172F"/><stop offset=".55" stop-color="#B3122E"/><stop offset="1" stop-color="#5E0918"/>
          </linearGradient>
          <radialGradient id="hc-drop-g" cx=".38" cy=".3" r=".8">
            <stop offset="0" stop-color="#E0283E"/><stop offset=".6" stop-color="#9E0F28"/><stop offset="1" stop-color="#5E0918"/>
          </radialGradient>
        </defs>
        <g class="hc-neon-glass" data-neon-skip>
          <use href="#hc-wm-la"/><use href="#hc-wm-zac"/>
        </g>
        <g class="hc-neon-lit hc-neon-lit--la" filter="url(#hc-glow)"><use href="#hc-wm-la" data-neon-use data-seg="1"/></g>
        <g class="hc-neon-lit hc-neon-lit--zac" filter="url(#hc-glow)"><use href="#hc-wm-zac" data-neon-use data-seg="2"/></g>
        <g class="hc-neon-core hc-neon-core--la"><use href="#hc-wm-la"/></g>
        <g class="hc-neon-core hc-neon-core--zac"><use href="#hc-wm-zac"/></g>
        <g class="hc-pour" data-pour>
          <path class="hc-pour__body" data-dye="chamoy" data-h="1.5" fill="url(#hc-pour-g)" d="${stream}"/>
          ${drips.map((d) => `<path class="hc-pour__drip" data-dye="chamoy" data-h="1.3" fill="url(#hc-drop-g)" d="${d}"/>`).join('')}
          <circle class="hc-pour__drop" data-dye="chamoy" data-h="1.2" fill="url(#hc-drop-g)" cx="199.2" cy="88" r="2.9"/>
          <path class="hc-pour__shine" fill="none" d="${shine}"/>
          <g class="hc-pour__tajin">${flecks.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('')}</g>
          <g class="hc-pour__spec"><circle cx="198.4" cy="70" r="1.2"/><circle cx="183.2" cy="5.6" r=".8"/><circle cx="211" cy="7.4" r=".8"/><circle cx="198.6" cy="86.6" r=".8"/></g>
        </g>
        <g class="hc-neon-through" data-neon-skip><use href="#hc-wm-la"/><use href="#hc-wm-zac"/></g>
      </svg>`;
fs.writeFileSync(path.join(HERE, 'tools/out/neon-svg-snippet.html'), snippet);
console.log('snippet', snippet.length, 'bytes');
