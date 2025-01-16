import React from "react";

const Logo = ({ img, alt }) => {
  return (
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full outline-double outline-4 outline-secondary cursor-pointer group transition-all duration-300 ease-in-out hover:bg-light">
      <img src={img} alt={alt} />
    </div>
  );
};

export default Logo;
