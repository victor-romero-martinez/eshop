'use client'

import { CloseIcon, MenuIcon } from "@/components/icons/icons"
import { useUIStore } from "@/store/uiStore"
import { Tlinks } from "@/types/type"
import Link from "next/link"
import { usePathname } from "next/navigation"

import './MenuOnMobile.styles.css'

export default function MenuOnMobile({ links }: {
  links: Tlinks
}) {
  const { toggleNavbar, navBar } = useUIStore()
  const pathname = usePathname()

  return (
    <>
      <button
        type="button"
        className="menu__mobile"
        onClick={toggleNavbar}
      >
        <MenuIcon />
      </button>

      <div className="mobile" data-open-nav={navBar}>
        <nav>
          <button
            title="close navBar"
            type="button"
            className="navBar__Btn__hidden"
            onClick={toggleNavbar}
          >
            <CloseIcon />
          </button>
          <div className="navbar__hidden">
            <ul className="navbar__inner">
              {links.map((l) => (
                <li key={l.url}>
                  <Link
                    href={l.url}
                    onClick={toggleNavbar}
                    data-active={pathname === l.url}
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
};