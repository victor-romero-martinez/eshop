/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from 'react'
import './style.css'

/** Image viewer component */
export default function ImageViewer({ url, alt }: { url: string[], alt: string }) {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <picture className='img__viewer'>
      <img src={url[currentImg]} alt={`product image of ${alt}`} className='img__viewer-selected' />
      <div className='img__viewer-list'>
        {url.map((u, i) => (
          <img key={i} src={u} alt={`product image of ${alt}`}
            onClick={() => setCurrentImg(i)} />
        ))}
      </div>
    </picture>
  )
};