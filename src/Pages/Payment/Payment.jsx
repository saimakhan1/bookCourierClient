// import React from "react";
// import { useParams } from "react-router";
// import { useQuery } from "@tanstack/react-query";

// const Payment = () => {
//   const { orderId } = useParams();

//   const {
//     isLoading,
//     data: order,
//     error,
//   } = useQuery({
//     queryKey: ["orders", orderId],
//     queryFn: async () => {
//       const res = await fetch(`http://localhost:3000/orders/${orderId}`);
//       if (!res.ok) throw new Error("Failed to fetch order");
//       return res.json();
//     },
//     enabled: !!orderId,
//   });

//   const handlePayment = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/create-checkout-session", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ orderId }),
//       });

//       const data = await res.json();
//       if (data?.url) {
//         // Redirect to Stripe Checkout
//         window.location.href = data.url;
//       } else {
//         alert("Failed to create checkout session");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Payment initiation failed");
//     }
//   };

//   if (isLoading) return <div>Loading order...</div>;
//   if (error) return <div>Error loading order</div>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">
//         Pay for: {order.bookTitle}
//       </h2>
//       <p className="mb-2">Amount: ${order.price}</p>
//       <p className="mb-4">Order Id: {order._id}</p>

//       <button onClick={handlePayment} className="btn btn-primary">
//         Pay ${order.price}
//       </button>
//     </div>
//   );
// };

// export default Payment;

import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

const Payment = () => {
  const { orderId } = useParams();

  const {
    isLoading,
    data: order,
    error,
  } = useQuery({
    queryKey: ["orders", orderId],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3000/orders/${orderId}`);
      if (!res.ok) throw new Error("Failed to fetch order");
      return res.json();
    },
    enabled: !!orderId,
  });

  const handlePayment = async () => {
    if (!order) return;

    try {
      const res = await fetch("http://localhost:3000/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: order._id,
          userEmail: order.userEmail, // must include email
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Backend error:", text);
        throw new Error("Failed to create checkout session");
      }

      const data = await res.json();

      if (data?.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        alert("Failed to create checkout session");
      }
    } catch (err) {
      console.error(err);
      alert("Payment initiation failed");
    }
  };

  if (isLoading) return <div>Loading order...</div>;
  if (error) return <div>Error loading order</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Pay for: {order.bookTitle}
      </h2>
      <p className="mb-2">Amount: ${order.price}</p>
      <p className="mb-4">Order Id: {order._id}</p>

      <button onClick={handlePayment} className="btn btn-primary">
        Pay ${order.price}
      </button>
    </div>
  );
};

export default Payment;
