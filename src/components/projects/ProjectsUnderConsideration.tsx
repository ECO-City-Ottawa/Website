'use client'

import React from 'react';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import { mockProjects } from '@/data/mockData';
import { useLanguage } from '@/context/LanguageContext';
import { localize } from '@/lib/text';

export default function ProjectsUnderConsideration() {
  const { t } = useLanguage();

  const underConsiderationProjects = mockProjects
    .filter(p => p.status === 'under consideration')
    .slice(0, 3);

  const getLocalizedTag = (tag: string) => {
    const cleanKey = `projects.tag.${tag.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
    const val = t(cleanKey as any);
    return val !== cleanKey ? val : tag;
  };

  const localizedProjects = underConsiderationProjects.map(p => ({
    ...p,
    title: localize(t as (k: string) => string, `mockProject.${p.id}.title`, p.title) as string,
    description: localize(t as (k: string) => string, `mockProject.${p.id}.description`, p.description) as string,
    tags: p.tags.map(getLocalizedTag)
  }));

  return (
    <section className="section bg-white w-full py-16 border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full px-6">
        
        <div className="mb-12">
          <h2 className="font-alt font-bold text-[32px] md:text-[40px] text-text-strong mb-4">
            {t('projects.underConsideration.title')}
          </h2>
          <p className="text-text-normal text-[16px]">
            {t('projects.underConsideration.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {localizedProjects.length > 0 ? (
            localizedProjects.map((p, i) => (
              <ProjectCard
                key={i}
                title={p.title}
                description={p.description}
                tags={p.tags}
                image={p.image}
                link={`/projects/${p.slug}`}
              />
            ))
          ) : (
            <div className="col-span-full py-16 flex flex-col items-center justify-center text-center text-gray-500 border border-dashed border-black/10 rounded-2xl">
              <svg className="w-10 h-10 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="font-medium">{t('projects.underConsideration.empty')}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center justify-center mt-12 gap-4">
          <span className="text-text-strong font-medium text-sm">
            {t('projects.underConsideration.exploreAll')}
          </span>
          <Link href="/projects/status/under-consideration" className="border border-brand-green text-brand-green hover:bg-brand-green/5 px-8 py-2 rounded-lg font-medium transition-colors text-sm">
            {t('projects.underConsideration.viewAllBtn')}
          </Link>
        </div>

      </div>
    </section>
  );
}
