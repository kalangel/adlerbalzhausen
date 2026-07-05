import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/gaststube",
    "/saal",
    "/bistro-amnesia",
    "/kegelbahn",
    "/speisekarte",
    "/aktuelles",
    "/galerie",
    "/kontakt",
  ];

  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/aktuelles" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
