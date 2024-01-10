import CardProduct from "@/components/cardProduct/CardProduct";
import { getData } from "@/util/getFetch";
import type { Product } from "@/definitions/type";
import { Suspense } from "react";

type FetchPeoduct = {
  products: Product[]
}

export default async function Page() {
  const { products } = await getData<FetchPeoduct>('https://dummyjson.com/products?limit=28&skip=0')

  return (
    <section className="product__inner">
      <Suspense fallback={'loading'} >
        {products.map(p => (
          <CardProduct key={p.id} {...p} />
        ))}
      </Suspense>
    </section>
  )
};