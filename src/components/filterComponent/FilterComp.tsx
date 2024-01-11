'use client'
import { useState } from 'react'
import { FilterIcon } from '../icons/icons'
import './style.css'
import { xIcon } from '../ui/navBar/icons'
import Link from 'next/link'
import { formatedString } from '@/lib/formatedString'
import LinkActive from '../ui/linkActive/LinkActive'

export default function FilterComponent({ items }: { items: string[] }) {
  const [open, setOpen] = useState(false)

  function toggleBtn() {
    return setOpen(prev => !prev)
  }

  return (
    <>
      <div className='filter__mobile'>
        <button type='button' onClick={toggleBtn}>
          <FilterIcon color='#fdfdfd' />
        </button>
      </div>
      <div className='filter__mobile-content' data-filter={open}>
        <button type='button' onClick={toggleBtn}>{xIcon}</button>
        <ul className='container padding w-full'>
          <li>
            <Link href={'/products'} onClick={toggleBtn}>All</Link>
          </li>
          {items.map((i, idx) => (
            <li key={idx}>
              <LinkActive url={i} click={toggleBtn} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
};