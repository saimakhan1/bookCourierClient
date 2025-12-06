import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
//import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

//import images
import book1 from "/book1.jpg";
import book2 from "/book2.jpg";
import book3 from "/book3.jpg";

const brandLogos = [book1, book2, book3];
const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
    >
      {brandLogos.map((logo, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center">
            <img
              className="h-[400px] w-[1200px] object-cover rounded-lg"
              src={logo}
              alt="brand logo"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
