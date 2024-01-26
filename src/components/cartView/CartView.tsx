/* eslint-disable @next/next/no-img-element */
import { Product } from '@/types/type'
import { BagCheckIcon, BagEmptyIcon, DollarIcon, TrashIcon } from '../icons/icons'
import { useUIShopStore } from '@/store/shopStore'

import './style.css'


export default function CartView({ items }: { items: Product[] }) {
  const { shoppingCart: shopingCart } = useUIShopStore()
  const { removeToCart } = useUIShopStore()

  const handleRemove = (id: string | number) => removeToCart(id)

  return (
    <>{
      shopingCart.length > 0 ? (
        <>
          {items?.map(i => (
            <div key={i.id} className='cart__container__item w-full'>
              <picture className='padding'>
                <img src={i.images[0]} alt={i.title} width={50} />
              </picture>
              <div className='cart__container__item-inner w-full'>
                <div className='cart__container__item-details'>
                  <h4>{i.title}</h4>
                  <p>
                    Price: &nbsp; <span> {i.price - i.discountPercentage}</span>
                    <DollarIcon width='14' height='14' />
                  </p>
                </div>
                <button
                  type='button'
                  title='Delete item'
                  onClick={() => handleRemove(i.id)}
                >
                  <TrashIcon />
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className='cart__container__item-empty w-full'>
          <span>
            <BagEmptyIcon width='60' height='60' />
            Cart is empty :(
          </span>
        </div>
      )
    }
    </>
  )
};