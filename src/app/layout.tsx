import './globals.css'
import type { Metadata } from 'next'
import { Inter, Urbanist } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-main',
})
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
    <html lang="en" className={`${inter.variable} ${urbanist.variable}`}>
      <body className="font-sans text-text-normal bg-base-white antialiased">
        {children}
      </body>
    </html>
  )
}
