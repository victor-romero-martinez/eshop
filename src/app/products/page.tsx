import CardProduct from "@/components/cardProduct/CardProduct";
import { getData } from "@/util/getFetch";
import type { Product } from "@/definitions/type";
import { Metadata } from "next";

import './style.css'
import { Suspense } from "react";
import Link from "next/link";

type FetchPeoduct = {
  products: Product[]
}

export const metadata: Metadata = {
  title: 'All products'
}

const categories = [
  "Smartphones",
  "Laptops",
  "Fragrances",
  "Skincare",
  "Groceries",
  "Home-decoration",
  "Furniture",
  "Tops",
  "Womens-dresses",
  "Womens-shoes",
  "Mens-shirts",
  "Mens-shoes",
  "Mens-watches",
  "Womens-watches",
  "Womens-bags",
  "Womens-jewellery",
  "Sunglasses",
  "Automotive",
  "Motorcycle",
  "Lighting"
]

export default async function Page() {
  const { products } = await getData<FetchPeoduct>('https://dummyjson.com/products?limit=28&skip=0')

  return (
    <main className="container padding product__page">
      <aside className="product__filter">
        <h3>Categories</h3>
        <ul>
          {categories.map((c, i) => (
            <li key={i}>
              <Link href={'#'}>
                {c}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <section className="product__inner">
        <Suspense fallback={'loading'} >
          {products.map(p => (
            <CardProduct key={p.id} {...p} />
          ))}
        </Suspense>
      </section>
    </main>
  )
};