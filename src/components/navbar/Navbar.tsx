'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import { Languages } from 'lucide-react'

const NAV_ITEMS = [
  { href: '/about', labelKey: 'nav.about' },
  { href: '/why-how', labelKey: 'nav.whyHow' },
  { href: '/projects', labelKey: 'nav.projects' },
  { href: '/news-events', labelKey: 'nav.newsEvents' },
  { href: '/engagement', labelKey: 'nav.engagement' },
  { href: '/resources', labelKey: 'nav.resources' },
  { href: '/contact', labelKey: 'nav.contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  // true when this nav item's route matches the current page (or a sub-route)
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')

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
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        open
          ? 'bg-transparent border-transparent backdrop-blur-none'
          : 'border-b border-black/5 bg-base-white/90 backdrop-blur'
      }`}
    >
      {/* Skip link */}
      <a
        href="#main"
        className="absolute left-4 top-2 -translate-y-12 rounded bg-base-white px-3 py-1 text-sm text-text-strong shadow focus:translate-y-0"
      >
        {t('skip.content')}
      </a>

      <div className="container-app flex flex-col lg:flex-row lg:items-center justify-between gap-2 lg:gap-4 py-3">

        {/* ── Logo row (mobile: full width) ───────────── */}
        <div className="flex items-center justify-between w-full lg:w-auto">

          {/* Logo / Brand */}
          <Link href="/" className="relative z-50 flex items-center gap-2">
            <span className="text-lg font-semibold text-text-strong">OBEC</span>
          </Link>

          <div className="flex gap-2 items-center">

            {/* Language toggle — mobile only */}
            <div className="flex lg:hidden items-center p-1 rounded">
              <button
                onClick={toggleLanguage}
                className="text-sm font-medium flex items-center pr-6 pl-3 py-1 bg-gray-100 rounded-full"
              >
                <div className="p-2 rounded">
                  <Languages className="w-4 h-4 inline-block min-w-max rounded text-black" />
                </div>
                {language === 'en' ? 'Français' : 'English'}
              </button>
            </div>

            {/* Hamburger button */}
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 inline-flex h-12 w-12 min-h-12 min-w-12 items-center justify-center rounded-full border-2 border-black/10 bg-base-white transition-colors hover:bg-black/5 lg:hidden"
            >
              <span className="sr-only">{t('toggle.menu')}</span>
              <div className="flex h-4 w-5 flex-col justify-between overflow-hidden">
                <span
                  className={`min-h-[2px] rounded h-[2px] w-full bg-current transition-all duration-300 ease-in-out ${
                    open ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`min-h-[2px] rounded h-[2px] w-full bg-current transition-all duration-300 ease-in-out ${
                    open ? 'translate-x-full opacity-0' : ''
                  }`}
                />
                <span
                  className={`min-h-[2px] rounded h-[2px] w-full bg-current transition-all duration-300 ease-in-out ${
                    open ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </div>
            </button>

          </div>
        </div>

        {/* ── Desktop nav ──────────────────────────────── */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.labelKey}
                href={item.href}
                className={`text-sm whitespace-nowrap px-3 py-1.5 rounded-lg transition-colors duration-150 ${
                  active
                    ? 'bg-brand-green/10 text-brand-green font-bold'
                    : 'text-text-normal font-normal hover:text-text-strong hover:bg-black/5'
                }`}
              >
                {t(item.labelKey)}
              </Link>
            )
          })}
        </nav>

        {/* ── Desktop actions ──────────────────────────── */}
        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={toggleLanguage}
            className="text-sm font-medium mr-2 px-2 py-1 rounded hover:bg-black/5 transition-colors"
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
          <Link href="/donate" className="btn btn-secondary">{t('nav.donate')}</Link>
          <Link href="/engagement#volunteer" className="btn btn-primary">{t('nav.volunteer')}</Link>
        </div>

      </div>

      {/* ── Full-screen mobile menu ───────────────────── */}
      <div
        id="mobile-menu"
        className={`fixed z-40 flex flex-col overflow-hidden bg-base-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open
            ? 'right-0 top-0 h-[100dvh] w-screen rounded-none opacity-100 pointer-events-auto'
            : 'right-4 top-3 h-10 w-10 rounded-2xl opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`flex h-full flex-col px-6 pb-8 pt-24 transition-opacity duration-300 ${
            open ? 'opacity-100 delay-200' : 'opacity-0'
          }`}
        >
          {/* Nav links */}
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.labelKey}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg py-3 px-3 text-3xl transition-colors ${
                    active
                      ? 'text-brand-green font-bold'
                      : 'font-semibold text-text-strong hover:text-brand-green'
                  }`}
                >
                  {t(item.labelKey)}
                </Link>
              )
            })}
          </div>

          {/* CTA buttons */}
          <div className="mt-auto flex flex-col gap-4">
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full justify-center py-4 text-lg"
            >
              {t('nav.donate')}
            </Link>
            <Link
              href="/engagement#volunteer"
              onClick={() => setOpen(false)}
              className="btn btn-secondary w-full justify-center py-4 text-lg"
            >
              {t('nav.volunteer')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
