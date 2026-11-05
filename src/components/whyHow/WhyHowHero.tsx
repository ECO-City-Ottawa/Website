'use client'

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/ui/PageHero';

export default function WhyHowHero() {
  const { t } = useLanguage();

  return (
    <PageHero
      title={
        <span dangerouslySetInnerHTML={{ __html: t('whyHowHero.title') }} />
      }
      description={t('whyHowHero.paragraph')}
      buttons={
        <>
          <Link href="/engagement" className="bg-[#1C6842] hover:bg-[#165133] text-white px-8 py-3 rounded-lg font-medium transition-colors text-sm text-center">
            {t('whyHowHero.cta1')}
          </Link>
          <Link href="/engagement" className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition-colors text-sm text-center">
            {t('whyHowHero.cta2')}
          </Link>
        </>
      }
      backgroundImage="/homepage/heroBG.png"
    />
  );
}

