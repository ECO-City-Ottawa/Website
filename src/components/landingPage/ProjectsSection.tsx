'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      imageSrc: "https://images.unsplash.com/photo-1699163204279-9993707cbe5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3R0YXdhfGVufDB8fDB8fHww",
      title: t('projects.project1.title'),
      slug: "adopt-a-ditch",
      description: t('projects.project1.desc'),
      tags: [t('projects.project1.tags.0'), t('projects.project1.tags.1'), t('projects.project1.tags.2')]
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1587825293361-a1c114a39e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG90dGF3YXxlbnwwfHwwfHx8MA%3D%3D",
      title: t('projects.project2.title'),
      slug: "electrical-system-simulation",
      description: t('projects.project2.desc'),
      tags: [t('projects.project2.tags.0'), t('projects.project2.tags.1')]
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1513804277545-af322c6d7f44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG90dGF3YXxlbnwwfHwwfHx8MA%3D%3D",
      title: t('projects.project3.title'),
      slug: "my-sustainable-business-path",
      description: t('projects.project3.desc'),
      tags: [t('projects.project3.tags.0'), t('projects.project3.tags.1')]
    }
  ];

  return (
    <section className="section bg-base-white w-full">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center max-w-3xl mb-12">
          <span className="text-sm font-semibold text-text-strong mb-4 tracking-wide block">
            {t('projects.title')}
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-text-strong tracking-tight mb-6">
            {t('projects.headline')}
          </h2>
          <p className="text-text-normal md:text-[18px] leading-[1.6]">
            {t('projects.description')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
          {projects.map((project, i) => (
            <div key={i} className="flex flex-col rounded-2xl border border-black/10 overflow-hidden  bg-base-white">
              {/* Image Placeholder */}
              <div className="w-full aspect-[4/3] bg-black/5 relative">
                <Image 
                  src={project.imageSrc} 
                  alt={project.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
              
              {/* Content */}
              <div className="lg:p-8 p-4 flex flex-col flex-grow">
                <h3 className="font-alt font-bold text-[24px] leading-tight text-text-strong mb-3">
                  {project.title}
                </h3>
                <p className="text-text-normal text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-black/5 text-text-strong text-xs font-semibold px-3 py-1.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Link */}
                <div className="mt-auto">
                  <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1 text-brand-green font-medium text-sm hover:underline">
                    {t('projects.viewProject')} <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-text-strong font-medium text-sm">{t('projects.exploreCount')}</p>
          <Link href="/projects" className="btn-secondary rounded-lg px-6 py-3 font-medium text-sm">
            {t('projects.viewAll')}
          </Link>
        </div>

      </div>
    </section>
  );
}
