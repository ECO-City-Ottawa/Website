import React from 'react';
import Image from 'next/image';

export default function OrgStructure() {
  return (
    <section className="section bg-base-white w-full border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-16">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            &#123;#How We're Organized&#125;
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-text-strong mb-4">
            Organizational Structure
          </h2>
          <p className="text-text-normal md:text-[18px] max-w-2xl">
            OBEC promotes sustainability through accessible community-driven methods that encourage learning, sharing, and action:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <h3 className="font-alt font-bold text-[24px] text-text-strong mb-3">Board of Directors</h3>
            <p className="text-text-normal text-sm leading-relaxed">
              Responsible for strategic planning, oversight, and ensuring the organization meets its mission and regulatory obligations.
            </p>
          </div>
          <div>
            <h3 className="font-alt font-bold text-[24px] text-text-strong mb-3">Executive Committee</h3>
            <p className="text-text-normal text-sm leading-relaxed">
              Oversees day-to-day operations, partnerships, and project alignment with EcoCity Ottawa's sustainability goals.
            </p>
          </div>
          <div>
            <h3 className="font-alt font-bold text-[24px] text-text-strong mb-3">Volunteers and Community Leads</h3>
            <p className="text-text-normal text-sm leading-relaxed">
              The people who make it happen — driving Public Action Labs, Sustainability Tours, and Community Sustainability Plans across Ottawa.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col">
            <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-black/5 shadow-sm mb-6">
              <Image src="/homepage/hero.png" alt="Workshop" fill className="object-cover" />
            </div>
            <h3 className="font-alt font-bold text-[24px] text-text-strong mb-3">Decentralized action, central support.</h3>
            <p className="text-text-normal text-sm leading-relaxed">
              We believe in inclusive engagement. Community members and stakeholders are encouraged to co-develop projects and share knowledge across the network. Decentralized action, central support. We provide coordination, tools, and mentorship — the action happens in the community.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-black/5 shadow-sm mb-6">
              <Image src="/homepage/hero.png" alt="Presentation" fill className="object-cover" />
            </div>
            <h3 className="font-alt font-bold text-[24px] text-text-strong mb-3">Full charitable transparency.</h3>
            <p className="text-text-normal text-sm leading-relaxed">
              EcoCity Ottawa publishes project reports, hosts public meetings, and maintains an online database of sustainability initiatives — operating with full charitable transparency.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
