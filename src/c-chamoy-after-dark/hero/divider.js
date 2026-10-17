// The ¿dulce o picante? boundary: a 1-D chain of springs (wave equation with damping) so dragging it
// sloshes like a liquid curtain. Drives the DOM clip of the sweet half and the GL chamoy stream.
const N = 24;

export function createDivider({ split, dulce, handle, onKey }) {
  const x = new Float32Array(N);   // offsets from the base line (css px)
  const v = new Float32Array(N);
  const uv = new Float32Array(N);     // GL stream (with ambient wobble)
  const cx = new Float32Array(N);     // DOM clip (physics only: no repaint while at rest)
  let W = 1, H = 1, svh = 1;
  let base = 0.5;                  // fraction of width
  let drag = null;
  let active = false, hinted = false;
  let lastClip = '';
  let lastShift = NaN;
  let lastHandle = '';

  const clampBase = (b) => Math.min(0.84, Math.max(0.16, b));
  function moveBase(nb) {
    nb = clampBase(nb);
    const d = (nb - base) * W;
    for (let i = 0; i < N; i++) x[i] -= d;   // nodes keep their place; springs pull them along -> slosh
    base = nb;
    handle.setAttribute('aria-valuenow', String(Math.round(base * 100)));
  }

  function local(e) {
    const r = split.getBoundingClientRect();
    return { px: e.clientX - r.left, py: e.clientY - r.top };
  }
  handle.addEventListener('pointerdown', (e) => {
    if (!active) return;
    const { py } = local(e);
    drag = { id: e.pointerId, node: Math.round((py / H) * (N - 1)) };
    handle.classList.add('is-drag');
    try { handle.setPointerCapture(e.pointerId); } catch (_) { /* noop */ }
    if (e.pointerType === 'mouse') e.preventDefault();
  });
  handle.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const { px, py } = local(e);
    drag.node = Math.max(0, Math.min(N - 1, Math.round((py / H) * (N - 1))));
    moveBase(px / W);
  });
  const end = (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    drag = null;
    handle.classList.remove('is-drag');
  };
  handle.addEventListener('pointerup', end);
  handle.addEventListener('pointercancel', end);
  handle.addEventListener('lostpointercapture', end);
  handle.addEventListener('keydown', (e) => {
    const step = e.shiftKey ? 0.12 : 0.05;
    let nb = null;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') nb = base - step;
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') nb = base + step;
    else if (e.key === 'Home') nb = 0.16;
    else if (e.key === 'End') nb = 0.84;
    if (nb === null) return;
    e.preventDefault();
    moveBase(nb);
    if (onKey) onKey();
  });

  function impulse(amp) { for (let i = 0; i < N; i++) v[i] += amp * Math.sin((i / (N - 1)) * Math.PI); }

  function setSize(w, h, smallH) {
    W = w; H = h; svh = smallH;
  }

  function setActive(on) {
    if (on === active) return;
    active = on;
    if (on && !hinted) { hinted = true; impulse(260); }
  }

  // dt: seconds, t: ambient clock (frozen in tests)
  function update(dt, t) {
    const sub = Math.max(1, Math.ceil(dt * 120));
    const h = dt / sub;
    for (let s = 0; s < sub; s++) {
      for (let i = 0; i < N; i++) {
        const l = x[i > 0 ? i - 1 : 1], r = x[i < N - 1 ? i + 1 : N - 2];
        let a = -16 * x[i] + 1500 * (l + r - 2 * x[i]) - 3.4 * v[i];
        if (drag) { const k = (i - drag.node) / 3.2; a += -260 * Math.exp(-k * k) * x[i]; }
        v[i] += a * h;
      }
      for (let i = 0; i < N; i++) { x[i] += v[i] * h; x[i] = Math.max(-W, Math.min(W, x[i])); }
    }
    const B = base * W;
    for (let i = 0; i < N; i++) {
      const amb = 2.2 * Math.sin(t * 1.5 + i * 0.55) + 1.3 * Math.sin(t * 2.4 - i * 0.9);
      uv[i] = (B + x[i] + amb) / W;
      cx[i] = Math.round((B + x[i]) * 2) / 2;
    }
    return uv;
  }

  // DOM: clip the sweet half to the left of the curve, park the grip, shift both halves' content
  function apply(visible) {
    if (!visible) return;
    let pts = '0 0';
    for (let i = 0; i < N; i++) pts += `,${cx[i]}px ${((i / (N - 1)) * H).toFixed(1)}px`;
    pts += `,0 ${H.toFixed(1)}px`;
    const clip = `polygon(${pts})`;
    if (clip !== lastClip) { dulce.style.clipPath = clip; lastClip = clip; }
    const shift = Math.round((base - 0.5) * W * 0.5 * 2) / 2;
    if (shift !== lastShift) { split.style.setProperty('--hc-shift', shift + 'px'); split.style.setProperty('--hc-div-x', shift * 2 + 'px'); lastShift = shift; }
    const gi = Math.round(((svh * 0.5) / H) * (N - 1));
    const ht = `translate3d(${cx[gi]}px,0,0)`;
    if (ht !== lastHandle) { handle.style.transform = ht; lastHandle = ht; }
  }

  return { setSize, setActive, update, apply, uv, N, get base() { return base; } };
}
