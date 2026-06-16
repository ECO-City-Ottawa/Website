import type { Metadata } from "next";
import DonatePageClient from "./DonatePageClient";

export const metadata: Metadata = {
  title: "Donate | OBEC",
  description: "Support OBEC's community-led sustainability work and local project development in Ottawa.",
};

export default function DonatePage() {
  return <DonatePageClient />;
}
