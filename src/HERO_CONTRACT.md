# Hero contract (all three directions)

This file is the single agreement between the site shell (built by the lead) and the three
hero builds. Read it fully before writing code.

## Business context (do not invent facts)
- La Zacatecana Gourmet Ice Cream Shop & Mex Snacks, 6790 GA-92, Ste 104, Acworth, GA 30102.
- Sells far more than ice cream: fresas con crema, crepes/waffles, Mexican snack plates (esquites,
  elotes, Takis/Tostilocos-style antojitos), fruit with chamoy and Tajín, raspados, shakes, loaded drinks.
- 100+ items. Tagline (theirs, TikTok bio): **"Entras por curiosidad… vuelves por el antojo."**
  English line beneath it: **"Come in curious. Come back craving."**
- Never invent prices, items, awards, years, owner names, origin story. Never depict people.

## Files you own (per direction id = a | b | c)
```
src/<dir>/hero/hero.html   # partial: ONE <section id="hero" class="hero hero--<id>" data-hero> … </section>
src/<dir>/hero/hero.css    # every selector scoped under .hero--<id> (or the fixed overlay class you create)
src/<dir>/hero/hero.js     # entry; bundled by esbuild as a classic IIFE (format:'iife') → directions/<dir>/hero.js
src/<dir>/hero/*.js|glsl   # any helpers (import them from hero.js; glsl as strings in .js files)
src/<dir>/hero/dev.html    # dev harness (see below), NOT shipped
```
`<dir>` is `a-mangonada`, `b-papel-picado`, `c-chamoy-after-dark`. Do not edit anything outside your
`src/<dir>/hero/` folder except adding images you generate into `src/<dir>/hero/assets/`.
Shared, read-only inputs: `assets/brand/*` (logo, wordmark, Zacatecas outline – the lead adds these
while you work; use a temporary placeholder until they exist), `assets/menu/hero/*` (processed product
cutouts), `reference/*`.

## Libraries
- `three` (0.186) and `gsap` (3.15, with `gsap/ScrollTrigger`) from node_modules. No CDNs, no network
  at runtime. Three addons via `three/examples/jsm/...` (e.g. RoomEnvironment) are fine.
