import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SearchIcon } from "../icons";
import { useState } from "react";

import './style.css'

export default function SearchInput() {
  const [url, setUrl] = useState('')
  const searchParams = useSearchParams();

  function handleSearch(terms: string) {
    const search = new URLSearchParams(searchParams)

    if (terms) {
      search.set('search', terms)
      setUrl(`/result?${search.toString()}`)
    } else {
      search.delete('search')
      setUrl('')
    }
  }

  return (
    <div className="search">
      <input
        type="search"
        name="search"
        placeholder="Search"
        className="search-input"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Link
        href={url}
        role="button"
        title="search"
        className="search-btn"
      >
        {<SearchIcon size="16" />}
      </Link>
    </div>
  )
};