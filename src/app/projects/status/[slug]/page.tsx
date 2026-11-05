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
import { useLanguage } from "@/context/LanguageContext";

// Maps URL slug → filter value (used for ExploreProjects initialStatus)
const STATUS_FILTER_MAP: Record<string, string> = {
  "past": "past",
  "current": "current",
  "under-consideration": "under consideration",
};

// Maps URL slug → display label
const STATUS_DISPLAY_MAP_EN: Record<string, string> = {
  "past": "Past",
  "current": "Current",
  "under-consideration": "Under Consideration",
};

const STATUS_DISPLAY_MAP_FR: Record<string, string> = {
  "past": "Passé",
  "current": "En cours",
  "under-consideration": "À l’étude",
};

const STATUS_DESCRIPTIONS_EN: Record<string, string> = {
  "past": "Completed community projects that have made a lasting impact.",
  "current": "Active or recently launched community-led projects.",
  "under-consideration": "Proposed projects currently being evaluated by the community.",
};

const STATUS_DESCRIPTIONS_FR: Record<string, string> = {
  "past": "Projets communautaires complétés qui ont un impact durable.",
  "current": "Projets menés par la communauté actifs ou récemment lancés.",
  "under-consideration": "Projets proposés en cours d'évaluation par la communauté.",
};

export default function StatusProjectsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { t, language } = useLanguage();

  const statusValue = STATUS_FILTER_MAP[slug.toLowerCase()] ?? slug;
  
  const displayTitle = language === 'fr'
    ? (STATUS_DISPLAY_MAP_FR[slug.toLowerCase()] ?? slug.replace(/-/g, " "))
    : (STATUS_DISPLAY_MAP_EN[slug.toLowerCase()] ?? slug.replace(/-/g, " "));

  const description = language === 'fr'
    ? (STATUS_DESCRIPTIONS_FR[slug.toLowerCase()] ?? "Explorez les projets par statut.")
    : (STATUS_DESCRIPTIONS_EN[slug.toLowerCase()] ?? "Explore projects by status.");

  const pageHeroTitle = language === 'fr'
    ? `Projets — ${displayTitle}`
    : `${displayTitle} projects`;

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white pb-20">
        <PageHero
          title={pageHeroTitle}
          description={description}
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
            { label: language === 'fr' ? 'Parcourir par statut' : 'Browse by Status' },
            { label: displayTitle },
          ]}
        />

        <ProjectsTabs category="status" activeValue={slug} />

        <ExploreProjects
          title={`${pageHeroTitle} - ${t('projects.breadcrumbs.projects')}`}
          initialStatus={statusValue}
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
