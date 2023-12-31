import Link from "next/link";
import Navbar from '@/components/ui/navBar/NavbarContainer'
import Image from "next/image";

import './style.css'

const navLink = [
  { url: '/', name: 'home' },
  { url: '/products', name: 'products' },
  { url: '/blog', name: 'blog' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="container__header container padding">
        <Link href='/' className='logo'>
          <Image src='/logo.webp' alt="phlox logo" width={128} height={49} />
        </Link>
        <Navbar links={navLink} />
      </div>
    </header>
  )
};