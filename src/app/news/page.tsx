import type { Metadata } from "next";
import NewsPageClient from "./NewsPageClient";

export const metadata: Metadata = {
  title: "News | OBEC",
  description: "Read OBEC news, updates, and community sustainability stories from Ottawa.",
};

export default function NewsPage() {
  return <NewsPageClient />;
}
