import Image from 'next/image'
import './style.css'

export default function CardNews({ imgUrl, date, title, description }: {
  imgUrl: string,
  date: string,
  title: string,
  description: string
}) {
  return (
    <article className='card__news'>
      <picture>
        <Image src={imgUrl} width={320} height={240} alt={`picture of ${imgUrl}`} />
      </picture>
      <span>{date}</span>
      <a href="#">
        <h4>{title}</h4>
      </a>
      <p>{description}</p>
    </article>
  )
};