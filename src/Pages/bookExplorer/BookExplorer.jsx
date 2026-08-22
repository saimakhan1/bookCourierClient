// import { useState } from "react";

// const BookExplorer = () => {
//   const [query, setQuery] = useState("");
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Search books using Open Library API
//   const searchBooks = async () => {
//     if (!query.trim()) return;
//     setLoading(true);

//     try {
//       const res = await fetch(
//         `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`,
//       );
//       const data = await res.json();

//       // Map results to a consistent structure
//       const mappedBooks = data.docs.slice(0, 20).map((book) => ({
//         key: book.key,
//         title: book.title,
//         author: book.author_name
//           ? book.author_name.join(", ")
//           : "Unknown Author",
//         cover: book.cover_i
//           ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
//           : "https://via.placeholder.com/150x220?text=No+Cover",
//         link: `https://openlibrary.org${book.key}`,
//       }));

//       setBooks(mappedBooks);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//       setBooks([]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-base-200 py-10 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Title */}
//         <h1 className="text-3xl font-bold text-center mb-6">
//           🌍 Global Book Explorer
//         </h1>

//         {/* Search Bar */}
//         <div className="flex flex-col md:flex-row justify-center gap-2 mb-8">
//           <input
//             type="text"
//             placeholder="Search any book..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && searchBooks()}
//             className="input input-bordered w-full max-w-md"
//           />
//           <button
//             onClick={searchBooks}
//             disabled={loading}
//             className="btn btn-primary mt-2 md:mt-0"
//           >
//             {loading ? "Searching..." : "Search"}
//           </button>
//         </div>

