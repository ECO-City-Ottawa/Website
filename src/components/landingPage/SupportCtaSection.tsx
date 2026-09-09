'use client'

import React from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { renderWithBreaks } from '@/lib/text';



export default function SupportCtaSection() {
  const { t } = useLanguage();

  return (
    <div className='p-4'>
      <section className="section bg-gray-100 w-full flex flex-col items-center text-center relative overflow-hidden rounded-[64px] max-w-7xl mx-auto min-h-[400px] justify-center">
        <div className="absolute z-0 bg-gray-50  top-0 right-0 w-[200px] h-[200px] rounded-full blur-[80px]" />
        <div className="absolute z-0 bg-gray-50 bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] rounded-full blur-[100px]" />
        <div className="absolute z-0 bg-gray-50 top-0 left-0 w-[200px] h-[200px] rounded-full blur-[80px]" />



        <div className="max-w-3xl mx-auto w-full z-10 relative  backdrop-blur-md p-8 rounded-3xl">
          <h2 className="font-alt font-bold text-[40px] text-text-strong md:text-[48px] leading-[1.1]   mb-6">
            {renderWithBreaks(t('supportCta.headline'))}
          </h2>
          <p className=" md:text-[18px] leading-[1.6] mb-10 text-text-normal">
            {t('supportCta.description')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/donate" className="bg-brand-green text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-brand-green/80 transition-colors">
              {t('supportCta.cta1')}
            </Link>
            <Link href="/about" className="border border-black/10 bg-white/60  text-text-strong hover:bg-white/10 px-8 py-3 rounded-lg font-bold text-sm transition-colors">
              {t('supportCta.cta2')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
