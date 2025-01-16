import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  path,
  text,
  image,
  imageAlt,
  imageClassName,
  rootClassName,
}) => {
  return (
    <div className={`${rootClassName} relative`}>
      <Link
        to={path}
        className="text-light font-primary text-xl lg:text-2xl border-2 border-secondary px-10 lg:px-20 py-4 flex items-center justify-center hover:bg-light hover:text-primary duration-700"
      >
        <h1>{text}</h1>
      </Link>
      {image && (
        <img
          src={image}
          alt={imageAlt}
          className={`absolute ${imageClassName}`}
        />
      )}
    </div>
  );
};

export default Button;
