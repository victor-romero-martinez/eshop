import { Metadata } from "next";
import FilterComponent from "@/components/filterComponent/FilterComp";
import LinkActive from "@/components/ui/linkActive/LinkActive";
import { getData } from "@/lib/getFetch";

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
            <li>
              <LinkActive url="products" name="All" />
            </li>
            {categories.map((c, i) => (
              <li key={i}>
                <LinkActive url={`products?category=${c}`} />
                {/* <LinkActive url={`products/category/${c}`} /> */}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <FilterComponent items={categories} />
      {children}
    </main>
  )
};