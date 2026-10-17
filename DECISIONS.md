# Decisions made without asking (logged per the brief)

## Process / tooling
1. **No credit-based generation at all.** Higgsfield's 30 % cap (1.8 of 6 credits) is below any generation's cost; Adobe's connector says image generation isn't available; ElevenLabs balance can't be read without spending. Every hero is real-time code. See `AI_ASSETS.md`.
2. **Built-in browser not available** in this cloud session → the Canva picture menu was not viewed (I used `reference/picture-menu-0*.png`), Order links were click-tested from headless Chromium here, and order.online single-item deep links are **unverified**, so every item's Order button opens the commission-free store page (`ORDER_CONFIG.itemUrl = null`).
3. **Heroes built by three parallel sub-agents** against one written contract (`src/HERO_CONTRACT.md`), then integrated and reviewed by me; the site shell, data, photos and themes are shared.
4. **esbuild → classic IIFE bundles** (not ES modules) so each direction also opens straight from disk (`file://`) offline. Fonts are local `@fontsource` WOFF2 files; no CDN anywhere.
5. **CSS `position: sticky` instead of ScrollTrigger pinning** for the heroes: no layout shift when JS loads, and steadier on iOS Safari (address-bar resize). ScrollTrigger only reads scroll progress.

## Content / data
6. **Mood chip → data mapping** (menu.json has no "cremoso"/"crujiente" tags):
   Dulce = tag `dulce` · Picante = tag `picante` · Salado-crujiente = tag `salado` · Fruta = tag `fruta` + categories `fruta_con_chile`, `fresas` · Cremoso = categories `helado_sundaes`, `shakes_frappes`, `fresas` · Bebidas = tag `bebida` + categories `bebidas_preparadas`, `shakes_frappes` · Para compartir = tag `para_compartir` (only 3 items — owner should tag more) · Lo nuevo = tag `trending` (6).
   Chips combine with AND, so "Dulce + Picante" finds the sweet-and-spicy ones (7).
7. **Favorites = the verified DoorDash list**: Mangonada, Dubai chocolate strawberries (#1 most liked), Fresas con Crema, Esquite, Rame-esquite, 15 Mini Pancakes, Gansito-Shake. DoorDash says just "Mini Pancakes"; I picked **15 Mini Pancakes** → confirm.
8. **Picture menu is collapsed per category** (first 2–3 rows; "See all N") so Visit/Order aren't buried 20,000 px down on a phone. Filters and search always show every match, and all 118 items stay in the HTML for SEO.
9. Items without a DoorDash photo show a **typographic card**; 60 of them also get a small chip cropped from the owner's in-store picture menu, displayed at ≤ half its native size so it stays sharp at 2× (the crops are only ~100 px). 4 items have no image anywhere (Tunas, Mango sago, Paletas, Choco-bananas).
10. Picture-menu **page 4 lists ~28 items that are not in menu.json** (Marquesitas, Ice Cream Taco, Mangos con Crema, Mega Mangonada, Matcha…). menu.json is the single source of truth, so they are **not shown** → ask the owner.
11. **Reviews stay in English in both languages** (translating them would paraphrase them).
12. **Schema.org**: `IceCreamShop` + `Restaurant`, `servesCuisine` Mexican (+ Ice Cream, Desserts, Snacks), hours, phone, email, address, OrderAction → commission-free page. **No `aggregateRating`** (Google treats self-hosted third-party ratings as self-serving and ignores or penalizes them). No `url`/`image`/`logo` until the domain is live (they must be absolute URLs). No `acceptsReservations` or price range (unknown).
13. **Map = click-to-load Google Maps** over a designed offline card with Google/Apple directions buttons, so the page works offline and loads no third-party map until asked.
14. **External links open in a new tab** (`target=_blank rel=noopener`) — DoorDash refuses to load inside frames, and the private preview pages run inside one.
15. **Spanish copy** is mine (Mexican Spanish), including all 81 menu descriptions → owner review.
16. "Online prices. In-store prices may vary." appears above the menu and in the footer.

## Photos
17. **One consistent treatment**: local background removal → square transparent cutout, product filling 86 % of the frame on a shared baseline (94 %), +5 % saturation, soft drop shadow and per-item tinted "plate" done in CSS (each direction styles the plate its own way). No upscaling anywhere; the largest exported size is the native size.
18. A gloved hand was erased from *Waffle de Burbuja*; the selfie-wall photo is cropped to the neon + grass only (the original shows a hand and a video-player UI).
19. Interior photos got a gentle warm/pastel grade (+4 % brightness, −5 % saturation, slightly warmer), per your note that the walls read warmer and more pastel in person. They're used small, as framed postcards, so the Aug-2024 emptiness isn't the vibe.
20. Zacatecas outline from **Natural Earth** admin-1 data (public domain) rather than guessing the shape. Logo and wordmark are redrawn as SVG from the photos (Pacifico / Fredoka stand-ins for their lettering) → the owner must supply originals.

## Heroes (integration)
21. **Hero A drops GSAP/ScrollTrigger** for a ~60-line native scroll-progress reader (same reversibility, ignores iOS URL-bar resizes) and a trimmed, vendored three.js subset (pixel-identical frames). This took the hero bundle from 706 kB to 446 kB (127 kB gzipped). B and C use GSAP ScrollTrigger as briefed.
22. **Hero A's callouts are numbered in build order** (01 Chamoy → 05 Banderilla), the order a mangonada is assembled; numbering there encodes a real sequence.
23. **Hero A's FLIP** fits the 3D cup to the alpha bounds of the real photo in the Mangonada card, so the landing matches the photo's cup, then crossfades to the photo. That card is excluded from the scroll-reveal so it's already in place when the cup lands.
24. **Hero C's spicy side** shows mangonada, esquite con Hot Cheetos and sandifresa; the Takis cup photo looked almost identical to the Hot Cheetos cup, so it wasn't repeated. The fluid simulation is adapted from PavelDoGreat/WebGL-Fluid-Simulation (MIT, notice kept in `LICENSE-fluid.txt` and in the shader header).
25. **The no-JS / no-WebGL / reduced-motion state** of every hero is a designed static frame (A and B use a poster rendered from their own scene; C uses CSS/SVG neon and a frozen pour).
26. **Opening from disk (file://)**: Chrome won't upload local image files into WebGL or let a page read their pixels. Hero B now loads its counter-product image from a small script with the image inlined (`hero-assets/products.data.js`, used only on file://). Hero A reads the cup's position inside the Mangonada photo from a `data-bbox` attribute written at build time instead of scanning pixels. `START-HERE.html` at the repo root opens all three.
