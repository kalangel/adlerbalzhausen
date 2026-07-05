import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum des Gasthof Adler Balzhausen, Familie Greiner.",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-[800px] px-4 py-16">
      <h1 className="text-4xl font-semibold text-wood">Impressum</h1>
      <div className="prose mt-8 space-y-6 leading-relaxed text-ink/80">
        <div>
          <h2 className="text-xl font-semibold text-wood">Angaben gemäß § 5 TMG</h2>
          <p className="mt-2">
            Gasthof Adler
            <br />
            Familie Greiner
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-wood">Kontakt</h2>
          <p className="mt-2">
            Telefon: {site.phoneDisplay}
            <br />
            E-Mail: {site.email}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-wood">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="mt-2">
            Familie Greiner, {site.address.street}, {site.address.zip} {site.address.city}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-wood">Haftung für Inhalte</h2>
          <p className="mt-2">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
            Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-wood">Haftung für Links</h2>
          <p className="mt-2">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
            keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
            Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
            jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </div>
      </div>
    </section>
  );
}
