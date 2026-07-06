"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * „Mirror"-Band am unteren Rand des Heros.
 * Das Bild pant durchgehend mit dem Scrollrad mit (Parallax), solange das
 * Band im Viewport ist – gebunden an die Bildschirmposition des Bandes, damit
 * die Bewegung nie stehen bleibt und die Kanten des vergrößerten Bildes nie
 * sichtbar werden. Respektiert prefers-reduced-motion.
 */
const RANGE = 50; // max. Versatz in px (innerhalb des Skalierungs-Spielraums)

export default function HeroMirror() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Fortschritt 0..1, während das Band von unten nach oben durch den
      // Viewport wandert – bleibt so über den gesamten Sichtbereich in
      // Bewegung, statt bei einem festen Scrollwert stehen zu bleiben.
      const progress = (vh - rect.top) / (vh + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      const y = (clamped - 0.5) * 2 * RANGE;
      el.style.setProperty("--parallax", `${y}px`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
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
          className="scale-[2] object-cover"
        />
      </div>
      {/* Weicher Übergang, damit das Band nahtlos in den Hero übergeht */}
      <div className="absolute inset-0 bg-gradient-to-b from-wood via-wood/40 to-wood/80" />
    </div>
  );
}
