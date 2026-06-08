'use client'

import React from 'react';
import Image from 'next/image';
import { Sprout, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t('testimonials.item1.quote'),
      name: "Amira K.",
      role: t('testimonials.item1.role'),
      avatar: "/homepage/hero.png"
    },
    {
      quote: t('testimonials.item2.quote'),
      name: "Dennis R.",
      role: t('testimonials.item2.role'),
      avatar: "/homepage/hero.png"
    },
    {
      quote: t('testimonials.item3.quote'),
      name: "Sophie M.",
      role: t('testimonials.item3.role'),
      avatar: "/homepage/hero.png"
    }
  ];

  return (
    <section className="section bg-brand-green/10  w-full text-text-strong  relative overflow-hidden">
      <Sprout className="w-96 h-96 text-[#012515]/30 absolute -bottom-16 -left-20 z-0" />
      <Sprout className="w-96 h-96 text-[#055D36]/30 absolute top-0 -right-20 rotate-270 z-0" />
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center z-10 relative">
        <div className="text-center mb-16 relative z-10">
          <span className="text-sm font-semibold text-text-strong/80 mb-4 tracking-wide block">
            {t('testimonials.title')}
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-text-strong/90  mb-4">
            {t('testimonials.headline')}
          </h2>
          <p className="text-text-strong/80 md:text-[18px]">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row  gap-4 w-full">
            <div  className="flex flex-col p-8 rounded-xl bg-brand-green/20 text-text-strong border border-white/10">
              <div className="flex gap-0.5 mb-6 text-yellow-400">
                {/* 5 Stars */}
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className='w-5 h-5 fill-current text-yellow-400 stroke-transparent' />
                ))}
              </div>
              <p className="mb-8 leading-relaxed font-medium text-text-strong/90 text-lg lg:text-4xl">"{testimonials[0].quote}"</p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-black/5 shrink-0 border border-black/10">
                  <Image src={testimonials[0].avatar} alt={testimonials[0].name} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-text-strong/80">{testimonials[0].name}</span>
                  <span className="text-text-strong/60 text-xs">{testimonials[0].role}</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4 '>
                <div  className="flex flex-col p-8 rounded-xl bg-brand-green/20 text-text-strong border border-white/10">
              <div className="flex gap-0.5 mb-6 text-yellow-400">
                {/* 5 Stars */}
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className='w-5 h-5 fill-current text-yellow-400 stroke-transparent' />
                ))}
              </div>
              <p className="mb-8 leading-relaxed font-medium text-text-strong/90 text-lg">"{testimonials[1].quote}"</p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-black/5 shrink-0 border border-black/10">
                  <Image src={testimonials[1].avatar} alt={testimonials[1].name} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-text-strong/80">{testimonials[1].name}</span>
                  <span className="text-text-strong/60 text-xs">{testimonials[1].role}</span>
                </div>
              </div>
            </div>  <div  className="flex flex-col p-8 rounded-xl bg-brand-green/20 text-text-strong border border-white/10">
              <div className="flex gap-0.5 mb-6 text-yellow-400">
                {/* 5 Stars */}
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className='w-5 h-5 fill-current text-yellow-400 stroke-transparent' />
                ))}
              </div>
              <p className="mb-8 leading-relaxed font-medium text-text-strong/90 text-lg">"{testimonials[2].quote}"</p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-black/5 shrink-0 border border-black/10">
                  <Image src={testimonials[2].avatar} alt={testimonials[2].name} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-text-strong/80">{testimonials[2].name}</span>
                  <span className="text-text-strong/60 text-xs">{testimonials[2].role}</span>
                </div>
              </div>
            </div>
              
            </div>

        </div>
      </div>
    </section>
  );
}
