// import { useState } from "react";

// // Example moods and recommended books
// const moodBooks = {
//   Motivated: [
//     {
//       title: "Atomic Habits",
//       author: "James Clear",
//       link: "https://openlibrary.org/works/OL82563W",
//     },
//     {
//       title: "Deep Work",
//       author: "Cal Newport",
//       link: "https://openlibrary.org/works/OL15645216W",
//     },
//   ],
//   Relaxed: [
//     {
//       title: "The Alchemist",
//       author: "Paulo Coelho",
//       link: "https://openlibrary.org/works/OL45804W",
//     },
//     {
//       title: "The Little Prince",
//       author: "Antoine de Saint-Exupéry",
//       link: "https://openlibrary.org/works/OL14904374W",
//     },
//   ],
//   Mystery: [
//     {
//       title: "Sherlock Holmes",
//       author: "Arthur Conan Doyle",
//       link: "https://openlibrary.org/works/OL45821W",
//     },
//     {
//       title: "Gone Girl",
//       author: "Gillian Flynn",
//       link: "https://openlibrary.org/works/OL24537657W",
//     },
//   ],
//   Adventure: [
//     {
//       title: "The Hobbit",
//       author: "J.R.R. Tolkien",
//       link: "https://openlibrary.org/works/OL262758W",
//     },
//     {
//       title: "Treasure Island",
//       author: "Robert Louis Stevenson",
//       link: "https://openlibrary.org/works/OL15213655W",
//     },
//   ],
//   Science: [
//     {
//       title: "A Brief History of Time",
//       author: "Stephen Hawking",
//       link: "https://openlibrary.org/works/OL2627587W",
//     },
//     {
//       title: "Cosmos",
//       author: "Carl Sagan",
//       link: "https://openlibrary.org/works/OL27745W",
//     },
//   ],
// };

// const MoodExplorer = () => {
//   const [selectedMood, setSelectedMood] = useState("Motivated");

//   return (
//     <div className="min-h-screen bg-base-200 py-10 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-6">
//           🌈 Explore Books by Mood
//         </h1>

//         {/* Mood Buttons */}
//         <div className="flex flex-wrap justify-center gap-3 mb-8">
//           {Object.keys(moodBooks).map((mood) => (
//             <button
//               key={mood}
//               onClick={() => setSelectedMood(mood)}
//               className={`btn ${
//                 selectedMood === mood ? "btn-primary" : "btn-outline"
//               }`}
//             >
//               {mood}
//             </button>
//           ))}
//         </div>

//         {/* Books Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {moodBooks[selectedMood].map((book, idx) => (
//             <div
//               key={idx}
//               className="bg-base-100 shadow-lg rounded-lg p-4 hover:shadow-xl transition"
//             >
//               <h3 className="font-semibold mt-3">{book.title}</h3>
//               <p className="text-sm text-gray-500">{book.author}</p>
//               <a
//                 href={book.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn btn-sm btn-outline mt-3 w-full"
//               >
//                 Preview
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MoodExplorer;

import { useState } from "react";

// ============================================================
// MOOD BASED BOOK RECOMMENDATIONS
// ============================================================

const moodBooks = {
  Motivated: [
    {
      title: "Atomic Habits",
      author: "James Clear",
      description:
        "A practical guide to building better habits and making meaningful improvements through small, consistent changes.",
      link: "https://openlibrary.org/works/OL82563W",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      description:
        "A guide to developing focused work habits and improving productivity in a world full of distractions.",
      link: "https://openlibrary.org/works/OL15645216W",
    },
  ],

  Relaxed: [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      description:
        "A thoughtful story about following your dreams, discovering purpose, and enjoying the journey of life.",
      link: "https://openlibrary.org/works/OL45804W",
    },
    {
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      description:
        "A timeless and imaginative story that explores friendship, love, kindness, and the meaning of life.",
      link: "https://openlibrary.org/works/OL14904374W",
    },
  ],

  Mystery: [
    {
      title: "Sherlock Holmes",
      author: "Arthur Conan Doyle",
      description:
        "Follow the brilliant detective Sherlock Holmes as he solves fascinating mysteries through observation and deduction.",
      link: "https://openlibrary.org/works/OL45821W",
    },
    {
      title: "Gone Girl",
      author: "Gillian Flynn",
      description:
        "A psychological mystery filled with unexpected turns, secrets, and complicated relationships.",
      link: "https://openlibrary.org/works/OL24537657W",
    },
  ],

  Adventure: [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description:
        "Join Bilbo Baggins on an unforgettable fantasy adventure filled with courage, friendship, danger, and discovery.",
      link: "https://openlibrary.org/works/OL262758W",
    },
    {
      title: "Treasure Island",
      author: "Robert Louis Stevenson",
      description:
        "A classic adventure involving pirates, treasure maps, mysterious islands, and an exciting journey.",
      link: "https://openlibrary.org/works/OL15213655W",
    },
  ],

  Science: [
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      description:
        "An accessible exploration of the universe, black holes, time, space, and some of the biggest questions in science.",
      link: "https://openlibrary.org/works/OL2627587W",
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      description:
        "A fascinating journey through science, astronomy, history, and humanity's place in the universe.",
      link: "https://openlibrary.org/works/OL27745W",
    },
  ],
};

