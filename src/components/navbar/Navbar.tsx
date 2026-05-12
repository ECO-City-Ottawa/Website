'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const NAV_ITEMS = [
  { href: '/about', labelKey: 'nav.about' },
  { href: '/why-how', labelKey: 'nav.whyHow' },
  { href: '/projects', labelKey: 'nav.projects' },
  { href: '#', labelKey: 'nav.newsEvents' },
  { href: '#', labelKey: 'nav.engagement' },
  { href: '#', labelKey: 'nav.resources' },
  { href: '#', labelKey: 'nav.contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en')
  }

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-500 ${
      open ? 'bg-transparent border-transparent backdrop-blur-none' : 'border-b border-black/5 bg-base-white/90 backdrop-blur'
    }`}>
      {/* Skip link */}
      <a
        href="#main"
        className="absolute left-4 top-2 -translate-y-12 rounded bg-base-white px-3 py-1 text-sm text-text-strong shadow focus:translate-y-0"
      >
        {t('skip.content')}
      </a>

      <div className="container-app flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 py-3">
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo / Brand */}
          <Link href="#" className="relative z-50 flex items-center gap-2">
            <span className="text-lg font-semibold text-text-strong">OBEC</span>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-base-white transition-colors hover:bg-black/5 md:hidden"
          >
            <span className="sr-only">{t('toggle.menu')}</span>
            <div className="flex h-4 w-5 flex-col justify-between overflow-hidden">
              <span
                className={`h-0.5 w-full bg-current transition-all duration-300 ease-in-out ${
                  open ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-all duration-300 ease-in-out ${
                  open ? 'translate-x-full opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-all duration-300 ease-in-out ${
                  open ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.labelKey}
              href={item.href}
              className="text-sm text-text-normal hover:text-text-strong whitespace-nowrap"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        {/* Actions (desktop) */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggleLanguage}
            className="text-sm font-medium mr-2 px-2 py-1 rounded hover:bg-black/5 transition-colors"
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
          <Link href="#" className="btn btn-secondary">{t('nav.donate')}</Link>
          <Link href="#" className="btn btn-primary">{t('nav.volunteer')}</Link>
        </div>
        
        {/* Language Toggle under nav on mobile */}
        <div className="flex md:hidden items-center justify-end w-full px-1">
           <button
            onClick={toggleLanguage}
            className="text-sm font-medium px-3 py-1 rounded bg-black/5 hover:bg-black/10 transition-colors"
          >
            {language === 'en' ? 'Français' : 'English'}
          </button>
        </div>
      </div>

      {/* Full-screen animated mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed z-40 flex flex-col overflow-hidden bg-base-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open
            ? 'right-0 top-0 h-[100dvh] w-screen rounded-none opacity-100 pointer-events-auto'
            : 'right-4 top-3 h-10 w-10 rounded-full opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`flex h-full flex-col px-6 pb-8 pt-24 transition-opacity duration-300 ${
            open ? 'opacity-100 delay-200' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.labelKey}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg py-3 text-3xl font-semibold text-text-strong transition-colors hover:text-brand-green"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <Link href="#" onClick={() => setOpen(false)} className="btn btn-primary w-full justify-center py-4 text-lg">
              {t('nav.donate')}
            </Link>
            <Link href="#" onClick={() => setOpen(false)} className="btn btn-secondary w-full justify-center py-4 text-lg">
              {t('nav.volunteer')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
