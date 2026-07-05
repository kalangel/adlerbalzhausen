import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import CookieConsent from "@/components/CookieConsent";
import { site, openingHours } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Gasthof Adler Balzhausen – Ländliche Gemütlichkeit seit vier Generationen",
    template: "%s | Gasthof Adler Balzhausen",
  },
  description:
    "Traditioneller bayerisch-schwäbischer Gasthof der Familie Greiner in Balzhausen: gutbürgerliche Küche, Saal für bis zu 400 Personen, Bistro Amnesia und Kegelbahn.",
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  servesCuisine: ["Schwäbisch", "Bayerisch", "Gutbürgerlich"],
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.2481,
    longitude: 10.4931,
  },
  url: site.domain,
  openingHoursSpecification: openingHours
    .filter((d) => !d.closed)
    .map((d) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: d.day,
      opens: "11:00",
      closes: "23:00",
    })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <Header />
        <main className="min-h-screen pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileBar />
        <CookieConsent />
      </body>
    </html>
  );
}
