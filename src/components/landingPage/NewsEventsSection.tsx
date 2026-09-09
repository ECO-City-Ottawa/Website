'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, CalendarDays, Dot, MapPin } from 'lucide-react';
import CalendarComponent from '../ui/CalendarComponent';
import { useLanguage } from '@/context/LanguageContext';

export default function NewsEventsSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'All' | 'News' | 'Events' | 'Calendar'>('All');

  const ITEMS = [
    {
      id: 1,
      type: 'news',
      tags: [t('newsEvents.item1.tags.0'), t('newsEvents.item1.tags.1')],
      readTime: t('newsEvents.item1.readTime'),
      date: t('newsEvents.item1.date'),
      title: t('newsEvents.item1.title'),
      description: t('newsEvents.item1.desc'),
      imageSrc: 'https://plus.unsplash.com/premium_photo-1742418231346-0d796253c5b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      link: '/news/community-garden-initiative-reaches-50th-location',
    },
    {
      id: 2,
      type: 'event',
      date: t('newsEvents.item2.date'),
      location: t('newsEvents.item2.location'),
      title: t('newsEvents.item2.title'),
      description: t('newsEvents.item2.desc'),
      imageSrc: 'https://plus.unsplash.com/premium_photo-1670182502090-a5d58b24f25b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      link: '/events/public-action-lab-solar-installation-demo',
    },
    {
      id: 3,
      type: 'news',
      tags: [t('newsEvents.item3.tags.0'), t('newsEvents.item3.tags.1')],
      readTime: t('newsEvents.item3.readTime'),
      date: t('newsEvents.item3.date'),
      title: t('newsEvents.item3.title'),
      description: t('newsEvents.item3.desc'),
      imageSrc: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      link: '/news/local-high-schools-launch-solar-simulation-game',
    },
    {
      id: 4,
      type: 'event',
      date: t('newsEvents.item4.date'),
      location: t('newsEvents.item4.location'),
      title: t('newsEvents.item4.title'),
      description: t('newsEvents.item4.desc'),
      imageSrc: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      link: '/events/guided-cycling-tour-ottawa-active-transit',
    },
    {
      id: 5,
      type: 'event',
      date: t('newsEvents.item5.date'),
      location: t('newsEvents.item5.location'),
      title: t('newsEvents.item5.title'),
      description: t('newsEvents.item5.desc'),
      imageSrc: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      link: '/events/interactive-board-game-night-energy-simulator',
    }
  ];

  const filteredItems = ITEMS.filter(item => {
    if (activeTab === 'All') return true;
    if (activeTab === 'News' && item.type === 'news') return true;
    if (activeTab === 'Events' && item.type === 'event') return true;
    return false;
  });

  const calendarEvents = ITEMS.filter(item => item.type === 'event').map(event => {
    // Basic date parsing for calendar.
    const startDate = new Date(event.date);
    return {
      title: event.title,
      start: startDate,
      end: new Date(startDate.getTime() + 2 * 60 * 60 * 1000), // Default 2 hours duration
      allDay: false,
      link: event.link
    };
  });

  return (
    <section className="section w-full relative">
      <Image src="/homepage/whyHow.png" alt="" fill className="object-cover -z-10  opacity-5" />
      <div className="max-w-7xl mx-auto w-full flex flex-col bg-white/10 backdrop-blur-lg  ">

        {/* Header & Tabs */}
        <div className="mb-12">
          <span className="text-sm font-semibold text-text-strong mb-4 tracking-wide block">
            {t('newsEvents.title')}
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-text-strong  mb-6">
            {t('newsEvents.headline')}
          </h2>
          <p className="text-text-normal md:text-[18px] leading-[1.6] mb-8 max-w-[700px]">
            {t('newsEvents.description')}
          </p>

          <div className="flex gap-6 border-b border-black/10">
            {[
              { id: 'All', label: t('newsEvents.tabs.all') },
              { id: 'News', label: t('newsEvents.tabs.news'), countType: 'news' },
              { id: 'Events', label: t('newsEvents.tabs.events'), countType: 'event' },
              { id: 'Calendar', label: t('newsEvents.tabs.calendar') }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-3 font-medium text-sm transition-colors ${activeTab === tab.id
                    ? 'border-b-2 border-brand-green text-brand-green'
                    : 'text-text-normal hover:text-text-strong'
                  }`}
              >
                {tab.label}
                {tab.countType && (
                  <span className="text-text-normal text-xs font-semibold py-1 px-2 rounded-full bg-black/5 ml-1">
                    {ITEMS.filter(item => item.type === tab.countType).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid / Calendar View */}
        {activeTab !== 'Calendar' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-12">
            {filteredItems.map(item => (
              <div key={item.id} className='p-2 bg-white border border-black/10 rounded-3xl'>
                <div className={`flex flex-col rounded-2xl border border-black/10 overflow-hidden bg-base-white h-full ${item.type === 'news' ? 'pt-4' : ''}`}>

                  {/* Top Image for Event */}
                  {item.type === 'event' && (
                    <div className="w-full aspect-[16/9] bg-black/5 relative">
                      <Image src={item.imageSrc} alt={item.title} fill className="object-cover" />
                    </div>
                  )}

                  <div className="lg:p-8 p-4 flex flex-col flex-grow">
                    {/* Header: News tags vs Event info */}
                    {item.type === 'news' ? (
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        {item.tags?.map(tag => (
                          <span key={tag} className="bg-black/5 text-text-strong text-xs font-semibold px-3 py-1.5 rounded-md">{tag}</span>
                        ))}
                        <span className="text-text-normal text-xs font-semibold flex items-center">{item.readTime} <Dot /> {item.date}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-4 mb-6 text-xs text-text-strong font-semibold">
                        <div className="flex items-center gap-1.5">
                          <CalendarDays className='w-4 h-4' />
                          <span>{item.date}</span>
                        </div>
                        {item.location && (
                          <div className="flex items-center gap-1.5">
                            <MapPin className='w-4 h-4' />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>
                    )}

                    <h3 className="font-alt font-bold text-[28px] leading-tight text-text-strong mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-normal text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="mt-auto">
                      <Link href={item.link} className="inline-flex items-center gap-1 text-brand-green font-medium text-sm hover:underline">
                        {t('newsEvents.readMore')} <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Bottom Image for News */}
                  {item.type === 'news' && (
                    <div className="w-full aspect-[16/9] relative bg-black/5">
                      <Image src={item.imageSrc} alt={item.title} fill className="object-cover" />
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-12 w-full animate-in fade-in duration-500">
            <CalendarComponent events={calendarEvents} />
          </div>
        )}

        {/* Bottom CTA */}
        <div className="flex justify-end">
          <Link href="/news-events" className="btn-secondary rounded-lg px-6 py-3 font-medium text-sm">
            {t('newsEvents.seeAll')}
          </Link>
        </div>

      </div>
    </section>
  );
}