//         {/* Books Grid */}
//         {loading && (
//           <p className="text-center text-lg font-semibold mb-4">
//             Searching books...
//           </p>
//         )}

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {books.map((book) => (
//             <div
//               key={book.key}
//               className="bg-base-100 shadow-lg rounded-lg p-4 hover:shadow-xl transition"
//             >
//               <img
//                 src={book.cover}
//                 alt={book.title}
//                 className="w-full h-48 object-cover rounded"
//               />
//               <h3 className="font-semibold mt-3 line-clamp-2">{book.title}</h3>
//               <p className="text-sm text-gray-500">{book.author}</p>
//               <a
//                 href={book.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn btn-sm btn-outline mt-3 w-full"
//               >
//                 Preview
//               </a>
//             </div>
//           ))}
//         </div>

//         {/* No Results */}
//         {!loading && books.length === 0 && query && (
//           <p className="text-center text-gray-500 mt-6">
//             No books found for "{query}"
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookExplorer;

import { useState } from "react";

const BookExplorer = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =========================================================
  // SEARCH BOOKS USING OPEN LIBRARY API
  // =========================================================

  const searchBooks = async (searchQuery = query) => {
    const trimmedQuery = searchQuery.trim();

    if (!trimmedQuery) {
      setBooks([]);
      setError("");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(
          trimmedQuery,
        )}&limit=20`,
      );

      if (!res.ok) {
        throw new Error("Failed to fetch books");
      }

      const data = await res.json();

      const mappedBooks = data.docs.slice(0, 20).map((book) => ({
        key: book.key,
        title: book.title || "Untitled Book",

        author: book.author_name
          ? book.author_name.join(", ")
          : "Unknown Author",

        cover: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : null,

        link: `https://openlibrary.org${book.key}`,

        year: book.first_publish_year || "Year unavailable",

        subjects: book.subject ? book.subject.slice(0, 3) : [],

        editionCount: book.edition_count || 0,
      }));

      setBooks(mappedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);

      setBooks([]);

      setError(
        "We couldn't load the books right now. Please check your connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // SEARCH FROM QUICK CATEGORY
  // =========================================================

  const handleQuickSearch = (category) => {
    setQuery(category);
    searchBooks(category);
  };

  // =========================================================
  // CLEAR SEARCH
  // =========================================================

  const clearSearch = () => {
    setQuery("");
    setBooks([]);
    setError("");
  };

  // =========================================================
  // QUICK SEARCH CATEGORIES
  // =========================================================

  const categories = [
    {
      icon: "💻",
      name: "Programming",
      query: "programming",
    },
    {
      icon: "🔬",
      name: "Science",
      query: "science",
    },
    {
      icon: "🔎",
      name: "Mystery",
      query: "mystery",
    },
    {
      icon: "📖",
      name: "Fiction",
      query: "fiction",
    },
    {
      icon: "🏛️",
      name: "History",
      query: "history",
    },
    {
      icon: "🌱",
      name: "Self Help",
      query: "self help",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* ===================================================== */}
      {/* ===================== HERO SECTION ================== */}
      {/* ===================================================== */}

      <section className="bg-primary/10 dark:bg-gray-700 border-b border-primary/10 dark:border-gray-600 py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Hero Text */}

            <div className="md:col-span-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-600 text-primary dark:text-blue-300 px-4 py-2 rounded-full shadow-sm font-medium mb-5">
                <span>🌍</span>
                <span>Explore Books Worldwide</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                Discover Your Next{" "}
                <span className="text-primary dark:text-blue-300">
                  Great Read
                </span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-200 leading-8 max-w-2xl">
                Search millions of books from the Open Library catalog. Explore
                different genres, discover new authors, and find books that
                match your interests.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-7">
                <div className="flex items-center gap-2 bg-white dark:bg-gray-600 px-4 py-2 rounded-full shadow-sm text-sm">
                  📚 Millions of Books
                </div>

                <div className="flex items-center gap-2 bg-white dark:bg-gray-600 px-4 py-2 rounded-full shadow-sm text-sm">
                  🔎 Easy Search
                </div>

                <div className="flex items-center gap-2 bg-white dark:bg-gray-600 px-4 py-2 rounded-full shadow-sm text-sm">
                  🌎 Global Catalog
                </div>
              </div>
            </div>

            {/* Hero Illustration */}

            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-5 rounded-full bg-blue-400/20 dark:bg-blue-400/10 blur-2xl" />

                <div className="absolute inset-7 bg-white dark:bg-gray-600 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-500 flex flex-col items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-primary/10 dark:bg-gray-500 flex items-center justify-center mb-4">
                    <span className="text-6xl">📚</span>
                  </div>

                  <h3 className="font-bold text-lg">Explore & Discover</h3>

                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                    Books from around the world
                  </p>
                </div>

                {/* Floating Icons */}

                <div className="absolute top-4 left-0 w-12 h-12 bg-white dark:bg-gray-500 rounded-xl shadow-lg flex items-center justify-center text-xl">
                  🔎
                </div>

                <div className="absolute top-7 right-0 w-12 h-12 bg-white dark:bg-gray-500 rounded-xl shadow-lg flex items-center justify-center text-xl">
                  🌍
                </div>

                <div className="absolute bottom-5 left-0 w-12 h-12 bg-white dark:bg-gray-500 rounded-xl shadow-lg flex items-center justify-center text-xl">
                  ⭐
                </div>

                <div className="absolute bottom-2 right-0 w-12 h-12 bg-white dark:bg-gray-500 rounded-xl shadow-lg flex items-center justify-center text-xl">
                  📖
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ===================== SEARCH SECTION ================= */}
      {/* ===================================================== */}

      <main className="max-w-6xl mx-auto px-4 py-14">
        <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-3xl shadow-sm p-6 md:p-8">
          <div className="text-center mb-7">
            <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
              Book Search
            </span>

            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              What Would You Like to Read?
            </h2>

            <p className="text-gray-600 dark:text-gray-200 mt-3">
              Search by book title, author, subject, or keyword.
            </p>
          </div>

          {/* Search Input */}

          <div className="flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
                🔎
              </span>

              <input
                type="text"
                placeholder="Search books, authors, genres..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    searchBooks();
                  }
                }}
                className="input input-bordered w-full pl-12 pr-12 bg-gray-50 dark:bg-gray-600 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-500 focus:border-primary focus:outline-none"
              />

              {query && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-100"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={() => searchBooks()}
              disabled={loading || !query.trim()}
              className="btn btn-primary px-8"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Searching...
                </>
              ) : (
                <>🔎 Search</>
              )}
            </button>
          </div>

          {/* Quick Categories */}

          <div className="mt-7">
            <p className="text-center text-sm font-semibold text-gray-500 dark:text-gray-300 mb-3">
              Explore by category
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleQuickSearch(category.query)}
                  className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-500 bg-gray-50 dark:bg-gray-600 hover:bg-primary/10 dark:hover:bg-gray-500 transition-colors text-sm"
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================== */}
        {/* ===================== ERROR ======================= */}
        {/* =================================================== */}

        {error && (
          <div className="mt-8 bg-red-50 dark:bg-gray-700 border border-red-200 dark:border-gray-600 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>

              <div>
                <h3 className="font-bold text-red-700 dark:text-red-300">
                  Something went wrong
                </h3>

                <p className="text-red-600 dark:text-gray-200 mt-1">{error}</p>

                <button
                  onClick={() => searchBooks()}
                  className="btn btn-sm btn-outline mt-3"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =================================================== */}
        {/* ===================== LOADING ===================== */}
        {/* =================================================== */}

        {loading && (
          <div className="py-16 text-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>

            <p className="font-semibold mt-4">
              Searching the Open Library catalog...
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
              Finding books that match your search.
            </p>
          </div>
        )}

        {/* =================================================== */}
        {/* ===================== RESULTS ===================== */}
        {/* =================================================== */}

        {!loading && books.length > 0 && (
          <section className="mt-12">
            {/* Results Header */}

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
              <div>
                <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
                  Search Results
                </span>

                <h2 className="text-2xl md:text-3xl font-bold mt-2">
                  Books You May Like
                </h2>

                <p className="text-gray-500 dark:text-gray-300 mt-1">
                  Showing {books.length} results for "{query}"
                </p>
              </div>

              <button
                onClick={clearSearch}
                className="btn btn-sm btn-outline self-start sm:self-auto"
              >
                Clear Results
              </button>
            </div>

            {/* Book Grid */}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {books.map((book) => (
                <article
                  key={book.key}
                  className="group bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Cover */}

                  <div className="relative bg-gray-100 dark:bg-gray-600 h-64 overflow-hidden">
                    {book.cover ? (
                      <img
                        src={book.cover}
                        alt={`Cover of ${book.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling.style.display =
                            "flex";
                        }}
                      />
                    ) : null}

                    {/* Image Fallback */}

                    <div
                      className={`absolute inset-0 ${
                        book.cover ? "hidden" : "flex"
                      } items-center justify-center bg-primary/10 dark:bg-gray-600`}
                    >
                      <div className="text-center">
                        <div className="text-5xl mb-2">📖</div>

                        <p className="text-sm text-gray-500 dark:text-gray-300">
                          No cover available
                        </p>
                      </div>
                    </div>

                    {/* Edition Badge */}

                    {book.editionCount > 0 && (
                      <div className="absolute top-3 left-3 bg-white/95 dark:bg-gray-700/95 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold shadow-sm">
                        {book.editionCount} editions
                      </div>
                    )}
                  </div>

                  {/* Book Information */}

                  <div className="p-4">
                    <h3
                      className="font-bold text-base md:text-lg line-clamp-2 min-h-[3.5rem]"
                      title={book.title}
                    >
                      {book.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm">✍️</span>

                      <p
                        className="text-sm text-gray-500 dark:text-gray-300 line-clamp-1"
                        title={book.author}
                      >
                        {book.author}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-300">
                      <span>📅</span>

                      <span>{book.year}</span>
                    </div>

                    {/* Subjects */}

                    {book.subjects.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {book.subjects.map((subject, index) => (
                          <span
                            key={index}
                            className="text-xs bg-primary/10 dark:bg-gray-600 text-primary dark:text-blue-300 px-2 py-1 rounded-full"
                          >
                            {subject.length > 18
                              ? `${subject.substring(0, 18)}...`
                              : subject}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Preview */}

                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline w-full mt-4 hover:btn-primary"
                    >
                      View on Open Library ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* =================================================== */}
        {/* ===================== EMPTY STATE ================= */}
        {/* =================================================== */}

        {!loading && !error && books.length === 0 && !query && (
          <section className="mt-12 bg-primary/10 dark:bg-gray-700 border border-primary/10 dark:border-gray-600 rounded-3xl p-10 md:p-14 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-white dark:bg-gray-600 flex items-center justify-center text-5xl shadow-sm mb-6">
              📚
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Your Next Book Is Waiting
            </h2>

            <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-200 leading-7">
              Search for a title, author, topic, or genre above to start
              exploring books from the global Open Library catalog.
            </p>
          </section>
        )}

        {/* =================================================== */}
        {/* ===================== NO RESULTS ================== */}
        {/* =================================================== */}

        {!loading && !error && books.length === 0 && query && (
          <section className="mt-12 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-3xl p-10 text-center">
            <div className="text-5xl mb-5">🔎</div>

            <h2 className="text-2xl font-bold mb-3">No Books Found</h2>

            <p className="text-gray-600 dark:text-gray-200 max-w-lg mx-auto leading-7">
              We couldn't find books matching{" "}
              <span className="font-semibold">"{query}"</span>. Try another
              title, author, keyword, or category.
            </p>

            <button onClick={clearSearch} className="btn btn-primary mt-6">
              Try Another Search
            </button>
          </section>
        )}
      </main>

      {/* ===================================================== */}
      {/* ===================== INFO SECTION ================== */}
      {/* ===================================================== */}

      <section className="bg-primary/10 dark:bg-gray-700 border-y border-primary/10 dark:border-gray-600 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
              Explore More
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              A World of Books at Your Fingertips
            </h2>

            <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-200 leading-7">
              Use Book Explorer to discover books beyond the BookCourier
              collection and find your next reading experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-600 rounded-2xl p-6 border border-gray-200 dark:border-gray-500">
              <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-gray-500 flex items-center justify-center text-2xl mb-4">
                🌍
              </div>

              <h3 className="font-bold text-lg mb-2">Global Catalog</h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Explore books from the Open Library catalog and discover titles
                from different authors, subjects, and genres.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-600 rounded-2xl p-6 border border-gray-200 dark:border-gray-500">
              <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-gray-500 flex items-center justify-center text-2xl mb-4">
                🔎
              </div>

              <h3 className="font-bold text-lg mb-2">Search Easily</h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Search by title, author, topic, or keyword to quickly find books
                that match your interests.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-600 rounded-2xl p-6 border border-gray-200 dark:border-gray-500">
              <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-gray-500 flex items-center justify-center text-2xl mb-4">
                📖
              </div>

              <h3 className="font-bold text-lg mb-2">Learn More</h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Open a book's Open Library page to explore additional
                information and available editions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ===================== BOTTOM CTA ==================== */}
      {/* ===================================================== */}

      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 dark:bg-gray-700 flex items-center justify-center text-3xl mb-5">
            📚
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Found Something Interesting?
          </h2>

          <p className="text-gray-600 dark:text-gray-200 leading-7 mb-6">
            Continue exploring BookCourier to discover books and make your
            reading journey more convenient.
          </p>

          <a href="/books" className="btn btn-primary px-7">
            Explore BookCourier 📚
          </a>
        </div>
      </section>
    </div>
  );
};

export default BookExplorer;
