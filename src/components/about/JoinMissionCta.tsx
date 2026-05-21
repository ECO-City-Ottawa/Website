'use client'

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface CtaButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'link';
  icon?: ReactNode;
}

export interface JoinMissionCtaProps {
  title?: ReactNode;
  description?: ReactNode;
  buttons?: CtaButtonProps[];
}

export default function JoinMissionCta({ title, description, buttons }: JoinMissionCtaProps) {
  const { t } = useLanguage();

  const defaultTitle = (
    <span dangerouslySetInnerHTML={{ __html: t('joinMission.headline').replace('\n', '<br />') }} />
  );
  const defaultDescription = t('joinMission.description');
  const defaultButtons: CtaButtonProps[] = [
    { label: t('supportCta.cta1'), href: '/donate', variant: 'primary' },
    { label: t('joinMission.cta1'), href: '/engagement#volunteer', variant: 'secondary' },
    { label: t('joinMission.cta3'), href: '/contact', variant: 'link', icon: <ArrowRightIcon className="w-4 h-4" /> }
  ];

  const displayTitle = title || defaultTitle;
  const displayDescription = description || defaultDescription;
  const displayButtons = buttons || defaultButtons;

  return (
    <section className="section overflow-hidden bg-[#061D2F] w-full flex flex-col items-center text-center border-t border-white/10 relative">
      <div className="absolute  z-0 bg-[#114A77] top-0 right-0 w-[200px] h-[200px] rounded-full blur-[80px]" />
      <div className="absolute z-0 bg-[#114A77] bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] rounded-full blur-[100px]" />
      <div className="absolute z-0 bg-[#114A77] top-0 left-0 w-[200px] h-[200px] rounded-full blur-[80px]" />

      <div className="max-w-4xl mx-auto w-full z-10 relative">
        <h2 className="font-alt font-bold text-[40px] md:text-[56px] leading-[1.1] text-white  mb-6">
          {displayTitle}
        </h2>
        <p className="text-white/80 md:text-[18px] mb-12">
          {displayDescription}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {displayButtons.map((btn, idx) => {
            if (btn.variant === 'primary') {
              return (
                <Link key={idx} href={btn.href} className="bg-white text-[#0A1D2E] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors text-sm">
                  {btn.label}
                </Link>
              );
            }
            if (btn.variant === 'secondary') {
              return (
                <Link key={idx} href={btn.href} className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors text-sm">
                  {btn.label}
                </Link>
              );
            }
            if (btn.variant === 'link') {
              return (
                <Link key={idx} href={btn.href} className="text-white hover:text-gray-200 flex items-center gap-1 text-sm border-b border-white pb-0.5 ml-2 transition-colors">
                  {btn.label} {btn.icon}
                </Link>
              );
            }
            // fallback for missing variant
            return (
              <Link key={idx} href={btn.href} className="bg-white text-[#0A1D2E] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors text-sm">
                {btn.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
