import React from "react";
import { CheckCircle } from "lucide-react";

const steps = [
  "Browse books from our library",
  "Request home delivery",
  "Receive books at your doorstep",
  "Return or exchange easily",
];

const HowItWorks = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-300 flex items-start gap-3"
          >
            <CheckCircle className="w-6 h-6 text-yellow-500 mt-1" />
            <p className="text-gray-600 dark:text-gray-200">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
