'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function OurBoard() {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const boardMembers = [
    {
      name: "Esther Weirich",
      role: t('ourBoard.member.role.chair'),
      desc: t('ourBoard.member.desc.esther'),
      image: "/board/Amber.jpg",
    },
    {
      name: "Rudi Aksim",
      role: t('ourBoard.member.role.secretary'),
      desc: t('ourBoard.member.desc.rudi'),
      image: "/board/rudi.png",
    },
    {
      name: "Eric Sonego",
      role: t('ourBoard.member.role.treasurer'),
      desc: t('ourBoard.member.desc.eric'),
      image: "/board/Eric.jpg",
    },
    {
      name: "Muloud Gahlouz",
      role: t('ourBoard.member.role.large'),
      desc: t('ourBoard.member.desc.pamela'),
      image: "/board/mouloud.png",
    },
    {
      name: "Guy Soulière",
      role: t('ourBoard.member.role.large'),
      desc: t('ourBoard.member.desc.guy'),
      image: "/board/guy.png",
    },
    {
      name: "Prasanna Siva",
      role: t('ourBoard.member.role.large'),
      desc: t('ourBoard.member.desc.prasanna'),
      image: "/board/pressana.png",
    },
  ];

  const handleToggle = (globalIndex: number) => {
    setExpandedIndex(prev => (prev === globalIndex ? null : globalIndex));
  };

  // Group into rows of 4
  const rows: typeof boardMembers[] = [];
  for (let i = 0; i < boardMembers.length; i += 4) {
    rows.push(boardMembers.slice(i, i + 4));
  }

  return (
    <section className="section bg-base-white w-full border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

        {/* Section header */}
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

        {/* Board grid */}
        <div className="flex flex-col gap-6 lg:gap-4">
          {rows.map((rowMembers, rowIndex) => {
            const hasExpanded = rowMembers.some(
              (_, i) => expandedIndex === rowIndex * 4 + i
            );

            return (
              // Grid on mobile/tablet, flex on desktop
              <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:flex-nowrap w-full gap-6 lg:gap-0 overflow-hidden">
                {rowMembers.map((member, i) => {
                  const globalIndex = rowIndex * 4 + i;
                  const isExpanded = expandedIndex === globalIndex;

                  // Tailwind width: 2/5 for expanded, 1/5 for squeezed, 1/4 for normal on desktop; full on mobile/tablet
                  const widthClass = isExpanded
                    ? 'w-full lg:w-2/5'
                    : hasExpanded
                      ? 'w-full lg:w-1/5'
                      : 'w-full lg:w-1/4';

                  return (
                    <div
                      key={i}
                      className={`${widthClass} shrink-0 flex flex-col px-3 transition-[width] duration-[400ms] ease-out`}
                    >
                      {/* Card inner — fixed height so it NEVER grows in height, borderless and paddingless */}
                      <div className="flex flex-col h-[450px]">

                        {/* Photo — fixed height so it NEVER grows when card gets wider */}
                        <div className="relative w-full h-52 shrink-0 rounded-[14px] overflow-hidden mb-4 bg-black/5">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Name & Role */}
                        <h3 className="font-alt font-bold text-[18px] text-text-strong mb-1">
                          {member.name}
                        </h3>
                        <p className="text-xs text-text-normal font-medium mb-3">
                          {member.role}
                        </p>

                        {/* Description — 3 lines when collapsed, scrollable when card is expanded */}
                        <p className={`text-sm text-text-normal leading-relaxed mb-4 ${isExpanded ? 'flex-1 overflow-y-auto pr-1' : 'line-clamp-3'}`}>
                          {member.desc}
                        </p>

                        {/* Toggle button */}
                        <button
                          onClick={() => handleToggle(globalIndex)}
                          aria-expanded={isExpanded}
                          className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-brand-green hover:underline cursor-pointer transition-colors duration-200"
                        >
                          {isExpanded ? t('ourBoard.ctaClose') : t('ourBoard.cta')}
                          <svg
                            className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  );
                })}

                {/* Invisible placeholders for partial rows — keep columns aligned, hidden on mobile/tablet */}
                {rowMembers.length < 4 &&
                  Array.from({ length: 4 - rowMembers.length }).map((_, pi) => (
                    <div
                      key={`pad-${pi}`}
                      className={`${hasExpanded ? 'w-1/5' : 'w-1/4'} shrink-0 invisible pointer-events-none transition-[width] duration-[400ms] ease-out hidden lg:block`}
                    />
                  ))}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
