import type { Metadata } from "next";
import { Anton, Space_Mono } from "next/font/google";
import "./globals.css";
import AgentationToolbar from "./agentation-toolbar";
import { Nav } from "./components/nav";
import { SmoothScroll } from "./components/smooth-scroll";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  "http://localhost:3000";
const description =
  "Domaći roštilj, ćevapi i pljeskavice po porodičnim receptima. Ančiki, Tome Kostića bb — besplatna dostava na kućnu adresu.";

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
      className={`${anton.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink font-mono">
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
        <AgentationToolbar />
      </body>
    </html>
  );
}
