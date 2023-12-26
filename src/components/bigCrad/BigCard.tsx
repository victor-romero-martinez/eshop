import Image from 'next/image'
import './style.css'

export default function BigCard() {
  return (
    <section className='container'>
      <article className='big__card w-fill'>
        <div className='title_section h-full w-fill _padding__inline'>
          <h2>Beats Solo
            <br />
            <span>Wireless</span>
          </h2>
          <button type="button" title='Shop by Category' className='big__card__btn'>Shop by Category</button>
        </div>
        <div className='desc__container h-full w-fill _padding__inline'>
          <p className='desc__title'>Description</p>
          <p className='desc__inner'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio totam quidem perferendis accusamus quis earum iste voluptatem, nam possimus.</p>
        </div>
        <picture className='img__container'>
          <h3 className='text__background'>HEADPHONE</h3>
          <Image src='/headset.png' alt='headset' fill title='headphone' />
        </picture>
      </article>
    </section>
  )
};