import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Framework() {
  const cards = [
    {
      title: "Ten Themes of Sustainability",
      desc: "A common framework covering transportation, energy, design, habitat, food, natural capital, waste, health, recreation, and sense of place."
    },
    {
      title: "Three Drivers",
      desc: "Social Capital, Governance, and Sustainable Economy — the foundations that keep community efforts moving forward."
    },
    {
      title: "Group Engagement",
      desc: "Communities lead or join sustainability projects, big or small, across neighbourhoods and sectors."
    },
    {
      title: "Knowledge Sharing",
      desc: "Open sharing of ideas, resources, and success stories — so solutions can be replicated and adapted."
    },
    {
      title: "Flexible & Scalable",
      desc: "The BEC model adapts to any city, any size, anywhere in the world."
    },
    {
      title: "Ottawa First",
      desc: "Ottawa was the first city in the world to apply this model — pioneering a new way to build greener, connected cities."
    }
  ];

  return (
    <section className="section bg-base-white w-full">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            &#123;# Our Framework&#125;
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-text-strong mb-4">
            How the BEC model works
          </h2>
          <p className="text-text-normal md:text-[18px]">
            A shared language for community-led sustainability action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col bg-white rounded-2xl border border-black/10 overflow-hidden shadow-sm h-full">
              <div className="p-8 flex flex-col items-center text-center flex-grow">
                <span className="text-[11px] font-semibold text-text-normal mb-3 uppercase tracking-wider">Features</span>
                <h3 className="font-alt font-bold text-[24px] text-text-strong mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-text-normal text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>
                <div className="mt-auto">
                  <Link href="#" className="inline-flex items-center text-brand-green text-sm font-medium hover:underline">
                    Explore the Themes
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="relative h-[140px] w-full bg-black/5 mt-auto">
                <Image src="/homepage/hero.png" alt="Leaves" fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
