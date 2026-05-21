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
  title: 'OBEC',
  description: 'Ottawa Biosphere Eco-City',
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
