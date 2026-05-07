import React from 'react';
import Link from 'next/link';

export default function QuestionsIdeasSection() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0 bg-gray-200">
        {/* 
          Add a full-width background image here if desired:
          <Image src="/homepage/ottawa-bg.jpg" fill className="object-cover" alt="Ottawa background" /> 
        */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Dark Inner Container */}
        <div className="bg-[#141C24] rounded-[24px] md:rounded-[32px] p-8 md:p-16 lg:p-20 shadow-xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column */}
            <div className="flex flex-col">
              <span className="text-white/90 font-medium mb-4 text-sm md:text-base">
                Friendly, responsive, Ottawa-based
              </span>
              <h2 className="font-alt font-bold text-[40px] md:text-[56px] leading-[1.1] text-white tracking-tight">
                Questions or ideas?
              </h2>
            </div>

            {/* Right Column */}
            <div className="flex flex-col">
              <h3 className="text-[20px] md:text-[24px] font-semibold text-white mb-4">
                We&rsquo;d love to hear from you
              </h3>
              <p className="text-white/80 md:text-[18px] leading-[1.6] mb-8 max-w-md">
                Whether you&rsquo;re a resident, school, or community group, we&rsquo;ll connect you to people and tools to get started.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <Link href="#" className="bg-[#155581] hover:bg-[#114264] text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Contact us
                </Link>
                <Link href="#" className="text-white hover:underline flex items-center gap-1 font-medium">
                  Partner with us 
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
