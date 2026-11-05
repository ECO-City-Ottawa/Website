import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectListItemProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export default function ProjectListItem({ title, description, tags, image, link = '#' }: ProjectListItemProps) {
  return (
    <Link
      href={link}
      className="flex items-center gap-4 sm:gap-6 rounded-xl border border-black/10 bg-white p-4 hover:border-brand-green/30 hover:shadow-sm transition-all duration-200 hover:no-underline"
    >
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-lg overflow-hidden bg-black/5">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="min-w-0 flex-grow">
        <h3 className="font-alt font-bold text-[16px] sm:text-[18px] text-text-strong mb-1 truncate">{title}</h3>
        <p className="text-text-normal text-[13px] leading-relaxed line-clamp-2 mb-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, j) => (
            <span key={j} className="bg-gray-100 text-text-strong text-[10px] font-semibold px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <svg className="w-5 h-5 text-brand-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
