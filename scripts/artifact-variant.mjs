// Makes a private-preview copy of a built direction for claude.ai Artifacts:
// the Artifact host wraps the page in its own <html>/<head>/<body>, so strip those tags and
// give the page a short name. All other files are published alongside it unchanged.
// Usage: node scripts/artifact-variant.mjs <dir> <outFile>
import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const [dir, outFile] = process.argv.slice(2);
const NAMES = { 'a-mangonada': 'La Zacatecana · Mangonada', 'b-papel-picado': 'La Zacatecana · Papel Picado', 'c-chamoy-after-dark': 'La Zacatecana · After Dark' };
let html = fs.readFileSync(path.join(root, 'directions', dir, 'index.html'), 'utf8');
html = html.replace(/<!doctype html>\s*/i, '').replace(/<html[^>]*>\s*/i, '').replace(/<head>\s*/i, '').replace(/<\/head>\s*/i, '')
  .replace(/<body>\s*/i, '').replace(/\s*<\/body>\s*<\/html>\s*$/i, '\n');
html = html.replace(/<title>[^<]*<\/title>/, `<title>${NAMES[dir]}</title>`);
// title first so the host finds it in the first 8 KB
html = html.replace(/(<meta charset="utf-8">\s*)/, '');
html = `<meta charset="utf-8">\n` + html;
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, html);
const list = [];
(function walk(d, rel = '') {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) walk(path.join(d, e.name), r); else if (r !== 'index.html') list.push(r);
  }
})(path.join(root, 'directions', dir));
fs.writeFileSync(outFile.replace(/\.html$/, '.files.json'), JSON.stringify(list));
console.log(outFile, 'supporting files:', list.length);
