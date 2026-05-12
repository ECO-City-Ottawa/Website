'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.about': 'About',
    'nav.whyHow': 'Why & How',
    'nav.projects': 'Projects',
    'nav.newsEvents': 'News & Events',
    'nav.engagement': 'Engagement',
    'nav.resources': 'Resources',
    'nav.contact': 'Contact',
    'nav.donate': 'Donate',
    'nav.volunteer': 'Volunteer',
    'skip.content': 'Skip to content',
    'toggle.menu': 'Toggle menu',
  },
  fr: {
    'nav.about': 'À propos',
    'nav.whyHow': 'Pourquoi et Comment',
    'nav.projects': 'Projets',
    'nav.newsEvents': 'Nouvelles et Événements',
    'nav.engagement': 'Engagement',
    'nav.resources': 'Ressources',
    'nav.contact': 'Contact',
    'nav.donate': 'Faire un don',
    'nav.volunteer': 'Bénévolat',
    'skip.content': 'Passer au contenu',
    'toggle.menu': 'Basculer le menu',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang === 'en' || savedLang === 'fr') {
      setLanguage(savedLang);
      document.documentElement.lang = savedLang;
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
