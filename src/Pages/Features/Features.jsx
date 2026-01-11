import React from "react";

const Features = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-base-content mb-4">
            Why Choose BookCourier?
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
            BookCourier is a modern book delivery platform designed for speed,
            security, and convenience — all in one place.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature Card */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="card-body">
              <h3 className="text-xl font-semibold text-base-content">
                🔐 Secure Authentication
              </h3>
              <p className="text-base-content/70">
                Safe and secure login system with protected routes and demo user
                access for quick exploration.
              </p>
            </div>
          </div>

          {/* Feature Card */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="card-body">
              <h3 className="text-xl font-semibold text-base-content">
                📚 Easy Book Discovery
              </h3>
              <p className="text-base-content/70">
                Browse a wide range of books with detailed information and smooth
                navigation.
              </p>
            </div>
          </div>

          {/* Feature Card */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="card-body">
              <h3 className="text-xl font-semibold text-base-content">
                🛒 Smooth Ordering
              </h3>
              <p className="text-base-content/70">
                Simple and user-friendly order process with login-based checkout
                protection.
              </p>
            </div>
          </div>

          {/* Feature Card */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="card-body">
              <h3 className="text-xl font-semibold text-base-content">
                🚚 Fast Delivery
              </h3>
              <p className="text-base-content/70">
                Reliable courier-based delivery system ensuring books reach you
                on time.
              </p>
            </div>
          </div>

          {/* Feature Card */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="card-body">
              <h3 className="text-xl font-semibold text-base-content">
                🌗 Light & Dark Mode
              </h3>
              <p className="text-base-content/70">
                Enjoy a seamless experience with fully functional light and dark
                themes.
              </p>
            </div>
          </div>

          {/* Feature Card */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="card-body">
              <h3 className="text-xl font-semibold text-base-content">
                ⚡ Modern Tech Stack
              </h3>
              <p className="text-base-content/70">
                Built using React, Firebase Authentication, Tailwind CSS, and
                DaisyUI for performance and scalability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
