// const Blog = () => {
//   const blogs = [
//     {
//       id: 1,
//       title: "Why Library Delivery Matters",
//       excerpt:
//         "Access to books should not be limited by distance or time. BookCourier bridges that gap.",
//       date: "Jan 2026",
//     },
//     {
//       id: 2,
//       title: "Digital Libraries vs Physical Libraries",
//       excerpt:
//         "Both have their advantages, but physical books still play a vital role.",
//       date: "Dec 2025",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
//       <div className="max-w-6xl mx-auto p-6">
//         <h1 className="text-3xl font-bold mb-6">Blog</h1>

//         <div className="grid md:grid-cols-2 gap-6">
//           {blogs.map((blog) => (
//             <div
//               key={blog.id}
//               className="border rounded p-4 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
//             >
//               <h2 className="text-xl font-semibold">{blog.title}</h2>
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 {blog.date}
//               </p>
//               <p className="mt-2">{blog.excerpt}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;

import React, { useState } from "react";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "Why Library Delivery Matters",
      excerpt:
        "Access to books should not be limited by distance or time. BookCourier bridges that gap by making library resources easier to reach.",
      date: "Jan 2026",
      category: "Library & Learning",
      readTime: "4 min read",
      icon: "📚",
      content: [
        "Access to books and learning resources should not depend entirely on where someone lives or how far they are from a library.",
        "Library delivery services can make borrowing more convenient for students, researchers, and readers who may not always have the opportunity to visit a library physically.",
        "BookCourier aims to make this process simpler by connecting readers with library resources and bringing borrowed books closer to their homes.",
      ],
    },
    {
      id: 2,
      title: "Digital Libraries vs Physical Libraries",
      excerpt:
        "Both have their advantages, but physical books still play a vital role in learning, research, and everyday reading.",
      date: "Dec 2025",
      category: "Libraries",
      readTime: "5 min read",
      icon: "🏛️",
      content: [
        "Digital libraries have made information more accessible than ever before. Readers can search for and access resources from almost anywhere.",
        "However, physical books continue to provide an important reading experience. Many students and readers still prefer printed books for focused study and extended reading.",
        "Rather than replacing one another, digital and physical libraries can complement each other and provide readers with more choices.",
      ],
    },
    {
      id: 3,
      title: "Building Better Reading Habits",
      excerpt:
        "A consistent reading routine can make learning more enjoyable. Discover simple ways to make books part of your daily life.",
      date: "Nov 2025",
      category: "Reading",
      readTime: "3 min read",
      icon: "📖",
      content: [
        "Developing a consistent reading habit does not require reading hundreds of pages every day.",
        "Starting with a small amount of reading and choosing subjects that genuinely interest you can make reading easier to maintain.",
        "The most important thing is consistency. Even a few pages each day can gradually become a meaningful part of your routine.",
      ],
    },
    {
      id: 4,
      title: "How Technology Is Changing Libraries",
      excerpt:
        "From digital catalogs to home delivery, modern technology is helping libraries become more accessible and user-friendly.",
      date: "Oct 2025",
      category: "Technology",
      readTime: "6 min read",
      icon: "💻",
      content: [
        "Technology is changing how people discover, borrow, and interact with library resources.",
        "Online catalogs, digital records, automated systems, and delivery platforms can make traditional library services faster and more convenient.",
        "As technology continues to evolve, libraries have new opportunities to provide services beyond their physical locations.",
      ],
    },
    {
      id: 5,
      title: "Why Reading Still Matters",
      excerpt:
        "In a world filled with short-form content, books continue to provide depth, focus, imagination, and meaningful learning.",
      date: "Sep 2025",
      category: "Reading",
      readTime: "4 min read",
      icon: "📝",
      content: [
        "Modern readers have access to an enormous amount of short-form digital content, but books continue to offer something different.",
        "Long-form reading encourages deeper engagement with ideas, stories, and subjects.",
        "Whether for education, research, or entertainment, books remain an important source of knowledge and imagination.",
      ],
    },
    {
      id: 6,
      title: "Libraries and the Future of Learning",
      excerpt:
        "Modern libraries are evolving beyond physical spaces and becoming connected learning platforms for students and researchers.",
      date: "Aug 2025",
      category: "Education",
      readTime: "5 min read",
      icon: "🎓",
      content: [
        "Libraries are evolving from traditional book-lending spaces into connected learning environments.",
        "Technology allows libraries to offer better discovery systems, digital resources, personalized services, and convenient access to physical books.",
        "The future of libraries will likely combine the strengths of physical collections with the convenience of modern technology.",
      ],
    },
  ];

  // Open article modal
  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    document.body.style.overflow = "hidden";
  };

  // Close article modal
  const handleCloseArticle = () => {
    setSelectedBlog(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-primary/10 dark:bg-gray-700 py-16 md:py-20 px-4 border-b border-primary/10 dark:border-gray-600">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-600 text-primary dark:text-blue-300 px-4 py-2 rounded-full shadow-sm font-medium mb-5">
            <span>✍️</span>
            <span>BookCourier Blog</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Stories, Ideas &{" "}
            <span className="text-primary dark:text-blue-300">
              Reading Insights
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-200 leading-8">
            Explore thoughts about books, libraries, reading habits, and how
            technology is making access to knowledge easier.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        {/* ================= FEATURED ARTICLE ================= */}
        <section className="mb-20">
          <div className="mb-7">
            <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
              Featured
            </span>

            <h2 className="text-3xl font-bold mt-2">Featured Article</h2>
          </div>

          <article className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-5">
              {/* Featured Illustration */}
              <div className="md:col-span-2 bg-primary/10 dark:bg-gray-600 min-h-[280px] flex items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-white dark:bg-gray-500 shadow-lg flex items-center justify-center">
                  <span className="text-7xl">📚</span>
                </div>
              </div>

              {/* Featured Content */}
              <div className="md:col-span-3 p-7 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 dark:bg-gray-600 text-primary dark:text-blue-300 text-sm font-medium">
                    {blogs[0].category}
                  </span>

                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    {blogs[0].date}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {blogs[0].title}
                </h3>

                <p className="text-gray-600 dark:text-gray-200 leading-7 mb-6">
                  {blogs[0].excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-300 mb-6">
                  <span>📅 {blogs[0].date}</span>
                  <span>•</span>
                  <span>⏱️ {blogs[0].readTime}</span>
                </div>

                <button
                  onClick={() => handleReadMore(blogs[0])}
                  className="btn btn-primary"
                >
                  Read Article
                </button>
              </div>
            </div>
          </article>
        </section>

        {/* ================= LATEST ARTICLES ================= */}
        <section>
          <div className="text-center mb-10">
            <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
              Explore Our Articles
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Latest Articles
            </h2>

            <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-200">
              Discover useful ideas and perspectives about reading, libraries,
              technology, and access to knowledge.
            </p>
          </div>

          {/* 6 ARTICLES */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogs.slice(1).map((blog) => (
              <article
                key={blog.id}
                className="group bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon Area */}
                <div className="h-40 bg-primary/10 dark:bg-gray-600 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-white dark:bg-gray-500 shadow-md flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                    {blog.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-sm font-medium text-primary dark:text-blue-300">
                      {blog.category}
                    </span>

                    <span className="text-sm text-gray-500 dark:text-gray-300">
                      {blog.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary dark:group-hover:text-blue-300 transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-200 leading-7 mb-5">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                    <span className="text-sm text-gray-500 dark:text-gray-300">
                      ⏱️ {blog.readTime}
                    </span>

                    <button
                      onClick={() => handleReadMore(blog)}
                      className="text-primary dark:text-blue-300 font-semibold hover:underline cursor-pointer"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= TOPICS ================= */}
        <section className="mt-20">
          <div className="bg-primary/10 dark:bg-gray-700 border border-primary/10 dark:border-gray-600 rounded-3xl p-8 md:p-10">
            <div className="text-center mb-8">
              <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
                Browse Topics
              </span>

              <h2 className="text-3xl font-bold mt-2">
                Explore What Interests You
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "📚 Libraries",
                "📖 Reading",
                "🎓 Education",
                "💻 Technology",
                "🔬 Research",
                "🌍 Knowledge",
              ].map((topic) => (
                <button
                  key={topic}
                  className="px-5 py-3 rounded-full bg-white dark:bg-gray-600 border border-gray-200 dark:border-gray-500 text-gray-700 dark:text-gray-100 hover:border-primary hover:text-primary dark:hover:text-blue-300 transition-colors"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BOTTOM CTA ================= */}
        <section className="mt-20 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 dark:bg-gray-700 flex items-center justify-center text-4xl mb-6">
            📚
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Keep Discovering
          </h2>

          <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-200 leading-7 mb-7">
            Find your next favorite book and continue exploring the world of
            knowledge with BookCourier.
          </p>

          <a href="/books" className="btn btn-primary">
            Explore Books
          </a>
        </section>
      </div>

      {/* ===================================================== */}
      {/* ================= ARTICLE MODAL ===================== */}
      {/* ===================================================== */}

      {selectedBlog && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleCloseArticle}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-700 rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseArticle}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-100 text-xl flex items-center justify-center transition"
              aria-label="Close article"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="bg-primary/10 dark:bg-gray-600 p-8 md:p-10 text-center">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-white dark:bg-gray-500 shadow-md flex items-center justify-center text-5xl mb-5">
                {selectedBlog.icon}
              </div>

              <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
                {selectedBlog.category}
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 pr-8">
                {selectedBlog.title}
              </h2>

              <div className="flex justify-center items-center gap-4 text-sm text-gray-600 dark:text-gray-200">
                <span>📅 {selectedBlog.date}</span>
                <span>•</span>
                <span>⏱️ {selectedBlog.readTime}</span>
              </div>
            </div>

            {/* Modal Article Content */}
            <div className="p-7 md:p-10">
              <div className="space-y-6">
                {selectedBlog.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-gray-600 dark:text-gray-200 leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Close Article */}
              <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-600 flex justify-end">
                <button
                  onClick={handleCloseArticle}
                  className="btn btn-primary"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
