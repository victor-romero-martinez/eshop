import Link from 'next/link'
import { register } from '@/lib/actions'

import './styles.css'

export default async function Page() {

  return (
    <main className='w-full h-vh grid__center'>
      <div className="container box__form ">
        <h1>Register</h1>

        <form action={register}>

          <div>
            <label htmlFor="username">
              User name
            </label>
            <input
              type="text"
              id='username'
              name='username'
              placeholder='John Doe'
              minLength={4}
              required
            />
          </div>

          <div>
            <label htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id='email'
              name='email'
              placeholder='example@gmail.com'
              required
            />
          </div>

          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id='password'
            name='password'
            placeholder='****'
            minLength={4}
            required
          />

          <button type='submit'>
            Register now
          </button>
        </form>

        <span>Or &nbsp;
          <Link href={'login'} >
            Login
          </Link>
        </span>
      </div>
    </main>
  )
};