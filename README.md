# La Zacatecana — three website directions (sales demo)

Gourmet Ice Cream Shop & Mex Snacks · 6790 GA-92, Ste 104, Acworth, GA 30102

| Direction | Hero technique | Private preview (open on your phone) | Offline build |
|---|---|---|---|
| A · La Mangonada, Desarmada | Real-time 3D Mangonada that comes apart, rebuilds and lands in its menu card | https://claude.ai/artifact/BTFSh6dA99Fhw1Z1z4j8HE | `directions/a-mangonada/index.html` |
| B · Papel Picado | Papel picado over pink cantera, curtain lift, push-through to the yellow logo wall | https://claude.ai/artifact/8vrcKnVKhaEuTKmS9AXifo | `directions/b-papel-picado/index.html` |
| C · Chamoy After Dark | Neon wordmark + live chamoy fluid that drains into a draggable "¿Dulce o picante?" split | https://claude.ai/artifact/GNcETmyivf5gJaMwqiQhW6 | `directions/c-chamoy-after-dark/index.html` |

Pitch board comparing all three: https://claude.ai/artifact/XWqLmMuF9efGFBXTS2Q9xG

The previews are private to your claude.ai account until you share them from each page's Share menu.

## Open offline
**Double-click `START-HERE.html`** in the repo folder. It shows all three directions side by side with an "Open" button for each.

Every `directions/<name>/` folder is self-contained (fonts, images and scripts bundled, no CDN), so each `index.html` also opens on its own straight from disk. Use Chrome or Edge. The only things that need internet are the Order/social links and the optional "Show the map" button.

To test on a phone from your Windows PC on the same Wi-Fi: open Command Prompt in the repo folder and run `npx serve directions`. Then on the phone open `http://<your-PC-IP>:3000/a-mangonada/` (find the IP with `ipconfig`).

## Retarget every Order button
Edit `directions/<name>/order-config.js` (or `src/shared/config.mjs` and rebuild). Every Order button reads from that one object (provider, default, pickup and delivery URLs, optional per-item URL, "Also on" links).

## Rebuild
```
npm install
npm run build            # all three → directions/
node scripts/build.mjs b-papel-picado   # one direction
npm run photos           # after replacing photos in assets/menu/raw/ (then npm run build)
```

## Read next
- `CHECKLIST.md`: everything to confirm with the owners.
- `PHOTOS_TODO.md`: which photos to upscale and which to reshoot.
- `DECISIONS.md`: every call I made on my own.
- `AI_ASSETS.md`: AI use (0 credits; local cutouts only).
- `PREFLIGHT.md`: environment checks.

## Layout
- `src/shared/`: data (generated from `reference/menu.json`), copy (EN/ES), sections, interactions, base CSS.
- `src/<direction>/`: theme, page and `hero/` (WebGL hero, static first frame, posters).
- `scripts/`: photo pipeline, build, screenshots, link and contrast checks.
