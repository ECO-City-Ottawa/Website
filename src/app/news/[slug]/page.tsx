'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Dot, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { mockNews } from '@/data/mockData';
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

export default function SingleNewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { t, language } = useLanguage();
  const { slug } = use(params);
  
  const article = mockNews.find((n) => n.slug === slug);
  if (!article) notFound();

  // Find other articles for "Related News"
  const relatedNews = mockNews
    .filter((n) => n.id !== article.id)
    .slice(0, 3);

  const getTranslatedTag = (tag: string) => {
    return language === 'en' ? tag : (tagTranslationMap[tag] || tag);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pb-20">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: t('breadcrumbs.home'), href: '/' },
            { label: t('newsEvents.breadcrumbs.newsEvents'), href: '/news-events' },
            { label: language === 'en' ? article.title : (article.titleFr || article.title) },
          ]}
        />

        {/* Content Section */}
        <article className="max-w-7xl mx-auto px-6 py-12">
          
          {/* Back button */}
          <Link
            href="/news-events"
            className="inline-flex items-center gap-1.5 text-[#2D7A5D] font-semibold text-sm hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('news.detail.back')}
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {article.tags.map((tag) => (
                <span key={tag} className="bg-black/5 text-text-strong text-xs font-semibold px-3 py-1.5 rounded-md">
                  {getTranslatedTag(tag)}
                </span>
              ))}
              <span className="text-text-normal text-xs font-semibold flex items-center">
                {t('news.detail.readTime')} <Dot /> {new Date(article.publishedAt).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-CA')}
              </span>
            </div>
            
            <h1 className="font-alt font-bold text-[36px] md:text-[48px] text-text-strong leading-tight mb-4">
              {language === 'en' ? article.title : (article.titleFr || article.title)}
            </h1>
            
            <p className="text-text-normal text-lg md:text-xl leading-relaxed mb-6 font-medium italic">
              "{language === 'en' ? article.excerpt : (article.excerptFr || article.excerpt)}"
            </p>

            <div className="flex items-center gap-3 border-t border-b border-black/10 py-4">
              <div className="w-10 h-10 rounded-full bg-[#2D7A5D]/10 flex items-center justify-center font-bold text-[#2D7A5D] text-sm">
                {article.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-text-strong">{article.author}</p>
                <p className="text-xs text-text-normal">{t('news.detail.authorRole')}</p>
              </div>
            </div>
          </div>

          {/* Large Hero Image */}
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100 border border-black/5 mb-10">
            <Image src={article.image} alt={article.title} fill className="object-cover" />
          </div>

          {/* Body Content */}
          <div className="prose prose-lg max-w-none text-text-normal leading-relaxed text-[16px] md:text-[18px] space-y-6">
            <p>{language === 'en' ? article.content : (article.contentFr || article.content)}</p>
          </div>
        </article>

        {/* Related News Section */}
        {relatedNews.length > 0 && (
          <section className="border-t border-black/5 py-16 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="font-alt font-bold text-[28px] md:text-[36px] text-text-strong mb-10">
                {t('news.detail.relatedTitle')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedNews.map((item) => (
                  <div key={item.id} className="p-2 bg-white border border-black/10 rounded-3xl flex flex-col h-full hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col rounded-2xl overflow-hidden bg-base-white h-full pt-4 flex-grow">
                      <div className="px-6 flex flex-col flex-grow">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          {item.tags.map((tag) => (
                            <span key={tag} className="bg-black/5 text-text-strong text-[11px] font-semibold px-2 py-1 rounded">
                              {getTranslatedTag(tag)}
                            </span>
                          ))}
                        </div>
                        <h3 className="font-alt font-bold text-lg leading-tight text-text-strong mb-3">
                          {language === 'en' ? item.title : (item.titleFr || item.title)}
                        </h3>
                        <p className="text-text-normal text-xs leading-relaxed mb-6 flex-grow">
                          {language === 'en' ? item.excerpt : (item.excerptFr || item.excerpt)}
                        </p>
                        <div className="mb-4">
                          <Link href={`/news/${item.slug}`} className="inline-flex items-center gap-1 text-[#2D7A5D] font-bold text-xs hover:underline">
                            {t('news.detail.readMore')} <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                          </Link>
                        </div>
                      </div>
                      <div className="w-full aspect-[16/10] relative bg-black/5 rounded-b-2xl overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
