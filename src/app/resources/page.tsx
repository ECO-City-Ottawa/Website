import type { Metadata } from "next";
import ResourcesPageClient from "./ResourcesPageClient";

export const metadata: Metadata = {
  title: "Resources | OBEC",
  description: "Find OBEC guides, reports, toolkits, and sustainability resources for community action.",
};

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}
