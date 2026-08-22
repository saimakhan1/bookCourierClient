// const Privacy = () => {
//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
//       <div className="max-w-5xl mx-auto p-6">
//         <h1 className="text-3xl font-bold mb-4">Privacy Policy & Terms</h1>

//         <p className="mb-4">
//           BookCourier respects your privacy. We collect user information only to
//           provide delivery services and improve user experience.
//         </p>

//         <h2 className="text-xl font-semibold mt-6 mb-2">
//           Information We Collect
//         </h2>
//         <p>Email, name, address, and order history.</p>

//         <h2 className="text-xl font-semibold mt-6 mb-2">
//           User Responsibility
//         </h2>
//         <p>
//           Users must provide accurate information during ordering and profile
//           updates.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Privacy;

import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* ===================================================== */}
      {/* ===================== HERO SECTION ================== */}
      {/* ===================================================== */}

      <section className="bg-primary/10 dark:bg-gray-700 border-b border-primary/10 dark:border-gray-600 py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Hero Text */}
            <div className="md:col-span-3">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-600 text-primary dark:text-blue-300 px-4 py-2 rounded-full shadow-sm font-medium mb-5">
                <span>🔐</span>
                <span>Your Privacy Matters</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                Privacy Policy &{" "}
                <span className="text-primary dark:text-blue-300">Terms</span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-200 leading-8 max-w-2xl">
                We believe that using BookCourier should be simple, convenient,
                and transparent. This page explains what information we collect,
                how we use it, and the responsibilities of our users.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                <div className="flex items-center gap-2 bg-white dark:bg-gray-600 px-4 py-2 rounded-full shadow-sm">
                  🛡️
                  <span className="text-sm font-medium">Privacy Focused</span>
                </div>

                <div className="flex items-center gap-2 bg-white dark:bg-gray-600 px-4 py-2 rounded-full shadow-sm">
                  📋
                  <span className="text-sm font-medium">
                    Transparent Policies
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-white dark:bg-gray-600 px-4 py-2 rounded-full shadow-sm">
                  🤝
                  <span className="text-sm font-medium">User First</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-64 h-64">
                {/* Decorative Circles */}
                <div className="absolute inset-4 rounded-full bg-blue-400/20 dark:bg-blue-400/10 blur-2xl"></div>

                <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-purple-400/20 dark:bg-purple-400/10"></div>

                <div className="absolute -bottom-3 -left-2 w-20 h-20 rounded-full bg-orange-400/20 dark:bg-orange-400/10"></div>

                {/* Main Card */}
                <div className="absolute inset-5 bg-white dark:bg-gray-600 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-500 flex flex-col items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-primary/10 dark:bg-gray-500 flex items-center justify-center mb-4">
                    <span className="text-6xl">🔐</span>
                  </div>

                  <p className="font-bold text-lg">Your Data</p>

                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Deserves Protection
                  </p>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-5 left-0 w-12 h-12 bg-white dark:bg-gray-500 rounded-xl shadow-lg flex items-center justify-center text-xl">
                  🛡️
                </div>

                <div className="absolute top-8 right-0 w-12 h-12 bg-white dark:bg-gray-500 rounded-xl shadow-lg flex items-center justify-center text-xl">
                  🔒
                </div>

                <div className="absolute bottom-5 left-0 w-12 h-12 bg-white dark:bg-gray-500 rounded-xl shadow-lg flex items-center justify-center text-xl">
                  📋
                </div>

                <div className="absolute bottom-3 right-0 w-12 h-12 bg-white dark:bg-gray-500 rounded-xl shadow-lg flex items-center justify-center text-xl">
                  ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ===================== MAIN CONTENT ================= */}
      {/* ===================================================== */}

      <main className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        {/* Last Updated */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 mb-10">
          <span>📅</span>
          <span>Last updated: January 2026</span>
        </div>

        {/* ================= OVERVIEW ================= */}

        <section className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-3xl p-7 md:p-9 shadow-sm mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 dark:bg-gray-600 flex items-center justify-center text-2xl">
              👋
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">
                Welcome to BookCourier
              </h2>

              <p className="text-gray-600 dark:text-gray-200 leading-7">
                BookCourier is a library-to-home delivery platform designed to
                make borrowing books more convenient. We respect your privacy
                and aim to be transparent about how information is handled while
                you use our platform.
              </p>
            </div>
          </div>
        </section>

        {/* ================= INFORMATION WE COLLECT ================= */}

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-gray-700 flex items-center justify-center text-xl">
              📋
            </div>

            <h2 className="text-2xl md:text-3xl font-bold">
              Information We Collect
            </h2>
          </div>

          <p className="text-gray-600 dark:text-gray-200 leading-7 mb-6">
            To provide BookCourier services effectively, we may collect
            information that you provide while creating an account, updating
            your profile, or placing an order.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {/* Personal Information */}
            <div className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6">
              <div className="text-3xl mb-4">👤</div>

              <h3 className="font-bold text-lg mb-2">Personal Information</h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                This may include your name, email address, contact information,
                and delivery address.
              </p>
            </div>

            {/* Order Information */}
            <div className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6">
              <div className="text-3xl mb-4">📦</div>

              <h3 className="font-bold text-lg mb-2">Order Information</h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                We may keep information related to your book orders, borrowing
                activity, and delivery requests.
              </p>
            </div>
          </div>
        </section>

        {/* ================= HOW INFORMATION IS USED ================= */}

        <section className="bg-primary/10 dark:bg-gray-700 border border-primary/10 dark:border-gray-600 rounded-3xl p-7 md:p-9 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-600 flex items-center justify-center text-2xl shadow-sm">
              ⚙️
            </div>

            <h2 className="text-2xl md:text-3xl font-bold">
              How We Use Your Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white dark:bg-gray-600 rounded-2xl p-5">
              <h3 className="font-bold mb-2">📚 Book Services</h3>
              <p className="text-gray-600 dark:text-gray-200 leading-6">
                To help you browse, request, borrow, and receive books.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-600 rounded-2xl p-5">
              <h3 className="font-bold mb-2">🚚 Delivery</h3>
              <p className="text-gray-600 dark:text-gray-200 leading-6">
                To process delivery requests and provide relevant delivery
                information.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-600 rounded-2xl p-5">
              <h3 className="font-bold mb-2">💬 Communication</h3>
              <p className="text-gray-600 dark:text-gray-200 leading-6">
                To respond to questions, feedback, and support requests.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-600 rounded-2xl p-5">
              <h3 className="font-bold mb-2">✨ Improvements</h3>
              <p className="text-gray-600 dark:text-gray-200 leading-6">
                To understand how users interact with BookCourier and improve
                the platform.
              </p>
            </div>
          </div>
        </section>

        {/* ================= DATA SECURITY ================= */}

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-gray-700 flex items-center justify-center text-xl">
              🛡️
            </div>

            <h2 className="text-2xl md:text-3xl font-bold">Data Security</h2>
          </div>

          <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 md:p-7">
            <p className="text-gray-600 dark:text-gray-200 leading-7">
              We take reasonable measures to protect information associated with
              your BookCourier account and orders. However, no online service
              can guarantee absolute security. Users should also take
              appropriate steps to protect their account credentials and
              personal information.
            </p>
          </div>
        </section>

        {/* ================= USER RESPONSIBILITY ================= */}

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-gray-700 flex items-center justify-center text-xl">
              👤
            </div>

            <h2 className="text-2xl md:text-3xl font-bold">
              User Responsibility
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6">
              <div className="text-2xl mb-3">✓</div>

              <h3 className="font-bold text-lg mb-2">
                Provide Accurate Information
              </h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Users should provide accurate and up-to-date information when
                creating an account, updating their profile, or placing an
                order.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6">
              <div className="text-2xl mb-3">🔑</div>

              <h3 className="font-bold text-lg mb-2">Protect Your Account</h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Users are responsible for keeping their login information secure
                and should avoid sharing account credentials with others.
              </p>
            </div>
          </div>
        </section>

        {/* ================= DELIVERY & ORDERS ================= */}

        <section className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-3xl p-7 md:p-9 mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-600 flex items-center justify-center text-2xl shadow-sm">
              🚚
            </div>

            <h2 className="text-2xl md:text-3xl font-bold">
              Orders & Delivery
            </h2>
          </div>

          <p className="text-gray-600 dark:text-gray-200 leading-7">
            When placing a book delivery request, users should ensure that their
            delivery details are correct. Incorrect or incomplete information
            may affect the successful delivery of an order. Users should also
            follow any borrowing, return, or delivery instructions provided by
            the library or BookCourier.
          </p>
        </section>

        {/* ================= COOKIES ================= */}

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-gray-700 flex items-center justify-center text-xl">
              🍪
            </div>

            <h2 className="text-2xl md:text-3xl font-bold">
              Cookies & Local Storage
            </h2>
          </div>

          <p className="text-gray-600 dark:text-gray-200 leading-7">
            BookCourier may use browser technologies such as cookies or local
            storage to support features such as authentication, preferences, and
            a smoother user experience. These technologies help the application
            remember relevant information during your use of the platform.
          </p>
        </section>

        {/* ================= TERMS OF USE ================= */}

        <section className="bg-primary/10 dark:bg-gray-700 border border-primary/10 dark:border-gray-600 rounded-3xl p-7 md:p-9 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-600 flex items-center justify-center text-2xl shadow-sm">
              📜
            </div>

            <h2 className="text-2xl md:text-3xl font-bold">Terms of Use</h2>
          </div>

          <div className="space-y-5">
            <div className="flex gap-4">
              <span className="text-primary dark:text-blue-300 text-xl">✓</span>

              <p className="text-gray-600 dark:text-gray-200 leading-7">
                Users should use BookCourier only for legitimate book browsing,
                borrowing, and delivery purposes.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="text-primary dark:text-blue-300 text-xl">✓</span>

              <p className="text-gray-600 dark:text-gray-200 leading-7">
                Users should not intentionally provide false information or
                misuse the platform.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="text-primary dark:text-blue-300 text-xl">✓</span>

              <p className="text-gray-600 dark:text-gray-200 leading-7">
                Users should respect applicable library borrowing and return
                policies.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="text-primary dark:text-blue-300 text-xl">✓</span>

              <p className="text-gray-600 dark:text-gray-200 leading-7">
                Continued use of BookCourier indicates acceptance of the
                applicable platform policies and terms.
              </p>
            </div>
          </div>
        </section>

        {/* ================= POLICY CHANGES ================= */}

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-gray-700 flex items-center justify-center text-xl">
              🔄
            </div>

            <h2 className="text-2xl md:text-3xl font-bold">
              Changes to This Policy
            </h2>
          </div>

          <p className="text-gray-600 dark:text-gray-200 leading-7">
            BookCourier may update this Privacy Policy and Terms from time to
            time as the platform develops. Any significant changes will be
            reflected on this page so that users can stay informed about how the
            platform handles information and services.
          </p>
        </section>

        {/* ================= CONTACT CTA ================= */}

        <section className="bg-primary/10 dark:bg-gray-700 border border-primary/10 dark:border-gray-600 rounded-3xl p-8 md:p-10 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-white dark:bg-gray-600 flex items-center justify-center text-3xl shadow-sm mb-5">
            💬
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Have Questions About Our Policy?
          </h2>

          <p className="text-gray-600 dark:text-gray-200 max-w-2xl mx-auto leading-7 mb-6">
            If you have questions about privacy, your information, or
            BookCourier's terms, feel free to contact us.
          </p>

          <a href="/contact" className="btn btn-primary">
            Contact Us
          </a>
        </section>
      </main>
    </div>
  );
};

export default Privacy;
