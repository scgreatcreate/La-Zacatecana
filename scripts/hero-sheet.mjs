// Contact sheet of hero screenshots: row 1 = phone 0..100%, row 2 = desktop 0..100%.
import sharp from 'sharp'; import path from 'node:path';
const [dir, out] = process.argv.slice(2);
const P = [0, 25, 50, 75, 100];
const comps = []; let x = 0;
const ph = 640; const dh = 360;
for (const [i, p] of P.entries()) {
  const m = await sharp(path.join('review', dir, `hero-m-${p}.png`)).resize({ height: ph }).toBuffer();
  comps.push({ input: m, left: i * 300, top: 0 });
}
for (const [i, p] of P.entries()) {
  const d = await sharp(path.join('review', dir, `hero-d-${p}.png`)).resize({ height: dh }).toBuffer();
  comps.push({ input: d, left: (i % 3) * 590, top: ph + 10 + Math.floor(i / 3) * (dh + 10) });
}
await sharp({ create: { width: 1770, height: ph + 20 + 2 * dh + 10, channels: 3, background: '#222' } }).composite(comps).jpeg({ quality: 85 }).toFile(out);
