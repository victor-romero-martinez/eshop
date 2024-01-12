import ProductsViewer from "@/components/productsViewer/ProductViewer";
import type { Product, TPagination } from "@/definitions/type";
import { getData } from "@/lib/getFetch";
import { paginationSplit } from "@/lib/paginatioFn";

type TProduct = {
  products: Product[]
}

type Data = TProduct & TPagination

export default async function Page({ params }: { params: { path: string } }) {
  const { path } = params;

  const data = await getData<Data>(`https://dummyjson.com/products/category/${path}`);

  const pages = paginationSplit({
    total: data.total,
    limit: data.limit,
  });

  if (data.products.length < 1) {
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
    <ProductsViewer products={data.products} pagination={pages} />
  )
};