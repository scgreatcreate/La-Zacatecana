// quick screenshots in one page: node tools/quick.mjs <query> <name> [phone|desktop] [p,p,p] [waitms]
// -> .shots/quick/<name>-<view>-<p>.png and a strip <name>-<view>-strip.png
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import { chromium } from 'playwright'; import sharp from 'sharp';
const ROOT = process.cwd(); const HERE = path.join(ROOT, 'src/c-chamoy-after-dark/hero');
const [query = '', name = 'quick', view = 'phone', plist = '0', wait = '1500'] = process.argv.slice(2);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff' };
const server = http.createServer((req, res) => { const f = path.join(ROOT, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); });
await new Promise((r) => server.listen(0, r));
const v = view === 'phone' ? { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true } : { width: 1440, height: 900, deviceScaleFactor: 1 };
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await browser.newContext({ viewport: { width: v.width, height: v.height }, deviceScaleFactor: v.deviceScaleFactor, isMobile: !!v.isMobile, hasTouch: !!v.hasTouch });
const page = await ctx.newPage(); const logs = [];
page.on('console', (m) => logs.push(m.type() + ': ' + m.text())); page.on('pageerror', (e) => logs.push('PAGEERROR ' + e.message));
await page.goto(`http://localhost:${server.address().port}/src/c-chamoy-after-dark/hero/dev.html${query}`, { waitUntil: 'load' });
await page.waitForTimeout(+wait);
fs.mkdirSync(path.join(HERE, '.shots/quick'), { recursive: true });
const outs = [];
for (const p of plist.split(',').map(Number)) {
  await page.evaluate((p) => { const s = document.querySelector('[data-hero]'); scrollTo(0, Math.round(s.offsetTop + p * (s.offsetHeight - innerHeight))); }, p);
  await page.waitForTimeout(500);
  await page.waitForFunction((p) => window.__hcPT === undefined || (Math.abs(window.__hcPT - p) < 0.003 && window.__hcP === window.__hcPT), p, { timeout: 30000 }).catch(() => logs.push('p did not converge ' + p));
  await page.waitForTimeout(250);
  const out = path.join(HERE, '.shots/quick', `${name}-${view}-${String(Math.round(p * 100)).padStart(3, '0')}.png`);
  await page.screenshot({ path: out, timeout: 90000 }); outs.push(out);
}
if (outs.length > 1) {
  const W = view === 'phone' ? 390 : 720, Hh = view === 'phone' ? 844 : 450;
  const imgs = await Promise.all(outs.map((o) => sharp(o).resize(W).toBuffer()));
  const strip = path.join(HERE, '.shots/quick', `${name}-${view}-strip.png`);
  await sharp({ create: { width: (W + 8) * outs.length, height: Hh, channels: 3, background: '#333' } }).composite(imgs.map((b, i) => ({ input: b, left: i * (W + 8), top: 0 }))).png().toFile(strip);
  outs.push(strip);
}
console.log(logs.filter((l) => !l.includes('GPU stall')).slice(0, 20).join('\n')); console.log(outs.join('\n'));
await browser.close(); server.close();
