import Btn from '@/components/ui/Btnbtn/Btn'
import Link from 'next/link'

import './styles.css'

export default function Page() {
  return (
    <main className='w-full h-vh grid__center'>
      <div className="container padding box__form ">
        <h1>Log in</h1>

        <form action="/">
          <label htmlFor="email">
            <input
              type="email"
              id='email'
              placeholder='example@gmail.com'
            />
          </label>

          <label htmlFor="password">
            <input
              type="password"
              id='password'
              placeholder='****'
              minLength={4}
            />
          </label>

          <Btn
            type='submit'
            styles={{
              backgroundColor: 'var(--primary)',
              cursor: 'pointer'
            }}
          >
            Log-in
          </Btn>
        </form>

        <span>Or &nbsp;
          <Link href={'register'} >
            register
          </Link>
        </span>
      </div>
    </main>
  )
};