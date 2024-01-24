'use client'

import { useUIShopStore } from "@/store/shopStore";

export default function CheckOutItems() {
  const { shoppingCart } = useUIShopStore()
  const { resetCart } = useUIShopStore();
  return (
    <div>
      <button onClick={() => resetCart()} className="reset__cart">Clear cart</button>

      <pre className="cart__shopping">
        {JSON.stringify(shoppingCart, null, 2)}
      </pre>
    </div>
  )
};