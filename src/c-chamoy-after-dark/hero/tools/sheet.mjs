// node tools/sheet.mjs <round>  -> .shots/<round>/sheet-{phone,desktop,extra}.png  (+ prints up/down pixel diffs)
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
const dir = path.join(process.cwd(), 'src/c-chamoy-after-dark/hero/.shots', process.argv[2] || 'r1');
const PS = ['000', '025', '050', '075', '100'];
async function grid(files, cellW, cellH, cols, out) {
  const have = files.filter((f) => fs.existsSync(path.join(dir, f)));
  if (!have.length) return;
  const rows = Math.ceil(have.length / cols);
  const comps = [];
  for (const [i, f] of have.entries()) {
    const img = await sharp(path.join(dir, f)).resize(cellW, cellH, { fit: 'contain', background: '#222' }).toBuffer();
    const label = Buffer.from(`<svg width="${cellW}" height="20"><rect width="100%" height="100%" fill="#000"/><text x="4" y="14" font-size="12" fill="#fff" font-family="sans-serif">${f}</text></svg>`);
    comps.push({ input: img, left: (i % cols) * (cellW + 6), top: Math.floor(i / cols) * (cellH + 26) + 20 });
    comps.push({ input: label, left: (i % cols) * (cellW + 6), top: Math.floor(i / cols) * (cellH + 26) });
  }
  await sharp({ create: { width: cols * (cellW + 6), height: rows * (cellH + 26), channels: 3, background: '#444' } }).composite(comps).png().toFile(path.join(dir, out));
}
await grid([...PS.map((p) => `phone-down-${p}.png`), ...PS.map((p) => `phone-up-${p}.png`)], 300, 650, 5, 'sheet-phone.png');
await grid([...PS.map((p) => `desktop-down-${p}.png`), ...PS.map((p) => `desktop-up-${p}.png`)], 480, 300, 5, 'sheet-desktop.png');
await grid(['phone-intro-1200ms.png', 'phone-intro-3700ms.png', 'phone-reduced-motion.png', 'phone-nojs.png', 'phone-nowebgl.png'], 300, 650, 5, 'sheet-phone-extra.png');
await grid(['desktop-intro-1200ms.png', 'desktop-intro-3700ms.png', 'desktop-reduced-motion.png', 'desktop-nojs.png', 'desktop-nowebgl.png'], 480, 300, 5, 'sheet-desktop-extra.png');
for (const v of ['phone', 'desktop']) {
  const res = [];
  for (const p of PS) {
    const a = path.join(dir, `${v}-down-${p}.png`), b = path.join(dir, `${v}-up-${p}.png`);
    if (!fs.existsSync(a) || !fs.existsSync(b)) continue;
    const [A, B] = await Promise.all([sharp(a).raw().toBuffer(), sharp(b).raw().toBuffer()]);
    let diff = 0, n = Math.min(A.length, B.length);
    for (let i = 0; i < n; i++) if (Math.abs(A[i] - B[i]) > 8) diff++;
    res.push(`${p}: ${((diff / n) * 100).toFixed(3)}%`);
  }
  console.log(v, 'down vs up differing samples ->', res.join('  '));
}
