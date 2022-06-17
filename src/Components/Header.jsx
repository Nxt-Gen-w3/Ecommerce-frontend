import React from "react";
import { NavLink } from "react-router-dom";
function Header(props) {
  var { userData } = props;
  return (
    <>
      <header className="p-5 border-b-2 header">
        <nav className="container flex justify-between items-center">
          <p className=" bg-yellow-300 p-2 items-center justify-center ">
            <NavLink to="/">
              {/* <img src="/images/logo-min.png" alt="logo" /> */}
              <h1 className="font-bold  font-mono text-xl  rounded-md text-orange-700">Achaari Couple</h1>
              <span className=" text-xs italic font-bold">Maa Ke Haath Ka Swaad</span>
            </NavLink>
          </p>

          <ul className="flex flex_38 justify-between header_option">
            <li className="hover:text-yellow-500 transition-all font-extrabold cursor-pointer home_sub_display">
              <NavLink to="/" activeClassName="text-red-900">
                Home
              </NavLink>
            </li>
            <li className="hover:text-yellow-500 transition-all font-extrabold cursor-pointer">
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
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

          <ul className="flex flex_12 header_icons items-start">
            <li>
              <NavLink to="/cart">
                <i className="fa-solid fa-cart-shopping block ml-5 border-2 p-3 bg-green-400 rounded-full"></i>
              </NavLink>
            </li>
            {/* <li>
              <i className="fa-solid fa-magnifying-glass block ml-5 border-2 p-3 bg-green-400 rounded-full"></i>
            </li> */}
            <li className="">
              {userData ? (
                <article className="flex flex-col items-center px-4">
                  <img
                    className="rounded-full w-10 h-10"
                    src={
                      userData && userData.image
                        ? userData.image
                        : "https://image.shutterstock.com/image-vector/male-profile-picture-placeholder-260nw-176551589.jpg"
                    }
                    alt=""
                  />
                  <p className="mt-1 ml-1">{userData.username}</p>
                </article>
              ) : (
                <NavLink to="/signin">
                  <i className="fa-solid fa-user block ml-5 border-2 p-3 bg-green-400 rounded-full"></i>
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
