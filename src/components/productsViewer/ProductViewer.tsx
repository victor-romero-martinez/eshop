import CardProduct from "../cardProduct/CardProduct";
import { Product } from "@/types/type";
import PaginationFc from "../ui/pagination/PaginationFc";

import './style.css'

export default function ProductsViewer({
  products,
  pagination
}: {
  products: Product[],
  pagination: number[]
}) {

  return (
    <>
      <section className="w-full">
        <div className="product__inner">
          {products.map(p => (
            <CardProduct key={p.id} {...p} />
          ))}
        </div>
        <div className="product__pagination">
          <div className="product__pagination-inner">
            {pagination.map(p => (
              <PaginationFc key={p} page={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
};