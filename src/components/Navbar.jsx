import React, { Component } from "react";
import { BsBookmarkFill } from "react-icons/bs";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar bg-sky-300  flex justify-between sticky top-0 z-10 shadow-md">
        <div className=" ">
          <a className="btn bg-sky-300 border-none hover:bg-inherit font-semibold  text-3xl">
            <p>
              <span className="text-alta-background">ALTA</span>{" "}
              <span className="text-amber-500">CINEMA</span>
            </p>
          </a>
        </div>
        <div className="pr-44">
          <div className="form-control ">
            <input
              type="text"
              placeholder="Search Movie"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex-none gap-2 pr-5">
          <BsBookmarkFill
            size={25}
            className="text-white hover:scale-150 hover:transition-transform drop-shadow-xl cursor-pointer"
          />
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar  ">
              <div className="w-10 rounded-full  ">
                <img src="https://lh3.googleusercontent.com/a/ALm5wu3POJnI0S47kg9d9xOaiTAoxjm47TQWUVhr-744rQ=s288-p-rw-no" />
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
