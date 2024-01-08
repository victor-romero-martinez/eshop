import CardProduct from "@/components/cardProduct/CardProduct";
import { getData } from "@/util/getFetch";
import type { Product } from "@/definitions/type";
import { Metadata } from "next";

import './style.css'
import { Suspense } from "react";

type FetchPeoduct = {
  products: Product[]
}

export const metadata: Metadata = {
  title: 'All products'
}

const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting"
]

export default async function Page() {
  const { products }: FetchPeoduct = await getData('https://dummyjson.com/products')

  return (
    <main className="container padding">
      <div className="product__filter">
        <select name="category">
          <option value="all">All</option>
          {categories.map((c, i) => (
            <option key={i} value={c}>{c}</option>
          ))}
        </select>
        <button type="button">Filter</button>
      </div>
      <div className="product__inner">
        <Suspense fallback={'loading'} >
          {products.map(p => (
            <CardProduct key={p.id} {...p} />
          ))}
        </Suspense>
      </div>
    </main>
  )
};