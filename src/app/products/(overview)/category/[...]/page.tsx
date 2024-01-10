import ProductsViewer from "@/components/productsViewer/ProductViewer";
import type { Product } from "@/definitions/type";
import { getData } from "@/util/getFetch";

type TProduct = {
  products: Product[]
}

export default async function Page({ params }: { params: unknown }) {
  const category: string = params[''][0];

  const { products } = await getData<TProduct>(`https://dummyjson.com/products/category/${category}`)

  if (products.length < 1) {
    return (
      <div>
        <h3 style={{
          textAlign: 'center'
        }}>No match :(</h3>
      </div>
    )
  }

  return (
    <ProductsViewer products={products} />
  )
};