import type { Product } from '@/definitions/type'
import CardProduct from '../cardProduct/CardProduct'

import './style.css'

export default function BestSeller({ data }: { data: Product[] }) {
  return (
    <section className='container padding seller'>
      <h3>Best seller Products</h3>
      <p>Best selling products</p>
      <div className='seller__inner'>
        {data?.map(d => (
          <CardProduct key={d.id} {...d} />
        ))}
      </div>
    </section>
  )
};