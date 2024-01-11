import CardNews from '../cardNews/CardNews'
import { blogs } from '@/lib/blogPost'
import './style.css'

const newsBlogs = blogs.slice(0, 3)

export default function Page() {
  return (
    <section className='container padding'>
      <div className="news__section">
        <h3>Recent News</h3>
        <p>There are many variations passages</p>
      </div>
      <div className='news__section-article'>
        {newsBlogs.map(i => (
          <CardNews key={i.id} {...i} />
        ))}
      </div>
    </section>
  )
};