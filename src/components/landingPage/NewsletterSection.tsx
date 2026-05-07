import React from 'react';

export default function NewsletterSection() {
  return (
    <section className="section bg-base-white w-full flex flex-col items-center text-center">
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
