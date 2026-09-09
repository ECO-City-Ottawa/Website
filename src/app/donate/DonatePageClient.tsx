'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sprout } from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import PageHero from '@/components/ui/PageHero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function DonatePage() {
  const { t } = useLanguage();

  const actionCards = [
    { title: t('donate.action.card1.title'), desc: t('donate.action.card1.desc') },
    { title: t('donate.action.card2.title'), desc: t('donate.action.card2.desc') },
    { title: t('donate.action.card3.title'), desc: t('donate.action.card3.desc') },
    { title: t('donate.action.card4.title'), desc: t('donate.action.card4.desc') },
    { title: t('donate.action.card5.title'), desc: t('donate.action.card5.desc') },
    { title: t('donate.action.card6.title'), desc: t('donate.action.card6.desc') }
  ];

  const possibleTiers = [
    { amount: t('donate.possible.tier1.amount'), text: t('donate.possible.tier1.text') },
    { amount: t('donate.possible.tier2.amount'), text: t('donate.possible.tier2.text') },
    { amount: t('donate.possible.tier3.amount'), text: t('donate.possible.tier3.text') }
  ];

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white pb-0">

        {/* Page Hero */}
        <PageHero
          title={t('donate.hero.title')}
          description={t('donate.hero.description')}
          buttons={
            <>
              <a href="#how-to-give" className="bg-brand-green hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm text-center">
                {t('donate.hero.btn1')}
              </a>
              <Link
                href="/engagement#partner"
                className="border border-white/50 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm text-center"
              >
                {t('donate.hero.btn2')}
              </Link>
            </>
          }
          backgroundImage="/homepage/heroBG.png"
        />

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: t('breadcrumbs.home'), href: '/' },
            { label: t('donate.breadcrumbs.donate') },
          ]}
        />

        {/* ── Section 1: Your donation puts sustainability into action ─ */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="mb-16">
            <span className="text-xs bg-brand-green/10 text-brand-green font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              #Why It Matters
            </span>
            <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-text-strong mt-4 mb-6">
              {t('donate.action.title')}
            </h2>
            <p className="text-text-normal text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              {t('donate.action.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actionCards.map((card, idx) => (
              <div key={idx} className="bg-white border border-black/10 rounded-2xl p-8 hover:border-brand-green hover:shadow-sm transition-all duration-300 flex flex-col text-left">
                <h3 className="font-alt font-bold text-2xl text-text-strong mb-3">{card.title}</h3>
                <p className="text-text-normal text-base leading-relaxed mb-8 flex-grow">{card.desc}</p>
                <a href="#how-to-give" className="inline-flex items-center gap-1.5 text-brand-green font-bold text-base hover:underline mt-auto">
                  {t('donate.hero.btn1')} <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 2: See what your gift makes possible ────────── */}
        <section className="bg-gray-50 py-20 border-t border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-xs bg-brand-green/10 text-brand-green font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  #Your Impact
                </span>
                <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-text-strong mt-4">
                  {t('donate.possible.title')}
                </h2>
              </div>
              <div className="text-left md:text-right max-w-md">
                <p className="text-text-normal text-base leading-relaxed">
                  {t('donate.possible.taxReceipt')}<br />
                  <strong>{t('donate.possible.charityNo')}</strong>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {possibleTiers.map((tier, idx) => (
                <div key={idx} className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <span className="font-alt font-bold text-4xl text-brand-green block mb-6">{tier.amount}</span>
                    <p className="text-text-strong text-base leading-relaxed">{tier.text}</p>
                  </div>
                  <a href="#how-to-give" className="inline-flex items-center gap-1.5 text-brand-green font-bold text-base hover:underline mt-8">
                    {t('donate.possible.selectAmount')} <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Section 3: Choose how you'd like to give ─────────── */}

        <section id="how-to-give" className="section bg-brand-green/10 w-full relative overflow-hidden">
          <Sprout className="w-96 h-96 text-white absolute -bottom-16 -left-20 z-0" />
          <Sprout className="w-96 h-96 text-white absolute top-0 -right-20 rotate-270 z-0" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

              {/* Left Column */}
              <div className="lg:col-span-2">
                <span className="text-xs font-semibold text-text-strong/80 mb-4 uppercase tracking-wide block">
                  #How to Donate
                </span>
                <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-text-strong/90 mb-6 leading-tight">
                  {t('donate.choose.title')}
                </h2>
                <p className="text-text-strong/80 text-base leading-relaxed mb-8">
                  {t('donate.choose.subtitle')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-brand-green hover:bg-brand-green/80 text-white px-6 py-3 rounded-lg font-bold text-base transition-colors shadow-sm">
                    {t('donate.choose.btn1')}
                  </Link>
                  <Link href="/projects" className="border border-brand-green text-brand-green hover:bg-brand-green/5 px-6 py-3 rounded-lg font-bold text-base transition-colors">
                    {t('donate.choose.btn2')}
                  </Link>
                </div>
              </div>

              {/* Right Column Cards */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* CanadaHelps - impact page */}
                <div className="bg-white border border-black/5 rounded-2xl p-8 flex flex-col justify-between h-full transition-all duration-300 hover:border-brand-green/30 hover:shadow-sm">
                  <div>
                    <h3 className="font-alt font-bold text-2xl text-text-strong/90 mb-3">{t('donate.choose.card1.title')}</h3>
                    <p className="text-text-normal text-base leading-relaxed mb-8">
                      {t('donate.choose.card1.desc')}
                    </p>
                  </div>
                  <a href="https://www.canadahelps.org/en/charities/ottawa-biosphere-ecocity/impact/view/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-green font-bold text-base hover:underline mt-auto">
                    {t('donate.choose.card1.btn')} <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                {/* E-Transfer */}
                <div className="bg-white border border-black/5 rounded-2xl p-8 flex flex-col justify-between h-full transition-all duration-300 hover:border-brand-green/30 hover:shadow-sm">
                  <div>
                    <h3 className="font-alt font-bold text-2xl text-text-strong/90 mb-3">{t('donate.choose.card2.title')}</h3>
                    <p className="text-text-normal text-base leading-relaxed mb-8">
                      {t('donate.choose.card2.desc')}
                    </p>
                  </div>
                  <span className="text-text-strong/60 text-sm font-semibold mt-auto">{t('donate.choose.card2.footer')}</span>
                </div>

                {/* CanadaHelps - direct donation page */}
                <div className="bg-white border border-black/5 rounded-2xl p-8 sm:col-span-2 flex flex-col justify-between transition-all duration-300 hover:border-brand-green/30 hover:shadow-sm">
                  <div>
                    <h3 className="font-alt font-bold text-2xl text-text-strong/90 mb-3">{t('donate.choose.card3.title')}</h3>
                    <p className="text-text-normal text-base leading-relaxed mb-6">
                      {t('donate.choose.card3.desc')}
                    </p>
                  </div>
                  <a href="https://www.canadahelps.org/en/charities/ottawa-biosphere-ecocity/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-green font-bold text-base hover:underline mt-auto">
                    {t('donate.choose.card3.btn')} <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ── Section 4: Final Call to Action ──────────────── */}
        <section className=" py-24 text-center relative ">
          <Image src="/homepage/heroBG.png" alt="" fill className='object-contain -z-10' />
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-alt font-bold text-[36px] md:text-[56px] leading-[1.1] text-text-strong  mb-8">
              {t('donate.footer.title')}
            </h2>
            <a href="#how-to-give" className="inline-block bg-brand-green hover:opacity-90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-sm">
              {t('donate.hero.btn1')}
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
