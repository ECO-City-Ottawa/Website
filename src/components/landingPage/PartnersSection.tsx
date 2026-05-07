import React from 'react';
import Link from 'next/link';

export default function PartnersSection() {
  const partners = [
    "CAFES Ottawa",
    "Biosphere Eco-Cities Canada",
    "Schools / hospitals / small business partners",
    "Local community associations (e.g., Manor Park)",
    "Biosphere Eco-Cities Canada"
  ];

  return (
    <section className="section bg-base-white w-full">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Side */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-text-strong mb-4 tracking-wide">
            Stronger in partnership
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-text-strong tracking-tight mb-4">
            Partners &amp; supporters
          </h2>
          <p className="text-text-normal md:text-[18px] leading-[1.6] mb-8">
            Working together across Ottawa
          </p>
          <div>
            <Link href="#" className="btn-secondary rounded-lg px-6 py-3 font-medium text-sm">
              Interested in partnering
            </Link>
          </div>
        </div>

        {/* Right Side Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {partners.map((partner, i) => (
            <div key={i} className="flex items-start gap-4">
              <svg className="w-8 h-8 text-brand-green shrink-0" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" />
                 <path d="M10.5 15.5l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z" fill="white" />
              </svg>
              <span className="text-text-strong font-semibold text-sm pt-1.5 leading-snug">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
