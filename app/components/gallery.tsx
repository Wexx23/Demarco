import Image from "next/image";
import { contact, gallery } from "../menu-data";
import { Reveal } from "./reveal";

export function Gallery() {
  const strip = [...gallery, ...gallery];

  return (
    <section className="overflow-hidden bg-ink py-16 text-cream md:py-20">
      <div className="px-6 md:px-10">
        <Reveal>
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-yellow">
            [ KETERING ]
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-3 font-display text-3xl leading-[0.95] tracking-tight md:text-4xl">
            IZ NAŠE KUHINJE.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mb-10 max-w-xl text-xs font-bold uppercase leading-relaxed tracking-wide text-cream/70">
            {contact.catering}
          </p>
        </Reveal>
      </div>

      <div className="marquee-track relative">
        <div className="animate-marquee flex w-max gap-4">
          {strip.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-56 w-44 shrink-0 overflow-hidden rounded-2xl md:h-72 md:w-56"
            >
              <Image
                src={src}
                alt="Ketering tanjir sa roštiljem"
                fill
                sizes="(min-width: 768px) 224px, 176px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent" />
      </div>
    </section>
  );
}
