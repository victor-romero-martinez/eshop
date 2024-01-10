import { getData } from "@/util/getFetch";
import type { Product } from "@/definitions/type";
import ProductsViewer from "@/components/productsViewer/ProductViewer";

type FetchPeoduct = {
  products: Product[]
}

export default async function Page() {
  const { products } = await getData<FetchPeoduct>('https://dummyjson.com/products?limit=28&skip=0')

  return (
    <ProductsViewer products={products} />
  )
};