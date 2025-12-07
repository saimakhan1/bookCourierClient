// import React, { useEffect, useState } from "react";
// import useAuth from "../../hooks/useAuth";
// import Swal from "sweetalert2";

// const MyOrders = () => {
//   const { user } = useAuth();
//   const [orders, setOrders] = useState([]);

//   // Fetch user orders
//   useEffect(() => {
//     if (!user?.email) return;

//     fetch(`http://localhost:3000/orders?email=${user?.email}`)
//       .then((res) => res.json())
//       .then((data) => setOrders(data))
//       .catch((err) => console.log(err));
//   }, [user?.email]);

//   // Cancel order / Delete order
//   const handleCancel = async (orderId) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "Do you want to cancel this order? It will be removed.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, cancel it!",
//       cancelButtonText: "No, keep it",
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//     });

//     if (result.isConfirmed) {
//       try {
//         const res = await fetch(`http://localhost:3000/orders/${orderId}`, {
//           method: "DELETE",
//         });

//         if (res.ok) {
//           // Remove the order from state
//           setOrders((prev) => prev.filter((o) => o._id !== orderId));
//           Swal.fire("Cancelled!", "Your order has been cancelled.", "success");
//         } else {
//           Swal.fire("Error!", "Failed to cancel order.", "error");
//         }
//       } catch (err) {
//         console.log(err);
//         Swal.fire("Error!", "Failed to cancel order.", "error");
//       }
//     }
//   };

//   // Redirect to payment page
//   const handlePayNow = (orderId) => {
//     window.location.href = `/payment/${orderId}`;
//   };

//   return (
//     <div className="bg-white p-5 rounded shadow">
//       <h1 className="text-2xl font-bold mb-5">My Orders</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full border">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-3 border">Book Title</th>
//               <th className="p-3 border">Order Date</th>
//               <th className="p-3 border">Status</th>
//               <th className="p-3 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.length === 0 && (
//               <tr>
//                 <td colSpan="4" className="text-center p-5">
//                   No orders found.
//                 </td>
//               </tr>
//             )}
//             {orders.map((order) => (
//               <tr key={order._id} className="text-center">
//                 <td className="p-3 border">{order.bookTitle}</td>
//                 <td className="p-3 border">
//                   {order.orderDate
//                     ? new Date(order.orderDate).toLocaleDateString()
//                     : "N/A"}
//                 </td>
//                 <td className="p-3 border">{order.status}</td>
//                 <td className="p-3 border flex justify-center gap-2">
//                   {order.status === "pending" && (
//                     <>
//                       <button
//                         onClick={() => handleCancel(order._id)}
//                         className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         onClick={() => handlePayNow(order._id)}
//                         className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
//                       >
//                         Pay Now
//                       </button>
//                     </>
//                   )}
//                   {order.status !== "pending" && <span>-</span>}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyOrders;

import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  // Fetch user orders
  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, [user?.email]);

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
        const res = await fetch(`http://localhost:3000/orders/${orderId}`, {
          method: "DELETE",
        });

        if (res.ok) {
          // Remove the order from state
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

  // Redirect to payment page
  const handlePayNow = (orderId) => {
    window.location.href = `/payment/${orderId}`;
  };

  return (
    <div className="bg-white p-5 rounded shadow">
      <h1 className="text-2xl font-bold mb-5">My Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Book Title</th>

              {/* 📌 PRICE ADDED */}
              <th className="p-3 border">Price</th>

              <th className="p-3 border">Order Date</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-5">
                  No orders found.
                </td>
              </tr>
            )}

            {orders.map((order) => (
              <tr key={order._id} className="text-center">
                <td className="p-3 border">{order.bookTitle}</td>

                {/* 📌 SHOW PRICE COMING FROM DATABASE */}
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
                  {order.status === "pending" && (
                    <>
                      <button
                        onClick={() => handleCancel(order._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={() => handlePayNow(order._id)}
                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        Pay Now
                      </button>
                    </>
                  )}

                  {order.status !== "pending" && <span>-</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
