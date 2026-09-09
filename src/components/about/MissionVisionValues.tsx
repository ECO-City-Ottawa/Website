'use client'

import { Leaf } from 'lucide-react';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function MissionVisionValues() {
  const { t } = useLanguage();

  const items = [
    {
      title: t('missionVisionValues.mission.title'),
      text: t('missionVisionValues.mission.text')
    },
    {
      title: t('missionVisionValues.vision.title'),
      text: t('missionVisionValues.vision.text')
    },
    {
      title: t('missionVisionValues.values.title'),
      text: t('missionVisionValues.values.text')
    }
  ];

  return (
    <section className="section bg-base-white w-full border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            {t('missionVisionValues.subtitle')}
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-text-strong">
            {t('missionVisionValues.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col p-8 rounded-2xl border border-black/10 bg-base-white  h-full">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-alt font-bold text-[24px] text-brand-green">
                  {item.title}
                </h3>
                <Leaf className='text-brand-green ' size={24}/>
              </div>
              <p className="text-text-normal  leading-relaxed mt-auto mb-auto">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
