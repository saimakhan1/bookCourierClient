import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import bookLogo from "../../../public/bookCourier.jpg";
import ToggleButton from "../ToggleButton/ToggleButton";
import useTheme from "../../hooks/useTheme";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Logged out successfully"))
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/books"}>Books</NavLink>
      </li>
       <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/privacy"}>Privacy</NavLink>
      </li>
      <li>
        <NavLink to={"/support"}>Help & Support</NavLink>
      </li>

      {user && (
        <>
          {/* <li>
            <NavLink to={"/dashboard/my-orders"}>My Orders</NavLink>
          </li> */}
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          {/* <li>
            <NavLink to={"my-profile"}>My Profile</NavLink>
          </li> */}
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4">
      {/* LEFT: Logo + Title + Mobile Hamburger */}
      <div className="navbar-start flex items-center">
        <img src={bookLogo} className="h-[30px] w-[30px]" />
        <Link to="/" className="btn btn-ghost text-xl ml-2 normal-case">
          BookCourier
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden ml-2">
          <button
            className="btn btn-ghost"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* CENTER: Desktop Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* RIGHT: Toggle + Profile / Auth Buttons */}
      <div className="navbar-end hidden md:flex items-center gap-3">
        <ToggleButton theme={theme} toggleTheme={toggleTheme} />

        {user ? (
          <>
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-10 h-10 rounded-full object-cover border border-gray-300"
              />
            )}
            <a onClick={handleLogOut} className="btn">
              Log Out
            </a>
          </>
        ) : (
          <>
            <Link to={"/login"} className="btn">
              Log In
            </Link>
            <Link to={"/register"} className="btn">
              Register
            </Link>
          </>
        )}
        <Link to={"/librarian"} className="btn">
          Be a Librarian
        </Link>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-lg p-4 lg:hidden z-50 flex flex-col gap-3">
          <ul className="menu menu-vertical gap-1">{links}</ul>

          {user ? (
            <div className="flex flex-col items-start gap-2 mt-2 border-t border-gray-200 pt-2">
              <div className="flex items-center gap-2">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border border-gray-300"
                  />
                )}
                <div className="flex flex-col">
                  <span className="font-semibold">{user.displayName}</span>
                  <span className="text-gray-500 text-sm truncate">
                    {user.email}
                  </span>
                </div>
              </div>
              <button
                onClick={handleLogOut}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 mt-2 border-t border-gray-200 pt-2">
              <Link to={"/login"} className="btn w-full">
                Log In
              </Link>
              <Link to={"/register"} className="btn w-full">
                Register
              </Link>
            </div>
          )}

          {/* Dark/Light Toggle */}
          <div className="mt-2">
            <ToggleButton theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
