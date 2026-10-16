// quick single screenshots: node tools/quick.mjs <query> <name> [phone|desktop] [p] [waitms]
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import { chromium } from 'playwright';
const ROOT = process.cwd(); const HERE = path.join(ROOT, 'src/c-chamoy-after-dark/hero');
const [query = '', name = 'quick', view = 'phone', p = '0', wait = '1500'] = process.argv.slice(2);
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
if (+p) { await page.evaluate((p) => { const s = document.querySelector('[data-hero]'); scrollTo(0, s.offsetTop + p * (s.offsetHeight - innerHeight)); }, +p); await page.waitForTimeout(1200); }
fs.mkdirSync(path.join(HERE, '.shots/quick'), { recursive: true });
const out = path.join(HERE, '.shots/quick', `${name}-${view}.png`);
await page.screenshot({ path: out });
console.log(logs.join('\n')); console.log(out);
await browser.close(); server.close();
