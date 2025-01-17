import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductsContext";

const ProductPage = () => {
  const { id } = useParams();
  const { products, addToCart } = useProducts();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h1 className="text-center text-2xl mt-10">Product not found!</h1>;
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl">{product.productName}</h1>
      <img
        src={product.image}
        alt={product.productName}
        className="w-full max-w-md"
      />
      <p className="text-lg">{product.description}</p>
      <p className="text-lg">{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-secondary text-white py-2 px-4 mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
