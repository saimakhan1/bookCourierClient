// import React, { useEffect, useState } from "react";
// import { Link } from "react-router";

// const AllBooks = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     fetch("/allBooks.json")
//       .then((res) => res.json())
//       .then((data) => setBooks(data));
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto p-5">
//       <h2 className="text-3xl font-bold mb-6">All Books</h2>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {books.map((book) => (
//           <div
//             key={book.id}
//             className="border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
//           >
//             <img
//               src={book.cover}
//               alt={book.title}
//               className="w-full h-56 object-cover rounded-md"
//             />

//             <h3 className="text-xl font-semibold mt-3">{book.title}</h3>
//             <p className="text-gray-600">by {book.author}</p>

//             <p className="font-bold text-blue-600 mt-2">${book.price}</p>

//             {/* View Details Button */}
//             <Link
//               to={`/book/${book.id}`}
//               className="mt-4 inline-block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//             >
//               View Details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllBooks;

import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books") // ⬅ backend route
      .then((res) => res.json())
      .then((data) => {
        // Sort books by latest added first
        const sorted = data.sort(
          (a, b) => new Date(b.addedDate) - new Date(a.addedDate)
        );
        setBooks(sorted);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-3xl font-bold mb-6">All Books</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
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

            {/* View Details Button */}
            <Link
              to={`/books/${book._id}`}
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
