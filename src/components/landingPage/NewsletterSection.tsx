import Image from 'next/image';
import React from 'react';

export default function NewsletterSection() {
  return (
    <section className="relative section  w-full flex flex-col items-center text-center">
      <Image src="/homepage/CTA.png" alt="Ottawa background" fill className="object-cover -z-10 opacity-50  " />
      <div className=" absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-5 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
      <div className="max-w-xl mx-auto w-full">
        <h2 className="font-alt font-bold text-[36px] md:text-[40px] leading-[1.1] text-text-strong tracking-tight mb-4">
          Stay connected with our work
        </h2>
        <p className="text-text-normal mb-8">
          Receive updates about our ecological initiatives and community projects
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 mb-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:border-brand-green bg-white shadow-sm text-text-strong"
            required
          />
          <button 
            type="submit" 
            className="bg-[#1B4B6B] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#153a53] transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-text-normal/70">
          By signing up, you agree to our terms of engagement and privacy policy
        </p>
      </div>
    </section>
  );
}
