import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { nav, openingHours, site, warmeKueche } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Gaststube", href: "/gaststube" },
  { label: "Saal", href: "/saal" },
  { label: "Bistro Amnesia", href: "/bistro-amnesia" },
  { label: "Kegelbahn", href: "/kegelbahn" },
  { label: "Speisekarte", href: "/speisekarte" },
  { label: "Aktuelles", href: "/aktuelles" },
  { label: "Galerie", href: "/galerie" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-wood text-cream">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-xl text-gold">Gasthof Adler</h3>
          <address className="not-italic leading-relaxed text-cream/80">
            <span className="flex items-start gap-2">
              <MapPin size={18} className="mt-1 shrink-0 text-gold" />
              <span>
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
              </span>
            </span>
            <a
              href={site.phoneHref}
              className="mt-3 flex items-center gap-2 hover:text-gold"
            >
              <Phone size={18} className="text-gold" />
              {site.phoneDisplay}
            </a>
          </address>
        </div>

        <div>
          <h3 className="mb-4 text-xl text-gold">Öffnungszeiten</h3>
          <ul className="space-y-1 text-sm text-cream/80">
            {openingHours.map((d) => (
              <li key={d.day} className="flex justify-between gap-4">
                <span>{d.day}</span>
                <span className={d.closed ? "text-cream/50" : ""}>{d.hours}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-cream/60">{warmeKueche}</p>
        </div>

        <div>
          <h3 className="mb-4 text-xl text-gold">Seiten</h3>
          <ul className="grid grid-cols-2 gap-1 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream/80 hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl text-gold">Folgen Sie uns</h3>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-cream/30 p-2.5 hover:border-gold hover:text-gold"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-cream/30 p-2.5 hover:border-gold hover:text-gold"
            >
              <Instagram size={18} />
            </a>
          </div>
          <p className="mt-6 text-sm text-cream/70">
            Fragen Sie nach unseren besonderen Veranstaltungen!
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-cream/60 sm:flex-row">
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-gold">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-gold">
              Datenschutz
            </Link>
          </div>
          <p>© 2026 Gasthof Adler Balzhausen · Familie Greiner</p>
        </div>
      </div>
    </footer>
  );
}
