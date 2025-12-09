// import React, { useEffect, useState } from "react";
// import useAuth from "../../hooks/useAuth";
// import Swal from "sweetalert2";
// import axios from "axios";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

// const MyOrders = () => {
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure(); // <-- use this
//   const [orders, setOrders] = useState([]);

//   // Fetch user orders
//   // useEffect(() => {
//   //   if (!user?.email) return;

//   //   fetch(`http://localhost:3000/orders?email=${user?.email}`)
//   //     .then((res) => res.json())
//   //     .then((data) => setOrders(data))
//   //     .catch((err) => console.log(err));
//   // }, [user?.email]);

//   useEffect(() => {
//     if (!user?.email) return;

//     axios
//       .get("http://localhost:3000/orders", { params: { email: user.email } })
//       .then((response) => {
//         setOrders(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [user?.email, axiosSecure]);

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
//     // window.location.href = `/payment/${orderId}`;
//     window.location.href = `/dashboard/payment/${orderId}`;
//   };

//   return (
//     <div className="bg-white p-5 rounded shadow">
//       <h1 className="text-2xl font-bold mb-5">My Orders</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full border">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-3 border">#</th> {/* Serial number column */}
//               <th className="p-3 border">Book Title</th>
//               <th className="p-3 border">Price</th>
//               <th className="p-3 border">Order Date</th>
//               <th className="p-3 border">Status</th>
//               <th className="p-3 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.length === 0 && (
//               <tr>
//                 <td colSpan="6" className="text-center p-5">
//                   No orders found.
//                 </td>
//               </tr>
//             )}

//             {orders.map((order, index) => (
//               <tr key={order._id} className="text-center">
//                 <td className="p-3 border">{index + 1}</td>{" "}
//                 {/* Serial number */}
//                 <td className="p-3 border">{order.bookTitle}</td>
//                 <td className="p-3 border">
//                   {order.price ? `${order.price} ৳` : "N/A"}
//                 </td>
//                 <td className="p-3 border">
//                   {order.orderDate
//                     ? new Date(order.orderDate).toLocaleDateString()
//                     : "N/A"}
//                 </td>
//                 <td className="p-3 border">{order.status}</td>
//                 <td className="p-3 border flex justify-center gap-2">
//                   {order.status === "pending" ? (
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
//                   ) : (
//                     <span>-</span>
//                   )}
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
import useTheme from "../../hooks/useTheme";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { theme } = useTheme(); // <-- Added theme
  const [orders, setOrders] = useState([]);

  // Fetch user orders
  useEffect(() => {
    if (!user?.email) return;

    axios
      .get("http://localhost:3000/orders", { params: { email: user.email } })
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
        const res = await fetch(`http://localhost:3000/orders/${orderId}`, {
          method: "DELETE",
        });

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
    <div
      className={`p-5 rounded shadow ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-2xl font-bold mb-5">My Orders</h1>
      <div className="overflow-x-auto">
        <table
          className={`min-w-full border ${
            theme === "dark" ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <thead
            className={`${
              theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-100"
            }`}
          >
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
                  className={`text-center p-5 ${
                    theme === "dark" ? "text-gray-300" : ""
                  }`}
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
                        onClick={() => handleCancel(order._id)}
                        className={`px-3 py-1 rounded text-white ${
                          theme === "dark"
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-red-500 hover:bg-red-600"
                        }`}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handlePayNow(order._id)}
                        className={`px-3 py-1 rounded text-white ${
                          theme === "dark"
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-green-500 hover:bg-green-600"
                        }`}
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
    </div>
  );
};

export default MyOrders;
