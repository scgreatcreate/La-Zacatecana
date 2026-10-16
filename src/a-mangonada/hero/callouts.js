// Hairline callouts: real DOM text + SVG leaders, positioned every frame from projected 3D anchors.
const NS = 'http://www.w3.org/2000/svg';

export function createCallouts(section) {
  const layer = section.querySelector('.hero-callouts');
  const svg = layer.querySelector('svg');
  const g = svg.querySelector('g');
  const items = [...layer.querySelectorAll('.hero-callout')].map((el) => {
    const path = document.createElementNS(NS, 'path');
    path.setAttribute('pathLength', '1');
    path.setAttribute('stroke-dasharray', '1 1');
    const dot = document.createElementNS(NS, 'circle');
    dot.setAttribute('r', '3.25');
    g.append(path, dot);
    return { el, part: el.dataset.part, path, dot, w: 0, h: 0, last: '' };
  });
  const byPart = Object.fromEntries(items.map((it) => [it.part, it]));

  function measure() {
    for (const it of items) { it.w = it.el.offsetWidth; it.h = it.el.offsetHeight; }
  }

  let shown = true;
  /**
   * anchors: { part: { x, y, a (alpha 0..1), d (draw 0..1) } }
   * col: x of the label column; bounds: [top, bottom] in px.
   */
  function update(anchors, col, bounds) {
    const vis = items.filter((it) => anchors[it.part] && anchors[it.part].a > 0.002);
    if (!vis.length) {
      if (shown) { for (const it of items) { it.el.style.opacity = '0'; it.path.style.opacity = '0'; it.dot.style.opacity = '0'; it.last = ''; } layer.style.visibility = 'hidden'; shown = false; }
      return;
    }
    if (!shown) { layer.style.visibility = ''; shown = true; }
    // desired label centres = anchor heights; relax so labels never overlap
    const L = vis.map((it) => ({ it, A: anchors[it.part], y: anchors[it.part].y })).sort((a, b) => a.y - b.y);
    const gap = 10;
    for (let i = 1; i < L.length; i++) {
      const min = L[i - 1].y + (L[i - 1].it.h + L[i].it.h) / 2 + gap;
      if (L[i].y < min) L[i].y = min;
    }
    const last = L[L.length - 1];
    if (last.y + last.it.h / 2 > bounds[1]) {
      last.y = bounds[1] - last.it.h / 2;
      for (let i = L.length - 2; i >= 0; i--) {
        const max = L[i + 1].y - (L[i + 1].it.h + L[i].it.h) / 2 - gap;
        if (L[i].y > max) L[i].y = max;
      }
    }
    if (L[0].y - L[0].it.h / 2 < bounds[0]) {
      L[0].y = bounds[0] + L[0].it.h / 2;
      for (let i = 1; i < L.length; i++) {
        const min = L[i - 1].y + (L[i - 1].it.h + L[i].it.h) / 2 + gap;
        if (L[i].y < min) L[i].y = min;
      }
    }
    for (const it of items) if (!vis.includes(it) && it.last) { it.el.style.opacity = '0'; it.path.style.opacity = '0'; it.dot.style.opacity = '0'; it.last = ''; }
    for (const { it, A, y } of L) {
      const ax = Math.round(A.x) + 0.5, ay = Math.round(A.y) + 0.5;
      const lx = Math.round(col), ly = Math.round(y) + 0.5;
      const knee = Math.max(ax + 10, lx - 34);
      const d = `M${ax} ${ay}L${knee} ${ay}L${Math.max(knee, lx - 14)} ${ly}L${lx - 8} ${ly}`;
      const labelIn = Math.max(0, Math.min(1, (A.d - 0.45) / 0.55));
      const key = `${d}|${A.a.toFixed(3)}|${A.d.toFixed(3)}`;
      if (key === it.last) continue;
      it.last = key;
      it.path.setAttribute('d', d);
      it.path.setAttribute('stroke-dashoffset', (1 - A.d).toFixed(4));
      it.path.style.opacity = A.a.toFixed(3);
      it.dot.setAttribute('cx', ax); it.dot.setAttribute('cy', ay);
      it.dot.style.opacity = (A.a * Math.min(1, A.d * 4)).toFixed(3);
      it.el.style.opacity = (A.a * labelIn).toFixed(3);
      it.el.style.transform = `translate3d(${lx + Math.round((1 - labelIn) * 10)}px, ${Math.round(y - it.h / 2)}px, 0)`;
    }
  }

  return { items, byPart, measure, update, layer };
}
