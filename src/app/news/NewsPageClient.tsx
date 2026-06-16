'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mockNews } from '@/data/mockData';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import PageHero from '@/components/ui/PageHero';
import { ArrowRightIcon } from 'lucide-react';
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

export default function NewsPage() {
  const { t, language } = useLanguage();

  const getTranslatedTag = (tag: string) => {
    return language === 'en' ? tag : (tagTranslationMap[tag] || tag);
  };

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-base-white">
        {/* Page Hero */}
        <PageHero
          subtitle={t('news.hero.tag')}
          title={t('news.hero.title')}
          description={t('news.hero.description')}
          backgroundImage="/homepage/heroBG.png"
        />

        {/* News Grid */}
        <section className="section py-16">
          <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockNews.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="group flex flex-col rounded-2xl border border-black/10 overflow-hidden bg-white hover:shadow-md transition-shadow duration-200"
              >
                {/* Image */}
                <div className="w-full aspect-[16/10] relative bg-black/5">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag) => (
                      <span key={tag} className="bg-black/5 text-text-strong text-xs font-semibold px-3 py-1 rounded-md">
                        {getTranslatedTag(tag)}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-alt font-bold text-[20px] text-text-strong leading-tight mb-2 group-hover:text-[#2D7A5D] transition-colors">
                    {language === 'en' ? article.title : (article.titleFr || article.title)}
                  </h2>
                  <p className="text-text-normal text-sm leading-relaxed mb-4 flex-grow">
                    {language === 'en' ? article.excerpt : (article.excerptFr || article.excerpt)}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-text-normal font-medium">
                      {new Date(article.publishedAt).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#2D7A5D] font-semibold text-sm">
                      {language === 'en' ? 'Read more' : 'Lire la suite'} <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
