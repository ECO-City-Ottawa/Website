'use client'

import Image from 'next/image';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ToolsOfEngagementSection() {
  const { t } = useLanguage();

  const libraryProjects = [
    {
      title: t('projects.project1.title'),
      desc: t('projects.project1.desc'),
      tags: [
        t('toolsOfEngagement.library.tags.habitat'), 
        t('toolsOfEngagement.library.tags.naturalCapital'), 
        t('toolsOfEngagement.library.tags.impact')
      ],
      imgSrc: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
    },
    {
      title: t('projects.project2.title'),
      desc: t('projects.project2.desc'),
      tags: [
        t('toolsOfEngagement.library.tags.energy'), 
        t('toolsOfEngagement.library.tags.education')
      ],
      imgSrc: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
    },
    {
      title: t('projects.project3.title'),
      desc: t('projects.project3.desc'),
      tags: [
        t('toolsOfEngagement.library.tags.economy'), 
        t('toolsOfEngagement.library.tags.cooperation')
      ],
      imgSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    }
  ];

  const demoProjects = [
    {
      title: t('toolsOfEngagement.demo.item1.title'),
      desc: t('toolsOfEngagement.demo.item1.desc'),
      imgSrc: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80",
    },
    {
      title: t('toolsOfEngagement.demo.item2.title'),
      desc: t('toolsOfEngagement.demo.item2.desc'),
      imgSrc: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80",
    }
  ];

  return (
    <section className="section bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Main Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 pt-16">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            {t('toolsOfEngagement.subtitle')}
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-text-strong mb-6 leading-tight">
            {t('toolsOfEngagement.title')}
          </h2>
          <p className="text-text-normal md:text-[18px]">
            {t('toolsOfEngagement.paragraph')}
          </p>
        </div>

        {/* Public Action Labs Section */}
        <div className="mb-28">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
              {t('toolsOfEngagement.pal.subtitle')}
            </span>
            <h3 className="font-alt font-bold text-3xl text-text-strong mb-6">
              {t('toolsOfEngagement.pal.title')}
            </h3>
            <p className="text-text-normal md:text-lg">
              {t('toolsOfEngagement.pal.paragraph')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* PAL Card 1 */}
            <div className="bg-white border border-black/10 rounded-2xl p-8  hover:shadow-md transition-shadow">
               <div className="text-[#3E8D61] font-bold text-3xl mb-12">
                 |
               </div>
               <h4 className="font-bold text-[20px] mb-4">
                 <span className="text-[#3E8D61]">SPARK-PAL</span> <span className="text-gray-400 font-normal">·</span> <span className="text-[#3E8D61] text-[15px]">{t('toolsOfEngagement.pal.card1.sub')}</span>
               </h4>
               <p className="text-text-normal text-[15px] leading-relaxed">
                 {t('toolsOfEngagement.pal.card1.desc')}
               </p>
            </div>
            
            {/* PAL Card 2 */}
            <div className="bg-white border border-black/10 rounded-2xl p-8  hover:shadow-md transition-shadow">
               <div className="text-[#3E8D61] font-bold text-3xl mb-12">
                 ||
               </div>
               <h4 className="font-bold text-[20px] mb-4">
                 <span className="text-[#3E8D61]">Engagement-PAL</span> <span className="text-gray-400 font-normal">·</span> <span className="text-[#3E8D61] text-[15px]">{t('toolsOfEngagement.pal.card2.sub')}</span>
               </h4>
               <p className="text-text-normal text-[15px] leading-relaxed">
                 {t('toolsOfEngagement.pal.card2.desc')}
               </p>
            </div>

            {/* PAL Card 3 */}
            <div className="bg-white border border-black/10 rounded-2xl p-8  hover:shadow-md transition-shadow">
               <div className="text-[#3E8D61] font-bold text-3xl mb-12 tracking-widest">
                 |||
               </div>
               <h4 className="font-bold text-[20px] mb-4 leading-tight">
                 <span className="text-[#3E8D61]">Community Sustainability PAL</span> <br className="hidden md:block lg:hidden" />
                 <span className="text-gray-400 font-normal hidden lg:inline"> · </span>
                 <span className="text-[#3E8D61] text-[15px]">{t('toolsOfEngagement.pal.card3.sub')}</span>
               </h4>
               <p className="text-text-normal text-[15px] leading-relaxed">
                 {t('toolsOfEngagement.pal.card3.desc')}
               </p>
            </div>
          </div>
        </div>

        {/* EcoCity Project Library Section */}
        <div className="mb-28">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-6">
            <div className="max-w-x flex flex-col lg:flex-row justify-between items-start w-full">
              <div className=' flex flex-col'>
                <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
                {t('toolsOfEngagement.library.subtitle')}
              </span>
              <h3 className="font-alt font-bold text-[32px] text-text-strong">
                {t('toolsOfEngagement.library.title')}
              </h3>
              </div>
              
            </div>
            <div className="max-w-xl text-text-normal text-[16px] leading-relaxed">
              {t('toolsOfEngagement.library.paragraph')}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {libraryProjects.map((project, i) => (
              <div key={i} className="bg-white border border-black/10 rounded-2xl overflow-hidden  hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="h-48 bg-gray-200 relative w-full">
                   <Image src={project.imgSrc} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-bold text-[20px] mb-3 text-text-strong">{project.title}</h4>
                  <p className="text-text-normal text-[15px] mb-6 flex-grow">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="bg-gray-100 text-text-strong text-[11px] px-2.5 py-1 rounded-md font-semibold tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-[#3E8D61] font-semibold text-[14px] flex items-center hover:opacity-80 transition-opacity mt-auto w-fit">
                    {t('toolsOfEngagement.library.viewProject')} <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
             <button className="border border-[#3E8D61] text-[#3E8D61] px-6 py-2.5 rounded-lg font-semibold text-[15px] hover:bg-[#3E8D61] hover:text-white transition-colors duration-300">
               {t('toolsOfEngagement.library.viewAll')}
             </button>
          </div>
        </div>

        {/* Pop-up Demonstration Events Section */}
        <div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             <div>
                <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
                  {t('toolsOfEngagement.demo.subtitle')}
                </span>
                <h3 className="font-alt font-bold text-[32px] text-text-strong mb-6 leading-tight">
                  {t('toolsOfEngagement.demo.title')}
                </h3>
                <p className="text-text-normal text-[16px] leading-relaxed mb-6">
                  {t('toolsOfEngagement.demo.paragraph1')}
                </p>
                <p className="text-text-normal text-[16px] leading-relaxed">
                  {t('toolsOfEngagement.demo.paragraph2')}
                </p>
             </div>
             <div className="flex flex-col gap-6">
                {demoProjects.map((demo, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-6 items-center bg-white border border-black/5 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group p-2 pr-6">
                     <div className="w-full sm:w-[220px] h-[140px] relative rounded-xl overflow-hidden shrink-0">
                        <Image src={demo.imgSrc} alt={demo.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                     </div>
                     <div className="w-full py-2">
                        <h4 className="font-bold text-[20px] text-text-strong mb-2 leading-tight">
                          {i === 1 ? <span className="underline decoration-text-strong/30 underline-offset-4">{demo.title}</span> : demo.title}
                        </h4>
                        <p className="text-text-normal text-[15px] mb-4">{demo.desc}</p>
                        <button className="text-text-strong font-semibold text-[14px] flex items-center hover:opacity-70 transition-opacity">
                          {t('toolsOfEngagement.demo.learnMore')} <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                     </div>
                  </div>
                ))}
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}
