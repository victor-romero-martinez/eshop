import Link from "next/link";
import { auth } from "@/auth";
import Image from "next/image";
import Navbar from '@/components/ui/navBar/NavbarContainer'

import './style.css'

const navLink = [
  { url: '/products', name: 'products' },
  { url: '/blog', name: 'blog' },
]

export default async function Header() {
  const userAuth = await auth()

  return (
    <header className="header">
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
        <Navbar links={navLink} user={userAuth?.user} />
      </div>
    </header>
  )
};