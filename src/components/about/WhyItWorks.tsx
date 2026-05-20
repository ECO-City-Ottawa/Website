'use client'

import React from 'react';
import { Users, Network, Sprout, Shield, Lightbulb, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

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
    <section className="section  w-full relative overflow-hidden bg-[#061D2F]  ">
      <div className="absolute  z-0 bg-[#114A77] top-0 right-0 w-[200px] h-[200px] rounded-full blur-[80px]" />
      <div className="absolute z-0 bg-[#114A77] bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] rounded-full blur-[100px]" />
      <div className="absolute z-0 bg-[#114A77] top-0 left-0 w-[200px] h-[200px] rounded-full blur-[80px]" />
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-16 max-w-3xl mx-auto relative z-10">
          <span className="text-xs font-semibold text-white/80 mb-4 uppercase tracking-wide block">
            {t('whyItWorks.subtitle')}
          </span>
          <h2 
            className="font-alt font-bold text-[40px] md:text-[48px] text-white mb-6"
            dangerouslySetInnerHTML={{ __html: t('whyItWorks.title') }}
          />
          <p className="text-white/80 md:text-[18px]">
            {t('whyItWorks.paragraph')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col bg-white/5 p-8 rounded-2xl  border border-white/5">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 text-[#4CB0F9]">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-alt font-bold text-[20px] text-white mb-3 leading-snug">
                {f.title}
              </h3>
              <p className="text-white/80  leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
