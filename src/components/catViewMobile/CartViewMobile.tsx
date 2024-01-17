import { MouseEventHandler } from 'react'
import { xIcon } from '../ui/navBar/icons'
import CartView from '../cartView/CartView'
import { useUIShopStore } from '@/store/shopStore'
import { useUIStore } from '@/store/uiStore'
import Btn from '../ui/Btnbtn/Btn'

import './style.css'

export default function CartViewMobile({ click }: { click?: MouseEventHandler }) {
  const { cart } = useUIStore()
  const { shoppingCart } = useUIShopStore()

  return (
    <div
      className='cart__mobile'
      data-onmobile-cart={cart}>
      <button type='button' title='close cart' className='cart__mobile-xicon' onClick={click}>
        {xIcon}
      </button>
      <div className='cart__mobile-inner w-full'>
        <CartView items={shoppingCart} />
      </div>

      {shoppingCart.length > 0 && (
        <div className="cart__mobile-buy__btn w-full">
          <Btn
            type="button"
            styles={{
              backgroundColor: "var(--primary)",
              fontSize: "var(--font-lg)",
              width: "100px",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            Buy
          </Btn>
        </div>
      )}

    </div>
  )
};