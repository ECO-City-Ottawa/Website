import React from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';

const glass1 = "bg-[#0B1521]/20 backdrop-blur-md border border-white/[0.03] shadow-[0_4px_12px_rgba(0,0,0,0.2)]"; // Faint dark navy
const glass2 = "bg-[#114A77]/10 backdrop-blur-sm border border-white/[0.02] shadow-[0_4px_12px_rgba(0,0,0,0.1)]"; // Faint deep blue
const glass3 = "bg-[#061D2F]/30 backdrop-blur-md border border-black/10 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"; // Very dark shadow
const glass4 = "bg-transparent backdrop-blur-sm border border-white/[0.02] shadow-sm"; // Ghostly transparent

const communityIcons = [
  // Left Edge
  { top: '8%', left: '4%', color: glass1, size: 64 },
  { top: '15%', left: '12%', color: glass2, size: 48 },
  { top: '28%', left: '6%', color: glass3, size: 56 },
  { top: '40%', left: '15%', color: glass4, size: 70 },
  { top: '55%', left: '5%', color: glass2, size: 52 },
  { top: '65%', left: '18%', color: glass1, size: 60 },
  { top: '78%', left: '8%', color: glass3, size: 46 },
  { top: '88%', left: '14%', color: glass4, size: 58 },

  // Right Edge
  { top: '10%', left: '92%', color: glass3, size: 60 },
  { top: '18%', left: '84%', color: glass1, size: 52 },
  { top: '32%', left: '95%', color: glass2, size: 48 },
  { top: '45%', left: '86%', color: glass4, size: 68 },
  { top: '58%', left: '94%', color: glass1, size: 56 },
  { top: '70%', left: '82%', color: glass3, size: 44 },
  { top: '82%', left: '96%', color: glass2, size: 62 },
  { top: '92%', left: '88%', color: glass4, size: 50 },

  // Top Edge
  { top: '5%', left: '25%', color: glass2, size: 44 },
  { top: '12%', left: '35%', color: glass4, size: 56 },
  { top: '6%', left: '48%', color: glass1, size: 64 },
  { top: '15%', left: '60%', color: glass3, size: 48 },
  { top: '8%', left: '72%', color: glass2, size: 54 },

  // Bottom Edge
  { top: '90%', left: '26%', color: glass3, size: 58 },
  { top: '82%', left: '36%', color: glass1, size: 46 },
  { top: '95%', left: '50%', color: glass4, size: 72 },
  { top: '85%', left: '64%', color: glass2, size: 52 },
  { top: '92%', left: '74%', color: glass3, size: 48 },

  // Mid-Left
  { top: '22%', left: '22%', color: glass1, size: 50 },
  { top: '35%', left: '28%', color: glass3, size: 64 },
  { top: '50%', left: '20%', color: glass4, size: 42 },
  { top: '62%', left: '26%', color: glass2, size: 58 },
  { top: '75%', left: '24%', color: glass1, size: 48 },

  // Mid-Right
  { top: '25%', left: '76%', color: glass4, size: 54 },
  { top: '38%', left: '70%', color: glass1, size: 46 },
  { top: '52%', left: '78%', color: glass3, size: 60 },
  { top: '65%', left: '72%', color: glass2, size: 48 },
  { top: '78%', left: '76%', color: glass4, size: 56 },

  // Background Center (behind glass box)
  { top: '30%', left: '40%', color: glass4, size: 80 },
  { top: '45%', left: '48%', color: glass2, size: 64 },
  { top: '60%', left: '38%', color: glass1, size: 52 },
  { top: '70%', left: '55%', color: glass3, size: 70 },
  { top: '25%', left: '55%', color: glass4, size: 58 },
  { top: '55%', left: '62%', color: glass2, size: 46 },
  { top: '40%', left: '60%', color: glass1, size: 50 },
];

export default function SupportCtaSection() {
  return (
    <div className='p-4'>
    <section className="section bg-[#061D2F] w-full flex flex-col items-center text-center relative overflow-hidden rounded-[64px] max-w-7xl mx-auto min-h-[400px] justify-center py-20 ">
      <div className="absolute  z-0 bg-[#114A77] top-0 right-0 w-[200px] h-[200px] rounded-full blur-[80px]" />
      <div className="absolute z-0 bg-[#114A77] bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] rounded-full blur-[100px]" />
      <div className="absolute z-0 bg-[#114A77] top-0 left-0 w-[200px] h-[200px] rounded-full blur-[80px]" />
      
      {/* Community Icons Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {communityIcons.map((icon, i) => (
          <div 
            key={i} 
            className={`absolute flex items-center justify-center rounded-full ${icon.color}`}
            style={{ 
              top: icon.top, 
              left: icon.left, 
              transform: 'translate(-50%, -50%)',
              width: `${icon.size}px`,
              height: `${icon.size}px`
            }}
          >
            <User className="text-white/10" style={{ width: `${icon.size * 0.45}px`, height: `${icon.size * 0.45}px` }} />
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto w-full  z-10 relative bg-[#061D2F]/10 backdrop-blur-md p-8 rounded-3xl ">
        <h2 className="font-alt font-bold text-[40px] md:text-[48px] leading-[1.1] text-white tracking-tight mb-6">
          Your support powers local<br />action
        </h2>
        <p className="text-white/80 md:text-[18px] leading-[1.6] mb-10">
          Every donation helps volunteers turn ideas into visible, practical projects.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="#" className="bg-white text-[#0B1521] px-8 py-3 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors">
            Donate now
          </Link>
          <Link href="#" className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold text-sm transition-colors">
            See impact
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
}
