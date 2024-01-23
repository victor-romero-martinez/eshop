"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { menuIcon, shoppingCartIcon, xIcon } from "./icons";
import { useUIStore } from "@/store/uiStore";
import SearchInput from "./search/Search";
import LoginBtn from "./login/LoginBtn";

import "./style.css";

const NoSRRcart = dynamic(() => import("./nsSRR/Cart"), {
  ssr: false,
  loading: () => <CartPlaceholder />,
});

const NoSRRcartOnMobile = dynamic(
  () => import("@/components/catViewMobile/CartViewMobile"),
  {
    ssr: false,
  }
);

/** NavBar responsive component
 * @param {Object} props
 * @param {{name: string, url: string}[]} props.links - Array of element
 * @param {{email: string, image: string} | any} props.user - User login
 */
function Navbar({ links, user }) {
  const pathname = usePathname();

  const isOpenNav = useUIStore((state) => state.navBar);
  const toggleMenu = useUIStore((state) => state.toggleNavbar);
  const toggleCartIsOpen = useUIStore((state) => state.toggleCart);

  return (
    <div className="navbar">
      <div className="right">
        <div className="desk">
          <nav>
            <ul className="navbar__inner">
              {links.map((l) => (
                <li key={l.url}>
                  <a href={l.url} data-active={pathname.includes(l.url)}>
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mobile" data-open-nav={isOpenNav}>
          <nav>
            <button
              title="close navBar"
              type="button"
              className="navBar__Btn__hidden"
              onClick={toggleMenu}
            >
              {xIcon}
            </button>
            <div className="navbar__hidden">
              <div onClick={toggleMenu}></div>
              <ul className="navbar__inner">
                {links.map((l) => (
                  <li key={l.url}>
                    <Link
                      href={l.url}
                      onClick={toggleMenu}
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
      </div>
      <div className="left">
        <div className="Btn touch">
          <SearchInput />
        </div>

        <NoSRRcart />

        <LoginBtn email={user?.email} image={user?.image} />

        <button
          title="open navBar"
          type="button"
          className="navBar__Btn Btn touch"
          onClick={toggleMenu}
        >
          {menuIcon}
        </button>
      </div>

      <NoSRRcartOnMobile click={toggleCartIsOpen} />
    </div>
  );
}

export default Navbar;

function CartPlaceholder() {
  return (
    <button type="button" className="Btn touch">
      {shoppingCartIcon}
    </button>
  );
}
