import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import AnfrageForm from "@/components/AnfrageForm";
import { galleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Kegelbahn – 2 Bundeskegelbahnen im Haus",
  description:
    "Zwei gut präparierte Bundeskegelbahnen im Gasthof Adler Balzhausen: Jetzt Kegelabend buchen und mit Freunden oder dem Verein einen geselligen Abend verbringen.",
};

export default function KegelbahnPage() {
  const images = galleryImages.filter((i) => i.category === "Kegelbahn");

  return (
    <>
      <PageHero
        title="Unsere hauseigene Kegelbahn"
        subtitle="Bundeskegelbahn"
        image="/images/galerie/Adler-kegelbahn-1920w.jpg"
        imageAlt="Bundeskegelbahn im Gasthof Adler"
      />

      <section className="mx-auto max-w-[900px] px-4 py-16">
        <Reveal>
          <div className="space-y-4 text-lg leading-relaxed text-ink/80">
            <p>
              Für unsere sportlichen Gäste bieten wir{" "}
              <strong className="text-wood">
                2 gut präparierte und gepflegte Bundeskegelbahnen
              </strong>
              . Gute Laune, verbunden mit sportlicher Betätigung, war schon immer die Basis
              für einen lustigen, unterhaltsamen Kegelabend.
            </p>
            <p>
              Vereinbaren Sie doch gleich heute Ihren nächsten Kegeltreff! Wir freuen uns
              auf Ihren Besuch.
            </p>
            <p className="font-display text-2xl text-wine">„auf geht’s“</p>
          </div>
        </Reveal>
        <div className="mt-10 grid max-w-md grid-cols-2 gap-4">
          <Reveal>
            <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
              <p className="font-display text-4xl font-semibold text-wine">2</p>
              <p className="mt-1 text-sm text-ink/60">Bundeskegelbahnen</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
              <p className="font-display text-4xl font-semibold text-wine">Top</p>
              <p className="mt-1 text-sm text-ink/60">präpariert & gepflegt</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 pb-16">
        <Reveal>
          <Gallery images={images} />
        </Reveal>
      </section>

      <section id="anfrage" className="bg-cream-dark scroll-mt-24">
        <div className="mx-auto max-w-[900px] px-4 py-16">
          <Reveal>
            <h2 className="text-3xl font-semibold text-wood">Kegelabend buchen</h2>
            <p className="mt-2 text-ink/70">
              Reservieren Sie Ihre Bahn – wir bestätigen Ihnen den Termin persönlich.
            </p>
            <div className="mt-8">
              <AnfrageForm subject="Kegelbahn" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
