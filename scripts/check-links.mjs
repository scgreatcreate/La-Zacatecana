// Click-tests every external link of each built direction from a headless browser (no sign-in).
// Records the final URL + HTTP status after redirects. Writes review/links.json.
import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const urls = new Map();
for (const dir of ['a-mangonada', 'b-papel-picado', 'c-chamoy-after-dark']) {
  const html = fs.readFileSync(path.join(root, 'directions', dir, 'index.html'), 'utf8');
  for (const m of html.matchAll(/href="(https?:[^"]+)"/g)) {
    const u = m[1].replace(/&amp;/g, '&');
    if (!urls.has(u)) urls.set(u, new Set()); urls.get(u).add(dir);
  }
}
const browser = await chromium.launch();
const ctx = await browser.newContext({ userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1', viewport: { width: 390, height: 844 } });
const out = [];
for (const [u, dirs] of urls) {
  const page = await ctx.newPage();
  let status = null, final = null, title = null, err = null;
  try {
    const res = await page.goto(u, { waitUntil: 'domcontentloaded', timeout: 30000 });
    status = res?.status() ?? null; final = page.url(); title = (await page.title()).slice(0, 90);
  } catch (e) { err = String(e.message || e).split('\n')[0]; }
  out.push({ url: u, dirs: [...dirs], status, final, title, err });
  console.log(String(status ?? 'ERR').padEnd(4), u.slice(0, 95), '→', (final || err || '').slice(0, 80), title ? `| ${title}` : '');
  await page.close();
}
await browser.close();
fs.mkdirSync(path.join(root, 'review'), { recursive: true });
fs.writeFileSync(path.join(root, 'review/links.json'), JSON.stringify(out, null, 1));
