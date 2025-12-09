import React from "react";

const AdminDashboardHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8 dark:bg-gray-700 dark:text-gray-200">
      {/* Header */}
      <header className="w-full max-w-4xl bg-white shadow-md rounded-xl p-6 mb-8 text-center dark:bg-gray-600 dark:text-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 dark:text-gray-200">
          Welcome, Admin!
        </h1>
        <p className="text-gray-500 dark:text-gray-200">
          Manage your platform easily with BookCourier
        </p>
      </header>

      {/* Notes Section */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-xl p-6 dark:bg-gray-600 dark:text-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-200">
          Notes
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 dark:text-gray-200">
          <li>Check system logs regularly.</li>
          <li>Review user activity and permissions.</li>
          <li>Update platform content as needed.</li>
          <li>Ensure reports are up-to-date.</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
