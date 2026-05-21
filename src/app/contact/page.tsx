'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Mail, Phone, MapPin, Check } from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import PageHero from '@/components/ui/PageHero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    topic: 'General question',
    ward: '',
    city: 'Ottawa',
    language: 'English',
    message: '',
    consent: false
  });

  const faqs = [
    {
      q: t('contact.faq.q1'),
      a: t('contact.faq.a1')
    },
    {
      q: t('contact.faq.q2'),
      a: t('contact.faq.a2')
    },
    {
      q: t('contact.faq.q3'),
      a: t('contact.faq.a3')
    },
    {
      q: t('contact.faq.q4'),
      a: t('contact.faq.a4')
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message || !formData.consent) {
      alert(t('contact.form.alert'));
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white pb-0">
        
        {/* Page Hero */}
        <PageHero
          title={t('contact.hero.title')}
          description={t('contact.hero.description')}
          backgroundImage="/homepage/heroBG.png"
          buttons={
            <>
              <a href="#form" className="bg-[#2D7A5D] hover:bg-[#24634b] text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm text-center">
                {t('contact.hero.send')}
              </a>
              <Link
                href="/engagement#partner"
                className="border border-white/50 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm text-center"
              >
                {t('contact.hero.partner')}
              </Link>
            </>
          }
        />

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: t('breadcrumbs.home'), href: '/' },
            { label: t('contact.breadcrumbs.contact') },
          ]}
        />

        {/* Send message form */}
        <section id="form" className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Left Column Info */}
            <div className="lg:col-span-2">
              <span className="text-xs bg-[#2D7A5D]/10 text-[#2D7A5D] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                #form
              </span>
              <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-text-strong mt-4 mb-6">
                {t('contact.form.title')}
              </h2>
              <p className="text-text-normal text-base leading-relaxed">
                {t('contact.form.subtitle')}
              </p>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-3 bg-white border border-black/10 rounded-2xl p-8 md:p-12 shadow-sm">
              <h3 className="font-alt font-bold text-2xl text-text-strong text-center mb-2">
                {t('contact.form.cardTitle')}
              </h3>
              <p className="text-text-normal text-base text-center mb-8">
                {t('contact.form.cardSubtitle')}
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl p-8 text-center">
                  <h4 className="font-alt font-bold text-2xl mb-2">
                    {t('contact.form.successTitle')}
                  </h4>
                  <p className="text-base">
                    {t('contact.form.successText')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-semibold text-text-strong mb-2">
                        {t('contact.form.fullName')}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t('contact.form.fullNamePlaceholder')}
                        value={formData.fullName}
                        onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:border-[#2D7A5D] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-semibold text-text-strong mb-2">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t('contact.form.emailPlaceholder')}
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:border-[#2D7A5D] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-semibold text-text-strong mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        placeholder={t('contact.form.phonePlaceholder')}
                        value={formData.phone}
                        onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:border-[#2D7A5D] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-semibold text-text-strong mb-2">
                        {t('contact.form.topic')}
                      </label>
                      <select
                        value={formData.topic}
                        onChange={e => setFormData(prev => ({ ...prev, topic: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong focus:outline-none focus:border-[#2D7A5D] bg-white transition-colors"
                      >
                        <option value="General question">{t('contact.form.topicOption1')}</option>
                        <option value="Volunteering">{t('contact.form.topicOption2')}</option>
                        <option value="Partnership opportunities">{t('contact.form.topicOption3')}</option>
                        <option value="Media inquiries">{t('contact.form.topicOption4')}</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-semibold text-text-strong mb-2">
                        {t('contact.form.ward')}
                      </label>
                      <input
                        type="text"
                        placeholder={t('contact.form.wardPlaceholder')}
                        value={formData.ward}
                        onChange={e => setFormData(prev => ({ ...prev, ward: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:border-[#2D7A5D] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-semibold text-text-strong mb-2">
                        {t('contact.form.city')}
                      </label>
                      <select
                        value={formData.city}
                        onChange={e => setFormData(prev => ({ ...prev, city: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong focus:outline-none focus:border-[#2D7A5D] bg-white transition-colors"
                      >
                        <option>Ottawa</option>
                        <option>Gatineau</option>
                        <option>Kanata</option>
                        <option>Orleans</option>
                      </select>
                    </div>
                  </div>

                  {/* Language */}
                  <div>
                    <label className="block text-base font-semibold text-text-strong mb-2">
                      {t('contact.form.language')}
                    </label>
                    <select
                      value={formData.language}
                      onChange={e => setFormData(prev => ({ ...prev, language: e.target.value }))}
                      className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong focus:outline-none focus:border-[#2D7A5D] bg-white transition-colors"
                    >
                      <option value="English">{t('contact.form.languageOption1')}</option>
                      <option value="French">{t('contact.form.languageOption2')}</option>
                      <option value="Bilingual">{t('contact.form.languageOption3')}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-base font-semibold text-text-strong mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      required
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:border-[#2D7A5D] transition-colors resize-none"
                    />
                  </div>

                  {/* Consent */}
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={e => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                      className="w-5 h-5 rounded border-black/20 text-[#2D7A5D] mt-1 focus:ring-[#2D7A5D]"
                    />
                    <span className="text-base text-text-normal">
                      {t('contact.form.consent')}
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-[#2D7A5D] hover:bg-[#24634b] text-white py-4 rounded-lg font-bold text-base transition-colors shadow-sm text-center animate-pulse"
                  >
                    {t('contact.form.submit')}
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* Where We Are Map section */}
        <section className="max-w-7xl mx-auto px-6 py-12 text-center border-t border-black/5">
          <h2 className="font-alt font-bold text-[36px] md:text-[40px] text-text-strong mb-2">
            {t('contact.where.title')}
          </h2>
          <p className="text-text-normal text-base max-w-2xl mx-auto mb-10">
            {t('contact.where.subtitle')}
          </p>

          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-black/10 bg-gray-50 flex items-center justify-center p-4">
            {/* Visual mapping interface representation */}
            <div className="absolute inset-0 z-0 select-none">
              <iframe
                title="Ottawa Region Map representation"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179268.0469032549!2d-75.8978184518392!3d45.39999086111197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e1305e16ec!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute left-6 bottom-6 bg-white/95 backdrop-blur border border-black/10 p-4 rounded-xl shadow-md text-left z-10 max-w-xs">
              <div className="flex gap-2 items-start">
                <MapPin className="w-5 h-5 text-[#2D7A5D] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-text-strong text-base">{t('contact.where.hub')}</p>
                  <p className="text-text-normal text-sm mt-1">{t('contact.where.location')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick answers (FAQs) */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Left side text */}
            <div className="lg:col-span-2">
              <span className="text-xs bg-[#2D7A5D]/10 text-[#2D7A5D] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                #faq
              </span>
              <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-text-strong mt-4 mb-6">
                {t('contact.faq.title')}
              </h2>
              <p className="text-text-normal text-base leading-relaxed mb-8">
                {t('contact.faq.subtitle')}
              </p>
              <a href="#form" className="inline-block bg-[#2D7A5D] hover:bg-[#24634b] text-white px-6 py-3 rounded-lg font-bold text-base transition-colors shadow-sm">
                {t('contact.faq.contactUs')}
              </a>
            </div>

            {/* Right side accordion */}
            <div className="lg:col-span-3 divide-y divide-black/10">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="py-4 first:pt-0 last:pb-0">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between py-4 text-left font-bold text-lg text-text-strong hover:text-[#2D7A5D] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#2D7A5D]' : 'text-gray-400'}`} />
                    </button>
                    {isOpen && (
                      <div className="pb-4 text-text-normal text-base leading-relaxed animate-in fade-in slide-in-from-top-1 duration-300">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* CTA Preference Section */}
        <section className="bg-[#061D2F] py-20 w-full text-center relative overflow-hidden">
          <div className="absolute z-0 bg-[#114A77] top-0 right-0 w-[200px] h-[200px] rounded-full blur-[80px]" />
          <div className="absolute z-0 bg-[#114A77] bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] rounded-full blur-[100px]" />
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-white mb-4">
              {t('contact.prefer.title')}
            </h2>
            <p className="text-white/80 md:text-[18px] mb-8 max-w-2xl mx-auto">
              {t('contact.prefer.subtitle')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:info@ecocityottawa.ca" className="bg-white text-[#0A1D2E] hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-base transition-colors shadow-sm flex items-center gap-2">
                <Mail className="w-5 h-5" /> {t('contact.prefer.email')}
              </a>
              <a href="tel:+16135550199" className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold text-base transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" /> {t('contact.prefer.call')}
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
