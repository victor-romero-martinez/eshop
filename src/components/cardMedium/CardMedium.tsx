import Image from 'next/image'
import LinkBtn from '@/components/ui/linkBtn/LinkBtn'
import './style.css'

export default function CardMedium({
  img,
  color,
  backgroundColor,
  spanRight,
  p1Right,
  p2Right,
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
  p1Right: string,
  p2Right?: string,
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
        <div className='w-full'>
          <span className='padding'>{spanRight}</span>
          <p className='big__txt padding'>{p1Right} <br />{p2Right}</p>
          <span className='padding'>{date}</span>
        </div>
        <div className="medium__content w-full">
          <div>
            <span>{spanLeft}</span>
            <h2>{h2}</h2>
            <span>{pLeft}</span>
            <LinkBtn href='#' styles={{ color: backgroundColor }}>Shop now</LinkBtn>
          </div>
        </div>
        <Image src={img} alt={`image of ${img}`} width={200} height={200} className='card__medium__img' />
      </div>
    </article >
  )
};