'use client'

import { ArrowRightIcon, Sprout } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="w-full  max-h-[1200px] h-screen  flex flex-col items-start justify-start  section relative isolate pt-8">
      <Image src="/homepage/heroBG.png" alt={t('hero.title')} fill className="object-cover -z-10  opacity-40" />
      <div className='absolute bg-gradient-to-b from-white via-white/80 to-transparent inset-0 -z-5'></div>
      {/* Top Text Content */}
      <div className="max-w-7xl  w-full mx-auto text-center lg:text-left  space-y-4 bg-white/50  rounded-full px-6 py-6">
        <div className='flex flex-col lg:flex-row justify-between gap-8 w-full'>
          <div className='w-full flex flex-col gap-4'>
               {/* Non-profit Badge / Info */}
        <div className="flex items-center text-left lg:justify-start lg:justify-start justify-center gap-2 text-xs lg:text-sm font-medium text-text-normal">
          
          <span>{t('hero.badge')}</span>
        </div>
                {/* Bottom Subtext */}
  
            <h1 className="font-alt  max-w-xl font-bold text-[48px] md:text-[56px] leading-[1.2] text-text-strong  max-w-3xl mx-auto lg:mx-0">
              {t('hero.title')}
            </h1>
          </div>
          <div className='w-full'>
            <p className="text-base lg:text-[18px] lg:mt-4 leading-[1.5] text-text-normal max-w-[400px] mx-auto lg:mx-none">
              {t('hero.description')}
            </p>
          </div>
        </div>


        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center lg:items-start lg:justify-start  justify-center gap-4 pt-4">
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

     
      </div>

      {/* Image Placeholder */}
      <div className="w-full relative   mx-auto  rounded-[24px] overflow-hidden  bg-black/5 aspect-square max-h-[600px] md:max-h-full lg:aspect-video lg:mt-12">
        <Image
          src="/homepage/hero1.jpg"
          alt="Ottawa riverfront and green space"
          fill
          priority
          className="w-full rounded-xl object-cover"
        />
      </div>

      <div className="w-full max-w-6xl mx-auto mt-3 text-right">
        <p className="text-xs lg:text-sm text-text-normal font-medium">
          {t('hero.subtext')}
        </p>
      </div>

    </section>
  )
}
