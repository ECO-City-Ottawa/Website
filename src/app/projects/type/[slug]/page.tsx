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

const TYPES_MAP: Record<string, string> = {
  "pal": "PAL",
  "csp": "CSP",
  "tours": "Tours",
  "pop-up": "Pop-Up",
  "discussion-game": "Discussion Game",
};

const HERO_TITLES_EN: Record<string, string> = {
  "PAL": "Public Action Labs (PAL)",
  "CSP": "Community Sustainability Plans (CSP)",
  "Tours": "Sustainability Tours",
  "Pop-Up": "Pop-Up Events",
  "Discussion Game": "Interactive Discussion Games",
};

const HERO_TITLES_FR: Record<string, string> = {
  "PAL": "Labos d’action publique (PAL)",
  "CSP": "Plans de durabilité communautaire (CSP)",
  "Tours": "Visites de durabilité",
  "Pop-Up": "Événements éphémères",
  "Discussion Game": "Jeux de discussion interactifs",
};

const HERO_DESCRIPTIONS_EN: Record<string, string> = {
  "PAL": "Place-based action labs connecting residents to local sustainability efforts.",
  "CSP": "Neighbourhood/school/group plans that lead to real outcomes.",
  "Tours": "Guided experiences to explore sustainable sites and practices.",
  "Pop-Up": "Temporary events that spark engagement and local action.",
  "Discussion Game": "Interactive games that spark collective decisions.",
};

const HERO_DESCRIPTIONS_FR: Record<string, string> = {
  "PAL": "Labos d'action locaux reliant les résidents aux efforts locaux de durabilité.",
  "CSP": "Plans de quartier, d'école ou de groupe qui mènent à des résultats réels.",
  "Tours": "Expériences guidées pour explorer les sites et pratiques durables.",
  "Pop-Up": "Événements temporaires qui suscitent l'engagement et l'action locale.",
  "Discussion Game": "Jeux interactifs qui suscitent des décisions collectives.",
};

export default function TypeProjectsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { t, language } = useLanguage();

  const displayTitle = TYPES_MAP[slug.toLowerCase()] ?? slug;
  
  const heroTitle = language === 'fr' 
    ? (HERO_TITLES_FR[displayTitle] ?? displayTitle)
    : (HERO_TITLES_EN[displayTitle] ?? displayTitle);

  const heroDescription = language === 'fr'
    ? (HERO_DESCRIPTIONS_FR[displayTitle] ?? "Explorez les projets de ce type.")
    : (HERO_DESCRIPTIONS_EN[displayTitle] ?? "Explore projects by this type.");

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white pb-20">
        <PageHero
          title={heroTitle}
          description={heroDescription}
          buttons={
            <>
              <Link
                href="/contact"
                className="bg-brand-green hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm text-center"
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
            { label: language === 'fr' ? 'Parcourir par type' : 'Browse by Type' },
            { label: displayTitle },
          ]}
        />

        <ProjectsTabs category="type" activeValue={slug} />

        <ExploreProjects
          title={`${heroTitle} - ${t('projects.breadcrumbs.projects')}`}
          initialType={displayTitle}
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