// ============================================================
// MOOD INFORMATION
// ============================================================

const moodInfo = {
  Motivated: {
    icon: "🔥",
    color: "text-orange-500",
    description:
      "Looking for inspiration and productivity? These books can help you develop better habits and stay focused.",
    tag: "Growth & Productivity",
  },

  Relaxed: {
    icon: "🌿",
    color: "text-emerald-500",
    description:
      "Take a break and enjoy thoughtful stories that are perfect for a calm and relaxing reading session.",
    tag: "Calm & Thoughtful",
  },

  Mystery: {
    icon: "🔎",
    color: "text-purple-500",
    description:
      "Ready to solve a mystery? Explore stories filled with clues, secrets, investigations, and unexpected twists.",
    tag: "Mystery & Suspense",
  },

  Adventure: {
    icon: "🗺️",
    color: "text-amber-500",
    description:
      "Get ready for exciting journeys, fascinating worlds, unexpected challenges, and unforgettable adventures.",
    tag: "Adventure & Exploration",
  },

  Science: {
    icon: "🔬",
    color: "text-blue-500",
    description:
      "Explore the universe, scientific ideas, discoveries, and fascinating questions about our world.",
    tag: "Science & Discovery",
  },
};

// ============================================================
// MOOD EXPLORER COMPONENT
// ============================================================

