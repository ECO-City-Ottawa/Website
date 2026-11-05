'use client'

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function WhyAndHowSplit() {
  const { t } = useLanguage();

  return (
    <section className="section bg-base-white w-full ">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Column: Why we act */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            {t('whyAndHowSplit.why.subtitle')}
          </span>
          <h2 className="font-alt font-bold text-[32px] md:text-[40px] text-text-strong mb-6 leading-tight">
            {t('whyAndHowSplit.why.title')}
          </h2>
          <p className="text-text-normal mb-8 leading-relaxed">
            {t('whyAndHowSplit.why.paragraph1')}
          </p>
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-black/5 mb-6 ">
            <Image src="/homepage/hero.png" alt="Nature branch" fill className="object-cover" />
          </div>
          <p className="text-text-normal text-sm leading-relaxed">
            {t('whyAndHowSplit.why.paragraph2')}
          </p>
        </div>

        {/* Right Column: How we turn ideas into action */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            {t('whyAndHowSplit.how.subtitle')}
          </span>
          <h2 className="font-alt font-bold text-[32px] md:text-[40px] text-text-strong mb-6 leading-tight">
            {t('whyAndHowSplit.how.title')}
          </h2>
          <p className="text-text-normal mb-8 leading-relaxed">
            {t('whyAndHowSplit.how.paragraph1')}
          </p>
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-black/5 mb-6 ">
            <Image src="/homepage/hero.png" alt="Community is Kindness bridge" fill className="object-cover" />
          </div>
          <p className="text-text-normal text-sm leading-relaxed">
            {t('whyAndHowSplit.how.paragraph2')}
          </p>
        </div>

      </div>
    </section>
  );
}
