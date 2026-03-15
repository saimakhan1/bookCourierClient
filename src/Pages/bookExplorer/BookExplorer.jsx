import { useState } from "react";

const BookExplorer = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async () => {
    if (!query.trim()) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`,
      );

      const data = await res.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          🌍 Global Book Explorer
        </h1>

        {/* Search Bar */}
        <div className="flex justify-center gap-2 mb-8">
          <input
            type="text"
            placeholder="Search any book in the world..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchBooks()}
            className="input input-bordered w-full max-w-md"
          />

          <button onClick={searchBooks} className="btn btn-primary">
            Search
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-lg font-semibold">
            Searching books...
          </p>
        )}

        {/* Book Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => {
            const info = book.volumeInfo;

            return (
              <div
                key={book.id}
                className="bg-base-100 shadow-lg rounded-lg p-4 hover:shadow-xl transition"
              >
                <img
                  src={
                    info.imageLinks?.thumbnail ||
                    "https://via.placeholder.com/150"
                  }
                  alt={info.title}
                  className="w-full h-48 object-cover rounded"
                />

                <h3 className="font-semibold mt-3 line-clamp-2">
                  {info.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {info.authors?.join(", ") || "Unknown Author"}
                </p>

                <a
                  href={info.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline mt-3 w-full"
                >
                  Preview
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookExplorer;
