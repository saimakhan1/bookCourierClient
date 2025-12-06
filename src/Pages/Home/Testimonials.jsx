import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ayesha Rahman",
    text: "BookCourier is amazing! I got my books delivered within 24 hours.",
  },
  {
    name: "Rahim Khan",
    text: "A wide selection of books and very reliable delivery.",
  },
  {
    name: "Sabbir Ahmed",
    text: "Affordable prices and excellent customer support. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 max-w-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              "{testimonial.text}"
            </p>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
