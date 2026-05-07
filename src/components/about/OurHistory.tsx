import React from 'react';

export default function OurHistory() {
  const timeline = [
    {
      year: "2009",
      text: "Ottawa Biosphere Eco-City (OBEC) founded as a registered Canadian charity."
    },
    {
      year: "2011",
      text: "Launched our first demonstration project: an Agricultural Biodiversity Workshop and Working Group."
    },
    {
      year: "2013",
      text: "Unveiled the Ottawa Sustainability Tour with Mayor Jim Watson — a self-guided tour of ten exceptional sites, built by 60+ volunteers."
    },
    {
      year: "2016",
      text: "Rebranded as EcoCity Ottawa, refocusing on Public Action Labs and our growing Project Library."
    }
  ];

  return (
    <section className="section bg-base-white w-full">
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Text Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <span className="text-xs font-semibold text-text-strong mb-2 uppercase tracking-wide block">
              &#123;#Our Story&#125;
            </span>
            <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-text-strong">
              Our History
            </h2>
          </div>
          <div className="col-span-2 flex flex-col gap-6 text-text-normal md:text-[16px] leading-[1.6] pl-0 md:pl-8 border-l-0 md:border-l-[3px] border-brand-green/20">
            <p>
              EcoCity Ottawa is the new name for Ottawa Biosphere Eco-City (OBEC), established in March 2009 as a registered Canadian charity. We are a small, grassroots non-profit built on the belief that communities have the power to lead their own sustainability journey.
            </p>
            <p>
              Our early work was guided by the Biosphere Eco-City (BEC) model — a framework built around Ten Themes of Sustainability: transportation, energy, design, habitat, food, natural capital, waste, health, recreation, and sense of place. We created a Database of Sustainability Projects to help groups learn from each other, and developed tools like Community Sustainability Plans to turn ideas into action.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-20 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-brand-green/30 hidden md:block -translate-y-1/2 z-0"></div>
            
            {/* Desktop View */}
            {timeline.map((item, index) => (
              <div key={index} className={`hidden md:flex flex-col h-[400px] ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {index % 2 === 0 ? (
                  <>
                    <div className="bg-base-soft rounded-2xl p-6 mb-6 z-10 shadow-sm border border-black/5 h-[180px]">
                      <h3 className="font-alt font-bold text-[28px] text-brand-green mb-2">{item.year}</h3>
                      <p className="text-sm text-text-strong leading-relaxed">{item.text}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-brand-green mx-auto border-[3px] border-white z-10 relative shadow-sm"></div>
                    <div className="h-1/2"></div>
                  </>
                ) : (
                  <>
                    <div className="h-1/2"></div>
                    <div className="w-4 h-4 rounded-full bg-brand-green mx-auto border-[3px] border-white z-10 relative shadow-sm"></div>
                    <div className="bg-base-soft rounded-2xl p-6 mt-6 z-10 shadow-sm border border-black/5 h-[180px]">
                      <h3 className="font-alt font-bold text-[28px] text-brand-green mb-2">{item.year}</h3>
                      <p className="text-sm text-text-strong leading-relaxed">{item.text}</p>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Mobile View */}
            <div className="md:hidden flex flex-col gap-6 col-span-1">
              {timeline.map((item, index) => (
                <div key={index} className="bg-base-soft rounded-2xl p-6 z-10 shadow-sm border border-black/5">
                  <h3 className="font-alt font-bold text-[28px] text-brand-green mb-2">{item.year}</h3>
                  <p className="text-sm text-text-strong leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-black/5">
           <p className="text-[18px] md:text-[20px] font-medium text-text-strong max-w-4xl mx-auto">
             Now in 2026, we operate as EcoCityOttawa.ca — concentrating on Public Action Labs and the EcoCity Project Library as our two primary programs for community-led sustainability action.
           </p>
        </div>
      </div>
    </section>
  );
}
