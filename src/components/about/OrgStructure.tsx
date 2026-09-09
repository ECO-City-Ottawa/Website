'use client'

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function OrgStructure() {
  const { t } = useLanguage();

  return (
    <section className="section bg-base-white w-full border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-16 max-w-[700px]">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            {t('orgStructure.subtitle')}
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-text-strong mb-4">
            {t('orgStructure.title')}
          </h2>
          <p className="text-text-normal md:text-[18px]">
            {t('orgStructure.paragraph')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <h3 className="font-alt font-bold text-[24px] text-text-strong mb-3">
              {t('orgStructure.col1.title')}
            </h3>
            <p className="text-text-normal text-sm leading-relaxed">
              {t('orgStructure.col1.desc')}
            </p>
          </div>
          <div>
            <h3 className="font-alt font-bold text-[24px] text-text-strong mb-3">
              {t('orgStructure.col2.title')}
            </h3>
            <p className="text-text-normal text-sm leading-relaxed">
              {t('orgStructure.col2.desc')}
            </p>
          </div>
          <div>
            <h3 className="font-alt font-bold text-[24px] text-text-strong mb-3">
              {t('orgStructure.col3.title')}
            </h3>
            <p className="text-text-normal text-sm leading-relaxed">
              {t('orgStructure.col3.desc')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col">
            <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-black/5  mb-6">
              <Image src="/central-support.png" alt="Workshop" fill className="object-cover" />
            </div>
            <h3 className="font-alt font-bold text-[24px] text-text-strong mb-3">
              {t('orgStructure.left.title')}
            </h3>
            <p className="text-text-normal text-sm leading-relaxed">
              {t('orgStructure.left.desc')}
            </p>
          </div>
          <div className="flex flex-col">
            <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-black/5  mb-6">
              <Image src="/transparency.jpg" alt="Presentation" fill className="object-cover" />
            </div>
            <h3 className="font-alt font-bold text-[24px] text-text-strong mb-3">
              {t('orgStructure.right.title')}
            </h3>
            <p className="text-text-normal text-sm leading-relaxed">
              {t('orgStructure.right.desc')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
