/* One place to retarget every Order button on this site.
   provider: who handles ordering · defaultUrl: every "Order" button · pickupUrl / deliveryUrl: the two big buttons
   itemUrl: optional function (itemId) => url for per-item deep links (not verified on order.online yet → null)
   fallbacks: the small "Also on" links */
window.LZ_ORDER_CONFIG = {
  "provider": "DoorDash Online Ordering (commission-free storefront)",
  "defaultUrl": "https://order.online/business/la-zacatecana-ice-cream-shop--mex-snacks-13924473",
  "pickupUrl": "https://order.online/store/-32823997/?pickup=true",
  "deliveryUrl": "https://order.online/business/la-zacatecana-ice-cream-shop--mex-snacks-13924473",
  "itemUrl": null,
  "onlineHours": {
    "en": "Online ordering 12:30–8:10 PM",
    "es": "Pedidos en línea 12:30–8:10 PM"
  },
  "fallbacks": [
    {
      "name": "DoorDash",
      "url": "https://www.doordash.com/store/la-zacatecana-ice-cream-shop-%26-mex-snacks-acworth-32823997/"
    },
    {
      "name": "Grubhub",
      "url": "https://www.grubhub.com/restaurant/la-zacatecana-ice-cream--mex-snacks-6790-ga-92-acworth/12386728"
    }
  ]
};
