// The cup's printed wordmark as a crisp canvas texture (red ink, like the real cup).
import { CanvasTexture, SRGBColorSpace, LinearMipmapLinearFilter, LinearFilter } from './three-lite.js';
import { WORDMARK } from './wordmark-paths.js';

export const DECAL_ASPECT = 2048 / 600;

export function makeWordmarkTexture(maxAniso = 8, w = 2048) {
  const h = Math.round(w / DECAL_ASPECT);
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  g.clearRect(0, 0, w, h);

  const ink = '#E0261D';
  const T = WORDMARK.title, S = WORDMARK.sub;
  // "La Zacatecana" spans ~74% of the band; the tagline sits under it, nudged right like the print.
  const ts = (w * 0.74) / T.w;
  const tx = (w - T.w * ts) / 2;
  const ty = h * 0.12;
  g.save(); g.translate(tx, ty); g.scale(ts, ts);
  g.fillStyle = ink;
  g.fill(new Path2D(T.d));
  g.restore();

  const ss = (w * 0.6) / S.w;
  const sx = tx + T.w * ts * 0.22;
  const sy = ty + T.h * ts + h * 0.06;
  g.save(); g.translate(sx, sy); g.scale(ss, ss);
  g.fillStyle = ink;
  g.fill(new Path2D(S.d));
  g.restore();

  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace;
  tex.anisotropy = Math.min(8, maxAniso);
  tex.minFilter = LinearMipmapLinearFilter;
  tex.magFilter = LinearFilter;
  tex.generateMipmaps = true;
  return tex;
}

/** Soft radial falloff for contact shadows / caustics. Grey-scale on black (alphaMap reads green). */
export function makeRadialTexture(stops, size = 256) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  g.fillStyle = '#000';
  g.fillRect(0, 0, size, size);
  const grd = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  for (const [o, a] of stops) { const v = Math.round(a * 255); grd.addColorStop(o, `rgb(${v},${v},${v})`); }
  g.fillStyle = grd;
  g.fillRect(0, 0, size, size);
  return new CanvasTexture(c);
}
