import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main" className="section bg-white min-h-[60vh] flex flex-col items-center justify-center text-center">
        <p className="text-sm font-semibold text-brand-green mb-4">404</p>
        <h1 className="font-alt font-bold text-[40px] md:text-[56px] leading-[1.1] text-text-strong mb-4">
          Page not found
        </h1>
        <p className="text-text-normal md:text-[18px] max-w-xl mb-8">
          Sorry, we couldn’t find the page you were looking for. It may have moved, or the link may be incorrect.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="bg-brand-green hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm"
          >
            Back to home
          </Link>
          <Link
            href="/projects"
            className="border border-black/30 text-text-strong hover:bg-black/5 px-6 py-3 rounded-lg font-medium transition-colors text-sm"
          >
            Browse projects
          </Link>
          <Link
            href="/contact"
            className="text-brand-green font-medium text-sm hover:underline underline-offset-4"
          >
            Contact us
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
