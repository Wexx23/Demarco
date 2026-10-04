export type MenuItem = {
  name: string;
  desc?: string;
  unit?: string;
  price?: number;
  priceSmall?: number;
  priceLarge?: number;
};

export type MenuSection = {
  id: string;
  title: string;
  note?: string;
  dual?: boolean;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "rostilj",
    title: "SPECIJALITETI SA ROŠTILJA",
    items: [
      { name: "Pljeskavica", unit: "125 g", price: 220 },
      { name: "Pljeskavica", unit: "160 g", price: 280 },
      { name: "Pljeskavica", unit: "240 g", price: 350 },
      { name: "Pljeskavica", unit: "300 g", price: 410 },
      { name: "Gurmanska pljeskavica", unit: "240 g", price: 380 },
      { name: "Gurmanska pljeskavica", unit: "340 g", price: 480 },
      { name: "Punjena pljeskavica", unit: "240 g", price: 400 },
      { name: "Punjena pljeskavica DeMarco", unit: "340 g", price: 500 },
      {
        name: "Punjena pljeskavica sa spržom i kačkavaljem",
        unit: "250 g",
        price: 400,
      },
      {
        name: "Punjena pljeskavica sa spržom i kačkavaljem",
        unit: "350 g",
        price: 500,
      },
      { name: "Ćevapi", unit: "10 kom. · 300 g", price: 500 },
      { name: "Punjeni ćevap DeMarco", unit: "350 g", price: 470 },
      { name: "Uštipci", unit: "10 kom.", price: 500 },
      { name: "Domaća kobasica", unit: "700 g", price: 800 },
      { name: "Svinjski ražnjić", unit: "240 g", price: 340 },
      { name: "Bela vešalica", unit: "250 g", price: 340 },
      { name: "Punjena bela vešalica", unit: "380 g", price: 520 },
      { name: "Pileći batak", unit: "300 g", price: 380 },
      { name: "Punjeni pileći batak", unit: "380 g", price: 520 },
      { name: "Pileće belo", unit: "250 g", price: 380 },
      { name: "Punjeno pileće belo", unit: "380 g", price: 520 },
      { name: "Pileći ražnjić u slanini", unit: "300 g", price: 400 },
      { name: "Pileće belo sa kačkavaljem", unit: "300 g", price: 470 },
      { name: "Svinjska rebra", unit: "300 g", price: 400 },
      { name: "Svež vrat", unit: "300 g", price: 400 },
      { name: "Mešano meso", unit: "380 g", price: 520 },
      {
        name: "Mešano meso",
        desc: "pileći ražnjić, vešalica, uštipci, kobasica",
        unit: "1,5 kg",
        price: 1900,
      },
      {
        name: "Mešano meso",
        desc: "pileći ražnjić, batak, vešalica, kobasica, ćevap",
        unit: "2 kg",
        price: 2400,
      },
      {
        name: "Mešano meso",
        desc: "pileći ražnjić, batak, vešalica, uštipci, kobasica, ćevap",
        unit: "2,5 kg",
        price: 2900,
      },
      {
        name: "Mešano meso",
        desc: "pileći ražnjić, batak, vešalica, uštipci, kobasica, ćevap",
        unit: "3,7 kg",
        price: 3900,
      },
    ],
  },
  {
    id: "po-kg",
    title: "ROŠTILJ PO KG.",
    note: "Idealno za proslave, slave i ketering.",
    items: [
      { name: "Pečeno roštilj meso - pljeskavice", unit: "1 kg", price: 1000 },
      { name: "Ćevapi", unit: "1 kg", price: 1100 },
      { name: "Gurmanski ćevapi", unit: "1 kg", price: 1200 },
      { name: "Gurmansko roštilj meso", unit: "1 kg", price: 1150 },
      { name: "Uštipci", unit: "1 kg", price: 1200 },
      { name: "Pileći bataci", unit: "1 kg", price: 1000 },
      { name: "Pileće belo", unit: "1 kg", price: 1100 },
      { name: "Svinjski ražnjić", unit: "1 kg", price: 1100 },
      { name: "Domaća kobasica", unit: "1 kg", price: 1200 },
      { name: "Pileći ražnjić u slanini", unit: "1 kg", price: 1400 },
      { name: "Bela vešalica", unit: "1 kg", price: 1450 },
      { name: "Dimljena vešalica", unit: "1 kg", price: 1500 },
      { name: "Dimljeni vrat", unit: "1 kg", price: 1500 },
      { name: "Pohovano pileće belo", unit: "1 kg", price: 1500 },
      { name: "Pohovano pileće belo sa susamom", unit: "1 kg", price: 1400 },
      { name: "Mešano meso", unit: "1 kg", price: 1500 },
      { name: "Pileći prstići", unit: "1 kg", price: 1600 },
    ],
  },
  {
    id: "narudzbina",
    title: "JELA PO NARUDŽBINI",
    items: [
      { name: "Piletina na bečki način", unit: "300 g", price: 420 },
      { name: "Piletina sa susamom", unit: "300 g", price: 440 },
      { name: "Piletina na francuski način", unit: "300 g", price: 420 },
      { name: "Bečka šnicla", unit: "300 g", price: 430 },
      { name: "Karađorđeva šnicla", unit: "350 g", price: 500 },
      { name: "Pileći prstići", unit: "300 g", price: 450 },
    ],
  },
  {
    id: "pizza",
    title: "PIZZA",
    dual: true,
    items: [
      {
        name: "Rimljanka",
        desc: "šunka, kačkavalj, šampinjoni, kečap",
        priceSmall: 380,
        priceLarge: 480,
      },
      {
        name: "Margarita",
        desc: "šunka, kačkavalj, sir, kečap",
        priceSmall: 380,
        priceLarge: 480,
      },
      {
        name: "Monte Carlo",
        desc: "šunka, kačkavalj, kulen, papričice, kečap",
        priceSmall: 400,
        priceLarge: 500,
      },
      {
        name: "Capprioza",
        desc: "šunka, kačkavalj, slanina, jaja, paradajz, kečap",
        priceSmall: 420,
        priceLarge: 520,
      },
      {
        name: "Rustikana",
        desc: "šunka, kačkavalj, m. meso, šampinjoni, masline, paradajz, kečap",
        priceSmall: 420,
        priceLarge: 520,
      },
      {
        name: "Vegetarijana",
        desc: "kačkavalj, pečurke, masline, paprika, jaje, kečap",
        priceSmall: 380,
        priceLarge: 480,
      },
      {
        name: "Pizza DeMarco",
        desc: "šunka, kačkavalj, šampinjoni, suvi vrat, kulen, pavlaka, masline, kečap",
        priceSmall: 460,
        priceLarge: 560,
      },
      {
        name: "Belisima",
        desc: "pečenica, dimljeni kačkavalj, mozarela, masline, kečap",
        priceSmall: 460,
        priceLarge: 560,
      },
      {
        name: "Porodična",
        desc: "šunka, kačkavalj, šampinjoni, suvi vrat, pavlaka, masline, topljeni sir, kečap",
        price: 1600,
      },
      {
        name: "Porodična Pizza DeMarco",
        desc: "šunka, kačkavalj, šampinjoni, suvi vrat, kulen, masline, kečap",
        price: 1700,
      },
    ],
  },
  {
    id: "sendvici",
    title: "SENDVIČI - TOSTEVI",
    items: [
      {
        name: "Sendvič DeMarco",
        desc: "kulen, suvi vrat, kačkavalj, šampinjoni",
        price: 320,
      },
      { name: "Pizza sendvič", price: 270 },
      {
        name: "Club sendvič",
        desc: "šunka, kačkavalj, pavlaka, paradajz, zelena salata, pomfrit",
        price: 300,
      },
      { name: "Sendvič sa pohovanom piletinom", price: 320 },
      { name: "Sendvič pohovana piletina sa susamom", price: 340 },
      { name: "Sendvič sa pršutom i topljenim sirom", price: 380 },
      { name: "Sa šunkom", price: 220 },
      { name: "Sa šunkom i kačkavaljem", price: 240 },
      { name: "Sa suvim vratom", price: 250 },
      { name: "Sa suvim vratom i kačkavaljem", price: 270 },
      { name: "Sa pečenicom", price: 250 },
      { name: "Sa pečenicom i kačkavaljem", price: 270 },
      { name: "Sa kulenom", price: 250 },
      { name: "Sa kulenom i kačkavaljem", price: 270 },
      { name: "Sa čajnom", price: 220 },
      { name: "Sa čajnom i kačkavaljem", price: 240 },
      { name: "Sa spržom", price: 270 },
      { name: "Sa spržom i kačkavaljem", price: 300 },
      { name: "Sa euro kremom", price: 170 },
    ],
  },
  {
    id: "salate",
    title: "SALATE I TOPLA PREDJELA",
    items: [
      { name: "Porcija salate", price: 300 },
      { name: "Pomfrit manji", unit: "200 g", price: 200 },
      { name: "Pomfrit veći", unit: "300 g", price: 250 },
      { name: "Pomfrit sa sirom", price: 300 },
      { name: "Šampinjoni na žaru", price: 380 },
      { name: "Pohovani kačkavalj", price: 450 },
    ],
  },
  {
    id: "peciva",
    title: "PECIVA",
    items: [
      { name: "Lepinja", unit: "1 kom.", price: 40 },
      { name: "Moča", unit: "1 kom.", price: 50 },
    ],
  },
  {
    id: "pice",
    title: "SOKOVI I PIVA",
    items: [
      { name: "Coca-cola", unit: "2 lit", price: 230 },
      { name: "Fanta", unit: "2 lit", price: 230 },
      { name: "Zaječarsko", unit: "0,5 lit", price: 170 },
      { name: "Laško", unit: "0,5 lit", price: 190 },
      { name: "Heineken", unit: "0,5 lit", price: 190 },
      { name: "Heba", unit: "0,5 lit", price: 120 },
      { name: "Rosa", unit: "0,5 lit", price: 130 },
      { name: "Coca-cola zero limenka", unit: "0,33 lit", price: 130 },
      { name: "Coca-cola limenka", unit: "0,33 lit", price: 130 },
      { name: "Next limunada", unit: "0,4 lit", price: 150 },
      { name: "Next multivitamin", unit: "0,5 lit", price: 150 },
      { name: "Next višnja", unit: "0,5 lit", price: 150 },
      { name: "Šveps", unit: "0,5 lit", price: 150 },
      { name: "Coca-cola", unit: "0,5 lit", price: 150 },
      { name: "Fanta", unit: "0,5 lit", price: 150 },
      { name: "Ultra energy", unit: "0,25 lit", price: 130 },
      { name: "Fanta limenka", unit: "0,33 lit", price: 130 },
      { name: "Sprite", unit: "0,5 lit", price: 150 },
    ],
  },
];

