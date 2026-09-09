'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, MapPin, Clock, ArrowLeft, Share2 } from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { mockEvents } from '@/data/mockData';
import { useLanguage } from '@/context/LanguageContext';

export default function SingleEventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { t, language } = useLanguage();
  const { slug } = use(params);

  const event = mockEvents.find((e) => e.slug === slug);
  if (!event) notFound();

  // Find other events for "Related Events"
  const relatedEvents = mockEvents
    .filter((e) => e.id !== event.id)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white pb-20">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: t('breadcrumbs.home'), href: '/' },
            { label: t('newsEvents.breadcrumbs.newsEvents'), href: '/news-events' },
            { label: language === 'en' ? event.title : (event.titleFr || event.title) },
          ]}
        />

        {/* Content Section */}
        <div className="section max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Event Details */}
          <div className="lg:col-span-2">
            
            {/* Back button */}
            <Link
              href="/news-events"
              className="inline-flex items-center gap-1.5 text-brand-green font-semibold text-sm hover:underline mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('event.detail.back')}
            </Link>

            <h1 className="font-alt font-bold text-[36px] md:text-[48px] text-text-strong leading-tight mb-6">
              {language === 'en' ? event.title : (event.titleFr || event.title)}
            </h1>

            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 border border-black/5 mb-8">
              <Image src={event.image} alt={event.title} fill className="object-cover" />
            </div>

            <div className="prose prose-lg max-w-none text-text-normal leading-relaxed text-[16px] md:text-[18px] space-y-6">
              <h2 className="font-alt font-bold text-xl text-text-strong">{t('event.detail.aboutTitle')}</h2>
              <p>{language === 'en' ? event.description : (event.descriptionFr || event.description)}</p>
              <p>
                {t('event.detail.aboutDesc1')}
              </p>
              <p>
                {t('event.detail.aboutDesc2')}
              </p>
            </div>
          </div>

          {/* Sidebar Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 border border-black/10 rounded-2xl p-8 sticky top-24">
              
              <h3 className="font-alt font-bold text-lg text-text-strong mb-6 pb-4 border-b border-black/10">
                {t('event.detail.sidebarTitle')}
              </h3>

              <div className="space-y-6 mb-8">
                
                {/* Date */}
                <div className="flex gap-3">
                  <CalendarDays className="w-5 h-5 text-brand-green shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-text-strong uppercase tracking-wider mb-0.5">{t('event.detail.sidebarDate')}</p>
                    <p className="text-sm text-text-normal">
                      {new Date(event.eventDate).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-CA', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-brand-green shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-text-strong uppercase tracking-wider mb-0.5">{t('event.detail.sidebarTime')}</p>
                    <p className="text-sm text-text-normal">{event.startTime} - {event.endTime}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-brand-green shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-text-strong uppercase tracking-wider mb-0.5">{t('event.detail.sidebarLocation')}</p>
                    <p className="text-sm text-text-strong">{language === 'en' ? event.location : (event.locationFr || event.location)}</p>
                    <span className="text-xs bg-black/5 text-text-strong px-2 py-0.5 rounded font-semibold mt-1 inline-block">
                      {event.isVirtual ? t('event.detail.virtual') : t('event.detail.inPerson')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Registration and Share */}
              <div className="space-y-3">
                {event.registrationLink ? (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-brand-green hover:opacity-90 text-white py-3 rounded-lg font-bold text-sm transition-all shadow-sm"
                  >
                    {t('event.detail.btnRegister')}
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    className="w-full block text-center bg-brand-green hover:opacity-90 text-white py-3 rounded-lg font-bold text-sm transition-all shadow-sm"
                  >
                    {t('event.detail.btnContactRegister')}
                  </Link>
                )}
                
                <button className="w-full flex items-center justify-center gap-1.5 border border-black/10 hover:bg-black/5 text-text-strong py-3 rounded-lg font-bold text-sm transition-all">
                  <Share2 className="w-4 h-4" />
                  {t('event.detail.btnShare')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Events Section */}
        {relatedEvents.length > 0 && (
          <section className="section border-t border-black/5 bg-gray-50/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-alt font-bold text-[28px] md:text-[36px] text-text-strong mb-10">
                {t('event.detail.relatedTitle')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedEvents.map((item) => (
                  <div key={item.id} className="p-2 bg-white border border-black/10 rounded-3xl flex flex-col h-full hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col rounded-2xl overflow-hidden bg-base-white h-full flex-grow">
                      <div className="w-full aspect-[16/10] relative bg-black/5 rounded-t-2xl overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-semibold text-text-strong">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4 text-gray-400" />
                            <span>{new Date(item.eventDate).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-CA')}</span>
                          </div>
                        </div>
                        <h3 className="font-alt font-bold text-lg leading-tight text-text-strong mb-3">
                          {language === 'en' ? item.title : (item.titleFr || item.title)}
                        </h3>
                        <p className="text-text-normal text-xs leading-relaxed mb-6 flex-grow">
                          {language === 'en' ? item.description : (item.descriptionFr || item.description)}
                        </p>
                        <div className="mt-auto">
                          <Link href={`/events/${item.slug}`} className="inline-flex items-center gap-1 text-brand-green font-bold text-xs hover:underline">
                            {t('event.detail.readMore')} <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                          </Link>
                        </div>
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
