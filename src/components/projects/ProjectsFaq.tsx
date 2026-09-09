"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { renderWithBreaks } from '@/lib/text';

export default function ProjectsFaq() {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('projects.faq.q1'),
      answer: t('projects.faq.a1')
    },
    {
      question: t('projects.faq.q2'),
      answer: t('projects.faq.a2')
    },
    {
      question: t('projects.faq.q3'),
      answer: t('projects.faq.a3')
    }
  ];

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="section bg-white w-full py-20 border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Side: Text and CTA */}
        <div className="flex flex-col items-start">
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-text-strong mb-6">
            {renderWithBreaks(t('projects.faq.title'))}
          </h2>
          <p className="text-text-normal text-[16px] leading-relaxed mb-8 max-w-md">
            {t('projects.faq.description')}
          </p>
          <Link href="/contact" className="bg-[#2D7A5D] hover:bg-[#24634b] text-white px-8 py-3 rounded-lg font-medium transition-colors text-sm">
            {t('projects.faq.contactUs')}
          </Link>
        </div>

        {/* Right Side: Accordion */}
        <div className="flex flex-col gap-3 mt-4 md:mt-0">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-gray-100 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-bold text-text-strong text-[15px]">{faq.question}</span>
                <svg 
                  className={`w-4 h-4 text-text-strong transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`px-5 text-text-normal text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
