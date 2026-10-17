# Photos to upscale or reshoot

Rule used: every raster must look sharp at **2× its largest display size**. "Upscale existing" means the source is crisp but too small (your upscaler can fix it: upscale the file in `assets/menu/raw/`, drop it back with the same name, then run `npm run photos && npm run build`). "Reshoot" means the source itself is soft, compressed or compromised, so upscaling would only enlarge the blur.

Target sizes are for the **square product image**, before my automatic cutout. Shoot on a plain light background, phone at counter height, soft window light, the whole product in frame with margin.

## Hero + Los favoritos (highest impact)

| # | Item | Original file | Where it appears | Target px | Action | Why |
|---|---|---|---|---|---|---|
| 1 | Mangonada | `assets/menu/raw/mangonada.png` | Hero A (the 3D cup lands on this photo in the Mangonada card); Hero B (on the counter); Hero C (Picante side); Los favoritos (all 3 directions); Picture menu card + Sorpréndeme reel (all 3) | 2000×2000 | **Reshoot** | soft at native size (sharpness 91) |
| 2 | Fresas con crema y Nutella | `assets/menu/raw/fresas-con-crema-y-nutella.png` | Hero B (on the counter); Hero C (Dulce side); Picture menu card + Sorpréndeme reel (all 3) | 2000×2000 | **Reshoot** | soft at native size (sharpness 54); native 1955px square < 2000px needed |
| 3 | Waffle de Burbuja | `assets/menu/raw/waffle-de-burbuja.png` | Hero C (Dulce side); Picture menu card + Sorpréndeme reel (all 3) | 2000×2000 | **Reshoot** | A gloved hand was erased from the original — reshoot without hands |
| 4 | Sandifresa | `assets/menu/raw/sandifresa.png` | Hero B (on the counter); Hero C (Picante side); Picture menu card + Sorpréndeme reel (all 3) | 2000×2000 | **Reshoot** | soft at native size (sharpness 85) |
| 5 | Dubai chocolate strawberries | `assets/menu/raw/dubai-chocolate-strawberries.png` | Los favoritos (all 3 directions); Picture menu card + Sorpréndeme reel (all 3) | 1200×1200 | **Upscale existing ×2.6** | native 467px square < 1200px needed |
| 6 | Fresas con Crema | `assets/menu/raw/fresas-con-crema.jpg` | Los favoritos (all 3 directions); Picture menu card + Sorpréndeme reel (all 3) | 1200×1200 | **Reshoot** | soft at native size (sharpness 39); native 615px square < 1200px needed |
| 7 | Esquite | `assets/menu/raw/esquite.jpg` | Los favoritos (all 3 directions); Picture menu card + Sorpréndeme reel (all 3) | 1200×1200 | **Reshoot** | soft at native size (sharpness 125); native 619px square < 1200px needed |
| 8 | 15 Mini Pancakes | `assets/menu/raw/15-mini-pancakes.png` | Los favoritos (all 3 directions); Picture menu card + Sorpréndeme reel (all 3) | 1200×1200 | **Upscale existing ×2.8** | native 429px square < 1200px needed |
| 9 | Gansito-Shake | `assets/menu/raw/gansito-shake.jpg` | Los favoritos (all 3 directions); Picture menu card + Sorpréndeme reel (all 3) | 1200×1200 | **Reshoot** | soft at native size (sharpness 40); native 694px square < 1200px needed |

## Shop photos (all are Aug 2024 Google Maps screenshots)

