'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, Sprout } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CommunityLedSection() {
  const { t } = useLanguage();

  return (
    <section className="section w-full">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-text-strong mb-4 tracking-wide">
            {t('communityLed.title')}
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-text-strong  mb-6">
            {t('communityLed.headline')}
          </h2>
          <p className="text-text-normal md:text-[18px] leading-[1.6] mb-10">
            {t('communityLed.description')}
          </p>

          <h3 className="font-alt font-bold text-[24px] text-text-strong mb-6">
            {t('communityLed.whatYouCanDo')}
          </h3>
          <ul className="flex flex-col gap-4 mb-10">
            <li className="flex items-start gap-3 text-text-normal font-medium">
              <Sprout className="min-w-4 min-h-4 text-brand-green" />
              {t('communityLed.item1')}
            </li>
            <li className="flex items-start gap-3 text-text-normal font-medium">
              <Sprout className="min-w-4 min-h-4 text-brand-green" />
              {t('communityLed.item2')}
            </li>
            <li className="flex items-start gap-3 text-text-normal font-medium">
              <Sprout className="min-w-4 min-h-4 text-brand-green" />
              {t('communityLed.item3')}
            </li>
          </ul>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/about" className="btn-secondary rounded-lg px-6 py-3 font-medium">
              {t('communityLed.cta1')}
            </Link>
            <Link href="/engagement" className="font-medium text-brand-green hover:underline flex items-center gap-1">
              {t('communityLed.cta2')} <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full max-h-[500px] aspect-square md:aspect-[4/5] rounded-[24px] overflow-hidden bg-black/5">
          <Image
            src="/image008.jpg"
            alt="Community path along the water"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
