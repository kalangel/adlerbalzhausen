import type { Metadata } from "next";
import { Beer, ConciergeBell, Refrigerator, UtensilsCrossed } from "lucide-react";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import AnfrageForm from "@/components/AnfrageForm";
import { galleryImages } from "@/lib/gallery";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bistro Amnesia – Kellerlokal für private Feiern mieten",
  description:
    "Mieten Sie das Bistro Amnesia im Gasthof Adler Balzhausen für private Feiern: mit Theke, Kühlschrank und Anrichte – wahlweise mit oder ohne Bewirtung.",
};

const inklusive = [
  { icon: Beer, label: "Theke" },
  { icon: Refrigerator, label: "Kühlschrank" },
  { icon: UtensilsCrossed, label: "Anrichte" },
  { icon: ConciergeBell, label: "Mit oder ohne Bewirtung" },
];

export default function BistroPage() {
  const images = galleryImages.filter((i) => i.category === "Bistro");

  return (
    <>
      <PageHero
        title="Bistro Amnesia"
        subtitle="Feste feiern im Bistro Amnesia"
        image="/images/galerie/amnesia1-1920w.jpg"
        imageAlt="Bistro Amnesia – Kellerlokal mit Theke"
      />

      <section className="mx-auto max-w-[900px] px-4 py-16">
        <Reveal>
          <div className="space-y-4 text-lg leading-relaxed text-ink/80">
            <p>
              Private Feierlichkeiten, Feste oder ein Jubiläum stehen an, doch der Platz in
              den eigenen Räumlichkeiten reicht nicht für alle Gäste? Für diese Situation
              bieten wir Ihnen die Lösung!
            </p>
            <p>
              Mieten Sie doch einfach unser hübsches Kellerlokal{" "}
              <strong className="text-wood">Bistro Amnesia</strong> und Sie haben die ideale
              Location, um sich mit Familie, Freunden und Gästen zu treffen und gemütlich im
              „Privaten“ zu feiern.
            </p>
            <p>
              Das Beste: Durch die professionelle, gastronomische Einrichtung wie Theke,
              Kühlschrank, Anrichte usw. können Sie sich voll und ganz auf Ihren festlichen
              Anlass konzentrieren. Ganz nach Wunsch bieten wir Ihnen mehrere Möglichkeiten
              mit oder ohne Bewirtung.
            </p>
            <p>
              Die Konditionen und freien Termine nennen wir Ihnen gerne bei einem
              persönlichen Gespräch. Sie erreichen uns unter Telefon{" "}
              <a href={site.phoneHref} className="font-semibold text-wine hover:underline">
                {site.phoneDisplay}
              </a>{" "}
              oder über unser Anfrageformular.
            </p>
            <p className="font-display text-2xl text-wine">Ihre Familie Greiner</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-cream-dark">
        <div className="mx-auto max-w-[1200px] px-4 py-14">
          <Reveal>
            <h2 className="mb-8 text-center text-3xl font-semibold text-wood">
              Das ist inklusive
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {inklusive.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
                  <item.icon size={30} className="mx-auto text-wine" />
                  <p className="mt-3 text-sm font-medium">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-16">
        <Reveal>
          <h2 className="mb-8 text-center text-3xl font-semibold text-wood">
            Das Bistro Amnesia
          </h2>
          <Gallery images={images} />
        </Reveal>
      </section>

      <section id="anfrage" className="bg-cream-dark scroll-mt-24">
        <div className="mx-auto max-w-[900px] px-4 py-16">
          <Reveal>
            <h2 className="text-3xl font-semibold text-wood">Bistro anfragen</h2>
            <p className="mt-2 text-ink/70">
              Fragen Sie unverbindlich freie Termine und Konditionen an.
            </p>
            <div className="mt-8">
              <AnfrageForm
                subject="Bistro"
                eventTypes={[
                  "Geburtstag",
                  "Jubiläum",
                  "Familienfeier",
                  "Party",
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
