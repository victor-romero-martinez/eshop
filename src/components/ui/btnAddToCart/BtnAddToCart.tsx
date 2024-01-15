'use client'
import { BagCheckIcon, ShoppingBagIcon } from "@/components/icons/icons"
import Btn from "../Btnbtn/Btn"
import { Product } from "@/definitions/type"
import { useUIShopStore } from "@/store/shopStore"

export default function BtnAddToCart({ item }: { item: Product }) {
  const cartState = useUIShopStore(state => state.shopingCart)
  const add = useUIShopStore(state => state.addToCart);

  const addToCart = () => add(item)

  const isAllready = Boolean(cartState.find(i => i.id === item.id))

  return (
    <>
      {isAllready ? (
        <span style={st}>
          <BagCheckIcon width='18' height='18' />
          Added
        </span>
      ) : (
        <Btn
          type="button"
          styles={{
            backgroundColor: 'var(--primary)',
            cursor: 'pointer'
          }}
          click={addToCart}
        >
          <ShoppingBagIcon width='18' height='18' />
          Buy
        </Btn>
      )}
    </>
  )
};

const st = {
  width: 'fit-content',
  height: 'fit-content',
  backgroundColor: 'var(--secondary)',
  fontSize: 'var(--font-sm)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '4px 14px',
  borderRadius: '20vmax'
}
