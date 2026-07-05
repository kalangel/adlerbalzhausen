"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, subject: "Kontaktanfrage" }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-wood/20 bg-white px-4 py-2.5 text-sm focus:border-wine focus:outline-none focus:ring-1 focus:ring-wine";

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-green-600/20 bg-green-50 p-6 text-green-900">
        <p className="font-semibold">Ihre Nachricht wurde gesendet!</p>
        <p className="mt-1 text-sm">Wir setzen uns schnellstmöglich mit Ihnen in Verbindung.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="k-name" className="mb-1 block text-sm font-medium">
            Name *
          </label>
          <input id="k-name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="k-email" className="mb-1 block text-sm font-medium">
            E-Mail *
          </label>
          <input id="k-email" name="email" type="email" required className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="k-phone" className="mb-1 block text-sm font-medium">
          Telefon
        </label>
        <input id="k-phone" name="telefon" type="tel" className={inputClass} />
      </div>
      <div>
        <label htmlFor="k-msg" className="mb-1 block text-sm font-medium">
          Nachricht *
        </label>
        <textarea id="k-msg" name="nachricht" rows={5} required className={inputClass} />
      </div>
      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" required className="mt-1 accent-wine" />
        <span>
          Ich habe die{" "}
          <a href="/datenschutz" className="text-wine underline">
            Datenschutzerklärung
          </a>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zu. *
        </span>
      </label>
      {status === "error" && (
        <p className="text-sm text-red-700">
          Ihre Nachricht konnte leider nicht gesendet werden. Bitte rufen Sie uns an:{" "}
          <a href={site.phoneHref} className="font-medium underline">
            {site.phoneDisplay}
          </a>
        </p>
      )}
      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-xl bg-wine px-6 py-3 font-semibold text-white transition hover:bg-wine-dark disabled:opacity-60"
        >
          {status === "sending" ? "Wird gesendet…" : "Nachricht senden"}
        </button>
      </div>
    </form>
  );
}
