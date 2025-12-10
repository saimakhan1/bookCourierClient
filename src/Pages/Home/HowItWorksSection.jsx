// HowItWorksSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaTruck, FaSmile } from "react-icons/fa";

const steps = [
  {
    icon: <FaShoppingCart className="text-5xl text-indigo-500" />,
    title: "Place Your Order",
    description:
      "Browse your favorite books and place your order easily in just a few clicks.",
  },
  {
    icon: <FaTruck className="text-5xl text-indigo-500" />,
    title: "Fast Delivery",
    description:
      "Our couriers deliver your books quickly and safely to your doorstep.",
  },
  {
    icon: <FaSmile className="text-5xl text-indigo-500" />,
    title: "Enjoy Reading",
    description: "Sit back, relax, and enjoy your new books with zero hassle.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 dark:text-gray-300 mb-16"
        >
          Getting your favorite books has never been easier. Just follow these
          simple steps.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.7 }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-10 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              {step.icon}
              <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-gray-100">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
