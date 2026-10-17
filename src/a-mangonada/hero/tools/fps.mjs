// QA: frames rendered in 5 s without the STILL hook (shows software-GL behaviour). node tools/fps.mjs [url]
import { chromium } from 'playwright';
const url = process.argv[2] || 'file:///home/user/La-Zacatecana/src/a-mangonada/hero/dev.html';
const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
for (const vp of [{ width: 390, height: 844, s: 2 }, { width: 1440, height: 900, s: 1 }]) {
  const p = await b.newPage({ viewport: vp, deviceScaleFactor: vp.s });
  await p.goto(url, { waitUntil: 'load' });
  await p.waitForFunction(() => document.querySelector('.hero--a')?.dataset.heroState, null, { timeout: 60000 });
  const f0 = await p.evaluate(() => window.__heroA?.info().frames ?? -1);
  const t0 = Date.now(); await p.waitForTimeout(5000);
  const r = await p.evaluate(() => ({ ...window.__heroA?.info(), state: document.querySelector('.hero--a').dataset.heroState }));
  const t1 = Date.now(); await p.screenshot({ path: '/dev/null', timeout: 60000 }).catch((e) => console.log('screenshot failed', e.message.split('\n')[0]));
  console.log(vp.width, 'frames/5s', r.frames - f0, 'state', r.state, 'gpuTier', r.tier, 'screenshot ms', Date.now() - t1);
  await p.close();
}
await b.close();
