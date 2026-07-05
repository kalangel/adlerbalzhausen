export type MenuItem = {
  name: string;
  description?: string;
  price: string;
};

export type MenuSection = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const sonntagSections: MenuSection[] = [
  {
    id: "suppe",
    title: "Suppe",
    items: [{ name: "Brät- und Leberknödelsuppe", price: "6,00 €" }],
  },
  {
    id: "hauptgerichte",
    title: "Hauptgerichte am Sonntag",
    items: [
      { name: "Hirschbraten", description: "Spätzle, Kroketten, Gemüse", price: "19,00 €" },
      { name: "Jägerbraten", description: "Spätzle, Kroketten, Gemüse", price: "15,00 €" },
      {
        name: "Burgunderbraten",
        description: "Pfirsich, Preiselbeeren, Spätzle, Kroketten, Gemüse",
        price: "17,00 €",
      },
      { name: "Gemischter Braten", description: "Spätzle, Kroketten, Gemüse", price: "16,50 €" },
      { name: "Spanferkelbraten", description: "Spätzle, Kroketten, Gemüse", price: "16,50 €" },
      {
        name: "Schweinelendchen",
        description: "frische Champignons, Spätzle, Kroketten, Gemüse",
        price: "18,00 €",
      },
      { name: "Pfeffersteak", description: "Pommes frites, Gemüse", price: "22,50 €" },
      { name: "Zwiebelrostbraten", description: "Pommes frites, Gemüse", price: "22,50 €" },
      { name: "Cordon Bleu", description: "Pommes frites", price: "16,50 €" },
      { name: "Schnitzel „Wiener Art“", description: "Pommes frites", price: "14,50 €" },
      { name: "Pariser Schnitzel", description: "Ananas, Käse, Pommes frites", price: "15,00 €" },
      { name: "Kässpätzle", description: "Röstzwiebeln", price: "11,00 €" },
      { name: "Bunter Salatteller", description: "Hähnchennuggets", price: "5,00 €" },
    ],
  },
  {
    id: "nachtisch",
    title: "Nachtisch",
    items: [
      { name: "Vanilleeis mit heißen Himbeeren und Sahne", price: "6,60 €" },
      { name: "Apfelküchle mit Vanilleeis und Sahne", price: "8,20 €" },
      { name: "Gemischtes Eis mit Sahne", price: "6,20 €" },
    ],
  },
];

export const wochentagsSections: MenuSection[] = [
  {
    id: "wochentags",
    title: "Speisekarte wochentags",
    items: [
      { name: "Pfeffersteak", description: "Pommes frites", price: "22,50 €" },
      { name: "Schnitzel „Wiener Art“", description: "Pommes frites", price: "14,50 €" },
      {
        name: "Pariser Schnitzel",
        description: "Ananas, Käse überbacken, Pommes frites",
        price: "15,00 €",
      },
      { name: "Cordon Bleu", description: "Pommes frites", price: "16,50 €" },
      { name: "Toast „Hawaii“", description: "Schinken, Ananas", price: "10,00 €" },
      { name: "Currywurst", description: "Pommes frites", price: "10,00 €" },
      { name: "Warmer Leberkäse", description: "Ei, Pommes frites", price: "10,50 €" },
      { name: "Pommes frites und Salat", price: "9,50 €" },
      {
        name: "Salatplatte groß",
        description: "Nuggets oder Kartoffeltaschen",
        price: "12,50 €",
      },
      { name: "Bunter Beilagensalat", price: "5,00 €" },
      { name: "Schweizer Wurstsalat mit Brot", price: "9,50 €" },
      { name: "Wurstsalat mit Brot", price: "9,50 €" },
      { name: "Nachtisch – Vanilleeis mit heißen Himbeeren", price: "6,60 €" },
      { name: "Eierlikörbecher mit Sahne", price: "6,60 €" },
      { name: "Gemischtes Eis mit Sahne", price: "6,20 €" },
    ],
  },
];

