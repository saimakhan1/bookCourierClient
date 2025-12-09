import React from "react";

const LibrarianDashboardHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8 dark:bg-gray-700 dark:text-gray-200">
      {/* Header */}
      <header className="w-full max-w-4xl bg-white shadow-md rounded-xl p-6 mb-8 text-center dark:bg-gray-600 dark:text-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 dark:bg-gray-600 dark:text-gray-200">
          Welcome, Librarian!
        </h1>
        <p className="text-gray-500 dark:bg-gray-600 dark:text-gray-200">
          Manage your library easily with BookCourier
        </p>
      </header>

      {/* Notes Section */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-xl p-6 dark:bg-gray-600 dark:text-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:bg-gray-600 dark:text-gray-200">
          Notes
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 dark:bg-gray-600 dark:text-gray-200">
          <li>Check for overdue books daily.</li>
          <li>Update book inventory regularly.</li>
          <li>Notify members about upcoming events.</li>
          <li>Maintain library cleanliness and order.</li>
        </ul>
      </div>
    </div>
  );
};

export default LibrarianDashboardHome;
