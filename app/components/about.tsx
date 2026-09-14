import { Reveal } from "./reveal";

const paragraphs = [
  "PRE SVEGA, LJUBAV PREMA VATRI, MESU I POŠTENOM ZANATU KOJI SE PRENOSI GENERACIJAMA.",
  "SVE JE POČELO JEDNIM ROŠTILJEM U DVORIŠTU, MNOGO PRE NEGO ŠTO JE DEMARCO DOBIO IME I ADRESU.",
  "OD TADA, SVAKI KOMAD MESA NOSI ISTU POTREBU DA BUDE STVARNO DOBAR, NE SAMO DOVOLJNO DOBAR.",
  "ZATO NE PRAVIMO OBIČAN ROŠTILJ. VEĆ MALU KUHINJU U KOJOJ SE SPAJAJU DOMAĆI RECEPTI I LIČNI STANDARDI.",
  "U SVETU GDE JE SVE BRZO I ISTO, KOD NAS STVARI IMAJU TEŽINU JER NA KRAJU NIJE BITNO ŠTA JEDEŠ, VEĆ DA LI ĆEŠ SE VRATITI.",
];

export function About() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-20 text-cream md:px-10 md:py-28">
      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-6 text-xs font-bold tracking-[0.2em] text-yellow">[ O NAMA ]</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-10 font-display text-4xl leading-[0.95] tracking-tight text-yellow md:text-5xl">
            SVAKI ROŠTILJ JE MALA PRIČA.
          </h2>
        </Reveal>
        <div className="space-y-5">
          {paragraphs.map((p, i) => (
            <Reveal key={p} delay={0.05 * i}>
              <p className="text-sm font-bold leading-relaxed tracking-wide text-cream/90">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
