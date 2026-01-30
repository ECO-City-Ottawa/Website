import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="section">
      <div className="container-app ">
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-8 items-center">
          <h1 className="text-[56px] font-bold leading-tight text-text-strong ">
            Building a sustainable future for Ottawa
          </h1>
< div className='flex flex-col gap-4 items-center'>
          <p className="section-sub mx-auto">
            Bringing together people, ideas, and projects to improve a sustainable Ottawa.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link href="/donate" className="btn btn-primary">Donate</Link>
            <Link href="/volunteer" className="btn btn-secondary">Volunteer</Link>
            <Link href="/join" className="btn btn-link">Join us</Link>
          </div>

          <div className=" inline-flex items-center gap-2 rounded-full bg-base-alt px-3 py-1 text-sm w-max ">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-green" />
            <span className="text-text-normal">Non-profit. Community-led. Ottawa-focused.</span>
          </div>
          </div>
        </div>

        <div className="mt-8">
          {/* Put a file at /public/hero.jpg (or update src) */}
          <Image
            src="/homepage/hero.png"
            alt="Ottawa riverfront and green space"
            width={1600}
            height={900}
            priority
            className="aspect-[16/9] w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
