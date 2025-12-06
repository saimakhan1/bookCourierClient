import React from "react";

const categories = [
  "Fiction",
  "Non-Fiction",
  "Science & Tech",
  "Biographies",
  "Children's Books",
  "Self-Help",
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Explore Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-center py-6 rounded-lg cursor-pointer transition-all duration-300"
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
