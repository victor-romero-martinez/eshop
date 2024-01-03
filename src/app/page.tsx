import BestSeller from '@/components/bestSeller/BestSeller'
import BigCard from '@/components/bigCrad/BigCard'
import CardMedium from '@/components/cardMedium/CardMedium'
import CategorySection from '@/components/categorySection/CategorySection'
import Feature from '@/components/feature/Feature'
import News from '@/components/news/News'
import { getData } from '@/util/getFetch'

export default async function Home() {

  // const data: [] = await getData("https://api.escuelajs.co/api/v1/products?offset=0&limit=5")

  return (
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
        linkTxt='Shop'
      />
      <BestSeller />
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
        linkTxt='Shop'
      />
      <News />
    </main>
  )
}
