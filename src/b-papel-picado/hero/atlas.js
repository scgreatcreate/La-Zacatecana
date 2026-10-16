// Papel picado atlas: every flag is a cut sheet described as SVG (white = tissue, black = cut),
// composed from hand-drawn brand motifs, then rasterized once at runtime (SVG → Image → canvas).
// Construction follows real papel picado: folded header band over the string, perforated band,
// a dashed cut frame (dashes = bridges), border ornaments, a lattice of small cuts, and a central
// motif in negative space held together by thin paper bridges.
import { LETTERS } from './generated.js';

export const TW = 320;            // tile width  (px)
export const TH = 400;            // tile height (px)
export const COLS = 4;
export const ROWS = 4;
export const HEADER = 30 / TH;    // folded header band (fraction of flag height)
export const TILE = {
  cone: 0, strawberry: 1, elote: 2, chile: 3, cactus: 4, zacatecas: 5, dalia: 6, paleta: 7,
  L: 8, A: 9, Z: 10, C: 11, T: 12, E: 13, N: 14,
};

const f1 = (n) => Math.round(n * 10) / 10;

// ---------- motifs, drawn in a local 200×200 box ------------------------------------------
// halo: silhouette (painted white with a fat stroke to clear the lattice around the motif)
// cut:  black shapes (the holes)            bridge: white strokes laid back over the holes
function waffle(id, x0, x1, y0, y1, step, w) {
  let d = '';
  for (let x = x0 - (y1 - y0); x < x1 + (y1 - y0); x += step) {
    d += `M${x} ${y0}L${x + (y1 - y0) * 0.62} ${y1}M${x + (y1 - y0) * 0.62} ${y0}L${x} ${y1}`;
  }
  return `<path clip-path="url(#${id})" d="${d}" stroke-width="${w}"/>`;
}

