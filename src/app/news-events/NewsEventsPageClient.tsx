'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Dot, MapPin, Search, SlidersHorizontal, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import PageHero from '@/components/ui/PageHero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CalendarComponent from '@/components/ui/CalendarComponent';
import { mockNews, mockEvents } from '@/data/mockData';
import { useLanguage } from '@/context/LanguageContext';

const tagTranslationMap: Record<string, string> = {
  'Policy': 'Politique',
  'Architecture': 'Architecture',
  'Emissions': 'Émissions',
  'Community': 'Communauté',
  'Urban Farming': 'Agriculture urbaine',
  'Food Security': 'Sécurité alimentaire',
  'Education': 'Éducation',
  'Energy': 'Énergie',
  'Youth': 'Jeunesse',
  'Active Living': 'Vie active',
  'Transportation': 'Transport',
  'Planning': 'Planification',
  'Food': 'Alimentation',
  'Zero Waste': 'Zéro déchet',
  'Festivals': 'Festivals',
  'Waste': 'Déchets',
  'Compost': 'Compost',
  'Suburbs': 'Banlieues',
  'Health': 'Santé',
  'Research': 'Recherche',
  'Art': 'Art',
  'Placemaking': 'Animation de quartier',
  'Biodiversity': 'Biodiversité'
};

type ActiveTab = 'news' | 'events' | 'calendar';

