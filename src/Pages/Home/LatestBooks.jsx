import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";

const LatestBooks = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  // Fetch all books from backend
  const {
    data: books = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["all-books"],
    queryFn: async () => {
      const res = await axiosSecure.get("/books"); // fetch all books
      return res.data;
    },
  });

  if (isLoading)
    return <p className="text-center py-10">Loading latest books...</p>;
  if (isError) return <p className="text-center py-10">Failed to load books</p>;
  if (!books.length) return <p className="text-center py-10">No books found</p>;

  // Sort by createdAt or _id descending to get latest books
  const latestBooks = [...books]
    .sort(
      (a, b) => new Date(b.createdAt || b._id) - new Date(a.createdAt || a._id)
    )
    .slice(0, 4); // pick latest 4 books

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Latest Books
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {latestBooks.map((book) => (
          <div
            key={book._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow"
          >
            <img
              src={book.cover || "/default-book.jpg"}
              alt={book.title}
              className="h-60 w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-1 dark:bg-gray-700">
              <h3 className="text-lg font-semibold mb-2 dark:bg-gray-700 dark:text-gray-100">
                {book.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-100 dark:bg-gray-700 text-sm mb-4 line-clamp-3">
                {book.description || "No description available."}
              </p>
              <button
                onClick={() => navigate(`/books/${book._id}`)}
                className="bg-gray-400 dark:bg-blue-700 mt-auto hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/books")}
          className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 hover:bg-blue-300  px-6 py-3 rounded-lg font-semibold transition"
        >
          See All Books
        </button>
      </div>
    </section>
  );
};

export default LatestBooks;
