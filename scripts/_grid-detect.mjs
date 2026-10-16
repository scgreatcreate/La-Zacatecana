import sharp from 'sharp';
for (const p of [1,2,3,5]) {
  const f = `reference/picture-menu-0${p}.png`;
  const { data, info } = await sharp(f).greyscale().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height;
  const dark = (x, y) => data[y * W + x] < 110;
  const cols = [];
  for (let x = 0; x < W; x++) { let n = 0; for (let y = 60; y < H; y++) if (dark(x, y)) n++; if (n / (H - 60) > 0.45) cols.push(x); }
  const rows = [];
  for (let y = 0; y < H; y++) { let n = 0; for (let x = 0; x < W; x++) if (dark(x, y)) n++; if (n / W > 0.55) rows.push(y); }
  const group = (a) => a.reduce((g, v) => { if (g.length && v - g[g.length - 1].at(-1) <= 2) g[g.length - 1].push(v); else g.push([v]); return g; }, []).map((g) => Math.round(g.reduce((s, v) => s + v, 0) / g.length));
  console.log(p, W, H, 'cols', group(cols).join(','), 'rows', group(rows).join(','));
}
