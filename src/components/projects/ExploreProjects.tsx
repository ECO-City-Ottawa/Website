'use client'

import React, { useState, useMemo, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import Image from 'next/image';
import { mockProjects } from '@/data/mockData';
import { useLanguage } from '@/context/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ExploreProjectsProps {
  title?: string;
  withPagination?: boolean;
  initialTheme?: string;
  initialType?: string;
  initialStatus?: string;
}

export default function ExploreProjects({ 
  title, 
  withPagination = false,
  initialTheme = 'all',
  initialType = 'all',
  initialStatus = 'all'
}: ExploreProjectsProps) {
  const { t, language } = useLanguage();
  const displayTitle = title ?? t('projects.explore.title');

  const [view, setView] = useState<'Map' | 'List'>('List');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedScope, setSelectedScope] = useState('ottawa');
  const [selectedTheme, setSelectedTheme] = useState(initialTheme);
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedStatus, setSelectedStatus] = useState(initialStatus);
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedSort, setSelectedSort] = useState('newest');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTheme, selectedType, selectedStatus, selectedCity, selectedSort]);

  // Extract unique options dynamically from mockData
  const themes = useMemo(() => Array.from(new Set(mockProjects.map(p => p.theme))).sort(), []);
  const types = useMemo(() => Array.from(new Set(mockProjects.map(p => p.type))).sort(), []);
  const cities = useMemo(() => Array.from(new Set(mockProjects.map(p => p.city))).sort(), []);

  // Helpers for translations
  const getLocalizedTag = (tag: string) => {
    const cleanKey = `projects.tag.${tag.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
    const val = t(cleanKey as any);
    return val !== cleanKey ? val : tag;
  };

  const getLocalizedTheme = (themeName: string) => {
    if (themeName === 'all') return t('projects.explore.filterThemeAll');
    switch (themeName.toLowerCase()) {
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
      default: return themeName;
    }
  };

  const getLocalizedStatusLabel = (st: string) => {
    if (st === 'all') return t('projects.explore.filterStatusAll');
    if (language === 'fr') {
      if (st === 'past') return 'Passé';
      if (st === 'current') return 'En cours';
      if (st === 'under consideration') return 'À l\'étude';
    }
    return st.charAt(0).toUpperCase() + st.slice(1);
  };

  const getLocalizedCity = (c: string) => {
    if (c === 'all') return t('projects.explore.filterCityAll');
    return c;
  };

  // Compute filtered & sorted projects (using original database fields)
  const filteredProjects = useMemo(() => {
    let result = [...mockProjects];

    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => {
        const transTitle = (t(`mockProject.${p.id}.title` as any) || p.title).toLowerCase();
        const transDesc = (t(`mockProject.${p.id}.description` as any) || p.description).toLowerCase();
        const transTheme = getLocalizedTheme(p.theme).toLowerCase();
        const transTags = p.tags.map(getLocalizedTag).map(t => t.toLowerCase());

        return transTitle.includes(q) ||
          transDesc.includes(q) ||
          transTheme.includes(q) ||
          (p.partner && p.partner.toLowerCase().includes(q)) ||
          p.city.toLowerCase().includes(q) ||
          transTags.some(t => t.includes(q));
      });
    }

    // Filters
    if (selectedTheme !== 'all') {
      result = result.filter(p => p.theme === selectedTheme);
    }
    if (selectedType !== 'all') {
      result = result.filter(p => p.type === selectedType);
    }
    if (selectedStatus !== 'all') {
      result = result.filter(p => p.status === selectedStatus);
    }
    if (selectedCity !== 'all') {
      result = result.filter(p => p.city === selectedCity);
    }

    // Sort
    if (selectedSort === 'newest') {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (selectedSort === 'oldest') {
      result.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    } else if (selectedSort === 'a-z') {
      result.sort((a, b) => {
        const titleA = t(`mockProject.${a.id}.title` as any) || a.title;
        const titleB = t(`mockProject.${b.id}.title` as any) || b.title;
        return titleA.localeCompare(titleB);
      });
    }

    return result;
  }, [searchQuery, selectedTheme, selectedType, selectedStatus, selectedCity, selectedSort, t, language]);

  // Compute paginated projects
  const paginatedProjects = useMemo(() => {
    if (!withPagination) return filteredProjects;
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(start, start + itemsPerPage);
  }, [filteredProjects, withPagination, currentPage]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // Fully translate the projects we display
  const localizedDisplayProjects = useMemo(() => {
    return paginatedProjects.map(p => ({
      ...p,
      title: t(`mockProject.${p.id}.title` as any) || p.title,
      description: t(`mockProject.${p.id}.description` as any) || p.description,
      tags: p.tags.map(getLocalizedTag)
    }));
  }, [paginatedProjects, t]);

  const resultsText = filteredProjects.length === 1 
    ? t('projects.explore.showingSingle') 
    : t('projects.explore.showingMultiple').replace('{count}', filteredProjects.length.toString());

  return (
    <section className="section bg-white w-full border-t border-black/5 py-16">
      <div className="max-w-7xl mx-auto w-full ">
        <h2 className="font-alt font-bold text-[32px] md:text-[40px] text-text-strong mb-6">
          {displayTitle}
        </h2>
        
        {/* Search & Top Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-grow flex items-center bg-gray-100 rounded-lg px-4 py-2">
            <input 
              aria-label="Search projects"
              type="text" 
              placeholder={t('projects.explore.searchPlaceholder')} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none flex-grow text-sm placeholder:text-gray-500"
            />
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <div className="flex flex-wrap gap-2 items-center">
            <button className="bg-[#2D7A5D] hover:bg-[#24634b] text-white px-6 py-2 rounded-lg font-medium transition-colors text-sm flex items-center h-10">
              {t('projects.explore.searchBtn')}
            </button>
            
            <Select value={selectedScope} onValueChange={setSelectedScope}>
              <SelectTrigger className="w-[140px] bg-gray-100 border-none font-medium text-sm h-10">
                <SelectValue placeholder={t('projects.explore.scope')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ottawa">{t('projects.explore.scopeOttawa')}</SelectItem>
                <SelectItem value="global">{t('projects.explore.scopeGlobal')}</SelectItem>
              </SelectContent>
            </Select>

            <Select value={view} onValueChange={(val) => setView(val as 'Map' | 'List')}>
              <SelectTrigger className="w-[120px] bg-gray-100 border-none font-medium text-sm h-10">
                <SelectValue placeholder={t('projects.explore.view')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Map">{t('projects.explore.viewMap')}</SelectItem>
                <SelectItem value="List">{t('projects.explore.viewList')}</SelectItem>
              </SelectContent>
            </Select>

            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center gap-2 h-10 ${showFilters ? 'bg-[#2D7A5D] text-white' : 'bg-gray-100 hover:bg-gray-200 text-text-strong'}`}
            >
              {t('projects.explore.filters')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>
        </div>

        <p className="text-text-normal text-sm mb-8">
          {t('projects.explore.filtersSubtitle')}
        </p>

        {/* Expandable Filters Row */}
        {showFilters && (
          <div className="flex flex-wrap gap-2 mb-8 animate-in fade-in slide-in-from-top-2">
            <Select value={selectedTheme} onValueChange={setSelectedTheme}>
              <SelectTrigger className="w-fit min-w-[120px] bg-gray-100 border-none font-medium text-sm">
                <SelectValue placeholder={t('projects.explore.filterTheme')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('projects.explore.filterThemeAll')}</SelectItem>
                {themes.map(t => (
                  <SelectItem key={t} value={t}>{getLocalizedTheme(t)}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-fit min-w-[160px] bg-gray-100 border-none font-medium text-sm">
                <SelectValue placeholder={t('projects.explore.filterType')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('projects.explore.filterTypeAll')}</SelectItem>
                {types.map(t => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-fit min-w-[120px] bg-gray-100 border-none font-medium text-sm">
                <SelectValue placeholder={t('projects.explore.filterStatus')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('projects.explore.filterStatusAll')}</SelectItem>
                <SelectItem value="past">{getLocalizedStatusLabel('past')}</SelectItem>
                <SelectItem value="current">{getLocalizedStatusLabel('current')}</SelectItem>
                <SelectItem value="under consideration">{getLocalizedStatusLabel('under consideration')}</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-fit min-w-[180px] bg-gray-100 border-none font-medium text-sm">
                <SelectValue placeholder={t('projects.explore.filterCity')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('projects.explore.filterCityAll')}</SelectItem>
                {cities.map(c => (
                  <SelectItem key={c} value={c}>{getLocalizedCity(c)}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSort} onValueChange={setSelectedSort}>
              <SelectTrigger className="w-fit min-w-[120px] bg-gray-100 border-none font-medium text-sm">
                <SelectValue placeholder={t('projects.explore.filterSort')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">{t('projects.explore.filterSortNewest')}</SelectItem>
                <SelectItem value="oldest">{t('projects.explore.filterSortOldest')}</SelectItem>
                <SelectItem value="a-z">{t('projects.explore.filterSortAz')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Results Info */}
        <div className="mb-6 flex justify-between items-end">
          <p className="text-sm text-gray-500 font-medium">
            {resultsText}
          </p>
        </div>

        {/* Content Area */}
        {view === 'Map' ? (
          <div className="w-full h-[500px] bg-gray-200 rounded-2xl overflow-hidden relative">
            <Image 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" 
              alt="Map view placeholder" 
              fill 
              className="object-cover opacity-80"
            />
            {/* Map markers placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 px-4 py-2 rounded-lg shadow-lg font-medium text-sm text-center">
                {t('projects.explore.mapPlaceholder')}<br/>
                <span className="text-xs text-gray-500">
                  {t('projects.explore.mapSub').replace('{count}', filteredProjects.length.toString())}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localizedDisplayProjects.length > 0 ? (
                localizedDisplayProjects.map((p) => (
                  <ProjectCard 
                    key={p.id} 
                    title={p.title} 
                    description={p.description} 
                    tags={p.tags} 
                    image={p.image} 
                    link={`/projects/${p.slug}`}
                  />
                ))
              ) : (
              <div className="col-span-full py-20 flex flex-col items-center justify-center text-gray-500">
                <svg className="w-12 h-12 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg font-medium">{t('projects.explore.noResults')}</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedTheme('all');
                    setSelectedType('all');
                    setSelectedStatus('all');
                    setSelectedCity('all');
                  }}
                  className="mt-4 text-[#2D7A5D] hover:underline font-medium text-sm"
                >
                  {t('projects.explore.clearFilters')}
                </button>
              </div>
            )}
            </div>
            
            {/* Pagination Controls */}
            {withPagination && totalPages > 1 && (
              <div className="flex justify-between items-center mt-12 w-full">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-text-strong px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  {t('projects.explore.prev')}
                </button>
                
                <div className="flex gap-2">
                  {Array.from({length: Math.min(3, totalPages)}).map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-medium text-sm transition-colors ${currentPage === i + 1 ? 'bg-[#e2f0e9] text-[#2D7A5D]' : 'bg-gray-100 hover:bg-gray-200 text-text-strong'}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  {totalPages > 3 && <span className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg text-sm text-gray-500">...</span>}
                </div>

                <button 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-text-strong px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center gap-2"
                >
                  {t('projects.explore.next')}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
