import { SearchIcon } from "../icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

import './style.css';

export default function SearchInput() {
  const route = useRouter()
  const [url, setUrl] = useState('')

  document.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      submit();
    }
  });

  function submit() {
    route.push(`search?q=${url}`)
    reset()
  }

  function reset() {
    return setUrl('')
  }

  return (
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
        onClick={submit}
      >
        {<SearchIcon size="16" />}
      </button>
    </div>
  )
};