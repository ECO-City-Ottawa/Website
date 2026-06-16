import type { Metadata } from "next";
import EventsPageClient from "./EventsPageClient";

export const metadata: Metadata = {
  title: "Events | OBEC",
  description: "Explore upcoming and past OBEC events, workshops, tours, and community sessions.",
};

export default function EventsPage() {
  return <EventsPageClient />;
}
