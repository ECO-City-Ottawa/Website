import type { Metadata } from "next";
import PrivacyPageClient from "./PrivacyPageClient";

export const metadata: Metadata = {
  title: "Privacy Policy | OBEC",
  description: "Read OBEC's privacy policy and how privacy information will be published for website visitors.",
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
