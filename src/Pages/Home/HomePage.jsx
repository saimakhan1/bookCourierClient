import React from "react";
import Banner from "./Banner";
import Coverage from "./Coverage";
import WhyChoose from "./WhyChoose";
import Testimonials from "./Testimonials";
import Categories from "./Categories";
import LatestBooks from "./LatestBooks";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestBooks></LatestBooks>
      <Coverage></Coverage>
      <WhyChoose></WhyChoose>
      <Testimonials></Testimonials>
      <WhyChoose></WhyChoose>
      <Categories></Categories>
    </div>
  );
};

export default HomePage;
