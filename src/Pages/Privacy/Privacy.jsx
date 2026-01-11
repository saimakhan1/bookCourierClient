const Privacy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy & Terms</h1>

        <p className="mb-4">
          BookCourier respects your privacy. We collect user information only to
          provide delivery services and improve user experience.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Information We Collect
        </h2>
        <p>Email, name, address, and order history.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          User Responsibility
        </h2>
        <p>
          Users must provide accurate information during ordering and profile
          updates.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
