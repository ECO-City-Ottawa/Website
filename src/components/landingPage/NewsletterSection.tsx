'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmed = email.trim();
    if (!trimmed) {
      setError('Please enter your email address.');
      document.getElementById('newsletter-email')?.focus();
      return;
    }
    if (!EMAIL_RE.test(trimmed)) {
      setError('Please enter a valid email address.');
      document.getElementById('newsletter-email')?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      });
      if (!res.ok) throw new Error('Request failed');
      setSubmitted(true);
      setEmail('');
    } catch {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative section  w-full flex flex-col items-center text-center">
      <Image src="/homepage/CTA.png" alt="" fill className="object-cover -z-10 opacity-50  " />
      <div className=" absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-5 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
      <div className="max-w-xl mx-auto w-full">
        <h2 className="font-alt font-bold text-[36px] md:text-[40px] leading-[1.1] text-text-strong  mb-4">
          Stay connected with our work
        </h2>
        <p className="text-text-normal mb-8">
          Receive updates about our ecological initiatives and community projects
        </p>

        {submitted ? (
          <p className="text-brand-green font-semibold mb-4">Thanks for subscribing! Watch your inbox for updates.</p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-grow text-left">
              <input
                id="newsletter-email"
                aria-label="Newsletter email address"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                aria-invalid={!!error}
                aria-describedby={error ? 'newsletter-email-error' : undefined}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent bg-white text-text-strong ${error ? 'border-error focus:ring-error' : 'border-black/10 focus:ring-brand-green'}`}
              />
              {error && (
                <p id="newsletter-email-error" role="alert" className="mt-1.5 text-sm text-error">{error}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#1B4B6B] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#153a53] disabled:opacity-60 disabled:cursor-not-allowed transition-colors whitespace-nowrap h-fit"
            >
              {isSubmitting ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
        )}
        <p className="text-xs text-text-normal/70">
          By signing up, you agree to our <a href="/terms" className="underline hover:text-text-strong">terms of engagement</a> and <a href="/privacy" className="underline hover:text-text-strong">privacy policy</a>
        </p>
      </div>
    </section>
  );
}
