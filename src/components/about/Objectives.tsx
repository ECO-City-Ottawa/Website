'use client'

import React from 'react';
import { Sprout } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Objectives() {
  const { t } = useLanguage();

  const cards = [
    {
      title: t('objectives.card1.title'),
      desc: t('objectives.card1.desc')
    },
    {
      title: t('objectives.card2.title'),
      desc: t('objectives.card2.desc')
    },
    {
      title: t('objectives.card3.title'),
      desc: t('objectives.card3.desc')
    },
    {
      title: t('objectives.card4.title'),
      desc: t('objectives.card4.desc')
    },
    {
      title: t('objectives.card5.title'),
      desc: t('objectives.card5.desc')
    }
  ];

  return (
    <section className="section bg-brand-green/10  w-full relative overflow-hidden">
      <Sprout className="w-96 h-96 text-white absolute -bottom-16 -left-20 z-0" />
      <Sprout className="w-96 h-96 text-white absolute top-0 -right-20 rotate-270 z-0" />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-12">
          <span className="text-xs font-semibold text-text-strong/80 mb-4 uppercase tracking-wide block">
            {t('objectives.subtitle')}
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-text-strong/90 mb-4">
            {t('objectives.title')}
          </h2>
          <p className="text-text-strong/80 text-[18px]">
            {t('objectives.paragraph')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="flex flex-col p-8 rounded-2xl  bg-brand-green/10 backdrop-blur-sm  ">
              <h3 className="font-alt font-bold text-[22px] text-text-strong/90 mb-4 leading-tight">
                {c.title}
              </h3>
              <p className="text-text-strong/80 leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}

          {/* White CTA Card */}
          <div className="flex flex-col p-8 rounded-2xl bg-white  border border-black/5">
            <h3 className="font-alt font-bold text-[24px] text-brand-green mb-4 leading-tight">
              {t('objectives.cta.title')}
            </h3>
            <p className="text-text-normal leading-relaxed mb-6">
              {t('objectives.cta.desc')}
            </p>
            <div className="mt-auto">
              {/* TODO: add target route when this CTA destination is confirmed. */}
              <span className="inline-flex items-center gap-1 text-brand-green font-medium text-sm hover:underline underline-offset-4">
                {t('objectives.cta.link')}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
