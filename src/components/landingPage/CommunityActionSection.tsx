import React from 'react';
import Link from 'next/link';
import { FeatureCard } from '../ui/FeatureCard';

export default function CommunityActionSection() {
  return (
    <section className="section bg-base-alt w-full">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center max-w-3xl mb-16">
          <span className="text-sm font-semibold text-text-strong mb-4 tracking-wide block">
            Why &amp; How
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-text-strong tracking-tight mb-6">
            From conversation to<br />community action
          </h2>
          <p className="text-text-normal md:text-[18px] leading-[1.6]">
            We give communities the tools and facilitation to turn good ideas into real, local sustainability projects — and share those stories so others can learn and do the same.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Left Column - Vertical Card */}
          <div className="w-full">
            <FeatureCard
              tag="Focus Areas"
              title="Ten Themes of Sustainability"
              description="Ten areas to focus local action—Energy, Water, Food, Waste, Habitat, and more."
              imageSrc="/homepage/hero.png"
              linkText="Explore the Themes"
              linkHref="#"
              layout="vertical"
            />
          </div>

          {/* Right Column - Horizontal Cards */}
          <div className="w-full flex flex-col gap-6">
            <FeatureCard
              tag="Core Forces"
              title="3 Drivers of Change"
              description="Social Capital, Governance, and Sustainable Economy that help ideas spread and efforts scale."
              imageSrc="/homepage/hero.png"
              linkText="Learn about the Drivers"
              linkHref="#"
              layout="horizontal"
            />
            
            <FeatureCard
              tag="Action Tools"
              title="Tools of Engagement"
              description="Practical ways communities turn talk into action—PAL, CSP, Tours, Project Database, and more."
              imageSrc="/homepage/hero.png"
              linkText="See all tools"
              linkHref="#"
              layout="horizontal"
            >
              {/* Extra Links inside the card */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                <Link href="#" className="text-sm font-medium text-text-strong underline underline-offset-2 hover:text-brand-green">
                  Project Database
                </Link>
                <Link href="#" className="text-sm font-medium text-text-strong underline underline-offset-2 hover:text-brand-green">
                  Public Action Labs
                </Link>
                <Link href="#" className="text-sm font-medium text-text-strong underline underline-offset-2 hover:text-brand-green">
                  Community Sustainability Plans
                </Link>
              </div>
            </FeatureCard>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-16">
          <Link href="#" className="btn-secondary rounded-lg px-6 py-3 font-medium">
            See how it works
          </Link>
          <Link href="#" className="font-medium text-brand-green hover:underline flex items-center gap-1">
            Get involved <span>&gt;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
