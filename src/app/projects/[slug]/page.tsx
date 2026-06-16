'use client'

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import JoinMissionCta from '@/components/about/JoinMissionCta';
import ProjectCard from '@/components/projects/ProjectCard';
import { mockProjects } from '@/data/mockData';
import { useLanguage } from '@/context/LanguageContext';

export default function SingleProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { t, language } = useLanguage();
  
  const project = mockProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = mockProjects
    .filter((p) => p.id !== project.id && (p.theme === project.theme || p.type === project.type))
    .slice(0, 3);

  const getLocalizedTag = (tag: string) => {
    const cleanKey = `projects.tag.${tag.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
    const val = t(cleanKey as any);
    return val !== cleanKey ? val : tag;
  };

  const getLocalizedStatusLabel = (st: string) => {
    if (language === 'fr') {
      if (st === 'past') return 'Passé';
      if (st === 'current') return 'En cours';
      if (st === 'under consideration') return 'À l\'étude';
    }
    return st.charAt(0).toUpperCase() + st.slice(1);
  };

  // Localized project details
  const localizedTitle = t(`mockProject.${project.id}.title` as any) || project.title;
  const localizedObjective = t(`mockProject.${project.id}.objective` as any) || project.objective;
  const localizedProblem = t(`mockProject.${project.id}.problem` as any) || project.overview?.problem;
  const localizedAction = t(`mockProject.${project.id}.action` as any) || project.overview?.action;
  const localizedOutcome = t(`mockProject.${project.id}.outcome` as any) || project.overview?.outcome;
  const localizedTags = project.tags.map(getLocalizedTag);
  const localizedTools = project.tools?.map(getLocalizedTag);

  const statusColors: Record<string, string> = {
    current: 'bg-emerald-100 text-emerald-800',
    past: 'bg-gray-100 text-gray-600',
    'under consideration': 'bg-amber-100 text-amber-800',
  };

  // Translate related projects too
  const localizedRelated = related.map(p => ({
    ...p,
    title: t(`mockProject.${p.id}.title` as any) || p.title,
    description: t(`mockProject.${p.id}.description` as any) || p.description,
    tags: p.tags.map(getLocalizedTag)
  }));

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white pb-0">

        {/* ── Breadcrumb ─────────────────────────────── */}
        <Breadcrumbs items={[
          { label: t('breadcrumbs.home'), href: '/' },
          { label: t('projects.breadcrumbs.projects'), href: '/projects' },
          { label: t('projects.breadcrumbs.browse'), href: '/projects/browse' },
          { label: localizedTitle },
        ]} />

        {/* ── Section 1 · Project detail card ─────────── */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-dashed border-blue-300 rounded-2xl my-8">

          {/* Left col */}
          <div>
            <p className="font-semibold text-gray-400 uppercase tracking-widest mb-2">
              {t('projectDetail.projectName')}
            </p>
            <h1 className="font-alt font-bold text-[40px] md:text-[52px] text-text-strong leading-tight mb-8">
              {localizedTitle}
            </h1>

            {localizedObjective && (
              <div className="mb-8 border-l-4 border-[#2D7A5D] pl-4">
                <p className="font-semibold text-text-strong uppercase tracking-wider mb-2">
                  {t('projectDetail.objective')}
                </p>
                <p className="text-text-normal ">{localizedObjective}</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-8">
              {project.address && (
                <div>
                  <p className="font-semibold text-text-strong mb-1">
                    {t('projectDetail.location')}
                  </p>
                  <p className="text-text-normal ">{project.address}</p>
                </div>
              )}
              <div>
                <p className="font-semibold text-text-strong mb-1">
                  {t('projectDetail.timeline')}
                </p>
                <p className="text-text-normal ">
                  {project.startDate} {language === 'fr' ? 'à' : 'to'} {project.endDate ?? t('projectDetail.ongoing')}
                </p>
              </div>
              {project.contact && (
                <div>
                  <p className="font-semibold text-text-strong mb-1">
                    {t('projectDetail.contact')}
                  </p>
                  <p className="text-text-normal ">{project.contact.email}</p>
                  {project.contact.website && (
                    <p className="text-text-normal ">{project.contact.website}</p>
                  )}
                </div>
              )}
              {project.organization && (
                <div>
                  <p className="font-semibold text-text-strong mb-1">
                    {t('projectDetail.organization')}
                  </p>
                  <p className="text-text-normal ">{project.organization}</p>
                </div>
              )}
            </div>

            {/* Themes */}
            <div className="mb-6">
              <p className="font-semibold text-text-strong uppercase tracking-wider mb-3">
                {t('projectDetail.themes')}
              </p>
              <div className="flex flex-wrap gap-2">
                {localizedTags.map((tag) => (
                  <span key={tag} className="border border-gray-300 text-text-strong px-3 py-1 rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="mb-6">
              <p className="font-semibold text-text-strong uppercase tracking-wider mb-3">
                {t('projectDetail.status')}
              </p>
              <span className={`px-3 py-1 rounded-full font-semibold capitalize text-sm ${statusColors[project.status] ?? 'bg-gray-100'}`}>
                {getLocalizedStatusLabel(project.status)}
              </span>
            </div>

            {/* Tools */}
            {localizedTools && localizedTools.length > 0 && (
              <div>
                <p className="font-semibold text-text-strong uppercase tracking-wider mb-3">
                  {t('projectDetail.tools')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {localizedTools.map((tool) => (
                    <span key={tool} className="border border-gray-300 text-text-strong px-3 py-1 rounded-full text-sm">{tool}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right col – hero image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
            <Image src={project.image} alt={localizedTitle} fill className="object-cover" />
          </div>
        </section>

        {/* ── Section 2 · Project location map ────────── */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="font-alt font-bold text-[28px] md:text-[36px] text-text-strong mb-6">
            {t('projectDetail.projectLocation')}
          </h2>
          <div className="w-full h-[420px] rounded-2xl overflow-hidden bg-gray-200 relative border border-black/10">
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
              alt="Project map"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow font-medium text-sm text-center">
                📍 {project.address ?? project.city}<br />
                <span className="text-xs text-gray-500">
                  {t('projectDetail.mapSoon')}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3 · Overview (Problem / Action / Outcome) */}
        {project.overview && (
          <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <h2 className="font-alt font-bold text-[32px] md:text-[40px] text-text-strong">
                {t('projectDetail.overview')}
              </h2>
            </div>
            <div className="md:col-span-3 flex flex-col divide-y divide-[#2D7A5D]/20">
              {[
                { n: 1, label: t('projectDetail.problem'), text: localizedProblem },
                { n: 2, label: t('projectDetail.action'),  text: localizedAction  },
                { n: 3, label: t('projectDetail.outcome'), text: localizedOutcome  },
              ].map(({ n, label, text }) => (
                <div key={n} className="py-8">
                  <p className=" text-[#2D7A5D] font-semibold mb-2">{n}. &nbsp;{label}</p>
                  <p className="text-text-normal  leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Section 4 · Photos & documents ──────────── */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="border-t border-black/5 py-12">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="font-alt font-bold text-[28px] md:text-[36px] text-text-strong mb-8 text-center">
                {t('projectDetail.photosDocs')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-black/5">
                    <Image src={src} alt={`${localizedTitle} photo ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Section 5 · Related projects ─────────────── */}
        <section className="border-t border-black/5 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-alt font-bold text-[28px] md:text-[36px] text-text-strong mb-10">
              {t('projectDetail.related')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {localizedRelated.length > 0 ? localizedRelated.map((p) => (
                <ProjectCard
                  key={p.id}
                  title={p.title}
                  description={p.description}
                  tags={p.tags}
                  image={p.image}
                  link={`/projects/${p.slug}`}
                />
              )) : (
                <p className="text-gray-500 col-span-full">
                  {t('projectDetail.noRelated')}
                </p>
              )}
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm font-medium text-text-strong">
                {t('projects.underConsideration.exploreAll')}
              </span>
              <Link href="/projects/browse" className="border border-[#2D7A5D] text-[#2D7A5D] hover:bg-[#2D7A5D]/5 px-8 py-2 rounded-lg font-medium transition-colors text-sm">
                {t('projects.underConsideration.viewAllBtn')}
              </Link>
            </div>
          </div>
        </section>

        {/* ── Section 6 · CTA ───────────────────────────── */}
        <JoinMissionCta
          title={t('projectDetail.cta.title')}
          description={t('projectDetail.cta.description')}
          buttons={[
            { label: t('projectDetail.cta.btn1'), href: '/contact', variant: 'primary' },
            { label: t('projectDetail.cta.btn2'), href: '/contact', variant: 'secondary' },
          ]}
        />

      </main>
      <Footer />
    </>
  );
}
