import Footer from "@/components/footer/Footer";
import AboutSection from "@/components/landingPage/AboutSection";
import CommunityLedSection from "@/components/landingPage/CommunityLedSection";
import CommunityActionSection from "@/components/landingPage/CommunityActionSection";
import ProjectsSection from "@/components/landingPage/ProjectsSection";
import PartnersSection from "@/components/landingPage/PartnersSection";
import SupportCtaSection from "@/components/landingPage/SupportCtaSection";
import JoinMissionSection from "@/components/landingPage/JoinMissionSection";
import QuestionsIdeasSection from "@/components/landingPage/QuestionsIdeasSection";

import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/landingPage/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
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
        <PartnersSection />
        <SupportCtaSection />
        <JoinMissionSection />
        <QuestionsIdeasSection />
      </main>
      <Footer />
    </>
  );
}

