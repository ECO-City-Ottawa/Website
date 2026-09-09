import type { Metadata } from "next";
import TermsPageClient from "./TermsPageClient";

export const metadata: Metadata = {
  title: "Terms of Use | OBEC",
  description: "Read OBEC's terms of use for website visitors and community participants.",
};

export default function TermsPage() {
  return <TermsPageClient />;
}
