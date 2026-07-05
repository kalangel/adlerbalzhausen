"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  const decide = (value: "accepted" | "declined") => {
    localStorage.setItem("cookie-consent", value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      className="no-print fixed bottom-16 left-4 right-4 z-50 mx-auto max-w-xl rounded-2xl border border-wood/10 bg-white p-5 shadow-xl md:bottom-6"
    >
      <h2 className="mb-2 font-display text-lg font-semibold">Cookies & Datenschutz</h2>
      <p className="mb-4 text-sm text-ink/80">
        Wir verwenden nur technisch notwendige Cookies. Externe Inhalte (z.&nbsp;B.
        Google&nbsp;Maps) werden erst nach Ihrer Zustimmung geladen. Details finden Sie in
        unserer{" "}
        <a href="/datenschutz" className="text-wine underline">
          Datenschutzerklärung
        </a>
        .
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => decide("accepted")}
          className="rounded-xl bg-wine px-4 py-2 text-sm font-semibold text-white hover:bg-wine-dark"
        >
          Alle akzeptieren
        </button>
        <button
          onClick={() => decide("declined")}
          className="rounded-xl border border-wood/30 px-4 py-2 text-sm font-semibold hover:bg-cream"
        >
          Nur notwendige
        </button>
      </div>
    </div>
  );
}
