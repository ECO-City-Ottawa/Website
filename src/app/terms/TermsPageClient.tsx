'use client';

import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import PageHero from '@/components/ui/PageHero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { useLanguage } from '@/context/LanguageContext';

export default function TermsPageClient() {
  const { t } = useLanguage();

  const sections = [
    { title: t('terms.acceptance.title'), body: t('terms.acceptance.body') },
    { title: t('terms.use.title'), body: t('terms.use.body') },
    { title: t('terms.content.title'), body: t('terms.content.body') },
    { title: t('terms.donations.title'), body: t('terms.donations.body') },
    { title: t('terms.links.title'), body: t('terms.links.body') },
    { title: t('terms.disclaimer.title'), body: t('terms.disclaimer.body') },
    { title: t('terms.liability.title'), body: t('terms.liability.body') },
    { title: t('terms.governing.title'), body: t('terms.governing.body') },
    { title: t('terms.changes.title'), body: t('terms.changes.body') },
  ];

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white pb-0">
        <PageHero
          title={t('terms.hero.title')}
          description={t('terms.hero.description')}
        />

        <Breadcrumbs
          items={[
            { label: t('breadcrumbs.home'), href: '/' },
            { label: t('terms.breadcrumbs.terms') },
          ]}
        />

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-text-normal mb-12">{t('terms.updated')}</p>

            <div className="space-y-10">
              {sections.map((s, i) => (
                <div key={i}>
                  <h2 className="font-alt font-bold text-2xl text-text-strong mb-3">{s.title}</h2>
                  <p className="text-text-normal text-base leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 pt-10 border-t border-black/10">
              <h2 className="font-alt font-bold text-2xl text-text-strong mb-3">{t('terms.contact.title')}</h2>
              <p className="text-text-normal text-base leading-relaxed mb-6">{t('terms.contact.body')}</p>
              <Link
                href="/contact"
                className="inline-block bg-brand-green hover:opacity-90 text-white px-6 py-3 rounded-lg font-bold text-base transition-colors shadow-sm"
              >
                {t('terms.contact.cta')}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
