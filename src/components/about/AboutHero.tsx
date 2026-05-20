'use client'

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/ui/PageHero';

export default function AboutHero() {
  const { t } = useLanguage();

  return (
    <PageHero
      subtitle={t('aboutHero.title')}
      title={t('aboutHero.headline')}
      description={t('aboutHero.paragraph')}
      backgroundImage="/homepage/heroBG.png"
    />
  );
}

