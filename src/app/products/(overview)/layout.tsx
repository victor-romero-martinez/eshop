import { Metadata } from "next";
import FilterComponent from "@/components/filterComponent/FilterComp";
import LinkActive from "@/components/ui/linkActive/LinkActive";
import { getData } from "@/util/getFetch";
import Link from "next/link";

import './style.css'

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
            <li><Link href='/products'>all</Link></li>
            {categories.map((c, i) => (
              <li key={i}>
                <LinkActive url={c} />
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