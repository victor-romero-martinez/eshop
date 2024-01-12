'use client'
import { useState } from 'react'
import { FilterIcon } from '../icons/icons'
import { xIcon } from '../ui/navBar/icons'
import LinkActive from '../ui/linkActive/LinkActive'

import './style.css'

export default function FilterComponent({ items }: { items: string[] }) {
  const [open, setOpen] = useState(false)

  function toggleBtn() {
    return setOpen(prev => !prev)
  }

  return (
    <>
      <div className='filter__mobile'>
        <button type='button' title='open filter' onClick={toggleBtn}>
          <FilterIcon color='#fdfdfd' />
        </button>
      </div>
      <div className='filter__mobile-content' data-filter={open}>
        <button type='button' title='close filter' onClick={toggleBtn}>
          {xIcon}
        </button>
        <ul className='container padding w-full'>
          <li>
            <LinkActive url='products' name='All' click={toggleBtn} />
          </li>
          {items.map((i, idx) => (
            <li key={idx}>
              <LinkActive url={`products/category/${i}`} click={toggleBtn} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
};