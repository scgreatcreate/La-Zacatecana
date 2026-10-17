// Functional QA: loop stops past the landing / off-screen, settles on fast jumps, restarts on scroll back,
// and falls back cleanly on WebGL context loss. Run: node src/a-mangonada/hero/tools/check.mjs
// functional checks: loop stops at p=1 / off-screen, restarts on scroll back, context-loss fallback
import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
p.on('pageerror', e => console.log('pageerror', e.message));
await p.goto('file:///home/user/La-Zacatecana/src/a-mangonada/hero/dev.html');
await p.waitForFunction(() => document.querySelector('.hero--a').dataset.heroState === 'live');
const st = () => p.evaluate(() => ({ p: +window.__heroA.p().toFixed(3), running: window.__heroA.running(), frames: window.__heroA.info().frames, cls: document.querySelector('.hero--a').className, photo: document.querySelector('[data-flip-target] img').style.opacity, canvasOpacity: document.querySelector('.hero-gl').style.opacity }));
await p.waitForTimeout(1500); console.log('top', await st());
const y1 = await p.evaluate(() => window.__heroA.scrollForP(1));
await p.evaluate(y => scrollTo(0, y + 400), y1); await p.waitForTimeout(2500); console.log('past p=1', await st());
const f0 = (await st()).frames; await p.waitForTimeout(1500); console.log('frames while past (should not grow):', (await st()).frames - f0);
await p.evaluate(() => scrollTo(0, 3000)); await p.waitForTimeout(1500); console.log('far below', await st());
await p.evaluate(y => scrollTo(0, y), await p.evaluate(() => window.__heroA.scrollForP(0.6))); await p.waitForTimeout(2500); console.log('back to .6', await st());
await p.evaluate(() => document.dispatchEvent(new Event('visibilitychange')));
await p.evaluate(() => document.querySelector('.hero-gl').getContext('webgl2').getExtension('WEBGL_lose_context').loseContext()); await p.waitForTimeout(1500);
console.log('after context loss', await p.evaluate(() => ({ state: document.querySelector('.hero--a').dataset.heroState, h: document.querySelector('.hero--a').offsetHeight, y: scrollY, photo: document.querySelector('[data-flip-target] img').style.opacity })));
await b.close();
