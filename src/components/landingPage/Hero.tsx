'use client'

import { ArrowRightIcon, Sprout } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start lg:justify-center section relative isolate">
      <Image src="/homepage/heroBG.png" alt={t('hero.title')} fill className="object-cover -z-10  opacity-5" />
     
      {/* Top Text Content */}
      <div className="max-w-4xl mx-auto text-center lg:space-y-6 space-y-4 bg-white/5 backdrop-blur-2xl rounded-full px-6 py-6">
        <h1 className="font-alt font-bold text-[48px] md:text-[56px] leading-[1.1] text-text-strong tracking-tight">
          {t('hero.title')}
        </h1>
        
        <p className="text-base lg:text-[18px] leading-[1.5] text-text-normal max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="/donate" className="btn btn-primary px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-sm">
            {t('nav.donate')}
          </Link>
          <Link href="/engagement#volunteer" className="btn btn-secondary px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-sm">
            {t('nav.volunteer')}
          </Link>
          <Link href="/engagement" className="border border-black/20 text-text-strong hover:bg-black/5 px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-sm flex items-center gap-2">
            {t('hero.joinUs')} <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Non-profit Badge / Info */}
        <div className="flex items-center text-left justify-center gap-2 pt-6 text-xs lg:text-sm font-medium text-text-normal">
          <Sprout className="min-w-4 min-h-4 text-brand-green" />
          <span>{t('hero.badge')}</span>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="w-full relative  max-w-6xl mx-auto mt-8 lg:mt-16 rounded-[24px] overflow-hidden  bg-black/5 aspect-square max-h-[500px] md:max-h-full lg:aspect-[21/9]">
          <Image
            src="/homepage/hero.png"
            alt="Ottawa riverfront and green space"
            fill
            priority
            className="w-full rounded-xl object-cover"
          />
      </div>

      {/* Bottom Subtext */}
      <div className="w-full max-w-6xl mx-auto mt-3 text-right">
        <p className="text-xs lg:text-sm text-text-normal font-medium">
          {t('hero.subtext')}
        </p>
      </div>

    </section>
  )
}
