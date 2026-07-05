"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-wood/10 transition-all ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 transition-all ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <Link href="/" className="flex items-center gap-3" aria-label="Zur Startseite">
          <Image
            src="/images/logo.webp"
            alt="Gasthof Adler Logo"
            width={scrolled ? 44 : 56}
            height={scrolled ? 44 : 56}
            className="rounded-full bg-white p-1 shadow-sm transition-all"
          />
          <span className="hidden font-display text-lg font-semibold text-wood sm:block">
            Gasthof Adler
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium hover:bg-cream-dark"
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown size={14} />
                </button>
                <div className="invisible absolute left-0 top-full min-w-48 rounded-xl border border-wood/10 bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block rounded-lg px-3 py-2 text-sm hover:bg-cream ${
                        pathname === child.href ? "font-semibold text-wine" : ""
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium hover:bg-cream-dark ${
                  pathname === item.href ? "text-wine" : ""
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-wood hover:text-wine"
          >
            <Phone size={16} />
            {site.phoneDisplay}
          </a>
          <Link
            href="/kontakt#reservieren"
            className="rounded-xl bg-wine px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-wine-dark"
          >
            Tisch reservieren
          </Link>
        </div>

        <button
          className="rounded-lg p-2 hover:bg-cream-dark lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-wood/10 bg-cream px-4 pb-6 pt-2 lg:hidden"
          aria-label="Mobile Navigation"
        >
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="py-1">
                <span className="block px-2 py-2 text-xs font-semibold uppercase tracking-wide text-wood/60">
                  {item.label}
                </span>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block rounded-lg px-4 py-2 font-medium hover:bg-cream-dark"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-2 py-2 font-medium hover:bg-cream-dark"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/kontakt#reservieren"
            className="mt-3 block rounded-xl bg-wine px-4 py-3 text-center font-semibold text-white"
          >
            Tisch reservieren
          </Link>
        </nav>
      )}
    </header>
  );
}
