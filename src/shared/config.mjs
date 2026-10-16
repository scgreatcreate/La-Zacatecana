// Verified business facts (researched Oct 16, 2026 — supplied by the client brief). Do not add facts here
// without a source. Anything unverified carries a CONFIRM note and is listed in CHECKLIST.md.

// ── The single ordering config ────────────────────────────────────────────────────────────────────
// Every Order button on every direction reads from this object (build time → static hrefs, and at
// runtime via /order-config.js, which the owner can edit without touching the design).
export const ORDER_CONFIG = {
  provider: 'DoorDash Online Ordering (commission-free storefront)',
  // default target of every "Order" button
  defaultUrl: 'https://order.online/business/la-zacatecana-ice-cream-shop--mex-snacks-13924473',
  pickupUrl: 'https://order.online/store/-32823997/?pickup=true',
  deliveryUrl: 'https://order.online/business/la-zacatecana-ice-cream-shop--mex-snacks-13924473',
  // per-item deep links: not verified to exist on order.online → null = use defaultUrl
  itemUrl: null,
  onlineHours: { en: 'Online ordering 12:30–8:10 PM', es: 'Pedidos en línea 12:30–8:10 PM' },
  fallbacks: [
    { name: 'DoorDash', url: 'https://www.doordash.com/store/la-zacatecana-ice-cream-shop-%26-mex-snacks-acworth-32823997/' },
    { name: 'Grubhub', url: 'https://www.grubhub.com/restaurant/la-zacatecana-ice-cream--mex-snacks-6790-ga-92-acworth/12386728' },
  ],
};

export const BUSINESS = {
  name: 'La Zacatecana Gourmet Ice Cream Shop & Mex Snacks',
  shortName: 'La Zacatecana',
  street: '6790 GA-92, Ste 104',
  city: 'Acworth', region: 'GA', zip: '30102', country: 'US',
  phone: '(943) 265-3149', phoneE164: '+19432653149',
  email: 'info@lazacatecanagourmet.com',
  google: { rating: 4.5, count: 47 },
  services: ['dine-in', 'takeout', 'delivery'],
  // Mon–Fri 12–9 PM; Sat–Sun 11 AM–9 PM (store hours)
  hours: [
    { days: [1, 2, 3, 4, 5], open: '12:00', close: '21:00' },
    { days: [6, 0], open: '11:00', close: '21:00' },
  ],
  timeZone: 'America/New_York',
  socials: {
    instagram: 'https://www.instagram.com/lazacatecanaicecream_mexsnacks/',
    tiktok: 'https://www.tiktok.com/@lazacatecanaicecreamshop',
    facebook: 'https://www.facebook.com/61562251262409/',
  },
  maps: {
    query: 'La Zacatecana Gourmet Ice Cream Shop & Mex Snacks, 6790 GA-92 Ste 104, Acworth, GA 30102',
  },
};

const q = encodeURIComponent(BUSINESS.maps.query);
export const LINKS = {
  directionsGoogle: `https://www.google.com/maps/dir/?api=1&destination=${q}`,
  directionsApple: `https://maps.apple.com/?daddr=${encodeURIComponent('6790 GA-92 Ste 104, Acworth, GA 30102')}`,
  mapsPlace: `https://www.google.com/maps/search/?api=1&query=${q}`,
  mapEmbed: `https://www.google.com/maps?q=${q}&output=embed`,
  // [CONFIRM WITH OWNER] replace with the direct "write a review" link from Google Business Profile
  googleReview: `https://www.google.com/maps/search/?api=1&query=${q}`,
  tel: `tel:${BUSINESS.phoneE164}`,
  mail: `mailto:${BUSINESS.email}`,
};

// Exact Google review excerpts (first name + "Google review"). Never paraphrase.
export const REVIEWS = [
  { name: 'Dan', text: 'The esquite were the best since moving to Georgia.' },
  { name: 'Kay', text: 'FINALLY! A place in this area with authentic treats!' },
  { name: 'Destiny', text: 'These ladies are kind and create the most BONITA snacks!' },
  { name: 'Edwin', text: 'THE DRINKS ARE ABSOLUTELY ON A POINT.' },
  { name: 'Sarah G.', text: 'Came all the way from Gainesville, GA because we saw they had chocomiles.' },
  { name: 'Meli', text: 'I love that they have a menu with pictures.' },
  { name: 'Destiny', text: 'We spent $30 which was beyond fair for the amount of food/drink we received.' },
];

// "Los favoritos" — from the verified DoorDash facts (most-liked + featured items)
export const FAVORITES = [
  { name: 'Mangonada', badge: 'featured' },
  { name: 'Dubai chocolate strawberries', badge: 'mostLiked' },
  { name: 'Fresas con Crema', badge: 'featured' },
  { name: 'Esquite', badge: 'featured' },
  { name: 'Rame-esquite', badge: 'featured' },
  { name: '15 Mini Pancakes', badge: 'featured' }, // DoorDash lists "Mini Pancakes" — [CONFIRM which one]
  { name: 'Gansito-Shake', badge: 'featured' },
];

// "¿Qué se te antoja?" moods → menu.json tags/categories (documented in DECISIONS.md)
export const MOODS = [
  { id: 'dulce', tags: ['dulce'] },
  { id: 'picante', tags: ['picante'] },
  { id: 'salado', tags: ['salado'] },
  { id: 'fruta', tags: ['fruta'], categories: ['fruta_con_chile', 'fresas'] },
  { id: 'cremoso', categories: ['helado_sundaes', 'shakes_frappes', 'fresas'] },
  { id: 'bebidas', tags: ['bebida'], categories: ['bebidas_preparadas', 'shakes_frappes'] },
  { id: 'compartir', tags: ['para_compartir'] },
  { id: 'nuevo', tags: ['trending'] },
];

export const CATEGORY_ORDER = [
  'fresas', 'fruta_con_chile', 'esquites_elotes', 'antojitos_salados', 'crepas_waffles_pancakes',
  'helado_sundaes', 'shakes_frappes', 'raspados', 'bebidas_preparadas',
];
