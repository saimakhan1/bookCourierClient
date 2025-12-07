// src/Pages/PaymentHistory/PaymentHistory.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth"; // assuming you have a hook for user info

const PaymentHistory = () => {
  const { user } = useAuth(); // get current logged in user

  const {
    isLoading,
    data: payments = [],
    error,
  } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3000/orders?email=${user.email}`
      );
      if (!res.ok) throw new Error("Failed to fetch payments");
      const orders = await res.json();
      // filter only paid orders
      return orders.filter((order) => order.paymentStatus === "paid");
    },
    enabled: !!user?.email,
  });

  if (isLoading) return <div>Loading payments...</div>;
  if (error) return <div>Error loading payments: {error.message}</div>;
  if (payments.length === 0) return <div>No payments found.</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">My Payments</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Payment ID</th>
            <th className="border px-4 py-2">Book Name</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment._id}>
              <td className="border px-4 py-2">{payment.transactionId}</td>
              <td className="border px-4 py-2">{payment.bookTitle}</td>
              <td className="border px-4 py-2">${payment.price}</td>
              <td className="border px-4 py-2">
                {new Date(payment.paidAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
