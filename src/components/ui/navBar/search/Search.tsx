import { SearchIcon } from "../icons";
import { useState } from "react";

import './style.css'

export default function SearchInput() {
  const [url, setUrl] = useState('')


  return (
    <form action={
      url === "" ? '#' : `/products/search/${url}`
    }>
      <div className="search">
        <input
          type="search"
          placeholder="Alt + s"
          maxLength={8}
          accessKey="s"
          className="search-input"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          type="submit"
          role="button"
          title="search"
          className="search-btn"
        >
          {<SearchIcon size="16" />}
        </button>
      </div>
    </form>
  )
};