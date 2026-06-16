import React, { ReactNode } from 'react';
import Image from 'next/image';

interface PageHeroProps {
  subtitle?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  buttons?: ReactNode;
  backgroundImage?: string;
}

export default function PageHero({
  subtitle,
  title,
  description,
  buttons,
  backgroundImage = "/homepage/heroBG.png"
}: PageHeroProps) {
  return (
    <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden isolate">
      <Image src={backgroundImage} alt="" fill className="object-cover -z-10" />
      <div className="absolute inset-0 z-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col text-white">
          {subtitle && <span className="text-sm font-bold tracking-wide mb-4 text-[#A8E6CF]">{subtitle}</span>}
          <h1 className="font-alt font-bold text-[40px] md:text-[56px] leading-[1.1]  text-white">
            {title}
          </h1>
        </div>
        <div className="flex flex-col text-white md:pl-12">
          {description && (
            <p className={`text-[16px] text-white/95 md:text-[18px] leading-[1.6] ${buttons ? 'mb-8' : ''}`}>
              {description}
            </p>
          )}
          {buttons && (
            <div className="flex flex-wrap gap-4 text-white">
              {buttons}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
