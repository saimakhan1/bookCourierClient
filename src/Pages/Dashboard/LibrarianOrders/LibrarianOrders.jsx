

import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const LibrarianOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://book-courier-server.vercel.app/librarian-orders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, [user]);

  const handleCancelOrder = async (orderId) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel this order!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await fetch(
          `https://book-courier-server.vercel.app/orders/${orderId}`,
          {
            method: "DELETE",
          }
        );

        if (res.ok) {
          setOrders((prev) => prev.filter((o) => o._id !== orderId));
          Swal.fire("Cancelled!", "The order has been cancelled.", "success");
        } else {
          Swal.fire("Error", "Failed to cancel the order.", "error");
        }
      } catch (err) {
        console.log(err);
        Swal.fire("Error", "Something went wrong.", "error");
      }
    }
  };

  const handleChangeStatus = async (orderId, newStatus) => {
    try {
      const res = await fetch(
        `https://book-courier-server.vercel.app/orders/status/${orderId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (res.ok) {
        setOrders((prev) =>
          prev.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
        Swal.fire("Success", "Order status updated.", "success");
      } else {
        Swal.fire("Error", "Failed to update status.", "error");
      }
    } catch (err) {
      console.log(err);
      Swal.fire("Error", "Something went wrong.", "error");
    }
  };

  // Updated for the paid status ***
  const statusFlow = {
    pending: "shipped",
    paid: "shipped",
    shipped: "delivered",
    delivered: "delivered",
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h2 className="text-3xl font-bold mb-5 text-gray-900 dark:text-gray-100">
        Orders for My Books ({orders.length})
      </h2>
      <p className="font-bold">This page is mainly for the librarians. </p>

      {orders.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300 mt-10 text-lg">
          No one has ordered your books yet.
        </p>
      ) : (
        <>
          {/* TABLE VIEW */}
          <div className="overflow-x-auto hidden md:block">
            <table className="min-w-full border border-gray-200 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 border-b">Book</th>
                  <th className="px-4 py-2 border-b">Ordered By</th>
                  <th className="px-4 py-2 border-b">Email</th>
                  <th className="px-4 py-2 border-b">Price</th>
                  <th className="px-4 py-2 border-b">Phone</th>
                  <th className="px-4 py-2 border-b">Address</th>
                  <th className="px-4 py-2 border-b">Status</th>
                  <th className="px-4 py-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id} className="border-b">
                    <td className="px-4 py-2">{order.bookTitle}</td>
                    <td className="px-4 py-2">{order.userName}</td>
                    <td className="px-4 py-2">{order.userEmail}</td>
                    <td className="px-4 py-2">{order.price} BDT</td>
                    <td className="px-4 py-2">{order.phone}</td>
                    <td className="px-4 py-2">{order.address}</td>
                    <td className="px-4 py-2 capitalize">{order.status}</td>
                    <td className="px-4 py-2 flex gap-2">
                      {order.status !== "delivered" && (
                        <button
                          onClick={() =>
                            handleChangeStatus(
                              order._id,
                              statusFlow[order.status]
                            )
                          }
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                        >
                          Mark as {statusFlow[order.status]}
                        </button>
                      )}

                      <button
                        onClick={() => handleCancelOrder(order._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE VIEW */}
          <div className="md:hidden space-y-4">
            {orders.map((order) => (
              <div
                key={order._id}
                className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800"
              >
                <p className="font-bold text-lg">{order.bookTitle}</p>
                <p><strong>Ordered By:</strong> {order.userName}</p>
                <p><strong>Email:</strong> {order.userEmail}</p>
                <p><strong>Price:</strong> {order.price} BDT</p>
                <p><strong>Phone:</strong> {order.phone}</p>
                <p><strong>Address:</strong> {order.address}</p>
                <p className="capitalize"><strong>Status:</strong> {order.status}</p>

                <div className="flex flex-col gap-2 mt-3">
                  {order.status !== "delivered" && (
                    <button
                      onClick={() =>
                        handleChangeStatus(order._id, statusFlow[order.status])
                      }
                      className="bg-blue-500 text-white py-2 rounded"
                    >
                      Mark as {statusFlow[order.status]}
                    </button>
                  )}

                  <button
                    onClick={() => handleCancelOrder(order._id)}
                    className="bg-red-500 text-white py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LibrarianOrders;
