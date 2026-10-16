// Self-check screenshots (contract): 390×844@2x and 1440×900 at p = 0,.25,.5,.75,1 scrolling DOWN then UP,
// plus reduced-motion and WebGL-disabled frames. Writes to ../.shots/ and diffs the up/down pairs.
// node src/b-papel-picado/hero/tools/shots.mjs [--only=phone|desk] [--ps=0,0.5] [--tag=r1] [--no-fallbacks] [--live]
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { serve } from './serve.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const sharp = require('sharp');
const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, '../.shots');
fs.mkdirSync(out, { recursive: true });
const arg = (k, d) => { const a = process.argv.find((x) => x.startsWith(`--${k}=`)); return a ? a.split('=')[1] : d; };
const only = arg('only', '');
const tag = arg('tag', '');
const ps = arg('ps', '0,0.25,0.5,0.75,1').split(',').map(Number);
const live = process.argv.includes('--live');
const port = 5174 + Math.floor(Math.random() * 500);
const srv = await serve(port);
const url = `http://localhost:${port}/src/b-papel-picado/hero/dev.html${live ? '' : '?freeze'}`;
const GL = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'];

const VIEWS = [
  { name: 'phone', viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  { name: 'desk', viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
].filter((v) => !only || v.name === only);

const browser = await chromium.launch({ args: GL });
const report = [];

async function gotoP(page, p) {
  await page.evaluate((p) => {
    const s = document.querySelector('.hero--b');
    const top = s.getBoundingClientRect().top + scrollY;
    const y = top + p * (s.offsetHeight - innerHeight);
    window.scrollTo(0, Math.round(y));
  }, p);
  await page.waitForFunction(() => window.__heroB && window.__heroB.settled && window.__heroB.settled(), null, { timeout: 30000 });
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => requestAnimationFrame(r)))));
}

for (const v of VIEWS) {
  const ctx = await browser.newContext({ viewport: v.viewport, deviceScaleFactor: v.deviceScaleFactor, isMobile: v.isMobile, hasTouch: v.hasTouch });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto(url);
  await page.waitForFunction(() => window.__heroB && (window.__heroB.ready || window.__heroB.static), null, { timeout: 60000 });
  const st = await page.evaluate(() => window.__heroB.static);
  if (st) { console.log(v.name, 'STATIC:', st, errors); continue; }
  await page.waitForTimeout(800);
  const files = {};
  const seq = [...ps.map((p) => ['down', p]), ...ps.slice(0, -1).reverse().map((p) => ['up', p])];
  for (const [dir, p] of seq) {
    await gotoP(page, p);
    const f = path.join(out, `${tag ? tag + '-' : ''}${v.name}-${dir}-${String(Math.round(p * 100)).padStart(3, '0')}.png`);
    await page.screenshot({ path: f });
    files[`${dir}-${p}`] = f;
    if (dir === 'down' && p === 0) report.push({ view: v.name, info: await page.evaluate(() => window.__heroB.info()) });
  }
  // up/down pairs must match (frozen ambient time)
  for (const p of ps.slice(0, -1)) {
    const a = await sharp(files[`down-${p}`]).raw().toBuffer();
    const b = await sharp(files[`up-${p}`]).raw().toBuffer();
    let d = 0, big = 0;
    for (let i = 0; i < a.length; i++) { const x = Math.abs(a[i] - b[i]); d += x; if (x > 24) big++; }
    report.push({ view: v.name, p, meanAbsDiff: +(d / a.length).toFixed(4), pxOver24: big });
  }
  if (errors.length) report.push({ view: v.name, errors: [...new Set(errors)].slice(0, 8) });
  await ctx.close();
}

if (!process.argv.includes('--no-fallbacks')) {
  for (const v of VIEWS) {
    // reduced motion
    const ctx = await browser.newContext({ viewport: v.viewport, deviceScaleFactor: v.deviceScaleFactor, isMobile: v.isMobile, hasTouch: v.hasTouch, reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    await page.goto(url);
    await page.waitForTimeout(1500);
    await page.screenshot({ path: path.join(out, `${tag ? tag + '-' : ''}${v.name}-reduced.png`) });
    report.push({ view: v.name, reduced: await page.evaluate(() => ({ static: window.__heroB && window.__heroB.static, h: document.querySelector('.hero--b').offsetHeight, vh: innerHeight })) });
    await ctx.close();
  }
  const b2 = await chromium.launch({ args: ['--disable-webgl', '--disable-3d-apis'] });
  for (const v of VIEWS) {
    const ctx = await b2.newContext({ viewport: v.viewport, deviceScaleFactor: v.deviceScaleFactor, isMobile: v.isMobile, hasTouch: v.hasTouch });
    const page = await ctx.newPage();
    await page.goto(url);
    await page.waitForTimeout(1500);
    await page.screenshot({ path: path.join(out, `${tag ? tag + '-' : ''}${v.name}-nowebgl.png`) });
    report.push({ view: v.name, nowebgl: await page.evaluate(() => ({ static: window.__heroB && window.__heroB.static, h: document.querySelector('.hero--b').offsetHeight, vh: innerHeight })) });
    await ctx.close();
  }
  await b2.close();
}
await browser.close();
srv.close();
console.log(JSON.stringify(report, null, 1));
