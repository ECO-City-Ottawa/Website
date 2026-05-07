import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FeatureCardProps {
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  linkText?: string;
  linkHref?: string;
  layout?: 'vertical' | 'horizontal';
  children?: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  tag, title, description, imageSrc, linkText, linkHref = "#", layout = 'vertical', children
}) => {
  if (layout === 'horizontal') {
    return (
      <div className="flex flex-col md:flex-row bg-base-white rounded-2xl border border-black/5 overflow-hidden shadow-sm h-full">
        <div className="flex flex-col justify-center p-8 md:w-[55%]">
          <span className="text-xs font-semibold text-text-strong mb-2 uppercase tracking-wide">{tag}</span>
          <h3 className="font-alt font-bold text-2xl text-text-strong mb-3">{title}</h3>
          <p className="text-text-normal mb-6 text-sm leading-relaxed">{description}</p>
          {children}
          {linkText && (
            <Link href={linkHref} className="inline-flex items-center gap-1 text-brand-green font-medium text-sm hover:underline mt-auto">
              {linkText} <span aria-hidden="true">&gt;</span>
            </Link>
          )}
        </div>
        <div className="md:w-[45%] relative min-h-[250px] md:min-h-full">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </div>
      </div>
    );
  }

  // vertical
  return (
    <div className="flex flex-col bg-base-white rounded-2xl border border-black/5 overflow-hidden shadow-sm h-full">
      <div className="flex flex-col p-8 flex-grow">
        <span className="text-xs font-semibold text-text-strong mb-2 uppercase tracking-wide">{tag}</span>
        <h3 className="font-alt font-bold text-[32px] leading-tight text-text-strong mb-3">{title}</h3>
        <p className="text-text-normal mb-6 leading-relaxed">{description}</p>
        {children}
        {linkText && (
          <Link href={linkHref} className="inline-flex items-center gap-1 text-brand-green font-medium text-sm hover:underline mt-auto">
            {linkText} <span aria-hidden="true">&gt;</span>
          </Link>
        )}
      </div>
      <div className="relative w-full aspect-[4/3]">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
};
