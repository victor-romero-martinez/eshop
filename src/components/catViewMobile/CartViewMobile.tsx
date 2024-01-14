import { MouseEventHandler } from 'react'
import { xIcon } from '../ui/navBar/icons'
import CartView from '../cartView/CartView'
import { Product } from '@/definitions/type'

import './style.css'

export default function CartViewMobile({
  items,
  click,
  status = false
}: {
  items: Product[],
  click?: MouseEventHandler,
  status: boolean
}) {
  return (
    <div
      className='cart__mobile'
      data-onmobile-cart={status}>
      <button type='button' title='close cart' className='cart__mobile-xicon' onClick={click}>
        {xIcon}
      </button>
      <div className='cart__mobile-inner w-full'>
        <CartView items={items} />
      </div>
    </div>
  )
};