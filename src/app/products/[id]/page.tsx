/* eslint-disable @next/next/no-img-element */
import { DollarIcon, StarIcon } from "@/components/icons/icons";
import Badges from "@/components/ui/badges/Badges";
import { Product } from "@/definitions/type";
import { getData } from "@/util/getFetch";
import { Metadata } from "next";

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
        <div className="product__inner">
          <h1>{product.title}</h1>
          <p className="product__inner-raiting">
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
        </div>
        <picture>
          {product.images.map((item, idx) => (
            <img key={idx} src={item} alt={'iamge of' + product.title} width={200} height={200} />
          ))}
        </picture>
        <div className="product__inner-desc">
          <p>{product.description}</p>
          <p className='product__inner-price'>
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
        </div>
      </article>
    </main>
  )
};