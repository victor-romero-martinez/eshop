import { Metadata } from "next";
import Link from "next/link";
import FilterComponent from "@/components/filterComponent/FilterComp";

import './style.css'

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
  "momens-watches",
  "momens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting"
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
                <Link href={`/products/category/${c}`}>
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div className="filter__mobile">
        <FilterComponent />
      </div>
      {children}
    </main>
  )
};