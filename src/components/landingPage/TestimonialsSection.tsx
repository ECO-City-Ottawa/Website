'use client'

import React, { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Sprout, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const testimonials = [
    { quote: t('testimonials.item1.quote'), name: "Amira K.", role: t('testimonials.item1.role'), avatar: "/homepage/hero.png" },
    { quote: t('testimonials.item2.quote'), name: "Dennis R.", role: t('testimonials.item2.role'), avatar: "/homepage/hero.png" },
    { quote: t('testimonials.item3.quote'), name: "Sophie M.", role: t('testimonials.item3.role'), avatar: "/homepage/hero.png" },
    { quote: t('testimonials.item4.quote'), name: "Malik T.", role: t('testimonials.item4.role'), avatar: "/homepage/hero.png" },
    { quote: t('testimonials.item5.quote'), name: "Priya D.", role: t('testimonials.item5.role'), avatar: "/homepage/hero.png" },
  ];

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, [updateEdges]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-testimonial-card]');
    const step = card ? card.offsetWidth + 16 : el.clientWidth / 3;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); scrollByCard(-1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); scrollByCard(1); }
  };

  return (
    <section className="section bg-brand-green/10 w-full text-text-strong relative overflow-hidden">
      <Sprout className="w-96 h-96 text-white absolute -bottom-16 -left-20 z-0" />
      <Sprout className="w-96 h-96 text-white absolute top-0 -right-20 rotate-270 z-0" />
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center z-10 relative">
        <div className="text-center mb-16 relative z-10 max-w-[700px] mx-auto">
          <span className="text-sm font-semibold text-text-strong/80 mb-4 tracking-wide block">
            {t('testimonials.title')}
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-text-strong/90 mb-4">
            {t('testimonials.headline')}
          </h2>
          <p className="text-text-strong/80 md:text-[18px]">
            {t('testimonials.description')}
          </p>
        </div>

        <div
          className="w-full outline-none"
          role="region"
          aria-roledescription="carousel"
          aria-label={t('testimonials.headline')}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div
            ref={trackRef}
            onScroll={updateEdges}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                data-testimonial-card
                className="snap-start shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
              >
                <div className="flex flex-col h-full p-8 rounded-xl bg-base-white border border-black/5 shadow-sm">
                  <div className="flex gap-0.5 mb-6 text-yellow-400">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-current text-yellow-400 stroke-transparent" />
                    ))}
                  </div>
                  <p className="mb-8 leading-relaxed font-medium text-text-strong text-lg flex-grow">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative bg-black/5 shrink-0 border border-black/10">
                      <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-text-strong">{item.name}</span>
                      <span className="text-text-normal text-xs">{item.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label={t('testimonials.prev')}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-base-white border border-black/10 text-brand-green disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-green hover:text-white transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label={t('testimonials.next')}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-base-white border border-black/10 text-brand-green disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-green hover:text-white transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
