import React from "react";
import homeFace from "../../assets/home-face.png";
import tagLine from "../../assets/tagline.png";
import clock from "../../assets/clock.png";

const HeroSection = () => {
  return (
    <section className="section-style relative">
      <img
        src={homeFace}
        alt="A face."
        className="max-lg:hidden absolute top-0 left-0"
      />
      <div className="w-fit h-fit relative">
        {/* Main Heading */}
        <h1 className="font-primary z-20 text-center text-5xl lg:text-7xl xl:text-9xl text-light relative">
          Timeless Treasure
        </h1>

        {/* Clock Image */}
        <img
          src={clock}
          alt="A clock."
          className="opacity-20 absolute z-10 bottom-[40px] left-1/2 transform -translate-x-1/2"
          width={150}
        />

        {/* Tagline Image */}
        <img
          src={tagLine}
          alt="A tagline."
          className="absolute lg:-bottom-52 left-1/2 transform -translate-x-1/2"
        />
      </div>
    </section>
  );
};

export default HeroSection;
