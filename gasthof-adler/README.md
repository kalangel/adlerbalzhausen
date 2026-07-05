# Gasthof Adler Balzhausen

Moderne Website (2026) für den traditionellen bayerisch-schwäbischen Gasthof der
Familie Greiner — Next.js 15 (App Router) + Tailwind CSS 4 + TypeScript.

## Entwicklung

```bash
npm install
npm run dev
```

→ http://localhost:3000

## Produktion / Vercel

Das Projekt ist ohne weitere Konfiguration Vercel-ready:

1. Repository bei GitHub pushen
2. Auf [vercel.com](https://vercel.com) → **Add New Project** → Repo importieren
3. Framework-Preset „Next.js“ wird automatisch erkannt → **Deploy**

Lokaler Produktions-Build:

```bash
npm run build
npm start
```

## Struktur

- `app/` — Seiten (Home, Gaststube, Saal, Bistro Amnesia, Kegelbahn, Speisekarte, Aktuelles, Galerie, Kontakt, Impressum, Datenschutz) + `sitemap.ts`, `robots.ts`
- `components/` — Header, Footer, Galerie mit Lightbox, Formulare, Cookie-Banner, Karte (Click-to-Load, DSGVO)
- `lib/` — Inhalte als Daten: Öffnungszeiten, Speisekarte, Events, Galerie-Bilder
- `public/images/` — optimiert eingebundene Fotos (next/image)

## Inhalte pflegen

- **Events**: `lib/events.ts` — neues Objekt ins Array, fertig
- **Speisekarte / Preise**: `lib/menu.ts`
- **Öffnungszeiten / Telefon / Adresse**: `lib/site.ts`

## Offene Punkte (bewusst vorbereitet, noch zu konfigurieren)

- **Formular-Versand**: `app/api/anfrage/route.ts` validiert (inkl. Honeypot) und loggt
  Anfragen, versendet aber noch keine E-Mail. Anbieter anbinden (z. B. Resend oder SMTP)
  und Zugangsdaten als Umgebungsvariablen hinterlegen.
- **E-Mail-Adresse** in `lib/site.ts` prüfen (`info@adlerbalzhausen.de` ist angenommen).
- **Social-Media-Links** im Footer sind Platzhalter.
- **Geo-Koordinaten** im Schema.org-Markup (`app/layout.tsx`) ggf. präzisieren.
