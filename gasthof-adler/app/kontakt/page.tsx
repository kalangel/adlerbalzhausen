import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { openingHours, site, warmeKueche } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt & Reservierung",
  description:
    "Kontaktieren Sie den Gasthof Adler Balzhausen: Tisch reservieren, Saal anfragen oder Fragen stellen. St.-Leonhard-Straße 1, 86483 Balzhausen, Tel. +49 (0)8281 4890.",
};

const quickActions = [
  { icon: Phone, label: "Anrufen", href: site.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", href: site.whatsappHref, external: true },
  { icon: MapPin, label: "Route planen", href: site.mapsUrl, external: true },
  { icon: Mail, label: "E-Mail", href: `mailto:${site.email}` },
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        title="Ihr Kontakt zu uns"
        subtitle="Wir freuen uns auf Ihre Anfrage!"
        image="/images/kontakt-bg.jpeg"
        imageAlt="Gasthof Adler Balzhausen"
      />

      <section className="mx-auto max-w-[1200px] px-4 py-16">
        <Reveal>
          <p className="mx-auto max-w-2xl text-center text-lg text-ink/80">
            Haben Sie Fragen zu unserem Restaurant, oder möchten Sie einen Tisch
            reservieren? Kontaktieren Sie uns einfach und bequem über das Kontaktformular –
            wir setzen uns schnellstmöglich mit Ihnen in Verbindung. Oder rufen Sie uns an!
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {quickActions.map((a, i) => (
            <Reveal key={a.label} delay={i * 80}>
              <a
                href={a.href}
                {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <a.icon size={26} className="text-wine" />
                <span className="text-sm font-semibold">{a.label}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div id="reservieren" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold text-wood">
                Nachricht senden / Tisch reservieren
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="text-2xl font-semibold text-wood">So finden Sie uns</h2>
            <address className="mt-4 not-italic leading-relaxed text-ink/80">
              Gasthof Adler · Familie Greiner
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
              <br />
              <a href={site.phoneHref} className="font-medium text-wine hover:underline">
                {site.phoneDisplay}
              </a>
            </address>
            <div className="mt-6">
              <MapEmbed />
            </div>
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
        </div>
      </section>
    </>
  );
}
