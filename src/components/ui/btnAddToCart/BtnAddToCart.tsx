'use client'
import { ShoppingBagIcon } from "@/components/icons/icons"
import Btn from "../Btnbtn/Btn"
import { Product } from "@/definitions/type"
import { useUIShopStore } from "@/store/shopStore"

export default function BtnAddToCart({ item }: { item: Product }) {
  const add = useUIShopStore(state => state.addToCart);

  const addToCart = () => add(item)
  return (
    <Btn
      type="button"
      styles={{
        backgroundColor: 'var(--secondary)',
        cursor: 'pointer'
      }}
      click={addToCart}
    >
      <span>
        <ShoppingBagIcon width='18' height='18' />
      </span>
      Buy
    </Btn>
  )
};