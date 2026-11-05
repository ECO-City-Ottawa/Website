'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function QuestionsIdeasSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0  bg-white">
        <Image src="/homepage/questions.png" alt="Ottawa background" fill className="object-cover -z-10  opacity-10 " />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full ">
        {/* Dark Inner Container */}
        <div className="bg-brand-green/10 backdrop-blur-sm rounded-[24px] md:rounded-[32px] p-8 md:p-16 lg:p-20  w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:items-start">

            {/* Left Column */}
            <div className="flex flex-col">
              <span className="text-text-stong font-medium mb-4 text-sm md:text-base">
                {t('questionsIdeas.title')}
              </span>
              <h2 className="font-alt text-black font-bold text-[40px] md:text-[56px] leading-[1.1] text-text-stong ">
                {t('questionsIdeas.headline')}
              </h2>
            </div>

            {/* Right Column */}
            <div className="flex flex-col">
              <h3 className="text-[20px] md:text-[24px] font-semibold text-black mb-4">
                {t('questionsIdeas.subheading')}
              </h3>
              <p className="text-text-stong/80 md:text-[18px] leading-[1.6] mb-8 max-w-md">
                {t('questionsIdeas.description')}
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Link href="/contact" className="bg-brand-green text-white hover:opacity-90 px-8 py-3 rounded-lg font-medium transition-colors">
                  {t('questionsIdeas.cta1')}
                </Link>
                <Link href="/contact" className="text-text-stong hover:underline flex items-center gap-1 font-medium">
                  {t('questionsIdeas.cta2')}
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
