import { MouseEventHandler } from 'react'
import { xIcon } from '../ui/navBar/icons'
import CartView from '../cartView/CartView'
import { useUIShopStore } from '@/store/shopStore'
import { useUIStore } from '@/store/uiStore'

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
    </div>
  )
};