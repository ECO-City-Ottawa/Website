'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, MapPin } from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import PageHero from '@/components/ui/PageHero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import JoinMissionCta from '@/components/about/JoinMissionCta';
import { useLanguage } from '@/context/LanguageContext';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CONTACT_FIELD_IDS: Record<string, string> = {
  fullName: 'contact-full-name',
  email: 'contact-email',
  message: 'contact-message',
  consent: 'contact-consent',
};

export default function ContactPage() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
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

  const validateContactForm = () => {
    const next: Record<string, string> = {};
    if (!formData.fullName.trim()) next.fullName = t('contact.form.error.fullName');
    if (!formData.email.trim()) next.email = t('contact.form.error.email');
    else if (!EMAIL_RE.test(formData.email.trim())) next.email = t('contact.form.error.emailInvalid');
    if (!formData.message.trim()) next.message = t('contact.form.error.message');
    if (!formData.consent) next.consent = t('contact.form.error.consent');
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const nextErrors = validateContactForm();
    setErrors(nextErrors);

    const firstErrorField = Object.keys(nextErrors)[0];
    if (firstErrorField) {
      const el = document.getElementById(CONTACT_FIELD_IDS[firstErrorField]);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el?.focus({ preventScroll: true });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Request failed');
      setFormSubmitted(true);
    } catch {
      setSubmitError(t('contact.form.submitError'));
    } finally {
      setIsSubmitting(false);
    }
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
            <div className="lg:col-span-3 bg-white border border-gray-200 rounded-2xl p-8 md:p-12 ">
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
                <form onSubmit={handleSubmit} noValidate className="space-y-6">

                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-full-name" className="block text-base font-semibold text-text-strong mb-2">
                        {t('contact.form.fullName')}
                      </label>
                      <input
                        id="contact-full-name"
                        type="text"
                        placeholder={t('contact.form.fullNamePlaceholder')}
                        value={formData.fullName}
                        onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'contact-full-name-error' : undefined}
                        className={`w-full px-4 py-3 border rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${errors.fullName ? 'border-error focus:ring-error' : 'border-black/10 focus:ring-green-700'}`}
                      />
                      {errors.fullName && (
                        <p id="contact-full-name-error" role="alert" className="mt-1.5 text-sm text-error">{errors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-base font-semibold text-text-strong mb-2">
                        {t('contact.form.email')}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder={t('contact.form.emailPlaceholder')}
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        className={`w-full px-4 py-3 border rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${errors.email ? 'border-error focus:ring-error' : 'border-black/10 focus:ring-green-700'}`}
                      />
                      {errors.email && (
                        <p id="contact-email-error" role="alert" className="mt-1.5 text-sm text-error">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-phone" className="block text-base font-semibold text-text-strong mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder={t('contact.form.phonePlaceholder')}
                        value={formData.phone}
                        onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-topic" className="block text-base font-semibold text-text-strong mb-2">
                        {t('contact.form.topic')}
                      </label>
                      <select
                        id="contact-topic"
                        value={formData.topic}
                        onChange={e => setFormData(prev => ({ ...prev, topic: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent bg-white transition-colors"
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
                      <label htmlFor="contact-ward" className="block text-base font-semibold text-text-strong mb-2">
                        {t('contact.form.ward')}
                      </label>
                      <input
                        id="contact-ward"
                        type="text"
                        placeholder={t('contact.form.wardPlaceholder')}
                        value={formData.ward}
                        onChange={e => setFormData(prev => ({ ...prev, ward: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-city" className="block text-base font-semibold text-text-strong mb-2">
                        {t('contact.form.city')}
                      </label>
                      <select
                        id="contact-city"
                        value={formData.city}
                        onChange={e => setFormData(prev => ({ ...prev, city: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent bg-white transition-colors"
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
                    <label htmlFor="contact-language" className="block text-base font-semibold text-text-strong mb-2">
                      {t('contact.form.language')}
                    </label>
                    <select
                      id="contact-language"
                      value={formData.language}
                      onChange={e => setFormData(prev => ({ ...prev, language: e.target.value }))}
                      className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent bg-white transition-colors"
                    >
                      <option value="English">{t('contact.form.languageOption1')}</option>
                      <option value="French">{t('contact.form.languageOption2')}</option>
                      <option value="Bilingual">{t('contact.form.languageOption3')}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-base font-semibold text-text-strong mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="contact-message"
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={`w-full px-4 py-3 border rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-colors resize-none ${errors.message ? 'border-error focus:ring-error' : 'border-black/10 focus:ring-green-700'}`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" role="alert" className="mt-1.5 text-sm text-error">{errors.message}</p>
                    )}
                  </div>

                  {/* Consent */}
                  <div>
                    <label htmlFor="contact-consent" className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        id="contact-consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={e => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                        aria-invalid={!!errors.consent}
                        aria-describedby={errors.consent ? 'contact-consent-error' : undefined}
                        className={`w-5 h-5 rounded mt-1 text-[#2D7A5D] focus:ring-[#2D7A5D] ${errors.consent ? 'border-error' : 'border-black/20'}`}
                      />
                      <span className="text-base text-text-normal">
                        {t('contact.form.consent')}
                      </span>
                    </label>
                    {errors.consent && (
                      <p id="contact-consent-error" role="alert" className="mt-1.5 text-sm text-error">{errors.consent}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2D7A5D] hover:bg-[#24634b] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-lg font-bold text-base transition-colors shadow-sm text-center"
                  >
                    {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                  </button>
                  {submitError && (
                    <p role="alert" className="text-sm text-error text-center">{submitError}</p>
                  )}
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
        <JoinMissionCta
          title={t('contact.prefer.title')}
          description={t('contact.prefer.subtitle')}
          buttons={[
            { label: t('contact.prefer.email'), href: 'mailto:info@ecocityottawa.ca', variant: 'primary' },
            { label: t('contact.prefer.call'), href: 'tel:+16135550199', variant: 'secondary' }
          ]}
        />

      </main>
      <Footer />
    </>
  );
}
