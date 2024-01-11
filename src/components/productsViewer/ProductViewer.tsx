import CardProduct from "../cardProduct/CardProduct";
import { Product } from "@/definitions/type";

import './style.css'

export default function ProductsViewer({ products }: { products: Product[] }) {
  return (
    <section className="product__inner">
      {products.map(p => (
        <CardProduct key={p.id} {...p} />
      ))}
    </section>
  )
};