'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  HeartHandshake,
  Leaf,
  Sprout,
  Users
} from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import PageHero from '@/components/ui/PageHero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import JoinMissionCta from '@/components/about/JoinMissionCta';
import { useLanguage } from '@/context/LanguageContext';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VOLUNTEER_FIELD_IDS: Record<string, string> = {
  fullName: 'volunteer-full-name',
  email: 'volunteer-email',
  consent: 'volunteer-consent',
};

export default function EngagementPage() {
  const { t, language } = useLanguage();

  // FAQs Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Ottawa',
    ward: '',
    availability: 'Flexible',
    interests: [] as string[],
    language: 'English',
    roles: [] as string[],
    skills: '',
    consent: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleRoleChange = (role: string) => {
    setFormData(prev => ({
      ...prev,
      roles: prev.roles.includes(role)
        ? prev.roles.filter(r => r !== role)
        : [...prev.roles, role]
    }));
  };

  const handleInterestSelect = (theme: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(theme)
        ? prev.interests.filter(t => t !== theme)
        : prev.interests.length < 3
        ? [...prev.interests, theme]
        : prev.interests
    }));
  };

  const validateVolunteerForm = () => {
    const next: Record<string, string> = {};
    if (!formData.fullName.trim()) next.fullName = t('engagement.volunteer.error.fullName');
    if (!formData.email.trim()) next.email = t('engagement.volunteer.error.email');
    else if (!EMAIL_RE.test(formData.email.trim())) next.email = t('engagement.volunteer.error.emailInvalid');
    if (!formData.consent) next.consent = t('engagement.volunteer.error.consent');
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const nextErrors = validateVolunteerForm();
    setErrors(nextErrors);

    const firstErrorField = Object.keys(nextErrors)[0];
    if (firstErrorField) {
      const el = document.getElementById(VOLUNTEER_FIELD_IDS[firstErrorField]);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el?.focus({ preventScroll: true });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Request failed');
      setFormSubmitted(true);
    } catch {
      setSubmitError(t('engagement.volunteer.submitError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const rolesList = [
    { value: 'One-time events', label: language === 'en' ? 'One-time events' : 'Événements ponctuels' },
    { value: 'Ongoing volunteer', label: language === 'en' ? 'Ongoing volunteer' : 'Bénévole régulier' },
    { value: 'PAL facilitator', label: language === 'en' ? 'PAL facilitator' : 'Animateur PAL' },
    { value: 'CSP coordinator', label: language === 'en' ? 'CSP coordinator' : 'Coordonnateur PDC' },
    { value: 'Communications/Design', label: language === 'en' ? 'Communications/Design' : 'Communications / Design' },
    { value: 'Research/Writing', label: language === 'en' ? 'Research/Writing' : 'Recherche / Rédaction' },
    { value: 'Coordination/Fundraising', label: language === 'en' ? 'Coordination/Fundraising' : 'Coordination / Collecte de fonds' },
    { value: 'Photography/Video', label: language === 'en' ? 'Photography/Video' : 'Photographie / Vidéo' }
  ];

  const themesList = [
    { value: 'Transportation', label: language === 'en' ? 'Transportation' : 'Transport' },
    { value: 'Energy', label: language === 'en' ? 'Energy' : 'Énergie' },
    { value: 'Design', label: language === 'en' ? 'Design' : 'Design' },
    { value: 'Habitat', label: language === 'en' ? 'Habitat' : 'Habitat' },
    { value: 'Recreation', label: language === 'en' ? 'Recreation' : 'Loisirs' },
    { value: 'Food', label: language === 'en' ? 'Food' : 'Alimentation' },
    { value: 'Natural Capital', label: language === 'en' ? 'Natural Capital' : 'Capital naturel' },
    { value: 'Waste', label: language === 'en' ? 'Waste' : 'Déchets' },
    { value: 'Health', label: language === 'en' ? 'Health' : 'Santé' },
    { value: 'Sense of Place', label: language === 'en' ? 'Sense of Place' : 'Sentiment d’appartenance' }
  ];

  const cities = [
    { value: 'Ottawa', label: 'Ottawa' },
    { value: 'Gatineau', label: 'Gatineau' },
    { value: 'Kanata', label: 'Kanata' },
    { value: 'Orleans', label: language === 'en' ? 'Orleans' : 'Orléans' }
  ];

  const availabilities = [
    { value: 'Flexible', label: t('engagement.volunteer.availabilityOption1') },
    { value: 'Weekends', label: t('engagement.volunteer.availabilityOption2') },
    { value: 'Weekdays', label: t('engagement.volunteer.availabilityOption3') },
    { value: 'Evenings', label: t('engagement.volunteer.availabilityOption4') }
  ];

  const languagesDropdown = [
    { value: 'English', label: language === 'en' ? 'English' : 'Anglais' },
    { value: 'French', label: language === 'en' ? 'French' : 'Français' },
    { value: 'Bilingual', label: language === 'en' ? 'Bilingual' : 'Bilingue' }
  ];

  const faqs = [
    {
      q: t('engagement.faq.q1'),
      a: t('engagement.faq.a1')
    },
    {
      q: t('engagement.faq.q2'),
      a: t('engagement.faq.a2')
    },
    {
      q: t('engagement.faq.q3'),
      a: t('engagement.faq.a3')
    },
    {
      q: t('engagement.faq.q4'),
      a: t('engagement.faq.a4')
    }
  ];

  const participateCards = [
    { title: t('engagement.participate.card1.title'), desc: t('engagement.participate.card1.desc'), linkText: t('engagement.participate.card1.linkText'), href: '#volunteer' },
    { title: t('engagement.participate.card2.title'), desc: t('engagement.participate.card2.desc'), linkText: t('engagement.participate.card2.linkText'), href: '#membership' },
    { title: t('engagement.participate.card3.title'), desc: t('engagement.participate.card3.desc'), linkText: t('engagement.participate.card3.linkText'), href: '#pal' },
    { title: t('engagement.participate.card4.title'), desc: t('engagement.participate.card4.desc'), linkText: t('engagement.participate.card4.linkText'), href: '#plan' },
    { title: t('engagement.participate.card5.title'), desc: t('engagement.participate.card5.desc'), linkText: t('engagement.participate.card5.linkText'), href: '#partner' },
    { title: t('engagement.participate.card6.title'), desc: t('engagement.participate.card6.desc'), linkText: t('engagement.participate.card6.linkText'), href: '#subscribe-section' },
  ];

  const membershipTiers = [
    {
      title: t('engagement.membership.tier1.title'),
      desc: t('engagement.membership.tier1.desc'),
      linkText: t('engagement.membership.tier1.btn'),
      href: '#volunteer',
      icon: HeartHandshake,
      eyebrow: language === 'en' ? 'Start here' : 'Commencez ici',
      accent: 'bg-[#E7F1EC] text-brand-green'
    },
    {
      title: t('engagement.membership.tier2.title'),
      desc: t('engagement.membership.tier2.desc'),
      linkText: t('engagement.membership.tier2.btn'),
      href: '/contact',
      icon: Users,
      eyebrow: language === 'en' ? 'Active member' : 'Membre actif',
      accent: 'bg-[#EEF1F4] text-[#34515F]'
    },
    {
      title: t('engagement.membership.tier3.title'),
      desc: t('engagement.membership.tier3.desc'),
      linkText: t('engagement.membership.tier3.btn'),
      href: '#partner',
      icon: Building2,
      eyebrow: language === 'en' ? 'Organizations' : 'Organisations',
      accent: 'bg-[#F3EFE7] text-[#7A5D2D]'
    }
  ];

  const supporterBenefits = [
    {
      label: language === 'en' ? 'Community updates' : 'Mises à jour communautaires',
      icon: Leaf
    },
    {
      label: language === 'en' ? 'Event invitations' : 'Invitations aux événements',
      icon: CalendarDays
    },
    {
      label: language === 'en' ? 'Project library' : 'Bibliothèque de projets',
      icon: BookOpen
    }
  ];

  const supporterTier = membershipTiers[0];
  const SupporterIcon = supporterTier.icon;
  const paidMembershipTiers = membershipTiers.slice(1);

  const palSteps = [
    { num: t('engagement.pal.step1.num'), title: t('engagement.pal.step1.title'), text: t('engagement.pal.step1.text') },
    { num: t('engagement.pal.step2.num'), title: t('engagement.pal.step2.title'), text: t('engagement.pal.step2.text') },
    { num: t('engagement.pal.step3.num'), title: t('engagement.pal.step3.title'), text: t('engagement.pal.step3.text') }
  ];

  const cspBlocks = [
    { title: t('engagement.plan.block1.title'), text: t('engagement.plan.block1.text') },
    { title: t('engagement.plan.block2.title'), text: t('engagement.plan.block2.text') },
    { title: t('engagement.plan.block3.title'), text: t('engagement.plan.block3.text') }
  ];

  const partnerCards = [
    {
      title: t('engagement.partner.card1.title'),
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80',
      href: '/why-how',
      linkText: t('engagement.partner.card1.btn')
    },
    {
      title: t('engagement.partner.card2.title'),
      image: 'https://images.unsplash.com/photo-1509391366360-1f9509ce158a?auto=format&fit=crop&q=80',
      href: '/contact',
      linkText: t('engagement.partner.card2.btn')
    },
    {
      title: t('engagement.partner.card3.title'),
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80',
      href: '/news-events',
      linkText: t('engagement.partner.card3.btn')
    }
  ];

  const partnerProjectsCard = {
    title: t('engagement.partner.btn2'),
    href: '/projects',
    linkText: t('projects.hero.browse')
  };

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white pb-0">
        
        {/* Page Hero */}
        <PageHero
          title={t('engagement.hero.title')}
          description={t('engagement.hero.description')}
          backgroundImage="/homepage/heroBG.png"
          buttons={
            <>
              <a href="#volunteer" className="bg-brand-green hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center">
                {t('engagement.hero.btn1')}
              </a>
              <a href="#membership" className="border border-white/50 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center">
                {t('engagement.hero.btn2')}
              </a>
              <a href="#partner" className="border border-white/50 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center">
                {t('engagement.hero.btn3')}
              </a>
            </>
          }
        />

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: t('breadcrumbs.home'), href: '/' },
            { label: t('engagement.breadcrumbs.getInvolved') },
          ]}
        />

        {/* ── Section 1: Ways to Participate ─────────── */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <span className="text-xs bg-brand-green/10 text-brand-green font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              #Participate
            </span>
            <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-text-strong mt-4 mb-4">
              {t('engagement.participate.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {participateCards.map((item, idx) => (
              <div key={idx} className="bg-white border border-black/10 rounded-2xl p-8 hover:border-brand-green hover:shadow-md transition-all duration-300 flex flex-col h-full">
                <h3 className="font-alt font-bold text-2xl text-text-strong mb-3">{item.title}</h3>
                <p className="text-text-normal text-base leading-relaxed mb-8 flex-grow">{item.desc}</p>
                <a href={item.href} className="inline-flex items-center gap-1.5 text-brand-green font-bold text-base hover:underline mt-auto">
                  {item.linkText} <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 2: Volunteer form ──────────────── */}
        <section id="volunteer" className="max-w-7xl mx-auto px-6 py-20 border-t border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Left Col Info */}
            <div className="lg:col-span-2">
              <span className="text-xs bg-brand-green/10 text-brand-green font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                #volunteer
              </span>
              <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-text-strong mt-4 mb-6 leading-tight">
                {t('engagement.volunteer.title')}
              </h2>
              <p className="text-text-normal text-base leading-relaxed">
                {t('engagement.volunteer.subtitle')}
              </p>
            </div>

            {/* Right Col Sign-up Form */}
            <div className="lg:col-span-3 bg-white border border-black/10 rounded-2xl p-8 md:p-12 shadow-sm">
              <h3 className="font-alt font-bold text-2xl text-text-strong text-center mb-2">{t('engagement.volunteer.formTitle')}</h3>
              <p className="text-text-normal text-base text-center mb-8">
                {t('engagement.volunteer.formSubtitle')}
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl p-8 text-center">
                  <h4 className="font-alt font-bold text-2xl mb-2">{t('engagement.volunteer.successTitle')}</h4>
                  <p className="text-base">{t('engagement.volunteer.successText')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">

                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="volunteer-full-name" className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.fullName')}</label>
                      <input
                        id="volunteer-full-name"
                        type="text"
                        placeholder={t('engagement.volunteer.fullNamePlaceholder')}
                        value={formData.fullName}
                        onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'volunteer-full-name-error' : undefined}
                        className={`w-full px-4 py-3 border rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${errors.fullName ? 'border-error focus:ring-error' : 'border-black/10 focus:ring-green-700'}`}
                      />
                      {errors.fullName && (
                        <p id="volunteer-full-name-error" role="alert" className="mt-1.5 text-sm text-error">{errors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="volunteer-email" className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.email')}</label>
                      <input
                        id="volunteer-email"
                        type="email"
                        placeholder={t('engagement.volunteer.emailPlaceholder')}
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'volunteer-email-error' : undefined}
                        className={`w-full px-4 py-3 border rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${errors.email ? 'border-error focus:ring-error' : 'border-black/10 focus:ring-green-700'}`}
                      />
                      {errors.email && (
                        <p id="volunteer-email-error" role="alert" className="mt-1.5 text-sm text-error">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="volunteer-phone" className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.phone')}</label>
                      <input
                        id="volunteer-phone"
                        type="tel"
                        placeholder={t('engagement.volunteer.phonePlaceholder')}
                        value={formData.phone}
                        onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="volunteer-city" className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.city')}</label>
                      <select
                        id="volunteer-city"
                        value={formData.city}
                        onChange={e => setFormData(prev => ({ ...prev, city: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent bg-white transition-colors"
                      >
                        {cities.map(c => (
                          <option key={c.value} value={c.value}>{c.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="volunteer-ward" className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.ward')}</label>
                      <input
                        id="volunteer-ward"
                        type="text"
                        placeholder={t('engagement.volunteer.wardPlaceholder')}
                        value={formData.ward}
                        onChange={e => setFormData(prev => ({ ...prev, ward: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="volunteer-availability" className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.availability')}</label>
                      <select
                        id="volunteer-availability"
                        value={formData.availability}
                        onChange={e => setFormData(prev => ({ ...prev, availability: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent bg-white transition-colors"
                      >
                        {availabilities.map(a => (
                          <option key={a.value} value={a.value}>{a.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Interests Dropdown/Selector */}
                  <div>
                    <div id="volunteer-interests-label" className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.interests')}</div>
                    <div role="group" aria-labelledby="volunteer-interests-label" className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-4 bg-gray-50 border border-black/10 rounded-lg">
                      {themesList.map((theme) => {
                        const isSelected = formData.interests.includes(theme.value);
                        return (
                          <button
                            key={theme.value}
                            type="button"
                            onClick={() => handleInterestSelect(theme.value)}
                            className={`px-3 py-2 rounded-lg text-left text-base font-medium transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-brand-green text-white'
                                : 'bg-white border border-black/5 hover:border-brand-green/40 text-text-strong'
                            }`}
                          >
                            <span>{theme.label}</span>
                            {isSelected && <Check className="w-4 h-4" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Language */}
                  <div>
                    <label htmlFor="volunteer-language" className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.language')}</label>
                    <select
                      id="volunteer-language"
                      value={formData.language}
                      onChange={e => setFormData(prev => ({ ...prev, language: e.target.value }))}
                      className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent bg-white transition-colors"
                    >
                      {languagesDropdown.map(l => (
                        <option key={l.value} value={l.value}>{l.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Roles */}
                  <div>
                    <div id="volunteer-preferred-roles-label" className="block text-base font-semibold text-text-strong mb-3">{t('engagement.volunteer.preferredRoles')}</div>
                    <div role="group" aria-labelledby="volunteer-preferred-roles-label" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {rolesList.map((role) => (
                        <label key={role.value} htmlFor={`volunteer-role-${role.value.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="flex items-center gap-3 cursor-pointer select-none">
                          <input
                            id={`volunteer-role-${role.value.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                            type="checkbox"
                            checked={formData.roles.includes(role.value)}
                            onChange={() => handleRoleChange(role.value)}
                            className="w-5 h-5 rounded border-black/20 text-brand-green focus:ring-brand-green"
                          />
                          <span className="text-base text-text-strong">{role.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label htmlFor="volunteer-skills" className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.skills')}</label>
                    <textarea
                      id="volunteer-skills"
                      placeholder={t('engagement.volunteer.skillsPlaceholder')}
                      rows={4}
                      value={formData.skills}
                      onChange={e => setFormData(prev => ({ ...prev, skills: e.target.value }))}
                      className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-colors resize-none"
                    />
                  </div>

                  {/* Consent */}
                  <div>
                    <label htmlFor="volunteer-consent" className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        id="volunteer-consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={e => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                        aria-invalid={!!errors.consent}
                        aria-describedby={errors.consent ? 'volunteer-consent-error' : undefined}
                        className={`w-5 h-5 rounded mt-1 text-brand-green focus:ring-brand-green ${errors.consent ? 'border-error' : 'border-black/20'}`}
                      />
                      <span className="text-base text-text-normal">
                        {t('engagement.volunteer.consent')}
                      </span>
                    </label>
                    {errors.consent && (
                      <p id="volunteer-consent-error" role="alert" className="mt-1.5 text-sm text-error">{errors.consent}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-green hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-lg font-bold text-base transition-colors shadow-sm text-center"
                  >
                    {isSubmitting ? t('engagement.volunteer.submitting') : t('engagement.volunteer.submit')}
                  </button>
                  {submitError && (
                    <p role="alert" className="text-sm text-error text-center">{submitError}</p>
                  )}
                </form>
              )}
            </div>

          </div>
        </section>

        {/* ── Section 3: Join OBEC Membership ────────── */}
       
        <section id="membership" className="section bg-brand-green/10 w-full relative overflow-hidden">
          <Sprout className="w-96 h-96 text-white absolute -bottom-16 -left-20 z-0" />
          <Sprout className="w-96 h-96 text-white absolute top-0 -right-20 rotate-270 z-0" />
          <div className="max-w-7xl mx-auto w-full relative z-10">
            
            <div className="text-center mb-16  ">
              <span className="text-xs font-semibold text-text-strong/80 mb-4 uppercase tracking-wide block">
                #membership
              </span>
              <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-text-strong/90 mb-4">
                {t('engagement.membership.title')}
              </h2>
              <p className="text-text-strong/80 text-lg max-w-2xl mx-auto">
                {t('engagement.membership.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 bg-white rounded-4xl border border-white/70  relative z-10 p-8">
              <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white md:col-span-2 lg:col-span-12">
                <div className="grid  grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px] bg-gray-50">
                  <div className="flex flex-col justify-between p-8">
                    <div>
                   
                      <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-brand-green">
                        {supporterTier.eyebrow}
                      </span>
                      <h4 className="font-alt text-3xl font-bold leading-tight text-text-strong/90 md:text-[40px]">
                        {supporterTier.title}
                      </h4>
                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-normal md:text-lg">
                        {supporterTier.desc}
                      </p>
                    </div>
                    <a href={supporterTier.href} className="mt-8 inline-flex w-fit items-center gap-1.5 rounded-lg bg-brand-green px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-green/85 hover:no-underline">
                      {supporterTier.linkText} <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="m-4 rounded-2xl border border-black/5 bg-[#F4F7F5] ">
                    <div className="flex h-full flex-col justify-between rounded-xl bg-brand-green/10 p-6 text-white">
                        <div className="mt-8 flex flex-wrap gap-1">
                        {supporterBenefits.map((benefit) => (
                          <div key={benefit.label} className="flex flex-col items-center gap-3 rounded-full bg-white/40 p-3 ">
                            {/* <benefit.icon className="h-4 w-4 shrink-0" /> */}
                            <span className="text-sm font-medium leading-snug text-text-strong">{benefit.label}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                          
                        <p className="mt-5 font-alt text-2xl font-bold leading-tight text-text-strong">
                          {language === 'en' ? 'A simple way to stay close to the work.' : 'Une façon simple de rester proche du travail.'}
                        </p>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>

              {paidMembershipTiers.map((tier, idx) => {
                const Icon = tier.icon;
                const placement = idx === 0 ? 'lg:col-start-1 lg:row-start-2' : 'lg:col-start-1 lg:row-start-3';
                return (
                  <div key={tier.title} className={`group flex  flex-col justify-between rounded-2xl  border-gray-200 bg-gray-50   transition-all duration-300 hover:-translate-y-1  p-8 lg:col-span-5 ${placement}`}>
                    <div>
                  
                      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-text-strong/50">
                        {tier.eyebrow}
                      </span>
                      <h4 className="font-alt text-2xl font-bold text-text-strong/90">{tier.title}</h4>
                      <p className="mt-3 text-base leading-relaxed text-text-normal">
                        {tier.desc}
                      </p>
                    </div>
                    <a href={tier.href} className="mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-brand-green hover:underline">
                      {tier.linkText} <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                );
              })}

              <div className="relative  overflow-hidden rounded-2xl border border-white/70 bg-white  md:col-span-2 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-2 lg:min-h-full">
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                  alt="Hands supporting a log"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ── Section 4: PAL ─────────────────────────── */}
        <section id="pal" className="max-w-7xl mx-auto px-6 py-20 border-b border-black/5">
          <div className="mb-16">
            <span className="text-xs bg-brand-green/10 text-brand-green font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              #pal
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mt-4">
              <div>
                <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-text-strong leading-tight">
                  {t('engagement.pal.title')}
                </h2>
              </div>
              <div className="max-w-xl">
                <p className="text-text-normal text-base leading-relaxed">
                  {t('engagement.pal.subtitle')}
                </p>
              </div>
            </div>
          </div>

          {/* PAL Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {palSteps.map((step, idx) => (
              <div key={idx} className="bg-gray-50 border border-black/5 rounded-2xl p-8">
                <span className="text-4xl font-extrabold text-brand-green/30 block mb-6">{step.num}</span>
                <h3 className="font-alt font-bold text-xl text-text-strong mb-3">{step.title}</h3>
                <p className="text-text-normal text-base leading-relaxed">{step.text}</p>
              </div>
            ))}
         
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-brand-green hover:opacity-90 text-white px-6 py-3 rounded-lg font-bold text-base transition-colors shadow-sm">
              {t('engagement.pal.btn1')}
            </Link>
            <Link href="/why-how" className="border border-brand-green hover:bg-brand-green/5 text-brand-green px-6 py-3 rounded-lg font-bold text-base transition-colors">
              {t('engagement.pal.btn2')}
            </Link>
          </div>
        </section>

        {/* ── Section 5: CSP ─────────────────────────── */}
        <section id="plan" className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Left side Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-full min-h-[420px] bg-gray-100 border border-black/5">
              <Image
                src="/engagment.jpg"
                alt="Community Sustainability Plan brainstorming session"
                fill
                className="object-cover"
              />
            </div>

            {/* Right side details */}
            <div className="flex flex-col justify-center">
              <span className="text-xs w-max bg-brand-green/10 text-brand-green font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                #Plan
              </span>
              <h2 className="font-alt font-bold text-[34px] md:text-[44px] text-text-strong mt-4 mb-5 leading-tight">
                {t('engagement.plan.title')}
              </h2>
              <p className="text-text-normal text-base leading-relaxed mb-6">
                {t('engagement.plan.desc')}
              </p>

              {/* Three blocks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-7">
                {cspBlocks.map((item, i) => (
                  <div key={i} className="border border-brand-green/20 bg-emerald-50/20 p-3.5 rounded-xl">
                    <h4 className="font-bold text-brand-green text-base mb-1.5">{item.title}</h4>
                    <p className="text-text-normal text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-brand-green hover:opacity-90 text-white px-6 py-3 rounded-lg font-bold text-base transition-colors shadow-sm">
                  {t('engagement.plan.btn1')}
                </Link>
                <Link href="/why-how" className="border border-black/10 hover:bg-black/5 text-text-strong px-6 py-3 rounded-lg font-bold text-base transition-colors">
                  {t('engagement.plan.btn2')}
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* ── Section 6: Partner with OBEC ───────────── */}
        
        <section id="partner" className="section bg-brand-green/10 w-full relative overflow-hidden">
          <Sprout className="w-96 h-96 text-white absolute -bottom-16 -left-20 z-0" />
          <Sprout className="w-96 h-96 text-white absolute top-0 -right-20 rotate-270 z-0" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 ">
              
              {/* Left Side */}
              <div className="lg:col-span-2">
                <span className="text-xs font-semibold text-text-strong/80 mb-4 uppercase tracking-wide block">
                  #Partner
                </span>
                <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-text-strong/90 mb-6 leading-tight">
                  {t('engagement.partner.title')}
                </h2>
                <p className="text-text-strong/80 text-base leading-relaxed mb-8">
                  {t('engagement.partner.desc')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-brand-green hover:bg-brand-green/80 text-white px-6 py-3 rounded-lg font-bold text-base transition-colors shadow-sm">
                    {t('engagement.partner.btn1')}
                  </Link>
                </div>
              </div>

              {/* Right Side Cards */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {partnerCards.map((item, idx) => (
                  <div key={idx} className="bg-white border border-black/5 rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-brand-green/30 hover:shadow-sm">
                    <div className="relative aspect-[16/10] w-full">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="font-bold text-lg text-text-strong/90 mb-6 flex-grow">{item.title}</h4>
                      <Link href={item.href} className="inline-flex items-center gap-1 text-brand-green font-bold text-base hover:underline mt-auto">
                        {item.linkText} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
                <div className="bg-brand-green rounded-2xl p-6 flex flex-col justify-end min-h-[260px] h-full">
                  <h4 className="font-alt font-bold text-2xl text-white mb-6">{partnerProjectsCard.title}</h4>
                  <Link href={partnerProjectsCard.href} className="inline-flex items-center gap-1 text-white font-bold text-base hover:underline">
                    {partnerProjectsCard.linkText} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Section 7: FAQs ─────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-b border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Left side text */}
            <div className="lg:col-span-2">
              <span className="text-xs bg-brand-green/10 text-brand-green font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                #faq
              </span>
              <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-text-strong mt-4 mb-6">
                {t('engagement.faq.title')}
              </h2>
              <p className="text-text-normal text-base leading-relaxed mb-8">
                {t('engagement.faq.subtitle')}
              </p>
              <Link href="/contact" className="inline-block bg-brand-green hover:opacity-90 text-white px-6 py-3 rounded-lg font-bold text-base transition-colors shadow-sm">
                {t('engagement.faq.contactUs')}
              </Link>
            </div>

            {/* Right side Accordion */}
            <div className="lg:col-span-3 divide-y divide-black/10">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="py-4 first:pt-0 last:pb-0">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between py-4 text-left font-bold text-lg text-text-strong hover:text-brand-green transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-green' : 'text-gray-400'}`} />
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

        {/* ── Section 8: Final CTA ───────────────────── */}
        <div id="subscribe-section">
          <JoinMissionCta
            title={t('engagement.ready.title')}
            description={t('engagement.ready.subtitle')}
            buttons={[
              { label: t('engagement.ready.btn1'), href: '#volunteer', variant: 'primary' },
              { label: t('engagement.ready.btn2'), href: '#membership', variant: 'secondary' },
              { label: t('engagement.ready.btn3'), href: '/donate', variant: 'link', icon: <ArrowRight className="w-4 h-4" /> }
            ]}
          />
        </div>

      </main>
      <Footer />
    </>
  );
}
