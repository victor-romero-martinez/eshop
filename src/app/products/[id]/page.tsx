import { DollarIcon, StarIcon } from "@/components/icons/icons";
import Badges from "@/components/ui/badges/Badges";
import { Product } from "@/definitions/type";
import { getData } from "@/lib/getFetch";
import ImageViewer from "@/components/imageViewer/ImageViewer";
import Btn from "@/components/ui/Btnbtn/Btn";
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
            <Btn type="button" styles={{
              color: '#fff',
              backgroundColor: 'var(--primary)',
              cursor: 'pointer'
            }}>Buy</Btn>
          </div>
        </div>
      </article>
    </main>
  )
};