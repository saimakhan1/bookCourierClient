import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const BookWishlist = () => {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const auth = getAuth();

  const fetchWishlist = async () => {
    try {
      const idToken = await auth.currentUser.getIdToken(true);
      const res = await fetch(
        "https://book-courier-server.vercel.app/wishlist",
        {
          headers: { Authorization: `Bearer ${idToken}` },
        }
      );
      const data = await res.json();
      setWishlist(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = async (bookId) => {
    try {
      const idToken = await auth.currentUser.getIdToken(true);
      const res = await fetch(
        `https://book-courier-server.vercel.app/wishlist/${bookId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${idToken}` },
        }
      );
      if (res.ok) {
        Swal.fire("Removed", "Book removed from wishlist", "success");
        setWishlist((prev) => prev.filter((item) => item.bookId !== bookId));
      }
    } catch (err) {
      console.log(err);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  useEffect(() => {
    if (user) fetchWishlist();
  }, [user]);

  if (!wishlist.length)
    return <p className="text-center mt-10">Your wishlist is empty</p>;

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">My Wishlist</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {wishlist.map((item, idx) => (
          <div key={idx} className="border p-3 rounded-lg shadow-lg">
            <img
              src={item.bookDetails.cover || item.bookDetails.image}
              alt={item.bookDetails.title}
              className="w-full h-48 object-cover mb-3 rounded"
            />
            <h2 className="text-xl font-semibold">{item.bookDetails.title}</h2>
            <p className="text-gray-700 dark:text-white">
              {item.bookDetails.author}
            </p>
            <p className="text-gray-700 dark:text-white">
              ${item.bookDetails.price}
            </p>
            <button
              onClick={() => handleRemove(item.bookId)}
              className="mt-3 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookWishlist;
