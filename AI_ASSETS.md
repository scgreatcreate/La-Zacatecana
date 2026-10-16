# AI assets and credits log

## Credits spent: 0 (zero) on every connector

| Connector | Balance read (without spending) | Used? | Why |
|---|---|---|---|
| Higgsfield | 6 credits, free plan | No | The 30 % cap is 1.8 credits, which is below the cost of any image or video generation. |
| Adobe (Firefly / Express) | Signed-in account; no balance tool | No | The connector's own docs say image generation isn't available here (only outpainting). |
| ElevenLabs | Balance can't be read without starting a generation | No | Hero sections need no audio, and the image tools would need credits I couldn't quote first. |
| 21st | Free tier: 0 AI credits, 2 component retrievals per day | No retrievals | All heroes are original implementations (see each `src/*/hero/`). |

**There are no AI-generated images, videos or audio files in this repo.** Every hero is rendered in real time in code (Three.js / WebGL shaders), and every food photo is the owner's own DoorDash product photo.

## AI-assisted processing (free, local, no credits)

These are local machine-learning models that only *cut out* or *measure* the owner's real photos. They generate no new content.

| Tool | Model | What it did | Files |
|---|---|---|---|
| `rembg` 2.x (ONNX on CPU) | `birefnet-general-lite` (MIT) | Background removal on 46 product photos, 3 retries and 60 picture-menu crops | `assets/menu/cutout/*.png`, `assets/menu/pm/*.webp` |
| `rembg` | `isnet-general-use` | Background removal for *Elote* (BiRefNet kept a stray sign corner) | `assets/menu/cutout/elote.png` |
| Manual polygon erase (`scripts/erase-regions.mjs`) | — | Removed a gloved hand from *Waffle de Burbuja* (no people on the site) | `assets/menu/cutout/waffle-de-burbuja.png`, `assets/menu/hero/waffle-de-burbuja.webp` |
| `sharp` (libvips) | — | Trim, square framing on a shared baseline, +5 % saturation, Lanczos down-sizing (never upscaling), light sharpening only when shrinking ≥ 1.5×, WebP export | `assets/menu/web/*`, `assets/shop/*` |

Hand-built vectors (not AI): `assets/brand/logo-round.svg`, `wordmark.svg`, `sundae.svg` were drawn in code from the low-res logo photo. `zacatecas.svg` comes from Natural Earth admin-1 data (public domain). **The owner should supply the original logo files.**
