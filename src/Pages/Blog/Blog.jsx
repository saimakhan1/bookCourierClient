const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Library Delivery Matters",
      excerpt:
        "Access to books should not be limited by distance or time. BookCourier bridges that gap.",
      date: "Jan 2026",
    },
    {
      id: 2,
      title: "Digital Libraries vs Physical Libraries",
      excerpt:
        "Both have their advantages, but physical books still play a vital role.",
      date: "Dec 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border rounded p-4 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {blog.date}
              </p>
              <p className="mt-2">{blog.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
