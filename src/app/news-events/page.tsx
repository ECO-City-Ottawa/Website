import type { Metadata } from "next";
import NewsEventsPageClient from "./NewsEventsPageClient";

export const metadata: Metadata = {
  title: "News & Events | OBEC",
  description: "Browse OBEC news, events, calendar listings, and community updates in one place.",
};

export default function NewsEventsPage() {
  return <NewsEventsPageClient />;
}
