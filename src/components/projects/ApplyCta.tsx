import React from 'react';
import Link from 'next/link';
import { Sprout } from 'lucide-react';

export default function ApplyCta() {
  return (
    <section className="section bg-brand-green w-full flex flex-col items-center text-center border-t border-white/10 relative overflow-hidden">
      <Sprout className="w-96 h-96 text-white/40 absolute -bottom-16 -left-20 z-0" />
      <Sprout className="w-96 h-96 text-white/40 absolute top-0 -right-20 rotate-270 z-0" />
      <div className="max-w-3xl mx-auto w-full relative z-10">
        <span className="text-xs font-semibold text-white/80 mb-4 uppercase tracking-wide block">
          Get Started
        </span>
        <h2 className="font-alt font-bold text-[40px] md:text-[56px] leading-[1.1] text-white  mb-6">
          Apply for Project<br />Consideration
        </h2>
        <p className="text-white/80 md:text-[18px] mb-12">
          Have an idea for a community sustainability project? We can help you shape it, support it, and share it with Ottawa.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="bg-white text-brand-green hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors text-sm">
            Apply Now
          </Link>
          <Link href="/donate" className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors text-sm">
            Donate now
          </Link>
        </div>
      </div>
    </section>
  );
}
