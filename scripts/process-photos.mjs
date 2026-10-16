// Stage 2 of the photo pipeline (free, local): consistent art-directed treatment for every menu cutout.
//  - input:  assets/menu/cutout/<slug>.png (transparent cutouts from rembg / the owner's own cutouts)
//  - output: assets/menu/web/<slug>-<w>.webp  (square, transparent, product on a shared baseline)
//            assets/menu/manifest.json         (sizes per slug + quality data for PHOTOS_TODO.md)
// Never upscales: the largest exported width is the native square size, so nothing is "faked sharp".
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const inDir = path.join(root, 'assets/menu/cutout');
const outDir = path.join(root, 'assets/menu/web');
fs.mkdirSync(outDir, { recursive: true });
for (const f of fs.readdirSync(outDir)) fs.unlinkSync(path.join(outDir, f));

const FILL = 0.86;      // product occupies 86% of the square's larger dimension
const BASELINE = 0.94;  // product bottom sits at 94% of the square height (shared "table line")
const WIDTHS = [240, 360, 480, 640, 800, 1000];

const manifest = {};
for (const file of fs.readdirSync(inDir).filter((f) => f.endsWith('.png')).sort()) {
  const slug = file.replace(/\.png$/, '');
  const trimmed = await sharp(path.join(inDir, file)).ensureAlpha().trim({ threshold: 2 }).toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = trimmed.info;
  const side = Math.round(Math.max(w, h) / FILL);
  const left = Math.round((side - w) / 2);
  const top = Math.max(0, Math.round(side * BASELINE - h));
  const square = await sharp({ create: { width: side, height: side, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: trimmed.data, left, top }])
    .png().toBuffer();
  // gentle, uniform colour treatment: a touch of saturation, no per-image auto-levels (keeps the food honest)
  const graded = await sharp(square).modulate({ saturation: 1.05 }).png().toBuffer();

  const widths = WIDTHS.filter((x) => x <= side);
  if (!widths.length || widths[widths.length - 1] < side) widths.push(Math.min(side, 1000));
  const uniq = [...new Set(widths)].filter((x) => x <= 1000);
  for (const ow of uniq) {
    const ratio = side / ow;
    let img = sharp(graded).resize(ow, ow, { kernel: 'lanczos3' });
    if (ratio >= 1.5) img = img.sharpen({ sigma: 0.5 });
    await img.webp({ quality: 82, alphaQuality: 90, effort: 5, smartSubsample: true }).toFile(path.join(outDir, `${slug}-${ow}.webp`));
  }
  manifest[slug] = { side, product: [w, h], widths: uniq, sharpUpTo: Math.floor(side / 2) };
  console.log(slug.padEnd(42), `${w}x${h}`.padEnd(10), 'side', side, 'widths', uniq.join(','));
}
fs.writeFileSync(path.join(root, 'assets/menu/manifest.json'), JSON.stringify(manifest, null, 1));
console.log('photos:', Object.keys(manifest).length);
