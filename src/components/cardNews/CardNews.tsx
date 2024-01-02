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
      <Image src={imgUrl} width={320} height={240} alt={`picture of ${imgUrl}`} />
      <span>{date}</span>
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  )
};