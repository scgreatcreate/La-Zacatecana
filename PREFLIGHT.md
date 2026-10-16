# Preflight — La Zacatecana, three directions

Run on Oct 16, 2026 in the cloud workspace. Every ✅ was produced by actually running the step.

| # | Check | Result | Evidence / fallback |
|---|---|---|---|
| a | Node + npm | ✅ | `node v22.22.0`, `npm 10.9.4` |
| b | gsap + three installed | ✅ | `npm ls` → `gsap@3.15.0`, `three@0.186.1` (also esbuild 0.28.2, sharp 0.35.5, playwright 1.56.1) |
| c | Official GSAP skills | ✅ | `npx skills add https://github.com/greensock/gsap-skills` installed 8 skills into `.agents/skills/` and symlinked them into `.claude/skills/`. Read in full: `.claude/skills/gsap-scrolltrigger/SKILL.md`, `.claude/skills/gsap-plugins/SKILL.md`, `.claude/skills/gsap-performance/SKILL.md` |
| d | Headless browser screenshots | ✅ | Playwright Chromium (headless) → `preflight/test-390.png`, `preflight/test-1440.png`. WebGL2 works through SwiftShader (`EXT_color_buffer_float`, `OES_texture_float_linear` present) |
| e | menu.json loads | ✅ | 118 items, 9 categories, 54 with `photo_url`, 23 with `price_usd = null`, 81 with a description, 57 with a `confirm_with_owner` note |
| f | Product photos downloaded | ✅ 54 / 54 | `scripts/download-photos.mjs` → `assets/menu/raw/`, log in `assets/menu/download-log.json`. **Caveat:** only 8 are true high-res cutouts (1300–2000 px); 33 are ≤ 600 px wide, and several "high-res" files are visibly soft (upscaled at the source). DoorDash serves no larger originals (tried 4 URL variants → HTTP 403). |
| g | Reference images | ✅ 10 | `picture-menu-01…05.png` (≈630×810 each), `interior-counter-yellow-wall.webp` 1252×903, `interior-seating-cactus-art.webp` 1241×886, `logo-circle-gourmet.webp` 321×314, `neon-selfie-wall.webp` 536×919, `storefront-night.webp` 729×876. The 5 images attached in chat are the same shots. |
| h | Connectors + credit balances | ✅ read, nothing spent | **Higgsfield:** 6 credits, free plan → the 30 % cap is 1.8 credits, less than any image/video generation → **skipped**. **Adobe:** signed-in account; its own routing doc says image generation is not available through this connector (only outpainting) and it exposes no balance tool → **skipped**. **ElevenLabs:** connected, no balance-read tool, so the balance cannot be read without starting a generation → **skipped**. **21st:** free tier, 0 AI credits, 2 component retrievals/day. **Refero, Mobbin:** connected (free). Gmail/Calendar/Drive: connected, not used. |
| h2 | Built-in browser (your laptop) | ❌ | Not attached to this cloud session (no `Claude_Browser` tools). Fallbacks: Canva picture menu **not viewed** (used the 5 PNGs in `/reference`); Order links tested with headless HTTP requests here; order.online single-item deep links **unverified**, so every item's Order button opens the store page. |
| i | Free local image test | ✅ | `rembg` (isnet-general-use, ONNX on CPU, free) + `sharp` trim/sharpen on *Fresas con Crema* → `preflight/image-test-fresas-con-crema.webp` (before / after). 0 credits. |
| j | Private preview for your phone | ✅ | The Artifact tool publishes private claude.ai pages (created the design canvas successfully). Each direction will be published as its own private artifact; nothing is public until you share it. |

**Credits spent in preflight: 0.**
