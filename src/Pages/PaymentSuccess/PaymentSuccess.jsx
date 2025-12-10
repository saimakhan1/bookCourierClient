import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const notifyBackend = async () => {
      if (!sessionId) return;
      setLoading(true);
      try {
        const res = await fetch(
          `https://book-courier-server.vercel.app/payment-success?session_id=${sessionId}`,
          {
            method: "PATCH",
          }
        );
        const data = await res.json();
        if (res.ok) {
          setInfo(data);
        } else {
          console.error("Payment success backend returned error", data);
          setInfo({ error: data.message || "Failed to update payment" });
        }
      } catch (err) {
        console.error(err);
        setInfo({ error: "Network error" });
      } finally {
        setLoading(false);
      }
    };

    notifyBackend();
  }, [sessionId]);

  if (!sessionId) return <div>No session id provided.</div>;
  if (loading) return <div>Processing payment...</div>;
  if (!info) return <div>Unexpected error</div>;
  if (info.error) return <div>Error: {info.error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Payment successful</h2>
      <p className="mb-2">Transaction ID: {info.transactionId}</p>
      <p className="mb-2">Tracking ID: {info.trackingId}</p>
      <p className="mt-4">
        Thank you! Your order status is now set to <strong>paid</strong>.
      </p>
    </div>
  );
};

export default PaymentSuccess;
