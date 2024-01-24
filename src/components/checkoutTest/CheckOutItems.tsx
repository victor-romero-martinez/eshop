'use client'

import { useUIShopStore } from "@/store/shopStore";

export default function CheckOutItems() {
  const { shoppingCart } = useUIShopStore()
  const { resetCart } = useUIShopStore();
  return (
    <div>
      <span>Cart:</span>
      <pre>
        {JSON.stringify(shoppingCart, null, 2)}
      </pre>
      <button onClick={() => resetCart()}>Reset</button>
    </div>
  )
};