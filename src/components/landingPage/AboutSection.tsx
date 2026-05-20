'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="section bg-base-white w-full">
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-text-strong mb-4 tracking-wide">
              {t('about.title')}
            </span>
            <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-text-strong tracking-tight">
              {t('about.headline')}
            </h2>
          </div>
          
          <div className="flex flex-col gap-6 justify-center text-text-normal md:text-[18px] leading-[1.6]">
            <p>
              {t('about.description1')}
            </p>
            <p>
              {t('about.description2')}
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 lg:mt-24">
          <div className="flex flex-col items-center justify-center p-10 rounded-2xl border border-black/10 bg-base-white">
            <span className="text-[64px] leading-none font-bold text-brand-green font-alt tracking-tight mb-3">
              {t('about.stat1Num')}
            </span>
            <span className="text-text-strong text-center font-medium">
              {t('about.stat1Text')}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-10 rounded-2xl border border-black/10 bg-base-white">
            <span className="text-[64px] leading-none font-bold text-brand-green font-alt tracking-tight mb-3">
              {t('about.stat2Num')}
            </span>
            <span className="text-text-strong text-center font-medium">
              {t('about.stat2Text')}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-10 rounded-2xl border border-black/10 bg-base-white">
            <span className="text-[64px] leading-none font-bold text-brand-green font-alt tracking-tight mb-3">
              {t('about.stat3Num')}
            </span>
            <span className="text-text-strong text-center font-medium">
              {t('about.stat3Text')}
            </span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-start">
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 border border-brand-green text-brand-green rounded-lg px-6 py-3 font-medium hover:bg-brand-green hover:text-white transition-colors duration-200 text-sm"
          >
            {t('about.cta')} <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
