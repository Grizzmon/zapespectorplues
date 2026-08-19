import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'App PRO PLUS',
  description:
    'A versão PRO PLUS que leva a sua experiência para o próximo nível. Simples, rápido e com tudo que você precisa.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#150d24',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`dark ${poppins.variable} ${inter.variable}`}>
      <body className="bg-background antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
