import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import axios from "axios";

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [orders, setOrders] = useState([]);

  // Fetch user orders
  useEffect(() => {
    if (!user?.email) return;

    axios
      .get("https://book-courier-server.vercel.app/orders", {
        params: { email: user.email },
      })
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email, axiosSecure]);

  // Cancel order / Delete order
  const handleCancel = async (orderId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this order? It will be removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(
          `https://book-courier-server.vercel.app/orders/${orderId}`,
          {
            method: "DELETE",
          }
        );

        if (res.ok) {
          setOrders((prev) => prev.filter((o) => o._id !== orderId));
          Swal.fire("Cancelled!", "Your order has been cancelled.", "success");
        } else {
          Swal.fire("Error!", "Failed to cancel order.", "error");
        }
      } catch (err) {
        console.log(err);
        Swal.fire("Error!", "Failed to cancel order.", "error");
      }
    }
  };

  const handlePayNow = (orderId) => {
    window.location.href = `/dashboard/payment/${orderId}`;
  };

  return (
    <div className="p-5 rounded shadow bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-5">My Orders</h1>
       <p className=" font-bold mb-5">This page is for all (users, admins, librarians).<br/>Everyone can order books. </p>

      {/* TABLE (Hidden on mobile, visible from md and above) */}
      <div className="overflow-x-auto hidden md:block">
        <table className="min-w-full border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-700 dark:text-white">
            <tr>
              <th className="p-3 border">#</th>
              <th className="p-3 border">Book Title</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Order Date</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="text-center p-5 text-gray-500 dark:text-gray-300"
                >
                  No orders found.
                </td>
              </tr>
            )}
            {orders.map((order, index) => (
              <tr key={order._id} className="text-center">
                <td className="p-3 border">{index + 1}</td>
                <td className="p-3 border">{order.bookTitle}</td>
                <td className="p-3 border">
                  {order.price ? `${order.price} ৳` : "N/A"}
                </td>
                <td className="p-3 border">
                  {order.orderDate
                    ? new Date(order.orderDate).toLocaleDateString()
                    : "N/A"}
                </td>
                <td className="p-3 border">{order.status}</td>
                <td className="p-3 border flex justify-center gap-2">
                  {order.status === "pending" ? (
                    <>
                      <button
                        className="px-3 py-1 rounded text-white bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
                        onClick={() => handleCancel(order._id)}
                      >
                        Cancel
                      </button>
                      <button
                        className="px-3 py-1 rounded text-white bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
                        onClick={() => handlePayNow(order._id)}
                      >
                        Pay Now
                      </button>
                    </>
                  ) : (
                    <span>-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARD VIEW (Visible only on small devices) */}
      <div className="md:hidden space-y-4">
        {orders.map((order, index) => (
          <div
            key={order._id}
            className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-700 shadow"
          >
            <div className="flex justify-between mb-2">
              <span className="font-bold">Order #{index + 1}</span>
              <span className="text-sm">{order.status}</span>
            </div>

            <p className="text-sm mb-1">
              <strong>Book:</strong> {order.bookTitle}
            </p>

            <p className="text-sm mb-1">
              <strong>Price:</strong> {order.price ? `${order.price} ৳` : "N/A"}
            </p>

            <p className="text-sm mb-2">
              <strong>Date:</strong>{" "}
              {order.orderDate
                ? new Date(order.orderDate).toLocaleDateString()
                : "N/A"}
            </p>

            {order.status === "pending" ? (
              <div className="flex flex-col gap-2 mt-3">
                <button
                  className="px-3 py-2 rounded text-white bg-red-500 hover:bg-red-600"
                  onClick={() => handleCancel(order._id)}
                >
                  Cancel
                </button>
                <button
                  className="px-3 py-2 rounded text-white bg-green-500 hover:bg-green-600"
                  onClick={() => handlePayNow(order._id)}
                >
                  Pay Now
                </button>
              </div>
            ) : (
              <p className="text-center text-gray-400 dark:text-gray-300 mt-2">
                -
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
