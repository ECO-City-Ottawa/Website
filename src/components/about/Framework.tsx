'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Framework() {
  const { t } = useLanguage();

  const cards = [
    {
      title: t('framework.card1.title'),
      desc: t('framework.card1.desc')
    },
    {
      title: t('framework.card2.title'),
      desc: t('framework.card2.desc')
    },
    {
      title: t('framework.card3.title'),
      desc: t('framework.card3.desc')
    },
    {
      title: t('framework.card4.title'),
      desc: t('framework.card4.desc')
    },
    {
      title: t('framework.card5.title'),
      desc: t('framework.card5.desc')
    },
    {
      title: t('framework.card6.title'),
      desc: t('framework.card6.desc')
    }
  ];

  return (
    <section className="section bg-base-white w-full">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            {t('framework.subtitle')}
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-text-strong mb-4">
            {t('framework.title')}
          </h2>
          <p className="text-text-normal md:text-[18px]">
            {t('framework.paragraph')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col bg-white rounded-2xl border border-black/10 overflow-hidden  h-full">
              <div className="p-8 flex flex-col items-center text-center flex-grow">
                <span className="text-[11px] font-semibold text-text-normal mb-3 uppercase tracking-wider">
                  {t('framework.card.features')}
                </span>
                <h3 className="font-alt font-bold text-[24px] text-text-strong mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-text-normal text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>
                <div className="mt-auto">
                  <Link href="#" className="inline-flex items-center text-brand-green text-sm font-medium hover:underline">
                    {t('framework.card.link')}
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="relative h-[140px] w-full bg-black/5 mt-auto">
                <Image src="/homepage/hero.png" alt="Leaves" fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
