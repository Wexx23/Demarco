type IconProps = { className?: string };

function Line({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function PljeskavicaIcon({ className }: IconProps) {
  return (
    <Line className={className}>
      <path d="M3 15C3 8 9 3 16 3s13 5 13 12" />
      <path d="M2 15.5h28" />
      <path d="M10 9.5h.01M16 7h.01M22 9.5h.01M13 12.5h.01M19 12.5h.01" />
      <path d="M3 17.5c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2 2-2 3-2" />
      <path d="M5 21.5h22a2 2 0 0 1 0 4H5a2 2 0 0 1 0-4z" />
      <path d="M3 26h26c0 2.5-2 4-4.5 4h-17C5 30 3 28.5 3 26z" />
    </Line>
  );
}

export function CevapiIcon({ className }: IconProps) {
  return (
    <Line className={className}>
      <path d="M6 5h19a2.8 2.8 0 0 1 0 5.6H6A2.8 2.8 0 0 1 6 5z" />
      <path d="M4 12.6h21a2.8 2.8 0 0 1 0 5.6H4a2.8 2.8 0 0 1 0-5.6z" />
      <path d="M8 20.2h18a2.8 2.8 0 0 1 0 5.6H8a2.8 2.8 0 0 1 0-5.6z" />
    </Line>
  );
}

export function RaznjicIcon({ className }: IconProps) {
  return (
    <Line className={className}>
      <path d="M.5 16h31" />
      <path d="M5 10.5h5.5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3z" />
      <path d="M17 10.5h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3z" />
    </Line>
  );
}

export function UstipciIcon({ className }: IconProps) {
  return (
    <Line className={className}>
      <path d="M10.5 6.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11z" />
      <path d="M21.5 6.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11z" />
      <path d="M16 16a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11z" />
      <path d="M9 11h.01M23 11h.01M16 21h.01" />
    </Line>
  );
}

export function RostiljIcon({ className }: IconProps) {
  return (
    <Line className={className}>
      <path d="M16 3.5c6.9 0 12.5 5 12.5 11S22.9 25.5 16 25.5 3.5 20.5 3.5 14.5 9.1 3.5 16 3.5z" />
      <path d="M7.5 10h17M4 14.5h24M7.5 19h17" />
      <path d="M10 24.5 7 30M22 24.5l3 5.5M16 25.5V31" />
    </Line>
  );
}

export function KobasicaIcon({ className }: IconProps) {
  return (
    <Line className={className}>
      <path d="M9.5 4.5c-4.5 3-6 9.5-3.5 15s8.5 8 13.5 6.5c2.2-.7 3.3-2.8 2.4-4.8s-3.1-2.7-5.1-2c-2.3.8-4.7-.4-5.8-2.8s-.5-5 1.3-6.5c1.7-1.4 2-3.7.6-5.3s-3.3-1.6-4.4-.1z" />
      <path d="M12 8.5c-1.4 1.6-1.8 3.6-1.2 5.4" />
    </Line>
  );
}

export function PizzaIcon({ className }: IconProps) {
  return (
    <Line className={className}>
      <path d="M16 2 29 26H3z" />
      <path d="M3 26c4.5 3.5 21.5 3.5 26 0" />
      <path d="M15 11.5a1.6 1.6 0 1 0 .01 0M11 19a1.6 1.6 0 1 0 .01 0M20.5 18a1.6 1.6 0 1 0 .01 0M16 23.5a1.3 1.3 0 1 0 .01 0" />
    </Line>
  );
}

export function PomfritIcon({ className }: IconProps) {
  return (
    <Line className={className}>
      <path d="M9 13h14l-2 16H11z" />
      <path d="M8 17.5h16" />
      <path d="M11 13 9.5 4M15 13V2.5M19 13l2-9.5M22.5 13 25 5" />
    </Line>
  );
}