const pick = (sectionId: string, name: string, unit?: string): MenuItem => {
  const section = menu.find((s) => s.id === sectionId)!;
  return section.items.find(
    (i) => i.name === name && (unit === undefined || i.unit === unit)
  )!;
};

// Da dodaš fotografiju: ubaci fajl u public/jela/ i upiši putanju u `image`.
export const featured: {
  key: string;
  tagline: string;
  image?: string;
  item: MenuItem;
}[] = [
  {
    key: "pljeskavica",
    tagline: "Punjena kajmakom, sa žara",
    image: "/jela/pljeskavica.webp",
    item: pick("rostilj", "Punjena pljeskavica DeMarco"),
  },
  {
    key: "cevapi",
    tagline: "Domaći, sa lukom i ajvarom",
    image: "/jela/cevapi.webp",
    item: pick("rostilj", "Ćevapi"),
  },
  {
    key: "raznjic",
    tagline: "Sočan, pečen na roštilju",
    image: "/jela/raznjic.webp",
    item: pick("rostilj", "Svinjski ražnjić"),
  },
  {
    key: "ustipci",
    tagline: "Prženi, hrskavi spolja",
    image: "/jela/ustipci.webp",
    item: pick("rostilj", "Uštipci"),
  },
  {
    key: "mesano",
    tagline: "Sve sa roštilja na jednom tanjiru",
    image: "/jela/mesano.webp",
    item: pick("rostilj", "Mešano meso", "380 g"),
  },
  {
    key: "kobasica",
    tagline: "Po porodičnom receptu",
    image: "/jela/kobasica.webp",
    item: pick("rostilj", "Domaća kobasica"),
  },
  {
    key: "pizza",
    tagline: "Kuća specijal, mala i velika",
    image: "/jela/pizza.webp",
    item: pick("pizza", "Pizza DeMarco"),
  },
];

// Fotografije za traku u galeriji. Ubaci fajl u public/galerija/ i dodaj putanju ovde.
export const gallery = [
  "/galerija/ketering-01.webp",
  "/galerija/ketering-02.webp",
  "/galerija/ketering-03.webp",
  "/galerija/ketering-04.webp",
  "/galerija/ketering-05.webp",
  "/galerija/ketering-06.webp",
  "/galerija/ketering-07.webp",
];

export const contact = {
  address: "Ančiki, Tome Kostića bb",
  mapsUrl: "https://maps.app.goo.gl/Bgu69aFMQgALYogi6",
  instagram: "https://www.instagram.com/de_marco_mmc/",
  facebook: "https://www.facebook.com/p/DeMarco-Leskovac-100068604607314/",
  hours: "Ponedeljak - Subota 08.00 - 23.00",
  closed: "Nedeljom ne radimo",
  phones: [
    { label: "060 540 64 18", href: "tel:+381605406418" },
    { label: "069 181 79 22", href: "tel:+381691817922" },
  ],
  delivery: "Besplatna dostava na kućnu adresu",
  catering:
    "Priprema biznis keteringa, kao i keteringa za sve vrste promocija, proslava, slava, parastosa...",
};
