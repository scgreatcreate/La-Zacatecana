// Dev build: bundles hero.js → .dev/hero.js (IIFE, like the shell build) and injects hero.html into dev.html.
// Run from anywhere: node src/b-papel-picado/hero/tools/build.mjs [--watch]
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const esbuild = require('esbuild');
const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(here, '..');

function inject() {
  const devFile = path.join(dir, 'dev.html');
  const dev = fs.readFileSync(devFile, 'utf8');
  const hero = fs.readFileSync(path.join(dir, 'hero.html'), 'utf8').trim();
  const a = dev.indexOf('<!-- HERO:START');
  const b = dev.indexOf('<!-- HERO:END -->');
  const startEnd = dev.indexOf('-->', a) + 3;
  const out = dev.slice(0, startEnd) + '\n' + hero + '\n' + dev.slice(b);
  if (out !== dev) fs.writeFileSync(devFile, out);
}

const opts = {
  entryPoints: [path.join(dir, 'hero.js')],
  bundle: true,
  format: 'iife',
  minify: true,
  target: ['es2020', 'safari15'],
  loader: { '.svg': 'text', '.glsl': 'text' },
  outfile: path.join(dir, '.dev/hero.js'),
  metafile: true,
  legalComments: 'none',
};

async function once() {
  const r = await esbuild.build(opts);
  inject();
  const js = fs.readFileSync(opts.outfile);
  const gz = zlib.gzipSync(js, { level: 9 }).length;
  console.log(`hero.js ${(js.length / 1024).toFixed(1)} kB min, ${(gz / 1024).toFixed(1)} kB gz`);
  if (process.argv.includes('--meta')) {
    const ins = Object.entries(r.metafile.outputs[opts.outfile.replace(process.cwd() + '/', '')]?.inputs || Object.values(r.metafile.outputs)[0].inputs)
      .sort((a, b) => b[1].bytesInOutput - a[1].bytesInOutput).slice(0, 14);
    for (const [f, v] of ins) console.log(String(v.bytesInOutput).padStart(8), f);
  }
}
await once();
