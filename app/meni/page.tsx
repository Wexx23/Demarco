import type { Metadata } from "next";
import { Footer } from "../components/footer";
import { Reveal } from "../components/reveal";
import { contact, menu, type MenuItem } from "../menu-data";

export const metadata: Metadata = {
  title: "Meni i cenovnik | DeMarco",
  description:
    "Cenovnik DeMarco roštilja: specijaliteti sa roštilja, roštilj po kg, pizza, sendviči, salate i pića.",
};

function Row({ item, dual }: { item: MenuItem; dual?: boolean }) {
  return (
    <li className="flex items-baseline gap-3 py-3">
      <div className="min-w-0">
        <span className="text-xs font-bold uppercase tracking-wide md:text-sm">
          {item.name}
        </span>
        {item.desc && (
          <span className="block text-[10px] leading-relaxed text-ink-soft md:text-xs">
            ({item.desc})
          </span>
        )}
      </div>

      {item.desc ? (
        <span className="flex-1" />
      ) : (
        <span className="mb-1 h-px flex-1 border-b border-dotted border-current opacity-30" />
      )}

      {item.unit && (
        <span className="shrink-0 text-[10px] text-ink-soft md:text-xs">
          {item.unit}
        </span>
      )}

      {dual ? (
        <span className="flex shrink-0 gap-3 font-display text-sm md:text-base">
          <span className="w-10 text-right">{item.priceSmall ?? "—"}</span>
          <span className="w-10 text-right">
            {item.priceLarge ?? item.price}
          </span>
        </span>
      ) : (
        <span className="shrink-0 font-display text-sm md:text-base">
          {item.price}
        </span>
      )}
    </li>
  );
}

export default function MeniPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col">
        <section className="px-6 pt-14 pb-10 md:px-10 md:pt-20">
          <Reveal>
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-ink-soft">
              CENOVNIK
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl">
              MENI
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-xs font-bold uppercase tracking-wide text-ink-soft">
              Sve cene su u dinarima. {contact.delivery}.
            </p>
          </Reveal>
        </section>

        <nav className="sticky top-[var(--nav-h)] z-30 border-y border-ink/10 bg-cream/90 px-6 py-3 backdrop-blur md:px-10">
          <ul className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {menu.map((s) => (
              <li key={s.id} className="shrink-0">
                <a
                  href={`#${s.id}`}
                  className="block rounded-full border border-ink/20 px-3 py-2 text-[10px] font-bold tracking-wide transition-colors duration-200 hover:border-ink md:text-xs"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {menu.map((section, i) => {
          return (
            <section
              key={section.id}
              id={section.id}
              className={`scroll-mt-32 px-6 py-12 md:px-10 md:py-16 ${
                i % 2 === 1 ? "bg-cream-2" : ""
              }`}
            >
              <div className="mx-auto max-w-3xl">
                <Reveal>
                  <h2 className="font-display text-2xl tracking-tight md:text-3xl">
                    {section.title}
                  </h2>
                </Reveal>

                {section.note && (
                  <Reveal delay={0.05}>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-ink-soft/70 md:text-xs">
                      {section.note}
                    </p>
                  </Reveal>
                )}

                {section.dual && (
                  <Reveal delay={0.05}>
                    <div className="mt-4 flex justify-end gap-3 text-[10px] font-bold tracking-wide text-ink-soft/70">
                      <span className="w-10 text-right">MALA</span>
                      <span className="w-10 text-right">VELIKA</span>
                    </div>
                  </Reveal>
                )}

                <Reveal delay={0.1}>
                  <ul className="mt-4 divide-y divide-ink/10">
                    {section.items.map((item, idx) => (
                      <Row
                        key={`${item.name}-${item.unit ?? idx}`}
                        item={item}
                        dual={section.dual}
                      />
                    ))}
                  </ul>
                </Reveal>
              </div>
            </section>
          );
        })}

        <section
          id="kontakt"
          className="scroll-mt-32 bg-cream px-6 py-16 text-ink md:px-10 md:py-20"
        >
          <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl leading-[0.95] tracking-tight md:text-4xl">
                KETERING ZA SVAKU PRILIKU.
              </h2>
              <p className="mt-4 text-xs font-bold uppercase leading-relaxed tracking-wide text-ink-soft">
                {contact.catering}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-4">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-ink-soft/70">
                  TELEFONI ZA DOSTAVU
                </p>
                <div className="mt-2 flex flex-col gap-2">
                  {contact.phones.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      className="w-fit rounded-full bg-yellow px-5 py-3 text-sm font-bold tracking-wide text-ink transition-transform duration-200 active:scale-[0.97]"
                    >
                      {p.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="text-xs font-bold uppercase tracking-wide text-ink-soft">
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-ink/30 underline-offset-4 transition-colors duration-150 hover:decoration-ink"
                >
                  {contact.address}
                </a>
                <p className="mt-1">{contact.hours}</p>
                <p className="mt-1 text-ink-soft/70">{contact.closed}</p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
