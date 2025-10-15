import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex gap-1 justify-center items-center mx-2 px-3 py-2 rounded-lg transition-colors font-semibold ${
            isActive
              ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  border-2 border-[#632EE3]"
              : "hover:bg-base-200"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/apps"
        className={({ isActive }) =>
          `flex gap-1 justify-center items-center mx-2 px-3 py-2 rounded-lg transition-colors font-semibold ${
            isActive
              ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  border-2 border-[#632EE3]"
              : "hover:bg-base-200"
          }`
        }
      >
        Apps
      </NavLink>
      <NavLink
        to="/installedApps"
        className={({ isActive }) =>
          `flex gap-1 justify-center items-center mx-2 px-3 py-2 rounded-lg transition-colors font-semibold ${
            isActive
              ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  border-2 border-[#632EE3]"
              : "hover:bg-base-200"
          }`
        }
      >
        Installed Apps
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="text-xl ml-2 flex items-center gap-2">
            <img
              src={logoImg}
              alt="Logo of this app"
              className="w-8 h-8 object-contain"
            />
            <p>Hero.io</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/rht789"
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <FaGithub></FaGithub>Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
