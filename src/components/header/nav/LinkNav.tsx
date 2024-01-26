'use client'
import { Tlinks } from "@/types/type";
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function LinkNav({ link }: { link: Tlinks }) {
  const pathname = usePathname();


  return (
    <ul className="link__nav">
      {link.map((l, i) => (
        <li key={i}>
          <Link
            href={l.url}
            data-active={pathname.includes(l.url)}
          >
            {l.name}
          </Link>
        </li>
      ))}
    </ul>
  )
};