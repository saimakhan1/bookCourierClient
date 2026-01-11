import React, { useState } from "react";
import Swal from "sweetalert2";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Email Required",
        text: "Please enter a valid email address to subscribe.",
        confirmButtonColor: "#2563eb",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Subscribed Successfully!",
      text: "Thank you for subscribing. You’ll now receive updates on new books, offers, and reading tips.",
      confirmButtonColor: "#2563eb",
    });

    setEmail("");
  };

  return (
    <section className="py-20 bg-base-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">
          Subscribe to Our Newsletter
        </h2>

        <p className="text-base-content/70 dark:text-gray-300 mb-6">
          Get updates on new arrivals, exclusive discounts, and helpful reading tips.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" className="btn btn-primary px-6">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
