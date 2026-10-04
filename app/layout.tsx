import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import AgentationToolbar from "./agentation-toolbar";
import { Nav } from "./components/nav";
import { SmoothScroll } from "./components/smooth-scroll";

// Karma (Indian Type Foundry, Fontshare) — OFL, see app/fonts/Karma-OFL.txt
const karma = localFont({
  src: "./fonts/Karma-Variable.woff2",
  variable: "--font-karma",
  weight: "300 700",
  display: "swap",
});

// DeMarco Display = Changa One (Eduardo Tunni, OFL) + č ć đ Č Ć Đ,
// renamed as the OFL requires. See app/fonts/DeMarcoDisplay-OFL.txt
const demarcoDisplay = localFont({
  src: "./fonts/DeMarcoDisplay-Regular.woff2",
  variable: "--font-demarco",
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ?? // Netlify
  (process.env.VERCEL_PROJECT_PRODUCTION_URL // Vercel (hostname only)
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
const description =
  "Domaći roštilj, ćevapi i pljeskavice po porodičnim receptima. Ančiki, Tome Kostića bb — besplatna dostava na kućnu adresu u Leskovcu.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DeMarco - Roštilj sa stavom",
  description,
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "DeMarco",
    title: "DeMarco - Roštilj sa stavom",
    description,
    url: "/",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "DeMarco roštilj" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeMarco - Roštilj sa stavom",
    description,
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sr"
      className={`${karma.variable} ${demarcoDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink font-sans">
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
        <AgentationToolbar />
      </body>
    </html>
  );
}
