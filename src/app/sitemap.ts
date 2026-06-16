import type { MetadataRoute } from "next";

const baseUrl = "https://obec-evbo.ca";

const routes = [
  "",
  "/about",
  "/contact",
  "/donate",
  "/engagement",
  "/events",
  "/news",
  "/news-events",
  "/projects",
  "/projects/browse",
  "/resources",
  "/why-how",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));
}
