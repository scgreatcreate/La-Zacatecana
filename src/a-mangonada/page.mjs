import { head, header, favorites, antojo, shop, reviews, visit, orderBlock, footer, scripts } from '../shared/sections.mjs';

const FALLBACK_HERO = `<section id="hero" class="hero hero--a is-static" data-hero><div class="hero-stage"><h1>Entras por curiosidad… vuelves por el antojo.</h1></div></section>`;

export default function page({ heroHtml }) {
  return `${head({
    title: 'La Zacatecana | Ice Cream, Fresas con Crema & Mangonadas in Acworth, GA',
    description: 'Ice cream, fresas con crema, mangonadas, esquites and 100+ Mexican snacks in Acworth, GA. Order pickup or delivery online — commission-free. 6790 GA-92, Ste 104.',
    themeColor: '#FFF8EE',
  })}
<body>
<div class="dir dir-a" id="top">
${header({ wordmark: '<img src="brand/wordmark.svg" alt="La Zacatecana — Ice cream &amp; Mex Snacks" width="1260" height="230">' })}
<main id="main">
${heroHtml || FALLBACK_HERO}
${favorites({ flipFirst: true })}
${antojo({})}
${shop({ layout: 'collage' })}
${reviews()}
${visit()}
${orderBlock()}
</main>
${footer({ logo: '<img src="brand/logo-round.svg" alt="La Zacatecana Gourmet logo" width="140" height="140" loading="lazy">' })}
</div>
${scripts()}
</body>
</html>`;
}
