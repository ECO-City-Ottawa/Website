import React from 'react';
import Link from 'next/link';

import { Leaf, Globe, Building2, Users, Sprout } from 'lucide-react';

export default function PartnersSection() {
  const partners = [
    { name: "CAFES Ottawa", icon: Leaf },
    { name: "Biosphere Eco-Cities Canada", icon: Globe },
    { name: "Schools / hospitals / small business partners", icon: Building2 },
    { name: "Local community associations (e.g., Manor Park)", icon: Users },
    { name: "Local Government & Policy Makers", icon: Sprout } // Replaced duplicate with a new example
  ];

  return (
    <section className="section bg-base-white w-full">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Side */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-text-strong mb-4 tracking-wide">
            Stronger in partnership
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-text-strong tracking-tight mb-4">
            Partners &amp; supporters
          </h2>
          <p className="text-text-normal md:text-[18px] leading-[1.6] mb-8">
            Working together across Ottawa
          </p>
          <div>
            <Link href="#" className="btn-secondary rounded-lg px-6 py-3 font-medium text-sm">
              Interested in partnering
            </Link>
          </div>
        </div>

        {/* Right Side Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {partners.map((partner, i) => (
            <div key={i} className="flex flex-col items-start gap-4 p-4 group rounded-2xl border border-black/5  hover:bg-brand-green hover:text-white transition-all duration-300 ease-in-out">
              <div className="bg-white p-2 rounded-xl  border border-black/5 group-hover:bg-brand-green transition-all duration-300 ease-in-out">
                <partner.icon className="w-6 h-6 text-brand-green shrink-0 group-hover:text-white transition-all duration-300 ease-in-out" />
              </div>
              <span className="text-text-normal font-semibold text-sm pt-2 leading-snug group-hover:text-white transition-all duration-300 ease-in-out">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
