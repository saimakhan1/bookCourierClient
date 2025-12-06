import React from "react";
import { Link, NavLink } from "react-router";
import bookLogo from "../../../public/bookCourier.jpg";
import ToggleButton from "../ToggleButton/ToggleButton";
import useTheme from "../../hooks/useTheme";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // <-- useTheme hook

  const { user, logOut } = useAuth();

  // const handleLogOut = () => {
  //   logOut.then().catch((error) => {
  //     console.log(error);
  //   });
  // };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
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
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
    </>
  );

  return (
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <img src={bookLogo} className="h-[30px] w-[30px]" />
        <a className="btn btn-ghost text-xl">BookCourier</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-3">
        {/* ✅ Pass theme and toggleTheme */}
        <ToggleButton theme={theme} toggleTheme={toggleTheme} />

        {user ? (
          <a onClick={handleLogOut} className="btn">
            Log Out
          </a>
        ) : (
          <>
            <Link to={"/login"} className="btn">
              {" "}
              Log In
            </Link>
            <Link to={"/register"} className="btn">
              {" "}
              Register
            </Link>
          </>
        )}
        <Link to={"/librarian"} className="btn">
          {" "}
          Be a Librarian
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
