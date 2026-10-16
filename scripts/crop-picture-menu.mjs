// Last-resort photos: crop items that have no DoorDash photo from the owner's in-store picture menu
// (reference/picture-menu-0N.png). These are tiny (~100 px), so the site shows them at ≤ half their
// native size (a small "from the picture menu" chip) and every one is listed in PHOTOS_TODO.md.
import sharp from 'sharp'; import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const slugify = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const GRID = {
  1: { cols: [0, 145, 257, 380, 505, 637], rows: [42, 149, 251, 354, 461, 573, 690, 805] },
  2: { cols: [0, 117, 235, 361, 494, 629], rows: [55, 180, 308, 437, 564, 690, 814] },
  3: { cols: [0, 126, 255, 381, 497, 641], rows: [55, 182, 310, 439, 566, 690, 824] },
  5: { cols: [0, 128, 260, 386, 513, 631], rows: [45, 172, 297, 407] },
};
// [page, row, col, name_es in menu.json, title lines]
const MAP = [
  [1, 1, 0, 'Mini Pancakes Dubai', 2], [1, 1, 2, 'Crepa Dubai', 1], [1, 1, 3, 'Fresas con Crema Dubai', 2],
  [1, 4, 0, 'Gansito-Sundae', 1], [1, 5, 4, 'Maruchan Loca', 1], [1, 6, 0, 'Elote Loco', 1],
  [1, 6, 1, 'Costillas de Elote', 1], [1, 6, 4, 'Elote con Hot Cheetos', 2],
  [2, 0, 0, 'Agua Mineral Preparada', 2], [2, 0, 3, 'Café Helado', 1], [2, 0, 4, 'Crazy Cantarito', 1],
  [2, 1, 1, 'Cookie Monster-Shake', 1], [2, 1, 4, 'Fuego Mix', 1], [2, 2, 0, 'Raspado', 1], [2, 2, 1, 'Diablito', 1],
  [2, 2, 2, 'Michelagua', 1], [2, 2, 3, 'Chocomilk en Bolsita', 2], [2, 3, 0, 'Pepino Loco', 1], [2, 3, 1, 'Nachos', 1],
  [2, 3, 2, 'TostiEsquite - DoriEsquite. - TakisEsquite', 2], [2, 3, 3, 'TostiLoco - DoriLoco', 1], [2, 3, 4, 'Takis Loco', 1],
  [2, 4, 0, 'Cacahuatada', 1], [2, 4, 1, 'Canasta de Açaí', 1], [2, 4, 3, 'Papas Preparadas', 1],
  [2, 5, 1, 'Cóctel de Fruta', 1], [2, 5, 2, 'Gaspacho', 1], [2, 5, 3, 'Marranadas', 1],
  [3, 0, 0, 'Flaming Esquite', 1], [3, 0, 1, 'Loca Blender', 1], [3, 0, 2, 'Rusa', 1], [3, 0, 4, 'Raspado de Fresas con Crema', 2],
  [3, 1, 0, 'Minelada', 1], [3, 1, 1, 'Monsterlada', 1], [3, 1, 3, 'Ruffles Especial', 2], [3, 1, 4, 'Sandileta', 1],
  [3, 2, 0, 'Cueritos Preparados', 1], [3, 2, 2, 'Jarrito Float', 1], [3, 2, 3, 'Maltada de Fruity Pebbles', 1], [3, 2, 4, 'Kit Kat-Shake', 1],
  [3, 3, 0, 'Fresa Flan', 1], [3, 3, 1, 'Oreo-Frappe', 1], [3, 5, 1, 'Bubulubu Fresas con Crema', 2], [3, 5, 3, 'Ferrero Rocher Shake', 2],
  [3, 5, 4, 'Gansito Frappé', 1],
  [5, 0, 0, 'Duvalín Shake', 1], [5, 0, 1, 'Fluffy French Toast', 2], [5, 0, 2, 'Fluffy French Toast con Helado', 3], [5, 0, 3, 'Spiderman Shake', 2],
  [5, 0, 4, 'Celsius Preparado', 2], [5, 1, 0, 'Biscoff Mini Pancakes', 2], [5, 1, 1, 'Oreo Stuffed Mini Pancakes', 2],
  [5, 1, 2, 'Fruity Pebbles Stuffed Mini Pancakes', 2], [5, 1, 3, 'Chips Ahoy Stuffed Mini Pancakes', 2], [5, 1, 4, 'RedBull Dragonfruit', 2],
  [5, 2, 0, 'Dubai Split', 1], [5, 2, 1, 'Duvalín Ice Coffee', 1], [5, 2, 2, 'Flamin Hot Quesadilla', 2], [5, 2, 3, 'Piña con Kool-Aid', 2],
  [5, 2, 4, 'Fresas con Crema con Cheesecake', 2],
];
const outDir = path.join(root, 'assets/menu/.pm-crops'); fs.mkdirSync(outDir, { recursive: true });
const list = [];
for (const [p, r, c, name, lines] of MAP) {
  const g = GRID[p]; const x0 = g.cols[c] + 3, x1 = g.cols[c + 1] - 3, y0 = g.rows[r], y1 = g.rows[r + 1] - 3;
  const titleH = 6 + lines * 17;
  const top = Math.min(y0 + titleH, y1 - 40);
  const slug = slugify(name);
  await sharp(path.join(root, `reference/picture-menu-0${p}.png`)).extract({ left: x0, top, width: x1 - x0, height: y1 - top })
    .png().toFile(path.join(outDir, slug + '.png'));
  list.push(path.join(outDir, slug + '.png'));
}
fs.writeFileSync(path.join(outDir, 'list.txt'), list.join('\n'));
console.log('cropped', list.length);
