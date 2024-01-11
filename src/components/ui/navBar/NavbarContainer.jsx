"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { menuIcon, searchIcon, shoppingCart, xIcon } from "./icons";

import "./style.css";

/** NavBar responsive component
 * @param {Object} props
 * @param {{name: string, url: string}[]} props.links - Array of element
 */
function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  /** hanble menu open or close on mobile device */
  const menuHandle = () => setIsOpen((prev) => !prev);

  /** close nav-bar only on mobile */
  const colseNavOnMobile = () => setIsOpen(false);

  return (
    <div className="navbar">
      <div className="right">
        <div className="desk">
          <nav>
            <ul className="navbar__inner">
              {links.map((l) => (
                <li key={l.url}>
                  <a href={l.url} data-active={pathname === l.url}>
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mobile" data-open={isOpen}>
          <nav>
            <button
              title="close navBar"
              type="button"
              className="navBar__Btn__hidden"
              onClick={colseNavOnMobile}
            >
              {xIcon}
            </button>
            <div className="navbar__hidden">
              <div onClick={colseNavOnMobile}></div>
              <ul className="navbar__inner">
                {links.map((l) => (
                  <li key={l.url}>
                    <Link
                      href={l.url}
                      onClick={colseNavOnMobile}
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
        <button type="button" title="search" className="Btn touch">
          {searchIcon}
        </button>
        <button type="button" title="shopping cart" className="Btn touch">
          {shoppingCart}
        </button>
        <button
          title="open navBar"
          type="button"
          className="navBar__Btn Btn touch"
          onClick={menuHandle}
        >
          {menuIcon}
        </button>
      </div>
    </div>
  );
}
export default Navbar;
