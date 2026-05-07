import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-base-alt w-full min-h-screen flex flex-col items-center justify-center section">
      
      {/* Top Text Content */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="font-alt font-bold text-[56px] leading-[1.1] text-text-strong tracking-tight">
          Building a sustainable future<br />for Ottawa.
        </h1>
        
        <p className="text-[18px] leading-[1.5] text-text-normal max-w-2xl mx-auto">
          Bringing together people, ideas, and projects to improve a sustainable Ottawa.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="#" className="btn btn-primary px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-sm">Donate</Link>
          <Link href="#" className="btn btn-secondary px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-sm">Volunteer</Link>
          <Link href="#" className="border border-black/20 text-text-strong hover:bg-black/5 px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-sm flex items-center gap-2">
            Join Us <span>→</span>
          </Link>
        </div>

        {/* Non-profit Badge / Info */}
        <div className="flex items-center justify-center gap-2 pt-6 text-sm font-medium text-text-normal">
          <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
            {/* Using a generic leaf/sprout icon to match the UI */}
            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
          </svg>
          <span>Non-profit. Community-led. Ottawa-focused.</span>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="w-full relative  max-w-6xl mx-auto mt-16 rounded-[24px] overflow-hidden shadow-sm bg-black/5 aspect-[21/9] relative">
          <Image
            src="/homepage/hero.png"
            alt="Ottawa riverfront and green space"
            width={1600}
            height={900}
            priority
            className="aspect-[16/9] w-full rounded-xl object-cover"
          />
      </div>

      {/* Bottom Subtext */}
      <div className="w-full max-w-6xl mx-auto mt-3 text-right">
        <p className="text-sm text-text-normal font-medium">
          A community charity working across Ottawa since 2009.
        </p>
      </div>

    </section>
  )
}
