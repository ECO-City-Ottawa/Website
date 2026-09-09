'use client'

import React from 'react';
import { Users, Network, Sprout, Shield, Lightbulb, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { renderWithBreaks } from '@/lib/text';

export default function WhyItWorks() {
  const { t } = useLanguage();

  const features = [
    {
      title: t('whyItWorks.card1.title'),
      desc: t('whyItWorks.card1.desc'),
      icon: Users
    },
    {
      title: t('whyItWorks.card2.title'),
      desc: t('whyItWorks.card2.desc'),
      icon: Network
    },
    {
      title: t('whyItWorks.card3.title'),
      desc: t('whyItWorks.card3.desc'),
      icon: Sprout
    },
    {
      title: t('whyItWorks.card4.title'),
      desc: t('whyItWorks.card4.desc'),
      icon: Shield
    },
    {
      title: t('whyItWorks.card5.title'),
      desc: t('whyItWorks.card5.desc'),
      icon: Lightbulb
    },
    {
      title: t('whyItWorks.card6.title'),
      desc: t('whyItWorks.card6.desc'),
      icon: Heart
    }
  ];

  return (
    <section className="section w-full relative overflow-hidden bg-brand-green/10">
      <Sprout className="w-96 h-96 text-white absolute -bottom-16 -left-20 z-0" />
      <Sprout className="w-96 h-96 text-white absolute top-0 -right-20 rotate-270 z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-16 max-w-[700px] mx-auto relative z-10">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            {t('whyItWorks.subtitle')}
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-text-strong mb-6">
            {renderWithBreaks(t('whyItWorks.title'))}
          </h2>
          <p className="text-text-strong/80 md:text-[18px]">
            {t('whyItWorks.paragraph')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col text-text-strong p-8 rounded-2xl  border bg-brand-green/5 hover:bg-brand-green group transition-colors duration-300 ease-in-out">
              <div className="w-16 h-16 rounded-lg bg-brand-green/10 group-hover:bg-white/80 flex items-center justify-center mb-6 text-brand-green transition-colors duration-300 ease-in-out">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-alt font-bold text-[20px] text-text-strong group-hover:text-white mb-3 leading-snug transition-colors duration-300 ease-in-out">
                {f.title}
              </h3>
              <p className="text-text-strong/80  leading-relaxed group-hover:text-white/80 transition-colors duration-300 ease-in-out">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
