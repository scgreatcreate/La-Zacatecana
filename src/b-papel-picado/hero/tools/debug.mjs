// Dev helper: open dev.html, print console output + hero state, save one screenshot.
import { createRequire } from 'node:module';
import { serve } from './serve.mjs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const port = 5900 + Math.floor(Math.random() * 90);
const srv = await serve(port);
const w = +(process.argv[2] || 1440), h = +(process.argv[3] || 900), q = process.argv[4] || '?freeze';
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: w < 720 ? 2 : 1 });
page.on('console', (m) => console.log('[console]', m.type(), m.text().slice(0, 600)));
page.on('pageerror', (e) => console.log('[pageerror]', String(e).slice(0, 800)));
await page.goto(`http://localhost:${port}/src/b-papel-picado/hero/dev.html${q}`);
const t0 = Date.now();
await page.waitForFunction(() => window.__heroB && (window.__heroB.ready || window.__heroB.static), null, { timeout: 60000 }).catch(() => console.log('not ready'));
console.log('ready in', Date.now() - t0, 'ms', await page.evaluate(() => JSON.stringify({ s: window.__heroB && window.__heroB.static, info: window.__heroB && window.__heroB.info && window.__heroB.info() })));
await page.waitForTimeout(1000);
await page.screenshot({ path: process.argv[5] || '/tmp/claude-0/-home-user-La-Zacatecana/5edfb289-dfaa-51ab-89eb-1564f4ef281c/scratchpad/debug.png' });
await browser.close(); srv.close();
