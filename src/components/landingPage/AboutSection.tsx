import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="section bg-base-white w-full">
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-text-strong mb-4 tracking-wide">
              About Us
            </span>
            <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-text-strong tracking-tight">
              A grassroots charity building a sustainable Ottawa — since 2009.
            </h2>
          </div>
          
          <div className="flex flex-col gap-6 justify-center text-text-normal md:text-[18px] leading-[1.6]">
            <p>
              EcoCity Ottawa brings together neighbourhoods, businesses, schools, and local organizations to lead their own sustainability projects starting with the needs they know best.
            </p>
            <p>
              We provide the tools, connections, and support. Communities provide the action.
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 lg:mt-24">
          <div className="flex flex-col items-center justify-center p-10 rounded-2xl border border-black/10 bg-base-white">
            <span className="text-[64px] leading-none font-bold text-brand-green font-alt tracking-tight mb-3">25</span>
            <span className="text-text-strong text-center font-medium">Community projects completed</span>
          </div>

          <div className="flex flex-col items-center justify-center p-10 rounded-2xl border border-black/10 bg-base-white">
            <span className="text-[64px] leading-none font-bold text-brand-green font-alt tracking-tight mb-3">500+</span>
            <span className="text-text-strong text-center font-medium">Volunteers engaged</span>
          </div>

          <div className="flex flex-col items-center justify-center p-10 rounded-2xl border border-black/10 bg-base-white">
            <span className="text-[64px] leading-none font-bold text-brand-green font-alt tracking-tight mb-3">10</span>
            <span className="text-text-strong text-center font-medium">Neighborhoods transformed</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-start">
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 border border-brand-green text-brand-green rounded-lg px-6 py-3 font-medium hover:bg-brand-green hover:text-white transition-colors duration-200 text-sm"
          >
            Learn About Us <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
