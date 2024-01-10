import { Metadata } from "next";
import Link from "next/link";
import FilterComponent from "@/components/filterComponent/FilterComp";

import './style.css'
import { getData } from "@/util/getFetch";

export const metadata: Metadata = {
  title: 'All products'
}

type Category = string[]

export default async function Page({ children }: { children: React.ReactNode }) {

  const categories = await getData<Category>('https://dummyjson.com/products/categories')

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