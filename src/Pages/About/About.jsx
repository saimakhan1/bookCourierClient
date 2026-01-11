const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">About BookCourier</h1>

        <p className="mb-4 leading-relaxed">
          BookCourier is a library-to-home delivery system designed to help
          students, researchers, and readers borrow books easily without
          visiting libraries physically.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Our Mission</h2>
        <p>
          Our mission is to make knowledge accessible and convenient by
          connecting libraries and readers through a modern delivery platform.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Who We Serve</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>University Students</li>
          <li>Researchers</li>
          <li>Book Lovers</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
