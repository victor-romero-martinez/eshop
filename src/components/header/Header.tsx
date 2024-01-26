import Link from "next/link";
import { auth, signOut } from "@/auth";
import { LoginIcon, LogutIcon } from "../icons/icons";
import Image from "next/image";
import Navbar from '@/components/ui/navBar/NavbarContainer'
import UserBadge from "../userBadge/UserBadge";

import './style.css'

const navLink = [
  { url: '/products', name: 'products' },
  { url: '/blog', name: 'blog' },
]

export default async function Header() {
  const session = await auth()

  return (
    <header className="header w-full">
      <div className="container__header container padding">
        <Link href='/'>
          <Image
            src='/logo.webp'
            alt="phlox logo"
            width={128}
            height={49}
            priority
            className="logo-img"
          />
        </Link>

        <Navbar links={navLink} />

        <div className="login__options h-full">
          {session?.user ? (
            <UserBadge />
          ) : (
            <Link href={"/login"} className="logout touch" title="LogIn">
              <LoginIcon width='28' height='28' />
            </Link>
          )}
        </div>
      </div>
    </header>
  )
};