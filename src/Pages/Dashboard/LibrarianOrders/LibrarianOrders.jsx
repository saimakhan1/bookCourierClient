// import React, { useEffect, useState } from "react";
// import useAuth from "../../../hooks/useAuth";

// const LibrarianOrders = () => {
//   const { user } = useAuth();
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     if (!user?.email) return;

//     fetch(`http://localhost:3000/librarian-orders?email=${user.email}`)
//       .then((res) => res.json())
//       .then((data) => setOrders(data))
//       .catch((err) => console.log(err));
//   }, [user]);

//   return (
//     <div className="max-w-6xl mx-auto p-5">
//       <h2 className="text-3xl font-bold mb-5 text-gray-900 dark:text-gray-100">
//         Orders for My Books ({orders.length})
//       </h2>

//       {orders.length === 0 ? (
//         <p className="text-gray-600 dark:text-gray-300 mt-10 text-lg">
//           No one has ordered your books yet.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//           {orders.map((order) => (
//             <div
//               key={order._id}
//               className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow bg-white dark:bg-gray-800"
//             >
//               <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
//                 {order.bookTitle}
//               </h3>

//               <p className="text-gray-700 dark:text-gray-300 mt-1">
//                 <strong>Ordered by:</strong> {order.userName}
//               </p>

//               <p className="text-gray-700 dark:text-gray-300">
//                 <strong>Email:</strong> {order.userEmail}
//               </p>

//               <p className="text-gray-700 dark:text-gray-300">
//                 <strong>Price:</strong> {order.price} BDT
//               </p>

//               <p className="text-gray-700 dark:text-gray-300">
//                 <strong>Phone:</strong> {order.phone}
//               </p>

//               <p className="text-gray-700 dark:text-gray-300">
//                 <strong>Address:</strong> {order.address}
//               </p>

//               <p className="text-gray-700 dark:text-gray-300">
//                 <strong>Status:</strong>{" "}
//                 <span className="capitalize">{order.status}</span>
//               </p>

//               <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
//                 <strong>Order Date:</strong>{" "}
//                 {new Date(order.orderDate).toLocaleDateString()}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LibrarianOrders;

import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const LibrarianOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/librarian-orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, [user]);

  // Cancel order handler
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
        const res = await fetch(`http://localhost:3000/orders/${orderId}`, {
          method: "DELETE",
        });

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

  // Update status handler
  const handleChangeStatus = async (orderId, newStatus) => {
    try {
      const res = await fetch(
        `http://localhost:3000/orders/status/${orderId}`,
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

  // Status options
  const statusFlow = {
    pending: "shipped",
    shipped: "delivered",
    delivered: "delivered", // no further update
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h2 className="text-3xl font-bold mb-5 text-gray-900 dark:text-gray-100">
        Orders for My Books ({orders.length})
      </h2>

      {orders.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300 mt-10 text-lg">
          No one has ordered your books yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 dark:border-gray-700 text-left">
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
                <tr key={order._id} className="border-b dark:border-gray-700">
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
      )}
    </div>
  );
};

export default LibrarianOrders;
