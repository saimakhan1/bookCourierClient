import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample book data (replace with backend data later)
const books = [
  {
    id: 1,
    title: "The Great Adventure",
    description: "An exciting journey through mysterious lands.",
    image: "/book4.jpg",
  },
  {
    id: 2,
    title: "Mystery of the Night",
    description: "Uncover the secrets hidden in the shadows.",
    image: "/book5.jpg",
  },
  {
    id: 3,
    title: "Learning React",
    description: "Master React with hands-on examples and projects.",
    image: "/book6.jpg",
  },
];

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="relative w-full h-[500px] md:h-[600px]">
              {/* Background Image */}
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover brightness-75"
              />

              {/* Overlay Text */}
              <div className="absolute inset-0 flex flex-col justify-center items-start md:items-start px-6 md:px-20 text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {book.title}
                </h2>
                <p className="text-md md:text-lg mb-6 max-w-lg drop-shadow-md">
                  {book.description}
                </p>
                <button
                  onClick={() => navigate("/books")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
                >
                  Explore Books
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
