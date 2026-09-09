'use client'

import React from 'react';
import Link from 'next/link';
import { FeatureCard } from '../ui/FeatureCard';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function CommunityActionSection() {
  const { t } = useLanguage();

  return (
    <section className="section w-full relative">
      <Image src="/homepage/whyHow.png" alt="" fill className="object-cover -z-10  opacity-5" />

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center bg-white/5 backdrop-blur-2xl rounded-full px-6 py-6">

        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-sm font-semibold text-text-strong mb-4 tracking-wide block">
            {t('communityAction.title')}
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-text-strong  mb-6">
            {t('communityAction.headline')}
          </h2>
          <p className="text-text-normal md:text-[18px] leading-[1.6]">
            {t('communityAction.description')}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Left Column - Vertical Card */}
          <div className="w-full">
            <FeatureCard
              tag={t('communityAction.card1Tag')}
              title={t('communityAction.card1Title')}
              description={t('communityAction.card1Desc')}
              imageSrc="/homepage/themes.png"
              linkText={t('communityAction.card1Link')}
              linkHref="/why-how"
              layout="vertical"
            />
          </div>

          {/* Right Column - Horizontal Cards */}
          <div className="w-full flex flex-col gap-6">
            <FeatureCard
              tag={t('communityAction.card2Tag')}
              title={t('communityAction.card2Title')}
              description={t('communityAction.card2Desc')}
              imageSrc="/homepage/drives.png"
              linkText={t('communityAction.card2Link')}
              linkHref="/why-how"
              layout="horizontal"
            />

            <FeatureCard
              tag={t('communityAction.card3Tag')}
              title={t('communityAction.card3Title')}
              description={t('communityAction.card3Desc')}
              imageSrc="/homepage/tools.png"
              linkText={t('communityAction.card3Link')}
              linkHref="/engagement"
              layout="horizontal"
            >
              {/* Extra Links inside the card */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                <Link href="/projects/browse" className="text-sm font-medium text-text-strong underline underline-offset-2 hover:text-brand-green">
                  {t('communityAction.card3ExtraLink1')}
                </Link>
                <Link href="/engagement" className="text-sm font-medium text-text-strong underline underline-offset-2 hover:text-brand-green">
                  {t('communityAction.card3ExtraLink2')}
                </Link>
                <Link href="/projects/browse" className="text-sm font-medium text-text-strong underline underline-offset-2 hover:text-brand-green">
                  {t('communityAction.card3ExtraLink3')}
                </Link>
              </div>
            </FeatureCard>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-16">
          <Link href="/why-how" className="btn-secondary rounded-lg px-6 py-3 font-medium">
            {t('communityAction.cta1')}
          </Link>
          <Link href="/engagement" className="font-medium text-brand-green hover:underline flex items-center gap-1">
            {t('communityAction.cta2')} <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