export const getraenkeSections: MenuSection[] = [
  {
    id: "biere",
    title: "Biere 0,5 l",
    items: [
      { name: "Autenrieder Pils", price: "3,90 €" },
      { name: "Autenrieder Dunkle Weisse", price: "3,90 €" },
      { name: "Autenrieder Leichte Weisse", price: "3,90 €" },
      { name: "Autenrieder Weisse", price: "3,90 €" },
      { name: "Autenrieder Urtyp Hell", price: "3,40 €" },
      { name: "Autenrieder Dunkel", price: "3,90 €" },
      { name: "Riegele Aechtes Dunkel", price: "4,00 €" },
      { name: "Lauterbacher Weizen", price: "4,00 €" },
    ],
  },
  {
    id: "biermisch",
    title: "Biermischgetränke",
    items: [
      { name: "Radler", description: "0,5 l", price: "3,40 €" },
      { name: "Cola-Weizen", description: "0,5 l", price: "3,90 €" },
      { name: "Geißenmaß", description: "1,0 l", price: "9,50 €" },
      { name: "Geißenhalbe", description: "0,5 l", price: "5,00 €" },
    ],
  },
  {
    id: "alkoholfrei",
    title: "Alkoholfreie Getränke",
    items: [
      { name: "Saftschorle süß/sauer", description: "0,5 l", price: "3,90 €" },
      { name: "Spezi", description: "0,5 l", price: "3,40 €" },
      { name: "Fanta", description: "0,25 l", price: "2,50 €" },
      { name: "Coca-Cola", description: "0,5 l", price: "4,00 €" },
      { name: "Zitronen-Limonade", description: "0,5 l", price: "3,40 €" },
      { name: "Überkinger", description: "0,5 l", price: "3,00 €" },
    ],
  },
  {
    id: "saefte",
    title: "Säfte",
    items: [
      { name: "Orangensaft", description: "0,5 l", price: "4,50 €" },
      { name: "Apfelsaft", description: "0,25 l", price: "2,50 €" },
      { name: "Traubensaft", description: "0,25 l", price: "2,50 €" },
      { name: "Orangensaft", description: "0,25 l", price: "2,50 €" },
    ],
  },
  {
    id: "weine-weiss",
    title: "Schoppenweine weiß",
    items: [
      {
        name: "Oberberger Bassgeige „Baden“",
        description: "trocken, 0,25 l",
        price: "5,00 €",
      },
      { name: "Bacchus Kabinett", description: "lieblich, 0,25 l", price: "5,00 €" },
      { name: "Württemberger Wein", description: "halbtrocken, 0,25 l", price: "5,00 €" },
      { name: "Weinschorle süß/sauer", description: "0,5 l", price: "4,50 €" },
    ],
  },
  {
    id: "weine-rot",
    title: "Schoppenweine rot",
    items: [
      {
        name: "Haberschlachter „Württemberger“",
        description: "halbtrocken, 0,25 l",
        price: "5,00 €",
      },
      { name: "Merlot „Frankreich“", description: "trocken, 0,25 l", price: "5,00 €" },
      {
        name: "Spätburgunder Weißherbst „Baden“",
        description: "rosé, 0,25 l",
        price: "5,00 €",
      },
    ],
  },
  {
    id: "sekte",
    title: "Sekte",
    items: [
      { name: "Sekt trocken", description: "0,7 l", price: "18,00 €" },
      { name: "Sekt halbtrocken", description: "0,7 l", price: "17,00 €" },
    ],
  },
];

export const menuHinweis =
  "Speisekarte für Sonntag Mittag mit wechselnden Gerichten, werktags kleinere Speisekarte. Angaben zu evtl. Zusatzstoffen und Allergenen erhalten Sie in unserem Lokal. Alle Preise inkl. Bedienung und MwSt.";
