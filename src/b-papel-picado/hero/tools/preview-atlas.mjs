// Dev helper: renders the flag atlas SVG to PNG (sharp/librsvg) for a quick look.
import { createRequire } from 'node:module';
import fs from 'node:fs';
import { buildAtlasSVG } from '../atlas.js';
const sharp = createRequire(import.meta.url)('sharp');
const svg = buildAtlasSVG(fs.readFileSync(new URL('../../../../assets/brand/zacatecas.svg', import.meta.url), 'utf8'));
await sharp(Buffer.from(svg)).png().toFile(process.argv[2] || 'atlas.png');
console.log('atlas svg', (svg.length / 1024).toFixed(1), 'kB');
