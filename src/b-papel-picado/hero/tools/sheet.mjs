// Dev helper: contact sheet of a shot round. node tools/sheet.mjs <tag> <out.png> [phone|desk]
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const sharp = createRequire(import.meta.url)('sharp');
const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../.shots');
const [tag, out, view = 'phone'] = process.argv.slice(2);
const names = ['down-000', 'down-025', 'down-050', 'down-075', 'down-100'].map((n) => `${tag}-${view}-${n}.png`);
const W = view === 'phone' ? 390 : 720, H = view === 'phone' ? 844 : 450;
const cols = view === 'phone' ? 5 : 3;
const bufs = await Promise.all(names.map((n) => sharp(path.join(dir, n)).resize(W, H).toBuffer()));
const rows = Math.ceil(bufs.length / cols);
await sharp({ create: { width: cols * (W + 8), height: rows * (H + 8), channels: 3, background: '#111' } })
  .composite(bufs.map((b, i) => ({ input: b, left: (i % cols) * (W + 8), top: Math.floor(i / cols) * (H + 8) }))).png().toFile(out);
