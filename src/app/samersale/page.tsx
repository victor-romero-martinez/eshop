import { Suspense } from "react";
import Loading from "@/components/loading/Loading";
import CardProduct from "@/components/cardProduct/CardProduct";
import { Product } from "@/types/type";
import { getData } from "@/lib/fetch/getFetch";
import { Metadata } from "next";

import './styles.css'

export const metadata: Metadata = {
  title: 'Summer Sale!'
}

type TData = {
  products: Product[],
}

export default async function Page() {
  const data = await getData<TData>(`https://dummyjson.com/products`)

  return (
    <Suspense fallback={<Loading />}>
      <main className="container padding">
        <h1>Sammer Sale!</h1>
        <section className="products-view">
          {data.products.map(p => (
            <CardProduct key={p.id} {...p} />
          ))}
        </section>
      </main>
    </Suspense>
  )
};
