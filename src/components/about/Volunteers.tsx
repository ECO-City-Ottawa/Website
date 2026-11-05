'use client'

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Volunteers() {
  const { t } = useLanguage();

  const volunteers = [
    {
      name: "Maxime Mizero",
      role: t('volunteers.member.role.web'),
      desc: t('volunteers.member.desc.maxime')
    },
    {
      name: "Maxime Mizero",
      role: t('volunteers.member.role.web'),
      desc: t('volunteers.member.desc.maxime')
    }
  ];

  return (
    <section className="section bg-base-white w-full border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        
        <div className="mb-16 max-w-4xl mx-auto">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            {t('volunteers.subtitle')}
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-text-strong mb-6">
            {t('volunteers.title')}
          </h2>
          <p className="text-text-normal md:text-[18px] leading-[1.6]">
            {t('volunteers.paragraph')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {volunteers.map((vol, i) => (
            <div key={i} className="flex flex-col items-center max-w-[280px] text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden relative bg-black/5 mb-6">
                <Image src="/homepage/hero.png" alt={vol.name} fill className="object-cover" />
              </div>
              <h3 className="font-alt font-bold text-[20px] text-text-strong">{vol.name}</h3>
              <p className="text-sm text-text-normal mb-4">{vol.role}</p>
              <p className="text-sm text-text-strong leading-relaxed">
                {vol.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
