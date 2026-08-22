// const About = () => {
//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
//       <div className="max-w-6xl mx-auto p-6">
//         <h1 className="text-3xl font-bold mb-4">About BookCourier</h1>

//         <p className="mb-4 leading-relaxed">
//           BookCourier is a library-to-home delivery system designed to help
//           students, researchers, and readers borrow books easily without
//           visiting libraries physically.
//         </p>

//         <h2 className="text-xl font-semibold mt-6 mb-2">Our Mission</h2>
//         <p>
//           Our mission is to make knowledge accessible and convenient by
//           connecting libraries and readers through a modern delivery platform.
//         </p>

//         <h2 className="text-xl font-semibold mt-6 mb-2">Who We Serve</h2>
//         <ul className="list-disc ml-6 space-y-1">
//           <li>University Students</li>
//           <li>Researchers</li>
//           <li>Book Lovers</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-primary/10 dark:bg-gray-700 py-16 md:py-20 px-4 border-b border-primary/10 dark:border-gray-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Hero Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-gray-600 text-primary dark:text-blue-300 px-4 py-2 rounded-full font-medium mb-5">
                <span>📚</span>
                <span>About BookCourier</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-800 dark:text-gray-100">
                Bringing Your Favorite Books{" "}
                <span className="text-primary dark:text-blue-300">
                  Closer to You
                </span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-200 leading-8 max-w-xl">
                BookCourier is a library-to-home delivery system designed to
                help students, researchers, and readers borrow books easily
                without visiting libraries physically.
              </p>
            </div>

            {/* Hero Illustration */}
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 dark:bg-gray-600 flex items-center justify-center">
                <div className="w-52 h-52 md:w-64 md:h-64 rounded-full bg-white dark:bg-gray-500 shadow-xl flex items-center justify-center border border-gray-100 dark:border-gray-400">
                  <span className="text-8xl md:text-9xl">📚</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        {/* ================= INTRODUCTION ================= */}
        <section className="mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5 text-gray-800 dark:text-gray-100">
              Making Books More Accessible
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-200 leading-8">
              BookCourier connects libraries and readers through a convenient
              delivery platform, making it easier to discover and borrow books
              from the comfort of home.
            </p>
          </div>
        </section>

        {/* ================= MISSION + VISION ================= */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-primary/10 dark:bg-gray-700 border border-primary/10 dark:border-gray-600 rounded-3xl p-8 md:p-10 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-600 shadow-sm border border-gray-100 dark:border-gray-500 flex items-center justify-center text-3xl mb-6">
              🎯
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Our Mission
            </h2>

            <p className="text-gray-600 dark:text-gray-200 leading-7 text-lg">
              Our mission is to make knowledge accessible and convenient by
              connecting libraries and readers through a modern delivery
              platform.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-primary/10 dark:bg-gray-700 border border-primary/10 dark:border-gray-600 rounded-3xl p-8 md:p-10 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-600 shadow-sm border border-gray-100 dark:border-gray-500 flex items-center justify-center text-3xl mb-6">
              🌟
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Our Vision
            </h2>

            <p className="text-gray-600 dark:text-gray-200 leading-7 text-lg">
              We envision a world where accessing books and knowledge is simple,
              convenient, and available to everyone from wherever they are.
            </p>
          </div>
        </section>

        {/* ================= WHO WE SERVE ================= */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
              Our Community
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-gray-800 dark:text-gray-100">
              Who We Serve
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-200 text-lg">
              BookCourier is designed to support everyone who depends on books
              for learning, research, and enjoyment.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {/* Students */}
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-7 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 transition-all duration-300">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 dark:bg-gray-600 flex items-center justify-center text-3xl mb-5">
                🎓
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                University Students
              </h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Access academic books and study materials more conveniently.
              </p>
            </div>

            {/* Researchers */}
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-7 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 transition-all duration-300">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 dark:bg-gray-600 flex items-center justify-center text-3xl mb-5">
                🔬
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                Researchers
              </h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Find useful references and research materials without
                unnecessary travel.
              </p>
            </div>

            {/* Book Lovers */}
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-7 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 transition-all duration-300">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 dark:bg-gray-600 flex items-center justify-center text-3xl mb-5">
                ❤️
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                Book Lovers
              </h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Discover and enjoy books from the comfort of home.
              </p>
            </div>
          </div>
        </section>

        {/* ================= WHY BOOKCOURIER ================= */}
        <section className="mb-20">
          <div className="bg-primary/10 dark:bg-gray-700 border border-primary/10 dark:border-gray-600 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
                Why BookCourier?
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800 dark:text-gray-100">
                A Better Way to Borrow Books
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Convenient */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-white dark:bg-gray-600 border border-gray-100 dark:border-gray-500 shadow-sm flex items-center justify-center text-3xl mb-5">
                  ⚡
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  Convenient
                </h3>

                <p className="text-gray-600 dark:text-gray-200 leading-6">
                  Borrow books without making an unnecessary trip to the
                  library.
                </p>
              </div>

              {/* Delivery */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-white dark:bg-gray-600 border border-gray-100 dark:border-gray-500 shadow-sm flex items-center justify-center text-3xl mb-5">
                  🚚
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  Home Delivery
                </h3>

                <p className="text-gray-600 dark:text-gray-200 leading-6">
                  Get your selected books delivered directly to your home.
                </p>
              </div>

              {/* Knowledge */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-white dark:bg-gray-600 border border-gray-100 dark:border-gray-500 shadow-sm flex items-center justify-center text-3xl mb-5">
                  💡
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  Knowledge First
                </h3>

                <p className="text-gray-600 dark:text-gray-200 leading-6">
                  Helping people get easier access to books and learning
                  resources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
              Simple Process
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800 dark:text-gray-100">
              How BookCourier Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <span className="text-6xl font-black text-primary/20 dark:text-gray-500">
                01
              </span>

              <h3 className="text-xl font-bold mt-4 mb-2 text-gray-800 dark:text-gray-100">
                Find a Book
              </h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Browse available books and find something you want to borrow.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <span className="text-6xl font-black text-primary/20 dark:text-gray-500">
                02
              </span>

              <h3 className="text-xl font-bold mt-4 mb-2 text-gray-800 dark:text-gray-100">
                Request
              </h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Select the book and place your borrowing request through the
                platform.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <span className="text-6xl font-black text-primary/20 dark:text-gray-500">
                03
              </span>

              <h3 className="text-xl font-bold mt-4 mb-2 text-gray-800 dark:text-gray-100">
                Receive
              </h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Sit back and receive your borrowed book at your doorstep.
              </p>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="bg-primary/10 dark:bg-gray-700 border border-primary/10 dark:border-gray-600 rounded-3xl px-6 py-14 md:py-16 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-white dark:bg-gray-600 border border-gray-100 dark:border-gray-500 shadow-md flex items-center justify-center text-4xl mb-6">
            📚
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Bringing Knowledge Closer
          </h2>

          <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-200 leading-7 mb-7">
            BookCourier makes it easier to discover, borrow, and enjoy books
            without the traditional hassle of visiting a library.
          </p>

          <a href="/books" className="btn btn-primary btn-lg">
            Explore Books
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;