import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ScrollToTop } from '@/components/ScrollToTop'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LUMI - Your AI Fashion Companion',
  description: 'Meet LUMI, the AI cat who helps you look more stylish with the clothes you already own. Inside SIMPLARA.',
  keywords: 'AI fashion assistant, style companion, digital pet, wardrobe management, outfit selection',
  authors: [{ name: 'SIMPLARA' }],
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/assets/lumi1.png', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/lumi1.png', type: 'image/png' },
    ],
    shortcut: '/assets/lumi1.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    colorScheme: 'light',
  },
  openGraph: {
    title: 'LUMI - Your AI Fashion Companion',
    description: 'Meet LUMI, the AI cat who helps you look more stylish with the clothes you already own.',
    type: 'website',
    images: ['/assets/lumi1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUMI - Your AI Fashion Companion',
    description: 'Meet LUMI, the AI cat who helps you look more stylish with the clothes you already own.',
    images: ['/assets/lumi1.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} style={{ colorScheme: 'light' }}>
      <body className="font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if('scrollRestoration'in history)history.scrollRestoration='manual';window.scrollTo(0,0);})();`,
          }}
        />
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
