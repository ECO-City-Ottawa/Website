'use client'

import React from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const glass1 = "bg-[#0B1521]/10 backdrop-blur-md border border-white/[0.03] "; // Faint dark navy
const glass2 = "bg-[#114A77]/10 backdrop-blur-sm border border-white/[0.02] "; // Faint deep blue
const glass3 = "bg-[#061D2F]/5 backdrop-blur-md border border-black/10 "; // Very dark shadow
const glass4 = "bg-transparent backdrop-blur-sm border border-white/[0.02] "; // Ghostly transparent

const communityIcons = [
  // Left Edge
  { top: '8%', left: '4%', color: glass1, size: 64 },
  { top: '15%', left: '12%', color: glass2, size: 48 },
  { top: '28%', left: '6%', color: glass3, size: 56 },
  { top: '40%', left: '15%', color: glass4, size: 70 },
  { top: '55%', left: '5%', color: glass2, size: 52 },


  // Right Edge
  { top: '10%', left: '92%', color: glass3, size: 60 },
  { top: '18%', left: '84%', color: glass1, size: 52 },
  { top: '32%', left: '95%', color: glass2, size: 48 },
  { top: '45%', left: '86%', color: glass4, size: 68 },
  { top: '58%', left: '94%', color: glass1, size: 56 },


  // Top Edge
  { top: '5%', left: '25%', color: glass2, size: 44 },
  { top: '12%', left: '35%', color: glass4, size: 56 },
  { top: '6%', left: '48%', color: glass1, size: 64 },


  // Bottom Edge
  { top: '90%', left: '26%', color: glass3, size: 58 },
  { top: '82%', left: '36%', color: glass1, size: 46 },
  { top: '95%', left: '50%', color: glass4, size: 72 },


  // Mid-Left
  { top: '22%', left: '22%', color: glass1, size: 50 },
  { top: '35%', left: '28%', color: glass3, size: 64 },
  { top: '50%', left: '20%', color: glass4, size: 42 },


  // Mid-Right
  { top: '25%', left: '76%', color: glass4, size: 54 },
  { top: '38%', left: '70%', color: glass1, size: 46 },
  { top: '52%', left: '78%', color: glass3, size: 60 },


  // Background Center (behind glass box)
  { top: '30%', left: '40%', color: glass4, size: 80 },
  { top: '45%', left: '48%', color: glass2, size: 64 },
  { top: '60%', left: '38%', color: glass1, size: 52 },

];

export default function SupportCtaSection() {
  const { t } = useLanguage();

  return (
    <div className='p-4'>
      <section className="section bg-gray-100 w-full flex flex-col items-center text-center relative overflow-hidden rounded-[64px] max-w-7xl mx-auto min-h-[400px] justify-center py-20">
        <div className="absolute z-0 bg-gray-50  top-0 right-0 w-[200px] h-[200px] rounded-full blur-[80px]" />
        <div className="absolute z-0 bg-gray-50 bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] rounded-full blur-[100px]" />
        <div className="absolute z-0 bg-gray-50 top-0 left-0 w-[200px] h-[200px] rounded-full blur-[80px]" />



        <div className="max-w-3xl mx-auto w-full z-10 relative  backdrop-blur-md p-8 rounded-3xl">
          <h2
            className="font-alt font-bold text-[40px] text-text-strong md:text-[48px] leading-[1.1]   mb-6"
            dangerouslySetInnerHTML={{ __html: t('supportCta.headline') }}
          />
          <p className=" md:text-[18px] leading-[1.6] mb-10 text-text-normal">
            {t('supportCta.description')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/donate" className="bg-brand-green text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-brand-green/80 transition-colors">
              {t('supportCta.cta1')}
            </Link>
            <Link href="/about" className="border border-black/10 bg-white/60  text-text-strong hover:bg-white/10 px-8 py-3 rounded-lg font-bold text-sm transition-colors">
              {t('supportCta.cta2')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
