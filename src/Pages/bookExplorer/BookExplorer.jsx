import { useState } from "react";

const BookExplorer = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search books using Open Library API
  const searchBooks = async () => {
    if (!query.trim()) return;
    setLoading(true);

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`,
      );
      const data = await res.json();

      // Map results to a consistent structure
      const mappedBooks = data.docs.slice(0, 20).map((book) => ({
        key: book.key,
        title: book.title,
        author: book.author_name
          ? book.author_name.join(", ")
          : "Unknown Author",
        cover: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "https://via.placeholder.com/150x220?text=No+Cover",
        link: `https://openlibrary.org${book.key}`,
      }));

      setBooks(mappedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6">
          🌍 Global Book Explorer
        </h1>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row justify-center gap-2 mb-8">
          <input
            type="text"
            placeholder="Search any book..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchBooks()}
            className="input input-bordered w-full max-w-md"
          />
          <button
            onClick={searchBooks}
            disabled={loading}
            className="btn btn-primary mt-2 md:mt-0"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {/* Books Grid */}
        {loading && (
          <p className="text-center text-lg font-semibold mb-4">
            Searching books...
          </p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.key}
              className="bg-base-100 shadow-lg rounded-lg p-4 hover:shadow-xl transition"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="font-semibold mt-3 line-clamp-2">{book.title}</h3>
              <p className="text-sm text-gray-500">{book.author}</p>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline mt-3 w-full"
              >
                Preview
              </a>
            </div>
          ))}
        </div>

        {/* No Results */}
        {!loading && books.length === 0 && query && (
          <p className="text-center text-gray-500 mt-6">
            No books found for "{query}"
          </p>
        )}
      </div>
    </div>
  );
};

export default BookExplorer;
