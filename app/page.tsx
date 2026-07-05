import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Church, MapPin, Phone, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import MapEmbed from "@/components/MapEmbed";
import { events, formatDate } from "@/lib/events";
import { openingHours, site, warmeKueche } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gasthof Adler Balzhausen – Ländliche Gemütlichkeit seit vier Generationen",
  description:
    "Willkommen im Gasthof Adler in Balzhausen: schwäbische Küche, Saal für bis zu 400 Personen, Bistro Amnesia, Kegelbahn und Hofterrasse. Familie Greiner freut sich auf Sie!",
};

const raeume = [
  {
    title: "Gaststube",
    text: "Gutbürgerliche Küche und schwäbische Spezialitäten in gemütlich rustikaler Atmosphäre.",
    href: "/gaststube",
    image: "/images/galerie/Adler-Gastraum1-1920w.jpg",
  },
  {
    title: "Saal",
    text: "Unser moderner Saal mit Bühne bietet Platz für bis zu 400 Personen – ideal für Hochzeiten und Tagungen.",
    href: "/saal",
    image: "/images/galerie/P5052928Klein-1920w.jpg",
  },
  {
    title: "Bistro Amnesia",
    text: "Das hübsche Kellerlokal für private Feiern – mit professioneller gastronomischer Einrichtung.",
    href: "/bistro-amnesia",
    image: "/images/galerie/amnesia1-1920w.jpg",
  },
  {
    title: "Kegelbahn",
    text: "Zwei gepflegte Bundeskegelbahnen für Ihren nächsten geselligen Kegelabend.",
    href: "/kegelbahn",
    image: "/images/galerie/Adler-kegelbahn-1920w.jpg",
  },
];

