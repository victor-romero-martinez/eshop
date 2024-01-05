import { Product } from "@/definitions/type";
import { getData } from "@/util/getFetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Product'
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params

  const product: Product = await getData(`https://dummyjson.com/products/${id}`)

  return (
    <main className="container padding">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.brand}</p>
      <p>{product.category}</p>
      <img src={product.thumbnail} alt={'iamge of' + product.title} width={200} height={200} />
      <img src={product.images[0]} alt={'image of' + product.title} width={200} height={200} />
      <img src={product.images[1]} alt={'image of' + product.title} width={200} height={200} />
      <img src={product.images[2]} alt={'image of' + product.title} width={200} height={200} />
      <img src={product.images[3]} alt={'image of' + product.title} width={200} height={200} />
    </main>
  )
};