import { Suspense } from 'react'
import Loading from '@/components/loading/Loading'
import Footer from '@/components/footer/Footer'
import BestSeller from '@/components/bestSeller/BestSeller'
import BigCard from '@/components/bigCrad/BigCard'
import CardMedium from '@/components/cardMedium/CardMedium'
import CategorySection from '@/components/categorySection/CategorySection'
import Feature from '@/components/feature/Feature'
import News from '@/components/news/News'
import { getData } from '@/lib/fetch/getFetch'
import type { Product } from '@/definitions/type'
import Header from '@/components/header/Header'

type Data = {
  products: Product[];
}

export default async function Home() {

  const { products }: Data = await getData("https://dummyjson.com/products?skip=0&limit=10")

  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <main className='w-full'>
          <BigCard />
          <CategorySection />
          <Feature />
          <CardMedium
            img='/headset2.webp'
            color='#fdfdfd'
            backgroundColor='#D5568F'
            spanRight='20% off'
            p1Right='fine'
            p2Right='smile'
            date='15 nov to 7 dic'
            spanLeft='beat solo air'
            h2='Summer Sale'
            pLeft='Company thats grown from 270 to 480 employees in
        the last 12 months.'
            linkTxt='/samersale'
          />
          <BestSeller data={products} />
          <CardMedium
            img='/watch.webp'
            color='#fdfdfd'
            backgroundColor='#2dcc70'
            spanRight='20% off'
            p1Right='happy'
            p2Right='hours'
            date='15 nov to 7 dic'
            spanLeft='beat solo air'
            h2='Summer Sale'
            pLeft='Company thats grown from 270 to 480 employees in
        the last 12 months.'
            linkTxt='/samersale'
          />
          <News />
        </main>
      </Suspense>
      <Footer />
    </>
  )
}
