
import { NavLink, useLocation } from "react-router-dom";
import './Header.css'
import {useEffect, useState } from "react";
const Header = () => {

  const location = useLocation();
 
  const [activeRoute,setActiveRoute]=useState(location.pathname);

  useEffect(()=>{
    setActiveRoute(location.pathname)
  },[location])

    const links =<>
        <NavLink className={`${activeRoute === "/" ? "btn activeRoute":"btn"}`} to={"/"}>Home</NavLink>
        <NavLink className={`${activeRoute === "/list" ? "btn activeRoute":"btn"}`} to={"/list"}>Listed Books</NavLink>
        <NavLink className={`${activeRoute === "/read" ? "btn activeRoute":"btn"}`} to={"/read"}>Pages To Read</NavLink>
        <NavLink className={`${activeRoute === "/fav" ? "btn activeRoute" : "btn"}`} to={"/fav"}>Favourites</NavLink>
        <NavLink className={`${activeRoute === "/blogs" ? "btn activeRoute" : "btn"}`} to={"/blogs"}>Blogs</NavLink>
    </>

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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-54 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h1 className="btn btn-ghost text-xl invisible md:visible">Book Vibe</h1>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal flex gap-3 px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="bg-green-500 px-4 py-2 text-white font-bold rounded mr-2">Sign Up</a>
          <a className="bg-blue-300 px-4 py-2 text-white font-bold rounded">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
