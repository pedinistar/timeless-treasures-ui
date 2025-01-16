import React from "react";
import HeroSection from "../components/sections/HeroSection";
import CategoriesSection from "../components/sections/CategoriesSection";
import StoryButtonSection from "../components/sections/StoryButtonSection";
import ShopButtonSection from "../components/sections/ShopButtonSection";
import LocomotiveScroll from "locomotive-scroll";

const HomePage = () => {

  return (
    <div>
      <HeroSection />
      <StoryButtonSection />
      <CategoriesSection />
      <ShopButtonSection />
    </div>
  );
};

export default HomePage;
