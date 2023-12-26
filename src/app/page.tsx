import BigCard from '@/components/bigCrad/BigCard'
import CategorySection from '@/components/categorySection/CategorySextion'
import { getData } from '@/util/getFetch'

export default async function Home() {

  const data: [] = await getData("https://api.escuelajs.co/api/v1/products?offset=0&limit=5")

  return (
    <main className='w-full'>
      <BigCard />
      <CategorySection />
    </main>
  )
}
