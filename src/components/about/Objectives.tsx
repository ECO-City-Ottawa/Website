import React from 'react';
import Link from 'next/link';

export default function Objectives() {
  const cards = [
    {
      title: "Promote Sustainability",
      desc: "Encourage residents, organizations, and governments to adopt sustainable practices using the Ten Themes of Sustainability as a common framework."
    },
    {
      title: "Facilitate Community Engagement",
      desc: "Support local initiatives through tools, visibility, and platforms for collaboration — including the Public Action Lab (PAL)."
    },
    {
      title: "Connect & Share Knowledge",
      desc: "Create space for groups to share ideas, best practices, and success stories through PAL and the EcoCity Ottawa online database."
    },
    {
      title: "Educate & Raise Awareness",
      desc: "Promote the balance of social, environmental, and economic well-being through public engagement, resources, and events."
    },
    {
      title: "Support Innovation & Collaboration",
      desc: "Foster cross-sector partnerships among residents, businesses, schools, and policymakers to co-create solutions tailored to Ottawa's unique context."
    }
  ];

  return (
    <section className="section bg-[#073F25] w-full">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-12">
          <span className="text-xs font-semibold text-white/80 mb-4 uppercase tracking-wide block">
            &#123;#What We Do&#125;
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-white mb-4">
            OBEC Objectives
          </h2>
          <p className="text-white/80 text-[18px]">
            Here's how we put that mission into action:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="flex flex-col p-8 rounded-2xl border border-white/20 bg-[#0a4b2c] shadow-sm">
              <h3 className="font-alt font-bold text-[22px] text-[#42d28b] mb-4 leading-tight">
                {c.title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}

          {/* White CTA Card */}
          <div className="flex flex-col p-8 rounded-2xl bg-white shadow-sm border border-black/5">
            <h3 className="font-alt font-bold text-[24px] text-brand-green mb-4 leading-tight">
              Start a Project in Your Community
            </h3>
            <p className="text-text-normal text-sm leading-relaxed mb-6">
              Have an idea for a local sustainability initiative? We can help you shape it, support it, and share it
            </p>
            <div className="mt-auto">
              <Link href="#" className="inline-flex items-center gap-1 text-brand-green font-medium text-sm hover:underline underline-offset-4">
                Apply for project consideration &rarr;
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
