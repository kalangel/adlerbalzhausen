import Link from "next/link";
import { CalendarCheck, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-wood/10 bg-white/95 backdrop-blur md:hidden">
      <a
        href={site.phoneHref}
        className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-medium text-wood"
      >
        <Phone size={20} className="text-wine" />
        Anrufen
      </a>
      <Link
        href="/kontakt#reservieren"
        className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-medium text-wood"
      >
        <CalendarCheck size={20} className="text-wine" />
        Reservieren
      </Link>
      <a
        href={site.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-medium text-wood"
      >
        <MapPin size={20} className="text-wine" />
        Route
      </a>
    </div>
  );
}
