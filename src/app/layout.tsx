import './globals.css'
import type { Metadata } from 'next'
import { Inter, Urbanist, Geist } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})
const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-alt',
})

export const metadata: Metadata = {
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
  }
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
