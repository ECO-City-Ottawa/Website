import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | OBEC",
  description: "Contact OBEC for partnerships, project ideas, media requests, or general questions.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
