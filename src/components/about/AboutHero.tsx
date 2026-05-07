import React from 'react';

export default function AboutHero() {
  return (
    <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#242A27]">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0 opacity-40">
         {/* Drop your <Image /> here for the background with object-cover */}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col text-white">
          <span className="text-sm font-bold tracking-wide mb-4">About OBEC</span>
          <h1 className="font-alt font-bold text-[40px] md:text-[56px] leading-[1.1] tracking-tight">
            Engaging with you for<br />a sustainable Ottawa
          </h1>
        </div>
        <div className="flex flex-col text-white md:pl-12">
          <p className="text-[16px] md:text-[18px] leading-[1.6]">
            This page covers our history, mission, how we work, the people behind EcoCity Ottawa, and how you can get involved.
          </p>
        </div>
      </div>
    </section>
  );
}
