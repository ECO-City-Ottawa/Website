import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CommunityLedSection() {
  return (
    <section className="section bg-base-white w-full">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-text-strong mb-4 tracking-wide">
            About Us
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-text-strong tracking-tight mb-6">
            Community-led<br />sustainability
          </h2>
          <p className="text-text-normal md:text-[18px] leading-[1.6] mb-10">
            OBEC brings residents, schools, organizations, and businesses together to create practical projects that improve local sustainability. Start where you are, use what you have, and build together.
          </p>

          <h3 className="font-alt font-bold text-[24px] text-text-strong mb-6">
            What you can do
          </h3>
          <ul className="flex flex-col gap-4 mb-10">
            <li className="flex items-start gap-3 text-text-strong font-medium">
              <svg className="w-5 h-5 text-brand-green shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              Make your neighbourhood more sustainable.
            </li>
            <li className="flex items-start gap-3 text-text-strong font-medium">
              <svg className="w-5 h-5 text-brand-green shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              Meet neighbours and experts working on local projects.
            </li>
            <li className="flex items-start gap-3 text-text-strong font-medium">
              <svg className="w-5 h-5 text-brand-green shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              Collaborate with organizations to create community solutions.
            </li>
          </ul>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="#" className="btn-secondary rounded-lg px-6 py-3 font-medium">
              Learn about OBEC
            </Link>
            <Link href="#" className="font-medium text-brand-green hover:underline flex items-center gap-1">
              Get involved <span>&gt;</span>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[24px] overflow-hidden bg-black/5 shadow-sm">
          <Image 
            src="/homepage/hero.png" 
            alt="Community path along the water"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
