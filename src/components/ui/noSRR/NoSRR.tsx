'use client'

import dynamic from "next/dynamic"
import { CartShoppinfPlaceholder } from "./CartShoppinfPlaceholder"
import { useUIStore } from "@/store/uiStore"


import './styles.css'

// Cart display on desktop
const NoSSRcart = dynamic(() => import('@/components/ui/noSRR/CartShopping'), {
  ssr: false,
  loading: () => <CartShoppinfPlaceholder />
})

// Cart disply on mobile
const NoSSRcartOnMobile = dynamic(() => import('@/components/catViewMobile/CartViewMobile'), {
  ssr: false
})

export default function NoSSRCart() {
  const { toggleCart } = useUIStore()

  return (
    <>
      <NoSSRcart />
      <NoSSRcartOnMobile click={toggleCart} />
    </>
  )
};