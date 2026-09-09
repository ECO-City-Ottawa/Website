import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DemonstrationEvents() {
  return (
    <section className="section bg-base-white w-full border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Content */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            &#123;#Demonstration Projects&#125;
          </span>
          <h2 className="font-alt font-bold text-[32px] md:text-[40px] text-text-strong mb-6 leading-tight">
            Pop-Up Demonstration Events
          </h2>
          <p className="text-text-normal mb-6 leading-relaxed">
            These are real projects opened to the public to demonstrate practical approaches to sustainability. Any organization willing to share its methods and results can develop a Demonstration Project.
          </p>
          <p className="text-text-normal leading-relaxed">
            Demonstration Projects motivate others by showing what can actually be done, complementing the effects of Community Sustainability Plans and the Project Library.
          </p>
        </div>

        {/* Right Stacked Cards */}
        <div className="flex flex-col gap-10">
          
          <div className="flex flex-col">
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden bg-black/5 mb-4 ">
              <Image src="/homepage/hero.png" alt="Electrical System" fill className="object-cover" />
            </div>
            <h3 className="font-alt font-bold text-[18px] text-text-strong mb-2">
              Electrical System Simulation
            </h3>
            <p className="text-text-normal text-[13px] mb-3">hands-on energy planning game.</p>
            <Link href="/projects/electrical-system-simulation" className="text-text-strong text-[13px] font-semibold hover:underline flex items-center">
              Learn more
              <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-col">
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden bg-black/5 mb-4 ">
              <Image src="/homepage/hero.png" alt="Agricultural Biodiversity" fill className="object-cover" />
            </div>
            <h3 className="font-alt font-bold text-[18px] text-text-strong mb-2">
              Agricultural Biodiversity
            </h3>
            <p className="text-text-normal text-[13px] mb-3">hands-on energy planning game.</p>
            <Link href="/projects/adopt-a-ditch" className="text-text-strong text-[13px] font-semibold hover:underline flex items-center">
              Learn more
              <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
