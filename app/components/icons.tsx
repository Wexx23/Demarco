export function CutleryMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <path
        d="M28 8v42a10 10 0 0 0 8 9.8V112h8V59.8a10 10 0 0 0 8-9.8V8h-6v30h-4V8h-6v30h-4V8h-4Z"
        fill="currentColor"
      />
      <path
        d="M84 8c-9 0-16 12-16 30 0 13 4 22 10 26v48h8V64c6-4 10-13 10-26 0-18-3-30-12-30Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FlameIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M32 4c2 10-8 14-8 24a8 8 0 0 0 16 0c0-4-2-6-2-6 4 2 8 8 8 16 0 10.5-8.5 20-20 20S6 48.5 6 38c0-16 14-20 18-30 2-4 4-4 4-4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SkewerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 40" fill="none" className={className} aria-hidden="true">
      <rect x="0" y="17" width="160" height="6" rx="3" fill="currentColor" />
      <rect x="14" y="4" width="20" height="32" rx="6" fill="currentColor" opacity="0.85" />
      <rect x="44" y="4" width="20" height="32" rx="6" fill="currentColor" opacity="0.85" />
      <rect x="74" y="4" width="20" height="32" rx="6" fill="currentColor" opacity="0.85" />
      <rect x="104" y="4" width="20" height="32" rx="6" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

export function PattyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <ellipse cx="32" cy="24" rx="26" ry="14" fill="currentColor" />
      <path
        d="M6 26c0 9 11.6 16 26 16s26-7 26-16"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="2.5" fill="var(--color-cream)" />
      <circle cx="32" cy="16" r="2.5" fill="var(--color-cream)" />
      <circle cx="44" cy="20" r="2.5" fill="var(--color-cream)" />
      <circle cx="26" cy="26" r="2.5" fill="var(--color-cream)" />
      <circle cx="38" cy="27" r="2.5" fill="var(--color-cream)" />
    </svg>
  );
}

export function GrillIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <rect x="6" y="26" width="52" height="6" rx="2" fill="currentColor" />
      <rect x="6" y="38" width="52" height="6" rx="2" fill="currentColor" />
      <path d="M14 26V16M26 26V16M38 26V16M50 26V16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M12 50c4-6 6-10 4-16M32 50c4-6 6-10 4-16M52 50c4-6 6-10 4-16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function SmokeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 60c-8 0-8-8 0-10s8-10 0-12 8-10 0-12 6-10 0-14"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 19 19 5M19 5H8M19 5v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function ChefIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" fill="none" className={className} aria-hidden="true">
      <path
        d="M30 40c0-14 9-24 20-24s20 10 20 24c8 2 12 8 12 14 0 8-6 14-14 16v6H32v-6c-8-2-14-8-14-16 0-6 4-12 12-14Z"
        fill="currentColor"
      />
      <rect x="32" y="76" width="36" height="40" rx="4" fill="currentColor" opacity="0.85" />
      <rect x="38" y="86" width="24" height="4" rx="2" fill="var(--color-cream)" />
      <rect x="38" y="96" width="24" height="4" rx="2" fill="var(--color-cream)" />
    </svg>
  );
}
