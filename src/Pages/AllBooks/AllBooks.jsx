import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => {
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
    if (isNaN(d)) {
      // if parsing failed, return original string (or "N/A" if you prefer)
      return String(value);
    }
    return d.toLocaleDateString();
  };

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-3xl font-bold mb-6">All Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book._id || book.id}
            className="border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-56 object-cover rounded-md"
            />

            <h3 className="text-xl font-semibold mt-3">{book.title}</h3>
            <p className="text-gray-600">by {book.author}</p>

            <p className="font-bold text-blue-600 mt-2">${book.price}</p>

            {/* Publication Date (safely formatted) */}
            <p className="text-sm text-gray-500 mt-1">
              <span className="font-semibold">Published:</span>{" "}
              {formatDate(book.publicationDate)}
            </p>

            {/* Added On / CreatedAt (safely formatted) */}
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Added On:</span>{" "}
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
