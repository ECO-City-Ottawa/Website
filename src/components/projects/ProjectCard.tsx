import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export default function ProjectCard({ title, description, tags, image, link = '#' }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-black/10 bg-white overflow-hidden h-full">
      <div className="relative w-full aspect-[16/10] bg-black/5">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-alt font-bold text-[18px] text-text-strong mb-3">{title}</h3>
        <p className="text-text-normal text-[13px] leading-relaxed mb-6 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {tags.map((tag, j) => (
            <span key={j} className="bg-gray-100 text-text-strong text-[10px] font-semibold px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <Link href={link} className="text-brand-green text-[13px] font-semibold flex items-center hover:underline">
          View project
          <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
