// Dev build: bundles hero.js -> .dev/hero.js (IIFE, minified) and inlines hero.html into dev.html.
// Run from the repo root: node src/a-mangonada/hero/tools/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import * as esbuild from 'esbuild';

const dir = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const out = path.join(dir, '.dev/hero.js');

const res = await esbuild.build({
  entryPoints: [path.join(dir, 'hero.js')],
  bundle: true, format: 'iife', minify: !process.argv.includes("--dev"), target: ['es2020', 'safari15'],
  outfile: out, legalComments: 'none', loader: { '.svg': 'text', '.glsl': 'text' }, metafile: true, logLevel: 'warning',
});

const partial = fs.readFileSync(path.join(dir, 'hero.html'), 'utf8').trim();
const devFile = path.join(dir, 'dev.html');
const dev = fs.readFileSync(devFile, 'utf8');
const next = dev.replace(/<!--HERO:START-->[\s\S]*?<!--HERO:END-->/, `<!--HERO:START-->\n${partial}\n<!--HERO:END-->`);
if (next !== dev) fs.writeFileSync(devFile, next);

const buf = fs.readFileSync(out);
const gz = zlib.gzipSync(buf, { level: 9 }).length;
const br = zlib.brotliCompressSync(buf).length;
console.log(`hero.js ${(buf.length / 1024).toFixed(1)} kB raw · ${(gz / 1024).toFixed(1)} kB gz · ${(br / 1024).toFixed(1)} kB br`);
if (process.argv.includes('--analyze')) console.log(await esbuild.analyzeMetafile(res.metafile, { verbose: false }));