function motifs(zacD) {
  const M = {};
  // --- ice-cream cone with two scoops and a cherry
  {
    const scoopB = 'M51 106C46 82 70 66 100 68C130 66 154 82 149 106Z';
    const cone = 'M56 104L144 104L100 197Z';
    let rim = 'M48 106';
    for (let i = 0; i < 8; i++) rim += 'q6.5 -9 13 0';
    M.cone = {
      halo: `<circle cx="100" cy="21" r="10"/><circle cx="100" cy="56" r="30"/><path d="${scoopB}"/><path d="${cone}"/>`,
      defs: `<clipPath id="ck-cone"><path d="${cone}"/></clipPath>`,
      cut: `<path d="M100 12Q103 1 114 -4" fill="none" stroke="#000" stroke-width="5" stroke-linecap="round"/>
        <circle cx="100" cy="21" r="10"/><circle cx="100" cy="56" r="30"/><path d="${scoopB}"/><path d="${cone}"/>`,
      bridge: `<path d="M71 74Q100 90 129 74" stroke-width="5"/><path d="${rim}" stroke-width="5.5"/>
        ${waffle('ck-cone', 40, 160, 104, 200, 15, 4)}
        <path d="M70 58Q72 38 90 31" stroke-width="4"/><path d="M60 98Q66 84 82 80" stroke-width="4"/>
        <path d="M104 30Q109 22 106 14" stroke-width="3"/>`,
    };
  }
  // --- strawberry
  {
    const body = 'M100 193C60 179 32 141 36 105C38 81 58 67 80 69C90 70 96 73 100 75C104 73 110 70 120 69C142 67 162 81 164 105C168 141 140 179 100 193Z';
    let seeds = '';
    for (let y = 84; y < 196; y += 17) {
      for (let x = 40; x < 166; x += 20) {
        const xx = x + ((Math.round((y - 84) / 17) % 2) ? 10 : 0);
        seeds += `<ellipse cx="${xx}" cy="${y}" rx="2.9" ry="4.4"/>`;
      }
    }
    let grid = '';
    for (let c = -120; c < 220; c += 20) grid += `M${c} 70L${c + 130} 200`;
    M.strawberry = {
      halo: `<path d="${body}"/><path d="M100 78L68 60L88 58L80 38L96 51L100 30L104 51L120 38L112 58L132 60Z"/><circle cx="108" cy="20" r="8"/>`,
      defs: `<clipPath id="ck-straw"><path d="${body}"/></clipPath>`,
      cut: `<path d="${body}"/><path d="M100 78L68 60L88 58L80 38L96 51L100 30L104 51L120 38L112 58L132 60Z"/>
        <path d="M100 40Q101 22 113 11" fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"/>`,
      bridge: `<path d="M64 76Q100 88 136 76" stroke-width="5"/>
        <g clip-path="url(#ck-straw)"><path d="${grid}" stroke-width="1.6"/><g fill="#fff" stroke="none">${seeds}</g></g>
        <path d="M100 74L82 46M100 74L100 38M100 74L118 46" stroke-width="2.6"/>`,
    };
  }
  // --- elote on a stick (palito), husks peeled down
  {
    const cob = 'M100 8C126 8 134 42 133 80C132 112 124 132 100 134C76 132 68 112 67 80C66 42 74 8 100 8Z';
    const huskL = 'M100 146C68 142 42 118 34 74C52 102 70 114 96 122Z';
    const huskR = 'M100 146C132 142 158 118 166 74C148 102 130 114 104 122Z';
    let kern = '';
    for (let y = 19; y < 134; y += 11) kern += `M60 ${f1(y)}H140`;
    for (let i = 0; i < 4; i++) kern += `M${f1(80.5 + i * 13)} 4V136`;
    M.elote = {
      rot: -8,
      halo: `<path d="${cob}"/><path d="${huskL}"/><path d="${huskR}"/><path d="M92 132H108V199H92Z"/>`,
      defs: `<clipPath id="ck-cob"><path transform="rotate(-8 100 100)" d="${cob}"/></clipPath>`,
      cut: `<path d="${cob}"/><path d="${huskL}"/><path d="${huskR}"/><path d="M92 136H108V199H92Z"/>`,
      bridge: `<path clip-path="url(#ck-cob)" transform="rotate(8 100 100)" d="${kern}" stroke-width="3.3"/>
        <path d="M94 136C70 130 52 112 42 88M106 136C130 130 148 112 158 88" stroke-width="3"/>
        <path d="M70 116Q100 140 130 116" stroke-width="4.5"/><path d="M86 137H114" stroke-width="4"/>`,
    };
  }
  // --- chile (serrano), with curled stem
  {
    const body = 'M120 50C143 56 151 86 141 114C129 150 99 176 58 192C50 195 45 187 52 181C84 158 102 130 106 100C109 80 104 64 94 56C104 49 112 48 120 50Z';
    M.chile = {
      halo: `<path d="${body}"/><path d="M86 58C92 41 116 34 134 47C127 58 110 60 86 58Z"/><circle cx="128" cy="14" r="10"/>`,
      cut: `<path d="${body}"/><path d="M86 58C92 41 116 34 134 47C127 58 110 60 86 58Z"/>
        <path d="M114 42C112 25 120 12 137 8" fill="none" stroke="#000" stroke-width="7" stroke-linecap="round"/>`,
      bridge: `<path d="M129 66C136 94 126 126 98 153" stroke-width="4.5"/><path d="M84 60C104 64 122 60 137 51" stroke-width="4"/>
        <path d="M116 158C104 168 86 178 70 184" stroke-width="2.6"/>`,
    };
  }
  // --- saguaro cactus with a bloom
  {
    const arms = (w) => `<path d="M86 124H64Q54 124 54 114V82" fill="none" stroke="#000" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M114 100H138Q148 100 148 90V60" fill="none" stroke="#000" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
    let petals = '';
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      petals += `<ellipse cx="${f1(100 + Math.cos(a) * 8)}" cy="${f1(18 + Math.sin(a) * 8)}" rx="5.2" ry="3.4" transform="rotate(${f1((a * 180) / Math.PI)} ${f1(100 + Math.cos(a) * 8)} ${f1(18 + Math.sin(a) * 8)})"/>`;
    }
    M.cactus = {
      halo: `<rect x="83" y="28" width="34" height="158" rx="17"/>${arms(24).replace(/#000/g, '#fff')}<circle cx="100" cy="18" r="14"/><path d="M34 190Q68 178 100 186T166 184" fill="none" stroke="#fff" stroke-width="8"/>`,
      cut: `<rect x="83" y="30" width="34" height="156" rx="17"/>${arms(24)}${petals}
        <path d="M34 191Q68 181 100 188T166 186" fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"/>`,
      bridge: `<path d="M93 42V178M107 42V178" stroke-width="3.2"/><path d="M84 124H64Q54 124 54 114V84M116 100H138Q148 100 148 90V62" stroke-width="3"/>
        <path d="M84 31H116" stroke-width="3.6"/><circle cx="100" cy="18" r="3.2" fill="#fff" stroke="none"/>`,
    };
  }
  // --- Zacatecas state outline (real path from assets/brand/zacatecas.svg via tools/gen-assets.mjs)
  {
    const nums = zacD.match(/-?\d+(\.\d+)?/g).map(Number);
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    for (let i = 0; i + 1 < nums.length; i += 2) {
      x0 = Math.min(x0, nums[i]); x1 = Math.max(x1, nums[i]);
      y0 = Math.min(y0, nums[i + 1]); y1 = Math.max(y1, nums[i + 1]);
    }
    const s = 186 / Math.max(x1 - x0, y1 - y0);
    const tx = 100 - ((x0 + x1) / 2) * s, ty = 100 - ((y0 + y1) / 2) * s;
    const g = (inner) => `<g transform="translate(${f1(tx)} ${f1(ty)}) scale(${s.toFixed(4)})">${inner}</g>`;
    const sw = (px) => (px / s).toFixed(1);
    const P = `<path d="${zacD}"/>`;
    M.zacatecas = {
      halo: g(P),
      defs: `<clipPath id="ck-zac"><path transform="translate(${f1(tx)} ${f1(ty)}) scale(${s.toFixed(4)})" d="${zacD}"/></clipPath>`,
      // outline ring cut + inner paper line + cut body (offsets done with strokes, so it is a true offset)
      cut: g(`${P}<path d="${zacD}" fill="none" stroke="#fff" stroke-width="${sw(17)}" stroke-linejoin="round"/>
        <path d="${zacD}" fill="none" stroke="#000" stroke-width="${sw(8)}" stroke-linejoin="round"/>`),
      // a few meandering bridges, like rivers, keep the big hole strong
      bridge: `<g clip-path="url(#ck-zac)"><path d="M20 70C60 60 80 96 120 84S170 70 190 90M10 132C50 120 70 150 110 140S160 128 190 146" stroke-width="3.2"/></g>
        <path d="M118 128l5 -9 5 9 -5 9z" fill="#fff" stroke="none"/>`,
    };
  }
  // --- dalia (Mexico's national flower)
  {
    let pet = '', pet2 = '';
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * 360;
      pet += `<ellipse cx="100" cy="56" rx="10" ry="29" transform="rotate(${a} 100 100)"/>`;
      pet2 += `<ellipse cx="100" cy="78" rx="6.5" ry="13" transform="rotate(${a + 15} 100 100)"/>`;
    }
    M.dalia = {
      halo: `<circle cx="100" cy="100" r="76"/>`,
      cut: `${pet}${pet2}<circle cx="100" cy="100" r="11"/>`,
      bridge: `<circle cx="100" cy="100" r="5" fill="#fff" stroke="none"/>`,
    };
  }
  // --- paleta (popsicle) with a bite and chile stripes
  {
    const body = 'M72 46C72 26 84 16 100 16C116 16 128 26 128 46V148H72Z';
    let stripes = '';
    for (let y = 36; y < 160; y += 18) stripes += `M60 ${y + 14}L140 ${y - 10}`;
    M.paleta = {
      halo: `<path d="${body}"/><rect x="91" y="146" width="18" height="52" rx="8"/>`,
      defs: `<clipPath id="ck-pal"><path d="${body}"/></clipPath>`,
      cut: `<path d="${body}"/><rect x="91" y="150" width="18" height="48" rx="8"/>`,
      bridge: `<g clip-path="url(#ck-pal)"><path d="${stripes}" stroke-width="4"/></g><path d="M66 149H134" stroke-width="5"/>
        <circle cx="129" cy="24" r="13" fill="#fff" stroke="none"/><circle cx="117" cy="17" r="7" fill="#fff" stroke="none"/>`,
    };
  }
  return M;
}

