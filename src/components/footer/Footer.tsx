import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-base-soft">
      <div className="container-app grid gap-10 py-12 md:grid-cols-4">
        {/* Brand / blurb */}
        <div>
          <div className="text-lg font-semibold text-text-strong">OBEC</div>
          <p className="mt-3 max-w-xs text-text-normal">
            Community-led sustainability for Ottawa since 2009.
          </p>
          <div className="mt-4 flex gap-2">
            <Link href="/donate" className="btn btn-secondary">Donate</Link>
          </div>
          <div className="mt-4 flex items-center gap-3 text-text-normal">
            {/* Replace with real social links/icons */}
            <a href="#" aria-label="Facebook" className="hover:text-text-strong">Fb</a>
            <a href="#" aria-label="Instagram" className="hover:text-text-strong">Ig</a>
            <a href="#" aria-label="X" className="hover:text-text-strong">X</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-text-strong">In</a>
          </div>
        </div>

        {/* Get involved */}
        <div>
          <div className="section-title text-xl">Get involved</div>
          <ul className="mt-3 space-y-2 text-text-normal">
            <li><Link href="/volunteer" className="hover:text-text-strong">Volunteer</Link></li>
            <li><Link href="/join" className="hover:text-text-strong">Join a PAL</Link></li>
            <li><Link href="/partners" className="hover:text-text-strong">Partner with us</Link></li>
            <li><Link href="/donate" className="hover:text-text-strong">Donate</Link></li>
            <li><Link href="/start-a-csp" className="hover:text-text-strong">Start a CSP</Link></li>
          </ul>
        </div>

        {/* Learn */}
        <div>
          <div className="section-title text-xl">Learn</div>
          <ul className="mt-3 space-y-2 text-text-normal">
            <li><Link href="/about" className="hover:text-text-strong">About OBEC</Link></li>
            <li><Link href="/why-and-how" className="hover:text-text-strong">Why & How</Link></li>
            <li><Link href="/projects" className="hover:text-text-strong">Projects</Link></li>
            <li><Link href="/news" className="hover:text-text-strong">News & Events</Link></li>
            <li><Link href="/resources" className="hover:text-text-strong">Resources & Tools</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="section-title text-xl">Contact</div>
          <ul className="mt-3 space-y-2 text-text-normal">
            <li>Phone: 613-663-2542</li>
            <li>Address: 170 Tunney’s Pasture, Ottawa</li>
            <li><Link href="/contact" className="hover:text-text-strong underline">Contact us</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="container-app flex flex-col items-center justify-between gap-3 py-6 text-sm text-text-normal md:flex-row">
          <p>© {new Date().getFullYear()} Ottawa Biosphere Eco-City (OBEC). All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-text-strong">Privacy policy</Link>
            <Link href="/terms" className="hover:text-text-strong">Terms of service</Link>
            <Link href="/cookies" className="hover:text-text-strong">Cookie settings</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
