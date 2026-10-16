// Crops the owner's shop photos (Google Maps screenshots, Aug 2024) to remove the Maps UI and any
// people, applies a gentle warm/pastel grade (the walls read warmer and more pastel in person),
// and exports responsive WebP without upscaling. Writes assets/shop/manifest.json.
import sharp from 'sharp'; import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const out = path.join(root, 'assets/shop'); fs.mkdirSync(out, { recursive: true });
for (const f of fs.readdirSync(out)) fs.unlinkSync(path.join(out, f));
const JOBS = {
  counter: { src: 'interior-counter-yellow-wall.webp', crop: [120, 300, 880, 510], warm: true },
  seating: { src: 'interior-seating-cactus-art.webp', crop: [330, 170, 905, 660], warm: true },
  cactus: { src: 'interior-seating-cactus-art.webp', crop: [895, 196, 340, 340], warm: true },
  storefront: { src: 'storefront-night.webp', crop: [0, 40, 729, 780], warm: false },
  selfie: { src: 'neon-selfie-wall.webp', crop: [0, 0, 536, 400], warm: false },
};
const manifest = {};
for (const [name, j] of Object.entries(JOBS)) {
  const [left, top, width, height] = j.crop;
  let img = sharp(path.join(root, 'reference', j.src)).extract({ left, top, width, height });
  if (j.warm) img = img.modulate({ brightness: 1.04, saturation: 0.95 }).recomb([[1.03, 0, 0], [0, 1.0, 0], [0, 0, 0.96]]);
  const buf = await img.png().toBuffer();
  const widths = [480, 800, 1200].filter((w) => w < width).concat([Math.min(width, 1200)]);
  const uniq = [...new Set(widths)];
  for (const w of uniq) await sharp(buf).resize({ width: w }).sharpen(w < width / 1.5 ? { sigma: 0.5 } : undefined).webp({ quality: 84 }).toFile(path.join(out, `${name}-${w}.webp`));
  manifest[name] = { widths: uniq, w: width, h: height };
  console.log(name, `${width}x${height}`, uniq.join(','));
}
fs.writeFileSync(path.join(out, 'manifest.json'), JSON.stringify(manifest, null, 1));
