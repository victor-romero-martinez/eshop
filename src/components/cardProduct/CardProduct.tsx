import Badges from '@/components/ui/badges/Badges'
import { DollarIcon, ShoppingBagIcon } from '../icons/icons'
import './style.css'

/** Card Product */
export default function CardProduct({
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images,
}: {
  title?: string,
  description?: string,
  price: number,
  discountPercentage?: number,
  rating?: number,
  stock?: number,
  brand?: string,
  category?: string,
  thumbnail?: string,
  images: string[]
}) {
  return (
    <article className='card__product'>
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
        {discountPercentage ? (
          <>
            <span className='card__product-discount'>{price}</span>
            <strong>{price - discountPercentage}</strong>
            <DollarIcon width='18' height='18' />
          </>
        )
          :
          (<span>
            <strong>{price}</strong>
            <DollarIcon width='18' height='18' />
          </span>)}
        <button type='button' title='Add to cart'>
          <ShoppingBagIcon />
        </button>
      </p>
    </article>
  )
};