"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery";

export default function Gallery({
  images,
  withFilter = false,
}: {
  images: GalleryImage[];
  withFilter?: boolean;
}) {
  const [filter, setFilter] = useState<string>("Alle");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const categories = ["Alle", ...Array.from(new Set(images.map((i) => i.category)))];
  const visible = filter === "Alle" ? images : images.filter((i) => i.category === filter);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: number) => {
      setLightbox((cur) =>
        cur === null ? null : (cur + dir + visible.length) % visible.length
      );
    },
    [visible.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, step]);

  return (
    <div>
      {withFilter && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setFilter(c);
                setLightbox(null);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                filter === c
                  ? "bg-wine text-white"
                  : "border border-wood/20 hover:bg-cream-dark"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>button]:mb-4">
        {visible.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightbox(i)}
            className="block w-full overflow-hidden rounded-2xl shadow-sm transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-wine"
            aria-label={`${img.alt} – vergrößern`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              className="h-auto w-full transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {lightbox !== null && visible[lightbox] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Schließen"
          >
            <X size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-6"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft size={28} />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={visible[lightbox].src}
              alt={visible[lightbox].alt}
              width={1600}
              height={1200}
              className="max-h-[82vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {visible[lightbox].alt}
            </figcaption>
          </figure>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-6"
            aria-label="Nächstes Bild"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  );
}
