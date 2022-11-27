import React, { Component } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
const Navbar = ({
  favorites,
  home,
  backdropBlur,
  positionNavbar,
  cat1,
  cat2,
  cat3,
  bgColor,
}) => {
  return (
    <div
      className={`navbar ${backdropBlur}  ${bgColor}  flex  justify-between ${positionNavbar} bg-opacity-10y top-0 z-10  `}
    >
      <div className={`bg-opacity-10y`}>
        <Link to={"/"}>
          <div className=" btn btn-ghost hover:bg-transparent   font-semibold cursor-pointer ">
            <p
              onClick={home}
              className=" font-sans  text-bold drop-shadow-xl  "
            >
              <span className="text-3xl text-blue-800">ALTA</span>{" "}
              <span className="text-xl transform text-orange-500">CINEMA</span>
            </p>
          </div>
        </Link>
        <div
          className={`flex ml-14 cursor-pointer  flex-1 gap-5 font-bold  font-sans`}
        >
          <a href="#">{cat1}</a>
          <a href="#">{cat2}</a>
          <a href="#">{cat3}</a>
        </div>
      </div>
      <div className="flex-none gap-2 pr-5">
        <div className="btn btn-ghost  hover:bg-transparent drop-shadow-xl cursor-pointer "></div>
        <Link to={"/Favorites"}>
          <BsBookmarkFill onClick={favorites} size={30} />
        </Link>
        <div className="dropdown dropdown-end ">
          <label
            tabIndex={0}
            className="btn btn-ghost hover:bg-transparent btn-circle avatar   "
          >
            <div className="w-10 rounded-full m-auto hover:text-alta-hover ">
              <BiUserCircle size={40} />
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
  );
};

export default Navbar;
