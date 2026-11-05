'use client'

import React, { use } from 'react';
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ExploreProjects from "@/components/projects/ExploreProjects";
import JoinMissionCta from "@/components/about/JoinMissionCta";
import ProjectsTabs from "@/components/projects/ProjectsTabs";
import Link from "next/link";
import { THEMES } from "@/data/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function ThemeProjectsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { t } = useLanguage();

  // Match slug (e.g. "sense-of-place") back to title (e.g. "Sense of Place")
  const matchedTheme = THEMES.find(
    (t) => t.title.toLowerCase().replace(/\s+/g, "-") === slug
  );
  const originalTitle = matchedTheme ? matchedTheme.title : slug.replace(/-/g, " ");

  const getLocalizedTheme = (themeTitle: string) => {
    switch (themeTitle.toLowerCase()) {
      case 'transportation': return t('tenThemes.theme1.title');
      case 'energy': return t('tenThemes.theme2.title');
      case 'design': return t('tenThemes.theme3.title');
      case 'habitat': return t('tenThemes.theme4.title');
      case 'recreation': return t('tenThemes.theme5.title');
      case 'food': return t('tenThemes.theme6.title');
      case 'natural capital': return t('tenThemes.theme7.title');
      case 'waste': return t('tenThemes.theme8.title');
      case 'health': return t('tenThemes.theme9.title');
      case 'sense of place': return t('tenThemes.theme10.title');
      default: return themeTitle;
    }
  };

  const displayTitle = getLocalizedTheme(originalTitle);

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white pb-20">
        <PageHero
          title={displayTitle}
          description={
            t('projects.theme.heroDesc').replace('{theme}', displayTitle)
          }
          buttons={
            <>
              <Link
                href="/contact"
                className="bg-[#2D7A5D] hover:bg-[#24634b] text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm text-center"
              >
                {t('projects.browse.submit')}
              </Link>
              <Link
                href="/contact"
                className="border border-white/50 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm text-center"
              >
                {t('projects.browse.contact')}
              </Link>
            </>
          }
          backgroundImage="/homepage/heroBG.png"
        />

        <Breadcrumbs
          items={[
            { label: t('breadcrumbs.home'), href: "/" },
            { label: t('projects.breadcrumbs.projects'), href: "/projects" },
            { label: t('projects.theme.browseByTheme') },
            { label: displayTitle },
          ]}
        />

        <ProjectsTabs category="theme" activeValue={slug} />

        <ExploreProjects
          title={`${displayTitle} - ${t('projects.breadcrumbs.projects')}`}
          initialTheme={originalTitle}
          withPagination={true}
        />

        <JoinMissionCta
          title={t('projects.cta.title')}
          description={t('projects.cta.description')}
          buttons={[
            { label: t('projects.cta.btn1'), href: "/contact", variant: "primary" },
            { label: t('projects.cta.btn2'), href: "/contact", variant: "secondary" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
