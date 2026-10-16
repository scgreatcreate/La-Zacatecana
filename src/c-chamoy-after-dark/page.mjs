import { head, header, favorites, antojo, shop, reviews, visit, orderBlock, footer, scripts } from '../shared/sections.mjs';

const FALLBACK_HERO = `<section id="hero" class="hero hero--c is-static" data-hero><div class="hero-stage"><h1>Entras por curiosidad… vuelves por el antojo.</h1></div></section>`;

export default function page({ heroHtml }) {
  return `${head({
    title: 'La Zacatecana | Mangonadas, Chamoy & Takis Snacks + Ice Cream in Acworth, GA',
    description: 'Mangonadas, chamoy fruit, Takis and Hot Cheetos esquites, fresas con crema and ice cream — open till 9 PM in Acworth, GA. Order pickup or delivery commission-free. 6790 GA-92, Ste 104.',
    themeColor: '#0E0710',
  })}
<body class="dir dir-c" id="top">
${header({ wordmark: '<img src="brand/wordmark.svg" alt="La Zacatecana — Ice cream &amp; Mex Snacks" width="1260" height="230">' })}
<main id="main">
${heroHtml || FALLBACK_HERO}
${antojo({})}
${favorites()}
${shop({ layout: 'collage' })}
${reviews()}
${visit()}
${orderBlock()}
</main>
${footer({ logo: '<img src="brand/logo-round.svg" alt="La Zacatecana Gourmet logo" width="140" height="140" loading="lazy">' })}
${scripts()}
</body>
</html>`;
}
