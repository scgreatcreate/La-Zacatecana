// Self-review screenshots of a built direction (headless Chromium via Playwright).
// Usage: node scripts/shots.mjs <dir> [--full] [--sections] [--lang=es] [--hero] [--out=<folder>]
import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const args = process.argv.slice(2);
const dir = args.find((a) => !a.startsWith('--')) || 'a-mangonada';
const flag = (k) => args.includes('--' + k);
const opt = (k, d) => (args.find((a) => a.startsWith(`--${k}=`)) || '').split('=')[1] || d;
const out = opt('out', path.join(root, 'review', dir));
fs.mkdirSync(out, { recursive: true });

// tiny static server (file:// would also work, but http mirrors real hosting)
const base = path.join(root, 'directions', dir);
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.woff': 'font/woff', '.json': 'application/json', '.mp4': 'video/mp4' };
const server = http.createServer((req, res) => {
  const p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const f = path.join(base, p === '/' ? 'index.html' : p);
  if (!f.startsWith(base) || !fs.existsSync(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(0);
const url = `http://127.0.0.1:${server.address().port}/`;

const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const lang = opt('lang', 'en');
const errors = [];
for (const vp of [{ w: 390, h: 844, s: 2, name: 'm' }, { w: 1440, h: 900, s: 1, name: 'd' }]) {
  const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h }, deviceScaleFactor: vp.s, locale: lang === 'es' ? 'es-MX' : 'en-US', reducedMotion: flag('rm') ? 'reduce' : 'no-preference' });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errors.push(`[${vp.name}] ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`[${vp.name}] console: ${m.text()}`); });
  await page.goto(url + (flag('static') ? '?static' : ''), { waitUntil: 'load' });
  await page.waitForTimeout(1200);
  if (flag('hero')) {
    const H = await page.evaluate(() => { const h = document.querySelector('[data-hero]'); return h ? h.offsetHeight - innerHeight : 0; });
    for (const p of [0, 25, 50, 75, 100]) { await page.evaluate((y) => scrollTo(0, y), Math.round(H * p / 100)); await page.waitForTimeout(700); await page.screenshot({ path: path.join(out, `hero-${vp.name}-${p}.png`) }); }
  }
  if (flag('sections')) {
    const ids = await page.evaluate(() => Array.from(document.querySelectorAll('main > section, main > div > section, .menu, footer')).map((s) => s.id || s.className.split(' ')[0]).filter(Boolean));
    for (const id of ids) {
      const ok = await page.evaluate((id) => { const el = document.getElementById(id) || document.querySelector('.' + id); if (!el) return false; scrollTo(0, el.getBoundingClientRect().top + scrollY - 0); return true; }, id);
      if (!ok) continue;
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(out, `sec-${vp.name}-${id}.png`) });
    }
  }
  if (flag('full')) {
    // scroll through so lazy images + reveals resolve, then full-page capture
    const total = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < total; y += vp.h * 0.8) { await page.evaluate((y) => scrollTo(0, y), y); await page.waitForTimeout(120); }
    await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(out, `full-${vp.name}.png`), fullPage: true });
  }
  await ctx.close();
}
await browser.close(); server.close();
fs.writeFileSync(path.join(out, 'errors.txt'), errors.join('\n'));
console.log('shots →', out, errors.length ? `\nERRORS:\n${errors.join('\n')}` : '(no page errors)');
