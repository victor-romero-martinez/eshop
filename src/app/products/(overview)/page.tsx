import { getData } from "@/lib/getFetch";
import type { Product, TPagination } from "@/definitions/type";
import ProductsViewer from "@/components/productsViewer/ProductViewer";
import { paginationSplit } from "@/lib/paginatioFn";

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
    <ProductsViewer products={data.products} pagination={pages} />
  )
};