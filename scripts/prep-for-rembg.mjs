// Stage 0: decide which raw photos need background removal and write ≤2000px PNG inputs for rembg.
import sharp from 'sharp'; import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const rawDir = path.join(root, 'assets/menu/raw'), tmp = path.join(root, 'assets/menu/.rembg-in'), cut = path.join(root, 'assets/menu/cutout');
fs.mkdirSync(tmp, { recursive: true }); fs.mkdirSync(cut, { recursive: true });
const need = [];
for (const f of fs.readdirSync(rawDir).sort()) {
  const p = path.join(rawDir, f), slug = f.replace(/\.[^.]+$/, '');
  const img = sharp(p); const m = await img.metadata();
  let transparent = 0;
  if (m.hasAlpha) {
    const { data, info } = await sharp(p).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    let t = 0, n = 0; for (let y = 0; y < info.height; y += 6) for (let x = 0; x < info.width; x += 6) { n++; if (data[(y * info.width + x) * 4 + 3] < 10) t++; }
    transparent = t / n;
  }
  if (transparent > 0.05) { await sharp(p).png().toFile(path.join(cut, slug + '.png')); console.log('keep-alpha', slug); }
  else { await sharp(p).flatten({ background: '#ffffff' }).resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true }).png().toFile(path.join(tmp, slug + '.png')); need.push(slug); }
}
fs.writeFileSync(path.join(tmp, 'list.txt'), need.map((s) => path.join(tmp, s + '.png')).join('\n'));
console.log('need rembg:', need.length);
