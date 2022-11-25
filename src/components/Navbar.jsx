import React, { Component } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    const { favorites, home } = this.props;
    return (
      <div className="navbar backdrop-blur-sm  bg-gradient-to-r from-sky-100 via-purple-100/60 to-orange-100/90 flex bg-opacity-5 justify-between sticky top-0 z-10 ">
        <div className="">
          <Link to={"/"}>
            <div className=" btn btn-ghost hover:bg-transparent  shadow-white  font-semibold cursor-pointer ">
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
          <div className="flex ml-14 cursor-pointer  flex-1 gap-5 font-normal font-sans">
            <a href="#">Thriller</a>
            <a href="#">Super Heroes</a>
            <a href="#">Discovery</a>
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
              <div className="w-10 rounded-full m-auto ">
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
  }
}

export default Navbar;
