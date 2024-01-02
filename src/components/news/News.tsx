import CardNews from '../cardNews/CardNews'
import './style.css'

const data = [
  {
    imgUrl: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: 'October 5, 2019',
    title: 'How to choose perfect gadgets',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, obcaecati voluptatibus. Quia possimus pariatur eos voluptatibus quae hic maxime quas illo explicabo minima doloribus, neque suscipit laboriosam quisquam laudantium. Vel.'
  },
  {
    imgUrl: "https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: 'September 15, 2019',
    title: 'Best electronic to buy',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, obcaecati voluptatibus. Quia possimus pariatur eos voluptatibus quae hic maxime quas illo explicabo minima doloribus, neque suscipit laboriosam quisquam laudantium. Vel.'
  },
  {
    imgUrl: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: 'August 23, 2019',
    title: 'Travel and buy guide',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, obcaecati voluptatibus. Quia possimus pariatur eos voluptatibus quae hic maxime quas illo explicabo minima doloribus, neque suscipit laboriosam quisquam laudantium. Vel.'
  },
]

export default function Page() {
  return (
    <section className='container padding'>
      <div className="news__section">
        <h3>Recent News</h3>
        <p>There are many variations passages</p>
      </div>
      <div className='news__section-article'>
        {data.map(i => (
          <CardNews key={i.imgUrl} {...i} />
        ))}
      </div>
    </section>
  )
};