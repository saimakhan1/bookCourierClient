// import React, { useState } from "react";
// import { Link, NavLink } from "react-router";
// import bookLogo from "../../../public/bookCourier.jpg";
// import ToggleButton from "../ToggleButton/ToggleButton";
// import useTheme from "../../hooks/useTheme";
// import useAuth from "../../hooks/useAuth";

// const Navbar = () => {
//   const { theme, toggleTheme } = useTheme();
//   const { user, logOut } = useAuth();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => console.log("Logged out successfully"))
//       .catch((error) => console.log(error));
//   };

//   const links = (
//     <>
//       <li>
//         <NavLink to={"/"}>Home</NavLink>
//       </li>
//       <li>
//         <NavLink to={"/books"}>Books</NavLink>
//       </li>
//       <li>
//         <NavLink to={"/about"}>About</NavLink>
//       </li>
//       <li>
//         <NavLink to={"/contact"}>Contact</NavLink>
//       </li>
//       <li>
//         <NavLink to={"/blog"}>Blog</NavLink>
//       </li>
//       <li>
//         <NavLink to={"/privacy"}>Privacy</NavLink>
//       </li>
//       <li>
//         <NavLink to={"/support"}>Help & Support</NavLink>
//       </li>
//       <li>
//         <Link to="/ai-assistant">AI Assistant</Link>
//       </li>
//       <li>
//         <Link to="/explore-books">Explore Books</Link>
//       </li>
//       <li>
//         <Link to="/mood-explorer">Explore by Mood</Link>
//       </li>
//       {/* <li>
//         <Link to="/delivery-map">Coverage Map</Link>
//       </li> */}

//       {user && (
//         <>
//           {/* <li>
//             <NavLink to={"/dashboard/my-orders"}>My Orders</NavLink>
//           </li> */}
//           <li>
//             <NavLink to={"/dashboard"}>Dashboard</NavLink>
//           </li>
//           <li>
//             <NavLink to={"/dashboard/my-profile"}>My Profile</NavLink>
//           </li>
//         </>
//       )}
//     </>
//   );

//   return (
//     <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4">
//       {/* LEFT: Logo + Title + Mobile Hamburger */}
//       <div className="navbar-start flex items-center">
//         <img src={bookLogo} className="h-[30px] w-[30px]" />
//         <Link to="/" className="btn btn-ghost text-xl ml-2 normal-case">
//           BookCourier
//         </Link>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden ml-2">
//           <button
//             className="btn btn-ghost"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* CENTER: Desktop Links */}
//       {/* <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div> */}
//       {/*fix menu items in EndGame 5th week sprint*/}
//       <div className="navbar-center hidden lg:flex justify-start mr-16">
//         <ul className="menu menu-horizontal px-0">{links}</ul>
//       </div>

//       {/* RIGHT: Toggle + Profile / Auth Buttons */}
//       <div className="navbar-end hidden md:flex items-center gap-3">
//         <ToggleButton theme={theme} toggleTheme={toggleTheme} />

//         {user ? (
//           <>
//             {user.photoURL && (
//               <img
//                 src={user.photoURL}
//                 alt="User Profile"
//                 className="w-10 h-10 rounded-full object-cover border border-gray-300"
//               />
//             )}
//             <a onClick={handleLogOut} className="btn">
//               Log Out
//             </a>
//           </>
//         ) : (
//           <>
//             <Link to={"/login"} className="btn">
//               Log In
//             </Link>
//             <Link to={"/register"} className="btn">
//               Register
//             </Link>
//           </>
//         )}
//         <Link to={"/librarian"} className="btn">
//           Be a Librarian
//         </Link>
//       </div>

//       {/* MOBILE DROPDOWN */}
//       {mobileMenuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-base-100 shadow-lg p-4 lg:hidden z-50 flex flex-col gap-3">
//           <ul className="menu menu-vertical gap-1">{links}</ul>

//           {user ? (
//             <div className="flex flex-col items-start gap-2 mt-2 border-t border-gray-200 pt-2">
//               <div className="flex items-center gap-2">
//                 {user.photoURL && (
//                   <img
//                     src={user.photoURL}
//                     alt="Profile"
//                     className="w-10 h-10 rounded-full object-cover border border-gray-300"
//                   />
//                 )}
//                 <div className="flex flex-col">
//                   <span className="font-semibold">{user.displayName}</span>
//                   <span className="text-gray-500 text-sm truncate">
//                     {user.email}
//                   </span>
//                 </div>
//               </div>
//               <button
//                 onClick={handleLogOut}
//                 className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//               >
//                 Log Out
//               </button>
//             </div>
//           ) : (
//             <div className="flex flex-col gap-2 mt-2 border-t border-gray-200 pt-2">
//               <Link to={"/login"} className="btn w-full">
//                 Log In
//               </Link>
//               <Link to={"/register"} className="btn w-full">
//                 Register
//               </Link>
//             </div>
//           )}

