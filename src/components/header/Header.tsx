import { auth } from "@/auth";
import LinkNav from "./nav/LinkNav";
import Logo from "./Logo";
import UserBadge from "../userBadge/UserBadge";
import LoginBtnNav from "./nav/LoginBtnNav";
import SearchInput from "../ui/search/Search";
import NoSSRCart from "../ui/noSRR/NoSRR";
import MenuOnMobile from "./nav/MenuOnMobile";

import './style.css'

const navLink = [
  { url: '/products', name: 'Products' },
  { url: '/blog', name: 'Blog' },
]

export default async function Header() {
  const session = await auth()
  const islogin = session?.user ? true : false

  return (
    <header className="header w-full">
      <div className="container__header container padding">

        <div className="header__flex">
          <Logo />
          <LinkNav link={navLink} />
        </div>

        <div className="header__flex">
          <SearchInput />
          {islogin && (<UserBadge />)}
          <NoSSRCart />
          <LoginBtnNav isLogin={islogin} />
          <MenuOnMobile links={navLink} />
        </div>

      </div>
    </header>
  )
};