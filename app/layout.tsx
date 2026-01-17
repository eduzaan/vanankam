import type { Metadata } from 'next'
import { Poppins, Oswald, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import { AppProvider } from '@/context/AppContext'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vanankam - Premium Tea Franchise | Yaar Mera Kulhad',
  description: 'Join India\'s fastest growing tea franchise. Experience authentic kulhad chai with a modern twist. 500+ outlets across 200+ cities.',
  keywords: 'tea franchise, kulhad chai, franchise opportunity, Vanankam, tea business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${oswald.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <AppProvider>
          <Header />
          <main className="pt-20 min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </AppProvider>
      </body>
    </html>
  )
}
