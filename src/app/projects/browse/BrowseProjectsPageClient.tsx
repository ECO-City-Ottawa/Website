'use client'

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ExploreProjects from "@/components/projects/ExploreProjects";
import JoinMissionCta from "@/components/about/JoinMissionCta";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function BrowseProjectsPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen pb-20">
        <PageHero
          title={t('projects.browse.heroTitle')}
          description={t('projects.browse.heroDescription')}
          buttons={
            <>
              <Link href="/contact" className="bg-brand-green hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm text-center">
                {t('projects.browse.submit')}
              </Link>
              <Link href="/contact" className="border border-white/50 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm text-center">
                {t('projects.browse.contact')}
              </Link>
            </>
          }
          backgroundImage="/homepage/heroBG.png"
        />
        
        <Breadcrumbs items={[
          { label: t('breadcrumbs.home'), href: '/' },
          { label: t('projects.breadcrumbs.projects'), href: '/projects' },
          { label: t('projects.breadcrumbs.browse') }
        ]} />
        
        <ExploreProjects title={t('projects.browse.heroTitle')} withPagination={true} />

        <JoinMissionCta 
          title={t('projects.cta.title')}
          description={t('projects.cta.description')}
          buttons={[
            { label: t('projects.cta.btn1'), href: "/contact", variant: "primary" },
            { label: t('projects.cta.btn2'), href: "/contact", variant: "secondary" }
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
