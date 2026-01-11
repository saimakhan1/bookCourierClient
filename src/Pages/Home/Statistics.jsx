const Statistics = () => {
  return (
    <section className="py-20 bg-base-200 dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12">
             BookCourier in Numbers
        </h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { value: "10K+", label: "Books Delivered" },
          { value: "5K+", label: "Happy Users" },
          { value: "1K+", label: "Verified Reviews" },
          { value: "24/7", label: "Support" },
        ].map((stat, i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold">{stat.value}</h3>
            <p className="text-base-content/70 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
