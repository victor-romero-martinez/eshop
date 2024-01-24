'use client'
import { ChangeEvent, useState } from 'react'
import Link from 'next/link'
import { login } from '@/lib/actions'

import './styles.css'

const initilaForm = {
  username: 'kminchelle',
  password: '0lelplR'
}

export default function Page() {
  const [form, setForm] = useState(initilaForm)

  function handleForm(e: ChangeEvent<HTMLInputElement>) {
    setForm(prev => (
      {
        ...prev,
        [e.target.name]: e.target.value
      }
    ))
  }

  return (
    <main className='w-full h-vh grid__center'>
      <div className="container box__form ">
        <h1>Login</h1>

        <form action={login}>

          <div>
            <label htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name='username'
              id='username'
              placeholder='John Doe'
              required
              value={form.username}
              onChange={(e) => handleForm(e)}
            />
          </div>

          <div>
            <label htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id='password'
              name='password'
              minLength={4}
              placeholder='****'
              required
              value={form.password}
              onChange={(e) => handleForm(e)}
            />
          </div>

          <button
            type='submit'
          >
            Login
          </button>

        </form>

        <span>Don&apos;t have an account? &nbsp;
          <Link href={'register'} >
            Register
          </Link>
        </span>

        <span className='recovery'>Recovery&nbsp;
          <Link href={'https://dummyjson.com/user'} target='_blank' rel='noopener noreferrer' >
            Password
          </Link>
        </span>
      </div>
    </main>
  )
};