'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import './style.css'

export default function PaginationFc({ page }: {
  page: number
}) {
  const searchParams = useSearchParams()
  const nextPage = page * 16;
  const skip = searchParams.get('skip') ?? 0

  return (
    <div
      className="pagination-container"
      data-active-pagination={skip == nextPage}
    >
      <Link
        href={`?limit=16&skip=${nextPage}`}
      >
        {page + 1}
      </Link>
    </div>
  )
};