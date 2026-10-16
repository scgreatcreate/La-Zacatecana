// Self-check screenshots (contract): 390x844@2 and 1440x900, p = 0 .25 .5 .75 1 down then up,
// plus intro (~1.2 s after load), reduced-motion, no-WebGL and no-JS frames.
//   node src/c-chamoy-after-dark/hero/tools/shots.mjs [round-name] [--only=phone|desktop] [--skip-extra]
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const ROOT = process.cwd();
const HERE = path.join(ROOT, 'src/c-chamoy-after-dark/hero');
const args = process.argv.slice(2);
const round = args.find((a) => !a.startsWith('--')) || 'r';
const only = (args.find((a) => a.startsWith('--only=')) || '').slice(7);
const skipExtra = args.includes('--skip-extra');
const extraQuery = (args.find((a) => a.startsWith('--q=')) || '').slice(4);
const OUT = path.join(HERE, '.shots', round);
fs.mkdirSync(OUT, { recursive: true });

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png',
  '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  const u = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const f = path.join(ROOT, u);
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
});
await new Promise((r) => server.listen(0, r));
const PORT = server.address().port;
const URL0 = `http://localhost:${PORT}/src/c-chamoy-after-dark/hero/dev.html`;

const GL_ARGS = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'];
const VIEWS = [
  { name: 'phone', width: 390, height: 844, dpr: 2, mobile: true },
  { name: 'desktop', width: 1440, height: 900, dpr: 1, mobile: false },
].filter((v) => !only || v.name === only);

const logs = [];
async function open(browser, v, query = '', ctxOpts = {}) {
  const ctx = await browser.newContext({ viewport: { width: v.width, height: v.height }, deviceScaleFactor: v.dpr,
    isMobile: v.mobile, hasTouch: v.mobile, ...ctxOpts });
  const page = await ctx.newPage();
  page.on('console', (m) => logs.push(`[${v.name}] ${m.type()}: ${m.text()}`));
  page.on('pageerror', (e) => logs.push(`[${v.name}] PAGEERROR: ${e.message}`));
  await page.goto(URL0 + query, { waitUntil: 'load' });
  return { ctx, page };
}
async function setP(page, p) {
  await page.evaluate((p) => {
    const s = document.querySelector('[data-hero]');
    const max = s.offsetHeight - innerHeight;
    window.scrollTo(0, Math.round(s.offsetTop + p * max));
  }, p);
}
async function settle(page, ms = 900) {
  await page.waitForTimeout(ms);
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
}

const browser = await chromium.launch({ args: GL_ARGS });
const PS = [0, 0.25, 0.5, 0.75, 1];
for (const v of VIEWS) {
  const q = '?freeze=2.6&seed=7' + (extraQuery ? '&' + extraQuery : '');
  const { ctx, page } = await open(browser, v, q);
  await page.waitForFunction(() => document.querySelector('[data-hero]').classList.contains('is-live') ||
    document.querySelector('[data-hero]').classList.contains('is-static'), null, { timeout: 30000 }).catch(() => {});
  await settle(page, 1200);
  const state = await page.evaluate(() => document.querySelector('[data-hero]').className);
  logs.push(`[${v.name}] state: ${state}`);
  for (const p of PS) { await setP(page, p); await settle(page); await page.screenshot({ path: path.join(OUT, `${v.name}-down-${String(p * 100).padStart(3, '0')}.png`) }); }
  for (const p of [...PS].reverse()) { await setP(page, p); await settle(page); await page.screenshot({ path: path.join(OUT, `${v.name}-up-${String(p * 100).padStart(3, '0')}.png`) }); }
  await ctx.close();

  if (skipExtra) continue;
  { // intro, live (not frozen): ~1.2 s after hero.js starts
    const { ctx, page } = await open(browser, v, '?seed=7' + (extraQuery ? '&' + extraQuery : ''));
    await page.waitForFunction(() => window.__hcBoot, null, { timeout: 30000 }).catch(() => {});
    const t0 = Date.now();
    await page.waitForTimeout(1200);
    await page.screenshot({ path: path.join(OUT, `${v.name}-intro-1200ms.png`) });
    logs.push(`[${v.name}] intro shot at ${Date.now() - t0}ms after boot; frames=${await page.evaluate(() => window.__hcFrames || 0)}`);
    await page.waitForTimeout(2500);
    await page.screenshot({ path: path.join(OUT, `${v.name}-intro-3700ms.png`) });
    await ctx.close();
  }
  { // reduced motion
    const { ctx, page } = await open(browser, v, '', { reducedMotion: 'reduce' });
    await settle(page, 700);
    await page.screenshot({ path: path.join(OUT, `${v.name}-reduced-motion.png`) });
    logs.push(`[${v.name}] reduced: ${await page.evaluate(() => document.querySelector('[data-hero]').className + ' h=' + document.querySelector('[data-hero]').offsetHeight)}`);
    await ctx.close();
  }
  { // no JS at all
    const { ctx, page } = await open(browser, v, '?nojs');
    await settle(page, 1700);
    await page.screenshot({ path: path.join(OUT, `${v.name}-nojs.png`) });
    await ctx.close();
  }
}
await browser.close();
if (!skipExtra) { // WebGL disabled
  const b2 = await chromium.launch({ args: ['--disable-webgl', '--disable-3d-apis'] });
  for (const v of VIEWS) {
    const { ctx, page } = await open(b2, v, '');
    await settle(page, 1500);
    await page.screenshot({ path: path.join(OUT, `${v.name}-nowebgl.png`) });
    logs.push(`[${v.name}] nowebgl: ${await page.evaluate(() => document.querySelector('[data-hero]').className)}`);
    await ctx.close();
  }
  await b2.close();
}
server.close();
fs.writeFileSync(path.join(OUT, 'log.txt'), logs.join('\n'));
console.log(logs.filter((l) => !/\bdebug\b/.test(l)).slice(0, 60).join('\n'));
console.log('shots ->', OUT);
