// Renders the static first frame from the live scene at p = 0 (frozen ambient time, DOM copy hidden)
// → ../assets/poster-{800,1600,2400}.webp (16:10) and poster-portrait-{780,1170}.webp (390×844 @2x/@3x).
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import { serve } from './serve.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const sharp = require('sharp');
const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, '../assets');
const port = 6100 + Math.floor(Math.random() * 300);
const srv = await serve(port);
const url = `http://localhost:${port}/src/b-papel-picado/hero/dev.html?poster&freeze&hidpi`;
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
async function shot(vp, dpr, mobile) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: dpr, isMobile: mobile, hasTouch: mobile });
  const page = await ctx.newPage();
  await page.goto(url);
  await page.waitForFunction(() => window.__heroB && window.__heroB.ready, null, { timeout: 90000 });
  await page.waitForTimeout(2500); // canvas fade-in + product texture
  await page.evaluate(() => window.__heroB.hold(true));
  await page.waitForTimeout(300);
  const box = await page.evaluate(() => { const r = document.querySelector('.hero--b .hero-stage').getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: Math.min(r.height, innerHeight) }; });
  const buf = await page.screenshot({ clip: box, timeout: 120000 });
  await ctx.close();
  return buf;
}
// --encode re-encodes the last captures in .shots/ without re-rendering
const raw = path.resolve(here, '../.shots');
fs.mkdirSync(raw, { recursive: true });
const enc = process.argv.includes('--encode');
const land = enc ? fs.readFileSync(path.join(raw, 'poster-land.png')) : await shot({ width: 1600, height: 1000 }, 1.5, false); // 2400×1500
if (!enc) fs.writeFileSync(path.join(raw, 'poster-land.png'), land);
for (const w of [2400, 1600, 800]) {
  await sharp(land).resize(w).median(3).webp({ quality: w >= 2400 ? 46 : w >= 1600 ? 52 : 62, effort: 6, smartSubsample: true }).toFile(path.join(out, `poster-${w}.webp`));
}
const port3 = enc ? fs.readFileSync(path.join(raw, 'poster-port.png')) : await shot({ width: 390, height: 844 }, 3, true); // 1170×2532
if (!enc) fs.writeFileSync(path.join(raw, 'poster-port.png'), port3);
for (const w of [1170, 780]) {
  await sharp(port3).resize(w).median(3).webp({ quality: w > 800 ? 46 : 54, effort: 6, smartSubsample: true }).toFile(path.join(out, `poster-portrait-${w}.webp`));
}
await browser.close(); srv.close();
for (const f of fs.readdirSync(out).filter((f) => f.startsWith('poster'))) console.log(f, (fs.statSync(path.join(out, f)).size / 1024).toFixed(0) + ' kB');
