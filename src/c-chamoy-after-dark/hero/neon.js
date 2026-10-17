// Turns the static first frame (DOM/SVG) into textures, so WebGL takes over without a visible seam:
//  - paintNeon : the neon wordmark paths -> R tube / G white core / B letter id
//  - paintNight: storefront plate + the same shade gradients as .hc-night__shade
//  - paintSeed : the frozen chamoy pour + pool -> initial dye (rgb colour, alpha = thickness / 2)
//  - ignite    : the neon flicker timeline (same keyframes as hc-ignite-* in hero.css)

// keep in sync with @keyframes hc-ignite-la / hc-ignite-zac (percent, opacity)
const KEYS = {
  la: [[0, 0], [14, 0], [15, 1], [19, 0.08], [24, 0.9], [27, 0], [36, 1], [100, 1]],
  zac: [[0, 0], [27, 0], [28, 0.85], [31, 0], [42, 1], [45, 0.25], [50, 1], [60, 0.55], [63, 1], [100, 1]],
};
export const IGNITE_MS = 1350;
export function ignite(seg, ms) {
  const k = KEYS[seg];
  const pct = (ms / IGNITE_MS) * 100;
  if (pct <= 0) return k[0][1];
  for (let i = 1; i < k.length; i++) {
    if (pct <= k[i][0]) {
      const [p0, v0] = k[i - 1], [p1, v1] = k[i];
      return v0 + (v1 - v0) * ((pct - p0) / (p1 - p0 || 1));
    }
  }
  return 1;
}

// box of an element relative to the stage, ignoring transforms (offset chain)
export function stageBox(el, stage) {
  let x = 0, y = 0, n = el;
  while (n && n !== stage) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
  return { x, y, w: el.offsetWidth, h: el.offsetHeight };
}

function svgXform(svg, box) {
  const vb = svg.viewBox.baseVal;
  const par = svg.getAttribute('preserveAspectRatio');
  if (par === 'none') return { sx: box.w / vb.width, sy: box.h / vb.height, tx: box.x - vb.x * (box.w / vb.width), ty: box.y - vb.y * (box.h / vb.height) };
  const s = Math.min(box.w / vb.width, box.h / vb.height);
  return { sx: s, sy: s, tx: box.x + (box.w - vb.width * s) / 2 - vb.x * s, ty: box.y + (box.h - vb.height * s) / 2 - vb.y * s };
}

const canvas2d = (w, h) => {
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.round(w)); c.height = Math.max(1, Math.round(h));
  return c;
};

// The neon only lives inside the sign's box: texture = that box + padding (rect returned in canvas css px).
export function paintNeon(svg, box, k) {
  const pad = Math.round(box.h * 0.12);
  const rect = { x: box.x - pad, y: box.y - pad, w: box.w + pad * 2, h: box.h + pad * 2 };
  const c = canvas2d(rect.w * k, rect.h * k);
  const g = c.getContext('2d');
  g.fillStyle = '#000';
  g.fillRect(0, 0, c.width, c.height);
  const X = svgXform(svg, { x: box.x - rect.x, y: box.y - rect.y, w: box.w, h: box.h });
  g.setTransform(X.sx * k, 0, 0, X.sy * k, X.tx * k, X.ty * k);
  g.lineJoin = 'round'; g.lineCap = 'round';
  const glyphs = [...svg.querySelectorAll('defs [id^="hc-wm-"] path')].map((p) => ({ p: new Path2D(p.getAttribute('d')), id: +p.dataset.l }));
  // B: letter id (source-over so overlaps keep one id)
  for (const { p, id } of glyphs) {
    const s = `rgb(0,0,${(id + 1) * 16})`;
    g.fillStyle = s; g.strokeStyle = s; g.lineWidth = 4.4;
    g.fill(p); g.stroke(p);
  }
  g.globalCompositeOperation = 'lighter';
  for (const { p } of glyphs) { g.fillStyle = g.strokeStyle = '#f00'; g.lineWidth = 4.4; g.fill(p); g.stroke(p); }
  for (const { p } of glyphs) { g.fillStyle = g.strokeStyle = '#0f0'; g.lineWidth = 1.1; g.fill(p); g.stroke(p); }
  return { canvas: c, rect };
}

