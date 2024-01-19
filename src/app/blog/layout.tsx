import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import Loading from "@/components/loading/Loading"
import { Suspense } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
      <Footer />

    </>
  )
}