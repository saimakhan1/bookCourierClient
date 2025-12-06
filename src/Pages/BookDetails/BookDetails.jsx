import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import OrderModal from "../OrderModal/OrderModal";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  // Fetch book by ID
  useEffect(() => {
    fetch("/allBooks.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBook = data.find((b) => b.id === parseInt(id));
        setBook(foundBook);
      });
  }, [id]);

  if (!book) return <p className="text-center mt-10">Loading...</p>;

  // Handle Order Submit
  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    const form = e.target;

    const orderData = {
      bookId: book.id,
      bookTitle: book.title,
      bookAuthor: book.author,
      bookPrice: book.price,
      bookCover: book.cover,

      customerName: user?.displayName,
      customerEmail: user?.email,
      phone: form.phone.value,
      address: form.address.value,

      status: "pending",
      paymentStatus: "unpaid",
      orderTime: new Date(),
    };

    try {
      await fetch("https://your-backend-api.com/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      setIsOpen(false);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Order failed", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Cover Image */}
      <img
        src={book.cover}
        alt={book.title}
        className="w-full h-96 object-cover rounded-lg shadow"
      />

      {/* Text Info */}
      <h1 className="text-4xl font-bold mt-4">{book.title}</h1>
      <p className="text-xl text-gray-700 mb-2">by {book.author}</p>
      <p className="text-green-600 font-bold text-2xl mb-4">${book.price}</p>

      <p className="text-gray-800 leading-relaxed">{book.description}</p>

      {/* Order Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Order Now
      </button>

      {/* Order Modal */}
      <OrderModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        user={user}
        book={book}
        handlePlaceOrder={handlePlaceOrder}
      />
    </div>
  );
};

export default BookDetails;