export default function Home() {
  const nextEvent = events.find((e) => new Date(e.date) >= new Date()) ?? events[0];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden bg-wood text-center text-cream">
        <Image
          src="/images/galerie/IMG_20200213_113155klein-1920w.jpg"
          alt="Gasthof Adler Balzhausen – Fassade mit St.-Leonhard-Kirche"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wood/90 via-wood/40 to-wood/30" />
        <div className="relative mx-auto max-w-3xl px-4 py-24">
          <p className="mb-4 font-medium uppercase tracking-[0.25em] text-gold">
            Familie Greiner · Balzhausen
          </p>
          <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">
            Gasthof Adler
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream/90 sm:text-xl">
            Ländliche Gemütlichkeit in rustikalem Ambiente – seit vier Generationen
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt#reservieren"
              className="rounded-xl bg-wine px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-wine-dark"
            >
              Tisch reservieren
            </Link>
            <Link
              href="/speisekarte"
              className="rounded-xl border-2 border-cream/80 px-6 py-3 font-semibold text-cream transition hover:bg-cream hover:text-wood"
            >
              Speisekarte ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Über uns */}
      <section className="mx-auto max-w-[1200px] px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-semibold text-wood sm:text-4xl">
              Über uns – „Der Adler“
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-ink/80">
              <p>
                „Der Adler“ blickt auf eine lange Geschichte zurück und wird heute in
                vierter Generation geführt. In unserem traditionsbewussten Gasthof erwartet
                Sie ländliche Gemütlichkeit in rustikalem Ambiente.
              </p>
              <p>
                Für Feierlichkeiten und Tagungen aller Art sind unsere Gaststube und der
                Saal bestens geeignet. Unser großzügiger moderner Saal mit Bühne bietet
                Ihnen Platz für bis zu 400 Personen.
              </p>
              <p>
                Für alle, die gerne im Freien sitzen, empfehlen wir unsere kleine
                Hofterrasse direkt vor dem Haus.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <Image
              src="/images/historie.jpg"
              alt="Der Gasthof Adler in Balzhausen – historisches Haus"
              width={900}
              height={640}
              className="rounded-2xl shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* Wieskirche Highlight */}
      <section className="bg-wood text-cream">
        <div className="mx-auto max-w-[1200px] px-4 py-16">
          <Reveal className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="rounded-full bg-gold/20 p-5 text-gold">
              <Church size={40} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gold">
                Geburtshaus von Abt Hyazinth Gassner
              </h2>
              <p className="mt-2 max-w-2xl text-cream/85">
                Stolz sind wir, dass der Planer der weltberühmten Wieskirche, Abt Hyazinth
                Gassner, in unserem Haus geboren wurde.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Räumlichkeiten */}
      <section className="mx-auto max-w-[1200px] px-4 py-20">
        <Reveal>
          <h2 className="text-center text-3xl font-semibold text-wood sm:text-4xl">
            Unsere Räumlichkeiten
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ink/70">
            Vom gemütlichen Wirtshaus-Abend bis zur Hochzeit mit 400 Gästen – bei uns
            findet jeder Anlass den passenden Rahmen.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {raeume.map((r, i) => (
            <Reveal key={r.href} delay={i * 100}>
              <Link
                href={r.href}
                className="group block overflow-hidden rounded-2xl border border-wood/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-wood">{r.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{r.text}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-wine">
                    Mehr erfahren <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Nächstes Event */}
      <section className="bg-cream-dark">
        <div className="mx-auto max-w-[1200px] px-4 py-20">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold text-wood sm:text-4xl">
              Aktuelle Veranstaltungen
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto mt-10 flex max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-md sm:flex-row">
              {nextEvent.image && (
                <div className="relative aspect-video sm:aspect-auto sm:w-2/5">
                  <Image
                    src={nextEvent.image}
                    alt={nextEvent.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col justify-center p-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-wine">
                  <CalendarDays size={16} />
                  {formatDate(nextEvent.date)}
                  {nextEvent.time ? ` · ${nextEvent.time}` : ""}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-wood">{nextEvent.title}</h3>
                {nextEvent.description && (
                  <p className="mt-2 text-sm text-ink/70">{nextEvent.description}</p>
                )}
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/kontakt#reservieren"
                    className="rounded-xl bg-wine px-4 py-2 text-sm font-semibold text-white hover:bg-wine-dark"
                  >
                    Reservieren
                  </Link>
                  <Link
                    href="/aktuelles"
                    className="rounded-xl border border-wood/20 px-4 py-2 text-sm font-semibold hover:bg-cream"
                  >
                    Alle Veranstaltungen
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Öffnungszeiten + Karte */}
      <section className="mx-auto max-w-[1200px] px-4 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-semibold text-wood">So finden Sie uns</h2>
            <p className="mt-3 flex items-center gap-2 text-ink/80">
              <MapPin size={18} className="text-wine" />
              {site.address.street}, {site.address.zip} {site.address.city}
            </p>
            <p className="mt-1 flex items-center gap-2 text-ink/80">
              <Phone size={18} className="text-wine" />
              <a href={site.phoneHref} className="hover:text-wine">
                {site.phoneDisplay}
              </a>
            </p>
            <h3 className="mt-8 text-xl font-semibold text-wood">Öffnungszeiten</h3>
            <ul className="mt-3 max-w-sm space-y-1 text-sm">
              {openingHours.map((d) => (
                <li key={d.day} className="flex justify-between gap-6">
                  <span>{d.day}</span>
                  <span className={d.closed ? "text-ink/50" : "font-medium"}>{d.hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-ink/60">{warmeKueche}</p>
          </Reveal>
          <Reveal delay={150}>
            <MapEmbed />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-wine text-center text-white">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <Reveal>
            <Users size={36} className="mx-auto text-gold" />
            <h2 className="mt-4 text-3xl font-semibold">
              Fragen Sie nach unseren besonderen Veranstaltungen
            </h2>
            <p className="mt-3 text-white/85">
              Ob Familienfeier, Hochzeit oder Tagung – wir beraten Sie gerne persönlich.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakt"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-wine transition hover:bg-cream"
              >
                Kontakt aufnehmen
              </Link>
              <a
                href={site.phoneHref}
                className="rounded-xl border-2 border-white/80 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
