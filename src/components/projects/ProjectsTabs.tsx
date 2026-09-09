'use client'

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { THEMES } from '@/data/constants';
import { mockProjects } from '@/data/mockData';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectsTabsProps {
  category: 'theme' | 'type' | 'status';
  activeValue: string;
}

export default function ProjectsTabs({ category, activeValue }: ProjectsTabsProps) {
  const { t, language } = useLanguage();
  const activeRef = useRef<HTMLAnchorElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
  const isItemActive = (value: string) => value.toLowerCase().replace(/\s+/g, '-') === normalizedActive;

  // Keep the active pill in view when the filter changes
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest', inline: 'start', behavior: 'smooth' });
  }, [normalizedActive]);

  // Close the dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdownOpen]);

  return (
    <div className="max-w-7xl mx-auto w-full px-6 pt-12 pb-6 border-b border-black/5">
      <div className="flex items-center gap-3">
        <div className="flex gap-3 overflow-x-auto scroll-smooth py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map(item => {
            const isActive = isItemActive(item.value);
            return (
              <Link
                key={item.value}
                ref={isActive ? activeRef : undefined}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`shrink-0 px-6 py-3 rounded-xl border transition-colors font-medium text-sm md:text-base whitespace-nowrap ${
                  isActive
                    ? 'bg-[#e2f0e9] border-[#e2f0e9] text-brand-green'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {items.length > 3 && (
          <div className="relative shrink-0" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen(v => !v)}
              aria-expanded={dropdownOpen}
              aria-haspopup="listbox"
              aria-label={t('projects.tabs.showAll')}
              className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div
                role="listbox"
                className="absolute right-0 top-[52px] z-30 max-h-80 w-64 overflow-y-auto rounded-xl border border-black/10 bg-white p-2 shadow-lg"
              >
                {items.map(item => {
                  const isActive = isItemActive(item.value);
                  return (
                    <Link
                      key={item.value}
                      href={item.href}
                      role="option"
                      aria-selected={isActive}
                      onClick={() => setDropdownOpen(false)}
                      className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#e2f0e9] text-brand-green'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
