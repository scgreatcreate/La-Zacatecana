// Manually erase regions (hands/gloves) from cutouts. Coordinates are fractions of width/height.
// People must never appear on the site; these photos had a hand holding the product.
import sharp from 'sharp'; import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
export const ERASE = {
  'waffle-de-burbuja': [[[0, .41], [.183, .431], [.241, .525], [.27, .625], [.286, .7], [.29, 1], [0, 1]]],
};
for (const [slug, polys] of Object.entries(ERASE)) {
  for (const file of [path.join(root, 'assets/menu/cutout', slug + '.png')]) {
    if (!fs.existsSync(file)) continue;
    const img = sharp(file); const m = await img.metadata();
    const pts = (p) => p.map(([x, y]) => `${(x * m.width).toFixed(1)},${(y * m.height).toFixed(1)}`).join(' ');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${m.width}" height="${m.height}">${polys.map((p) => `<polygon points="${pts(p)}" fill="#000"/>`).join('')}</svg>`;
    const mask = await sharp(Buffer.from(svg)).blur(1.2).png().toBuffer();
    const out = await sharp(file).ensureAlpha().composite([{ input: mask, blend: 'dest-out' }]).png().toBuffer();
    fs.writeFileSync(file, out); console.log('erased', slug);
  }
}