| # | Photo | File | Where it appears | Target px | Action | Brief |
|---|---|---|---|---|---|---|
| 10 | storefront | `assets/shop/storefront-*.webp` (from `reference/`) | The shop collage; Hero C (night storefront) | 2400×1600 (landscape) / 1600×2000 (portrait) | **Reshoot** | Night storefront, straight on, sign + lamps lit, no people; current crop is only 729×780 |
| 11 | counter | `assets/shop/counter-*.webp` (from `reference/`) | The shop collage (largest tile) | 2400×1600 (landscape) / 1600×2000 (portrait) | **Reshoot** | Counter + yellow logo wall, today's decor, daytime, no people; current crop is only 880×510 |
| 12 | selfie | `assets/shop/selfie-*.webp` (from `reference/`) | The shop collage — "Tómate la foto" | 2400×1600 (landscape) / 1600×2000 (portrait) | **Reshoot** | Grass wall + neon cone, neon on, no people, no phone UI; current crop is only 536×400 |
| 13 | seating | `assets/shop/seating-*.webp` (from `reference/`) | The shop collage | 2400×1600 (landscape) / 1600×2000 (portrait) | **Reshoot** | Seating + cactus prints, warm light, no people; current crop is only 905×660 |
| 14 | cactus | `assets/shop/cactus-*.webp` (from `reference/`) | (available; not used at display size) | 2400×1600 (landscape) / 1600×2000 (portrait) | **Reshoot** | The three cactus prints, straight on; current crop is only 340×340 |

## Picture menu cards

