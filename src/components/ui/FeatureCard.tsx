import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

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
      <div className="border  border-black/5  p-2 bg-white rounded-3xl">
      <div className="flex min-h-max flex-col md:flex-row bg-base-white rounded-2xl border border-black/5 overflow-hidden h-full">
        <div className="flex flex-col justify-center lg:p-8 p-4 md:w-[55%] pt-4">
          <span className="text-xs font-semibold text-text-strong mb-2 uppercase tracking-wide">{tag}</span>
          <h3 className="font-alt font-bold text-2xl text-text-strong mb-3">{title}</h3>
          <p className="text-text-normal mb-6 text-sm leading-relaxed">{description}</p>
          {children}
          {linkText && (
            <Link href={linkHref} className="inline-flex items-center gap-1 text-brand-green font-medium text-sm hover:underline mt-auto">
              {linkText} <ArrowRightIcon className="w-4 h-4" />
            </Link>
          )}
        </div>
        <div className="md:w-[45%] relative min-h-[250px] md:min-h-full">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </div>
      </div>
      </div>
    );
  }

  // vertical
  return (
    <div className="border  border-black/5  p-2 bg-white rounded-3xl h-full ">
    <div className="flex flex-col bg-base-white rounded-2xl border border-black/5 overflow-hidden h-full">
      <div className="flex flex-col lg:p-8 p-4 flex-grow  pt-4">
        <span className="text-xs font-semibold text-text-strong mb-2 uppercase tracking-wide">{tag}</span>
        <h3 className="font-alt font-bold text-[32px] leading-tight text-text-strong mb-3">{title}</h3>
        <p className="text-text-normal mb-6 leading-relaxed">{description}</p>
        {children}
        {linkText && (
          <Link href={linkHref} className="inline-flex items-center gap-1 text-brand-green font-medium text-sm hover:underline mt-auto">
            {linkText} <ArrowRightIcon className="w-4 h-4" />
          </Link>
        )}
      </div>
      <div className="relative w-full aspect-[4/3] max-h-[250px] lg:max-h-[400px] lg:h-full">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
    </div>
    </div>
  );
};