export function zacPath(svgText) {
  const ds = [...String(svgText || '').matchAll(/\sd\s*=\s*"([^"]+)"/g)].map((m) => m[1]);
  // fallback blob only if the brand file is unreadable
  return ds.length ? ds.join(' ') : 'M318 92C430 96 512 170 590 176C690 292 846 368 870 520C900 660 772 742 694 884C548 856 476 740 330 700C286 560 160 470 168 318C146 172 318 92 318 92Z';
}

// ---------- tile construction --------------------------------------------------------------
function sheetPath(edge) {
  const yb = TH - 26;
  let d = `M0 0H${TW}V${yb}`;
  if (edge === 'scallop') {
    const n = 12, w = TW / n;
    for (let i = 0; i < n; i++) d += `A${f1(w / 2)} ${f1(w / 2)} 0 0 1 ${f1(TW - (i + 1) * w)} ${yb}`;
  } else if (edge === 'picos') {
    const n = 10, w = TW / n;
    for (let i = 0; i < n; i++) d += `L${f1(TW - (i + 0.5) * w)} ${TH - 1}L${f1(TW - (i + 1) * w)} ${yb}`;
  } else {
    const n = 16, w = TW / n;
    for (let i = 0; i < n; i++) d += `L${f1(TW - (i + 0.5) * w)} ${TH - 8}L${f1(TW - (i + 1) * w)} ${yb}`;
  }
  return d + 'Z';
}

