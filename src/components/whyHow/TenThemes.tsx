import React from 'react';

export default function TenThemes() {
  const themes = [
    { title: "Transportation", desc: "Travel in ways that are cleaner, safer, and better for the planet — biking, walking, and public transit." },
    { title: "Energy", desc: "Save energy and use clean sources like solar and wind to power our homes, schools, and cities." },
    { title: "Design", desc: "Create buildings, neighbourhoods, and cities that are good for people and the environment." },
    { title: "Habitat", desc: "Protect and restore natural spaces where plants, animals, and people can thrive together" },
    { title: "Recreation", desc: "Enjoy and connect with nature through play, exercise, and outdoor activities." },
    { title: "Food", desc: "Grow, share, and eat food that is healthy for our bodies, communities, and the earth." },
    { title: "Natural Capital", desc: "Take care of nature's gifts — forests, rivers, and soil — because they support all life." },
    { title: "Waste", desc: "Reduce what we throw away, supporting less polluting and more effective waste management." },
    { title: "Health", desc: "Build healthy communities through clean air, water, green spaces, and active lifestyles." },
    { title: "Sense of Place", desc: "Feel proud of where you live — strengthen community bonds by protecting local spaces." }
  ];

  return (
    <section className="section bg-base-soft w-full border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
            &#123;#themes&#125;
          </span>
          <h2 className="font-alt font-bold text-[40px] md:text-[48px] text-text-strong mb-4">
            10 Themes of Sustainability
          </h2>
          <p className="text-text-normal md:text-[18px]">
            These Themes divide sustainability into understandable areas of action to help people work within their interest to identify issues, products and services and develop solution
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {themes.map((t, i) => (
            <div key={i} className="flex flex-col bg-white p-6 rounded-2xl border border-black/10 shadow-sm h-full">
              <h3 className="font-alt font-bold text-[18px] text-[#1E7444] mb-6">{t.title}</h3>
              <p className="text-text-strong text-xs leading-relaxed mt-auto mb-auto">{t.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
