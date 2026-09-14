"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { contact } from "../menu-data";
import { ArrowIcon } from "./icons";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ContactDialog() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex w-fit items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-bold tracking-wide text-cream transition-transform duration-200 active:scale-[0.97]"
      >
        KONTAKT
        <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.2,
                  ease: EASE_OUT,
                }}
                className="fixed inset-0 z-50 flex items-center justify-center p-6"
              >
                <button
                  type="button"
                  aria-label="Zatvori"
                  onClick={() => setOpen(false)}
                  className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
                />

                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-label="Kontakt"
                  initial={{ opacity: 0, scale: 0.96, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 8 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.22,
                    ease: EASE_OUT,
                  }}
                  className="relative w-full max-w-sm rounded-3xl bg-cream p-6 shadow-2xl shadow-ink/30"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-ink-soft/60">
                        [ PORUČI ]
                      </p>
                      <h2 className="mt-2 font-display text-3xl leading-none tracking-tight">
                        POZOVI NAS
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      aria-label="Zatvori"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/20 text-lg leading-none transition-colors duration-150 hover:border-ink"
                    >
                      ×
                    </button>
                  </div>

                  <div className="flex flex-col gap-3">
                    {contact.phones.map((p) => (
                      <a
                        key={p.href}
                        href={p.href}
                        className="flex items-center justify-between rounded-full bg-yellow px-5 py-4 font-display text-xl tracking-tight text-ink transition-transform duration-200 active:scale-[0.97]"
                      >
                        {p.label}
                        <ArrowIcon className="h-4 w-4 rotate-45" />
                      </a>
                    ))}
                  </div>

                  <div className="mt-5 space-y-1 text-[10px] font-bold uppercase tracking-wide text-ink-soft/70">
                    <a
                      href={contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block underline decoration-ink/25 underline-offset-4 hover:text-ink"
                    >
                      {contact.address}
                    </a>
                    <p>{contact.hours}</p>
                    <p>{contact.closed}</p>
                    <p className="pt-2 text-ink">{contact.delivery}</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
