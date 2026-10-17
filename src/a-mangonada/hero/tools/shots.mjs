// Playwright self-check: 390×844@2x and 1440×900 at p = 0 .25 .5 .75 1 scrolling DOWN then UP,
// plus reduced-motion and no-WebGL frames. Writes to src/a-mangonada/hero/.shots/<tag>/.
// Usage: node src/a-mangonada/hero/tools/shots.mjs [--tag=r1] [--only=390|1440] [--ps=0,0.5] [--no-extra]
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const arg = (k, d) => { const a = process.argv.find((x) => x.startsWith(`--${k}=`)); return a ? a.split('=')[1] : d; };
const tag = arg('tag', 'latest');
const only = arg('only', '');
const ps = arg('ps', '0,0.25,0.5,0.75,1').split(',').map(Number);
const extra = !process.argv.includes('--no-extra');
const outDir = path.join(dir, '.shots', tag);
fs.mkdirSync(outDir, { recursive: true });
const url = arg('url', 'file://' + path.join(dir, 'dev.html'));
const GL = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'];

const VIEWS = [
  { name: '390', viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  { name: '1440', viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
].filter((v) => !only || v.name === only);

const frames = (page, n = 3) => page.evaluate((n) => new Promise((r) => { let i = 0; const f = () => (++i >= n ? r() : requestAnimationFrame(f)); requestAnimationFrame(f); }), n);

async function diff(a, b) {
  const [A, B] = await Promise.all([a, b].map((f) => sharp(f).raw().toBuffer({ resolveWithObject: true })));
  let n = 0, max = 0;
  for (let i = 0; i < A.data.length; i++) { const d = Math.abs(A.data[i] - B.data[i]); if (d > 8) n++; if (d > max) max = d; }
  return { frac: n / A.data.length, max };
}

const browser = await chromium.launch({ args: GL });
const report = { tag, views: {} };
for (const v of VIEWS) {
  const ctx = await browser.newContext({ viewport: v.viewport, deviceScaleFactor: v.deviceScaleFactor, isMobile: v.isMobile, hasTouch: v.hasTouch });
  const page = await ctx.newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(`${m.type()}: ${m.text()}`); });
  page.on('pageerror', (e) => logs.push(`pageerror: ${e.message}`));
  await page.addInitScript(() => { window.__HERO_A_STILL__ = true; });
  await page.goto(url, { waitUntil: 'load' });
  const t0 = Date.now();
  await page.waitForFunction(() => document.querySelector('.hero--a')?.dataset.heroState?.length > 0, null, { timeout: 120000 });
  const state = await page.evaluate(() => document.querySelector('.hero--a').dataset.heroState);
  console.log(v.name, 'state', state, `${Date.now() - t0}ms`);
  await page.evaluate(() => document.fonts.ready);
  await frames(page, 4);
  await page.waitForTimeout(700); // poster → WebGL crossfade
  const rec = { state, shots: [], info: {}, logs };
  const seq = [...ps.map((p) => ['down', p]), ...[...ps].reverse().map((p) => ['up', p])];
  for (const [dirn, p] of seq) {
    const y = await page.evaluate((p) => window.__heroA.scrollForP(p), p);
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await frames(page, 4);
    const file = path.join(outDir, `${v.name}-p${String(Math.round(p * 100)).padStart(3, '0')}-${dirn}.png`);
    await page.screenshot({ path: file });
    const info = await page.evaluate(() => window.__heroA.info());
    rec.info[`${dirn}${p}`] = info;
    rec.shots.push(file);
    console.log(v.name, dirn, p, `y=${Math.round(y)}`, `calls=${info.calls} tris=${info.triangles} js=${info.frameMs.toFixed(1)}ms`);
  }
  rec.pairs = {};
  for (const p of ps) {
    const n = (d) => path.join(outDir, `${v.name}-p${String(Math.round(p * 100)).padStart(3, '0')}-${d}.png`);
    rec.pairs[p] = await diff(n('down'), n('up'));
  }
  console.log(v.name, 'down/up pixel diff', JSON.stringify(rec.pairs));
  if (logs.length) console.log(v.name, 'console:', logs.slice(0, 10).join('\n'));
  report.views[v.name] = rec;
  await ctx.close();
}
await browser.close();

if (extra) {
  // reduced motion (with WebGL available) and WebGL disabled
  for (const [label, launchArgs, ctxOpt] of [
    ['reduced', GL, { reducedMotion: 'reduce' }],
    ['nowebgl', ['--disable-webgl', '--disable-3d-apis'], {}],
  ]) {
    const b = await chromium.launch({ args: launchArgs });
    for (const v of VIEWS) {
      const ctx = await b.newContext({ viewport: v.viewport, deviceScaleFactor: v.deviceScaleFactor, isMobile: v.isMobile, hasTouch: v.hasTouch, ...ctxOpt });
      const page = await ctx.newPage();
      await page.goto(url, { waitUntil: 'load' });
      await page.waitForFunction(() => document.querySelector('.hero--a')?.dataset.heroState?.length > 0, null, { timeout: 60000 }).catch(() => {});
      await page.evaluate(() => document.fonts.ready);
      await frames(page, 3);
      const st = await page.evaluate(() => ({ state: document.querySelector('.hero--a').dataset.heroState, h: document.querySelector('.hero--a').offsetHeight, vh: innerHeight }));
      const file = path.join(outDir, `${v.name}-${label}.png`);
      await page.screenshot({ path: file });
      console.log(v.name, label, JSON.stringify(st));
      await ctx.close();
    }
    await b.close();
  }
}
fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 1));
