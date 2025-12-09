// import React, { useState } from "react";
// import { Link, Outlet } from "react-router";
// import { FiMenu, FiHome, FiShoppingCart, FiLogOut } from "react-icons/fi";
// import { RiGalleryView2 } from "react-icons/ri";
// import { SiManageiq } from "react-icons/si";
// import { MdAddBox } from "react-icons/md";
// import { ImBooks } from "react-icons/im";
// import { FaBookReader } from "react-icons/fa";
// import {
//   FaBookOpen,
//   FaFileInvoiceDollar,
//   FaRegUserCircle,
//   FaUser,
// } from "react-icons/fa";
// import useRole from "../../hooks/UseRole";
// import Logo from "../../Components/Logo/Logo";
// import ToggleButton from "../../Components/ToggleButton/ToggleButton";
// import useTheme from "../../hooks/useTheme";

// const DashboardLayout = () => {
//   const { theme, toggleTheme } = useTheme();
//   const { role } = useRole();
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside
//         className={`bg-white shadow-lg transition-all duration-300 ${
//           sidebarOpen ? "w-64" : "w-16"
//         }`}
//       >
//         {/* Sidebar header */}
//         <div className="flex items-center justify-between p-4 border-b">
//           {sidebarOpen && <h2 className="text-xl font-bold">Dashboard</h2>}
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="text-gray-700 hover:text-gray-900"
//           >
//             <FiMenu size={24} />
//           </button>
//         </div>

//         {/* Sidebar navigation */}
//         <nav className="mt-4">
//           <ul>
//             <li>
//               <Link
//                 to={"/"}
//                 className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 rounded"
//               >
//                 <Logo></Logo>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/dashboard"
//                 className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 rounded"
//               >
//                 <FiHome />
//                 {sidebarOpen && <span>Dashboard Home</span>}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/dashboard/my-orders"
//                 className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 rounded"
//               >
//                 <FiShoppingCart />
//                 {sidebarOpen && <span>My Orders</span>}
//               </Link>
//               <Link
//                 to="/books"
//                 className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 rounded"
//               >
//                 <RiGalleryView2 />
//                 {sidebarOpen && <span>View All Books</span>}
//               </Link>
//               <Link
//                 to="/myProfile"
//                 className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 rounded"
//               >
//                 <FaRegUserCircle />
//                 {sidebarOpen && <span>My Profile</span>}
//               </Link>
//               <Link
//                 to={"payment-history"}
//                 className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 rounded"
//               >
//                 <FaFileInvoiceDollar />
//                 {sidebarOpen && <span>Invoices</span>}
//               </Link>

//               {role === "admin" && (
//                 <>
//                   <Link
//                     to={"/dashboard/approve-librarians"}
//                     className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 rounded"
//                   >
//                     <FaBookOpen></FaBookOpen>
//                     {sidebarOpen && <span>Approve Librarians</span>}
//                   </Link>

//                   <Link
//                     to={`/dashboard/users-management`}
//                     className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 rounded"
//                   >
//                     <FaUser></FaUser>
//                     {sidebarOpen && <span>Users Management</span>}
//                   </Link>

//                   <Link
//                     to={`/dashboard/manage-books`}
//                     className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 rounded"
//                   >
//                     <SiManageiq />

//                     {sidebarOpen && <span>Manage Books</span>}
//                   </Link>
//                 </>
//               )}

//               {/* Librarian dashboard set up */}

//               {role === "librarian" && (
//                 <>
//                   <Link
//                     to={"/dashboard/add-book"}
//                     className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 rounded"
//                   >
//                     <MdAddBox></MdAddBox>
//                     {sidebarOpen && <span>Add Book</span>}
//                   </Link>

//                   <Link
//                     to={`/dashboard/my-books`}
//                     className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 rounded"
//                   >
//                     <ImBooks />
//                     {sidebarOpen && <span>My Books</span>}
//                   </Link>

//                   <Link
//                     to={`/dashboard/librarian-orders`}
//                     className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 rounded"
//                   >
//                     <FaBookReader />

//                     {sidebarOpen && <span>Orders For My Books</span>}
//                   </Link>
//                   <Link
//                     to={`/dashboard/librarian-orders`}
//                     className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 rounded"
//                   >
//                     {sidebarOpen && (
//                       <span>
//                         <ToggleButton
//                           theme={theme}
//                           toggleTheme={toggleTheme}
//                         ></ToggleButton>
//                       </span>
//                     )}
//                   </Link>
//                 </>
//               )}
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main content */}
//       <main className="flex-1 p-5">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;

