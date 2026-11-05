'use client'

import React from 'react';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import { mockProjects } from '@/data/mockData';
import { useLanguage } from '@/context/LanguageContext';
import { localize } from '@/lib/text';

export default function CommunitySustainabilityPlans() {
  const { t } = useLanguage();

  const getLocalizedTag = (tag: string) => {
    const cleanKey = `projects.tag.${tag.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
    const val = t(cleanKey as any);
    return val !== cleanKey ? val : tag;
  };

  const localizedProjects = mockProjects.slice(0, 3).map(p => ({
    ...p,
    title: localize(t as (k: string) => string, `mockProject.${p.id}.title`, p.title) as string,
    description: localize(t as (k: string) => string, `mockProject.${p.id}.description`, p.description) as string,
    tags: p.tags.map(getLocalizedTag)
  }));

  return (
    <section className="section bg-base-white w-full border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-12 max-w-[700px]">
          <h2 className="font-alt font-bold text-[32px] md:text-[40px] text-text-strong mb-4">
            {t('projects.csp.title')}
          </h2>
          <p className="text-text-normal text-[16px]">
            {t('projects.csp.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {localizedProjects.map((p, i) => (
            <ProjectCard 
              key={i} 
              title={p.title} 
              description={p.description} 
              tags={p.tags} 
              image={p.image} 
              link={`/projects/${p.slug}`}
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center mt-12 gap-4">
          <span className="text-text-strong font-medium text-sm">
            {t('projects.csp.exploreAll')}
          </span>
          <Link href="/projects/browse" className="border border-brand-green text-brand-green hover:bg-brand-green/5 px-8 py-2 rounded-lg font-medium transition-colors text-sm">
            {t('projects.csp.viewAllBtn')}
          </Link>
        </div>

      </div>
    </section>
  );
}
