'use client'

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import WhyHowHero from "@/components/whyHow/WhyHowHero";
import WhyAndHowSplit from "@/components/whyHow/WhyAndHowSplit";
import TenThemes from "@/components/whyHow/TenThemes";
import DriversOfChange from "@/components/whyHow/DriversOfChange";
import JoinMissionCta from "@/components/about/JoinMissionCta";
import ToolsOfEngagementSection from "@/components/whyHow/ToolsOfEngagementSection";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyHowPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main id="main">
        <WhyHowHero />
        <WhyAndHowSplit />
        <TenThemes />
        <DriversOfChange />
        <ToolsOfEngagementSection />
        <JoinMissionCta 
          title={t('whyHow.cta.title')}
          description={t('whyHow.cta.description')}
          buttons={[
            { label: t('whyHow.cta.btn1'), href: '/projects/browse', variant: 'primary' },
            { label: t('whyHow.cta.btn2'), href: '/donate', variant: 'secondary' }
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
