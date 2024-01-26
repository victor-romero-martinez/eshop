import { getData } from "@/lib/fetch/getFetch";
import type { Product, TPagination } from "@/types/type";
import ProductsViewer from "@/components/productsViewer/ProductViewer";
import { paginationSplit } from "@/lib/paginatioFn";
import { CSSProperties } from "react";

type Products = {
  products: Product[]
}

type Data = Products & TPagination

export default async function Page({ searchParams }: {
  searchParams?: {
    category: string,
    limit: string,
    skip: string
  }
}) {
  const limit = searchParams?.limit ?? 16;
  const skip = searchParams?.skip ?? 0;
  const category = searchParams?.category;

  const ulrFecht = category ? `/category/${category}` : `?limit=${limit}&skip=${skip}`

  const data = await getData<Data>(`https://dummyjson.com/products${ulrFecht}`)

  const pages = paginationSplit({
    total: data.total,
    limit: Number(limit),
  });

  return (
    <>
      {data.products.length > 0 ? (
        <ProductsViewer products={data.products} pagination={pages} />
      ) : (
        <div className="w-full" style={st}>
          <h2>No request match :(</h2>
        </div>
      )}
    </>
  )
};

const st: CSSProperties = {
  display: 'grid',
  placeItems: 'center',
}