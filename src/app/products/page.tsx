import CardProduct from "@/components/cardProduct/CardProduct";
import { getData } from "@/util/getFetch";
import type { Product } from "@/definitions/type";
import { Metadata } from "next";

import './style.css'

type FetchPeoduct = {
  products: Product[]
}

export const metadata: Metadata = {
  title: 'All products'
}

export default async function Page() {
  const { products }: FetchPeoduct = await getData('https://dummyjson.com/products')

  return (
    <main className="container padding">
      <div className="product__inner">
        {products.map(p => (
          <CardProduct key={p.id} {...p} />
        ))}
      </div>
    </main>
  )
};