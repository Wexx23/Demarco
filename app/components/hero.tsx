import { ContactDialog } from "./contact-dialog";
import { CevapiIcon, PizzaIcon, RaznjicIcon, UstipciIcon } from "./food-icons";
import { HeroImage } from "./hero-image";
import pattern from "./pattern.svg";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section
      className="relative grid gap-10 bg-[length:300px_300px] bg-repeat px-6 pt-14 pb-20 md:grid-cols-2 md:px-10 md:pt-20"
      style={{ backgroundImage: `url(${pattern.src})` }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <span className="animate-float absolute left-[40%] bottom-[34%]">
          <CevapiIcon className="h-11 w-11 text-yellow" />
        </span>
        <span className="animate-float absolute right-[6%] top-[8%]" style={{ animationDelay: "900ms" }}>
          <RaznjicIcon className="h-12 w-12 text-yellow" />
        </span>
        <span className="animate-float absolute left-[8%] bottom-[12%]" style={{ animationDelay: "1800ms" }}>
          <UstipciIcon className="h-10 w-10 text-yellow" />
        </span>
        <span className="animate-float absolute right-[10%] bottom-[10%]" style={{ animationDelay: "2600ms" }}>
          <PizzaIcon className="h-10 w-10 text-yellow" />
        </span>
      </div>

      <div className="flex flex-col gap-8">
        <Reveal>
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
            MESO SA ROŠTILJA, PRIČA SA STAVOM.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="max-w-md text-sm font-bold uppercase tracking-wide text-ink-soft">
            Porodični roštilj po receptu koji se ne menja.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ContactDialog />
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <HeroImage />
      </Reveal>
    </section>
  );
}
