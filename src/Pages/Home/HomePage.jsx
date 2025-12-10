import React from "react";
import Banner from "./Banner";
import Coverage from "./Coverage";
import WhyChoose from "./WhyChoose";
import Testimonials from "./Testimonials";
import Categories from "./Categories";
import LatestBooks from "./LatestBooks";
import HowItWorksSection from "./HowItWorksSection";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestBooks></LatestBooks>
      <Coverage></Coverage>
      <WhyChoose></WhyChoose>
      <Testimonials></Testimonials>
      <Categories></Categories>
      <HowItWorksSection></HowItWorksSection>
    </div>
  );
};

export default HomePage;
