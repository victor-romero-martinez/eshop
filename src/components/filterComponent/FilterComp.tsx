'use client'
import { FilterIcon } from '../icons/icons'

export default function FilterComponent() {
  return (
    <button type='button' onClick={() => alert('clicked')}>
      <FilterIcon />
    </button>
  )
};