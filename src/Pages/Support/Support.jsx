const Support = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Help & Support</h1>

        <div className="space-y-4">
          <div className="border rounded p-4 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <h3 className="font-semibold">
              How do I cancel an order?
            </h3>
            <p>
              You can cancel an order from the My Orders page if the status is
              pending.
            </p>
          </div>

          <div className="border rounded p-4 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <h3 className="font-semibold">
              How long does delivery take?
            </h3>
            <p>
              Delivery usually takes 2–5 working days depending on your
              location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