function lattice(style, x0, y0, x1, y1, sp) {
  let s = '';
  let row = 0;
  for (let y = y0; y <= y1; y += sp * 0.87, row++) {
    for (let x = x0 + (row % 2 ? sp / 2 : 0); x <= x1; x += sp) {
      const X = f1(x), Y = f1(y);
      if (style === 'dots') s += `<circle cx="${X}" cy="${Y}" r="${f1(sp * 0.19)}"/>`;
      else if (style === 'diamonds') { const r = sp * 0.24; s += `<path d="M${X} ${f1(y - r)}l${f1(r * 0.75)} ${f1(r)} ${f1(-r * 0.75)} ${f1(r)} ${f1(-r * 0.75)} ${f1(-r)}z"/>`; }
      else if (style === 'petals') {
        const r = sp * 0.17;
        s += `<ellipse cx="${X}" cy="${f1(y - r)}" rx="${f1(r * 0.48)}" ry="${f1(r * 0.85)}"/><ellipse cx="${X}" cy="${f1(y + r)}" rx="${f1(r * 0.48)}" ry="${f1(r * 0.85)}"/>`
          + `<ellipse cx="${f1(x - r)}" cy="${Y}" rx="${f1(r * 0.85)}" ry="${f1(r * 0.48)}"/><ellipse cx="${f1(x + r)}" cy="${Y}" rx="${f1(r * 0.85)}" ry="${f1(r * 0.48)}"/>`;
      } else if (style === 'stars') {
        const r = sp * 0.27, q = r * 0.3;
        s += `<path d="M${X} ${f1(y - r)}L${f1(x + q)} ${f1(y - q)}L${f1(x + r)} ${Y}L${f1(x + q)} ${f1(y + q)}L${X} ${f1(y + r)}L${f1(x - q)} ${f1(y + q)}L${f1(x - r)} ${Y}L${f1(x - q)} ${f1(y - q)}Z"/>`;
      }
    }
  }
  return s;
}

