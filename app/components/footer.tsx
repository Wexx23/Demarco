import Link from "next/link";
import { contact } from "../menu-data";
import { CutleryMark, InstagramIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-ink px-6 pt-14 pb-8 text-cream md:px-10">
      <div className="grid gap-10 border-b border-cream/15 pb-10 md:grid-cols-4">
        <div className="flex items-center gap-2 font-display text-2xl tracking-wide">
          <CutleryMark className="h-6 w-6 text-yellow" />
          DEMARCO
        </div>

        <div className="flex flex-col gap-2 text-xs font-bold tracking-wide text-cream/80">
          <span className="mb-1 text-cream/70">NAVIGACIJA</span>
          <Link href="/" className="w-fit transition-colors duration-150 hover:text-yellow">
            POČETNA
          </Link>
          <Link href="/meni" className="w-fit transition-colors duration-150 hover:text-yellow">
            MENI
          </Link>
          <a href="#kontakt" className="w-fit transition-colors duration-150 hover:text-yellow">
            KONTAKT
          </a>
        </div>

        <div className="flex flex-col gap-2 text-xs font-bold tracking-wide text-cream/80">
          <span className="mb-1 text-cream/70">LOKACIJA I RADNO VREME</span>
          <a
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit underline decoration-cream/30 underline-offset-4 transition-colors duration-150 hover:text-yellow"
          >
            {contact.address}
          </a>
          <span>{contact.hours}</span>
          <span className="text-cream/70">{contact.closed}</span>
        </div>

        <div className="flex flex-col gap-2 text-xs font-bold tracking-wide text-cream/80">
          <span className="mb-1 text-cream/70">TELEFONI ZA DOSTAVU</span>
          {contact.phones.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="w-fit transition-colors duration-150 hover:text-yellow"
            >
              {p.label}
            </a>
          ))}
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DeMarco na Instagramu"
            className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 transition-colors duration-150 hover:border-yellow hover:text-yellow"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-6 text-[10px] font-bold tracking-wide text-cream/70 md:flex-row md:justify-between">
        <span>© 2026 DEMARCO. SVA PRAVA ZADRŽANA.</span>
        <span>{contact.delivery.toUpperCase()}</span>
      </div>
    </footer>
  );
}
