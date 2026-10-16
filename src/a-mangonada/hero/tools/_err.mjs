import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
p.on('console', m => console.log(m.type(), m.text()));
p.on('pageerror', e => console.log('pageerror', e.message, e.stack));
await p.goto('file:///home/user/La-Zacatecana/src/a-mangonada/hero/dev.html');
await p.waitForTimeout(8000);
console.log(await p.evaluate(() => document.querySelector('.hero--a').dataset.heroState));
await b.close();