function borderOrnament(style, fx0, fy0, fx1, fy1) {
  let s = '';
  if (style === 'scallop') {
    for (let x = fx0 + 12; x <= fx1 - 10; x += 17) {
      s += `<path d="M${f1(x - 6.5)} ${fy0 + 8}a6.5 6.5 0 0 0 13 0z"/>`;
      s += `<path d="M${f1(x - 6.5)} ${fy1 - 8}a6.5 6.5 0 0 1 13 0z"/>`;
    }
  } else if (style === 'diamonds') {
    for (let x = fx0 + 12; x <= fx1 - 8; x += 16) {
      s += `<path d="M${x} ${fy0 + 5}l4 5 -4 5 -4 -5z"/><path d="M${x} ${fy1 - 15}l4 5 -4 5 -4 -5z"/>`;
    }
    for (let y = fy0 + 26; y <= fy1 - 22; y += 16) {
      s += `<path d="M${fx0 + 10} ${y - 5}l4 5 -4 5 -4 -5z"/><path d="M${fx1 - 10} ${y - 5}l4 5 -4 5 -4 -5z"/>`;
    }
  } else {
    for (let x = fx0 + 10; x <= fx1 - 8; x += 13) s += `<circle cx="${x}" cy="${fy0 + 9}" r="3"/><circle cx="${x}" cy="${fy1 - 9}" r="3"/>`;
  }
  return s;
}

function frame(edge, border) {
  const fx0 = 16, fy0 = 52, fx1 = TW - 16, fy1 = TH - 46;
  let s = '';
  // perforation band just under the folded header
  for (let x = 14; x <= TW - 12; x += 15) s += `<circle cx="${x}" cy="40" r="3.1"/>`;
  // dashed cut frame: every gap in the dash is a bridge holding the centre to the edge
  s += `<rect x="${fx0}" y="${fy0}" width="${fx1 - fx0}" height="${fy1 - fy0}" rx="3" fill="none" stroke="#000" stroke-width="5" stroke-dasharray="28 8"/>`;
  s += borderOrnament(border, fx0, fy0, fx1, fy1);
  // little teeth just above the decorative bottom edge
  const yb = TH - 26;
  if (edge !== 'picos') for (let x = 20; x <= TW - 18; x += 20) s += `<path d="M${x} ${yb - 15}l5 7 -5 7 -5 -7z"/>`;
  else for (let x = 16; x <= TW - 14; x += 32) s += `<circle cx="${x}" cy="${yb - 8}" r="3.6"/>`;
  return s;
}

const FX0 = 34, FY0 = 72, FX1 = TW - 34, FY1 = TH - 64;

function motifTile(m, variant) {
  const cx = TW / 2, cy = (FY0 + FY1) / 2 + 2;
  const sc = variant.scale || 1.3;
  const tr = `translate(${f1(cx - 100 * sc)} ${f1(cy - 100 * sc)}) scale(${sc})${m.rot ? ` rotate(${m.rot} 100 100)` : ''}`;
  return `${frame(variant.edge, variant.border)}
    <g fill="#000">${lattice(variant.lattice, FX0 + 6, FY0 + 6, FX1 - 6, FY1 - 4, variant.sp || 25)}</g>
    <g transform="${tr}">
      <g fill="#fff" stroke="#fff" stroke-width="${variant.halo || 15}" stroke-linejoin="round">${m.halo}</g>
      <g fill="#000">${m.cut}</g>
      <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">${m.bridge}</g>
    </g>`;
}

