# Owner checklist — La Zacatecana demo

Everything below is marked on the site as [CONFIRM WITH OWNER], left as a placeholder, or needs the owner's answer before launch.

## 1. Business facts and badges
- [ ] Google attributes shown as small badges: **"Latino-owned"** and **"LGBTQ+ friendly"** — keep them?
- [ ] **Leave us a Google review** link is a Maps search placeholder → replace with the direct review link from Google Business Profile (`LINKS.googleReview` in `src/shared/config.mjs`).
- [ ] Domain / canonical URL → then add `url`, `image`, `logo` to the schema markup (they must be absolute URLs).
- [ ] **Original logo files** (AI/PDF/SVG). The site uses my SVG redraws (`assets/brand/`), with Pacifico and Fredoka standing in for their lettering.
- [ ] Owners' Zacatecas connection: the site uses the Zacatecas outline (it's in their logo) and pink-cantera styling, but makes **no** origin-story claim. If they want one, they write it. [CONFIRM: owners' Zacatecas connection]
- [ ] Holiday hours / exceptions (the "Open now" pill uses Mon–Fri 12–9, Sat–Sun 11–9, America/New_York).
- [ ] Which "Mini Pancakes" is the DoorDash-featured one (the site uses **15 Mini Pancakes** in Los favoritos).

## 2. Prices
- [ ] **Confirm in-store prices.** All prices are DoorDash online prices; the site says "Online prices. In-store prices may vary."
- [ ] 23 items have no online price and show **"Ask in store"**: Mini Pancakes Dubai, Crepa Dubai, Fresas con Crema Dubai, Crazy Cantarito, Chocomilk en Bolsita, Gansito Frappé, Loca Blender, Fresa Flan, Duvalín Shake, Fluffy French Toast, Fluffy French Toast con Helado, Spiderman Shake, Celsius Preparado, Biscoff Mini Pancakes, Oreo Stuffed Mini Pancakes, Fruity Pebbles Stuffed Mini Pancakes, Chips Ahoy Stuffed Mini Pancakes, RedBull Dragonfruit, Dubai Split, Duvalín Ice Coffee, Flamin Hot Quesadilla, Piña con Kool-Aid, Fresas con Crema con Cheesecake.

## 3. Copy
- [ ] **Owner review of all Spanish copy** — UI text (`src/shared/i18n.mjs`) and the 81 menu descriptions I translated (`src/shared/menu-es.mjs`).
- [ ] **37 items have no description** (wrong DoorDash text was removed; I didn't invent new ones): Maruchan Loca, Elote Loco, Agua Mineral Preparada, Cookie Monster-Shake, Waffle de Burbuja, Fuego Mix, Michelagua, Papas Preparadas, Flaming Esquite, Minelada, Ruffles Especial, Sandileta, Tunas, Crepaleta, Mini Pancakes Dubai, Crepa Dubai, Fresas con Crema Dubai, Crazy Cantarito, Chocomilk en Bolsita, Gansito Frappé, Loca Blender, Fresa Flan, Duvalín Shake, Fluffy French Toast, Fluffy French Toast con Helado, Spiderman Shake, Celsius Preparado, Biscoff Mini Pancakes, Oreo Stuffed Mini Pancakes, Fruity Pebbles Stuffed Mini Pancakes, Chips Ahoy Stuffed Mini Pancakes, RedBull Dragonfruit, Dubai Split, Duvalín Ice Coffee, Flamin Hot Quesadilla, Piña con Kool-Aid, Fresas con Crema con Cheesecake.
- [ ] Picture-menu page 4 shows ~28 items that are **not in menu.json** (e.g. Marquesitas, Ice Cream Taco, Mangos con Crema, Mega Mangonada, Mega Limonada, Matcha, Pop Tarts Shake, Pingüino Shake, Crepa Bowl, Shark Attack, Tuna combo, Cereal Sundae, add boba…). Add them?
- [ ] Only 3 items are tagged "para compartir" — tag more for the "Para compartir" chip?

## 4. Item notes from menu.json (`confirm_with_owner`)
- [ ] **Dubai chocolate strawberries** ($19.75) — Confirm it is pistachio cream. #1 most-liked item on DoorDash (76% of 13 ratings).
- [ ] **Aguas Frescas** ($8.50) — The DoorDash description literally shows '#NAME?' (a broken spreadsheet formula).
- [ ] **Esquite** ($6.75) — Price is for small; confirm sizes.
- [ ] **Esquite con Hot Cheetos** ($7.50) — Price is for small.
- [ ] **Helado** ($3.75) — Price is for 1 scoop; confirm 2- and 3-scoop prices.
- [ ] **Marranadas** ($13.00) — Taken from the owner's own Spanish text: tostaditas, cacahuates, cueritos, clamato, soya y valentina.
- [ ] **Maruchan Loca** ($16.99) — Confirm toppings.
- [ ] **Elote Loco** ($15.75) — Confirm toppings.
- [ ] **Costillas de Elote** ($10.50) — DoorDash wrongly calls this pork ribs. Confirm toppings.
- [ ] **Agua Mineral Preparada** ($11.75) — Confirm.
- [ ] **Café Helado** ($6.50) — The picture menu also lists Chocolate de Abuelita.
- [ ] **Arizona Preparado** ($10.50) — Confirm.
- [ ] **Cookie Monster-Shake** ($11.99) — DoorDash description is copied from Monsterlada. Confirm what it is.
- [ ] **Waffle de Burbuja** ($15.75) — No description on DoorDash. Confirm toppings.
- [ ] **Fuego Mix** ($13.75) — DoorDash description (grilled chicken, beef, shrimp) is almost certainly wrong. Confirm what it is.
- [ ] **Raspado** ($7.50) — Confirm flavors.
- [ ] **Michelagua** ($14.99) — Confirm.
- [ ] **Nachos** ($9.25) — Confirm toppings.
- [ ] **TostiLoco - DoriLoco** ($15.75) — Confirm toppings.
- [ ] **Chicharrón Preparado** ($13.00) — Confirm toppings.
- [ ] **Papas Preparadas** ($12.00) — Confirm: chips or fries, and toppings.
- [ ] **Cóctel de Fruta** ($11.25) — Price is for small.
- [ ] **Flaming Esquite** ($9.25) — Confirm toppings.
- [ ] **Rusa** ($10.25) — Confirm.
- [ ] **Minelada** ($11.25) — DoorDash description (steak, sausage) is almost certainly wrong. Likely a drink; confirm.
- [ ] **Monsterlada** ($11.99) — Confirm.
- [ ] **Ruffles Especial** ($12.00) — Confirm toppings.
- [ ] **Sandileta** ($9.50) — DoorDash description (grilled sandwich) is almost certainly wrong. Confirm.
- [ ] **Esquite con Takis** ($6.75) — Price is for small.
- [ ] **La Tusa** ($15.00) — Confirm.
- [ ] **Fresas con Crema y Abuelita** ($15.99) — Confirm toppings.
- [ ] **Bubulubu Fresas con Crema** ($13.99) — Confirm toppings.
- [ ] **Tunas** ($11.00) — DoorDash says 'tuna fish'; 'tunas' is almost certainly prickly-pear fruit. Confirm.
- [ ] **Crepaleta** ($10.25) — DoorDash description looks auto-generated. Confirm what it is.
- [ ] **Mini Pancakes Dubai** — On the in-store picture menu but not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-01..04.png.
- [ ] **Crepa Dubai** — On the in-store picture menu but not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-01..04.png.
- [ ] **Fresas con Crema Dubai** — On the in-store picture menu but not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-01..04.png.
- [ ] **Crazy Cantarito** — On the in-store picture menu but not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-01..04.png.
- [ ] **Chocomilk en Bolsita** — On the in-store picture menu but not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-01..04.png.
- [ ] **Gansito Frappé** — On the in-store picture menu but not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-01..04.png.
- [ ] **Loca Blender** — On the in-store picture menu but not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-01..04.png.
- [ ] **Fresa Flan** — On the in-store picture menu but not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-01..04.png.
- [ ] **Duvalín Shake** — Newest page (page 5) of the in-store picture menu; not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-05.png.
- [ ] **Fluffy French Toast** — Newest page (page 5) of the in-store picture menu; not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-05.png.
- [ ] **Fluffy French Toast con Helado** — Newest page (page 5) of the in-store picture menu; not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-05.png.
- [ ] **Spiderman Shake** — Newest page (page 5) of the in-store picture menu; not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-05.png.
- [ ] **Celsius Preparado** — Newest page (page 5) of the in-store picture menu; not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-05.png.
- [ ] **Biscoff Mini Pancakes** — Newest page (page 5) of the in-store picture menu; not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-05.png.
- [ ] **Oreo Stuffed Mini Pancakes** — Newest page (page 5) of the in-store picture menu; not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-05.png.
- [ ] **Fruity Pebbles Stuffed Mini Pancakes** — Newest page (page 5) of the in-store picture menu; not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-05.png.
- [ ] **Chips Ahoy Stuffed Mini Pancakes** — Newest page (page 5) of the in-store picture menu; not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-05.png.
- [ ] **RedBull Dragonfruit** — Newest page (page 5) of the in-store picture menu; not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-05.png.
- [ ] **Dubai Split** — Newest page (page 5) of the in-store picture menu; not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-05.png.
- [ ] **Duvalín Ice Coffee** — Newest page (page 5) of the in-store picture menu; not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-05.png.
- [ ] **Flamin Hot Quesadilla** — Newest page (page 5) of the in-store picture menu; not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-05.png.
- [ ] **Piña con Kool-Aid** — Newest page (page 5) of the in-store picture menu; not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-05.png.
- [ ] **Fresas con Crema con Cheesecake** — Newest page (page 5) of the in-store picture menu; not on DoorDash. Confirm price and description. Photo: crop from reference/picture-menu-05.png.

## 5. Ordering links (single config: `order-config.js` in each build, source `src/shared/config.mjs`)
Click-tested from a headless browser in this workspace (no sign-in). The built-in browser was not available.

| Link | Result | Notes |
|---|---|---|
| https://order.online/business/la-zacatecana-ice-cream-shop--mex-sna… | ✅ 200 |  |
| https://www.google.com/maps/dir/?api=1&destination=La%20Zacatecana%… | ✅ 200 |  |
| https://maps.apple.com/?daddr=6790%20GA-92%20Ste%20104%2C%20Acworth… | ✅ 200 |  |
| https://order.online/store/-32823997/?pickup=true | ⚠️ 403 | Cloudflare bot check in headless — verify by tapping it on your phone |
| https://www.doordash.com/store/la-zacatecana-ice-cream-shop-%26-mex… | ⚠️ 403 | Cloudflare bot check in headless — verify by tapping it on your phone |
| https://www.grubhub.com/restaurant/la-zacatecana-ice-cream--mex-sna… | ✅ 200 |  |
| https://www.instagram.com/lazacatecanaicecream_mexsnacks/ | ⚠️ 429 | Redirects to login when logged out (normal) |
| https://www.tiktok.com/@lazacatecanaicecreamshop | ✅ 200 |  |
| https://www.facebook.com/61562251262409/ | ✅ 200 | Redirects to login when logged out (normal) |
| https://www.google.com/maps/search/?api=1&query=La%20Zacatecana%20G… | ✅ 200 |  |

- [ ] Per-item deep links on order.online: **unverified**, so every item's button opens the store. If you confirm a pattern, set `itemUrl` in `order-config.js`.

## 6. AI assets
- None. 0 credits spent. Local, free background removal only (see `AI_ASSETS.md`).

## 7. Photos
- [ ] See `PHOTOS_TODO.md` (upscale vs. reshoot list, ordered by visual impact).
