// Pure HTML helpers shared by the build (node) and the browser bundle.
import { T, CATEGORY_NAMES, MOOD_NAMES } from './i18n.mjs';
import { MOODS } from './config.mjs';

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
export const money = (p) => (p == null ? null : `$${p.toFixed(2)}`);
export const fold = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// bilingual text: <tag data-i18n-en data-i18n-es>EN</tag>
export function tx(key, tag = 'span', attrs = '', vars = {}) {
  const v = T[key]; if (!v) throw new Error('missing i18n key ' + key);
  const f = (s) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
  return `<${tag}${attrs ? ' ' + attrs : ''} data-i18n-en="${esc(f(v.en))}" data-i18n-es="${esc(f(v.es))}">${esc(f(v.en))}</${tag}>`;
}
export function bi(en, es, tag = 'span', attrs = '') {
  return `<${tag}${attrs ? ' ' + attrs : ''} data-i18n-en="${esc(en)}" data-i18n-es="${esc(es)}">${esc(en)}</${tag}>`;
}
export const catName = (id, lang = 'en') => CATEGORY_NAMES[id]?.[lang] ?? id;

export function moodsOf(item) {
  return MOODS.filter((m) => (m.tags || []).some((t) => item.tags.includes(t)) || (m.categories || []).includes(item.cat)).map((m) => m.id);
}

// Only the sizes a layout needs at 2x: menu cards ≈ 232 px → 360/640; favourites ≈ 300 px → +800;
// an item whose native size is smaller than that ships its native size instead (never upscaled).
export function pickWidths(all, maxW = 640) {
  const want = [360, 640, 800].filter((w) => w <= maxW);
  const ws = all.filter((w) => want.includes(w));
  const native = all[all.length - 1];
  if (native < maxW && !ws.includes(native)) ws.push(native);
  return ws.length ? ws.sort((a, b) => a - b) : [native];
}
export function srcset(item, base = 'assets/menu', maxW = 640) {
  if (!item.photo) return null;
  const ws = pickWidths(item.photo.widths, maxW);
  return {
    src: `${base}/${item.id}-${ws.find((w) => w >= 360) ?? ws[ws.length - 1]}.webp`,
    srcset: ws.map((w) => `${base}/${item.id}-${w}.webp ${w}w`).join(', '),
    max: ws[ws.length - 1],
  };
}

export function altText(item, lang = 'en') {
  const d = lang === 'es' ? item.dEs : item.dEn;
  return d ? `${item.es} — ${d}` : item.es;
}

const ICON = {
  chile: '<path d="M14 4c1 2 3 3 5 3M15 6c-4 1-6 4-7 8-1 3-3 5-5 6 6 1 12-2 14-8 1-3 0-5-2-6Z"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
};
export const icon = (name, cls = 'ic') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICON[name]}</svg>`;

// One picture-menu card. `opts.sizes` lets each direction tune the responsive image size.
export function menuCard(item, opts = {}) {
  const { sizes = '(min-width: 1180px) 232px, (min-width: 720px) 28vw, 46vw', orderHref = '#', base = 'assets/menu', eager = false } = opts;
  const moods = moodsOf(item);
  const search = fold([item.es, item.en, item.dEn, item.dEs, catName(item.cat, 'en'), catName(item.cat, 'es')].filter(Boolean).join(' '));
  const img = srcset(item, base);
  const tint = item.tint ? item.tint.join(' ') : null;
  const price = money(item.price);
  const isNew = item.tags.includes('trending');
  const spicy = item.tags.includes('picante');
  let media;
  if (img) {
    media = `<div class="mcard__media"${tint ? ` style="--tint:${tint}"` : ''}>
      <img src="${img.src}" srcset="${img.srcset}" sizes="${sizes}" width="${img.max}" height="${img.max}" alt="${esc(altText(item, 'en'))}" data-alt-es="${esc(altText(item, 'es'))}" loading="${eager ? 'eager' : 'lazy'}" decoding="async">
    </div>`;
  } else {
    const pm = item.pm ? `<img class="mcard__pm" src="${base}/pm/${item.id}.webp" width="${item.pm.w}" height="${item.pm.h}" alt="${esc(item.es)} (in-store picture menu)" loading="lazy" decoding="async">` : '';
    media = `<div class="mcard__media mcard__media--type" aria-hidden="${pm ? 'false' : 'true'}">
      <span class="mcard__typename" aria-hidden="true">${esc(item.es)}</span>
      ${pm ? `<span class="mcard__pmwrap">${pm}${tx('inStoreOnly', 'span', 'class="mcard__pmlabel"')}</span>` : `${tx('photoSoon', 'span', 'class="mcard__soon"')}`}
    </div>`;
  }
  const desc = item.dEn ? `<p class="mcard__desc" data-i18n-en="${esc(item.dEn)}" data-i18n-es="${esc(item.dEs || item.dEn)}">${esc(item.dEn)}</p>` : '';
  return `<article class="mcard${img ? '' : ' mcard--type'}" id="item-${item.id}" data-id="${item.id}" data-cat="${item.cat}" data-moods="${moods.join(' ')}" data-search="${esc(search)}"${img ? ' data-photo="1"' : ''}>
    ${media}
    <div class="mcard__body">
      ${isNew ? tx('badgeNew', 'span', 'class="mcard__flag mcard__flag--new"') : ''}
      <h4 class="mcard__name" lang="es">${esc(item.es)}</h4>
      ${item.en ? `<p class="mcard__en" lang="en">${esc(item.en)}</p>` : ''}
      ${desc}
      <div class="mcard__foot">
        ${price ? `<span class="mcard__price">${price}</span>` : tx('askInStore', 'span', 'class="mcard__price mcard__price--ask"')}
        ${spicy ? `<span class="mcard__heat" title="Picante">${icon('chile')}<span class="sr-only">Picante</span></span>` : ''}
        <a class="btn btn--sm btn-order" data-order="item" data-item="${item.id}" href="${orderHref}" target="_blank" rel="noopener">${tx('order')}<span class="sr-only"> ${esc(item.es)}</span></a>
      </div>
    </div>
  </article>`;
}

// Chip label stays Spanish (as on the brief); a small helper line translates it in English mode.
export function moodChip(id) {
  const m = MOOD_NAMES[id];
  const subEn = m.sub ? m.sub.en : m.en.toLowerCase();
  const subEs = m.sub ? m.sub.es : '';
  return `<button type="button" class="chip" data-mood="${id}" aria-pressed="false"><span class="chip__es" lang="es">${esc(m.es)}</span>${bi(subEn, subEs, 'span', 'class="chip__sub"')}<span class="chip__count" aria-hidden="true"></span></button>`;
}