| # | Item | Original file | Where it appears | Target px | Action | Why |
|---|---|---|---|---|---|---|
| 15 | Mini Pancakes Gourmet | `assets/menu/raw/mini-pancakes-gourmet.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×3.3** | native 306px square < 1000px needed |
| 16 | Concha Nieve | `assets/menu/raw/concha-nieve.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×3** | native 336px square < 1000px needed |
| 17 | Crepa Gourmet | `assets/menu/raw/crepa-gourmet.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×2.8** | native 364px square < 1000px needed |
| 18 | Fresas con Crema y Abuelita | `assets/menu/raw/fresas-con-crema-y-abuelita.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×2.7** | native 374px square < 1000px needed |
| 19 | Waffle Gourmet | `assets/menu/raw/waffle-gourmet.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×2.7** | native 381px square < 1000px needed |
| 20 | Boing Preparado | `assets/menu/raw/boing-preparado.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×2.6** | native 387px square < 1000px needed |
| 21 | Crepa Rellena de Mazapán y Queso Crema | `assets/menu/raw/crepa-rellena-de-mazapan-y-queso-crema.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×2.6** | native 393px square < 1000px needed |
| 22 | Waffle con Helado | `assets/menu/raw/waffle-con-helado.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×2.5** | native 413px square < 1000px needed |
| 23 | Fresas Congeladas | `assets/menu/raw/fresas-congeladas.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×2.4** | native 417px square < 1000px needed |
| 24 | Banana-Split | `assets/menu/raw/banana-split.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×2.3** | native 438px square < 1000px needed |
| 25 | Sincronizada | `assets/menu/raw/sincronizada.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×2.3** | native 453px square < 1000px needed |
| 26 | Pepino-Split | `assets/menu/raw/pepino-split.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×2.2** | native 455px square < 1000px needed |
| 27 | La Tusa | `assets/menu/raw/la-tusa.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×2.2** | native 462px square < 1000px needed |
| 28 | Biónico | `assets/menu/raw/bionico.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×2.2** | native 463px square < 1000px needed |
| 29 | Canasta 3 Marías | `assets/menu/raw/canasta-3-marias.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×2.2** | native 465px square < 1000px needed |
| 30 | Crepa Rellena | `assets/menu/raw/crepa-rellena.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×2.2** | native 472px square < 1000px needed |
| 31 | Flaming Hot Crepa | `assets/menu/raw/flaming-hot-crepa.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×2.1** | native 479px square < 1000px needed |
| 32 | Crepa | `assets/menu/raw/crepa.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×2.1** | native 483px square < 1000px needed |
| 33 | Yogur con Fresas | `assets/menu/raw/yogur-con-fresas.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Reshoot** | soft at native size (sharpness 125); native 492px square < 1000px needed |
| 34 | Chavo Crepa | `assets/menu/raw/chavo-crepa.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×2** | native 514px square < 1000px needed |
| 35 | Fresa Gourmet /Strawberry Gourmet | `assets/menu/raw/fresa-gourmet-strawberry-gourmet.jpg` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Reshoot** | soft at native size (sharpness 47); native 521px square < 1000px needed |
| 36 | Manzana Loca | `assets/menu/raw/manzana-loca.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×1.9** | native 530px square < 1000px needed |
| 37 | Waffle Simple | `assets/menu/raw/waffle-simple.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×1.9** | native 536px square < 1000px needed |
| 38 | Vaquita Loca | `assets/menu/raw/vaquita-loca.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×1.9** | native 537px square < 1000px needed |
| 39 | Helado | `assets/menu/raw/helado.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Reshoot** | soft at native size (sharpness 100); native 538px square < 1000px needed |
| 40 | Torta del Chavo | `assets/menu/raw/torta-del-chavo.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×1.8** | native 574px square < 1000px needed |
| 41 | Mazapan-Shake | `assets/menu/raw/mazapan-shake.jpg` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Reshoot** | soft at native size (sharpness 93); native 644px square < 1000px needed |
| 42 | Piña Loca | `assets/menu/raw/pina-loca.png` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×1.4** | native 752px square < 1000px needed |
| 43 | Carlos V Shake | `assets/menu/raw/carlos-v-shake.jpeg` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×1.4** | native 769px square < 1000px needed |
| 44 | Minejarrito | `assets/menu/raw/minejarrito.jpeg` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×1.3** | native 793px square < 1000px needed |
| 45 | Mega Smoothie | `assets/menu/raw/mega-smoothie.jpeg` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×1.3** | native 833px square < 1000px needed |
| 46 | Malteada de Nugs | `assets/menu/raw/malteada-de-nugs.jpeg` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×1.2** | native 866px square < 1000px needed |
| 47 | Monster Loco | `assets/menu/raw/monster-loco.jpeg` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Upscale existing ×1.2** | native 901px square < 1000px needed |
| 48 | Sponch-Shake | `assets/menu/raw/sponch-shake.jpg` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Reshoot** | Same photo as Sponch fresas c/crema — needs its own photo; soft at native size (sharpness 113) |
| 49 | Sponch fresas c/crema | `assets/menu/raw/sponch-fresas-c-crema.jpg` | Picture menu card + Sorpréndeme reel (all 3) | 1000×1000 | **Reshoot** | Same photo as Sponch-Shake; soft at native size (sharpness 113) |

## No DoorDash photo (64 items) — **Reshoot all** at 1000×1000

These show a typographic card. 60 have a tiny chip cropped from the in-store picture menu (`assets/menu/pm/`, ~100 px, shown at 52 px); 4 have no image at all.

- With a picture-menu chip: Gansito-Sundae, Marranadas, Maruchan Loca, Elote Loco, Costillas de Elote, Elote con Hot Cheetos, Agua Mineral Preparada, Café Helado, Cookie Monster-Shake, Fuego Mix, Raspado, Diablito, Michelagua, Pepino Loco, Nachos, TostiEsquite - DoriEsquite. - TakisEsquite, TostiLoco - DoriLoco, Takis Loco, Cacahuatada, Canasta de Açaí, Papas Preparadas, Cóctel de Fruta, Gaspacho, Flaming Esquite, Rusa, Raspado de Fresas con Crema, Minelada, Monsterlada, Ruffles Especial, Sandileta, Cueritos Preparados, Jarrito Float, Maltada de Fruity Pebbles, Kit Kat-Shake, Oreo-Frappe, Bubulubu Fresas con Crema, Ferrero Rocher Shake, Mini Pancakes Dubai, Crepa Dubai, Fresas con Crema Dubai, Crazy Cantarito, Chocomilk en Bolsita, Gansito Frappé, Loca Blender, Fresa Flan, Duvalín Shake, Fluffy French Toast, Fluffy French Toast con Helado, Spiderman Shake, Celsius Preparado, Biscoff Mini Pancakes, Oreo Stuffed Mini Pancakes, Fruity Pebbles Stuffed Mini Pancakes, Chips Ahoy Stuffed Mini Pancakes, RedBull Dragonfruit, Dubai Split, Duvalín Ice Coffee, Flamin Hot Quesadilla, Piña con Kool-Aid, Fresas con Crema con Cheesecake.
- No image anywhere: Paletas, Choco-bananas, Tunas, Mango sago.
