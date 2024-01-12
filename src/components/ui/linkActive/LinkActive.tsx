'use client'
import { MouseEventHandler } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname()
  const newName = url.split('/').reverse()[0]

  const path = pathname.split('/').reverse()[0]
  const nameFormated = name ?? formatedString(newName)

  return (
    <Link
      href={`/${url}`}
      data-category-active={newName == path}
      onClick={click}
    >
      {nameFormated}
    </Link>
  )
};