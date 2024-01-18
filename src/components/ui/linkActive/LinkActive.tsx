'use client'
import { MouseEventHandler } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { formatedString } from "@/lib/formatedString";

import './style.css'

/** Link active */
export default function LinkActive({
  url,
  name,
  click
}: {
  url: string,
  name?: string,
  click?: MouseEventHandler
}) {
  const pathname = useSearchParams()

  const nameurl = url.split('=')[1]
  const query = pathname.get('category')

  const nameFormated = name ?? formatedString(nameurl)

  return (
    <Link
      href={`/${url}`}
      data-category-active={query == nameurl}
      onClick={click}
    >
      {nameFormated}
    </Link>
  )
};