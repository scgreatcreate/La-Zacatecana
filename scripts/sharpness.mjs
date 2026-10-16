// Sharpness of each cutout at native resolution: Laplacian response on opaque pixels (higher = crisper).
import sharp from 'sharp'; import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const dir = path.join(root, 'assets/menu/cutout'); const res = {};
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.png'))) {
  const img = sharp(path.join(dir, f)).ensureAlpha();
  const { data: rgba, info } = await img.clone().raw().toBuffer({ resolveWithObject: true });
  // normalise scale: measure at a common 600px long edge (so big soft files don't win by size)
  const scale = 600 / Math.max(info.width, info.height);
  const W = Math.round(info.width * Math.min(1, scale)), H = Math.round(info.height * Math.min(1, scale));
  const { data: g } = await sharp(path.join(dir, f)).resize(W, H).greyscale().raw().toBuffer({ resolveWithObject: true });
  const { data: a } = await sharp(path.join(dir, f)).resize(W, H).ensureAlpha().extractChannel(3).raw().toBuffer({ resolveWithObject: true });
  let sum = 0, sum2 = 0, n = 0;
  for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) {
    const i = y * W + x; if (a[i] < 250 || a[i - 1] < 250 || a[i + 1] < 250 || a[i - W] < 250 || a[i + W] < 250) continue;
    const l = 4 * g[i] - g[i - 1] - g[i + 1] - g[i - W] - g[i + W]; sum += l; sum2 += l * l; n++;
  }
  const v = n ? sum2 / n - (sum / n) ** 2 : 0;
  res[f.replace('.png', '')] = { lapVar: Math.round(v), native: [info.width, info.height] };
}
fs.writeFileSync(path.join(root, 'assets/menu/sharpness.json'), JSON.stringify(res, null, 1));
Object.entries(res).sort((a, b) => a[1].lapVar - b[1].lapVar).forEach(([k, v]) => console.log(String(v.lapVar).padStart(6), k, v.native.join('x')));
