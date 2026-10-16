// Downloads every photo_url in reference/menu.json into assets/menu/raw/<slug>.<ext>
// Logs failures to assets/menu/download-log.json. Never substitutes stock photos.
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const menu = JSON.parse(await fs.readFile(path.join(root, 'reference/menu.json'), 'utf8'));
const outDir = path.join(root, 'assets/menu/raw');
await fs.mkdir(outDir, { recursive: true });

export const slugify = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const log = [];
const seen = new Map();
for (const [i, item] of menu.items.entries()) {
  if (!item.photo_url) continue;
  let slug = slugify(item.name_es);
  if (seen.has(slug)) slug = `${slug}-${i}`;
  seen.set(slug, true);
  const ext = path.extname(new URL(item.photo_url).pathname) || '.jpg';
  const file = path.join(outDir, slug + ext);
  let ok = false, err = null, bytes = 0;
  for (let attempt = 0; attempt < 3 && !ok; attempt++) {
    try {
      const res = await fetch(item.photo_url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await fs.writeFile(file, buf);
      bytes = buf.length; ok = true;
    } catch (e) { err = String(e); await new Promise(r => setTimeout(r, 1000 * (attempt + 1))); }
  }
  log.push({ index: i, name_es: item.name_es, slug, file: path.relative(root, file), ok, bytes, err, url: item.photo_url });
}
await fs.writeFile(path.join(root, 'assets/menu/download-log.json'), JSON.stringify(log, null, 1));
console.log(`downloaded ${log.filter(l => l.ok).length} / ${log.length}`);
for (const l of log.filter(l => !l.ok)) console.log('FAILED', l.name_es, l.err);
