import CardNews from '../cardNews/CardNews'
import { blogs } from '@/util/blogPost'
import './style.css'

export default function Page() {
  return (
    <section className='container padding'>
      <div className="news__section">
        <h3>Recent News</h3>
        <p>There are many variations passages</p>
      </div>
      <div className='news__section-article'>
        {blogs.map(i => (
          <CardNews key={i.imgUrl} {...i} />
        ))}
      </div>
    </section>
  )
};