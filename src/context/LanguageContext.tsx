'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/data/translations';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// The French translations are kept in src/data/translations.ts, but the site ships
// English-only until the French copy is reviewed. While this is true, the language
// is always 'en': any saved 'fr' preference is ignored and cleared, and
// setLanguage() cannot switch away from English. Set to false to restore bilingual mode.
const FORCE_ENGLISH = true;

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    if (FORCE_ENGLISH) {
      try {
        localStorage.removeItem('language');
      } catch {
        // storage unavailable (e.g. private mode): nothing to clear
      }
      document.documentElement.lang = 'en';
      return;
    }
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'en' || savedLang === 'fr') {
      setLanguageState(savedLang);
      document.documentElement.lang = savedLang;
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    if (FORCE_ENGLISH) return;
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  const activeLanguage: Language = FORCE_ENGLISH ? 'en' : language;

  const t = (key: string) => {
    return translations[activeLanguage][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language: activeLanguage, setLanguage: handleSetLanguage, t }}>
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
