"use client";

import { useState } from "react";
import { Printer } from "lucide-react";
import {
  getraenkeSections,
  menuHinweis,
  sonntagSections,
  wochentagsSections,
  type MenuSection,
} from "@/lib/menu";

function Section({ section }: { section: MenuSection }) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <h2 className="mb-5 border-b-2 border-gold/50 pb-2 text-2xl font-semibold text-wood">
        {section.title}
      </h2>
      <ul className="space-y-3">
        {section.items.map((item, i) => (
          <li key={`${item.name}-${i}`} className="flex items-baseline justify-between gap-4">
            <div>
              <span className="font-medium">{item.name}</span>
              {item.description && (
                <span className="block text-sm text-ink/60">{item.description}</span>
              )}
            </div>
            <span className="shrink-0 font-semibold text-wine">{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function MenuTabs() {
  const [tab, setTab] = useState<"sonntag" | "wochentags">("sonntag");
  const sections = tab === "sonntag" ? sonntagSections : wochentagsSections;
  const anchors = [...sections, ...getraenkeSections];

  return (
    <div>
      <div className="no-print mb-8 flex flex-wrap items-center justify-center gap-3">
        <div className="inline-flex rounded-xl border border-wood/20 bg-white p-1">
          <button
            onClick={() => setTab("sonntag")}
            className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${
              tab === "sonntag" ? "bg-wine text-white" : "hover:bg-cream"
            }`}
          >
            Sonntag
          </button>
          <button
            onClick={() => setTab("wochentags")}
            className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${
              tab === "wochentags" ? "bg-wine text-white" : "hover:bg-cream"
            }`}
          >
            Wochentags
          </button>
        </div>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-xl border border-wood/20 bg-white px-4 py-2 text-sm font-semibold hover:bg-cream"
        >
          <Printer size={16} />
          Speisekarte als PDF
        </button>
      </div>

      <nav
        className="no-print mb-10 flex flex-wrap justify-center gap-2 text-sm"
        aria-label="Speisekarten-Navigation"
      >
        {anchors.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-wood/15 px-3 py-1 text-ink/70 hover:border-wine hover:text-wine"
          >
            {s.title}
          </a>
        ))}
      </nav>

      <div className="space-y-12">
        {sections.map((s) => (
          <Section key={s.id} section={s} />
        ))}
        {getraenkeSections.map((s) => (
          <Section key={s.id} section={s} />
        ))}
      </div>

      <p className="mt-12 rounded-2xl bg-cream-dark p-5 text-sm text-ink/70">{menuHinweis}</p>
    </div>
  );
}
