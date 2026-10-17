// Node-side section builders. Every direction composes its page from these, then themes it with CSS.
import fs from 'node:fs';
import { ITEMS } from './menu-data.mjs';
import { ORDER_CONFIG, BUSINESS, LINKS, REVIEWS, FAVORITES, MOODS, CATEGORY_ORDER } from './config.mjs';
import { T, CATEGORY_NAMES } from './i18n.mjs';
import { esc, tx, bi, menuCard, moodChip, money, srcset, altText, pickWidths } from './render.mjs';
import { ico } from './icons.mjs';

export const byName = (n) => ITEMS.find((i) => i.es === n);
// where the product sits inside its square photo (same framing rules as scripts/process-photos.mjs)
const PHOTO_MANIFEST = JSON.parse(fs.readFileSync(new URL('../../assets/menu/manifest.json', import.meta.url), 'utf8'));
const bboxAttr = (it) => {
  const m = PHOTO_MANIFEST[it.id]; if (!m) return '';
  const [w, h] = m.product, side = m.side, left = Math.round((side - w) / 2), top = Math.max(0, Math.round(side * 0.94 - h));
  const f = (v) => (v / side).toFixed(4);
  return ` data-bbox="${f(left)} ${f(top)} ${f(left + w)} ${f(top + h)}"`;
};
const ORD = ORDER_CONFIG.defaultUrl;
export const orderAttrs = (kind = 'default') => {
  const href = kind === 'pickup' ? ORDER_CONFIG.pickupUrl : kind === 'delivery' ? ORDER_CONFIG.deliveryUrl : ORD;
  return `data-order="${kind}" href="${href}" target="_blank" rel="noopener"`;
};
const confirmTag = (note = 'Confirm with owner') => `<span class="confirm" title="${esc(note)}">[${esc(note).toUpperCase()}]</span>`;