import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import { FiMenu, FiHome, FiShoppingCart } from "react-icons/fi";
import { RiGalleryView2 } from "react-icons/ri";
import { SiManageiq } from "react-icons/si";
import { MdAddBox } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { FaBookReader } from "react-icons/fa";
import {
  FaBookOpen,
  FaFileInvoiceDollar,
  FaRegUserCircle,
  FaUser,
} from "react-icons/fa";
import useRole from "../../hooks/UseRole";
import Logo from "../../Components/Logo/Logo";
import ToggleButton from "../../Components/ToggleButton/ToggleButton";
import useTheme from "../../hooks/useTheme";

const DashboardLayout = () => {
  const { theme, toggleTheme } = useTheme();
  const { role } = useRole();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className={`flex min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <aside
        className={`transition-all duration-300 shadow-lg ${
          sidebarOpen
            ? theme === "dark"
              ? "w-64 bg-gray-800"
              : "w-64 bg-white"
            : theme === "dark"
            ? "w-16 bg-gray-800"
            : "w-16 bg-white"
        }`}
      >
        {/* Sidebar header */}
        <div
          className={`flex items-center justify-between p-4 border-b ${
            theme === "dark" ? "border-gray-700" : "border-gray-200"
          }`}
        >
          {sidebarOpen && <h2 className="text-xl font-bold">Dashboard</h2>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`${
              theme === "dark"
                ? "text-white hover:text-gray-300"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* Sidebar navigation */}
        <nav className="mt-4">
          <ul>
            <li>
              <Link
                to={"/"}
                className={`flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-200 ${
                  theme === "dark" ? "hover:bg-gray-700" : ""
                }`}
              >
                <Logo />
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className={`flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-200 ${
                  theme === "dark" ? "hover:bg-gray-700" : ""
                }`}
              >
                <FiHome />
                {sidebarOpen && <span>Dashboard Home</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/my-orders"
                className={`flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-200 ${
                  theme === "dark" ? "hover:bg-gray-700" : ""
                }`}
              >
                <FiShoppingCart />
                {sidebarOpen && <span>My Orders</span>}
              </Link>
              <Link
                to="/books"
                className={`flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-200 ${
                  theme === "dark" ? "hover:bg-gray-700" : ""
                }`}
              >
                <RiGalleryView2 />
                {sidebarOpen && <span>View All Books</span>}
              </Link>
              <Link
                to="my-profile"
                className={`flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-200 ${
                  theme === "dark" ? "hover:bg-gray-700" : ""
                }`}
              >
                <FaRegUserCircle />
                {sidebarOpen && <span>My Profile</span>}
              </Link>
              <Link
                to={"payment-history"}
                className={`flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-200 ${
                  theme === "dark" ? "hover:bg-gray-700" : ""
                }`}
              >
                <FaFileInvoiceDollar />
                {sidebarOpen && <span>Invoices</span>}
              </Link>

              {role === "admin" && (
                <>
                  <Link
                    to={"/dashboard/approve-librarians"}
                    className={`flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-200 ${
                      theme === "dark" ? "hover:bg-gray-700" : ""
                    }`}
                  >
                    <FaBookOpen />
                    {sidebarOpen && <span>Approve Librarians</span>}
                  </Link>

                  <Link
                    to={`/dashboard/users-management`}
                    className={`flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-200 ${
                      theme === "dark" ? "hover:bg-gray-700" : ""
                    }`}
                  >
                    <FaUser />
                    {sidebarOpen && <span>Users Management</span>}
                  </Link>

                  <Link
                    to={`/dashboard/manage-books`}
                    className={`flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-200 ${
                      theme === "dark" ? "hover:bg-gray-700" : ""
                    }`}
                  >
                    <SiManageiq />
                    {sidebarOpen && <span>Manage Books</span>}
                  </Link>
                </>
              )}

              {role === "librarian" && (
                <>
                  <Link
                    to={"/dashboard/add-book"}
                    className={`flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-200 ${
                      theme === "dark" ? "hover:bg-gray-700" : ""
                    }`}
                  >
                    <MdAddBox />
                    {sidebarOpen && <span>Add Book</span>}
                  </Link>

                  <Link
                    to={`/dashboard/my-books`}
                    className={`flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-200 ${
                      theme === "dark" ? "hover:bg-gray-700" : ""
                    }`}
                  >
                    <ImBooks />
                    {sidebarOpen && <span>My Books</span>}
                  </Link>

                  <Link
                    to={`/dashboard/librarian-orders`}
                    className={`flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-200 ${
                      theme === "dark" ? "hover:bg-gray-700" : ""
                    }`}
                  >
                    <FaBookReader />
                    {sidebarOpen && <span>Orders For My Books</span>}
                  </Link>
                </>
              )}
              <div className="flex items-center py-2 px-4">
                {sidebarOpen && (
                  <ToggleButton theme={theme} toggleTheme={toggleTheme} />
                )}
              </div>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-5">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
