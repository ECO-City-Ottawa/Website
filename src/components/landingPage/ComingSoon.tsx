import Image from 'next/image'
import Link from 'next/link'

export default function ComingSoon() {
  return (
    <section className="section min-h-[70vh] flex items-center">
      <div className="w-full mx-auto max-w-7xl">
        <div className="mx-auto  flex gap-12 items-center">
          <div className="flex flex-col gap-4  w-1/2 ">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-medium text-brand-green w-max">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-brand-green" />
              <span>Coming Soon</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-text-strong max-w-[550px]  ">
              Something Green is Growing...
            </h1>
            
            <div className="flex flex-col gap-4 ">
              <p className="text-text-normal leading-relaxed  max-w-[550px]">
                We're currently cultivating a new digital space for the Ottawa Biosphere Eco-City. 
                Our team is working hard to bring you a better way to engage with sustainability in our community.
              </p>
              
              <p className=" text-text-normal font-medium ">
                We'll be back shortly!
              </p>
            </div>

            <div className="flex flex-col gap-4 ">
              <span className="text-sm font-semibold uppercase tracking-wider text-text-normal/60">Want to help?</span>
              <div className="flex flex-wrap  gap-4">
                <Link href="#" className="btn btn-primary px-8">Volunteer</Link>
                <Link href="#" className="btn btn-secondary px-8">Donate</Link>
              </div>
            </div>
          </div>

          <div className="relative w-1/2 h-[400px] aspect-square overflow-hidden rounded-2xl shadow-2xl shadow-brand-green/20 p-8 border border-brand-green/10 hover:shadow-brand-green/40 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 to-transparent " />
          <div className= 'w-full h-full relative  rounded-2xl overflow-hidden'>
            <Image
                src="/homepage/hero.png"
                alt="Ottawa Greenery"
                fill
                priority
                className="object-cover"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
              <div className="absolute bottom-1 left-1 right-1">
                <div className="rounded-lg bg-green-300/10 backdrop-blur-md p-4 border border-green-300/10 text-white text-center">
                    <p className="text-sm italic font-light">"Nurturing sustainability across Ottawa's communities since 2009."</p>
                </div>
              </div>
          </div>
             
             
          </div>
        </div>
      </div>
    </section>
  )
}
