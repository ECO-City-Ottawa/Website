import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsEventsSection() {
  return (
    <section className="section bg-base-alt w-full">
      <div className="max-w-7xl mx-auto w-full flex flex-col">
        
        {/* Header & Tabs */}
        <div className="mb-12">
          <span className="text-sm font-semibold text-text-strong mb-4 tracking-wide block">
            News &amp; Events
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-text-strong tracking-tight mb-6">
            Latest updates and insights
          </h2>
          <p className="text-text-normal md:text-[18px] leading-[1.6] mb-8">
            Stay informed about our ecological initiatives and urban transformation efforts
          </p>
          
          <div className="flex gap-6 border-b border-black/10">
            <button className="pb-3 border-b-2 border-brand-green text-brand-green font-medium text-sm">All</button>
            <button className="pb-3 text-text-normal hover:text-text-strong font-medium text-sm transition-colors">News</button>
            <button className="pb-3 text-text-normal hover:text-text-strong font-medium text-sm transition-colors">Events</button>
            <button className="pb-3 text-text-normal hover:text-text-strong font-medium text-sm transition-colors">Calendar</button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
          
          {/* News Card */}
          <div className="flex flex-col rounded-2xl border border-black/10 overflow-hidden shadow-sm bg-base-white h-full">
            {/* Top Content */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-black/5 text-text-strong text-xs font-semibold px-3 py-1.5 rounded-md">News</span>
                <span className="bg-black/5 text-text-strong text-xs font-semibold px-3 py-1.5 rounded-md">Community</span>
                <span className="text-text-normal text-xs font-semibold">5 min read — Feb 14, 2025</span>
              </div>
              <h3 className="font-alt font-bold text-[28px] leading-tight text-text-strong mb-3">
                Neighbourhood seed swap launches
              </h3>
              <p className="text-text-normal text-sm leading-relaxed mb-6">
                A community seed exchange to kick-start spring gardens.
              </p>
              <div className="mt-auto">
                <Link href="#" className="inline-flex items-center gap-1 text-brand-green font-medium text-sm hover:underline">
                  Read more <span>&gt;</span>
                </Link>
              </div>
            </div>
            {/* Bottom Image */}
            <div className="w-full aspect-[16/9] relative bg-black/5">
               <Image 
                  src="/homepage/hero.png" 
                  alt="Flower pots on fence"
                  fill
                  className="object-cover"
                />
            </div>
          </div>

          {/* Event Card */}
          <div className="flex flex-col rounded-2xl border border-black/10 overflow-hidden shadow-sm bg-base-white h-full">
            {/* Top Image Placeholder */}
            <div className="w-full aspect-[16/9] bg-black/5 relative">
              {/* Empty state representing missing image */}
            </div>
            
            {/* Bottom Content */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 mb-6 text-xs text-text-strong font-semibold">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Sat 10 Feb 2024</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Location</span>
                </div>
              </div>
              <h3 className="font-alt font-bold text-[28px] leading-tight text-text-strong mb-3">
                Public Action Lab: Ward 4
              </h3>
              <p className="text-text-normal text-sm leading-relaxed mb-6">
                Co-design local projects across Energy, Food, and Waste.
              </p>
              <div className="mt-auto">
                <Link href="#" className="inline-flex items-center gap-1 text-brand-green font-medium text-sm hover:underline">
                  Read more <span>&gt;</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="flex justify-end">
          <Link href="#" className="btn-secondary rounded-lg px-6 py-3 font-medium text-sm">
            See all news &amp; events
          </Link>
        </div>

      </div>
    </section>
  );
}
