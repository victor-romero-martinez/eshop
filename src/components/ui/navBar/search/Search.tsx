import { usePathname } from "next/navigation";
import { useState } from "react";
import { SearchIcon } from "../icons";

import './style.css';

export default function SearchInput() {
  const [url, setUrl] = useState('')
  const path = usePathname()
  let newUrl = `search/${url}`;

  if (path.includes("/search/")) {
    newUrl = url
  }

  return (
    <form action={newUrl}>
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
          title="search"
          className="search-btn"
        >
          {<SearchIcon size="16" />}
        </button>
      </div>
    </form>
  )
};