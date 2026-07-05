export const site = {
  name: "Gasthof Adler Balzhausen",
  domain: "https://adlerbalzhausen.de",
  phone: "+49 8281 4890",
  phoneDisplay: "+49 (0)8281 4890",
  phoneHref: "tel:+4982814890",
  whatsappHref: "https://wa.me/4982814890",
  email: "info@adlerbalzhausen.de",
  address: {
    street: "St.-Leonhard-Straße 1",
    zip: "86483",
    city: "Balzhausen",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Gasthof+Adler+St.-Leonhard-Stra%C3%9Fe+1+86483+Balzhausen",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Gasthof+Adler,+St.-Leonhard-Stra%C3%9Fe+1,+86483+Balzhausen&output=embed",
};

export const openingHours = [
  { day: "Montag", hours: "Ruhetag (geschlossen)", closed: true },
  { day: "Dienstag", hours: "11:00 – 23:00 Uhr", closed: false },
  { day: "Mittwoch", hours: "Ruhetag (geschlossen)", closed: true },
  { day: "Donnerstag", hours: "11:00 – 23:00 Uhr", closed: false },
  { day: "Freitag", hours: "11:00 – 23:00 Uhr", closed: false },
  { day: "Samstag", hours: "11:00 – 23:00 Uhr", closed: false },
  { day: "Sonntag", hours: "11:00 – 23:00 Uhr", closed: false },
];

export const warmeKueche =
  "Warme Küche: wochentags 18:30 – 22:30 Uhr · Sonntag 11:00 – 22:30 Uhr";

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "Räumlichkeiten",
    href: "#",
    children: [
      { label: "Gaststube", href: "/gaststube" },
      { label: "Saal", href: "/saal" },
      { label: "Bistro Amnesia", href: "/bistro-amnesia" },
      { label: "Kegelbahn", href: "/kegelbahn" },
    ],
  },
  { label: "Speisekarte", href: "/speisekarte" },
  { label: "Aktuelles", href: "/aktuelles" },
  { label: "Galerie", href: "/galerie" },
  { label: "Kontakt", href: "/kontakt" },
];
