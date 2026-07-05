import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import MenuTabs from "@/components/MenuTabs";

export const metadata: Metadata = {
  title: "Speisekarte – schwäbische Schmankerln aus Küche und Keller",
  description:
    "Die Speisekarte des Gasthof Adler Balzhausen: Pfeffersteak, Zwiebelrostbraten, Kässpätzle und hausgebackene Kuchen – mit Fleisch aus eigener Aufzucht.",
};

export default function SpeisekartePage() {
  return (
    <>
      <PageHero
        title="Unsere Speisekarte"
        subtitle="Aus Küche und Keller"
        image="/images/hero.jpeg"
        imageAlt="Frisch gezapftes Weizenbier an der Theke"
      />

      <section className="mx-auto max-w-[900px] px-4 py-14">
        <Reveal>
          <p className="text-center text-lg leading-relaxed text-ink/80">
            Wir kochen mit erstklassigen Zutaten echte schwäbische Schmankerln. Dazu
            verwenden wir Fleisch von Schwein und Rind{" "}
            <strong className="text-wood">aus eigener Aufzucht</strong>. Alle übrigen
            Produkte kommen aus der heimischen Region. Probieren Sie Pfeffersteak,
            Schweinelendchen oder Zwiebelrostbraten – Sie werden die Frische schmecken! Mit
            feinen Kuchen – natürlich hausgebacken – verwöhnen wir Sie an den Wochenenden.
            Gerne sind wir auch mit unserem Catering-Service für Sie da!
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[900px] px-4 pb-20">
        <MenuTabs />
      </section>
    </>
  );
}
