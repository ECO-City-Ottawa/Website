'use client'

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function OurBoard() {
  const { t } = useLanguage();

  const boardMembers = [
    {
      name: "Esther Weirich",
      role: t('ourBoard.member.role.chair'),
      desc: t('ourBoard.member.desc.esther'),
      hasImage: false
    },
    {
      name: "Rudi Aksim",
      role: t('ourBoard.member.role.secretary'),
      desc: t('ourBoard.member.desc.rudi'),
      hasImage: false
    },
    {
      name: "Eric Sonego",
      role: t('ourBoard.member.role.treasurer'),
      desc: t('ourBoard.member.desc.eric'),
      hasImage: false
    },
    {
      name: "Muloud Gahlouz",
      role: t('ourBoard.member.role.large'),
      desc: t('ourBoard.member.desc.pamela'),
      hasImage: true
    },
    {
      name: "Muloud Gahlouz",
      role: t('ourBoard.member.role.large'),
      desc: t('ourBoard.member.desc.pamela'),
      hasImage: true
    },
    {
      name: "Guy Soulière",
      role: t('ourBoard.member.role.large'),
      desc: t('ourBoard.member.desc.guy'),
      hasImage: false
    },
    {
      name: "Prasanna Siva",
      role: t('ourBoard.member.role.large'),
      desc: t('ourBoard.member.desc.guy'),
      hasImage: false
    }
  ];

  return (
    <section className="section bg-base-white w-full border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            {t('ourBoard.subtitle')}
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-text-strong mb-6">
            {t('ourBoard.title')}
          </h2>
          <p className="text-text-normal md:text-[18px]">
            {t('ourBoard.paragraph')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {boardMembers.map((member, i) => (
            <div key={i} className="flex flex-col">
              {member.hasImage ? (
                <div className="relative w-full aspect-[4/5] bg-black/5 rounded-[20px] overflow-hidden mb-6">
                  <Image src="/homepage/hero.png" alt={member.name} fill className="object-cover" />
                </div>
              ) : (
                <div className="w-full aspect-[4/5] bg-transparent mb-6 hidden md:block"></div>
              )}
              
              <div className={`flex flex-col flex-grow ${!member.hasImage ? 'md:-mt-[20px]' : ''}`}>
                 <h3 className="font-alt font-bold text-[18px] text-text-strong">{member.name}</h3>
                 <p className="text-sm text-text-normal mb-3">{member.role}</p>
                 <p className="text-sm text-text-strong leading-relaxed mb-6">
                   {member.desc}
                 </p>
                 <div className="mt-auto">
                   <button className="text-brand-green text-xs font-semibold hover:underline flex items-center">
                     {t('ourBoard.cta')} 
                     <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                     </svg>
                   </button>
                 </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
