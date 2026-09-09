'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mockEvents } from '@/data/mockData';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import PageHero from '@/components/ui/PageHero';
import { CalendarDays, MapPin, ArrowRightIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function EventsPage() {
  const { t, language } = useLanguage();
  const now = new Date();

  const upcoming = mockEvents.filter((e) => new Date(e.eventDate) >= now);
  const past = mockEvents.filter((e) => new Date(e.eventDate) < now);

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-base-white">
        {/* Page Hero */}
        <PageHero
          subtitle={t('events.hero.tag')}
          title={t('events.hero.title')}
          description={t('events.hero.description')}
          backgroundImage="/homepage/heroBG.png"
        />

        {/* Upcoming Events Grid */}
        <section className="section py-16">
          <div className="max-w-7xl mx-auto w-full px-6">
            {upcoming.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcoming.map((event) => (
                  <Link
                    key={event.id}
                    href={`/events/${event.slug}`}
                    className="group flex flex-col rounded-2xl border border-black/10 overflow-hidden bg-white hover:shadow-md transition-shadow duration-200"
                  >
                    {/* Image */}
                    <div className="w-full aspect-[16/10] relative bg-black/5">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Date & Location */}
                      <div className="flex flex-wrap gap-4 mb-4 text-xs text-text-strong font-semibold">
                        <div className="flex items-center gap-1.5">
                          <CalendarDays className="w-4 h-4 text-gray-400" />
                          <span>
                            {new Date(event.eventDate).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-CA', {
                              year: 'numeric', month: 'long', day: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>{language === 'en' ? event.location : (event.locationFr || event.location)}</span>
                        </div>
                      </div>

                      <h2 className="font-alt font-bold text-[20px] text-text-strong leading-tight mb-2 group-hover:text-brand-green transition-colors">
                        {language === 'en' ? event.title : (event.titleFr || event.title)}
                      </h2>
                      <p className="text-text-normal text-sm leading-relaxed mb-4 flex-grow">
                        {language === 'en' ? event.description : (event.descriptionFr || event.description)}
                      </p>

                      <span className="inline-flex items-center gap-1 text-brand-green font-semibold text-sm mt-auto">
                        {t('events.btn.view')} <ArrowRightIcon className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-text-normal text-center py-12">{t('events.upcoming.noEvents')}</p>
            )}

            {/* Past Events */}
            {past.length > 0 && (
              <div className="mt-20">
                <h2 className="font-alt font-bold text-[28px] text-text-strong mb-8 border-t border-black/5 pt-8">
                  {t('events.past.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-70">
                  {past.map((event) => (
                    <Link
                      key={event.id}
                      href={`/events/${event.slug}`}
                      className="group flex flex-col rounded-2xl border border-black/10 overflow-hidden bg-white hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="w-full aspect-[16/10] relative bg-black/5">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={800}
                          height={500}
                          className="w-full h-full object-cover grayscale"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-1.5 mb-3 text-xs text-text-normal font-semibold">
                          <CalendarDays className="w-4 h-4 text-gray-400" />
                          <span>
                            {new Date(event.eventDate).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-CA', {
                              year: 'numeric', month: 'long', day: 'numeric',
                            })}
                          </span>
                        </div>
                        <h2 className="font-alt font-bold text-[18px] text-text-strong leading-tight mb-2">
                          {language === 'en' ? event.title : (event.titleFr || event.title)}
                        </h2>
                        <p className="text-text-normal text-sm leading-relaxed flex-grow">
                          {language === 'en' ? event.description : (event.descriptionFr || event.description)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
