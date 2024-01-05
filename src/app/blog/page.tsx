import CardNews from "@/components/cardNews/CardNews";
import { blogs } from "@/util/blogPost";
import { Metadata } from 'next'
import './style.css'

export const metadata: Metadata = {
  title: 'Blog'
}


export default function Page() {
  return (
    <main className="container padding">
      <div className="blogs__section">
        <h3>Recent Blogs</h3>
        <p>There are many variations passages</p>
      </div>
      <div className='blogs__section-article'>
        {blogs.map(i => (
          <CardNews key={i.id} {...i} />
        ))}
      </div>
    </main>
  )
};