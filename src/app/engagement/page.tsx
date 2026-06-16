import type { Metadata } from "next";
import EngagementPageClient from "./EngagementPageClient";

export const metadata: Metadata = {
  title: "Get Involved | OBEC",
  description: "Find volunteer, membership, partnership, and project participation opportunities with OBEC.",
};

export default function EngagementPage() {
  return <EngagementPageClient />;
}
