import { Reveal } from "./reveal";

const paragraphs = [
  "Tradicija, kvalitet i meso bez kompromisa.",
  "U gradu koji je kolevka dobrog roštilja, razliku čine detalji. U brzoj hrani DeMarco ne koristimo prečice, biramo isključivo najkvalitetnije meso domaćeg porekla i pripremamo ga na roštilju po proverenim receptima.",
  "Od sočnih ćevapa i gurmanske pljeskavice, pa sve do naših specijaliteta sa roštilja, svaki zalogaj donosi prepoznatljiv ukus po kom je Leskovac poznat širom sveta. Naša misija je jednostavna: uvek sveža hrana i ukus zbog kog ćete nam se uvek vraćati.",
];

export function About() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-20 text-cream md:px-10 md:py-28">
      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-6 text-xs font-bold tracking-[0.2em] text-yellow">O NAMA</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-10 font-display text-4xl leading-[0.95] tracking-tight text-yellow md:text-5xl">
            SVAKI ROŠTILJ JE MALA PRIČA.
          </h2>
        </Reveal>
        <div className="space-y-5">
          {paragraphs.map((p, i) => (
            <Reveal key={p} delay={0.05 * i}>
              <p className="text-sm font-bold uppercase leading-relaxed tracking-wide text-cream/90">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
