"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { featured } from "../menu-data";
import {
  CevapiIcon,
  KobasicaIcon,
  PizzaIcon,
  PljeskavicaIcon,
  RaznjicIcon,
  RostiljIcon,
  UstipciIcon,
} from "./food-icons";
import { ArrowIcon } from "./icons";
import { Reveal } from "./reveal";

const icons = {
  pljeskavica: PljeskavicaIcon,
  cevapi: CevapiIcon,
  raznjic: RaznjicIcon,
  ustipci: UstipciIcon,
  mesano: RostiljIcon,
  kobasica: KobasicaIcon,
  pizza: PizzaIcon,
};

export function Menu() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section id="ponuda" className="px-6 py-16 md:px-10">
      <div className="mb-8 flex items-center justify-between">
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            NAŠA PONUDA
          </h2>
        </Reveal>
        <a
          href="/meni"
          className="hidden items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-xs font-bold tracking-wide hover:border-ink transition-colors duration-200 md:inline-flex"
        >
          VIDI MENI
          <ArrowIcon className="h-4 w-4" />
        </a>
      </div>

      <Reveal>
        <Swiper
          modules={[Keyboard, A11y]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          // Whole cards only; Swiper clips to its box so nothing peeks in
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          keyboard={{ enabled: true }}
          a11y={{
            prevSlideMessage: "Prethodno jelo",
            nextSlideMessage: "Sledeće jelo",
          }}
        >
          {featured.map(({ key, tagline, image, item }) => {
            const Icon = icons[key as keyof typeof icons];
            return (
              <SwiperSlide key={key} className="!h-auto">
                <div className="flex h-full flex-col gap-5 rounded-3xl bg-cream-2 p-4">
                  {/* bg matches the studio backdrop baked into /jela/*.webp */}
                  <div className="relative flex aspect-[4/3] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#e2dac4]">
                    {image ? (
                      <Image
                        src={image}
                        alt={item.name}
                        fill
                        sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 90vw"
                        className="object-cover"
                      />
                    ) : (
                      <Icon className="h-14 w-14 text-ink/25" />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col justify-between gap-3 px-2 pb-2">
                    <div>
                      <h3 className="font-display text-xl leading-tight tracking-tight">
                        {item.name}
                      </h3>
                      {tagline && (
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-ink-soft/70">
                          {tagline}
                        </p>
                      )}
                    </div>

                    <div className="flex items-baseline justify-between border-t border-ink/10 pt-3">
                      <span className="text-[10px] font-bold tracking-wide text-ink-soft/70">
                        {item.unit ??
                          (item.priceLarge ? "MALA / VELIKA" : "KOM.")}
                      </span>
                      <span className="font-display text-xl tracking-tight">
                        {item.price ??
                          `${item.priceSmall} / ${item.priceLarge}`}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Reveal>

      <div className="mt-6 flex items-center justify-between gap-4">
        <a
          href="/meni"
          className="inline-flex items-center gap-2 text-xs font-bold tracking-wide underline decoration-2 underline-offset-4 md:hidden"
        >
          VIDI MENI
        </a>

        <div className="ml-auto flex gap-2">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Prethodno"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-cream transition-transform duration-150 active:scale-[0.94]"
          >
            <ArrowIcon className="h-4 w-4 -rotate-[135deg]" />
          </button>
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Sledeće"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-cream transition-transform duration-150 active:scale-[0.94]"
          >
            <ArrowIcon className="h-4 w-4 rotate-45" />
          </button>
        </div>
      </div>
    </section>
  );
}
