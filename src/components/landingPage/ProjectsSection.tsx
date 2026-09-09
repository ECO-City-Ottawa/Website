'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { mockProjects } from '@/data/mockData';

export default function ProjectsSection() {
  const { t } = useLanguage();



  return (
    <section className="section bg-base-white w-full">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">

        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <span className="text-sm font-semibold text-text-strong mb-4 tracking-wide block">
            {t('projects.title')}
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-text-strong  mb-6">
            {t('projects.headline')}
          </h2>
          <p className="text-text-normal md:text-[18px] leading-[1.6]">
            {t('projects.description')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
          {mockProjects.slice(0, 3).map((project, i) => (
            <div key={i} className="flex flex-col rounded-2xl border border-black/10 overflow-hidden  bg-base-white">
              {/* Image Placeholder */}
              <div className="w-full aspect-[4/3] bg-black/5 relative">
                <Image
                  src={project.image}
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
