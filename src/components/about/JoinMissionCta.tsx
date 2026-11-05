'use client'

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { renderWithBreaks } from '@/lib/text';

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
    <span>{renderWithBreaks(t('joinMission.headline'))}</span>
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
    <section className="section overflow-hidden w-full flex flex-col items-center text-center border-t border-white/10 relative">
  
      <div className="max-w-7xl mx-auto w-full z-10 relative  bg-brand-green/10  py-16 md:py-24 px-4 sm:px-6 lg:px-8 rounded-[64px]">
        <h2 className="font-alt font-bold text-[40px] md:text-[56px] leading-[1.1] text-brand-green  mb-6 max-w-4xl mx-auto">
          {displayTitle}
        </h2>
        <p className="text-text-strong md:text-[18px] mb-12">
          {displayDescription}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {displayButtons.map((btn, idx) => {
            if (btn.variant === 'primary') {
              return (
                <Link key={idx} href={btn.href} className="bg-white text-brand-green hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors text-sm">
                  {btn.label}
                </Link>
              );
            }
            if (btn.variant === 'secondary') {
              return (
                <Link key={idx} href={btn.href} className="border border-black/30 text-text-strong hover:bg-white/50 px-8 py-3 rounded-lg font-medium transition-colors text-sm ">
                  {btn.label}
                </Link>
              );
            }
            if (btn.variant === 'link') {
              return (
                <Link key={idx} href={btn.href} className="text-text-strong hover:text-brand-green flex items-center gap-1 text-sm border-b border-text-strong pb-0.5 ml-2 transition-colors">
                  {btn.label} {btn.icon}
                </Link>
              );
            }
            // fallback for missing variant
            return (
              <Link key={idx} href={btn.href} className="bg-white text-brand-green hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors text-sm">
                {btn.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
