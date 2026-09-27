# DeMarco — sajt

Sajt za roštilj DeMarco: početna strana, meni sa cenovnikom i kontakt informacije.
Napravljeno u [Next.js](https://nextjs.org) 16 (App Router), stilizovano sa Tailwind CSS 4.

## Pokretanje lokalno

Potreban je [Node.js](https://nodejs.org) 20 ili noviji.

```bash
npm install
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000).

## Struktura projekta

```
app/
  page.tsx              — početna strana
  meni/page.tsx          — stranica sa cenovnikom
  menu-data.ts            — SVE cene, stavke menija i kontakt podaci (adresa, telefoni, radno vreme)
  components/             — komponente sajta (nav, hero, kontakt prozor, karusel ponude...)
  globals.css             — boje, fontovi, animacije
public/
  jela/                   — fotografije jela za karusel "Naša ponuda"
  galerija/                — fotografije za traku u sekciji "Iz naše kuhinje"
```

### Izmena cena i menija

Sve cene i stavke se menjaju na jednom mestu: `app/menu-data.ts`. Odatle se
automatski povlače i na stranicu `/meni` i u karusel na početnoj — nema
opasnosti da se cene raziđu između te dve strane.

### Dodavanje fotografije jela

1. Ubaci fotografiju u `public/jela/` (preporučeno: `.webp`, do ~150KB)
2. U `app/menu-data.ts`, u `featured` nizu, dodaj `image: "/jela/ime-fajla.webp"` uz odgovarajuću stavku

## Deploy (Netlify)

Projekat je podešen za Netlify (`netlify.toml`) — build komanda i Next.js
plugin su već definisani, ništa dodatno ne treba podešavati u Netlify
panelu osim povezivanja GitHub repozitorijuma.

Adresa sajta (za OG sliku pri deljenju linka) se čita automatski iz
Netlify-jeve `URL` promenljive okruženja, ili ručno preko
`NEXT_PUBLIC_SITE_URL` ako se hostuje negde drugde.

## Tehnologije

- Next.js 16 (App Router, Turbopack)
- Tailwind CSS 4
- Motion (Framer Motion) i GSAP ScrollSmoother — animacije i glatko skrolovanje
- Swiper — karusel u sekciji "Naša ponuda"
