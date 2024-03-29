'use client'

import Badges from '@/components/ui/badges/Badges'
import { DollarIcon } from '../icons/icons'
import { useRouter } from 'next/navigation'

import './style.css'

/** Card Product */
export default function CardProduct({
  id,
  title,
  description,
  price,
  discountPercentage,
  brand,
  category,
  images,
}: {
  id: string | number
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  brand: string,
  category: string,
  images: string[]
}) {
  const router = useRouter();

  const navigate = (id: string | number) => {
    router.push(`/products/${id}`)
  }

  return (
    <article className='card__product' onClick={() => navigate(id)}>
      <picture>
        <img src={images[0]} alt={`image of ${title}`} />
      </picture>
      <h4>{title}</h4>
      <div className='card__product-badges'>
        <Badges>{brand}</Badges>
        <Badges>{category}</Badges>
      </div>
      <p className='card__product-desc'>{description}</p>
      <p className='card__product-price price'>
        <DollarIcon width='18' height='18' />
        {discountPercentage ? (
          <>
            <span className='card__product-discount'>{price}</span>
            <strong>{price - discountPercentage}</strong>
          </>
        )
          :
          (<span>
            <strong>{price}</strong>
          </span>)}
      </p>
    </article>
  )
};