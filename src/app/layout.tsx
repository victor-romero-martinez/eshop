import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Poppins } from 'next/font/google'
import { LoadingIcon } from '@/components/icons/icons'

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
        <Suspense fallback={
          <div className="h-vh w-full grid__center">
            <LoadingIcon width='60' height='60' className='spin' />
          </div>
        }>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
