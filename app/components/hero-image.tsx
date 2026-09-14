"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

export function HeroImage() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const tilt = useTransform(scrollY, [0, 700], [0, 3]);
  const transform = useMotionTemplate`rotate(${tilt}deg)`;

  return (
    <div className="flex items-center justify-center">
      <div data-speed="0.9" className="w-full">
        <motion.div
          style={{ transform: reduceMotion ? undefined : transform }}
          className="will-change-transform"
        >
          <div className="animate-float">
            <Image
              src="/pljeskavica.webp"
              alt="DeMarco pljeskavica sa kajmakom, pečenom paprikom i crnim lukom"
              width={930}
              height={691}
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
