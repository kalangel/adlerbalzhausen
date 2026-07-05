export type Event = {
  date: string; // ISO
  time?: string;
  title: string;
  description?: string;
  image?: string;
};

export const events: Event[] = [
  {
    date: "2026-07-29",
    time: "19:30 Uhr",
    title: "Wirtshaussingen mit Anton, Tila & Rosi",
    description:
      "Mit Waltraud Mair als „Meichelböcks Zenta“ – ein Abend voller Musik und guter Laune im Adlersaal.",
    image: "/images/wirtshaussingen.jpg",
  },
  {
    date: "2026-08-26",
    time: "19:30 Uhr",
    title: "Wirtshaussingen mit Anton, Tila & Rosi",
    description: "Gemeinsam singen, lachen und genießen – im Adlersaal kommt Freude auf!",
    image: "/images/wirtshaussingen.jpg",
  },
  {
    date: "2026-09-30",
    time: "19:30 Uhr",
    title: "Wirtshaussingen – Oktoberfest-Ausgabe",
    description: "Zünftiges Wirtshaussingen im Oktoberfest-Gewand mit Anton, Tila & Rosi.",
    image: "/images/wirtshaussingen.jpg",
  },
  {
    date: "2026-10-28",
    time: "19:30 Uhr",
    title: "Wirtshaussingen mit Anton, Tila & Rosi",
    description: "Der beliebte Sing-Abend im Adlersaal – Plätze rechtzeitig reservieren!",
    image: "/images/wirtshaussingen.jpg",
  },
  {
    date: "2026-11-25",
    time: "19:00 Uhr",
    title: "Wirtshaussingen mit Anton, Tila & Rosi",
    description: "Gemütlicher Sing-Abend im November – wir freuen uns auf Sie.",
    image: "/images/wirtshaussingen.jpg",
  },
  {
    date: "2026-12-16",
    time: "19:00 Uhr",
    title: "Wirtshaussingen – Advent",
    description: "Besinnliches und zünftiges Adventssingen mit Anton, Tila & Rosi.",
    image: "/images/wirtshaussingen.jpg",
  },
];

export function formatDate(iso: string): string {
  return new Date(iso + "T12:00:00").toLocaleDateString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
