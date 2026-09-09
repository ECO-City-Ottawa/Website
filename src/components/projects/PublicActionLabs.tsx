import React from 'react';

export default function PublicActionLabs() {
  return (
    <section className="section bg-base-white w-full">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-12 max-w-4xl">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            &#123;#pal&#125;
          </span>
          <h2 className="font-alt font-bold text-[32px] md:text-[40px] text-text-strong mb-4">
            Public Action Labs
          </h2>
          <p className="text-text-normal leading-[1.6]">
            A space where grassroots community champions come together to turn conversations into action with fresh perspectives, good facilitation, and practical tools to co-create projects and see what's actually doable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col p-8 rounded-2xl border border-black/10 bg-white ">
            <div className="w-[3px] h-5 bg-brand-green mb-16 rounded-full"></div>
            <h3 className="font-alt font-bold text-[18px] text-brand-green mb-4">
              SPARK-PAL · <span className="text-[13px] font-semibold text-brand-green">Small</span>
            </h3>
            <p className="text-text-strong text-[13px] leading-relaxed">
              For people who want to turn a conversation into action. 1-2 short virtual sessions · 3-10 people. Perfect for: community groups, garden starters, tool share initiatives, and more.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col p-8 rounded-2xl border border-black/10 bg-white ">
            <div className="flex gap-1.5 mb-16">
              <div className="w-[3px] h-5 bg-brand-green rounded-full"></div>
              <div className="w-[3px] h-5 bg-brand-green rounded-full"></div>
            </div>
            <h3 className="font-alt font-bold text-[18px] text-brand-green mb-4">
              Engagement-PAL · <span className="text-[13px] font-semibold text-brand-green">Medium</span>
            </h3>
            <p className="text-text-strong text-[13px] leading-relaxed">
              For doing bigger projects than you can do on your own, 3-5 sessions, in-person and virtual · 10-20 people. Includes: My Sustainable Business Path and Independent Community & Business Improvement Group formats.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col p-8 rounded-2xl border border-black/10 bg-white ">
            <div className="flex gap-1.5 mb-16">
              <div className="w-[3px] h-5 bg-brand-green rounded-full"></div>
              <div className="w-[3px] h-5 bg-brand-green rounded-full"></div>
              <div className="w-[3px] h-5 bg-brand-green rounded-full"></div>
            </div>
            <h3 className="font-alt font-bold text-[18px] text-brand-green mb-4">
              Community Sustainability PAL<br/><span className="text-[13px] font-semibold text-brand-green">· Large</span>
            </h3>
            <p className="text-text-strong text-[13px] leading-relaxed">
              Empowering neighbourhoods, schools, and large groups to turn sustainability goals into real-world outcomes. 1+ follow-up sessions · 15+ people. Develops a Community Sustainability Plan (CSP), a locally grounded plan that builds a culture of sustainability.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
