import Link from 'next/link'
import { postData } from '@/lib/fetch/postFetch'

import './styles.css'

export default async function Page() {
  const logUser = await postData('https://dummyjson.com/auth/login', {
    username: 'kminchelle',
    password: '0lelplR',
  })

  console.log(logUser);


  return (
    <main className='w-full h-vh grid__center'>
      <div className="container box__form ">
        <h1>Login</h1>

        <form action="#">

          <div>
            <label htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id='email'
              placeholder='example@gmail.com'
              required
            />
          </div>

          <div>
            <label htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id='password'
              minLength={4}
              placeholder='****'
              required
            />
          </div>

          <button
            type='submit'
          >
            Login
          </button>

        </form>

        <span>Or &nbsp;
          <Link href={'register'} >
            Register
          </Link>
        </span>
      </div>
    </main>
  )
};