// ───────────────────────── <head> ─────────────────────────
export function head({ title, description, themeColor, ogImage = 'og.jpg', extraHead = '' }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['IceCreamShop', 'Restaurant'],
    name: BUSINESS.name,
    alternateName: BUSINESS.shortName,
    servesCuisine: ['Mexican', 'Ice Cream', 'Desserts', 'Snacks'],
    address: { '@type': 'PostalAddress', streetAddress: BUSINESS.street, addressLocality: BUSINESS.city, addressRegion: BUSINESS.region, postalCode: BUSINESS.zip, addressCountry: BUSINESS.country },
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '12:00', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '11:00', closes: '21:00' },
    ],
    hasMenu: '#menu',
    potentialAction: { '@type': 'OrderAction', target: { '@type': 'EntryPoint', urlTemplate: ORD, actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'] } },
    sameAs: Object.values(BUSINESS.socials),
    // url / image / logo need absolute URLs → add once the domain is live [CONFIRM WITH OWNER]
  };
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="${themeColor}">
<meta property="og:type" content="restaurant">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${ogImage}">
<meta property="og:locale" content="en_US"><meta property="og:locale:alternate" content="es_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="geo.region" content="US-GA"><meta name="geo.placename" content="Acworth">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="logo.png">
<script>(function(){var l='en';try{l=localStorage.getItem('lz-lang')||'';}catch(e){}if(l!=='en'&&l!=='es'){l=/^es\\b/i.test(navigator.language||'')?'es':'en';}document.documentElement.lang=l;document.documentElement.classList.add('js','lang-'+l);})();</script>
<link rel="stylesheet" href="app.css">
<script src="order-config.js"></script>
<script type="application/ld+json">${JSON.stringify(schema)}</script>
${extraHead}
</head>`;
}

// ───────────────────────── header ─────────────────────────
export function header({ wordmark }) {
  return `<a class="skip" href="#menu">${tx('skip')}</a>
<header class="site-header" data-header>
  <div class="site-header__in">
    <a class="brand" href="#top" aria-label="La Zacatecana — home">${wordmark}</a>
    <nav class="site-nav" aria-label="Primary">
      <a href="#menu">${tx('navMenu')}</a>
      <a href="#favoritos">${tx('navFavs')}</a>
      <a href="#tienda">${tx('navShop')}</a>
      <a href="#visita">${tx('navVisit')}</a>
    </nav>
    <div class="site-header__tools">
      <div class="lang" role="group" aria-label="Language / Idioma">
        <button type="button" class="lang__b" data-lang="en" aria-pressed="true">EN</button>
        <button type="button" class="lang__b" data-lang="es" aria-pressed="false">ES</button>
      </div>
      <a class="btn btn--order btn-order" ${orderAttrs()}>${ico('bag')}${tx('order')}</a>
    </div>
  </div>
</header>`;
}

// ───────────────────────── favorites ─────────────────────────
export function favorites({ sizes = '(min-width: 1180px) 300px, (min-width: 720px) 34vw, 72vw', flipFirst = false, eyebrowExtra = '' } = {}) {
  const cards = FAVORITES.map(({ name, badge }, i) => {
    const it = byName(name); if (!it) throw new Error('favorite missing ' + name);
    const img = srcset(it, 'assets/menu', 800);
    const flip = flipFirst && i === 0 ? ` data-flip-target="${it.id}"` : '';
    return `<article class="fav${flip ? '' : ' reveal'}"${flip} data-id="${it.id}" style="--i:${i}${it.tint ? `;--tint:${it.tint.join(' ')}` : ''}">
      <div class="fav__media${flip ? ' flip-slot' : ''}">
        ${img ? `<img src="${img.src}" srcset="${img.srcset}" sizes="${sizes}" width="${img.max}" height="${img.max}" alt="${esc(altText(it))}" data-alt-es="${esc(altText(it, 'es'))}"${bboxAttr(it)} loading="lazy" decoding="async">` : ''}
      </div>
      <div class="fav__body">
        ${badge === 'mostLiked' ? tx('badgeMostLiked', 'span', 'class="fav__badge fav__badge--hot"') : tx('badgeFeatured', 'span', 'class="fav__badge"')}
        <h3 class="fav__name" lang="es">${esc(it.es)}</h3>
        ${it.en ? `<p class="fav__en" lang="en">${esc(it.en)}</p>` : ''}
        ${it.dEn ? `<p class="fav__desc" data-i18n-en="${esc(it.dEn)}" data-i18n-es="${esc(it.dEs)}">${esc(it.dEn)}</p>` : ''}
        <div class="fav__foot"><span class="fav__price">${money(it.price)}</span>
          <a class="btn btn--sm btn-order" data-order="item" data-item="${it.id}" ${orderAttrs().replace('data-order="default" ', '')}>${tx('orderIt')}<span class="sr-only"> ${esc(it.es)}</span></a></div>
      </div>
    </article>`;
  }).join('\n');
  return `<section class="section favs" id="favoritos" aria-labelledby="fav-title">
  <div class="wrap">
    <div class="sec-head">
      ${tx('favEyebrow', 'p', 'class="eyebrow" lang="es"')}${eyebrowExtra}
      ${tx('favTitle', 'h2', 'class="sec-title" id="fav-title"')}
      ${tx('favLede', 'p', 'class="sec-lede"')}
    </div>
    <div class="favs__track" data-favs>
      ${cards}
    </div>
    <div class="favs__nav" aria-hidden="true">
      <button type="button" class="round-btn" data-favs-prev tabindex="-1">${ico('arrowL')}</button>
      <button type="button" class="round-btn" data-favs-next tabindex="-1">${ico('arrow')}</button>
    </div>
  </div>
</section>`;
}

// ───────────────────────── craving finder + picture menu ─────────────────────────
export function antojo({ cardSizes, machineDeco = '', beforeHead = '' } = {}) {
  const photoItems = ITEMS.filter((i) => i.photo);
  const reel = photoItems.map((it) => {
    const img = srcset(it);
    const w = pickWidths(it.photo.widths, 360)[0];
    return `<li class="reel__item" data-id="${it.id}"><img src="assets/menu/${it.id}-${w}.webp" width="${w}" height="${w}" alt="" loading="lazy" decoding="async"></li>`;
  }).join('');
  const groups = CATEGORY_ORDER.map((cat) => {
    const items = ITEMS.filter((i) => i.cat === cat);
    // photos first inside each category, then in-store-only items
    items.sort((a, b) => (b.photo ? 1 : 0) - (a.photo ? 1 : 0));
    return `<section class="mgroup" id="cat-${cat}" data-cat-group="${cat}" aria-labelledby="h-${cat}">
      <header class="mgroup__head"><h3 class="mgroup__title" id="h-${cat}">${bi(CATEGORY_NAMES[cat].es, CATEGORY_NAMES[cat].es, 'span', 'lang="es"')}</h3>${bi(CATEGORY_NAMES[cat].en, '', 'span', 'class="mgroup__en"')}<span class="mgroup__count">${items.length}</span></header>
      <div class="mgrid">${items.map((it) => menuCard(it, { sizes: cardSizes, orderHref: ORD })).join('\n')}</div>
      ${items.length > 6 ? `<button type="button" class="mgroup__more${items.length > 8 ? ' more-t' : ''}${items.length > 10 ? ' more-d' : ''}" data-more aria-expanded="false">${bi(`See all ${items.length}`, `Ver los ${items.length}`)} ${ico('arrow')}</button>` : ''}
    </section>`;
  }).join('\n');
  const tabs = CATEGORY_ORDER.map((cat) => `<a class="tab" href="#cat-${cat}" data-tab="${cat}">${esc(CATEGORY_NAMES[cat].es)}</a>`).join('');
  return `<section class="section antojo" id="antojo" aria-labelledby="antojo-title">
  ${beforeHead}
  <div class="wrap">
    <div class="finder">
      <div class="finder__copy">
        ${tx('finderEyebrow', 'p', 'class="eyebrow"')}
        <h2 class="sec-title" id="antojo-title" lang="es">¿Qué se te antoja?</h2>
        ${tx('finderLede', 'p', 'class="sec-lede"')}
        <div class="chips" role="group" aria-label="Moods">
          ${MOODS.map((m) => moodChip(m.id)).join('')}
        </div>
        <p class="finder__status" aria-live="polite"><span data-result-count>${ITEMS.length} antojos</span> <button type="button" class="linkish" data-clear hidden>${tx('clear')}</button></p>
      </div>
      <div class="machine" data-machine>
        ${machineDeco}
        <div class="machine__window" aria-hidden="true">
          <ul class="reel" data-reel>${reel}</ul>
          <div class="machine__glass"></div>
        </div>
        <div class="machine__result" data-machine-result aria-live="polite" hidden>
          ${tx('surpriseResult', 'p', 'class="machine__kicker"')}
          <p class="machine__name" lang="es" data-machine-name></p>
          <p class="machine__meta"><span data-machine-price></span></p>
          <div class="machine__actions">
            <a class="btn btn-order" data-order="item" data-machine-order ${orderAttrs().replace('data-order="default" ', '')}>${tx('orderIt')}</a>
            <a class="btn btn--ghost" href="#menu" data-machine-see>${bi('See it on the menu', 'Verlo en el menú')}</a>
          </div>
        </div>
        <button type="button" class="machine__lever btn btn--big" data-spin>${ico('dice')}<span data-spin-label>${tx('surprise')}</span></button>
        ${tx('surpriseHint', 'p', 'class="machine__hint"')}
      </div>
    </div>
  </div>
  <div class="menu" id="menu" aria-labelledby="menu-title">
    <div class="wrap">
      <div class="sec-head sec-head--menu">
        ${tx('menuEyebrow', 'p', 'class="eyebrow"')}
        ${tx('menuTitle', 'h2', 'class="sec-title" id="menu-title"')}
        ${tx('menuLede', 'p', 'class="sec-lede"')}
      </div>
    </div>
    <div class="menu__bar" data-menubar>
      <div class="wrap menu__bar-in">
        <label class="search">${ico('search')}<span class="sr-only" data-i18n-en="${T.searchLabel.en}" data-i18n-es="${T.searchLabel.es}">${T.searchLabel.en}</span>
          <input type="search" data-search placeholder="${esc(T.searchPlaceholder.en)}" data-ph-en="${esc(T.searchPlaceholder.en)}" data-ph-es="${esc(T.searchPlaceholder.es)}" autocomplete="off" enterkeyhint="search"></label>
        <nav class="tabs" aria-label="Menu categories" data-tabs>${tabs}</nav>
      </div>
    </div>
    <div class="wrap">
      ${tx('priceNote', 'p', 'class="price-note"')}
      <div class="menu__groups" data-groups>${groups}</div>
      <p class="menu__empty" data-empty hidden>${tx('noResults')}</p>
    </div>
  </div>
</section>`;
}

// ───────────────────────── the shop ─────────────────────────
const SHOP = JSON.parse(fs.readFileSync(new URL('../../assets/shop/manifest.json', import.meta.url), 'utf8'));
export const shopImg = (name, alt, altEs, sizes, cls = '') => {
  const m = SHOP[name]; const ws = m.widths; const def = ws.find((w) => w >= 800) ?? ws[ws.length - 1];
  return `<img${cls ? ` class="${cls}"` : ''} src="assets/shop/${name}-${def}.webp" srcset="${ws.map((w) => `assets/shop/${name}-${w}.webp ${w}w`).join(', ')}" sizes="${sizes}" width="${m.w}" height="${m.h}" alt="${esc(alt)}" data-alt-es="${esc(altEs)}" loading="lazy" decoding="async">`;
};
export function shop({ layout = 'collage' } = {}) {
  return `<section class="section shop" id="tienda" aria-labelledby="shop-title">
  <div class="wrap">
    <div class="sec-head">
      ${tx('shopEyebrow', 'p', 'class="eyebrow" lang="es"')}
      ${tx('shopTitle', 'h2', 'class="sec-title" id="shop-title"')}
      ${tx('shopLede', 'p', 'class="sec-lede"')}
    </div>
    <div class="shop__grid shop__grid--${layout}">
      <figure class="shot shot--counter reveal">${shopImg('counter', 'The pink counter in front of the sunflower-yellow wall with the La Zacatecana logo', 'El mostrador rosa frente a la pared amarilla con el logo de La Zacatecana', '(min-width: 900px) 640px, 100vw')}<figcaption>${tx('capCounter')}</figcaption></figure>
      <figure class="shot shot--storefront reveal">${shopImg('storefront', 'The storefront at night with the glowing pink La Zacatecana sign', 'La fachada de noche con el letrero rosa iluminado de La Zacatecana', '(min-width: 900px) 360px, 70vw')}<figcaption>${tx('capStorefront')}</figcaption></figure>
      <figure class="shot shot--seating reveal">${shopImg('seating', 'Bar tables and stools along the pink wall, with three framed cactus prints', 'Mesas altas junto a la pared rosa, con tres cuadros de cactus', '(min-width: 900px) 520px, 100vw')}<figcaption>${tx('capSeating')}</figcaption></figure>
      <figure class="shot shot--selfie reveal" id="foto">
        ${shopImg('selfie', 'The green grass selfie wall with a neon ice-cream-cone sign', 'La pared de pasto con un letrero de neón de cono de helado', '(min-width: 900px) 360px, 70vw')}
        <figcaption>${tx('selfieTitle', 'strong', 'lang="es"')} ${tx('selfieLede')}</figcaption>
      </figure>
    </div>
  </div>
</section>`;
}

// ───────────────────────── reviews ─────────────────────────
export function reviews() {
  const stars = '<span class="stars" aria-hidden="true">★★★★<span class="stars__half">★</span></span>';
  return `<section class="section reviews" id="resenas" aria-labelledby="rev-title">
  <div class="wrap">
    <div class="sec-head">
      ${tx('reviewsEyebrow', 'p', 'class="eyebrow"')}
      ${tx('reviewsTitle', 'h2', 'class="sec-title" id="rev-title"')}
      <p class="rating">${stars} ${tx('reviewsOn', 'span', '', { r: '4.5', n: '47' })}</p>
    </div>
    <ul class="quotes">
      ${REVIEWS.map((r, i) => `<li class="quote reveal" style="--i:${i}"><blockquote lang="en"><p>“${esc(r.text)}”</p></blockquote><p class="quote__by"><strong>${esc(r.name)}</strong> · ${tx('googleReview')}</p></li>`).join('')}
    </ul>
  </div>
</section>`;
}

// ───────────────────────── visit ─────────────────────────
export function visit() {
  return `<section class="section visit" id="visita" aria-labelledby="visit-title">
  <div class="wrap visit__grid">
    <div class="visit__info">
      ${tx('visitEyebrow', 'p', 'class="eyebrow" lang="es"')}
      ${tx('visitTitle', 'h2', 'class="sec-title" id="visit-title"')}
      <p class="open-status" data-open-status hidden></p>
      <dl class="facts">
        <div class="fact"><dt>${ico('pin')}${tx('address')}</dt><dd><address>${esc(BUSINESS.street)}<br>${esc(BUSINESS.city)}, ${BUSINESS.region} ${BUSINESS.zip}</address></dd></div>
        <div class="fact"><dt>${ico('clock')}${tx('hours')}</dt><dd><table class="hours" data-hours>
          <tr data-days="1,2,3,4,5"><th scope="row">${tx('monFri')}</th><td>12–9 PM</td></tr>
          <tr data-days="6,0"><th scope="row">${tx('satSun')}</th><td>11 AM–9 PM</td></tr>
        </table><p class="facts__sub">${bi(ORDER_CONFIG.onlineHours.en, ORDER_CONFIG.onlineHours.es)}</p></dd></div>
        <div class="fact"><dt>${ico('phone')}${tx('phone')}</dt><dd><a href="${LINKS.tel}">${esc(BUSINESS.phone)}</a></dd></div>
        <div class="fact"><dt>${ico('mail')}${tx('email')}</dt><dd><a href="${LINKS.mail}">${esc(BUSINESS.email)}</a></dd></div>
      </dl>
      <ul class="services" aria-label="Services">
        <li>${tx('dineIn')}</li><li>${tx('takeout')}</li><li>${tx('delivery')}</li>
      </ul>
      <ul class="badges" aria-label="Google attributes">
        <li class="badge">${tx('badgeLatino')} ${confirmTag()}</li>
        <li class="badge">${tx('badgeLgbtq')} ${confirmTag()}</li>
      </ul>
    </div>
    <div class="visit__map">
      <div class="mapcard" data-map>
        <div class="mapcard__art" aria-hidden="true">
          <svg viewBox="0 0 400 300" class="mapcard__svg"><defs><pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0v40" fill="none" stroke="currentColor" stroke-opacity=".12"/></pattern></defs>
            <rect width="400" height="300" fill="url(#mapgrid)"/>
            <path d="M-10 190 C 90 170, 170 200, 260 150 S 380 110, 420 120" fill="none" stroke="currentColor" stroke-opacity=".35" stroke-width="18" stroke-linecap="round"/>
            <path d="M-10 190 C 90 170, 170 200, 260 150 S 380 110, 420 120" fill="none" stroke="var(--map-road, #fff)" stroke-width="2" stroke-dasharray="10 10"/>
            <text x="300" y="104" font-size="15" font-weight="700" fill="currentColor" fill-opacity=".55">GA-92</text>
          </svg>
          <span class="mapcard__pin">${ico('pin')}</span>
        </div>
        <div class="mapcard__body">
          <p class="mapcard__addr"><strong>La Zacatecana</strong><br>${esc(BUSINESS.street)} · ${esc(BUSINESS.city)}, ${BUSINESS.region}</p>
          <div class="mapcard__actions">
            <a class="btn" href="${LINKS.directionsGoogle}" target="_blank" rel="noopener">${ico('map')}${tx('openGoogle')}</a>
            <a class="btn btn--ghost" href="${LINKS.directionsApple}" target="_blank" rel="noopener">${tx('openApple')}</a>
            <button type="button" class="linkish" data-map-load>${tx('showMap')} <small>(${tx('mapNote')})</small></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

// ───────────────────────── order block ─────────────────────────
export function orderBlock() {
  return `<section class="section orderblock" id="pedir" aria-labelledby="order-title">
  <div class="wrap">
    <div class="orderblock__card">
      <div class="orderblock__copy">
        ${tx('orderEyebrow', 'p', 'class="eyebrow"')}
        ${tx('orderTitle', 'h2', 'class="sec-title" id="order-title"')}
        ${tx('orderLede', 'p', 'class="sec-lede"')}
        <p class="orderblock__hours">${ico('clock')}${bi(ORDER_CONFIG.onlineHours.en, ORDER_CONFIG.onlineHours.es)}</p>
      </div>
      <div class="orderblock__ctas">
        <a class="bigcta btn-order" ${orderAttrs('pickup')}>${ico('bag')}<span class="bigcta__t">${tx('orderPickup')}</span>${tx('pickupSub', 'span', 'class="bigcta__s"')}<span class="bigcta__arrow">${ico('arrow')}</span></a>
        <a class="bigcta bigcta--alt btn-order" ${orderAttrs('delivery')}>${ico('scooter')}<span class="bigcta__t">${tx('orderDelivery')}</span>${tx('deliverySub', 'span', 'class="bigcta__s"')}<span class="bigcta__arrow">${ico('arrow')}</span></a>
        <p class="alsoon">${tx('alsoOn')}: ${ORDER_CONFIG.fallbacks.map((f, i) => `<a href="${f.url}" target="_blank" rel="noopener" data-fallback="${i}">${esc(f.name)}</a>`).join(' · ')}</p>
      </div>
    </div>
  </div>
</section>`;
}

// ───────────────────────── footer + mobile bar ─────────────────────────
export function footer({ logo }) {
  return `<footer class="site-footer" id="contacto">
  <div class="wrap site-footer__grid">
    <div class="site-footer__brand">${logo}
      <p class="site-footer__tag" lang="es">Entras por curiosidad… vuelves por el antojo.</p>
    </div>
    <div>
      ${tx('footerFollow', 'p', 'class="site-footer__h"')}
      <ul class="socials">
        <li><a href="${BUSINESS.socials.instagram}" target="_blank" rel="noopener">${ico('instagram')}Instagram</a></li>
        <li><a href="${BUSINESS.socials.tiktok}" target="_blank" rel="noopener">${ico('tiktok')}TikTok</a></li>
        <li><a href="${BUSINESS.socials.facebook}" target="_blank" rel="noopener">${ico('facebook')}Facebook</a></li>
      </ul>
      <a class="btn btn--ghost btn--sm" href="${LINKS.googleReview}" target="_blank" rel="noopener">${ico('star')}${tx('footerReview')}</a>
    </div>
    <div>
      <p class="site-footer__h">La Zacatecana</p>
      <p>${esc(BUSINESS.street)}<br>${esc(BUSINESS.city)}, ${BUSINESS.region} ${BUSINESS.zip}</p>
      <p><a href="${LINKS.tel}">${esc(BUSINESS.phone)}</a><br><a href="${LINKS.mail}">${esc(BUSINESS.email)}</a></p>
      <p>${tx('monFri')} 12–9 PM · ${tx('satSun')} 11 AM–9 PM</p>
    </div>
  </div>
  <div class="wrap site-footer__fine">
    ${tx('footerPrices', 'p')}
    <p>© La Zacatecana Gourmet Ice Cream Shop &amp; Mex Snacks · Acworth, GA</p>
  </div>
</footer>
<nav class="mobile-bar" aria-label="Quick actions">
  <a class="mobile-bar__order btn-order" ${orderAttrs()}>${ico('bag')}${tx('order')}</a>
  <a href="#menu">${ico('menu')}${tx('navMenu')}</a>
  <a href="${LINKS.tel}">${ico('phone')}${tx('call')}</a>
  <a href="${LINKS.directionsGoogle}" target="_blank" rel="noopener">${ico('pin')}${tx('directions')}</a>
</nav>`;
}

export function scripts() {
  return `<script src="app.js" defer></script>`;
}
