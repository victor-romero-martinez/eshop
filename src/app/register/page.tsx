import Link from 'next/link'

import './styles.css'

export default function Page() {
  return (
    <main className='w-full h-vh grid__center'>
      <div className="container box__form ">
        <h1>Register</h1>

        <form action="/">

          <div>
            <label htmlFor="username">
              User name
            </label>
            <input
              type="text"
              id='username'
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
            placeholder='****'
            minLength={4}
            required
          />

          <button type='button'>
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