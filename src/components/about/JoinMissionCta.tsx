import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

export default function JoinMissionCta() {
  return (
    <section className="section bg-[#0A1D2E] w-full flex flex-col items-center text-center border-t border-white/10">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="font-alt font-bold text-[40px] md:text-[56px] leading-[1.1] text-white tracking-tight mb-6">
          Join our mission Make a<br />difference
        </h2>
        <p className="text-white/80 md:text-[18px] mb-12">
          Help design, support, or lead local sustainability projects.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="#" className="bg-white text-[#0A1D2E] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors text-sm">
            Donate now
          </Link>
          <Link href="#" className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors text-sm">
            Volunteer
          </Link>
          <Link href="#" className="text-white hover:text-gray-200 flex items-center gap-1 text-sm border-b border-white pb-0.5 ml-2 transition-colors">
            Partner with us <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
