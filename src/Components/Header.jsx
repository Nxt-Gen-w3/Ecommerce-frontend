import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="p-5 border-b-2 header">
        <nav className="container flex justify-between items-center">
          <p className="flex_18">
            <NavLink to="/">
              <img src="/images/logo-min.png" alt="logo" />
            </NavLink>
          </p>

          <ul className="flex flex_38 justify-between header_option">
            <li className="hover:text-yellow-500 transition-all font-extrabold cursor-pointer home_sub_display">
              <NavLink to="/" activeClassName="text-red-900">
                Home
              </NavLink>
            </li>
            <li className="hover:text-yellow-500 transition-all font-extrabold cursor-pointer">
              About
            </li>
            <li className="hover:text-yellow-500 transition-all font-extrabold cursor-pointer">
              Products <i className="fa-solid fa-caret-down"></i>
            </li>
            <li className="hover:text-yellow-500 transition-all font-extrabold cursor-pointer">
              <NavLink to="/FAQ" activeClassName="text-red-900">
                FAQ
              </NavLink>
            </li>
            <li className="hover:text-yellow-500 transition-all font-extrabold cursor-pointer">
              Contact
            </li>
          </ul>

          <ul className="flex_18 header_text">
            <li className="text-right">
              <small className="text-green-500">call Order in</small>
            </li>
            <li className="text-right text-2xl font-extrabold text-yellow-400">
              +91 9883097200
            </li>
          </ul>

          <ul className="flex flex_12 header_icons">
            <li>
              <NavLink to="/cart">
                <i className="fa-solid fa-cart-shopping block ml-5 border-2 p-3 bg-green-400 rounded-full"></i>
              </NavLink>
            </li>
            {/* <li>
              <i className="fa-solid fa-magnifying-glass block ml-5 border-2 p-3 bg-green-400 rounded-full"></i>
            </li> */}
            <li>
              <NavLink to="/signin">
                <i className="fa-solid fa-user block ml-5 border-2 p-3 bg-green-400 rounded-full"></i>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
