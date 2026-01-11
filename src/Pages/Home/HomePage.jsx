import React from "react";
import Banner from "./Banner";
import Coverage from "./Coverage";
import WhyChoose from "./WhyChoose";
import Testimonials from "./Testimonials";
import Categories from "./Categories";
import LatestBooks from "./LatestBooks";
import HowItWorksSection from "./HowItWorksSection";
import Features from "../Features/Features";
import Highlights from "./Highlights";
import Statistics from "./Statistics";
import Newsletter from "./Newsletter";
import FAQ from "./FAQ";
import CallToAction from "./CallToAction";

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
      <Highlights></Highlights>
      <Statistics></Statistics>
      <Newsletter></Newsletter>
      <FAQ></FAQ>
      <CallToAction></CallToAction>
    </div>
  );
};

export default HomePage;
