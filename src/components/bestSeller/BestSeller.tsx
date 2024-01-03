import CardProduct from '../cardProduct/CardProduct'
import './style.css'

const data = [
  {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
  }
]

export default function BestSeller() {
  // fetch('https://dummyjson.com/products?skip=0&limit=8')
  //   .then(res => res.json())
  //   .then(json => console.log(json))

  return (
    <section className='container padding seller'>
      <h3>Best seller Products</h3>
      <p>Best selling products</p>
      {data?.map(d => (
        <CardProduct key={d.id} {...d} />
      ))}
    </section>
  )
};