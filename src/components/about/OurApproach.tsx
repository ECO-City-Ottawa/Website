'use client'

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function OurApproach() {
  const { t } = useLanguage();

  return (
    <section className="section bg-base-white w-full border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            {t('ourApproach.subtitle')}
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-text-strong mb-6 leading-tight">
            {t('ourApproach.title')}
          </h2>
          <p className="text-text-normal md:text-[18px] leading-[1.6] mb-8">
            {t('ourApproach.paragraph')}
          </p>
          <div>
            {/* TODO: add target route when this CTA destination is confirmed. */}
            <span className="bg-brand-green hover:opacity-90 text-white rounded-lg px-6 py-3 font-medium transition-colors inline-block text-sm">
              {t('ourApproach.cta')}
            </span>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[24px] overflow-hidden bg-black/5 ">
          <Image 
            src="/approach.png" // Placeholder
            alt="Park pathway"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
