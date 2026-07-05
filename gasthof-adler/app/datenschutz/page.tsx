import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung des Gasthof Adler Balzhausen.",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-[800px] px-4 py-16">
      <h1 className="text-4xl font-semibold text-wood">Datenschutzerklärung</h1>
      <div className="mt-8 space-y-6 leading-relaxed text-ink/80">
        <div>
          <h2 className="text-xl font-semibold text-wood">1. Verantwortlicher</h2>
          <p className="mt-2">
            Gasthof Adler, Familie Greiner, {site.address.street}, {site.address.zip}{" "}
            {site.address.city}, Telefon: {site.phoneDisplay}, E-Mail: {site.email}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-wood">
            2. Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p className="mt-2">
            Beim Besuch dieser Website werden durch den Hosting-Anbieter automatisch
            Informationen in sogenannten Server-Log-Dateien gespeichert (z. B. IP-Adresse,
            Datum und Uhrzeit der Anfrage, Browsertyp). Diese Daten dienen der
            Sicherstellung eines störungsfreien Betriebs und werden nicht mit anderen
            Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-wood">3. Kontaktformular</h2>
          <p className="mt-2">
            Wenn Sie uns über das Kontakt- oder Anfrageformular Anfragen zukommen lassen,
            werden Ihre Angaben (Name, E-Mail-Adresse, ggf. Telefonnummer und Nachricht)
            zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
            gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-wood">4. Cookies</h2>
          <p className="mt-2">
            Diese Website verwendet ausschließlich technisch notwendige Cookies bzw.
            lokale Speicherung (z. B. für Ihre Cookie-Einstellung). Es findet kein
            Tracking zu Werbezwecken statt.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-wood">5. Google Maps</h2>
          <p className="mt-2">
            Auf dieser Website ist eine Karte von Google Maps eingebunden. Die Karte wird
            erst geladen, nachdem Sie aktiv auf „Karte laden“ geklickt haben. Erst dann
            werden Daten (u. a. Ihre IP-Adresse) an Google übertragen. Anbieter ist Google
            Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Weitere
            Informationen finden Sie in der Datenschutzerklärung von Google:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-wine underline"
            >
              policies.google.com/privacy
            </a>
            .
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-wood">6. Ihre Rechte</h2>
          <p className="mt-2">
            Sie haben jederzeit das Recht auf Auskunft über Ihre bei uns gespeicherten
            personenbezogenen Daten sowie das Recht auf Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch (Art.
            15–21 DSGVO). Zudem steht Ihnen ein Beschwerderecht bei der zuständigen
            Aufsichtsbehörde zu.
          </p>
        </div>
      </div>
    </section>
  );
}