// keep in sync with .hc-night__shade (phone first, then >= 720px)
const SHADE = {
  phone: [
    ['r', 0.5, 0.45, 1.2, 0.9, [[0.4, 14, 7, 16, 0], [1, 14, 7, 16, 0.85]]],
    ['l', [[0, 0.8], [0.26, 0.4], [0.44, 0.3], [0.64, 0.78], [0.86, 0.97]]],
    ['r', 0.5, 0.2, 0.7, 0.34, [[0, 255, 79, 163, 0.17], [0.7, 255, 79, 163, 0]]],
  ],
  desk: [
    ['r', 0.5, 0.45, 1.1, 0.9, [[0.45, 14, 7, 16, 0], [1, 14, 7, 16, 0.9]]],
    ['l', [[0, 0.78], [0.3, 0.48], [0.55, 0.66], [0.75, 0.55], [1, 0.9]]],
    ['r', 0.5, 0.58, 0.42, 0.3, [[0, 14, 7, 16, 0.72], [1, 14, 7, 16, 0]]],
    ['r', 0.5, 0.24, 0.46, 0.34, [[0, 255, 79, 163, 0.16], [0.7, 255, 79, 163, 0]]],
  ],
};

export function paintNight(img, imgBox, W, H, k, desk) {
  const c = canvas2d(W * k, H * k);
  const g = c.getContext('2d');
  g.scale(k, k);
  g.fillStyle = '#0E0710';
  g.fillRect(0, 0, W, H);
  let photo = false;
  if (img && img.naturalWidth) {
    const cs = getComputedStyle(img);
    const [px, py] = cs.objectPosition.split(' ').map((v) => parseFloat(v) / 100);
    const s = Math.max(imgBox.w / img.naturalWidth, imgBox.h / img.naturalHeight);
    const cw = img.naturalWidth * s, ch = img.naturalHeight * s;
    g.globalAlpha = parseFloat(cs.opacity) || 1;
    g.drawImage(img, imgBox.x + (imgBox.w - cw) * (isNaN(px) ? 0.5 : px), imgBox.y + (imgBox.h - ch) * (isNaN(py) ? 0.5 : py), cw, ch);
    g.globalAlpha = 1;
    photo = true;
  }
  for (const L of SHADE[desk ? 'desk' : 'phone']) {
    if (L[0] === 'l') {
      const gr = g.createLinearGradient(0, 0, 0, H);
      for (const [o, a] of L[1]) gr.addColorStop(o, `rgba(14,7,16,${a})`);
      g.fillStyle = gr; g.fillRect(0, 0, W, H);
    } else {
      const [, cx, cy, rx, ry, stops] = L;
      g.save();
      g.translate(cx * W, cy * H); g.scale(rx * W, ry * H);
      const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
      for (const [o, r, gg, b, a] of stops) gr.addColorStop(o, `rgba(${r},${gg},${b},${a})`);
      g.fillStyle = gr; g.fillRect(-cx / rx - 1, -cy / ry - 1, 1 / rx + 2, 1 / ry + 2);
      g.restore();
    }
  }
  return { canvas: c, photo };
}

const DYE = { chamoy: [179, 18, 46], deep: [110, 11, 28], mango: [255, 159, 28], fresa: [255, 92, 138] };
export const DYE_RGB = Object.fromEntries(Object.entries(DYE).map(([k, v]) => [k, v.map((x) => x / 255)]));

export function paintSeed(items, W, H, dw, dh) {
  const c = canvas2d(dw, dh);
  const g = c.getContext('2d');
  g.scale(dw / W, dh / H);
  g.lineCap = 'round'; g.lineJoin = 'round';
  for (const { svg, box } of items) {
    const X = svgXform(svg, box);
    g.save();
    g.setTransform((dw / W) * X.sx, 0, 0, (dh / H) * X.sy, (dw / W) * X.tx, (dh / H) * X.ty);
    for (const el of svg.querySelectorAll('[data-dye]')) {
      let p;
      if (el.tagName.toLowerCase() === 'circle') {
        p = new Path2D();
        p.arc(+el.getAttribute('cx'), +el.getAttribute('cy'), +el.getAttribute('r'), 0, Math.PI * 2);
      } else p = new Path2D(el.getAttribute('d'));
      const [r, gg, b] = DYE[el.dataset.dye] || DYE.chamoy;
      g.globalAlpha = Math.min(1, (+el.dataset.h || 1) / 2);
      const col = `rgb(${r},${gg},${b})`;
      if (el.dataset.stroke) { g.strokeStyle = col; g.lineWidth = +el.dataset.stroke; g.stroke(p); }
      else { g.fillStyle = col; g.fill(p); }
    }
    g.restore();
  }
  return c;
}
