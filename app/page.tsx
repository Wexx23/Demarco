import { About } from "./components/about";
import { BigWordmark } from "./components/big-wordmark";
import { CTA } from "./components/cta";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import { Gallery } from "./components/gallery";
import { Hero } from "./components/hero";
import { Menu } from "./components/menu";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Features />
        <Menu />
        <Gallery />
        <CTA />
        <BigWordmark />
      </main>
      <Footer />
    </div>
  );
}
