import Footer from "@/components/footer/Footer";
import AboutSection from "@/components/landingPage/AboutSection";
import CommunityLedSection from "@/components/landingPage/CommunityLedSection";
import CommunityActionSection from "@/components/landingPage/CommunityActionSection";
import ProjectsSection from "@/components/landingPage/ProjectsSection";
import NewsEventsSection from "@/components/landingPage/NewsEventsSection";
import TestimonialsSection from "@/components/landingPage/TestimonialsSection";
import PartnersSection from "@/components/landingPage/PartnersSection";
import SupportCtaSection from "@/components/landingPage/SupportCtaSection";
import JoinMissionSection from "@/components/landingPage/JoinMissionSection";
import NewsletterSection from "@/components/landingPage/NewsletterSection";
import QuestionsIdeasSection from "@/components/landingPage/QuestionsIdeasSection";

import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/landingPage/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | OBEC",
  description: "Learn how OBEC supports community-led sustainability projects and civic engagement across Ottawa.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <CommunityLedSection />
        <CommunityActionSection />
        <ProjectsSection />
        {/* <NewsEventsSection /> */}
        {/* <TestimonialsSection /> */}
        <PartnersSection />
        <SupportCtaSection />
        <JoinMissionSection />
        {/* <NewsletterSection /> */}
        <QuestionsIdeasSection />
      </main>
      <Footer />
    </>
  );
}

