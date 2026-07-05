"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { site } from "@/lib/site";

export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-wood/10 bg-cream-dark shadow-sm sm:aspect-video">
      {loaded ? (
        <iframe
          src={site.mapsEmbedUrl}
          title="Google Maps – Gasthof Adler Balzhausen"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
          <MapPin size={32} className="text-wine" />
          <p className="max-w-sm text-sm text-ink/70">
            Beim Laden der Karte werden Daten an Google übertragen. Details in unserer{" "}
            <a href="/datenschutz" className="text-wine underline">
              Datenschutzerklärung
            </a>
            .
          </p>
          <button
            onClick={() => setLoaded(true)}
            className="rounded-xl bg-wine px-5 py-2.5 text-sm font-semibold text-white hover:bg-wine-dark"
          >
            Karte laden
          </button>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-wine underline"
          >
            In Google Maps öffnen
          </a>
        </div>
      )}
    </div>
  );
}
