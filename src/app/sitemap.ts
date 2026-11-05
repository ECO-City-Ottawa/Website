import type { MetadataRoute } from "next";

const baseUrl = "https://obec-evbo.ca";

const routes = [
  "",
  "/about",
  "/contact",
  "/donate",
  "/engagement",
  "/projects",
  "/projects/browse",
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
