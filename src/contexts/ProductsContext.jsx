import React, { createContext, useState, useContext, useEffect } from "react";
import products from "../data/products.json"; // Import the JSON file

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    // Validate and ensure cart items have the correct structure
    const parsedCart = savedCart ? JSON.parse(savedCart) : [];
    return parsedCart.filter((item) => item && item.productName); // Remove invalid items
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    // Check if product is already in cart before adding it
    setCart((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev; // Product already in cart, no need to add
      }
      return [...prev, product];
    });
    alert("Product added to cart!");
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <ProductsContext.Provider
      value={{ products, cart, addToCart, removeFromCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
