import { head, header, favorites, antojo, shop, reviews, visit, orderBlock, footer, scripts } from '../shared/sections.mjs';

const FALLBACK_HERO = `<section id="hero" class="hero hero--b is-static" data-hero><div class="hero-stage"><h1>Entras por curiosidad… vuelves por el antojo.</h1></div></section>`;

// insert decoration right after a section's opening tag
const deco = (html, d) => html.replace(/(<section[^>]*>)/, `$1${d}`);

// a little string of papel picado for section edges (decorative)
const banderitas = `<div class="banderitas" aria-hidden="true"></div>`;

export default function page({ heroHtml }) {
  return `${head({
    title: 'La Zacatecana | Mexican Snacks, Esquites & Ice Cream in Acworth, GA',
    description: 'Esquites, elotes, fresas con crema, mangonadas, raspados and 100+ antojos in Acworth, GA. Mexican snacks and ice cream — order pickup or delivery commission-free. 6790 GA-92, Ste 104.',
    themeColor: '#F7C815',
  })}
<body>
<div class="dir dir-b" id="top">
${header({ wordmark: '<img src="brand/wordmark.svg" alt="La Zacatecana — Ice cream &amp; Mex Snacks" width="1260" height="230">' })}
<main id="main">
${heroHtml || FALLBACK_HERO}
${antojo({})}
${deco(favorites(), banderitas)}
${shop({ layout: 'collage' })}
${deco(reviews(), banderitas)}
${visit()}
${orderBlock()}
</main>
${footer({ logo: '<img src="brand/logo-round.svg" alt="La Zacatecana Gourmet logo" width="140" height="140" loading="lazy">' })}
</div>
${scripts()}
</body>
</html>`;
}