export default function NewsEventsPage() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<ActiveTab>('news');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const getTranslatedTag = (tag: string) => {
    return language === 'en' ? tag : (tagTranslationMap[tag] || tag);
  };

  // Filters
  const filteredNews = mockNews.filter((n) => {
    const title = language === 'en' ? n.title : (n.titleFr || n.title);
    const excerpt = language === 'en' ? n.excerpt : (n.excerptFr || n.excerpt);
    return (
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const filteredEvents = mockEvents.filter((e) => {
    const title = language === 'en' ? e.title : (e.titleFr || e.title);
    const desc = language === 'en' ? e.description : (e.descriptionFr || e.description);
    const location = language === 'en' ? e.location : (e.locationFr || e.location);
    return (
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Paginated Slices
  const totalNewsPages = Math.ceil(filteredNews.length / cardsPerPage);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const totalEventsPages = Math.ceil(filteredEvents.length / cardsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  // Map events for Calendar component
  const calendarEvents = mockEvents.map((event) => {
    const startDate = new Date(event.eventDate);
    const title = language === 'en' ? event.title : (event.titleFr || event.title);
    return {
      title,
      start: startDate,
      end: new Date(startDate.getTime() + 2 * 60 * 60 * 1000), // Default 2 hours
      allDay: false,
      link: `/events/${event.slug}`,
    };
  });

  const tabs: Array<{ id: ActiveTab; label: string; count?: number }> = [
    { id: 'news', label: language === 'en' ? 'News' : 'Actualités', count: mockNews.length },
    { id: 'events', label: language === 'en' ? 'Events' : 'Événements', count: mockEvents.length },
    { id: 'calendar', label: language === 'en' ? 'Calendar' : 'Calendrier' },
  ];

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white pb-20">
        
        {/* Page Hero */}
        <PageHero
          title={t('newsEvents.hero.title')}
          description={t('newsEvents.hero.description')}
          backgroundImage="/homepage/heroBG.png"
          buttons={
            <>
              <a href="#subscribe" className="bg-brand-green hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm text-center">
                {t('newsEvents.hero.btn1')}
              </a>
              <Link
                href="/contact"
                className="border border-white/50 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm text-center"
              >
                {t('newsEvents.hero.btn2')}
              </Link>
            </>
          }
        />

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: t('breadcrumbs.home'), href: '/' },
            { label: t('newsEvents.breadcrumbs.newsEvents') },
          ]}
        />

        {/* Main Section */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 border-b border-black/10 pb-4">
            
            {/* Custom Tab selector */}
            <div className="flex gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setCurrentPage(1);
                  }}
                  className={`pb-3 font-semibold text-sm transition-colors relative ${
                    activeTab === tab.id
                      ? 'text-brand-green border-b-2 border-brand-green'
                      : 'text-text-normal hover:text-text-strong'
                  }`}
                >
                  {tab.label}
                  {tab.count !== undefined && (
                    <span className="ml-1.5 bg-black/5 text-text-strong text-xs font-semibold px-2 py-0.5 rounded-full">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Search and Filters */}
            {activeTab !== 'calendar' && (
              <div className="flex items-center gap-2">
                <div className="relative flex-grow max-w-xs">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    aria-label="Search news and events"
                    type="text"
                    placeholder={activeTab === 'news' ? t('newsEvents.search.news') : t('newsEvents.search.events')}
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full pl-9 pr-4 py-2 border border-black/10 rounded-lg text-sm text-text-strong placeholder-gray-400 focus:outline-none focus:border-brand-green transition-colors"
                  />
                </div>
                <button className="flex items-center gap-1.5 border border-black/10 hover:bg-black/5 px-4 py-2 rounded-lg text-sm font-medium text-text-strong transition-all">
                  <SlidersHorizontal className="w-4 h-4" />
                  {t('newsEvents.filters')}
                </button>
              </div>
            )}
          </div>

          <p className="text-text-normal text-sm mb-8 leading-relaxed">
            {t('newsEvents.subtitle')}
          </p>

          {/* Tab Contents */}
          {activeTab === 'news' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {paginatedNews.length > 0 ? (
                  paginatedNews.map((item) => (
                    <div key={item.id} className="p-2 bg-white border border-black/10 rounded-3xl flex flex-col h-full hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col rounded-2xl overflow-hidden bg-base-white h-full pt-4 flex-grow">
                        <div className="px-6 flex flex-col flex-grow">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            {item.tags.map((tag) => (
                              <span key={tag} className="bg-black/5 text-text-strong text-[11px] font-semibold px-2 py-1 rounded">
                                {getTranslatedTag(tag)}
                              </span>
                            ))}
                            <span className="text-text-normal text-[11px] font-semibold flex items-center">
                              {language === 'en' ? '5 min read' : 'Lecture : 5 min'} <Dot /> {new Date(item.publishedAt).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-CA')}
                            </span>
                          </div>
                          
                          <h3 className="font-alt font-bold text-xl leading-tight text-text-strong mb-3">
                            {language === 'en' ? item.title : (item.titleFr || item.title)}
                          </h3>
                          <p className="text-text-normal text-sm leading-relaxed mb-6 flex-grow">
                            {language === 'en' ? item.excerpt : (item.excerptFr || item.excerpt)}
                          </p>

                          <div className="mb-4">
                            <Link href={`/news/${item.slug}`} className="inline-flex items-center gap-1 text-brand-green font-bold text-sm hover:underline">
                              {language === 'en' ? 'Read more' : 'Lire la suite'} <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>

                        {/* Image at bottom for news cards as per design */}
                        <div className="w-full aspect-[16/10] relative bg-black/5 rounded-b-2xl overflow-hidden">
                          <Image src={item.image} alt={item.title} fill className="object-cover" />
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center col-span-full py-12">{t('newsEvents.noNews')}</p>
                )}
              </div>

              {/* News Pagination */}
              {totalNewsPages > 1 && (
                <div className="flex items-center justify-between border-t border-black/5 pt-6">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(v => Math.max(v - 1, 1))}
                    className="flex items-center gap-1.5 text-sm font-semibold text-text-strong disabled:opacity-50 hover:bg-black/5 px-4 py-2 rounded-lg transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    {t('newsEvents.prev')}
                  </button>
                  <div className="flex gap-2">
                    {Array.from({ length: totalNewsPages }, (_, i) => i + 1).map((p) => (
                      <button
                        key={p}
                        onClick={() => setCurrentPage(p)}
                        className={`w-8 h-8 rounded-lg text-sm font-semibold transition-all ${
                          currentPage === p
                            ? 'bg-brand-green text-white'
                            : 'text-text-strong hover:bg-black/5'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                  <button
                    disabled={currentPage === totalNewsPages}
                    onClick={() => setCurrentPage(v => Math.min(v + 1, totalNewsPages))}
                    className="flex items-center gap-1.5 text-sm font-semibold text-text-strong disabled:opacity-50 hover:bg-black/5 px-4 py-2 rounded-lg transition-all"
                  >
                    {t('newsEvents.next')}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'events' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {paginatedEvents.length > 0 ? (
                  paginatedEvents.map((item) => (
                    <div key={item.id} className="p-2 bg-white border border-black/10 rounded-3xl flex flex-col h-full hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col rounded-2xl overflow-hidden bg-base-white h-full flex-grow">
                        
                        {/* Image at top for events cards as per design */}
                        <div className="w-full aspect-[16/10] relative bg-black/5 rounded-t-2xl overflow-hidden">
                          <Image src={item.image} alt={item.title} fill className="object-cover" />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-semibold text-text-strong">
                            <div className="flex items-center gap-1">
                              <CalendarDays className="w-4 h-4 text-gray-400" />
                              <span>{new Date(item.eventDate).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-CA')}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-gray-400" />
                              <span>{language === 'en' ? item.location : (item.locationFr || item.location)}</span>
                            </div>
                          </div>

                          <h3 className="font-alt font-bold text-xl leading-tight text-text-strong mb-3">
                            {language === 'en' ? item.title : (item.titleFr || item.title)}
                          </h3>
                          <p className="text-text-normal text-sm leading-relaxed mb-6 flex-grow">
                            {language === 'en' ? item.description : (item.descriptionFr || item.description)}
                          </p>

                          <div className="mt-auto">
                            <Link href={`/events/${item.slug}`} className="inline-flex items-center gap-1 text-brand-green font-bold text-sm hover:underline">
                              {language === 'en' ? 'Read more' : 'Lire la suite'} <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center col-span-full py-12">{t('newsEvents.noEvents')}</p>
                )}
              </div>

              {/* Events Pagination */}
              {totalEventsPages > 1 && (
                <div className="flex items-center justify-between border-t border-black/5 pt-6">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(v => Math.max(v - 1, 1))}
                    className="flex items-center gap-1.5 text-sm font-semibold text-text-strong disabled:opacity-50 hover:bg-black/5 px-4 py-2 rounded-lg transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    {t('newsEvents.prev')}
                  </button>
                  <div className="flex gap-2">
                    {Array.from({ length: totalEventsPages }, (_, i) => i + 1).map((p) => (
                      <button
                        key={p}
                        onClick={() => setCurrentPage(p)}
                        className={`w-8 h-8 rounded-lg text-sm font-semibold transition-all ${
                          currentPage === p
                            ? 'bg-brand-green text-white'
                            : 'text-text-strong hover:bg-black/5'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                  <button
                    disabled={currentPage === totalEventsPages}
                    onClick={() => setCurrentPage(v => Math.min(v + 1, totalEventsPages))}
                    className="flex items-center gap-1.5 text-sm font-semibold text-text-strong disabled:opacity-50 hover:bg-black/5 px-4 py-2 rounded-lg transition-all"
                  >
                    {t('newsEvents.next')}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'calendar' && (
            <div className="animate-in fade-in duration-300">
              <CalendarComponent events={calendarEvents} />
            </div>
          )}

        </section>

        {/* Newsletter Call to Action Section */}
        <section id="subscribe" className="section overflow-hidden w-full flex flex-col items-center text-center border-t border-white/10 relative">
          <div className="max-w-7xl mx-auto w-full z-10 relative bg-brand-green/10 py-16 md:py-24 px-4 sm:px-6 lg:px-8 rounded-[64px]">
            <h2 className="font-alt font-bold text-[40px] md:text-[56px] leading-[1.1] text-brand-green mb-6">
              {t('newsEvents.cta.title')}
            </h2>
            <p className="text-text-strong md:text-[18px] mb-12 max-w-2xl mx-auto">
              {t('newsEvents.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
              <input
                aria-label="Newsletter email address"
                type="email"
                placeholder={t('newsEvents.cta.placeholder')}
                className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-text-strong placeholder:text-text-normal/70 focus:outline-none focus:ring-2 focus:ring-brand-green/50 text-sm"
              />
              <button className="w-full sm:w-auto bg-brand-green text-white hover:bg-brand-green/80 px-6 py-3 rounded-lg font-bold text-sm transition-colors whitespace-nowrap">
                {t('newsEvents.cta.btn')}
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
