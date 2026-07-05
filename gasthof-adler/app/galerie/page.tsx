import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import { galleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Galerie – Einblicke in den Gasthof Adler",
  description:
    "Bilder aus dem Gasthof Adler Balzhausen: Gaststube, Adlersaal, festliche Feiern, Bistro Amnesia und Kegelbahn.",
};

export default function GaleriePage() {
  return (
    <>
      <PageHero
        title="Galerie"
        subtitle="Einblicke in unser Haus – von der Gaststube bis zum Festsaal"
        image="/images/galerie/DSC_7628Klein-1920w.jpg"
        imageAlt="Festlich gedeckte Tafel im Adlersaal"
      />
      <section className="mx-auto max-w-[1200px] px-4 py-16">
        <Gallery images={galleryImages} withFilter />
      </section>
    </>
  );
}
