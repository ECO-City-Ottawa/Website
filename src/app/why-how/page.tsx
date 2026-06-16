import type { Metadata } from "next";
import WhyHowPageClient from "./WhyHowPageClient";

export const metadata: Metadata = {
  title: "Why & How | OBEC",
  description: "Learn OBEC's community sustainability framework, themes, drivers, and engagement tools.",
};

export default function WhyHowPage() {
  return <WhyHowPageClient />;
}
