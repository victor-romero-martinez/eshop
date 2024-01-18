import ProductsViewer from "@/components/productsViewer/ProductViewer"
import { Product } from "@/definitions/type"
import { getData } from "@/lib/getFetch"
import { paginationSplit } from "@/lib/paginatioFn"
import { CSSProperties } from "react"

import './style.css'
import CardProduct from "@/components/cardProduct/CardProduct"

type TData = {
  products: Product[],
  total: number,
  limit: number
}

export default async function Page({ searchParams }: {
  searchParams?: {
    q: string,
  }
}) {
  const search = searchParams?.q

  const data = await getData<TData>(`https://dummyjson.com/products/search?q=${search}`)

  const pages = paginationSplit({
    total: data.total,
    limit: data.limit,
  });

  return (
    <>
      {data.products.length > 0 ? (
        <main className="container padding">
          <h1>Result for <span>{search}</span></h1>
          <section className="products-view">
            {data.products.map(p => (
              <CardProduct key={p.id} {...p} />
            ))}
          </section>
        </main>
      ) : (
        <div className="w-full container padding no-match">
          <h2>No request match for {search} :(</h2>
        </div>
      )}
    </>
  )
};
