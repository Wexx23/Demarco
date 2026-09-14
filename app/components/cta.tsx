import { contact } from "../menu-data";
import { Reveal } from "./reveal";

export function CTA() {
  return (
    <section
      id="kontakt"
      className="bg-ink-soft px-6 py-20 text-cream md:px-10 md:py-28"
    >
      <div>
          <Reveal>
            <p className="mb-5 font-display text-2xl tracking-tight text-yellow md:text-3xl">
              MESO SA STAVOM.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-10 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              PORUČI SVOJ
              <br />
              TANJIR.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-3">
              {contact.phones.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  className="inline-flex items-center gap-3 rounded-full bg-yellow px-6 py-3 text-sm font-bold tracking-wide text-ink transition-transform duration-200 active:scale-[0.97]"
                >
                  {p.label}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-wide text-cream/60">
              {contact.delivery} · {contact.hours}
            </p>
          </Reveal>
      </div>
    </section>
  );
}
