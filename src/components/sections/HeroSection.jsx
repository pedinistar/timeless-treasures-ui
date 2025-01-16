import React from "react";
import homeFace from "../../assets/home-face.png";
import tagLine from "../../assets/tagline.png";

const HeroSection = () => {
  return (
    <section className="section-style relative">
      <img src={homeFace} alt="A face." className="max-lg:hidden absolute top-0 left-0" />
      <div className="w-fit h-fit relative">
        <h1 className="font-primary max-lg:text-2xl lg:text-7xl xl:text-9xl text-light">
          Timeless Treasure
        </h1>
        <img
          src={tagLine}
          alt="A tagline."
          className="absolute -bottom-52 left-1/2 transform -translate-x-1/2"
        />
      </div>
    </section>
  );
};

export default HeroSection;
