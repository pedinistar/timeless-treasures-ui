import React from "react";
import { Link } from "react-router-dom";

const ProductBox = ({ product }) => {
  return (
    <div className="flex flex-col items-center mt-8">
      <Link
        to={`/product/${product.id}`}
        className="w-[250px] h-[250px] md:w-[400px] md:h-[250px] lg:w-[350px] lg:h-[300px] relative outline-double outline-8 outline-secondary cursor-pointer group transition-all duration-300 ease-in-out"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${product.image})`,
          }}
        ></div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center font-primary text-5xl">
          <h1>View</h1>
        </div>
      </Link>
      <h1 className="mt-8 text-center font-primary text-2xl text-secondary">{product.productName}</h1>
    </div>
  );
};

export default ProductBox;
