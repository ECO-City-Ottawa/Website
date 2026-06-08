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
      Image: "/board/amber.jpg"
    },
    {
      name: "Rudi Aksim",
      role: t('ourBoard.member.role.secretary'),
      desc: t('ourBoard.member.desc.rudi'),
      Image: "/board/rudi.png"
    },
    {
      name: "Eric Sonego",
      role: t('ourBoard.member.role.treasurer'),
      desc: t('ourBoard.member.desc.eric'),
      Image: "/board/eric.jpg"
    },
    {
      name: "Muloud Gahlouz",
      role: t('ourBoard.member.role.large'),
      desc: t('ourBoard.member.desc.pamela'),
      Image: "/board/mouloud.png"
    },
    {
      name: "Guy Soulière",
      role: t('ourBoard.member.role.large'),
      desc: t('ourBoard.member.desc.guy'),
      Image: "/board/guy.png"
    },
    {
      name: "Prasanna Siva",
      role: t('ourBoard.member.role.large'),
      desc: t('ourBoard.member.desc.guy'),
      Image: "/board/pressana.png"
    }
  ];

  const handleToggle = (globalIndex: number) => {
    setExpandedIndex(prev => (prev === globalIndex ? null : globalIndex));
  };

  // Chunk members into rows of 4 for desktop columns
  const chunkedMembers = [];
  for (let i = 0; i < boardMembers.length; i += 4) {
    chunkedMembers.push(boardMembers.slice(i, i + 4));
  }

  return (
    <section className="section bg-base-white w-full border-t border-black/5">
      <style>{`
        .board-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
        }

        .board-row {
          display: flex;
          flex-direction: row;
          gap: 1.5rem;
          width: 100%;
          flex-wrap: nowrap; /* Strictly prevent wrapping on desktop */
          justify-content: flex-start;
        }

        .board-card-wrapper {
          /* Desktop default: 4 columns (25% minus gaps) */
          flex: 1 1 0%;
          min-width: 0; /* Allow card to shrink below content width */
          display: flex;
          flex-direction: column;
          background-color: var(--color-base-white, #ffffff);
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 20px;
          padding: 1.25rem;
          transition: flex 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
                      transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
                      box-shadow 0.4s ease,
                      background-color 0.4s ease,
                      border-color 0.4s ease;
          position: relative;
        }

        /* Hover effect */
        .board-card-wrapper:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
          border-color: rgba(0, 0, 0, 0.1);
        }

        /* Growing Animation */
        .board-card-wrapper.expanded {
          flex: 1.7 1 0%; /* grows to ~42.7% of space */
          border-color: var(--color-brand-green, #2e7d32);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
          background-color: rgba(46, 125, 50, 0.02);
          z-index: 10;
        }

        /* Squeezing other cards in same row */
        .board-row.has-expanded .board-card-wrapper:not(.expanded) {
          flex: 0.76 1 0%; /* shrinks to ~19.1% of space */
        }

        /* Placeholder helper for aligned empty slots */
        .board-card-placeholder {
          flex: 1 1 0%;
          min-width: 0;
          pointer-events: none;
          visibility: hidden;
          transition: flex 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .board-row.has-expanded .board-card-placeholder {
          flex: 0.76 1 0%;
        }

        /* Photo container */
        .board-photo-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 1.25rem;
          background-color: rgba(0, 0, 0, 0.03);
          transition: all 0.4s ease;
        }

        /* Short Preview (Collapsed state) */
        .board-desc-preview {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--color-text-normal, #4a4a4a);
          margin-bottom: 1.25rem;
          opacity: 1;
          max-height: 100px;
          transition: all 0.3s ease;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .board-card-wrapper.expanded .board-desc-preview {
          opacity: 0;
          max-height: 0;
          margin-bottom: 0;
          pointer-events: none;
        }

        /* Full Description Container (expanded state) */
        .board-desc-full-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .board-card-wrapper.expanded .board-desc-full-wrapper {
          grid-template-rows: 1fr;
        }

        .board-desc-full-inner {
          overflow: hidden;
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--color-text-strong, #1a1a1a);
          margin-bottom: 1.25rem;
        }

        /* Button styles */
        .board-btn-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-brand-green, #2e7d32);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          margin-top: auto;
          transition: color 0.2s ease;
        }

        .board-btn-cta:hover {
          color: #1b5e20;
          text-decoration: underline;
        }

        .board-btn-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .board-card-wrapper.expanded .board-btn-arrow {
          transform: rotate(180deg);
        }

        /* Tablet & Mobile Responsiveness */
        @media (max-width: 1023px) {
          .board-row {
            flex-wrap: wrap; /* allow wrapping on smaller screens */
            gap: 1.5rem;
          }
          .board-card-wrapper {
            flex: 0 1 calc(50% - 0.75rem) !important; /* 2 columns on tablet */
          }
          .board-card-wrapper.expanded {
            flex: 0 1 100% !important; /* take full width on smaller screens */
          }
          .board-card-placeholder {
            display: none; /* hide placeholders on tablet/mobile */
          }
        }

        @media (max-width: 639px) {
          .board-card-wrapper {
            flex: 0 1 100% !important; /* 1 column on mobile */
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
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

        <div className="board-container">
          {chunkedMembers.map((rowMembers, rowIndex) => {
            // Check if any card in this specific row is expanded
            const hasExpanded = rowMembers.some((_, i) => expandedIndex === rowIndex * 4 + i);

            return (
              <div
                key={rowIndex}
                className={`board-row${hasExpanded ? ' has-expanded' : ''}`}
              >
                {rowMembers.map((member, i) => {
                  const globalIndex = rowIndex * 4 + i;
                  const isExpanded = expandedIndex === globalIndex;
                  return (
                    <div
                      key={i}
                      className={`board-card-wrapper${isExpanded ? ' expanded' : ''}`}
                    >
                      {/* Photo */}
                      <div className="board-photo-container">
                        <Image
                          src={member.Image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Name & Role */}
                      <h3 className="font-alt font-bold text-[18px] text-text-strong mb-1">
                        {member.name}
                      </h3>
                      <p className="text-xs text-text-normal mb-3 font-medium">{member.role}</p>

                      {/* Short Preview (Collapsed state) */}
                      <p className="board-desc-preview">
                        {member.desc}
                      </p>

                      {/* Full Description (Expanded state) */}
                      <div className="board-desc-full-wrapper">
                        <div className="board-desc-full-inner">
                          {member.desc}
                        </div>
                      </div>

                      {/* CTA Toggle Button */}
                      <button
                        className="board-btn-cta"
                        onClick={() => handleToggle(globalIndex)}
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? t('ourBoard.ctaClose') || 'Close' : t('ourBoard.cta')}
                        <svg
                          className="board-btn-arrow w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  );
                })}

                {/* Pad the row with invisible cards if it has less than 4 members, maintaining grid alignment */}
                {rowMembers.length < 4 &&
                  Array.from({ length: 4 - rowMembers.length }).map((_, placeholderIdx) => (
                    <div key={`pad-${placeholderIdx}`} className="board-card-placeholder" />
                  ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
