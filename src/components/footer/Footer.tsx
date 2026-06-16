'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className=" border-t border-black/5 bg-base-soft">
      <div className="container-app grid gap-10 py-12 md:grid-cols-4">
        {/* Brand / blurb */}
        <div>
          <div className="text-lg font-semibold text-text-strong">OBEC</div>
          <p className="mt-3 max-w-xs text-text-normal">
            {t('footer.brandBlurb')}
          </p>
          <div className="mt-4 flex gap-2">
            <Link href="/donate" className="btn btn-secondary">{t('nav.donate')}</Link>
          </div>
          <div className="mt-4 flex items-center gap-3 text-text-normal">
            {/* TODO: replace with real OBEC social URL */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-text-strong">Fb</a>
            {/* TODO: replace with real OBEC social URL */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-text-strong">Ig</a>
            {/* TODO: replace with real OBEC social URL */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-text-strong">X</a>
            {/* TODO: replace with real OBEC social URL */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-text-strong">In</a>
          </div>
        </div>

        {/* Get involved */}
        <div>
          <div className="section-title text-xl">{t('footer.getInvolved')}</div>
          <ul className="mt-3 space-y-2 text-text-normal">
            <li><Link href="/engagement#volunteer" className="hover:text-text-strong">{t('nav.volunteer')}</Link></li>
            <li><Link href="/engagement" className="hover:text-text-strong">{t('footer.joinPal')}</Link></li>
            <li><Link href="/contact" className="hover:text-text-strong">{t('footer.partnerWithUs')}</Link></li>
            <li><Link href="/donate" className="hover:text-text-strong">{t('nav.donate')}</Link></li>
            <li><Link href="/engagement" className="hover:text-text-strong">{t('footer.startCsp')}</Link></li>
          </ul>
        </div>

        {/* Learn */}
        <div>
          <div className="section-title text-xl">{t('footer.learn')}</div>
          <ul className="mt-3 space-y-2 text-text-normal">
            <li><Link href="/about" className="hover:text-text-strong">{t('footer.aboutObec')}</Link></li>
            <li><Link href="/why-how" className="hover:text-text-strong">{t('nav.whyHow')}</Link></li>
            <li><Link href="/projects" className="hover:text-text-strong">{t('nav.projects')}</Link></li>
            <li><Link href="/news-events" className="hover:text-text-strong">{t('nav.newsEvents')}</Link></li>
            <li><Link href="/resources" className="hover:text-text-strong">{t('footer.resourcesTools')}</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="section-title text-xl">{t('footer.contactTitle')}</div>
          <ul className="mt-3 space-y-2 text-text-normal">
        
            <li>{t('footer.address')}</li>
            <li><Link href="/contact" className="hover:text-text-strong underline">{t('footer.contactUs')}</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="container-app flex flex-col items-center justify-between gap-3 py-6 text-sm text-text-normal md:flex-row">
          <p>{t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-text-strong">{t('footer.privacyPolicy')}</Link>
            <Link href="/terms" className="hover:text-text-strong">{t('footer.termsOfService')}</Link>
            <button className="hover:text-text-strong">{t('footer.cookieSettings')}</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
