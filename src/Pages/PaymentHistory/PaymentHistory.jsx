import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

const PaymentHistory = () => {
  const { user } = useAuth();

  const {
    isLoading,
    data: payments = [],
    error,
  } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://book-courier-server.vercel.app/orders?email=${user.email}`
      );
      if (!res.ok) throw new Error("Failed to fetch payments");
      const orders = await res.json();
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

      {/* DESKTOP TABLE (md and up) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800">
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

      {/* MOBILE CARD VIEW (sm & below) */}
      <div className="md:hidden mt-4 space-y-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
        {payments.map((payment) => (
          <div
            key={payment._id}
            className="border rounded-lg p-4 shadow bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
          >
            <p className="text-sm">
              <span className="font-semibold">Payment ID:</span> <br />
              {payment.transactionId}
            </p>

            <p className="text-sm mt-2">
              <span className="font-semibold">Book Name:</span> <br />
              {payment.bookTitle}
            </p>

            <p className="text-sm mt-2">
              <span className="font-semibold">Amount:</span> <br />$
              {payment.price}
            </p>

            <p className="text-sm mt-2">
              <span className="font-semibold">Date:</span> <br />
              {new Date(payment.paidAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
