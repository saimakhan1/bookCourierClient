const FAQ = () => {
  return (
    <section className="py-20 bg-base-200 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          Frequently Asked Questions
        </h2>

        {[
          {
            q: "How do I place an order on BookCourier?",
            a: "Simply browse books, click on the book you like, and press the 'Order Now' button. You will be guided through the checkout process after logging in.",
          },
          {
            q: "What payment methods are supported?",
            a: "Currently, orders can be placed with cash-on-delivery. Online payment options will be available soon.",
          },
          {
            q: "How long does delivery usually take?",
            a: "Delivery typically takes 2–5 business days depending on your location.",
          },
          {
            q: "Can I cancel or modify my order?",
            a: "Yes, you can cancel or modify your order before it is shipped by contacting our support team.",
          },
          {
            q: "Why can’t I submit a review for a book?",
            a: "Only users who have successfully purchased a book are allowed to submit reviews to ensure authenticity.",
          },
          {
            q: "How does the wishlist feature work?",
            a: "You can add books to your wishlist to save them for later. Wishlist items can be ordered anytime after logging in.",
          },
          {
            q: "Does BookCourier support dark mode?",
            a: "Yes! BookCourier supports both light and dark modes for a comfortable reading experience.",
          },
        ].map((faq, i) => (
          <div
            key={i}
            className="collapse collapse-arrow bg-base-100 dark:bg-gray-800 mb-4"
          >
            <input type="checkbox" />
            <div className="collapse-title font-semibold dark:text-white">
              {faq.q}
            </div>
            <div className="collapse-content text-base-content/70 dark:text-gray-300">
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
