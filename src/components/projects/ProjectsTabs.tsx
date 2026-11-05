'use client'

import React from 'react';
import Link from 'next/link';
import { THEMES } from '@/data/constants';
import { mockProjects } from '@/data/mockData';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectsTabsProps {
  category: 'theme' | 'type' | 'status';
  activeValue: string;
}

export default function ProjectsTabs({ category, activeValue }: ProjectsTabsProps) {
  const { t, language } = useLanguage();

  // Compute real theme counts from mock data
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

  let items: { label: string; value: string; href: string }[] = [];

  if (category === 'theme') {
    items = THEMES.map(t => ({
      label: `${getLocalizedTheme(t.title)} (${countByTheme[t.title] ?? 0})`,
      value: t.title.toLowerCase().replace(/\s+/g, '-'),
      href: `/projects/theme/${t.title.toLowerCase().replace(/\s+/g, '-')}`
    }));
  } else if (category === 'type') {
    items = [
      { label: 'PAL', value: 'pal', href: '/projects/type/pal' },
      { label: 'CSP', value: 'csp', href: '/projects/type/csp' },
      { label: language === 'fr' ? 'Visites' : 'Tours', value: 'tours', href: '/projects/type/tours' },
      { label: language === 'fr' ? 'Éphémère' : 'Pop-Up', value: 'pop-up', href: '/projects/type/pop-up' },
      { label: language === 'fr' ? 'Jeu de discussion' : 'Discussion Game', value: 'discussion-game', href: '/projects/type/discussion-game' }
    ];
  } else if (category === 'status') {
    items = [
      { label: language === 'fr' ? 'Passé' : 'Past', value: 'past', href: '/projects/status/past' },
      { label: language === 'fr' ? 'En cours' : 'Current', value: 'current', href: '/projects/status/current' },
      { label: language === 'fr' ? 'À l’étude' : 'Under Consideration', value: 'under-consideration', href: '/projects/status/under-consideration' }
    ];
  }

  // Normalize activeValue to match value for comparison
  const normalizedActive = activeValue?.toLowerCase()?.replace(/\s+/g, '-');

  return (
    <div className="max-w-7xl mx-auto w-full px-6 pt-12 pb-6 border-b border-black/5">
      <div className="flex flex-wrap gap-4 items-center">
        {items.map(item => {
          const isActive = item.value.toLowerCase().replace(/\s+/g, '-') === normalizedActive;
          return (
            <Link 
              key={item.value} 
              href={item.href}
              className={`px-6 py-3 rounded-xl border transition-colors font-medium text-sm md:text-base ${
                isActive 
                  ? 'bg-[#e2f0e9] border-[#e2f0e9] text-[#2D7A5D]' 
                  : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
