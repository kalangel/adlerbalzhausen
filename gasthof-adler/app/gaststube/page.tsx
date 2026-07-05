import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import { galleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gaststube – gutbürgerliche & schwäbische Küche",
  description:
    "Die gemütliche Gaststube im Gasthof Adler Balzhausen: schwäbische Spezialitäten, saisonale Leckerbissen aus der Region und gepflegte Getränke.",
};

export default function GaststubePage() {
  const images = galleryImages.filter((i) => i.category === "Gaststube");

  return (
    <>
      <PageHero
        title="Gaststube im Gasthof Adler Balzhausen"
        subtitle="„da gehen wir hin..“"
        image="/images/galerie/Adler-Gastraum1-1920w.jpg"
        imageAlt="Gemütliche Gaststube im Gasthof Adler"
      />

      <section className="mx-auto max-w-[900px] px-4 py-16">
        <Reveal>
          <div className="space-y-4 text-lg leading-relaxed text-ink/80">
            <p>
              Freuen Sie sich in gemütlich rustikaler Atmosphäre auf unsere{" "}
              <strong className="text-wood">gutbürgerliche Küche</strong>. Zu unserem
              Angebot gehören <strong className="text-wood">schwäbische Spezialitäten</strong>{" "}
              genauso wie weitere saisonale Leckerbissen aus der Region.
            </p>
            <p>
              Unser freundlicher Service und gepflegte Getränke aus Keller und Kühlschrank
              lassen keine Wünsche offen. Nehmen Sie sich eine kleine Auszeit und schauen
              Sie doch mal bei uns vorbei! Wir freuen uns auf Ihren Besuch.
            </p>
            <p className="font-display text-2xl text-wine">Ihre Familie Greiner</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/speisekarte"
              className="rounded-xl bg-wine px-6 py-3 font-semibold text-white transition hover:bg-wine-dark"
            >
              Zur Speisekarte
            </Link>
            <Link
              href="/kontakt#reservieren"
              className="rounded-xl border-2 border-wine px-6 py-3 font-semibold text-wine transition hover:bg-wine hover:text-white"
            >
              Tisch reservieren
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 pb-20">
        <Reveal>
          <h2 className="mb-8 text-center text-3xl font-semibold text-wood">
            Einblicke in unsere Gaststube
          </h2>
          <Gallery images={images} />
        </Reveal>
      </section>
    </>
  );
}
