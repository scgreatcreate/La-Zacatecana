// Renders the hero scene itself at p = 0, t = 0 (transparent background) and writes the static
// first-frame posters: assets/poster-800.webp and assets/poster-1600.webp (4:5, with alpha).
// The page's WebGL framing uses the same FRAME0/target/camera, so the poster→WebGL hand-off is seamless.
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const W = 2000, H = 2500; // render big, downsample for clean edges
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
page.on('pageerror', (e) => console.error('pageerror', e.message));
page.on('console', (m) => { if (m.type() === 'error') console.error(m.text()); });
await page.addInitScript(([w, h]) => { window.__HERO_A_POSTER__ = { w, h }; }, [W, H]);
await page.goto('file://' + path.join(dir, 'dev.html'), { waitUntil: 'load' });
await page.waitForFunction(() => !!window.__HERO_A_POSTER_DATA__, null, { timeout: 300000 });
const data = await page.evaluate(() => window.__HERO_A_POSTER_DATA__);
await browser.close();
const png = Buffer.from(data.split(',')[1], 'base64');
fs.mkdirSync(path.join(dir, 'assets'), { recursive: true });
fs.writeFileSync(path.join(dir, '.shots', 'poster-raw.png'), png);
for (const w of [800, 1600]) {
  const file = path.join(dir, 'assets', `poster-${w}.webp`);
  await sharp(png).resize(w, Math.round((w * H) / W), { kernel: 'lanczos3' }).webp({ quality: 84, alphaQuality: 90, effort: 6, smartSubsample: true }).toFile(file);
  console.log(file, (fs.statSync(file).size / 1024).toFixed(1), 'kB');
}
