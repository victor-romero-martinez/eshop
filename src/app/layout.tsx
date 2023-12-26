import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'

const poppins = Poppins({
  subsets: ['latin'], weight: ['200', '400', "700"]
})

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: '%s | HAPPY SHOMPING',
    default: 'HAPPY SHOPPING'
  },
  description: 'Tienda de electronicos',
  openGraph: { images: 'opengraph-image.png' }
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
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
