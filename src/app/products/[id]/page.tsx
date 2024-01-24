import { DollarIcon, ShoppingBagIcon, StarIcon } from "@/components/icons/icons";
import Badges from "@/components/ui/badges/Badges";
import { Product } from "@/definitions/type";
import { getData } from "@/lib/fetch/getFetch";
import ImageViewer from "@/components/imageViewer/ImageViewer";
import { Metadata } from "next";
import BtnAddToCart from "@/components/ui/btnAddToCart/BtnAddToCart";
import CardMedium from "@/components/cardMedium/CardMedium";

import './style.css'

export const metadata: Metadata = {
  title: 'Product'
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params

  const product = await getData<Product>(`https://dummyjson.com/products/${id}`)

  return (
    <main className="container padding">
      <article className="product">
        <ImageViewer url={product.images} alt={product.title} />
        <div className="product-desc">
          <h1>{product.title}</h1>
          <p className="product-raiting">
            <span>
              {product.rating} <StarIcon width='14' height='14' />
            </span>
            <Badges>
              {product.brand}
            </Badges>
            <Badges>
              {product.category}
            </Badges>
          </p>
          <p>{product.description}</p>
          <div className="buy">
            <p className='product-price'>
              <DollarIcon width='18' height='18' />
              {product?.discountPercentage ? (
                <>
                  <span className='card__product-discount'>{product.price}</span>
                  <strong>{product.price - product.discountPercentage}</strong>
                </>
              )
                :
                (<span>
                  <strong>{product.price}</strong>
                </span>)}
            </p>
            <BtnAddToCart item={product} />
          </div>
        </div>
      </article>
      <CardMedium
        img='/smartphone.webp'
        color='#c73412'
        backgroundColor='#fbbbeb'
        spanRight='20% off'
        p1Right='good'
        p2Right='day'
        date='15 nov to 7 dic'
        spanLeft='connect people'
        h2='Summer Sale'
        pLeft='Company thats grown from 270 to 480 employees in
        the last 12 months.'
        linkTxt='/samersale'
      />
    </main>
  )
};