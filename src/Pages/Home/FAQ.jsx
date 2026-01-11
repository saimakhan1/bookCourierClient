const FAQ = () => {
  return (
    <section className="py-20 bg-base-200 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {[
          {
            q: "Do I need to login to order?",
            a: "Yes, login is required to ensure secure orders and reviews.",
          },
          {
            q: "Can I review without buying?",
            a: "No, only verified buyers can submit reviews.",
          },
          {
            q: "Is dark mode supported?",
            a: "Yes! BookCourier fully supports light and dark themes.",
          },
        ].map((faq, i) => (
          <div
            key={i}
            className="collapse collapse-arrow bg-base-100 mb-4"
          >
            <input type="checkbox" />
            <div className="collapse-title font-semibold">{faq.q}</div>
            <div className="collapse-content text-base-content/70">
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
