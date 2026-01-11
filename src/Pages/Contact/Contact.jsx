import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Check if any field is empty
    if (!name || !email || !message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
      });
      return;
    }

    // If all fields are filled
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting us.",
    });

    // Clear the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex items-center justify-center">
      <div className="max-w-6xl w-full p-6">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <form className="max-w-lg space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-2 bg-white dark:bg-gray-800 dark:border-gray-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-2 bg-white dark:bg-gray-800 dark:border-gray-700"
          />

          <textarea
            rows="4"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded p-2 bg-white dark:bg-gray-800 dark:border-gray-700"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
