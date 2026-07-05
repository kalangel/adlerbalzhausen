import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Info } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { events, formatDate } from "@/lib/events";

export const metadata: Metadata = {
  title: "Aktuelles & Events – Veranstaltungen im Adlersaal",
  description:
    "Aktuelle Veranstaltungen im Gasthof Adler Balzhausen: Wirtshaussingen mit Anton, Tila & Rosi und mehr. Im Adlersaal kommt Freude auf – jetzt Platz reservieren!",
};

export default function AktuellesPage() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const upcoming = events.filter((e) => new Date(e.date + "T23:59:59") >= now);
  const past = events.filter((e) => new Date(e.date + "T23:59:59") < now);

  return (
    <>
      <PageHero
        title="Aktuelles und Events"
        subtitle="Im Adlersaal kommt Freude auf!"
        image="/images/wirtshaussingen.jpg"
        imageAlt="Wirtshaussingen im Adlersaal"
      />

      <section className="mx-auto max-w-[1000px] px-4 py-16">
        <Reveal>
          <h2 className="mb-8 text-3xl font-semibold text-wood">
            Kommende Veranstaltungen
          </h2>
        </Reveal>
        <div className="space-y-6">
          {upcoming.map((event, i) => (
            <Reveal key={event.date} delay={Math.min(i * 80, 240)}>
              <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md sm:flex-row">
                {event.image && (
                  <div className="relative aspect-video shrink-0 sm:aspect-auto sm:w-64">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 256px"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-center p-6">
                  <p className="flex items-center gap-2 text-sm font-semibold text-wine">
                    <CalendarDays size={16} />
                    {formatDate(event.date)}
                    {event.time ? ` · ${event.time}` : ""}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-wood">{event.title}</h3>
                  {event.description && (
                    <p className="mt-2 text-sm text-ink/70">{event.description}</p>
                  )}
                  <div className="mt-4">
                    <Link
                      href="/kontakt#reservieren"
                      className="inline-block rounded-xl bg-wine px-4 py-2 text-sm font-semibold text-white hover:bg-wine-dark"
                    >
                      Reservieren
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
          {upcoming.length === 0 && (
            <p className="rounded-2xl bg-white p-6 text-ink/70">
              Aktuell sind keine Veranstaltungen geplant – schauen Sie bald wieder vorbei!
            </p>
          )}
        </div>

        {past.length > 0 && (
          <>
            <Reveal>
              <h2 className="mb-6 mt-16 text-2xl font-semibold text-wood/70">
                Vergangene Veranstaltungen
              </h2>
            </Reveal>
            <div className="space-y-3">
              {past.map((event) => (
                <div
                  key={event.date}
                  className="rounded-xl bg-white/60 px-5 py-3 text-sm text-ink/60"
                >
                  {formatDate(event.date)} – {event.title}
                </div>
              ))}
            </div>
          </>
        )}

        <Reveal>
          <p className="mt-14 flex items-start gap-3 rounded-2xl bg-cream-dark p-5 text-sm text-ink/70">
            <Info size={18} className="mt-0.5 shrink-0 text-wine" />
            Montag und Mittwoch ist Ruhetag. Dienstag, Donnerstag, Freitag, Samstag und
            Sonntag sind wir ab 11 Uhr für Sie da.
          </p>
        </Reveal>
      </section>
    </>
  );
}
