import Image from 'next/image'
import Link from 'next/link'
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
        <Image src={imgUrl} width={320} height={240} alt={`picture of ${imgUrl}`} loading='lazy' />
      </picture>
      <div>
        <span>{date}</span>
        <Link href="/onprogress">
          <h4>{title}</h4>
        </Link>
        <p>{description}</p>
      </div>
    </article>
  )
};