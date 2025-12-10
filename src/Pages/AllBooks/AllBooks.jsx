import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // "" | "asc" | "desc"

  useEffect(() => {
    axios
      .get("https://book-courier-server.vercel.app/books")
      .then((response) => {
        const data = response.data;

        // Sort books by latest added first (robust to missing/invalid dates)
        const sorted = data.sort((a, b) => {
          const aTime = Date.parse(a.addedDate || a.createdAt || "") || 0;
          const bTime = Date.parse(b.addedDate || b.createdAt || "") || 0;
          return bTime - aTime;
        });

        setBooks(sorted);
      })
      .catch((err) => {
        console.error("Failed to fetch books:", err);
      });
  }, []);

  // Helper: safely format dates, avoid "Invalid Date"
  const formatDate = (value) => {
    if (!value && value !== 0) return "N/A";
    const d = new Date(value);
    if (isNaN(d)) return String(value);
    return d.toLocaleDateString();
  };

  // Filtered & Sorted books
  const displayedBooks = books
    .filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0; // no sort
    });

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-3xl font-bold mb-6">All Books</h2>

      {/* Search & Sort */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by book title..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border px-3 py-2 rounded w-full sm:w-1/2"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-3 py-2 rounded w-full sm:w-1/4 text-gray-900 dark:text-white bg-white dark:bg-gray-800"
        >
          <option value="">Sort by price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedBooks.map((book) => (
          <div
            key={book._id || book.id}
            className="border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col dark:text-white"
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-56 object-cover rounded-md"
            />

            <h3 className="text-xl font-semibold mt-3 dark:text-white">
              {book.title}
            </h3>
            <p className="text-gray-600 dark:text-white">by {book.author}</p>

            <p className="font-bold text-blue-600 mt-2 dark:text-white">
              ${book.price}
            </p>

            <p className="text-sm text-gray-500 mt-1 dark:text-white">
              <span className="font-semibold dark:text-white">Published:</span>{" "}
              {formatDate(book.publicationDate)}
            </p>

            <p className="text-sm text-gray-500 dark:text-white">
              <span className="font-semibold dark:text-white">Added On:</span>{" "}
              {formatDate(book.createdAt || book.addedDate)}
            </p>

            <Link
              to={`/books/${book._id || book.id}`}
              className="mt-4 inline-block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
