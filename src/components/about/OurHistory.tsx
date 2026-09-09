'use client'

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function OurHistory() {
  const { t } = useLanguage();

  const timeline = [
    {
      year: "2009",
      text: t('ourHistory.timeline.2009')
    },
    {
      year: "2011",
      text: t('ourHistory.timeline.2011')
    },
    {
      year: "2013",
      text: t('ourHistory.timeline.2013')
    },
    {
      year: "2016",
      text: t('ourHistory.timeline.2016')
    }
  ];

  return (
    <section className="section bg-base-white w-full">
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Text Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <span className="text-xs font-semibold text-text-strong mb-2 uppercase tracking-wide block">
              {t('ourHistory.subtitle')}
            </span>
            <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-text-strong">
              {t('ourHistory.title')}
            </h2>
          </div>
          <div className="col-span-2 flex flex-col gap-6 text-text-normal md:text-[16px] leading-[1.6] pl-0 md:pl-8 border-l-0 md:border-l-[3px] border-brand-green/20">
            <p>
              {t('ourHistory.paragraph1')}
            </p>
            <p>
              {t('ourHistory.paragraph2')}
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-20 mb-16">
          {/* Desktop View */}
          <div className="hidden lg:grid grid-cols-4 grid-rows-[1fr_auto_1fr] gap-x-6 relative w-full">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-brand-green/30 -translate-y-1/2 z-0"></div>

            {timeline.map((item, index) => (
              <React.Fragment key={index}>
                {/* Card */}
                {index % 2 === 0 ? (
                  <div className="flex flex-col justify-end pb-4 z-10" style={{ gridColumn: index + 1, gridRow: 1 }}>
                    <div className="bg-gradient-to-br from-[#1F6D4A]/5 to-[#3CD38F]/5 rounded-2xl p-6">
                      <h3 className="font-alt font-bold text-[28px] text-brand-green mb-2">{item.year}</h3>
                      <p className="text-sm text-text-strong leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col justify-start pt-4 z-10" style={{ gridColumn: index + 1, gridRow: 3 }}>
                    <div className="bg-gradient-to-br from-[#1F6D4A]/5 to-[#3CD38F]/5 rounded-2xl p-6">
                      <h3 className="font-alt font-bold text-[28px] text-brand-green mb-2">{item.year}</h3>
                      <p className="text-sm text-text-strong leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                )}

                {/* Dot */}
                <div className="flex justify-center items-center z-10" style={{ gridColumn: index + 1, gridRow: 2 }}>
                  <div className="w-4 h-4 rounded-full bg-brand-green outline-[4px] outline-white"></div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Mobile View */}
          <div className="lg:hidden flex flex-col w-full">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4">
                {/* Marker column: dot + connecting line */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-brand-green outline-[4px] outline-white shrink-0 mt-1"></div>
                  {index < timeline.length - 1 && (
                    <div className="w-[2px] flex-1 bg-brand-green/30 my-1"></div>
                  )}
                </div>

                {/* Card */}
                <div className={`flex-1 bg-gradient-to-br from-[#1F6D4A]/5 to-[#3CD38F]/5 rounded-2xl p-6 border border-brand-green/10 ${index < timeline.length - 1 ? 'mb-6' : ''}`}>
                  <h3 className="font-alt font-bold text-[28px] text-brand-green mb-2">{item.year}</h3>
                  <p className="text-sm text-text-strong leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-black/5">
           <p className="text-[18px] md:text-[20px] font-medium text-text-strong max-w-4xl mx-auto">
             {t('ourHistory.bottom')}
           </p>
        </div>
      </div>
    </section>
  );
}
