import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import AboutHero from "@/components/about/AboutHero";
import OurHistory from "@/components/about/OurHistory";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import Objectives from "@/components/about/Objectives";
import OurApproach from "@/components/about/OurApproach";
import Framework from "@/components/about/Framework";
import WhyItWorks from "@/components/about/WhyItWorks";
import OrgStructure from "@/components/about/OrgStructure";
import OurBoard from "@/components/about/OurBoard";
import Volunteers from "@/components/about/Volunteers";
import JoinMissionCta from "@/components/about/JoinMissionCta";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about EcoCity Ottawa (formerly OBEC), our history since 2009, mission, vision, organizational structure, board of directors, and how you can get involved in local sustainability.',
};

export default function AboutPage() {

  return (
    <>
      <Navbar />
      <main id="main">
        <AboutHero />
        <OurHistory />
        <MissionVisionValues />
        <Objectives />
        <OurApproach />
        <Framework />
        <WhyItWorks />
        <OrgStructure />
        <OurBoard />
        <Volunteers />
        <JoinMissionCta />
      </main>
      <Footer />
    </>
  );
}
