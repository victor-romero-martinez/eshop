import { Metadata } from "next"
import { Product } from "@/definitions/type"
import { getData } from "@/lib/fetch/getFetch"
import CardProduct from "@/components/cardProduct/CardProduct"

import './style.css'

type TData = {
  products: Product[],
  total: number,
  limit: number
}

export const metadata: Metadata = {
  title: "Search"
}

export default async function Page({ params }: {
  params: {
    item: string,
  }
}) {
  const search = params.item

  const data = await getData<TData>(`https://dummyjson.com/products/search?q=${search}`)

  return (
    <>
      {data.products.length > 0 ? (
        <main className="container padding">
          <h1>Result for &quot;{search}&quot;</h1>
          <section className="products-view">
            {data.products.map(p => (
              <CardProduct key={p.id} {...p} />
            ))}
          </section>
        </main>
      ) : (
        <div className="w-full container padding no-match">
          <h2>No request match for &quot;{search}&quot; :(</h2>
        </div>
      )}
    </>
  )
};
