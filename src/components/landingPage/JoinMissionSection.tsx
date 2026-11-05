'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function JoinMissionSection() {
  const { t } = useLanguage();

  return (
    <section className="section bg-base-white w-full">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        {/* Left Image */}
        <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[24px] overflow-hidden bg-black/5">
          <Image
            src="/homepage/hero.png"
            alt="Volunteers"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-text-strong mb-4 tracking-wide">
            {t('joinMission.title')}
          </span>
          <h2
            className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-text-strong  mb-6"
            dangerouslySetInnerHTML={{ __html: t('joinMission.headline').replace('\n', '<br />') }}
          />
          <p className="text-text-normal md:text-[18px] leading-[1.6] mb-10">
            {t('joinMission.description')}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/engagement#volunteer" className="btn-primary rounded-lg px-8 py-3 font-medium">
              {t('joinMission.cta1')}
            </Link>
            <Link href="/engagement#membership" className="btn-secondary rounded-lg px-8 py-3 font-medium">
              {t('joinMission.cta2')}
            </Link>
            <Link href="/contact" className="border border-black/20 text-text-strong hover:bg-black/5 px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-sm flex items-center gap-2">
              {t('joinMission.cta3')} <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
