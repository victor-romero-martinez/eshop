'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import './style.css'

/** Link active */
export default function LinkActive({ url }: { url: string }) {
  const pathname = usePathname()

  const path = pathname.split('/').reverse()[0]

  return (
    <Link href={`/products/category/${url}`} data-active={url == path ? true : false}>
      {url}
    </Link>
  )
};