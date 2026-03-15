import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const LottieSection = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch Lottie JSON from URL
    const fetchAnimation = async () => {
      try {
        const res = await fetch(
          "https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json",
        );
        const data = await res.json();
        setAnimationData(data);
      } catch (err) {
        console.error("Failed to load animation", err);
      }
    };

    fetchAnimation();
  }, []);

  if (!animationData)
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-300">
        Loading animation...
      </div>
    );

  return (
    <section className="bg-primary/10 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Discover Books Like Never Before!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Explore, discover, and get personalized recommendations instantly.
            Our interactive AI and smart explorers make book browsing fun and
            engaging.
          </p>
          <a href="/mood-explorer" className="btn btn-primary btn-lg">
            Explore by Mood
          </a>
        </div>

        {/* Lottie Animation */}
        <div className="flex-1 max-w-md mx-auto">
          <Lottie animationData={animationData} loop autoplay />
        </div>
      </div>
    </section>
  );
};

export default LottieSection;
