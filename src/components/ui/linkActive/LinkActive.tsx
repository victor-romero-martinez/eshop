'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { formatedString } from "@/lib/formatedString";
import { MouseEventHandler } from "react";
import './style.css'

/** Link active */
export default function LinkActive({
  url,
  click
}: {
  url: string,
  click?: MouseEventHandler
}) {
  const pathname = usePathname()

  const path = pathname.split('/').reverse()[0]
  const nameFormated = formatedString(url)

  return (
    <Link
      href={`/products/category/${url}`}
      data-active={url == path ? true : false}
      onClick={click}
    >
      {nameFormated}
    </Link>
  )
};