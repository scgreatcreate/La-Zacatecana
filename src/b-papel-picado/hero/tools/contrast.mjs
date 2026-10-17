// Dev helper: renders p = 0 with the copy hidden, then measures the background behind each text element
// (5th-percentile luminance = darkest typical pixel) and reports WCAG contrast against the text colour.
import { createRequire } from 'node:module';
import { serve } from './serve.mjs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const sharp = require('sharp');
const port = 6500 + Math.floor(Math.random() * 300);
const srv = await serve(port);
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const L = (c) => { const f = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2]); };
const ratio = (a, b) => (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
for (const vp of [{ width: 390, height: 844, s: 2 }, { width: 1440, height: 900, s: 1 }]) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: vp.s });
  await page.goto(`http://localhost:${port}/src/b-papel-picado/hero/dev.html?freeze&poster`);
  await page.waitForFunction(() => window.__heroB && window.__heroB.ready, null, { timeout: 90000 });
  await page.waitForTimeout(2000);
  await page.evaluate(() => window.__heroB.hold(true));
  const items = await page.evaluate(() => ['.hero-b__tagline', '.hero-b__tag2', '.hero-b__en', '.hero-b__sells', '.hero-b__addr', '.hero-b__menu'].map((s) => {
    const el = document.querySelector(s); const r = el.getBoundingClientRect(); const c = getComputedStyle(el).color.match(/\d+/g).map(Number);
    return { s, x: r.x, y: r.y, w: r.width, h: r.height, c, size: getComputedStyle(el).fontSize };
  }));
  const png = await page.screenshot({ timeout: 120000 });
  const { data, info } = await sharp(png).raw().toBuffer({ resolveWithObject: true });
  for (const it of items) {
    const lum = [];
    for (let y = Math.floor(it.y * vp.s); y < (it.y + it.h) * vp.s; y += 2) for (let x = Math.floor(it.x * vp.s); x < (it.x + it.w) * vp.s; x += 2) {
      const i = (y * info.width + x) * info.channels; lum.push(L([data[i], data[i + 1], data[i + 2]]));
    }
    lum.sort((a, b) => a - b);
    const p5 = lum[Math.floor(lum.length * 0.05)], med = lum[Math.floor(lum.length / 2)];
    console.log(vp.width, it.s.padEnd(18), it.size.padEnd(6), 'worst', ratio(L(it.c), p5).toFixed(2), 'median', ratio(L(it.c), med).toFixed(2));
  }
  await page.close();
}
await browser.close(); srv.close();
