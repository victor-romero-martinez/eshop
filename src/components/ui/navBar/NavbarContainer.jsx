"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { menuIcon, searchIcon, shoppingCart, xIcon } from "./icons";
import CartView from "@/components/cartView/CartView";
import CartViewMobile from "@/components/catViewMobile/CartViewMobile";
import { useUIStore } from "@/store/uiStore";
import { useUIShopStore } from "@/store/shopStore";

import "./style.css";

/** NavBar responsive component
 * @param {Object} props
 * @param {{name: string, url: string}[]} props.links - Array of element
 */
function Navbar({ links }) {
  const pathname = usePathname();
  const cartState = useUIShopStore((state) => state.shopingCart);

  const isOpenNav = useUIStore((state) => state.navBar);
  const isOpenCart = useUIStore((state) => state.cart);
  const toggleMenu = useUIStore((state) => state.toogleNavbar);
  const toggleCart = useUIStore((state) => state.toogleCart);

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
        <div className="mobile" data-open={isOpenNav}>
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
        <div>
          <button type="button" title="search" className="Btn touch">
            {searchIcon}
          </button>
        </div>

        <div className="cart__conatiner">
          <button
            type="button"
            title="shopping cart"
            className="Btn touch"
            onClick={toggleCart}
          >
            {shoppingCart}
          </button>

          <div className="cart__container-inner" data-open-cart={isOpenCart}>
            <CartView items={cartState} />
          </div>
        </div>
        <button
          title="open navBar"
          type="button"
          className="navBar__Btn Btn touch"
          onClick={toggleMenu}
        >
          {menuIcon}
        </button>
      </div>

      <CartViewMobile
        items={cartState}
        click={toggleCart}
        status={isOpenCart}
      />
    </div>
  );
}
export default Navbar;
