import React from "react";
function Header() {
  return (
    <>
      <header className="border-2 p-5">
        <nav className="container flex justify-between items-center">
          <a href="" className="flex_18">
            <img src="/images/Logo.jpg" alt="logo" />
          </a>

          <ul className="flex flex_38 justify-between">
            <li className="hover:text-yellow-500 transition-all font-extrabold cursor-pointer home_sub_display">
              Home <i className="fa-solid fa-caret-down"></i>
            </li>
            <li className="hover:text-yellow-500 transition-all font-extrabold cursor-pointer">
              Pages <i className="fa-solid fa-caret-down"></i>
            </li>
            <li className="hover:text-yellow-500 transition-all font-extrabold cursor-pointer">
              Blog
            </li>
            <li className="hover:text-yellow-500 transition-all font-extrabold cursor-pointer">
              Shop <i className="fa-solid fa-caret-down"></i>
            </li>
            <li className="hover:text-yellow-500 transition-all font-extrabold cursor-pointer">
              Portfolio
            </li>
            <li className="hover:text-yellow-500 transition-all font-extrabold cursor-pointer">
              Contact
            </li>
          </ul>

          <ul className="flex_18 ">
            <li className="text-right">
              <small className="text-green-500">call Order in</small>
            </li>
            <li className="text-right text-2xl font-extrabold text-yellow-400">
              +1 718-904-4450
            </li>
          </ul>

          <ul className="flex flex_12">
            <li>
              <i className="fa-solid fa-house block ml-5 border-2 p-3 bg-green-400 rounded-full"></i>
            </li>
            <li>
              <i className="fa-solid fa-magnifying-glass block ml-5 border-2 p-3 bg-green-400 rounded-full"></i>
            </li>
            <li>
              <i className="fa-solid fa-user block ml-5 border-2 p-3 bg-green-400 rounded-full"></i>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
