'use client'

import React from 'react';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import { mockProjects } from '@/data/mockData';
import { useLanguage } from '@/context/LanguageContext';

export default function CommunitySustainabilityPlans() {
  const { t } = useLanguage();

  const getLocalizedTag = (tag: string) => {
    const cleanKey = `projects.tag.${tag.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
    const val = t(cleanKey as any);
    return val !== cleanKey ? val : tag;
  };

  const localizedProjects = mockProjects.slice(0, 3).map(p => ({
    ...p,
    title: t(`mockProject.${p.id}.title` as any) || p.title,
    description: t(`mockProject.${p.id}.description` as any) || p.description,
    tags: p.tags.map(getLocalizedTag)
  }));

  return (
    <section className="section bg-white w-full py-16 border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full px-6">
        
        <div className="mb-12">
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
          <Link href="/projects/browse" className="border border-[#2D7A5D] text-[#2D7A5D] hover:bg-[#2D7A5D]/5 px-8 py-2 rounded-lg font-medium transition-colors text-sm">
            {t('projects.csp.viewAllBtn')}
          </Link>
        </div>

      </div>
    </section>
  );
}
