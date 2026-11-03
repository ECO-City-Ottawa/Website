import './globals.css'
import type { Metadata } from 'next'
import { Urbanist, Geist } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})
const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-alt',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://obec-evbo.ca'),
  title: {
    default: 'EcoCity Ottawa | Community-Led Sustainability',
    template: '%s | EcoCity Ottawa'
  },
  description: 'EcoCity Ottawa (formerly Ottawa Biosphere Eco-City - OBEC) is a community-led grassroots charity established in 2009. We bring together neighbourhoods, businesses, schools, and organizations to develop practical sustainability projects in Ottawa.',
  keywords: [
    'EcoCity Ottawa',
    'OBEC',
    'Ottawa Biosphere Eco-City',
    'Sustainability Ottawa',
    'Community Action Labs',
    'Environmental Charity Ottawa',
    'Grassroots Sustainability',
    'Green Ottawa'
  ],
  authors: [{ name: 'EcoCity Ottawa' }],
  creator: 'EcoCity Ottawa',
  publisher: 'EcoCity Ottawa',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    siteName: 'EcoCity Ottawa',
    locale: 'en_CA',
    url: '/',
    title: 'EcoCity Ottawa | Community-Led Sustainability',
    description: 'A community-led grassroots charity established in 2009, bringing together neighbourhoods, schools, and organizations to develop practical sustainability projects in Ottawa.',
    images: [
      {
        // TODO: replace with a dedicated 1200x630 branded share image when one exists.
        url: '/homepage/hero1.jpg',
        width: 1440,
        height: 1080,
        alt: 'Ottawa residents working together at a community sustainability workshop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoCity Ottawa | Community-Led Sustainability',
    description: 'A community-led grassroots charity bringing Ottawa neighbourhoods together on practical sustainability projects.',
    images: ['/homepage/hero1.jpg'],
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(urbanist.variable, "font-sans", geist.variable)}>
      <body className="font-sans text-text-normal bg-base-white antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
