// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { getAuth } from "firebase/auth";
// import useAuth from "../../hooks/useAuth";
// import OrderModal from "../OrderModal/OrderModal";
// import Swal from "sweetalert2";

// const BookDetails = () => {
//   const { id } = useParams();
//   const { user } = useAuth();
//   const [book, setBook] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState(5);
//   const [reviewText, setReviewText] = useState("");
//   const [hasOrdered, setHasOrdered] = useState(false);

//   const auth = getAuth();

//   // Fetch book details
//   useEffect(() => {
//     fetch(`http://localhost:3000/books/${id}`)
//       .then((res) => res.json())
//       .then((data) => setBook(data))
//       .catch((err) => console.log(err));
//   }, [id]);

//   // Fetch reviews for this book
//   useEffect(() => {
//     fetch(`http://localhost:3000/reviews/${id}`)
//       .then((res) => res.json())
//       .then((data) => setReviews(data))
//       .catch((err) => console.log(err));
//   }, [id]);

//   // Check if user has ordered this book (to allow review)
//   useEffect(() => {
//     if (!user?.email) return;

//     fetch(`http://localhost:3000/orders?email=${user.email}`)
//       .then((res) => res.json())
//       .then((orders) => {
//         const ordered = orders.some(
//           (order) =>
//             order.bookId === id || order.bookId === (book?._id ? book._id : id)
//         );
//         setHasOrdered(ordered);
//       })
//       .catch((err) => console.log(err));
//   }, [user, id, book]);

//   // Place order handler
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

//   // Submit review
//   const handleSubmitReview = async (e) => {
//     e.preventDefault();
//     if (!rating || !reviewText) return;

//     try {
//       if (!user) throw new Error("You must be logged in to submit a review");

//       // Get Firebase ID token for backend authentication
//       const idToken = await auth.currentUser.getIdToken(true);

//       const res = await fetch("http://localhost:3000/reviews", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${idToken}`,
//         },
//         body: JSON.stringify({
//           bookId: id,
//           rating,
//           review: reviewText,
//           userName: user.displayName,
//         }),
//       });

//       if (res.ok) {
//         const newReview = await res.json();
//         setReviews((prev) => [...prev, newReview]);

//         Swal.fire({
//           icon: "success",
//           title: "Thank you!",
//           text: "Your review has been submitted.",
//           confirmButtonColor: "#3085d6",
//         });

//         setRating(5);
//         setReviewText("");
//       } else {
//         const data = await res.json();
//         Swal.fire("Error", data.message || "Failed to submit review", "error");
//       }
//     } catch (err) {
//       console.log(err);
//       Swal.fire("Error", err.message || "Something went wrong", "error");
//     }
//   };

//   // Helper to format date
//   const formatDate = (value) => {
//     if (!value) return "N/A";
//     const d = new Date(value);
//     if (isNaN(d)) return String(value);
//     return d.toLocaleDateString();
//   };

//   if (!book) {
//     return <p className="text-center mt-10">Loading book details...</p>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-5">
//       <div className="flex flex-col md:flex-row gap-6">
//         <img
//           src={book.cover || book.image}
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
//           <p className="text-gray-700 mb-2">
//             <strong>Publication Date:</strong>{" "}
//             {formatDate(book.publicationDate)}
//           </p>
//           <p className="text-gray-700 mb-4">
//             <strong>Added On:</strong> {formatDate(book.createdAt)}
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

//       {/* Reviews Section */}
//       <div className="mt-10">
//         <h2 className="text-2xl font-bold mb-4">Reviews</h2>

//         {reviews.length === 0 && <p>No reviews yet.</p>}

//         <div className="space-y-4">
//           {reviews.map((r, idx) => (
//             <div
//               key={idx}
//               className="border p-3 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <span className="font-semibold">{r.userName}</span>
//                 <span className="text-yellow-500">{r.rating} ★</span>
//               </div>
//               <p className="text-gray-700 dark:text-gray-300">{r.review}</p>
//               <p className="text-gray-400 text-sm mt-1">
//                 {formatDate(r.createdAt)}
//               </p>
//             </div>
//           ))}
//         </div>