function letterTile(ch, variant) {
  const g = LETTERS[ch];
  const s = 0.305;
  const cx = TW / 2, cy = (FY0 + FY1) / 2 + 4;
  const tx = cx - ((g.x0 + g.x1) / 2) * s, ty = cy - ((g.y0 + g.y1) / 2) * s;
  // stencil bridge for counters (A): a hair of paper ties the counter to the sheet above
  const bridge = ch === 'A' ? `<path d="M316 -478V-730" stroke="#fff" stroke-width="17"/>` : '';
  return `${frame(variant.edge, variant.border)}
    <g fill="#000">${lattice('dots', FX0 + 4, FY0 + 6, FX1 - 4, FY1 - 2, 22)}</g>
    <g transform="translate(${f1(tx)} ${f1(ty)}) scale(${s})">
      <path d="${g.d}" fill="#fff" stroke="#fff" stroke-width="78" stroke-linejoin="round"/>
      <path d="${g.d}" fill="#000"/>${bridge}
    </g>`;
}

// zacSvg: text of assets/brand/zacatecas.svg (single path, viewBox 0 0 1000 1000)
export function buildAtlasSVG(zacSvg) {
  const M = motifs(zacPath(zacSvg));
  const W = TW * COLS, H = TH * ROWS;
  const V = [
    { edge: 'zigzag', border: 'scallop', lattice: 'dots' },
    { edge: 'scallop', border: 'diamonds', lattice: 'petals', sp: 26 },
    { edge: 'picos', border: 'dots', lattice: 'diamonds' },
    { edge: 'zigzag', border: 'diamonds', lattice: 'stars', sp: 25 },
    { edge: 'scallop', border: 'scallop', lattice: 'diamonds' },
    { edge: 'picos', border: 'scallop', lattice: 'dots', scale: 1.24 },
    { edge: 'zigzag', border: 'dots', lattice: 'petals', sp: 27, scale: 1.2 },
    { edge: 'scallop', border: 'dots', lattice: 'stars', sp: 25 },
  ];
  let defs = '', body = '';
  const place = (idx, inner) => {
    const ox = (idx % COLS) * TW, oy = Math.floor(idx / COLS) * TH;
    return `<g transform="translate(${ox} ${oy})"><path d="${sheetPath(inner.edge)}" fill="#fff"/>${inner.svg}</g>`;
  };
  ['cone', 'strawberry', 'elote', 'chile', 'cactus', 'zacatecas', 'dalia', 'paleta'].forEach((k, i) => {
    if (M[k].defs) defs += M[k].defs;
    body += place(TILE[k], { edge: V[i].edge, svg: motifTile(M[k], V[i]) });
  });
  'LAZCTEN'.split('').forEach((ch, i) => {
    const v = { edge: ['zigzag', 'scallop', 'picos'][i % 3], border: ['diamonds', 'scallop', 'dots'][i % 3] };
    body += place(TILE[ch], { edge: v.edge, svg: letterTile(ch, v) });
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs>${defs}</defs><rect width="${W}" height="${H}" fill="#000"/>${body}</svg>`;
}

// Rasterize the atlas (SVG → Image → canvas). Resolves with the canvas.
export function rasterizeAtlas(zacSvg, scale = 1) {
  const svg = buildAtlasSVG(zacSvg);
  const W = TW * COLS * scale, H = TH * ROWS * scale;
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => {
      const cv = document.createElement('canvas');
      cv.width = W; cv.height = H;
      const ctx = cv.getContext('2d');
      ctx.drawImage(img, 0, 0, W, H);
      URL.revokeObjectURL(url);
      resolve(cv);
    };
    img.onerror = (e) => { URL.revokeObjectURL(url); reject(e); };
    img.src = url;
  });
}

export function tileRect(idx) {
  const c = idx % COLS, r = Math.floor(idx / COLS);
  // half-texel inset keeps neighbours from bleeding in
  const iu = 1.5 / (TW * COLS), iv = 1.5 / (TH * ROWS);
  return [c / COLS + iu, r / ROWS + iv, 1 / COLS - 2 * iu, 1 / ROWS - 2 * iv];
}
