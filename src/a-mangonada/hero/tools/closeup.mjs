// QA: 2x close-up crop of the dev harness at progress p. node tools/closeup.mjs <p> <out.png> '{"x":..,"y":..,"width":..,"height":..}'
import { chromium } from 'playwright';
const [p, out, clip] = [+process.argv[2], process.argv[3], JSON.parse(process.argv[4])];
const b = await chromium.launch({ args: ['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const pg = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await pg.addInitScript(() => { window.__HERO_A_STILL__ = true; });
await pg.goto('file:///home/user/La-Zacatecana/src/a-mangonada/hero/dev.html');
await pg.waitForFunction(() => document.querySelector('.hero--a').dataset.heroState === 'live');
const y = await pg.evaluate((p) => window.__heroA.scrollForP(p), p);
await pg.evaluate((y) => scrollTo(0, y), y);
await pg.waitForTimeout(2500);
await pg.screenshot({ path: out, clip });
await b.close();