//         {user && hasOrdered && (
//           <form
//             onSubmit={handleSubmitReview}
//             className="mt-6 flex flex-col gap-3"
//           >
//             <h3 className="text-xl font-semibold">Write a Review</h3>
//             <label>
//               Rating:
//               <select
//                 value={rating}
//                 onChange={(e) => setRating(Number(e.target.value))}
//                 className="ml-2 border rounded px-2 py-1"
//               >
//                 {[1, 2, 3, 4, 5].map((n) => (
//                   <option key={n} value={n}>
//                     {n}
//                   </option>
//                 ))}
//               </select>
//             </label>
//             <textarea
//               value={reviewText}
//               onChange={(e) => setReviewText(e.target.value)}
//               placeholder="Write your review..."
//               className="border rounded px-3 py-2 w-full"
//               required
//             />
//             <button
//               type="submit"
//               className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
//             >
//               Submit Review
//             </button>
//           </form>
//         )}

//         {(!user || !hasOrdered) && reviews.length > 0 && (
//           <p className="mt-4 text-gray-500">
//             Only users who purchased this book can leave a review.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAuth } from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import OrderModal from "../OrderModal/OrderModal";
import Swal from "sweetalert2";

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [book, setBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [hasOrdered, setHasOrdered] = useState(false);

  const auth = getAuth();

  // Fetch book details
  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.log(err));
  }, [id]);

  // Fetch reviews for this book
  useEffect(() => {
    fetch(`http://localhost:3000/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [id]);

  // Check if user has ordered this book (to allow review)
  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((orders) => {
        const ordered = orders.some(
          (order) =>
            order.bookId === id || order.bookId === (book?._id ? book._id : id)
        );
        setHasOrdered(ordered);
      })
      .catch((err) => console.log(err));
  }, [user, id, book]);

  // Place order handler
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

  // Submit review
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!rating || !reviewText) return;

    try {
      if (!user) throw new Error("You must be logged in to submit a review");

      const idToken = await auth.currentUser.getIdToken(true);

      const res = await fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          bookId: id,
          rating,
          review: reviewText,
          userName: user.displayName,
        }),
      });

      if (res.ok) {
        const newReview = await res.json();
        setReviews((prev) => [...prev, newReview]);

        Swal.fire({
          icon: "success",
          title: "Thank you!",
          text: "Your review has been submitted.",
          confirmButtonColor: "#3085d6",
        });

        setRating(5);
        setReviewText("");
      } else {
        const data = await res.json();
        Swal.fire("Error", data.message || "Failed to submit review", "error");
      }
    } catch (err) {
      console.log(err);
      Swal.fire("Error", err.message || "Something went wrong", "error");
    }
  };

  // Wishlist handler
  const handleAddToWishlist = async () => {
    if (!user) {
      return Swal.fire(
        "Error",
        "You must be logged in to add to wishlist",
        "error"
      );
    }

    try {
      const idToken = await auth.currentUser.getIdToken(true);

      const res = await fetch("http://localhost:3000/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ bookId: book._id }),
      });

      if (res.ok) {
        Swal.fire("Success", "Book added to your wishlist", "success");
      } else {
        const data = await res.json();
        Swal.fire(
          "Error",
          data.message || "Failed to add to wishlist",
          "error"
        );
      }
    } catch (err) {
      console.log(err);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  // Helper to format date
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

          {/* Wishlist button */}
          <button
            onClick={handleAddToWishlist}
            className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-lg ml-3 transition"
          >
            Add to Wishlist
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

      {/* Reviews Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>

        {reviews.length === 0 && <p>No reviews yet.</p>}

        <div className="space-y-4">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="border p-3 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{r.userName}</span>
                <span className="text-yellow-500">{r.rating} ★</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{r.review}</p>
              <p className="text-gray-400 text-sm mt-1">
                {formatDate(r.createdAt)}
              </p>
            </div>
          ))}
        </div>

        {user && hasOrdered && (
          <form
            onSubmit={handleSubmitReview}
            className="mt-6 flex flex-col gap-3"
          >
            <h3 className="text-xl font-semibold">Write a Review</h3>
            <label>
              Rating:
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="ml-2 border rounded px-2 py-1"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review..."
              className="border rounded px-3 py-2 w-full"
              required
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
            >
              Submit Review
            </button>
          </form>
        )}

        {(!user || !hasOrdered) && reviews.length > 0 && (
          <p className="mt-4 text-gray-500">
            Only users who purchased this book can leave a review.
          </p>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
