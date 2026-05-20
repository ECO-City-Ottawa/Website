'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Check, Sprout } from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import PageHero from '@/components/ui/PageHero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { useLanguage } from '@/context/LanguageContext';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.consent) {
      alert(t('engagement.volunteer.alert'));
      return;
    }
    setFormSubmitted(true);
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
      href: '#volunteer'
    },
    {
      title: t('engagement.membership.tier2.title'),
      desc: t('engagement.membership.tier2.desc'),
      linkText: t('engagement.membership.tier2.btn'),
      href: '/contact'
    },
    {
      title: t('engagement.membership.tier3.title'),
      desc: t('engagement.membership.tier3.desc'),
      linkText: t('engagement.membership.tier3.btn'),
      href: '#partner'
    }
  ];

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
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80'
    },
    {
      title: t('engagement.partner.card2.title'),
      image: 'https://images.unsplash.com/photo-1509391366360-1f9509ce158a?auto=format&fit=crop&q=80'
    },
    {
      title: t('engagement.partner.card3.title'),
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80'
    }
  ];

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
              <a href="#volunteer" className="bg-[#2D7A5D] hover:bg-[#24634b] text-white px-6 py-3 rounded-lg font-medium transition-colors text-center">
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
            <span className="text-xs bg-[#2D7A5D]/10 text-[#2D7A5D] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              #Participate
            </span>
            <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-text-strong mt-4 mb-4">
              {t('engagement.participate.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {participateCards.map((item, idx) => (
              <div key={idx} className="bg-white border border-black/10 rounded-2xl p-8 hover:border-[#2D7A5D] hover:shadow-md transition-all duration-300 flex flex-col h-full">
                <h3 className="font-alt font-bold text-2xl text-text-strong mb-3">{item.title}</h3>
                <p className="text-text-normal text-base leading-relaxed mb-8 flex-grow">{item.desc}</p>
                <a href={item.href} className="inline-flex items-center gap-1.5 text-[#2D7A5D] font-bold text-base hover:underline mt-auto">
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
              <span className="text-xs bg-[#2D7A5D]/10 text-[#2D7A5D] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.fullName')}</label>
                      <input
                        type="text"
                        required
                        placeholder={t('engagement.volunteer.fullNamePlaceholder')}
                        value={formData.fullName}
                        onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:border-[#2D7A5D] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.email')}</label>
                      <input
                        type="email"
                        required
                        placeholder={t('engagement.volunteer.emailPlaceholder')}
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:border-[#2D7A5D] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.phone')}</label>
                      <input
                        type="tel"
                        placeholder={t('engagement.volunteer.phonePlaceholder')}
                        value={formData.phone}
                        onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:border-[#2D7A5D] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.city')}</label>
                      <select
                        value={formData.city}
                        onChange={e => setFormData(prev => ({ ...prev, city: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong focus:outline-none focus:border-[#2D7A5D] bg-white transition-colors"
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
                      <label className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.ward')}</label>
                      <input
                        type="text"
                        placeholder={t('engagement.volunteer.wardPlaceholder')}
                        value={formData.ward}
                        onChange={e => setFormData(prev => ({ ...prev, ward: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong placeholder-gray-400 focus:outline-none focus:border-[#2D7A5D] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.availability')}</label>
                      <select
                        value={formData.availability}
                        onChange={e => setFormData(prev => ({ ...prev, availability: e.target.value }))}
                        className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong focus:outline-none focus:border-[#2D7A5D] bg-white transition-colors"
                      >
                        {availabilities.map(a => (
                          <option key={a.value} value={a.value}>{a.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Interests Dropdown/Selector */}
                  <div>
                    <label className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.interests')}</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-4 bg-gray-50 border border-black/10 rounded-lg">
                      {themesList.map((theme) => {
                        const isSelected = formData.interests.includes(theme.value);
                        return (
                          <button
                            key={theme.value}
                            type="button"
                            onClick={() => handleInterestSelect(theme.value)}
                            className={`px-3 py-2 rounded-lg text-left text-base font-medium transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#2D7A5D] text-white'
                                : 'bg-white border border-black/5 hover:border-[#2D7A5D]/40 text-text-strong'
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
                    <label className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.language')}</label>
                    <select
                      value={formData.language}
                      onChange={e => setFormData(prev => ({ ...prev, language: e.target.value }))}
                      className="w-full px-4 py-3 border border-black/10 rounded-lg text-base text-text-strong focus:outline-none focus:border-[#2D7A5D] bg-white transition-colors"
                    >
                      {languagesDropdown.map(l => (
                        <option key={l.value} value={l.value}>{l.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Roles */}
                  <div>
                    <label className="block text-base font-semibold text-text-strong mb-3">{t('engagement.volunteer.preferredRoles')}</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {rolesList.map((role) => (
                        <label key={role.value} className="flex items-center gap-3 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={formData.roles.includes(role.value)}
                            onChange={() => handleRoleChange(role.value)}
                            className="w-5 h-5 rounded border-black/20 text-[#2D7A5D] focus:ring-[#2D7A5D]"
                          />
                          <span className="text-base text-text-strong">{role.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-base font-semibold text-text-strong mb-2">{t('engagement.volunteer.skills')}</label>
                    <textarea
                      placeholder={t('engagement.volunteer.skillsPlaceholder')}
                      rows={4}
                      value={formData.skills}
                      onChange={e => setFormData(prev => ({ ...prev, skills: e.target.value }))}
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
                      {t('engagement.volunteer.consent')}
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-[#2D7A5D] hover:bg-[#24634b] text-white py-4 rounded-lg font-bold text-base transition-colors shadow-sm text-center"
                  >
                    {t('engagement.volunteer.submit')}
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* ── Section 3: Join OBEC Membership ────────── */}
       
          <section id="membership"  className="section bg-green-dark w-full relative overflow-hidden">
      <Sprout className="w-96 h-96 text-[#012515] absolute -bottom-16 -left-20 z-0" />
      <Sprout className="w-96 h-96 text-[#055D36] absolute top-0 -right-20 rotate-270 z-0" />
          <div className="max-w-7xl mx-auto  border border-white/5 rounded-4xl py-8 px-4 bg-[#001009]/5 ">
            
            <div className="text-center mb-16  ">
              <span className="text-xs bg-white/10 text-white font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                #membership
              </span>
              <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-white mt-4 mb-4">
                {t('engagement.membership.title')}
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                {t('engagement.membership.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
              
              {/* Left Side: Photo */}
              <div className="relative rounded-2xl overflow-hidden min-h-[350px] aspect-quare lg:min-h-full">
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                  alt="Hands supporting a log"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Side: Tiers details */}
             
                
                {membershipTiers.map((tier, idx) => (
                  <div key={idx} className="p-8 border rounded-2xl border-white/10 bg-[#001009]/50 ">
                    <div className="flex items-start flex-col gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-alt font-bold text-xl text-white">{tier.title}</h4>
                        <p className="text-white/70 text-base leading-relaxed mt-2 mb-3">
                          {tier.desc}
                        </p>
                        <a href={tier.href} className="inline-flex items-center gap-1 text-white font-bold hover:underline">
                          {tier.linkText} <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

            

            </div>

          </div>
        </section>

        {/* ── Section 4: PAL ─────────────────────────── */}
        <section id="pal" className="max-w-7xl mx-auto px-6 py-20 border-b border-black/5">
          <div className="mb-16">
            <span className="text-xs bg-[#2D7A5D]/10 text-[#2D7A5D] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
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
                <span className="text-4xl font-extrabold text-[#2D7A5D]/30 block mb-6">{palSteps[0].num}</span>
                <h3 className="font-alt font-bold text-xl text-text-strong mb-3">{palSteps[0].title}</h3>
                <p className="text-text-normal text-base leading-relaxed">{palSteps[0].text}</p>
              </div>
            ))}
         
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-[#2D7A5D] hover:bg-[#24634b] text-white px-6 py-3 rounded-lg font-bold text-base transition-colors shadow-sm">
              {t('engagement.pal.btn1')}
            </Link>
            <Link href="/why-how" className="border border-[#2D7A5D] hover:bg-[#2D7A5D]/5 text-[#2D7A5D] px-6 py-3 rounded-lg font-bold text-base transition-colors">
              {t('engagement.pal.btn2')}
            </Link>
          </div>
        </section>

        {/* ── Section 5: CSP ─────────────────────────── */}
        <section id="plan" className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 border border-black/5">
              <Image
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80"
                alt="Community Sustainability Plan brainstorming session"
                fill
                className="object-cover"
              />
            </div>

            {/* Right side details */}
            <div>
              <span className="text-xs bg-[#2D7A5D]/10 text-[#2D7A5D] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                #Plan
              </span>
              <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-text-strong mt-4 mb-6 leading-tight">
                {t('engagement.plan.title')}
              </h2>
              <p className="text-text-normal text-base leading-relaxed mb-8">
                {t('engagement.plan.desc')}
              </p>

              {/* Three blocks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {cspBlocks.map((item, i) => (
                  <div key={i} className="border border-[#2D7A5D]/20 bg-emerald-50/20 p-4 rounded-xl">
                    <h4 className="font-bold text-[#2D7A5D] text-base mb-1.5">{item.title}</h4>
                    <p className="text-text-normal text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-[#2D7A5D] hover:bg-[#24634b] text-white px-6 py-3 rounded-lg font-bold text-base transition-colors shadow-sm">
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
        
            <section  id="partner" className="section  w-full relative overflow-hidden bg-[#061D2F]  ">
      <div className="absolute  z-0 bg-[#114A77] top-0 right-0 w-[200px] h-[200px] rounded-full blur-[80px]" />
      <div className="absolute z-0 bg-[#114A77] bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] rounded-full blur-[100px]" />
      <div className="absolute z-0 bg-[#114A77] top-0 left-0 w-[200px] h-[200px] rounded-full blur-[80px]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              
              {/* Left Side */}
              <div className="lg:col-span-2">
                <span className="text-xs bg-white/10 text-white font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  #Partner
                </span>
                <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-white mt-4 mb-6 leading-tight">
                  {t('engagement.partner.title')}
                </h2>
                <p className="text-white/80 text-base leading-relaxed mb-8">
                  {t('engagement.partner.desc')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-[#2D7A5D] hover:bg-[#24634b] text-white px-6 py-3 rounded-lg font-bold text-base transition-colors shadow-sm">
                    {t('engagement.partner.btn1')}
                  </Link>
                  <Link href="/projects" className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-bold text-base transition-colors">
                    {t('engagement.partner.btn2')}
                  </Link>
                </div>
              </div>

              {/* Right Side Cards */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {partnerCards.map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full hover:bg-white/10 transition-all duration-300">
                    <div className="relative aspect-[16/10] w-full">
                      <Image src={item.image} alt={item.title} fill className="object-cover opacity-90" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="font-bold text-lg text-white mb-6 flex-grow">{item.title}</h4>
                      <Link href="/contact" className="inline-flex items-center gap-1 text-white font-bold text-base hover:underline mt-auto">
                        {t('engagement.partner.card1.btn')} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── Section 7: FAQs ─────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-b border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Left side text */}
            <div className="lg:col-span-2">
              <span className="text-xs bg-[#2D7A5D]/10 text-[#2D7A5D] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                #faq
              </span>
              <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-text-strong mt-4 mb-6">
                {t('engagement.faq.title')}
              </h2>
              <p className="text-text-normal text-base leading-relaxed mb-8">
                {t('engagement.faq.subtitle')}
              </p>
              <Link href="/contact" className="inline-block bg-[#2D7A5D] hover:bg-[#24634b] text-white px-6 py-3 rounded-lg font-bold text-base transition-colors shadow-sm">
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

        {/* ── Section 8: Final CTA ───────────────────── */}
        <section id="subscribe-section" className="bg-[#061D2F] py-20 w-full text-center relative overflow-hidden">
          <div className="absolute z-0 bg-[#114A77] top-0 right-0 w-[200px] h-[200px] rounded-full blur-[80px]" />
          <div className="absolute z-0 bg-[#114A77] bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] rounded-full blur-[100px]" />
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="font-alt font-bold text-[36px] md:text-[48px] text-white mb-4">
              {t('engagement.ready.title')}
            </h2>
            <p className="text-white/80 md:text-[18px] mb-8 max-w-2xl mx-auto">
              {t('engagement.ready.subtitle')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#volunteer" className="bg-white text-[#0A1D2E] hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-base transition-colors shadow-sm">
                {t('engagement.ready.btn1')}
              </a>
              <a href="#membership" className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold text-base transition-colors">
                {t('engagement.ready.btn2')}
              </a>
              <Link href="/donate" className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold text-base transition-colors flex items-center gap-1">
                {t('engagement.ready.btn3')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
