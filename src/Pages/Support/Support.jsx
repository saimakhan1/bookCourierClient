// const Support = () => {
//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
//       <div className="max-w-6xl mx-auto p-6">
//         <h1 className="text-3xl font-bold mb-6">Help & Support</h1>

//         <div className="space-y-4">
//           <div className="border rounded p-4 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//             <h3 className="font-semibold">
//               How do I cancel an order?
//             </h3>
//             <p>
//               You can cancel an order from the My Orders page if the status is
//               pending.
//             </p>
//           </div>

//           <div className="border rounded p-4 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//             <h3 className="font-semibold">
//               How long does delivery take?
//             </h3>
//             <p>
//               Delivery usually takes 2–5 working days depending on your
//               location.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Support;

import React, { useState } from "react";

const Support = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      icon: "📦",
      question: "How do I cancel an order?",
      answer:
        "You can cancel an order from the My Orders page if the status is pending. Once an order has been processed or dispatched, cancellation may no longer be available.",
    },
    {
      id: 2,
      icon: "🚚",
      question: "How long does delivery take?",
      answer:
        "Delivery usually takes 2–5 working days depending on your location, availability of the requested book, and delivery conditions.",
    },
    {
      id: 3,
      icon: "📚",
      question: "How can I find a book?",
      answer:
        "You can browse the available books from the Books section. Use the search and filtering options to find books by title, author, category, or other available information.",
    },
    {
      id: 4,
      icon: "🔐",
      question: "I cannot access my account. What should I do?",
      answer:
        "First, make sure you are using the correct login information. If the problem continues, contact our support team and provide details about the issue so we can help.",
    },
    {
      id: 5,
      icon: "🏠",
      question: "Can books be delivered to my home?",
      answer:
        "Yes. BookCourier is designed to make borrowing more convenient by allowing eligible books to be delivered to your provided delivery address.",
    },
    {
      id: 6,
      icon: "💡",
      question: "How can I report a problem or suggest an improvement?",
      answer:
        "You can use our Contact Us page to send a message. We welcome feedback, suggestions, and reports that can help us improve the BookCourier experience.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* ===================================================== */}
      {/* ===================== HERO SECTION ================== */}
      {/* ===================================================== */}

      <section className="bg-primary/10 dark:bg-gray-700 border-b border-primary/10 dark:border-gray-600 py-16 md:py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Hero Text */}
            <div className="md:col-span-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-600 text-primary dark:text-blue-300 px-4 py-2 rounded-full shadow-sm font-medium mb-5">
                <span>🛟</span>
                <span>BookCourier Support Center</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                How Can We{" "}
                <span className="text-primary dark:text-blue-300">
                  Help You?
                </span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-200 leading-8 max-w-2xl">
                Find answers to common questions about books, orders, delivery,
                accounts, and using the BookCourier platform.
              </p>

              {/* Quick Support Points */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-7">
                <div className="flex items-center gap-2 bg-white dark:bg-gray-600 px-4 py-2 rounded-full shadow-sm">
                  <span>📚</span>
                  <span className="text-sm font-medium">Book Assistance</span>
                </div>

                <div className="flex items-center gap-2 bg-white dark:bg-gray-600 px-4 py-2 rounded-full shadow-sm">
                  <span>🚚</span>
                  <span className="text-sm font-medium">Delivery Help</span>
                </div>

                <div className="flex items-center gap-2 bg-white dark:bg-gray-600 px-4 py-2 rounded-full shadow-sm">
                  <span>🔐</span>
                  <span className="text-sm font-medium">Account Support</span>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-64 h-64">
                {/* Decorative Background */}
                <div className="absolute inset-5 rounded-full bg-blue-400/20 dark:bg-blue-400/10 blur-2xl"></div>

                <div className="absolute -top-3 right-0 w-16 h-16 rounded-full bg-purple-400/20 dark:bg-purple-400/10"></div>

                <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-orange-400/20 dark:bg-orange-400/10"></div>

                {/* Main Support Card */}
                <div className="absolute inset-5 bg-white dark:bg-gray-600 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-500 flex flex-col items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-primary/10 dark:bg-gray-500 flex items-center justify-center mb-4">
                    <span className="text-6xl">🛟</span>
                  </div>

                  <h3 className="font-bold text-lg">We're Here to Help</h3>

                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                    Support when you need it
                  </p>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-4 left-0 w-12 h-12 bg-white dark:bg-gray-500 rounded-xl shadow-lg flex items-center justify-center text-xl">
                  💬
                </div>

                <div className="absolute top-7 right-0 w-12 h-12 bg-white dark:bg-gray-500 rounded-xl shadow-lg flex items-center justify-center text-xl">
                  📦
                </div>

                <div className="absolute bottom-6 left-0 w-12 h-12 bg-white dark:bg-gray-500 rounded-xl shadow-lg flex items-center justify-center text-xl">
                  📚
                </div>

                <div className="absolute bottom-2 right-0 w-12 h-12 bg-white dark:bg-gray-500 rounded-xl shadow-lg flex items-center justify-center text-xl">
                  ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ================= QUICK HELP SECTION ================= */}
      {/* ===================================================== */}

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
            Quick Help
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What Do You Need Help With?
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-200 leading-7">
            Choose a topic below or browse the frequently asked questions to
            find the information you need.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Orders */}
          <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 dark:bg-gray-600 flex items-center justify-center text-3xl mb-4">
              📦
            </div>

            <h3 className="font-bold text-lg mb-2">Orders</h3>

            <p className="text-sm text-gray-600 dark:text-gray-200 leading-6">
              Manage, track, or cancel your book orders.
            </p>
          </div>

          {/* Delivery */}
          <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 dark:bg-gray-600 flex items-center justify-center text-3xl mb-4">
              🚚
            </div>

            <h3 className="font-bold text-lg mb-2">Delivery</h3>

            <p className="text-sm text-gray-600 dark:text-gray-200 leading-6">
              Learn about delivery times and requirements.
            </p>
          </div>

          {/* Account */}
          <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 dark:bg-gray-600 flex items-center justify-center text-3xl mb-4">
              👤
            </div>

            <h3 className="font-bold text-lg mb-2">Account</h3>

            <p className="text-sm text-gray-600 dark:text-gray-200 leading-6">
              Get help with your profile and account access.
            </p>
          </div>

          {/* Books */}
          <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 dark:bg-gray-600 flex items-center justify-center text-3xl mb-4">
              📚
            </div>

            <h3 className="font-bold text-lg mb-2">Books</h3>

            <p className="text-sm text-gray-600 dark:text-gray-200 leading-6">
              Find books and learn about borrowing options.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ===================== FAQ SECTION =================== */}
      {/* ===================================================== */}

      <section className="bg-primary/10 dark:bg-gray-700 border-y border-primary/10 dark:border-gray-600 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
              Frequently Asked Questions
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Common Questions
            </h2>

            <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-200">
              Here are answers to some of the questions BookCourier users
              commonly ask.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center gap-4 p-5 md:p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors"
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 dark:bg-gray-500 flex items-center justify-center text-xl">
                    {faq.icon}
                  </div>

                  <span className="flex-1 font-semibold text-base md:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`text-xl transition-transform duration-300 ${
                      openFaq === faq.id ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {/* Answer */}
                {openFaq === faq.id && (
                  <div className="px-5 md:px-6 pb-6">
                    <div className="border-t border-gray-200 dark:border-gray-500 pt-5 ml-0 md:ml-15">
                      <p className="text-gray-600 dark:text-gray-200 leading-7">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ================= SUPPORT TIPS SECTION ============== */}
      {/* ===================================================== */}

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Tip 1 */}
          <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6">
            <div className="text-3xl mb-4">📝</div>

            <h3 className="font-bold text-lg mb-2">Describe the Problem</h3>

            <p className="text-gray-600 dark:text-gray-200 leading-6">
              When contacting support, provide a clear description of the
              problem so we can understand what happened.
            </p>
          </div>

          {/* Tip 2 */}
          <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6">
            <div className="text-3xl mb-4">📦</div>

            <h3 className="font-bold text-lg mb-2">Keep Order Details</h3>

            <p className="text-gray-600 dark:text-gray-200 leading-6">
              If your question is about an order, keep the relevant order
              information available when contacting support.
            </p>
          </div>

          {/* Tip 3 */}
          <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6">
            <div className="text-3xl mb-4">💬</div>

            <h3 className="font-bold text-lg mb-2">Share Feedback</h3>

            <p className="text-gray-600 dark:text-gray-200 leading-6">
              Your suggestions help us improve BookCourier and create a better
              experience for readers.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ===================== CONTACT CTA ================== */}
      {/* ===================================================== */}

      <section className="bg-primary/10 dark:bg-gray-700 border-t border-primary/10 dark:border-gray-600 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-white dark:bg-gray-600 flex items-center justify-center text-4xl shadow-sm mb-6">
            💬
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Need Help?
          </h2>

          <p className="text-gray-600 dark:text-gray-200 leading-7 max-w-xl mx-auto mb-7">
            Can't find the answer you're looking for? Send us a message and
            we'll be happy to help with your BookCourier questions.
          </p>

          <a href="/contact" className="btn btn-primary px-8">
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
};

export default Support;
