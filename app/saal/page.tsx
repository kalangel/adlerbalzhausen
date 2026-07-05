import type { Metadata } from "next";
import { Armchair, Presentation, UtensilsCrossed } from "lucide-react";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import AnfrageForm from "@/components/AnfrageForm";
import { galleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Saal mit Bühne – Platz für bis zu 400 Personen",
  description:
    "Der große Adlersaal in Balzhausen: variabel für 50 bis 400 Personen, mit Bühne – ideal für Hochzeiten, Tagungen, Vereinsfeiern und private Feste. Jetzt anfragen!",
};

const facts = [
  { value: "400", label: "Gäste maximal" },
  { value: "50–400", label: "variable Bestuhlung" },
  { value: "Bühne", label: "für Musik & Programm" },
];

const bestuhlung = [
  {
    icon: UtensilsCrossed,
    title: "Bankett",
    text: "Festlich gedeckte Tafeln für Hochzeiten, Jubiläen und Familienfeiern.",
  },
  {
    icon: Armchair,
    title: "Theater",
    text: "Reihenbestuhlung mit Blick zur Bühne – ideal für Konzerte und Vorträge.",
  },
  {
    icon: Presentation,
    title: "Konferenz",
    text: "Tagungsbestuhlung mit viel Platz für produktive Veranstaltungen.",
  },
];

export default function SaalPage() {
  const images = galleryImages.filter(
    (i) => i.category === "Saal" || i.category === "Feiern"
  );

  return (
    <>
      <PageHero
        title="Unser Saal"
        subtitle="Unser großer Saal mit Bühne"
        image="/images/galerie/P5052928Klein-1920w.jpg"
        imageAlt="Der große Adlersaal, festlich eingedeckt"
      />

      <section className="mx-auto max-w-[900px] px-4 py-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-ink/80">
            Unser großer Saal mit Bühne ist bestens für{" "}
            <strong className="text-wood">
              Hochzeiten, Tagungen, Veranstaltungen und private Feierlichkeiten
            </strong>{" "}
            und Anlässe aller Art geeignet. Der Saal ist variabel einsetzbar und bietet
            Platz von 50 bis 400 Personen – ganz wie Sie es wünschen.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-3 gap-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 100}>
              <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
                <p className="font-display text-3xl font-semibold text-wine sm:text-4xl">
                  {f.value}
                </p>
                <p className="mt-1 text-xs text-ink/60 sm:text-sm">{f.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-dark">
        <div className="mx-auto max-w-[1200px] px-4 py-16">
          <Reveal>
            <h2 className="mb-10 text-center text-3xl font-semibold text-wood">
              Bestuhlungsvarianten
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {bestuhlung.map((b, i) => (
              <Reveal key={b.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-white p-6 text-center shadow-sm">
                  <b.icon size={32} className="mx-auto text-wine" />
                  <h3 className="mt-4 text-xl font-semibold text-wood">{b.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-16">
        <Reveal>
          <h2 className="mb-8 text-center text-3xl font-semibold text-wood">
            Feiern im Adlersaal
          </h2>
          <Gallery images={images} />
        </Reveal>
      </section>

      <section id="anfrage" className="bg-cream-dark scroll-mt-24">
        <div className="mx-auto max-w-[900px] px-4 py-16">
          <Reveal>
            <h2 className="text-3xl font-semibold text-wood">Anfrage für Ihre Feier</h2>
            <p className="mt-2 text-ink/70">
              Erzählen Sie uns von Ihrer Veranstaltung – wir melden uns mit einem
              unverbindlichen Angebot.
            </p>
            <div className="mt-8">
              <AnfrageForm
                subject="Saal"
                eventTypes={[
                  "Hochzeit",
                  "Geburtstag / Jubiläum",
                  "Tagung / Konferenz",
                  "Vereinsfeier",
                  "Sonstiges",
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
