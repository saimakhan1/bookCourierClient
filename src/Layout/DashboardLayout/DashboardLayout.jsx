import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import { FiMenu, FiHome, FiShoppingCart, FiLogOut } from "react-icons/fi";
import { RiGalleryView2 } from "react-icons/ri";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-lg transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between p-4 border-b">
          {sidebarOpen && <h2 className="text-xl font-bold">Dashboard</h2>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-700 hover:text-gray-900"
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* Sidebar navigation */}
        <nav className="mt-4">
          <ul>
            <li>
              <Link
                to="/"
                className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 rounded"
              >
                <FiHome />
                {sidebarOpen && <span>Home Page</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/my-orders"
                className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 rounded"
              >
                <FiShoppingCart />
                {sidebarOpen && <span>My Orders</span>}
              </Link>
              <Link
                to="/books"
                className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 rounded"
              >
                <RiGalleryView2 />
                {sidebarOpen && <span>View All Books</span>}
              </Link>
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
