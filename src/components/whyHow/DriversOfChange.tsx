'use client'

import { Sprout } from 'lucide-react';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function DriversOfChange() {
  const { t } = useLanguage();

  const drivers = [
    {
      title: t('driversOfChange.driver1.title'),
      desc: t('driversOfChange.driver1.desc')
    },
    {
      title: t('driversOfChange.driver2.title'),
      desc: t('driversOfChange.driver2.desc')
    },
    {
      title: t('driversOfChange.driver3.title'),
      desc: t('driversOfChange.driver3.desc')
    }
  ];

  return (
    <section className="section bg-green-dark w-full relative overflow-hidden">
      <Sprout className="w-96 h-96 text-[#012515] absolute -bottom-16 -left-20 z-0" />
      <Sprout className="w-96 h-96 text-[#055D36] absolute top-0 -right-20 rotate-270 z-0" />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white/80 mb-4 uppercase tracking-wide block">
              {t('driversOfChange.subtitle')}
            </span>
            <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-white leading-tight">
              {t('driversOfChange.title')}
            </h2>
          </div>
          <div className="flex flex-col justify-center">
             <p className="text-white/90 md:text-[18px] leading-[1.6]">
               {t('driversOfChange.paragraph')}
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {drivers.map((d, i) => (
            <div key={i} className="flex flex-col bg-[#0A4B2C] p-8 rounded-2xl  border border-white/5">
              <div className="mb-6 text-[#42D28B]">
                {/* Outlined SVG Icons */}
                {i === 0 && (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )}
                {i === 1 && (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                )}
                {i === 2 && (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )}
              </div>
              <h3 className="font-alt font-bold text-[22px] text-[#42D28B] mb-4">
                {d.title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {d.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
