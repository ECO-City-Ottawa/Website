import React from 'react';
import Image from 'next/image';
import { Sprout } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Volunteering with OBEC helped our school launch a pollinator garden...",
      name: "Amira K.",
      role: "Teacher, Centretown",
      avatar: "/homepage/hero.png" // Placeholder
    },
    {
      quote: "PAL made it easy for our group to turn ideas into a real neighborhood project.",
      name: "Dennis R.",
      role: "Community organizer, Kanata North",
      avatar: "/homepage/hero.png"
    },
    {
      quote: "The sustainability tours showed us practical changes we could bring home.",
      name: "Sophie M.",
      role: "Resident, West Carleton",
      avatar: "/homepage/hero.png"
    }
  ];

  return (
    <section className="section bg-green-dark w-full text-white relative overflow-hidden">
     <Sprout className="w-96 h-96 text-[#012515] absolute -bottom-16 -left-20 z-0" />
     <Sprout className="w-96 h-96 text-[#055D36] absolute top-0 -right-20 rotate-270 z-0" />
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center z-10 relative">
        <div className="text-center mb-16 relative z-10">
          <span className="text-sm font-semibold text-white/80 mb-4 tracking-wide block">
            Testimonials
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-white/90 tracking-tight mb-4">
            Community voices
          </h2>
          <p className="text-white/80 md:text-[18px]">
            Volunteers, residents, and partners on OBEC's impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col p-8 rounded-3xl bg-brand-green/20 text-white border border-white/10">
              <div className="flex gap-1 mb-6 text-yellow-400">
                {/* 5 Stars */}
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-8 leading-relaxed font-medium text-white/90 text-lg">"{t.quote}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-black/5 shrink-0 border border-black/10">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-white/80">{t.name}</span>
                  <span className="text-white/60 text-xs">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
