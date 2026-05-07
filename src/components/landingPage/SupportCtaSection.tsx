import React from 'react';
import Link from 'next/link';

export default function SupportCtaSection() {
  return (
    <section className="section bg-[#0B1521] w-full flex flex-col items-center text-center">
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-white tracking-tight mb-6">
          Your support powers local<br />action
        </h2>
        <p className="text-white/80 md:text-[18px] leading-[1.6] mb-10">
          Every donation helps volunteers turn ideas into visible, practical projects.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="#" className="bg-white text-[#0B1521] px-8 py-3 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors">
            Donate now
          </Link>
          <Link href="#" className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold text-sm transition-colors">
            See impact
          </Link>
        </div>
      </div>
    </section>
  );
}
