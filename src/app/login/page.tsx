import Btn from '@/components/ui/Btnbtn/Btn'
import './styles.css'
import Link from 'next/link'

export default function Page() {
  return (
    <main className='w-full h-vh grid__center'>
      <div className="container padding">
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
          <Btn>
            Log-in
          </Btn>
        </form>
        <span>Or
          <Link href={'register'} >
            register
          </Link>
        </span>
      </div>
    </main>
  )
};