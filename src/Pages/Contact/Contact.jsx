// import React, { useState } from "react";
// import Swal from "sweetalert2";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, email, message } = formData;

//     // Check if any field is empty
//     if (!name || !email || !message) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Please fill in all fields!",
//       });
//       return;
//     }

//     // If all fields are filled
//     Swal.fire({
//       icon: "success",
//       title: "Message Sent!",
//       text: "Thank you for contacting us.",
//     });

//     // Clear the form
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex items-center justify-center">
//       <div className="max-w-6xl w-full p-6">
//         <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

//         <form className="max-w-lg space-y-4" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border rounded p-2 bg-white dark:bg-gray-800 dark:border-gray-700"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border rounded p-2 bg-white dark:bg-gray-800 dark:border-gray-700"
//           />

//           <textarea
//             rows="4"
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full border rounded p-2 bg-white dark:bg-gray-800 dark:border-gray-700"
//           />

//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        confirmButtonColor: "#3b82f6",
      });
      return;
    }

    // If all fields are filled
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting us. We will get back to you soon.",
      confirmButtonColor: "#3b82f6",
    });

    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* ===================================================== */}
      {/* ==================== HERO SECTION =================== */}
      {/* ===================================================== */}

      <section className="bg-primary/10 dark:bg-gray-700 py-16 md:py-20 px-4 border-b border-primary/10 dark:border-gray-600 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* ================= HERO TEXT ================= */}

            <div className="md:col-span-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-600 text-primary dark:text-blue-300 px-4 py-2 rounded-full shadow-sm font-medium mb-5">
                <span>💬</span>
                <span>Get In Touch</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-800 dark:text-gray-100 leading-tight">
                We'd Love to{" "}
                <span className="text-primary dark:text-blue-300">
                  Hear From You
                </span>
              </h1>

              <p className="max-w-2xl mx-auto md:mx-0 text-lg text-gray-600 dark:text-gray-200 leading-8 mb-7">
                Have a question, suggestion, or need help with BookCourier?
                Whether you need assistance with books, borrowing, delivery, or
                simply want to share your feedback, we're here to help.
              </p>

              {/* Support Highlights */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <div className="flex items-center gap-2 bg-white dark:bg-gray-600 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-500">
                  <span className="text-lg">📚</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-100">
                    Book Support
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-white dark:bg-gray-600 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-500">
                  <span className="text-lg">💡</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-100">
                    Suggestions
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-white dark:bg-gray-600 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-500">
                  <span className="text-lg">🤝</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-100">
                    Quick Assistance
                  </span>
                </div>
              </div>
            </div>

            {/* ================= HERO VISUAL ================= */}

            <div className="md:col-span-2 relative flex justify-center">
              {/* Decorative Circles */}
              <div className="absolute w-64 h-64 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>

              <div className="absolute -top-8 -right-2 w-20 h-20 bg-purple-400/30 dark:bg-purple-400/10 rounded-full blur-xl"></div>

              <div className="absolute -bottom-8 -left-2 w-24 h-24 bg-orange-400/30 dark:bg-orange-400/10 rounded-full blur-xl"></div>

              {/* Main Illustration Card */}
              <div className="relative w-64 h-64 bg-white dark:bg-gray-600 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-500 flex items-center justify-center">
                {/* Main Icon Circle */}
                <div className="w-32 h-32 rounded-full bg-primary/10 dark:bg-gray-500 flex items-center justify-center">
                  <span className="text-7xl">💬</span>
                </div>

                {/* Email */}
                <div className="absolute -top-5 -left-5 w-14 h-14 bg-white dark:bg-gray-500 rounded-2xl shadow-lg flex items-center justify-center text-2xl border border-gray-100 dark:border-gray-400">
                  📧
                </div>

                {/* Phone */}
                <div className="absolute -top-4 -right-5 w-14 h-14 bg-white dark:bg-gray-500 rounded-2xl shadow-lg flex items-center justify-center text-2xl border border-gray-100 dark:border-gray-400">
                  📞
                </div>

                {/* Location */}
                <div className="absolute -bottom-5 -left-4 w-14 h-14 bg-white dark:bg-gray-500 rounded-2xl shadow-lg flex items-center justify-center text-2xl border border-gray-100 dark:border-gray-400">
                  📍
                </div>

                {/* Heart */}
                <div className="absolute -bottom-4 -right-5 w-14 h-14 bg-white dark:bg-gray-500 rounded-2xl shadow-lg flex items-center justify-center text-2xl border border-gray-100 dark:border-gray-400">
                  ❤️
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ================ MAIN CONTACT SECTION =============== */}
      {/* ===================================================== */}

      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* ================= CONTACT INFORMATION ================= */}

          <div className="lg:col-span-2">
            <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
              Let's Connect
            </span>

            <h2 className="text-3xl font-bold mt-3 mb-5 text-gray-800 dark:text-gray-100">
              We're here to help
            </h2>

            <p className="text-gray-600 dark:text-gray-200 leading-7 mb-8">
              Whether you have a question about borrowing a book, using our
              platform, or simply want to share some feedback, feel free to
              reach out to us.
            </p>

            {/* ================= CONTACT DETAILS ================= */}

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 dark:bg-gray-700 flex items-center justify-center text-xl">
                  📧
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-100">
                    Email
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    support@bookcourier.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 dark:bg-gray-700 flex items-center justify-center text-xl">
                  📞
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-100">
                    Phone
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    +880 1XXX-XXXXXX
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 dark:bg-gray-700 flex items-center justify-center text-xl">
                  📍
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-100">
                    Location
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* ================= INFO CARD ================= */}

            <div className="mt-8 bg-primary/10 dark:bg-gray-700 border border-primary/10 dark:border-gray-600 rounded-2xl p-6">
              <div className="flex gap-4">
                <span className="text-2xl">💡</span>

                <div>
                  <h3 className="font-bold mb-1 text-gray-800 dark:text-gray-100">
                    Have a suggestion?
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-200 leading-6">
                    Your feedback helps us improve BookCourier and make the
                    reading experience better for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}

          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-3xl p-6 md:p-9 shadow-sm">
              <div className="mb-7">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                  Send us a message
                </h2>

                <p className="text-gray-600 dark:text-gray-200">
                  Fill out the form below and let us know how we can help.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-semibold mb-2 text-gray-700 dark:text-gray-200"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-500 rounded-xl px-4 py-3 bg-gray-50 dark:bg-gray-600 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-semibold mb-2 text-gray-700 dark:text-gray-200"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-500 rounded-xl px-4 py-3 bg-gray-50 dark:bg-gray-600 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-semibold mb-2 text-gray-700 dark:text-gray-200"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    rows="6"
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-500 rounded-xl px-4 py-3 bg-gray-50 dark:bg-gray-600 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary w-full md:w-auto px-8"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ================= FAQ / HELP SECTION ================= */}
      {/* ===================================================== */}

      <section className="bg-primary/10 dark:bg-gray-700 border-y border-primary/10 dark:border-gray-600 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
              Need Help?
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800 dark:text-gray-100">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <div className="bg-white dark:bg-gray-600 rounded-2xl p-6 border border-gray-200 dark:border-gray-500">
              <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">
                How can I borrow a book?
              </h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Browse our available books, choose a book you are interested in,
                and follow the borrowing process provided on the platform.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white dark:bg-gray-600 rounded-2xl p-6 border border-gray-200 dark:border-gray-500">
              <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">
                Can I get books delivered to my home?
              </h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Yes. BookCourier is designed to make book borrowing more
                convenient by providing a home delivery service.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white dark:bg-gray-600 rounded-2xl p-6 border border-gray-200 dark:border-gray-500">
              <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">
                How can I suggest a book?
              </h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Send us a message through the contact form and let us know which
                book you would like to see available.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white dark:bg-gray-600 rounded-2xl p-6 border border-gray-200 dark:border-gray-500">
              <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">
                How can I report a problem?
              </h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Use the contact form above and provide as much information as
                possible so we can understand and address the issue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ==================== BOTTOM CTA ====================== */}
      {/* ===================================================== */}

      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 dark:bg-gray-700 flex items-center justify-center text-4xl mb-6">
            📚
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Keep Exploring Books
          </h2>

          <p className="text-gray-600 dark:text-gray-200 leading-7 mb-7">
            Discover new books, explore your interests, and make your reading
            journey more convenient with BookCourier.
          </p>

          <a href="/books" className="btn btn-primary">
            Explore Books
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
