import React, { useContext, useState } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ThemeContext } from "../utils/Context";
import Toggle from "./Toggle";

const Navbar = ({
  favorites,
  home,
  backdropBlur,
  positionNavbar,
  cat1,
  cat2,
  cat3,
  children,
}) => {
  // ==============================
  // SET BLUR NAVBAR WHEN SCROLLING
  // ==============================
  const [blur, setBlur] = useState("");
  const blurNavbar = () => {
    if (window.scrollY >= 500) setBlur(backdropBlur);
  };
  window.addEventListener("scroll", blurNavbar);

  // =========
  // DARK MODE
  // =========
  const { isLight, setIslight } = useContext(ThemeContext);
  const handleClick = () => {
    setIslight((e) => !e);
  };
  return (
    <>
      <div
        className={`navbar ${blur} flex  justify-between ${positionNavbar} bg-opacity-10y top-0 z-10  `}
      >
        <div className={`bg-opacity-10y`}>
          <Link to={"/"}>
            <div className=" btn btn-ghost hover:bg-transparent   font-semibold cursor-pointer ">
              <p
                onClick={home}
                className=" font-sans  text-bold drop-shadow-xl  "
              >
                <span className="text-3xl text-blue-800">ALTA</span>{" "}
                <span className="text-xl transform text-orange-500">
                  CINEMA
                </span>
              </p>
            </div>
          </Link>
          <div
            className={`flex ml-14 cursor-pointer text-slate-700 dark:text-zinc-200 flex-1 gap-5 font-bold font-sans`}
          >
            <p href="#" className="hover:text-orange-500">
              {cat1}
            </p>
            <p href="#" className="hover:text-orange-500">
              {cat2}
            </p>
            <p href="#" className="hover:text-orange-500">
              {cat3}
            </p>
          </div>
        </div>
        <div className="flex-none gap-2 pr-5">
          <div className="btn btn-ghost  hover:bg-transparent drop-shadow-xl cursor-pointer "></div>

          <Toggle isLight={isLight} onClick={handleClick} />

          <Link to={"/Favorites"}>
            <BsBookmarkFill
              onClick={favorites}
              size={30}
              className="text-blue-800 hover:text-sky-500"
            />
          </Link>
          <div className="dropdown dropdown-end ">
            <label
              tabIndex={0}
              className="btn btn-ghost hover:bg-transparent btn-circle avatar   "
            >
              <div className="w-10 rounded-full m-auto  ">
                <Link>
                  <BiUserCircle
                    size={40}
                    className="text-blue-800 hover:text-sky-500"
                  />
                </Link>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 "
            >
              <li>
                <a className="justify-between hover:text-orange-500">Profile</a>
              </li>
              <li>
                <a className="hover:text-orange-500">Settings</a>
              </li>
              <li>
                <a className="hover:text-orange-500">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-gradient-to-r from-sky-100 via-purple-100 to-orange-100 dark:bg-alta-space">
        {children}
      </div>
    </>
  );
};

export default Navbar;