const MoodExplorer = () => {
  const [selectedMood, setSelectedMood] = useState("Motivated");

  const currentMood = moodInfo[selectedMood];
  const currentBooks = moodBooks[selectedMood];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* ====================================================== */}
      {/* ===================== HERO SECTION =================== */}
      {/* ====================================================== */}

      <section className="bg-primary/10 dark:bg-gray-700 border-b border-primary/10 dark:border-gray-600 py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Hero Content */}

            <div className="md:col-span-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-600 text-primary dark:text-blue-300 px-4 py-2 rounded-full shadow-sm font-medium mb-5">
                <span>🌈</span>

                <span>Personalized Book Discovery</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                Find a Book That Matches Your{" "}
                <span className="text-primary dark:text-blue-300">Mood</span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-200 leading-8 max-w-2xl">
                Not sure what to read? Tell BookCourier how you're feeling and
                discover books selected to match your current mood and
                interests.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-7">
                <div className="bg-white dark:bg-gray-600 px-4 py-2 rounded-full shadow-sm text-sm">
                  🎯 Personalized
                </div>

                <div className="bg-white dark:bg-gray-600 px-4 py-2 rounded-full shadow-sm text-sm">
                  📚 Curated Books
                </div>

                <div className="bg-white dark:bg-gray-600 px-4 py-2 rounded-full shadow-sm text-sm">
                  🔎 Explore & Discover
                </div>
              </div>
            </div>

            {/* Hero Illustration */}

            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-5 bg-primary/20 dark:bg-gray-500 rounded-full blur-2xl" />

                <div className="absolute inset-8 bg-white dark:bg-gray-600 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-500 flex flex-col items-center justify-center">
                  <div className="text-7xl mb-4">{currentMood.icon}</div>

                  <h3 className="text-xl font-bold">Feeling {selectedMood}</h3>

                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                    Let's find something to read.
                  </p>
                </div>

                {/* Floating icons */}

                <div className="absolute top-3 left-0 w-12 h-12 rounded-xl bg-white dark:bg-gray-500 shadow-lg flex items-center justify-center text-xl">
                  📚
                </div>

                <div className="absolute top-5 right-0 w-12 h-12 rounded-xl bg-white dark:bg-gray-500 shadow-lg flex items-center justify-center text-xl">
                  ⭐
                </div>

                <div className="absolute bottom-5 left-0 w-12 h-12 rounded-xl bg-white dark:bg-gray-500 shadow-lg flex items-center justify-center text-xl">
                  💡
                </div>

                <div className="absolute bottom-2 right-0 w-12 h-12 rounded-xl bg-white dark:bg-gray-500 shadow-lg flex items-center justify-center text-xl">
                  📖
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* ================= MOOD SELECTION ===================== */}
      {/* ====================================================== */}

      <main className="max-w-6xl mx-auto px-4 py-14">
        <div className="text-center mb-9">
          <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
            Choose Your Mood
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What Are You in the Mood For?
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-200 leading-7">
            Select a mood below and we'll show you a few books that fit the
            feeling you're looking for.
          </p>
        </div>

        {/* Mood Buttons */}

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(moodBooks).map((mood) => {
            const isActive = selectedMood === mood;

            return (
              <button
                key={mood}
                onClick={() => setSelectedMood(mood)}
                className={`group flex items-center gap-2 px-5 py-3 rounded-xl border transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-content border-primary shadow-md scale-105"
                    : "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-primary hover:bg-primary/10 dark:hover:bg-gray-600"
                }`}
              >
                <span className="text-xl">{moodInfo[mood].icon}</span>

                <span className="font-semibold">{mood}</span>
              </button>
            );
          })}
        </div>

        {/* ==================================================== */}
        {/* ================= SELECTED MOOD INFO =============== */}
        {/* ==================================================== */}

        <section className="bg-primary/10 dark:bg-gray-700 border border-primary/10 dark:border-gray-600 rounded-3xl p-6 md:p-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-white dark:bg-gray-600 shadow-sm flex items-center justify-center text-4xl">
              {currentMood.icon}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold">
                  Books for a {selectedMood} Mood
                </h2>

                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white dark:bg-gray-600 text-primary dark:text-blue-300">
                  {currentMood.tag}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-200 leading-7">
                {currentMood.description}
              </p>
            </div>

            <div className="text-center md:text-right">
              <div className="text-3xl font-bold text-primary dark:text-blue-300">
                {currentBooks.length}
              </div>

              <div className="text-sm text-gray-500 dark:text-gray-300">
                Recommendations
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* ================= BOOK RECOMMENDATIONS ============== */}
        {/* ==================================================== */}

        <section>
          <div className="flex items-end justify-between mb-7">
            <div>
              <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
                Recommended For You
              </span>

              <h2 className="text-2xl md:text-3xl font-bold mt-2">
                {selectedMood} Reads
              </h2>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
              <span>📚</span>
              <span>Curated selection</span>
            </div>
          </div>

          {/* Books */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentBooks.map((book, index) => (
              <article
                key={index}
                className="group bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex gap-5">
                  {/* Book Icon */}

                  <div className="w-20 h-24 shrink-0 rounded-xl bg-primary/10 dark:bg-gray-600 flex items-center justify-center text-4xl">
                    📖
                  </div>

                  {/* Book Information */}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-bold leading-7">
                        {book.title}
                      </h3>

                      <span className="text-xl">{currentMood.icon}</span>
                    </div>

                    <p className="text-sm font-medium text-primary dark:text-blue-300 mt-1">
                      by {book.author}
                    </p>

                    <div className="flex items-center gap-2 mt-3 text-sm text-gray-500 dark:text-gray-300">
                      <span>🏷️</span>
                      <span>{currentMood.tag}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}

                <p className="text-gray-600 dark:text-gray-200 leading-7 mt-5">
                  {book.description}
                </p>

                {/* Bottom */}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-6 pt-5 border-t border-gray-100 dark:border-gray-600">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
                    <span>🌍</span>
                    <span>Available through Open Library</span>
                  </div>

                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Preview Book ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* ====================================================== */}
      {/* ================= HOW IT WORKS ======================= */}
      {/* ====================================================== */}

      <section className="bg-primary/10 dark:bg-gray-700 border-y border-primary/10 dark:border-gray-600 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
              Simple & Fun
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              How Mood Explorer Works
            </h2>

            <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-200 leading-7">
              Finding something interesting to read only takes a few simple
              steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 1 */}

            <div className="bg-white dark:bg-gray-600 rounded-2xl border border-gray-200 dark:border-gray-500 p-6 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 dark:bg-gray-500 flex items-center justify-center text-2xl mb-5">
                1️⃣
              </div>

              <h3 className="font-bold text-lg mb-2">Choose a Mood</h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Select how you're feeling or the kind of reading experience
                you're looking for.
              </p>
            </div>

            {/* Step 2 */}

            <div className="bg-white dark:bg-gray-600 rounded-2xl border border-gray-200 dark:border-gray-500 p-6 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 dark:bg-gray-500 flex items-center justify-center text-2xl mb-5">
                2️⃣
              </div>

              <h3 className="font-bold text-lg mb-2">
                Explore Recommendations
              </h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Browse books selected to match the mood and discover something
                new.
              </p>
            </div>

            {/* Step 3 */}

            <div className="bg-white dark:bg-gray-600 rounded-2xl border border-gray-200 dark:border-gray-500 p-6 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 dark:bg-gray-500 flex items-center justify-center text-2xl mb-5">
                3️⃣
              </div>

              <h3 className="font-bold text-lg mb-2">Preview & Read</h3>

              <p className="text-gray-600 dark:text-gray-200 leading-6">
                Open the book on Open Library to learn more about the title and
                its available editions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* ===================== BOTTOM CTA ===================== */}
      {/* ====================================================== */}

      <section className="bg-gray-50 dark:bg-gray-800 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 dark:bg-gray-700 flex items-center justify-center text-3xl mb-5">
            📚
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Not Sure What to Read?
          </h2>

          <p className="text-gray-600 dark:text-gray-200 leading-7 mb-6">
            That's exactly what Mood Explorer is for. Pick another mood and
            discover a different collection of books.
          </p>

          <button
            onClick={() => {
              const moods = Object.keys(moodBooks);
              const currentIndex = moods.indexOf(selectedMood);
              const nextMood = moods[(currentIndex + 1) % moods.length];

              setSelectedMood(nextMood);

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="btn btn-primary px-7"
          >
            Try Another Mood ✨
          </button>
        </div>
      </section>
    </div>
  );
};

export default MoodExplorer;
