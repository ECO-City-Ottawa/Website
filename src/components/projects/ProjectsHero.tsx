import React from 'react';
import Link from 'next/link';

export default function ProjectsHero() {
  return (
    <section className="relative w-full h-[400px] flex flex-col justify-center bg-gray-900 overflow-hidden">
      {/* Background Image - Using a placeholder since we don't have the exact image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506526615599-2a91216d64b2?auto=format&fit=crop&q=80')" }}
      ></div>
      
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="md:w-1/2">
          <h1 className="font-alt font-bold text-[40px] md:text-[56px] text-white mb-4 leading-tight">
            Projects across Ottawa <br/>(and beyond)
          </h1>
        </div>
        <div className="md:w-1/2 flex flex-col md:pl-12 mt-4 md:mt-0 pt-4">
          <p className="text-white/90 text-[16px] md:text-[18px] leading-[1.6] mb-8 max-w-md">
            Explore community-led sustainability projects by Theme, Tool, Status, and Location.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#2D7A5D] hover:bg-[#24634b] text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm">
              Browse all (jumps to Map & Filters)
            </button>
            <button className="border border-white/50 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm">
              Submit a project idea
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
