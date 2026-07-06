"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Verschwommenes „Mirror"-Band am unteren Rand des Heros.
 * Das Bild bewegt sich beim Scrollen leicht mit (Parallax) und erzeugt so
 * einen sanften Spiegel-/Tiefeneffekt. Respektiert prefers-reduced-motion.
 */
export default function HeroMirror() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      // Sanfter Parallax: max. 48px Versatz, damit die Kanten des
      // leicht vergrößerten Bildes nie sichtbar werden.
      const y = Math.min(window.scrollY * 0.2, 48);
      el.style.setProperty("--parallax", `${y}px`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-28 overflow-hidden sm:h-36"
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translateY(var(--parallax, 0px))" }}
      >
        <Image
          src="/images/hero-mirror-effect.jpeg"
          alt=""
          fill
          aria-hidden
          sizes="100vw"
          className="scale-125 object-cover"
        />
      </div>
      {/* Weicher Übergang, damit das Band nahtlos in den Hero übergeht */}
      <div className="absolute inset-0 bg-gradient-to-b from-wood via-wood/40 to-wood/80" />
    </div>
  );
}
