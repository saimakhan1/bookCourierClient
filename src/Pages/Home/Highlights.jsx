const Highlights = () => {
  return (
    <section className="py-16 bg-base-100">
        <h2 className="text-4xl font-bold text-center mb-12">
             Platform Highlights
        </h2>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Trusted Platform",
            desc: "Thousands of readers trust BookCourier for reliable book delivery.",
            icon: "✅",
          },
          {
            title: "Verified Reviews",
            desc: "Only genuine buyers can leave reviews after successful orders.",
            icon: "⭐",
          },
          {
            title: "Secure Payments",
            desc: "Safe order handling with protected user authentication.",
            icon: "🔒",
          },
        ].map((item, i) => (
          <div key={i} className="card bg-base-200 shadow-md">
            <div className="card-body text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-base-content/70">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
