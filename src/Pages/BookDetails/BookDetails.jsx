// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import useAuth from "../../hooks/useAuth";
// import OrderModal from "../OrderModal/OrderModal";
// import Swal from "sweetalert2";

// const BookDetails = () => {
//   const { id } = useParams();
//   const { user } = useAuth();
//   const [book, setBook] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     fetch(`http://localhost:3000/books/${id}`)
//       .then((res) => res.json())
//       .then((data) => setBook(data))
//       .catch((err) => console.log(err));
//   }, [id]);

//   const handlePlaceOrder = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const orderData = {
//       bookId: book._id,
//       bookTitle: book.title,
//       userName: user.displayName,
//       userEmail: user.email,
//       price: book.price,
//       phone: form.phone.value,
//       address: form.address.value,
//       status: "pending",
//       paymentStatus: "unpaid",
//       orderDate: new Date(),
//     };

//     try {
//       const res = await fetch("http://localhost:3000/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       if (res.ok) {
//         Swal.fire({
//           icon: "success",
//           title: "Success!",
//           text: "Order placed successfully!",
//           confirmButtonColor: "#3085d6",
//           confirmButtonText: "OK",
//         });
//         setShowModal(false);
//       } else {
//         alert("Failed to place order");
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Something went wrong");
//     }
//   };

//   if (!book) {
//     return <p className="text-center mt-10">Loading book details...</p>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-5">
//       <div className="flex flex-col md:flex-row gap-6">
//         <img
//           src={book.image}
//           alt={book.title}
//           className="w-full md:w-1/3 rounded-lg shadow-lg"
//         />
//         <div className="flex-1">
//           <h1 className="text-3xl font-bold mb-3">{book.title}</h1>
//           <p className="text-gray-700 mb-2">
//             <strong>Author:</strong> {book.author}
//           </p>
//           <p className="text-gray-700 mb-2">
//             <strong>Price:</strong> ${book.price}
//           </p>
//           <p className="text-gray-700 mb-4">
//             <strong>Description:</strong> {book.description}
//           </p>
//           <button
//             onClick={() => setShowModal(true)}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition"
//           >
//             Order Now
//           </button>
//         </div>
//       </div>

//       <OrderModal
//         isOpen={showModal}
//         setIsOpen={setShowModal}
//         user={user}
//         book={book}
//         handlePlaceOrder={handlePlaceOrder}
//       />
//     </div>
//   );
// };

// export default BookDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import OrderModal from "../OrderModal/OrderModal";
import Swal from "sweetalert2";

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [book, setBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const form = e.target;
    const orderData = {
      bookId: book._id,
      bookTitle: book.title,
      userName: user.displayName,
      userEmail: user.email,
      price: book.price,
      phone: form.phone.value,
      address: form.address.value,
      status: "pending",
      paymentStatus: "unpaid",
      orderDate: new Date(),
    };

    try {
      const res = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Order placed successfully!",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        setShowModal(false);
      } else {
        alert("Failed to place order");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  // Helper to format date safely
  const formatDate = (value) => {
    if (!value) return "N/A";
    const d = new Date(value);
    if (isNaN(d)) return String(value);
    return d.toLocaleDateString();
  };

  if (!book) {
    return <p className="text-center mt-10">Loading book details...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={book.cover || book.image}
          alt={book.title}
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-3">{book.title}</h1>
          <p className="text-gray-700 mb-2">
            <strong>Author:</strong> {book.author}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Price:</strong> ${book.price}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Publication Date:</strong>{" "}
            {formatDate(book.publicationDate)}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Added On:</strong> {formatDate(book.createdAt)}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Description:</strong> {book.description}
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition"
          >
            Order Now
          </button>
        </div>
      </div>

      <OrderModal
        isOpen={showModal}
        setIsOpen={setShowModal}
        user={user}
        book={book}
        handlePlaceOrder={handlePlaceOrder}
      />
    </div>
  );
};

export default BookDetails;
