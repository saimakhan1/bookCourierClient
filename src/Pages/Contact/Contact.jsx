const Contact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <form className="max-w-lg space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded p-2 bg-white dark:bg-gray-800 dark:border-gray-700"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded p-2 bg-white dark:bg-gray-800 dark:border-gray-700"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border rounded p-2 bg-white dark:bg-gray-800 dark:border-gray-700"
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
