import { Reveal } from "./reveal";

const features = [
  {
    title: "DOMAĆI RECEPTI",
    text: "SVE ŠTO SPREMAMO NASTALO JE PO PORODIČNIM RECEPTIMA. BIRAMO SAMO MESO PRVE KLASE I SASTOJKE ZA KOJE MOŽEMO DA STANEMO IZA NJIH.",
  },
  {
    title: "MAJSTORSKI ZANAT",
    text: "SVAKI ĆEVAP I SVAKA PLJESKAVICA PROŠLI SU KROZ GODINE USAVRŠAVANJA DOK NISU DOBILI TAČAN UKUS I TEKSTURU.",
  },
  {
    title: "PORODIČNO NASLEĐE",
    text: "IZA SVAKOG TANJIRA STOJI PAŽNJA PREMA DETALJU I LJUBAV PREMA ZANATU KOJI SE PRENOSI SA KOLENA NA KOLENO.",
  },
];

export function Features() {
  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-4xl divide-y divide-ink/15">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={0.08 * i}>
            <div className="grid gap-3 py-6 md:grid-cols-[220px_1fr] md:gap-8 md:py-8">
              <h3 className="font-display text-xl tracking-tight md:text-2xl">{f.title}</h3>
              <p className="text-xs font-bold leading-relaxed tracking-wide text-ink-soft md:text-sm">
                {f.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
