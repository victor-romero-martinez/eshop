import Badges from '@/components/ui/badges/Badges'
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
        <img src={images && images[2]} alt={`image of ${title}`} />
      </picture>
      <h4>{title}</h4>
      <div className='card__product-badges'>
        <Badges>{brand}</Badges>
        <Badges>{category}</Badges>
      </div>
      <p className='card__product-desc'>{description}</p>
      {discountPercentage ? (
        <p className='card__product-price'>
          <span className='card__product-discount'>{price}</span>
          <strong>{price - discountPercentage}</strong> Usd
        </p>
      )
        :
        (<p><strong>{price}</strong> Usd</p>)}
    </article>
  )
};