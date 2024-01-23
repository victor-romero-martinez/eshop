import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import Loading from "@/components/loading/Loading"
import { Suspense } from "react"

import './styles.css'

export default function ProfileLayout({
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