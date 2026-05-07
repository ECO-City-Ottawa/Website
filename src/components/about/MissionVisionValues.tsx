import React from 'react';

export default function MissionVisionValues() {
  const items = [
    {
      title: "Mission",
      text: "To advance education by providing structured educational programs, and preparing and publishing course materials, on sustainability principles and practices."
    },
    {
      title: "Vision",
      text: "A city where every community is empowered to create our sustainable future rooted in conversations, innovation, and shared responsibility."
    },
    {
      title: "Values",
      text: "Sustainability - community engagement - Knowledge Sharing - Inclusivity - Connection to place - Action orientation Teamwork"
    }
  ];

  return (
    <section className="section bg-base-white w-full border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            &#123;#What Drives Us&#125;
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-text-strong">
            Mission · Vision · Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col p-8 rounded-2xl border border-black/10 bg-base-white shadow-sm h-full">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-alt font-bold text-[24px] text-brand-green">
                  {item.title}
                </h3>
                {/* Leaf Icon Placeholder */}
                <svg className="w-6 h-6 text-brand-green/40" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-text-strong text-sm leading-relaxed mt-auto mb-auto">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
