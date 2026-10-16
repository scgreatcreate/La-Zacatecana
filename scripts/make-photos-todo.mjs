// Generates PHOTOS_TODO.md: every image that falls short of "sharp at 2x its display size",
// with path, where it appears, target pixel size and upscale-vs-reshoot advice. Ordered by impact.
import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const { ITEMS } = await import(path.join(root, 'src/shared/menu-data.mjs'));
const { FAVORITES } = await import(path.join(root, 'src/shared/config.mjs'));
const sharp = JSON.parse(fs.readFileSync(path.join(root, 'assets/menu/sharpness.json'), 'utf8'));
const shop = JSON.parse(fs.readFileSync(path.join(root, 'assets/shop/manifest.json'), 'utf8'));
const log = JSON.parse(fs.readFileSync(path.join(root, 'assets/menu/download-log.json'), 'utf8'));
const rawOf = Object.fromEntries(log.map((l) => [l.slug, l.file]));

// hero usage (filled in from the integrated hero builds)
const HERO_USES = JSON.parse(fs.readFileSync(path.join(root, 'scripts/hero-photo-uses.json'), 'utf8'));
const favIds = FAVORITES.map((f) => ITEMS.find((i) => i.es === f.name).id);
const SOFT = 130; // Laplacian variance below this = visibly soft at native size

const rows = [];
for (const it of ITEMS.filter((i) => i.photo)) {
  const where = [];
  let target = 1000, rank = 3;
  if (HERO_USES[it.id]) { where.push(...HERO_USES[it.id].map((h) => `Hero ${h}`)); target = 2000; rank = 1; }
  if (favIds.includes(it.id)) { where.push('Los favoritos (all 3 directions)'); target = Math.max(target, 1200); rank = Math.min(rank, 2); }
  where.push('Picture menu card + Sorpréndeme reel (all 3)');
  const s = sharp[it.id]; const side = it.photo.side; const soft = s.lapVar < SOFT;
  const special = { 'sponch-shake': 'Same photo as Sponch fresas c/crema — needs its own photo', 'sponch-fresas-c-crema': 'Same photo as Sponch-Shake', 'waffle-de-burbuja': 'A gloved hand was erased from the original — reshoot without hands' }[it.id];
  const short = side < target;
  if (!soft && !short && !special) continue;
  const action = special || soft ? 'Reshoot' : `Upscale existing ×${Math.ceil((target / side) * 10) / 10}`;
  const why = [special, soft ? `soft at native size (sharpness ${s.lapVar})` : null, short ? `native ${side}px square < ${target}px needed` : null].filter(Boolean).join('; ');
  rows.push({ rank, impact: rank * 10000 - (favIds.indexOf(it.id) >= 0 ? 1000 - favIds.indexOf(it.id) : 0) + side / 100, name: it.es, file: rawOf[it.id], web: `assets/menu/web/${it.id}-*.webp`, where: where.join('; '), target: `${target}×${target}`, action, why });
}
const shopRows = [
  ['storefront', 'The shop collage; Hero C (night storefront)', 'Night storefront, straight on, sign + lamps lit, no people'],
  ['counter', 'The shop collage (largest tile)', 'Counter + yellow logo wall, today\'s decor, daytime, no people'],
  ['selfie', 'The shop collage — "Tómate la foto"', 'Grass wall + neon cone, neon on, no people, no phone UI'],
  ['seating', 'The shop collage', 'Seating + cactus prints, warm light, no people'],
  ['cactus', '(available; not used at display size)', 'The three cactus prints, straight on'],
];
const L = ['# Photos to upscale or reshoot', '', 'Rule used: every raster must look sharp at **2× its largest display size**. "Upscale existing" means the source is crisp but too small (your upscaler can fix it: upscale the file in `assets/menu/raw/`, drop it back with the same name, then run `npm run photos && npm run build`). "Reshoot" means the source itself is soft, compressed or compromised, so upscaling would only enlarge the blur.', '', 'Target sizes are for the **square product image**, before my automatic cutout. Shoot on a plain light background, phone at counter height, soft window light, the whole product in frame with margin.', ''];
L.push('## Hero + Los favoritos (highest impact)', '', '| # | Item | Original file | Where it appears | Target px | Action | Why |', '|---|---|---|---|---|---|---|');
let n = 0;
const sorted = rows.sort((a, b) => a.impact - b.impact);
for (const r of sorted.filter((r) => r.rank < 3)) L.push(`| ${++n} | ${r.name} | \`${r.file}\` | ${r.where} | ${r.target} | **${r.action}** | ${r.why} |`);
L.push('', '## Shop photos (all are Aug 2024 Google Maps screenshots)', '', '| # | Photo | File | Where it appears | Target px | Action | Brief |', '|---|---|---|---|---|---|---|');
for (const [k, where, brief] of shopRows) L.push(`| ${++n} | ${k} | \`assets/shop/${k}-*.webp\` (from \`reference/\`) | ${where} | 2400×1600 (landscape) / 1600×2000 (portrait) | **Reshoot** | ${brief}; current crop is only ${shop[k].w}×${shop[k].h} |`);
L.push('', '## Picture menu cards', '', '| # | Item | Original file | Where it appears | Target px | Action | Why |', '|---|---|---|---|---|---|---|');
for (const r of sorted.filter((r) => r.rank === 3)) L.push(`| ${++n} | ${r.name} | \`${r.file}\` | ${r.where} | ${r.target} | **${r.action}** | ${r.why} |`);
const pm = ITEMS.filter((i) => !i.photo && i.pm); const none = ITEMS.filter((i) => !i.photo && !i.pm);
L.push('', `## No DoorDash photo (${pm.length + none.length} items) — **Reshoot all** at 1000×1000`, '', `These show a typographic card. ${pm.length} have a tiny chip cropped from the in-store picture menu (\`assets/menu/pm/\`, ~100 px, shown at 52 px); ${none.length} have no image at all.`, '');
L.push(`- With a picture-menu chip: ${pm.map((i) => i.es).join(', ')}.`);
L.push(`- No image anywhere: ${none.map((i) => i.es).join(', ')}.`);
fs.writeFileSync(path.join(root, 'PHOTOS_TODO.md'), L.join('\n') + '\n');
console.log('PHOTOS_TODO rows', n, '+', pm.length + none.length, 'no-photo items');
