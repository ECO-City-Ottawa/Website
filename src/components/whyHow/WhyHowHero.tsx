import React from 'react';
import Link from 'next/link';

export default function WhyHowHero() {
  return (
    <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#1B231E]">
      <div className="absolute inset-0 z-0 opacity-40">
         {/* Background Image Placeholder */}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col text-white">
          <h1 className="font-alt font-bold text-[40px] md:text-[56px] leading-[1.1] tracking-tight">
            Why we act.<br />
            How we help.<br />
            What we use to get there.
          </h1>
        </div>
        <div className="flex flex-col text-white md:pl-12">
          <p className="text-[16px] md:text-[18px] leading-[1.6] mb-8">
            We believe the most effective solutions come from conversations that bring people together — and we have built the tools to make that happen.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="bg-[#1C6842] hover:bg-[#165133] text-white px-8 py-3 rounded-lg font-medium transition-colors text-sm">
              Explore Our Tools
            </Link>
            <Link href="#" className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors text-sm">
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
