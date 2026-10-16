// Picture-menu crops → small transparent WebP chips (shown at ≤ half native size, so they stay sharp at 2x).
import sharp from 'sharp'; import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const inDir = path.join(root, 'assets/menu/pm-cut'), out = path.join(root, 'assets/menu/pm');
fs.mkdirSync(out, { recursive: true });
const man = {};
for (const f of fs.readdirSync(inDir).filter((x) => x.endsWith('.png'))) {
  const slug = f.replace(/\.png$/, '');
  const t = await sharp(path.join(inDir, f)).ensureAlpha().trim({ threshold: 2 }).toBuffer({ resolveWithObject: true });
  const side = Math.max(t.info.width, t.info.height);
  const sq = await sharp({ create: { width: side, height: side, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: t.data, left: Math.round((side - t.info.width) / 2), top: Math.round((side - t.info.height) / 2) }]).webp({ quality: 88, alphaQuality: 95 }).toFile(path.join(out, slug + '.webp'));
  man[slug] = { w: side, h: side };
}
fs.writeFileSync(path.join(root, 'assets/menu/picture-menu-crops.json'), JSON.stringify(man, null, 1));
console.log('pm chips', Object.keys(man).length);
