import React from 'react';

export default function ProjectsHero() {
  return (
    <section className="section bg-base-white w-full border-t border-black/5 pb-0">
      <div className="max-w-4xl mx-auto w-full text-center mt-8">
        <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
          &#123;#Our Tools&#125;
        </span>
        <h1 className="font-alt font-bold text-[40px] md:text-[56px] text-text-strong mb-6 tracking-tight">
          Tools of Engagement
        </h1>
        <p className="text-text-normal md:text-[18px] leading-[1.6]">
          EcoCity Ottawa offers two core tools to support community-led sustainability facilitating teamwork, learning, and action.
        </p>
      </div>
    </section>
  );
}
