import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { SerwistProvider } from './serwist'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'IBS Sweetener Guide',
  description: 'A quick-reference guide to sweetener safety for IBS sufferers, based on FSANZ and Monash University FODMAP guidelines.',
  generator: 'v0.app',
  applicationName: 'IBS Sweetener Guide',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'IBS Sweetener Guide',
  },
  formatDetection: { telephone: false },
  icons: {
    icon: '/icon-512.jpg',
    apple: '/icon-512.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d9488',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SerwistProvider swUrl="/sw.js" disable={process.env.NODE_ENV === 'development'} />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
