import React from 'react';
import Image from 'next/image';

export default function WhyAndHowSplit() {
  return (
    <section className="section bg-base-white w-full border-t-4 border-[#3498DB]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Column: Why we act */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            &#123;#why&#125;
          </span>
          <h2 className="font-alt font-bold text-[32px] md:text-[40px] text-text-strong mb-6 leading-tight">
            Why we act
          </h2>
          <p className="text-text-normal mb-8 leading-relaxed">
            The biosphere is under increasing pressure from human activity. We believe the most effective — and the most energizing — solutions come from conversations that bring neighbours together to produce good local change.
          </p>
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-black/5 mb-6 shadow-sm">
            <Image src="/homepage/hero.png" alt="Nature branch" fill className="object-cover" />
          </div>
          <p className="text-text-normal text-sm leading-relaxed">
            EcoCity Ottawa empowers ordinary people through community groups, businesses, schools, and local clubs. When you work together with the people, will, and energy in the room — magic happens. You can build a more sustainable future, right where you live.
          </p>
        </div>

        {/* Right Column: How we turn ideas into action */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            &#123;#how&#125;
          </span>
          <h2 className="font-alt font-bold text-[32px] md:text-[40px] text-text-strong mb-6 leading-tight">
            How we turn ideas into action
          </h2>
          <p className="text-text-normal mb-8 leading-relaxed">
            We provide a space to create trust, talk openly, break out of silos, and get fresh input — turning ideas into action.
          </p>
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-black/5 mb-6 shadow-sm">
            <Image src="/homepage/hero.png" alt="Community is Kindness bridge" fill className="object-cover" />
          </div>
          <p className="text-text-normal text-sm leading-relaxed">
            Our two tools of engagement are the Public Action Lab (PAL) and the EcoCity Project Library — designed to inspire people to try, adapt, and learn from community-led sustainability projects.
          </p>
        </div>

      </div>
    </section>
  );
}
