import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to={"/"}
        className="mx-2 px-5 py-3 font-semibold hover:bg-green-500 rounded-md duration-500 text-base hover:text-white"
      >
        Home
      </NavLink>
      <NavLink
        to={"/booklist"}
        className="mx-2 px-5 py-3 font-semibold hover:bg-green-500 rounded-md duration-500 text-base hover:text-white"
      >
        Listed Books
      </NavLink>
      <NavLink
        to={"/bookread"}
        className="mx-2 px-5 py-3 font-semibold hover:bg-green-500 rounded-md duration-500 text-base hover:text-white"
      >
        Pages to Read
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-gray-200"
            >
              {links}
            </ul>
          </div>
          <Link to={`/`}>
            <a className="btn btn-ghost text-xl border-none">Book Vibe</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-8">
          <a className="btn bg-green-500 border-none rounded-md text-white">
            Sign In
          </a>
          <a className="btn bg-green-400 border-none rounded-md text-white">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
