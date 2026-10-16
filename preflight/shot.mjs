import { chromium } from 'playwright';
const browser = await chromium.launch({ args: ['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
for (const w of [390, 1440]) {
  const page = await browser.newPage({ viewport: { width: w, height: w === 390 ? 844 : 900 }, deviceScaleFactor: w === 390 ? 2 : 1 });
  await page.goto('file://' + process.cwd() + '/preflight/test-page.html');
  await page.screenshot({ path: `preflight/test-${w}.png` });
  console.log(w, await page.title());
}
await browser.close();
