import type { Product } from "@/definitions/type";
import { Metadata } from "next";
import Link from "next/link";

import './style.css'

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

export default async function Page({ children }: { children: React.ReactNode }) {

  return (
    <main className="container padding product__page">
      <aside>
        <div className="product__filter">
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
        </div>
      </aside>
      {children}
    </main>
  )
};