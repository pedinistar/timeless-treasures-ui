import React from "react";
import { Link } from "react-router-dom";

const CategoryBox = ({ path, image, text }) => {
  return (
    <Link
      to={path}
      className="w-[250px] h-[250px] md:w-[400px] md:h[250px] lg:w-[450px] lg:h-[300px] relative outline-double outline-8 outline-secondary cursor-pointer group transition-all duration-300 ease-in-out"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="lg:hidden py-2 text-secondary absolute bottom-4 right-0 font-primary text-5xl backdrop-filter backdrop-blur-md w-full">
          <h1 className="px-4">{text}</h1>
        </div>
      </div>
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center font-primary text-5xl">
        <h1>{text}</h1>
      </div>
    </Link>
  );
};

export default CategoryBox;
