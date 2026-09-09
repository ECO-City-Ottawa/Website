import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="max-w-7xl mx-auto w-full px-6 py-4 flex items-center gap-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap border-b border-black/5">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <React.Fragment key={index}>
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-brand-green transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={`font-medium ${isLast ? 'text-text-strong' : ''}`}>
                {item.label}
              </span>
            )}
            
            {!isLast && (
              <svg className="w-4 h-4 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
