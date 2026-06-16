import type { Metadata } from "next";
import BrowseProjectsPageClient from "./BrowseProjectsPageClient";

export const metadata: Metadata = {
  title: "Browse Projects | OBEC",
  description: "Search and filter OBEC sustainability projects across Ottawa and nearby communities.",
};

export default function BrowseProjectsPage() {
  return <BrowseProjectsPageClient />;
}
