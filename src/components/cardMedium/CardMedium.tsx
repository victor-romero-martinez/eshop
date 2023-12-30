import Image from 'next/image'
import Link from 'next/link'
import './style.css'

export default function CardMedium({
  img,
  color,
  backgroundColor,
  spanRight,
  pRight,
  date,
  spanLeft,
  h2,
  pLeft,
  linkTxt
}: {
  img: string,
  color: string,
  backgroundColor: string,
  spanRight: string,
  pRight: string,
  date: string,
  spanLeft: string,
  h2: string,
  pLeft: string,
  linkTxt: string
}) {
  return (
    <article className='container card__medium padding'>
      <div className='card__medium__inner' style={{
        color: color,
        background: backgroundColor
      }}>
        <div>
          <span>{spanRight}</span>
          <p className='big__txt'>{pRight}</p>
          <span>{date}</span>
        </div>
        <div className="medium__content w-full">
          <div>
            <span>{spanLeft}</span>
            <h2>{h2}</h2>
            <span>{pLeft}</span>
            <Link href={'#'} style={{ color: backgroundColor }}>{linkTxt}</Link>
          </div>
        </div>
        <Image src={img} alt={`image of ${img}`} width={200} height={200} className='card__medium__img' />
      </div>
    </article>
  )
};