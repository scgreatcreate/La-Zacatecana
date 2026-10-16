// Inlines tools/out/neon-svg-snippet.html into hero.html between the NEON markers (idempotent).
import fs from 'node:fs';
import path from 'node:path';
const HERE = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const file = path.join(HERE, 'hero.html');
let html = fs.readFileSync(file, 'utf8');
const snippet = fs.readFileSync(path.join(HERE, 'tools/out/neon-svg-snippet.html'), 'utf8');
const block = `<!--NEON:start-->\n          ${snippet}\n          <!--NEON:end-->`;
if (html.includes('<!--NEON-->')) html = html.replace('<!--NEON-->', block);
else html = html.replace(/<!--NEON:start-->[\s\S]*?<!--NEON:end-->/, block);
fs.writeFileSync(file, html);
console.log('hero.html', html.length, 'bytes');
