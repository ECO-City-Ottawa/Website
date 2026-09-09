'use client'

import React from 'react';
import Link from 'next/link';

import { THEMES } from '@/data/constants';
import { mockProjects } from '@/data/mockData';
import { useLanguage } from '@/context/LanguageContext';

export default function ExploreByTheme() {
  const { t } = useLanguage();

  // Build a count map from real data
  const countByTheme: Record<string, number> = {};
  mockProjects.forEach((p) => {
    countByTheme[p.theme] = (countByTheme[p.theme] ?? 0) + 1;
  });

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

  const themes = THEMES.map((t) => ({
    ...t,
    count: countByTheme[t.title] ?? 0,
  }));

  return (
    <section className="section bg-base-white w-full">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            {t('projects.exploreByTheme.subtitle')}
          </span>
          <h2 className="font-alt font-bold text-[32px] md:text-[40px] text-text-strong mb-4">
            {t('projects.exploreByTheme.title')}
          </h2>
          <p className="text-text-normal text-[16px]">
            {t('projects.exploreByTheme.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {themes.map((theme, idx) => (
            <Link 
              key={idx} 
              href={`/projects/theme/${theme.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex flex-col bg-white p-6 rounded-2xl border border-black/10 h-[140px] hover:border-brand-green hover:shadow-sm transition-all duration-300"
            >
              <h3 className="font-alt font-bold text-[18px] text-brand-green">
                {getLocalizedTheme(theme.title)}
              </h3>
              <div className="mt-auto flex justify-between items-end">
                <span className="text-gray-400 text-xs uppercase tracking-wide">
                  {t('projects.exploreByTheme.projectsLabel')}
                </span>
                <span className="text-brand-green font-bold text-2xl leading-none">{theme.count}</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