- Fonts: only local `@fontsource/*` packages already installed (see the direction's token block). If your
  canvas needs a font, wait for `document.fonts.load(...)`.
- Build your dev bundle with esbuild, e.g.
  `npx esbuild src/<dir>/hero/hero.js --bundle --format=iife --minify --outfile=src/<dir>/hero/.dev/hero.js`
  (`.dev/` is gitignored).

## Page shell you live inside (the lead builds it; mimic it in dev.html)
- `<header class="site-header">` fixed at top, height 64px (56px < 720px wide), z-index 100.
  It contains the wordmark (left), language toggle and **an always-visible "Order" pill** (right).
- Phones (< 720px): `<nav class="mobile-bar">` fixed at bottom, height 64px + env(safe-area-inset-bottom),
  z-index 100, with Order / Menu / Call / Directions. Keep important hero content out of the top 56px
  and bottom 72px on phones.
- Your hero must never cover these (keep your layers at z-index ≤ 60, including fixed overlays).
- Order links: use `<a class="btn-order" data-order="default" href="https://order.online/business/la-zacatecana-ice-cream-shop--mex-snacks-13924473">`.
  The shell retargets every `[data-order]` from one config object; the static href must already be the
  commission-free page so it works without JS. `data-order="pickup"` / `"delivery"` also exist.
- `<html lang>` flips between `en`/`es` (EN/ES toggle). Mark your bilingual text with
  `data-i18n-en="…" data-i18n-es="…"` attributes on the element; the shell swaps `textContent`.
  Static markup ships in English. The tagline stays Spanish in both languages (with the English line under it).
- The section after the hero:
  - A: `#favoritos` whose first card is `<article data-flip-target="mangonada">` containing
    `<div class="flip-slot">` (the photo box the cup lands in; it holds the real Mangonada photo `<img>`).
  - B: `#antojo` (craving finder + picture menu) whose top edge is the pink counter (`--counter` color).
  - C: `#antojo`; your split-screen sides link to `#antojo?mood=dulce` / `#antojo?mood=picante`
    (use `href="#antojo" data-mood="dulce"`; the shell reads `data-mood` on click and filters).

## Non-negotiables
1. **Static first frame paints immediately.** hero.html + hero.css alone (no JS) must render a designed,
   on-brand composition that already says: what they sell, "Acworth, GA", the tagline + English line,
   and an Order button. WebGL/three/fluid starts after first paint (the shell injects hero.js after `load`
   + one rAF; your code must also tolerate being executed immediately).
2. **Readable in 3 seconds**: what they sell, Acworth, order.
3. **Scroll-driven and exactly reversible.** Progress `p ∈ [0,1]` derives from scroll position only
   (pure function of scroll; scrolling up rewinds exactly). Time-based ambient motion (idle sway, slow
   turn, idle swirl) is fine on top, but every choreographed state must be a pure function of `p`.
   Use `ScrollTrigger.create({ trigger: track, start:'top top', end:'bottom bottom', scrub: true or small number, onUpdate })`
   or a timeline with scrub. Stateful sims (fluid) must map draining/refilling to `p` deterministically
   (e.g. a scroll-driven mask/level, not accumulated state).
4. **Pin with CSS, not with ScrollTrigger pin** (no layout shift, no iOS jank):
   ```
   .hero--x { position: relative; height: calc(100svh + 150svh); }   /* desktop: 150vh of pinned scroll */
   @media (max-width: 719px) { .hero--x { height: calc(100svh + 120svh); } } /* phones: 120vh */
   .hero--x .hero-stage { position: sticky; top: 0; height: 100svh; overflow: hidden; }
   ```
   (Direction A may add a short un-pinned tail for the landing, see its spec.)
5. **iOS Safari address bar**: size the canvas to the stage using `100lvh` (or the larger of the two) so the
   bar collapsing never reveals a gap; don't re-allocate GL buffers on height-only changes < 160px;
   `ScrollTrigger.config({ ignoreMobileResize: true })`; use `svh` units for the track so its length is stable.
6. **Performance**: `renderer.setPixelRatio(Math.min(devicePixelRatio, 2))` (A/B may use 1.5 on phones if
   needed for 60fps); IntersectionObserver on the hero → stop the rAF loop when off-screen; pause on
   `visibilitychange`. Budgets for a mid-range phone: ≤ ~40 draw calls, ≤ ~150k triangles, one
   transmission pass max, fluid sim ≤ 128² velocity / ≤ 512² dye on phones. Headless SwiftShader fps is
   NOT representative; judge by budget + JS frame time.
7. **Fallbacks**: if WebGL is unavailable or `prefers-reduced-motion: reduce`, the static first frame stays
   (designed, complete), the track collapses to `height: 100svh` (no pinned scroll), and no rAF runs.
   Add `class="is-static"` to the section in that case. Also fall back on WebGL context loss.
8. **Pointer**: pointer tilts / stirs. On touch: no motion-sensor permission requests ever.
9. **Accessibility**: real text in the DOM for every message (canvas text gets a DOM twin or aria-label);
   decorative canvases `aria-hidden="true"`; buttons are `<a>`/`<button>`; text contrast ≥ 4.5:1
   (≥ 3:1 at ≥ 24px bold). Pink-on-pink, yellow-on-white and neon-on-dark are traps — check them.
10. No people, no generated food imagery. Use the real product cutouts in `assets/menu/hero/` if you need
    a photo. Keep bundle lean (tree-shake three; import only what you use).

## Dev harness (dev.html)
Include: a copy of the fixed header with an Order pill, the mobile bar under 720px, your hero partial,
and a fake next section (A: a `#favoritos` row with a `data-flip-target="mangonada"` card ~ 260×320 px
with `.flip-slot` 260×260). Load your hero.css and `.dev/hero.js` relatively. Serve with
`npx http-server -p <port> -s .` from the repo root or open via file://.

## Self-check before you report back
- Playwright (`playwright` is installed in node_modules; launch chromium with
  `args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']`).
- Screenshots at 390×844 (deviceScaleFactor 2) and 1440×900 at hero progress 0, 25, 50, 75, 100 %,
  scrolling DOWN, then again scrolling UP to the same positions — the up/down pairs must match.
  Save to `src/<dir>/hero/.shots/` (gitignored) and look at them yourself. Also screenshot with
  `reducedMotion: 'reduce'` and with WebGL disabled (`--disable-webgl` / `--disable-3d-apis`).
- Report: what you built, file list, any deviation from spec and why, known weaknesses, bundle size (kB gz).
