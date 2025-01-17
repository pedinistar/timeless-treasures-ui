import React, { createContext, useState, useContext } from "react";
import products from "../data/products.json"; // Import the JSON file

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <ProductsContext.Provider value={{ products, cart, addToCart }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
