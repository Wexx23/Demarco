"use client";

import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useLayoutEffect, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      smoothTouch: 0,
      effects: true,
    });

    const onHashLinkClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      const id = link?.getAttribute("href")?.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      e.preventDefault();
      // Wait a frame so a link inside the mobile menu can close it (and
      // release its scroll lock) before the scroll position is measured.
      requestAnimationFrame(() => smoother.scrollTo(target, true, "top 80px"));
    };

    document.addEventListener("click", onHashLinkClick);

    return () => {
      document.removeEventListener("click", onHashLinkClick);
      smoother.kill();
    };
  }, []);

  useLayoutEffect(() => {
    // Jump (not glide) to the top before the new page paints; otherwise the
    // smoother keeps the old offset and the new page eases up from mid-page.
    ScrollSmoother.get()?.scrollTo(0, false);
    ScrollTrigger.refresh();
  }, [pathname]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
