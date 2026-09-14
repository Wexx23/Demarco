"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { contact } from "../menu-data";
import { CutleryMark } from "./icons";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const links = [
  { label: "POČETNA", href: "/" },
  { label: "MENI", href: "/meni" },
  { label: "KONTAKT", href: "#kontakt" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[var(--nav-h)] border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="relative flex h-full items-center justify-between gap-3 px-6 md:px-10">
        <nav className="hidden items-center gap-2 md:flex">
          {links.slice(0, 2).map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="rounded-full border border-ink/20 px-4 py-2 text-xs font-bold tracking-wide text-ink transition-colors duration-200 hover:border-ink"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg tracking-wide"
        >
          <CutleryMark className="h-6 w-6 text-ink" />
          DEMARCO
        </Link>

        <a
          href="#kontakt"
          className="hidden rounded-full bg-yellow px-4 py-2 text-xs font-bold tracking-wide text-ink transition-[filter] duration-200 hover:brightness-95 md:inline-flex"
        >
          KONTAKT
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-cream transition-transform duration-150 active:scale-[0.94] md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className="absolute left-0 block h-0.5 w-5 bg-cream transition-transform duration-200 ease-out"
              style={{
                transform: open
                  ? "translateY(7px) rotate(45deg)"
                  : "translateY(2px)",
              }}
            />
            <span
              className="absolute left-0 block h-0.5 w-5 bg-cream transition-transform duration-200 ease-out"
              style={{
                transform: open
                  ? "translateY(7px) rotate(-45deg)"
                  : "translateY(12px)",
              }}
            />
          </span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: EASE_OUT }}
              className="absolute left-0 right-0 top-full z-40 flex h-[calc(100dvh-100%)] flex-col border-t border-ink/10 bg-cream px-6 py-8 md:hidden"
            >
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.25,
                      ease: EASE_OUT,
                      delay: reduceMotion ? 0 : 0.04 * i,
                    }}
                  >
                    {href.startsWith("/") ? (
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className="block w-fit font-display text-4xl leading-none tracking-tight"
                      >
                        {label}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        onClick={() => setOpen(false)}
                        className="block w-fit font-display text-4xl leading-none tracking-tight"
                      >
                        {label}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3">
                <p className="text-[10px] font-bold tracking-[0.2em] text-ink-soft/60">
                  TELEFONI ZA DOSTAVU
                </p>
                {contact.phones.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="rounded-full bg-yellow px-5 py-3 text-center text-sm font-bold tracking-wide text-ink transition-transform duration-200 active:scale-[0.97]"
                  >
                    {p.label}
                  </a>
                ))}
                <p className="text-[10px] font-bold uppercase tracking-wide text-ink-soft/60">
                  {contact.address} · {contact.hours}
                </p>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
