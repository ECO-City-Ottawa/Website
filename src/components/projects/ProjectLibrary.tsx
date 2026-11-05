import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectLibrary() {
  const projects = [
    {
      title: "Adopt-a-Ditch",
      slug: "adopt-a-ditch",
      desc: "Native plantings to manage rural roadsides and support biodiversity.",
      tags: ["Habitat", "Natural Capital", "Community impact"],
      image: "/homepage/hero.png"
    },
    {
      title: "Electrical System Simulation (ESS)",
      slug: "electrical-system-simulation",
      desc: "A hands-on energy planning game that sparks discussion and collective decisions.",
      tags: ["Energy", "Education"],
      image: "/homepage/hero.png"
    },
    {
      title: "My Sustainable Business Path (MSBP)",
      slug: "my-sustainable-business-path",
      desc: "Peer workshops that help small businesses plan and act on sustainability.",
      tags: ["Sustainable Economy", "Cooperation"],
      image: "/homepage/hero.png"
    }
  ];

  return (
    <section className="section bg-base-white w-full border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-text-strong mb-4 uppercase tracking-wide block">
              &#123;#Project Library&#125;
            </span>
            <h2 className="font-alt font-bold text-[32px] md:text-[40px] text-text-strong">
              EcoCity Project Library
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-text-normal leading-[1.6]">
              A growing collection of real projects from Ottawa and other communities — organized around BEC's 10 Themes of Sustainability. The library is designed to inspire people to try, adapt, and learn from what others have already done.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((p, i) => (
            <div key={i} className="flex flex-col rounded-2xl border border-black/10 bg-white overflow-hidden  h-full">
              <div className="relative w-full aspect-[16/10] bg-black/5">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-alt font-bold text-[18px] text-text-strong mb-3">{p.title}</h3>
                <p className="text-text-normal text-[13px] leading-relaxed mb-6 flex-grow">{p.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag, j) => (
                    <span key={j} className="bg-gray-100 text-text-strong text-[10px] font-semibold px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link href={`/projects/${p.slug}`} className="text-brand-green text-[13px] font-semibold flex items-center hover:underline mt-auto">
                  View project
                  <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/projects" className="border border-brand-green text-brand-green hover:bg-brand-green/5 px-6 py-2 rounded-lg font-medium transition-colors text-sm">
            View all projects
          </Link>
        </div>

      </div>
    </section>
  );
}
