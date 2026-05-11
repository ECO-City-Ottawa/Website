'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV = [
  { href: '/about', label: 'About' },
  { href: '/why-how', label: 'Why & How' },
  { href: '/projects', label: 'Projects' },
  { href: '#', label: 'News & Events' },
  { href: '#', label: 'Engagement' },
  { href: '#', label: 'Resources' },
  { href: '#', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

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

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-500 ${
      open ? 'bg-transparent border-transparent backdrop-blur-none' : 'border-b border-black/5 bg-base-white/90 backdrop-blur'
    }`}>
      {/* Skip link */}
      <a
        href="#main"
        className="absolute left-4 top-2 -translate-y-12 rounded bg-base-white px-3 py-1 text-sm text-text-strong shadow focus:translate-y-0"
      >
        Skip to content
      </a>

      <div className="container-app flex items-center justify-between gap-4 py-3">
        {/* Logo / Brand */}
        <Link href="#" className="relative z-50 flex items-center gap-2">
          {/* Replace with your logo */}
          <span className="text-lg font-semibold text-text-strong">OBEC</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-text-normal hover:text-text-strong"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions (desktop) */}
        <div className="hidden items-center gap-2 md:flex">
          <Link href="#" className="btn btn-secondary">Donate</Link>
          <Link href="#" className="btn btn-primary">Volunteer</Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-base-white transition-colors hover:bg-black/5 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
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
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg py-3 text-3xl font-semibold text-text-strong transition-colors hover:text-brand-green"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <Link href="#" onClick={() => setOpen(false)} className="btn btn-primary w-full justify-center py-4 text-lg">
              Donate
            </Link>
            <Link href="#" onClick={() => setOpen(false)} className="btn btn-secondary w-full justify-center py-4 text-lg">
              Volunteer
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
