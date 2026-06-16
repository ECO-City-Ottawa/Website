'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import {
  ArrowRight,
  BookOpen,
  HeartHandshake,
  Newspaper,
} from 'lucide-react'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const PRIMARY_NAV_ITEMS = [
  { href: '/', labelKey: 'nav.home' },
  { href: '/about', labelKey: 'nav.about' },
  { href: '/why-how', labelKey: 'nav.whyHow' },
  { href: '/projects', labelKey: 'nav.projects' },
  { href: '/contact', labelKey: 'nav.contact' },
]

const DROPDOWN_ACTIVE_HREFS = [
  '/news-events',
  '/news',
  '/events',
  '/engagement',
  '/resources',
]

const FEATURED_DROPDOWN_ITEMS = [
  {
    href: '/news-events',
    labelKey: 'nav.newsEvents',
    descriptionKey: 'newsEvents.subtitle',
    icon: Newspaper,
  },
  {
    href: '/engagement',
    labelKey: 'nav.engagement',
    descriptionKey: 'engagement.hero.description',
    icon: HeartHandshake,
  },
  {
    href: '/resources',
    labelKey: 'nav.resources',
    descriptionKey: 'resources.hero.description',
    icon: BookOpen,
  },
]

const MOBILE_NAV_ITEMS = [
  { href: '/', labelKey: 'nav.home' },
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
  const [desktopNavValue, setDesktopNavValue] = useState('')
  const [hoveredNavKey, setHoveredNavKey] = useState<string | null>(null)
  const [navPill, setNavPill] = useState({ left: 0, width: 0, opacity: 0 })
  const navListRef = useRef<HTMLUListElement>(null)
  const navPillTargets = useRef<Record<string, HTMLElement | null>>({})
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  // true when this nav item's route matches the current page (or a sub-route)
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')

  const isDropdownActive = () =>
    DROPDOWN_ACTIVE_HREFS.some((href) => isActive(href))

  const activeNavKey = isDropdownActive()
    ? 'nav.more'
    : PRIMARY_NAV_ITEMS.find((item) => isActive(item.href))?.labelKey ?? null

  const highlightedNavKey =
    hoveredNavKey ?? (desktopNavValue === 'more' ? 'nav.more' : activeNavKey)

  const setNavPillTarget = (key: string) => (node: HTMLElement | null) => {
    navPillTargets.current[key] = node
  }

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

  useEffect(() => {
    const updateNavPill = () => {
      const target = highlightedNavKey ? navPillTargets.current[highlightedNavKey] : null
      const list = navListRef.current

      if (!target || !list) {
        setNavPill((current) =>
          current.opacity === 0 ? current : { ...current, opacity: 0 }
        )
        return
      }

      const targetRect = target.getBoundingClientRect()
      const listRect = list.getBoundingClientRect()

      setNavPill({
        left: targetRect.left - listRect.left,
        width: targetRect.width,
        opacity: 1,
      })
    }

    updateNavPill()
    window.addEventListener('resize', updateNavPill)

    return () => window.removeEventListener('resize', updateNavPill)
  }, [highlightedNavKey, language, pathname])


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

      <div className="px-4 sm:px-6 lg:px-8 flex flex-col py-3 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-4">

        {/* ── Logo row (mobile: full width) ───────────── */}
        <div className="flex items-center justify-between w-full lg:w-auto lg:justify-start">

          {/* Logo / Brand */}
          <Link href="/" className="relative z-50 flex items-center gap-2">
            <Image src={"/Ecocity logo.png"} alt="Logo" width={80} height={50} />
          </Link>

          <div className="flex gap-2 items-center">

            {/* Language Switcher — mobile only */}
            <div className="flex lg:hidden items-center gap-1.5 bg-black/[0.03] border border-black/5 p-1 rounded-xl">
             
              <div className="relative flex bg-black/[0.04] p-0.5 rounded-lg h-[30px] w-[68px] items-center">
                <div
                  className={`absolute top-0.5 bottom-0.5 w-[32px] bg-base-white rounded-md shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    language === 'en' ? 'left-0.5' : 'left-[34px]'
                  }`}
                />
                <button
                  onClick={() => setLanguage('en')}
                  className={`relative z-10 w-[32px] h-[26px] rounded-md flex items-center justify-center text-xs font-semibold transition-colors duration-200 ${
                    language === 'en' ? 'text-text-strong' : 'text-text-normal hover:text-text-strong'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('fr')}
                  className={`relative z-10 w-[32px] h-[26px] rounded-md flex items-center justify-center text-xs font-semibold transition-colors duration-200 ${
                    language === 'fr' ? 'text-text-strong' : 'text-text-normal hover:text-text-strong'
                  }`}
                >
                  FR
                </button>
              </div>
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
        <NavigationMenu
          className="hidden flex-none lg:flex"
          delayDuration={80}
          onValueChange={setDesktopNavValue}
          skipDelayDuration={200}
          value={desktopNavValue}
        >
          <NavigationMenuList
            ref={navListRef}
            onMouseLeave={() => setHoveredNavKey(null)}
            className="relative rounded-xl bg-brand-green/5 p-1"
          >
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute left-0 top-1 bottom-1 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                highlightedNavKey === activeNavKey
                  ? 'bg-brand-green/10'
                  : 'bg-black/5'
              }`}
              style={{
                opacity: navPill.opacity,
                transform: `translateX(${navPill.left}px)`,
                width: `${navPill.width}px`,
              }}
            />

            {PRIMARY_NAV_ITEMS.map((item) => {
              const active = isActive(item.href)
              return (
                <NavigationMenuItem key={item.labelKey}>
                  <NavigationMenuLink asChild active={active}>
                    <Link
                      ref={setNavPillTarget(item.labelKey)}
                      href={item.href}
                      onFocus={() => setHoveredNavKey(item.labelKey)}
                      onMouseEnter={() => setHoveredNavKey(item.labelKey)}
                      className={`relative z-10 inline-flex h-10 items-center rounded-lg px-3 text-base whitespace-nowrap transition-colors duration-150 hover:no-underline ${
                        active
                          ? 'font-bold text-brand-green'
                          : 'font-normal text-text-normal hover:text-text-strong'
                      }`}
                    >
                      {t(item.labelKey)}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}

            <NavigationMenuItem value="more">
              <NavigationMenuTrigger
                ref={setNavPillTarget('nav.more')}
                onFocus={() => setHoveredNavKey('nav.more')}
                onMouseEnter={() => setHoveredNavKey('nav.more')}
                className={`${
                  isDropdownActive()
                    ? 'font-bold text-brand-green'
                    : 'font-normal text-text-normal hover:text-text-strong'
                }`}
              >
                {t('nav.more')}
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <div className="max-h-[calc(100dvh-88px)] overflow-y-auto bg-base-white">
                  <div className="mx-auto  w-full max-w-7xl gap-8 px-6 py-8 flex lg:px-8">
                    <div className="lg:w-2/3">
                      <div className="mb-5 flex items-end justify-between gap-6">
                        <div>
                          <p className="text-xs font-semibold text-brand-green">
                            {language === 'en' ? 'Explore' : 'Explorer'}
                          </p>
                          <h2 className="mt-2 font-alt text-2xl font-bold text-text-strong">
                            {language === 'en'
                              ? 'Find your next step with OBEC'
                              : 'Trouvez votre prochaine étape avec l’OBEC'}
                          </h2>
                        </div>
                        <Link
                          href="/contact"
                          className="hidden items-center gap-1.5 rounded-md border border-black/10 px-4 py-2 text-sm font-semibold text-text-strong transition-colors hover:bg-black/5 hover:no-underline xl:inline-flex"
                        >
                          {t('nav.contact')}
                          <ArrowRight className="size-4" />
                        </Link>
                      </div>

                      <div className="grid gap-3 md:grid-cols-3 ">
                        {FEATURED_DROPDOWN_ITEMS.map((item) => {
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="group flex min-h-56 flex-col rounded-lg hover:bg-brand-green  transtion-all ease-in-out group   bg-brand-green/5 p-5 transition-all duration-200 hover:border-brand-green/30  hover:no-underline"
                            >
                           
                              <span className="font-alt text-xl font-bold leading-tight text-text-strong group-hover:text-white">
                                {t(item.labelKey)}
                              </span>
                              <span className="mt-3 text-sm leading-6 text-text-normal line-clamp-2 group-hover:text-white">
                                {t(item.descriptionKey)}
                              </span>
                              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold text-brand-green group-hover:text-white">
                                {t('newsEvents.readMore')}
                                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                              </span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>

                    <div className="grid gap-5 lg:w-1/3">
                    

                      <Link
                        href="/projects"
                        className="group relative hidden min-h-full overflow-hidden rounded-lg bg-brand-green text-white hover:no-underline lg:block"
                      >
                        <Image
                          src="/homepage/heroBG.png"
                          alt=""
                          fill
                          sizes="180px"
                          className="object-cover opacity-35 transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="relative z-10 flex h-full flex-col justify-end p-4">
                          <span className="font-alt text-xl font-bold leading-tight">
                            {t('projects.title')}
                          </span>
                          <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold">
                            {t('projects.viewAll')}
                            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* ── Desktop actions ──────────────────────────── */}
        <div className="hidden items-center gap-4 justify-end lg:flex">
          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 bg-black/[0.03] border border-black/5 p-1 rounded-full">
           
            <div className="relative flex bg-black/[0.04] p-0.5 rounded-full  items-center">
              <div
                className={`absolute top-0.5 bottom-0.5 w-[32px] h-[32px] bg-base-white rounded-full shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  language === 'en' ? 'left-0.5' : 'left-[34px]'
                }`}
              />
              <button
                onClick={() => setLanguage('en')}
                className={`relative z-10  w-[32px] text-sm h-[32px] rounded-full flex items-center justify-center  font-semibold transition-colors duration-200 ${
                  language === 'en' ? 'text-text-strong' : 'text-text-normal hover:text-text-strong'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`relative z-10 w-[32px] h-[32px]   text-sm rounded-full flex items-center justify-center font-semibold transition-colors duration-200 ${
                  language === 'fr' ? 'text-text-strong' : 'text-text-normal hover:text-text-strong'
                }`}
              >
                FR
              </button>
            </div>
          </div>

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
            {MOBILE_NAV_ITEMS.map((item) => {
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
