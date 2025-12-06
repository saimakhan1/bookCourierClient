import React from "react";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Fast Home Delivery",
    description:
      "Get your favorite books delivered right to your doorstep within 24-48 hours.",
  },
  {
    title: "Wide Selection",
    description:
      "Choose from thousands of books across all genres and categories.",
  },
  {
    title: "Affordable Prices",
    description:
      "Competitive prices with regular discounts and offers on popular titles.",
  },
  {
    title: "Safe & Reliable",
    description:
      "We ensure your books arrive safely, with excellent packaging and handling.",
  },
];

const WhyChoose = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Why Choose BookCourier
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <CheckCircle className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
