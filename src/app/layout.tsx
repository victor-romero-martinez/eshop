import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Poppins } from 'next/font/google'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Loading from '@/components/loading/Loading'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'], weight: ['200', '400', "700"]
})

export const metadata: Metadata = {
  metadataBase: new URL("https://eshop-tau-six.vercel.app"),
  title: {
    template: '%s | Happy Shopping',
    default: 'Happy Shopping'
  },
  description: 'Everything you need in one place',
  openGraph: { images: 'opengraph-image.webp' }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  )
}
