'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import PageHero from '@/components/ui/PageHero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import JoinMissionCta from '@/components/about/JoinMissionCta';
import { useLanguage } from '@/context/LanguageContext';

export default function ResourcesPage() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // Enriched mock resources matching the autumn road design style
  const mockResources = [
    {
      id: 1,
      title: language === 'en' ? 'Industry Reports & White Papers' : 'Rapports de l’industrie et Livres blancs',
      category: language === 'en' ? 'Report' : 'Rapport',
      desc: language === 'en' ? 'Comprehensive research on local clean energy and green building adoptions in the Ottawa region.' : 'Recherche approfondie sur l’énergie propre locale et l’adoption de bâtiments verts dans la région d’Ottawa.'
    },
    {
      id: 2,
      title: language === 'en' ? 'Community Action Planning Kit' : 'Trousse de planification d’action communautaire',
      category: language === 'en' ? 'Toolkit' : 'Trousse d’outils',
      desc: language === 'en' ? 'A step-by-step workbook to gather your neighbours and kickstart localized ecological action.' : 'Un cahier d’exercices étape par étape pour rassembler vos voisins et lancer des actions écologiques locales.'
    },
    {
      id: 3,
      title: language === 'en' ? 'Active Transit Policy Briefing' : 'Fiche d’information sur les politiques de transport actif',
      category: language === 'en' ? 'Policy' : 'Politique',
      desc: language === 'en' ? 'Detailed advocacy guidelines on protected biking corridors and suburban grid integration.' : 'Lignes directrices détaillées sur la défense des corridors cyclables protégés et l’intégration du réseau de banlieue.'
    },
    {
      id: 4,
      title: language === 'en' ? 'Urban Tree Canopy Field Guide' : 'Guide de terrain sur la canopée arborée urbaine',
      category: language === 'en' ? 'Guide' : 'Guide',
      desc: language === 'en' ? 'Learn how to identify, plant, and care for native biodiverse trees in urban heat corridors.' : 'Apprenez à identifier, planter et entretenir des arbres indigènes et biodiversifiés dans les corridors thermiques urbains.'
    },
    {
      id: 5,
      title: language === 'en' ? 'Circular Economy Loop Guide' : 'Guide sur la boucle d’économie circulaire',
      category: language === 'en' ? 'Toolkit' : 'Trousse d’outils',
      desc: language === 'en' ? 'Practical tips and community models for hosting zero-waste food festivals and household composting.' : 'Conseils pratiques et modèles communautaires pour organiser des festivals alimentaires zéro déchet et du compostage domestique.'
    },
    {
      id: 6,
      title: language === 'en' ? 'Public Action Lab Toolkit' : 'Trousse d’outils du Labo d’action publique',
      category: language === 'en' ? 'Toolkit' : 'Trousse d’outils',
      desc: language === 'en' ? 'Complete facilitation scripts, co-design matrices, and templates to host a successful PAL session.' : 'Scripts d’animation complets, matrices de co-conception et modèles pour animer une session PAL réussie.'
    },
    {
      id: 7,
      title: language === 'en' ? 'Local Microclimate Heat Study' : 'Étude sur la chaleur microclimatique locale',
      category: language === 'en' ? 'Research' : 'Recherche',
      desc: language === 'en' ? 'Data-driven insights mapping temperatures across Ottawa districts to target parklet placements.' : 'Données cartographiques des températures à travers les districts d’Ottawa pour cibler les aménagements de placettes.'
    },
    {
      id: 8,
      title: language === 'en' ? 'Community Led Retrofits Guide' : 'Guide sur les rénovations menées par la communauté',
      category: language === 'en' ? 'Guide' : 'Guide',
      desc: language === 'en' ? 'Help your residential street coordinate energy audits, solar sharing models, and heat pump adoptions.' : 'Aidez votre rue résidentielle à coordonner des audits énergétiques, des modèles de partage solaire et l’adoption de pompes à chaleur.'
    }
  ];

  const filteredResources = mockResources.filter(r =>
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredResources.length / cardsPerPage);
  const paginatedResources = filteredResources.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white pb-0">
        
        {/* Page Hero */}
        <PageHero
          title={t('resources.hero.title')}
          description={t('resources.hero.description')}
          backgroundImage="/homepage/heroBG.png"
          buttons={
            <>
              <a href="#explore" className="bg-[#2D7A5D] hover:bg-[#24634b] text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm text-center">
                {t('resources.hero.btn1')}
              </a>
              <Link
                href="/contact"
                className="border border-white/50 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm text-center"
              >
                {t('resources.hero.btn2')}
              </Link>
            </>
          }
        />

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: t('breadcrumbs.home'), href: '/' },
            { label: t('resources.breadcrumbs.resources') },
          ]}
        />

        {/* Main Section */}
        <section id="explore" className="max-w-7xl mx-auto px-6 py-12">
          
          <h2 className="font-alt font-bold text-[36px] md:text-[40px] text-text-strong mb-6">
            {t('resources.main.title')}
          </h2>

          {/* Controls */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                aria-label="Search resources"
                type="text"
                placeholder={t('resources.main.searchPlaceholder')}
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-3 border border-black/10 rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:border-[#2D7A5D] transition-colors"
              />
            </div>
            <button className="flex items-center justify-center gap-2 border border-black/10 hover:bg-black/5 px-6 py-3 rounded-lg text-base font-semibold text-text-strong transition-all">
              <SlidersHorizontal className="w-5 h-5" />
              {t('resources.main.filters')}
            </button>
          </div>

          <p className="text-text-normal text-base mb-10">
            {t('resources.main.subtitle')}
          </p>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedResources.length > 0 ? (
              paginatedResources.map((item) => (
                <div key={item.id} className="bg-white border border-black/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                  <div className="relative aspect-[4/3] w-full">
                    {/* Using premium autumn pathway photo as in mockups */}
                    <Image
                      src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#2D7A5D] font-bold text-xs px-2.5 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-alt font-bold text-2xl text-text-strong mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-normal text-base leading-relaxed mb-8 flex-grow">
                      {item.desc}
                    </p>
                    <button className="inline-flex items-center gap-1.5 text-[#2D7A5D] font-bold text-base hover:underline mt-auto">
                      {t('resources.main.download')} <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full py-12">{t('resources.main.noResults')}</p>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-black/5 pt-8">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(v => Math.max(v - 1, 1))}
                className="flex items-center gap-1.5 text-base font-semibold text-text-strong disabled:opacity-50 hover:bg-black/5 px-4 py-2 rounded-lg transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
                {t('resources.main.prev')}
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`w-10 h-10 rounded-lg text-base font-semibold transition-all ${
                      currentPage === p
                        ? 'bg-[#2D7A5D] text-white'
                        : 'text-text-strong hover:bg-black/5'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(v => Math.min(v + 1, totalPages))}
                className="flex items-center gap-1.5 text-base font-semibold text-[#2D7A5D] disabled:text-text-strong disabled:opacity-50 hover:bg-black/5 px-4 py-2 rounded-lg transition-all"
              >
                {t('resources.main.next')}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

        </section>

        {/* Dynamic sharing CTA */}
        <JoinMissionCta
          title={t('resources.cta.title')}
          description={t('resources.cta.description')}
          buttons={[
            { label: t('resources.cta.btn1'), href: '/contact', variant: 'primary' },
            { label: t('resources.cta.btn2'), href: '/contact', variant: 'secondary' }
          ]}
        />

      </main>
      <Footer />
    </>
  );
}
