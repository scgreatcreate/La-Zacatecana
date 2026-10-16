// WCAG AA colour-contrast audit with axe-core (static first frame, both languages, 390 + 1440).
import { chromium } from 'playwright'; import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const axe = fs.readFileSync(path.join(root, 'node_modules/axe-core/axe.min.js'), 'utf8');
const dirs = process.argv.slice(2).length ? process.argv.slice(2) : ['a-mangonada', 'b-papel-picado', 'c-chamoy-after-dark'];
const browser = await chromium.launch();
const report = {};
for (const dir of dirs) for (const w of [390, 1440]) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  await page.goto('file://' + path.join(root, 'directions', dir, 'index.html') + '?static');
  await page.evaluate(() => { document.querySelectorAll('.reveal-armed').forEach((e) => e.classList.add('is-in')); document.querySelectorAll('.mgroup').forEach((g) => g.classList.add('is-open')); });
  await page.waitForTimeout(400);
  await page.addScriptTag({ content: axe });
  const res = await page.evaluate(async () => (await window.axe.run(document, { runOnly: ['color-contrast'], resultTypes: ['violations', 'incomplete'] })));
  const v = res.violations.flatMap((x) => x.nodes.map((n) => ({ target: n.target.join(' '), summary: n.any?.[0]?.message || n.failureSummary })));
  report[`${dir}@${w}`] = { violations: v.length, incomplete: res.incomplete.reduce((s, x) => s + x.nodes.length, 0), sample: v.slice(0, 40) };
  console.log(`${dir}@${w}: ${v.length} violations, ${report[`${dir}@${w}`].incomplete} need manual check`);
  for (const s of v.slice(0, 40)) console.log('   ', s.target.slice(0, 80), '|', (s.summary || '').slice(0, 140));
  await page.close();
}
await browser.close();
fs.mkdirSync(path.join(root, 'review'), { recursive: true });
fs.writeFileSync(path.join(root, 'review/contrast.json'), JSON.stringify(report, null, 1));
