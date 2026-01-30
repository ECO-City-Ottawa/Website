'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV = [
  { href: '/about', label: 'About' },
  { href: '/why-and-how', label: 'Why & How' },
  { href: '/projects', label: 'Projects' },
  { href: '/news', label: 'News & Events' },
  { href: '/engagement', label: 'Engagement' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-base-white/90 backdrop-blur">
      {/* Skip link */}
      <a
        href="#main"
        className="absolute left-4 top-2 -translate-y-12 rounded bg-base-white px-3 py-1 text-sm text-text-strong shadow focus:translate-y-0"
      >
        Skip to content
      </a>

      <div className="container-app flex items-center justify-between gap-4 py-3">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          {/* Replace with your logo */}
          <span className="text-lg font-semibold text-text-strong">OBEC</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-text-normal hover:text-text-strong"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions (desktop) */}
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/donate" className="btn btn-secondary">Donate</Link>
          <Link href="/volunteer" className="btn btn-primary">Volunteer</Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? 'block' : 'hidden'} border-t border-black/5 bg-base-white`}
      >
        <div className="container-app flex flex-col gap-3 py-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-text-strong"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex gap-2">
            <Link href="/donate" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              Donate
            </Link>
            <Link href="/volunteer" onClick={() => setOpen(false)} className="btn btn-secondary w-full">
              Volunteer
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
