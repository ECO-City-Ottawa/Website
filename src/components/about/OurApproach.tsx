import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function OurApproach() {
  return (
    <section className="section bg-base-white w-full border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            &#123;#Our Approach&#125;
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-text-strong mb-6 leading-tight">
            BEC Bridge
          </h2>
          <p className="text-text-normal md:text-[18px] leading-[1.6] mb-8">
            Our work is built on the Biosphere Eco-City (BEC) model — a community-based framework that blends ecological awareness with local action. It gives communities a shared language and practical tools to turn ideas into real change.
          </p>
          <div>
            <Link href="#" className="bg-brand-green hover:bg-[#1a5b3a] text-white rounded-lg px-6 py-3 font-medium transition-colors inline-block text-sm">
              Learn how it works
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[24px] overflow-hidden bg-black/5 shadow-sm">
          <Image 
            src="/homepage/hero.png" // Placeholder
            alt="Park pathway"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
