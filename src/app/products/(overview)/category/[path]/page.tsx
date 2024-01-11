import ProductsViewer from "@/components/productsViewer/ProductViewer";
import type { Product } from "@/definitions/type";
import { getData } from "@/lib/getFetch";

type TProduct = {
  products: Product[]
}

export default async function Page({ params }: { params: { path: string } }) {
  const { path } = params;

  const { products } = await getData<TProduct>(`https://dummyjson.com/products/category/${path}`);

  if (products.length < 1) {
    return (
      <div style={{
        flex: '1'
      }}>
        <h3 style={{
          textAlign: 'center'
        }}>Something went wrong :(</h3>
      </div>
    )
  }

  return (
    <ProductsViewer products={products} />
  )
};