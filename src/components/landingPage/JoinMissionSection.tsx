import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

export default function JoinMissionSection() {
  return (
    <section className="section bg-base-white w-full">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Image */}
        <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[24px] overflow-hidden bg-black/5 shadow-sm">
          <Image 
            src="/homepage/hero.png" 
            alt="Volunteers"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-text-strong mb-4 tracking-wide">
            Community-led &bull; Open to everyone
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-text-strong tracking-tight mb-6">
            Join our mission<br />Make a difference
          </h2>
          <p className="text-text-normal md:text-[18px] leading-[1.6] mb-10">
            Help design, support, or lead local sustainability projects.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="#" className="btn-primary rounded-lg px-8 py-3 font-medium">
              Volunteer
            </Link>
            <Link href="#" className="btn-secondary rounded-lg px-8 py-3 font-medium">
              Join OBEC
            </Link>
            <Link href="#" className="border border-black/20 text-text-strong hover:bg-black/5 px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-sm flex items-center gap-2">
              Partner with us <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