//           {/* Dark/Light Toggle */}
//           <div className="mt-2">
//             <ToggleButton theme={theme} toggleTheme={toggleTheme} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

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

  // ==========================================================
  // ACTIVE / INACTIVE NAVLINK STYLE
  // ==========================================================

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
      isActive
        ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 font-semibold"
        : "text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary dark:hover:bg-gray-700 dark:hover:text-blue-300"
    }`;

  // ==========================================================
  // MENU LINKS
  // ==========================================================

  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/books" className={navLinkClass}>
          Books
        </NavLink>
      </li>

      <li>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
      </li>

      <li>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
      </li>

      <li>
        <NavLink to="/blog" className={navLinkClass}>
          Blog
        </NavLink>
      </li>

      <li>
        <NavLink to="/privacy" className={navLinkClass}>
          Privacy
        </NavLink>
      </li>

      <li>
        <NavLink to="/support" className={navLinkClass}>
          Help & Support
        </NavLink>
      </li>

      <li>
        <NavLink to="/ai-assistant" className={navLinkClass}>
          AI Assistant
        </NavLink>
      </li>

      <li>
        <NavLink to="/explore-books" className={navLinkClass}>
          Explore Books
        </NavLink>
      </li>

      <li>
        <NavLink to="/mood-explorer" className={navLinkClass}>
          Explore by Mood
        </NavLink>
      </li>

      {/* Coverage Map */}
      {/*
      <li>
        <NavLink to="/delivery-map" className={navLinkClass}>
          Coverage Map
        </NavLink>
      </li>
      */}

      {user && (
        <>
          {/* My Orders */}
          {/*
          <li>
            <NavLink to="/dashboard/my-orders" className={navLinkClass}>
              My Orders
            </NavLink>
          </li>
          */}

          <li>
            <NavLink to="/dashboard" className={navLinkClass}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/my-profile" className={navLinkClass}>
              My Profile
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 border-b border-gray-100 dark:border-gray-800">
      {/* ====================================================== */}
      {/* LEFT: LOGO + TITLE + MOBILE HAMBURGER */}
      {/* ====================================================== */}

      <div className="navbar-start flex items-center">
        {/* Logo */}

        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={bookLogo}
            alt="BookCourier Logo"
            className="h-[34px] w-[34px] rounded-lg object-cover transition-transform duration-200 group-hover:scale-105"
          />

          <span className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors duration-200">
            BookCourier
          </span>
        </Link>

        {/* Mobile Menu Button */}

        <div className="lg:hidden ml-2">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="btn btn-ghost btn-sm hover:bg-primary/10 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              // Close icon
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Menu icon
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
            )}
          </button>
        </div>
      </div>

      {/* ====================================================== */}
      {/* CENTER: DESKTOP LINKS */}
      {/* ====================================================== */}

      <div className="navbar-center hidden lg:flex justify-start mr-16">
        <ul className="menu menu-horizontal items-center gap-1 px-0">
          {links}
        </ul>
      </div>

      {/* ====================================================== */}
      {/* RIGHT: THEME + USER + AUTH */}
      {/* ====================================================== */}

      <div className="navbar-end hidden md:flex items-center gap-2">
        {/* Theme Toggle */}

        <div className="mr-1">
          <ToggleButton theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Logged In User */}

        {user ? (
          <>
            {/* Profile Image */}

            {user.photoURL && (
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName || user.email}
              >
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-9 h-9 rounded-full object-cover border-2 border-primary/20 hover:border-primary transition"
                />
              </div>
            )}

            {/* Logout */}

            <button
              type="button"
              onClick={handleLogOut}
              className="btn btn-sm border-gray-200 dark:border-gray-700 hover:bg-red-50 hover:text-red-500 hover:border-red-200 dark:hover:bg-gray-700"
            >
              Log Out
            </button>
          </>
        ) : (
          /* Logged Out */

          <>
            <Link
              to="/login"
              className="btn btn-sm btn-ghost hover:bg-primary/10 hover:text-primary"
            >
              Log In
            </Link>

            <Link to="/register" className="btn btn-sm btn-primary">
              Register
            </Link>
          </>
        )}

        {/* Librarian */}

        <Link
          to="/librarian"
          className="btn btn-sm btn-outline btn-primary ml-1"
        >
          Be a Librarian
        </Link>
      </div>

      {/* ====================================================== */}
      {/* MOBILE DROPDOWN */}
      {/* ====================================================== */}

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-base-100 shadow-xl border-t border-gray-100 dark:border-gray-700 p-4 lg:hidden z-50">
          {/* Mobile Navigation */}

          <ul className="menu menu-vertical gap-1 w-full">{links}</ul>

          {/* Mobile User Section */}

          {user ? (
            <div className="flex flex-col gap-3 mt-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              {/* User Information */}

              <div className="flex items-center gap-3 px-2">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-11 h-11 rounded-full object-cover border-2 border-primary/20"
                  />
                )}

                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-gray-800 dark:text-gray-100 truncate">
                    {user.displayName || "BookCourier User"}
                  </span>

                  <span className="text-gray-500 dark:text-gray-400 text-sm truncate">
                    {user.email}
                  </span>
                </div>
              </div>

              {/* Dashboard */}

              <Link
                to="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-outline btn-primary w-full"
              >
                Dashboard
              </Link>

              {/* Logout */}

              <button
                type="button"
                onClick={handleLogOut}
                className="btn bg-red-500 hover:bg-red-600 text-white border-none w-full"
              >
                Log Out
              </button>
            </div>
          ) : (
            /* Mobile Logged Out */

            <div className="flex flex-col gap-2 mt-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-outline w-full"
              >
                Log In
              </Link>

              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary w-full"
              >
                Register
              </Link>
            </div>
          )}

          {/* ================================================== */}
          {/* MOBILE THEME TOGGLE */}
          {/* ================================================== */}

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Appearance
            </span>

            <ToggleButton theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Librarian */}

          <Link
            to="/librarian"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-outline btn-primary w-full mt-4"
          >
            📚 Be a Librarian
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
