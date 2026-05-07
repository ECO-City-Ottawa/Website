import React from 'react';

export default function WhyItWorks() {
  const features = [
    {
      title: "Community-Driven Sustainability",
      desc: "Change that is grassroots, inclusive, and meaningful — led by the people who know their neighbourhood best."
    },
    {
      title: "Stronger Connections",
      desc: "Working together builds social cohesion, civic pride, and a stronger sense of place."
    },
    {
      title: "Greener Living",
      desc: "Practical, everyday actions — reducing waste, supporting local food, using sustainable transport."
    },
    {
      title: "Climate Resilience",
      desc: "Communities using the BEC model are better equipped to handle climate change and environmental pressures."
    },
    {
      title: "Innovation & Collaboration",
      desc: "Cross-sector problem-solving between residents, businesses, schools, and government."
    },
    {
      title: "Health & Wellbeing",
      desc: "Green spaces, clean energy, and active lifestyles improve both physical and mental health."
    }
  ];

  return (
    <section className="section bg-[#0F385A] w-full">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-white/80 mb-4 uppercase tracking-wide block">
            &#123;#Why It Works&#125;
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-white mb-6">
            Real change starts<br/>in the community
          </h2>
          <p className="text-white/80 md:text-[18px]">
            BECs bridge the gap between environmental ideals and everyday urban life — turning neighborhoods into living examples of sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col bg-[#14476E] p-8 rounded-2xl shadow-sm border border-white/5">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 text-[#4CB0F9]">
                {/* Icon Placeholder */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-alt font-bold text-[20px] text-[#4CB0F9] mb-3 leading-snug">
                {f.title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
