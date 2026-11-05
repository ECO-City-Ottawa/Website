'use client'

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ExploreProjects from "@/components/projects/ExploreProjects";
import ExploreByTheme from "@/components/projects/ExploreByTheme";
import ProjectsUnderConsideration from "@/components/projects/ProjectsUnderConsideration";
import CommunitySustainabilityPlans from "@/components/projects/CommunitySustainabilityPlans";
import JoinMissionCta from "@/components/about/JoinMissionCta";
import ProjectsFaq from "@/components/projects/ProjectsFaq";
import { useLanguage } from "@/context/LanguageContext";
import { renderWithBreaks } from '@/lib/text';

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen pb-20">
        <PageHero
          title={
            <span>{renderWithBreaks(t('projects.hero.title'))}</span>
          }
          description={t('projects.hero.description')}
          buttons={
            <>
              <Link href="/projects/browse" className="bg-brand-green hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm text-center">
                {t('projects.hero.browse')}
              </Link>
              <Link href="/contact" className="border border-white/50 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm text-center">
                {t('projects.hero.submit')}
              </Link>
            </>
          }
          backgroundImage="/homepage/heroBG.png"
        />
        
        <Breadcrumbs items={[
          { label: t('breadcrumbs.home'), href: '/' },
          { label: t('projects.breadcrumbs.projects') }
        ]} />

        <ExploreProjects withPagination />
        <ExploreByTheme />
        <ProjectsUnderConsideration />
        <CommunitySustainabilityPlans />
        
        <JoinMissionCta 
          title={t('projects.cta.title')}
          description={t('projects.cta.description')}
          buttons={[
            { label: t('projects.cta.btn1'), href: "/contact", variant: "primary" },
            { label: t('projects.cta.btn2'), href: "/why-how", variant: "secondary" }
          ]}
        />
        <ProjectsFaq />
      </main>
      <Footer />
    </>
  );
}
