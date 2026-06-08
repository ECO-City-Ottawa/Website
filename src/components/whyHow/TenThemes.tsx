'use client'

import Image from 'next/image';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function TenThemes() {
  const { t } = useLanguage();

  const themes = [
    { title: t('tenThemes.theme1.title'), desc: t('tenThemes.theme1.desc') },
    { title: t('tenThemes.theme2.title'), desc: t('tenThemes.theme2.desc') },
    { title: t('tenThemes.theme3.title'), desc: t('tenThemes.theme3.desc') },
    { title: t('tenThemes.theme4.title'), desc: t('tenThemes.theme4.desc') },
    { title: t('tenThemes.theme5.title'), desc: t('tenThemes.theme5.desc') },
    { title: t('tenThemes.theme6.title'), desc: t('tenThemes.theme6.desc') },
    { title: t('tenThemes.theme7.title'), desc: t('tenThemes.theme7.desc') },
    { title: t('tenThemes.theme8.title'), desc: t('tenThemes.theme8.desc') },
    { title: t('tenThemes.theme9.title'), desc: t('tenThemes.theme9.desc') },
    { title: t('tenThemes.theme10.title'), desc: t('tenThemes.theme10.desc') }
  ];

  return (
    <section id="ten-themes" className="section  w-full border-t border-black/5 relative">
      <Image src="/homepage/heroBG.png" alt="Ottawa background" fill className="object-cover -z-10  opacity-5" />
      <div className="max-w-7xl mx-auto w-full bg-white/90 backdrop-blur-xs rounded-full">

        <div className="text-center mb-16 max-w-2xl mx-auto ">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            {t('tenThemes.subtitle')}
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-text-strong mb-4">
            {t('tenThemes.title')}
          </h2>
          <p className="text-text-normal md:text-[18px]">
            {t('tenThemes.paragraph')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {themes.map((theme, i) => (
            <div key={i} className="flex flex-col bg-white p-6 rounded-2xl group border border-black/10  h-full hover:bg-brand-green hover:text-white transition-colors duration-300 cursor-pointer">
              <h3 className="font-alt font-bold text-xl text-[#1E7444] mb-6 group-hover:text-white transition-colors duration-300">{theme.title}</h3>
              <p className="text-text-normal leading-relaxed mt-auto mb-auto group-hover:text-white transition-colors duration-300">{theme.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
