'use client';

import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import PageHero from '@/components/ui/PageHero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { useLanguage } from '@/context/LanguageContext';

export default function PrivacyPageClient() {
  const { t } = useLanguage();

  const sections = [
    { title: t('privacy.intro.title'), body: t('privacy.intro.body') },
    { title: t('privacy.collect.title'), body: t('privacy.collect.body') },
    { title: t('privacy.use.title'), body: t('privacy.use.body') },
    { title: t('privacy.share.title'), body: t('privacy.share.body') },
    { title: t('privacy.donations.title'), body: t('privacy.donations.body') },
    { title: t('privacy.cookies.title'), body: t('privacy.cookies.body') },
    { title: t('privacy.retention.title'), body: t('privacy.retention.body') },
    { title: t('privacy.rights.title'), body: t('privacy.rights.body') },
    { title: t('privacy.security.title'), body: t('privacy.security.body') },
    { title: t('privacy.children.title'), body: t('privacy.children.body') },
    { title: t('privacy.changes.title'), body: t('privacy.changes.body') },
  ];

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white pb-0">
        <PageHero
          title={t('privacy.hero.title')}
          description={t('privacy.hero.description')}
        />

        <Breadcrumbs
          items={[
            { label: t('breadcrumbs.home'), href: '/' },
            { label: t('privacy.breadcrumbs.privacy') },
          ]}
        />

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-text-normal mb-12">{t('privacy.updated')}</p>

            <div className="space-y-10">
              {sections.map((s, i) => (
                <div key={i}>
                  <h2 className="font-alt font-bold text-2xl text-text-strong mb-3">{s.title}</h2>
                  <p className="text-text-normal text-base leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 pt-10 border-t border-black/10">
              <h2 className="font-alt font-bold text-2xl text-text-strong mb-3">{t('privacy.contact.title')}</h2>
              <p className="text-text-normal text-base leading-relaxed mb-6">{t('privacy.contact.body')}</p>
              <Link
                href="/contact"
                className="inline-block bg-brand-green hover:opacity-90 text-white px-6 py-3 rounded-lg font-bold text-base transition-colors shadow-sm"
              >
                {t('privacy.contact.cta')}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
