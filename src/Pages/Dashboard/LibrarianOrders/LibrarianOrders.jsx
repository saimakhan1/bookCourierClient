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
//       <h2 className="text-3xl font-bold mb-5">
//         Orders for My Books ({orders.length})
//       </h2>

//       {orders.length === 0 ? (
//         <p className="text-gray-600 mt-10 text-lg">
//           No one has ordered your books yet.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//           {orders.map((order) => (
//             <div
//               key={order._id}
//               className="border p-4 rounded-lg shadow bg-white"
//             >
//               <h3 className="text-xl font-bold">{order.bookTitle}</h3>

//               <p className="text-gray-700 mt-1">
//                 <strong>Ordered by:</strong> {order.userName}
//               </p>

//               <p className="text-gray-700">
//                 <strong>Email:</strong> {order.userEmail}
//               </p>

//               <p className="text-gray-700">
//                 <strong>Price:</strong> {order.price} BDT
//               </p>

//               <p className="text-gray-700">
//                 <strong>Phone:</strong> {order.phone}
//               </p>

//               <p className="text-gray-700">
//                 <strong>Address:</strong> {order.address}
//               </p>

//               <p className="text-gray-700">
//                 <strong>Status:</strong>{" "}
//                 <span className="capitalize">{order.status}</span>
//               </p>

//               <p className="text-gray-500 mt-2 text-sm">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow bg-white dark:bg-gray-800"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {order.bookTitle}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mt-1">
                <strong>Ordered by:</strong> {order.userName}
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                <strong>Email:</strong> {order.userEmail}
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                <strong>Price:</strong> {order.price} BDT
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                <strong>Phone:</strong> {order.phone}
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                <strong>Address:</strong> {order.address}
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                <strong>Status:</strong>{" "}
                <span className="capitalize">{order.status}</span>
              </p>

              <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                <strong>Order Date:</strong>{" "}
                {new Date(order.orderDate).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LibrarianOrders;
