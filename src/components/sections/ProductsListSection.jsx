import React, { useState } from "react";
import Heading from "../ui/Heading";
import ProductBox from "../ui/ProductBox";
import { useProducts } from "../../contexts/ProductsContext";

const ProductsListSection = () => {
  const { products } = useProducts();
  const [selectedCondition, setSelectedCondition] = useState("");

  // Filter products based on the selected condition
  const filteredProducts = selectedCondition
    ? products.filter((product) => product.condition === selectedCondition)
    : products;

  return (
    <section className="min-h-screen pt-40">
      <div className="mt-10 mb-20">
        <Heading
          text="{ Treasure Shop }"
          textClassName="max-lg:text-3xl"
          secText="Relive history, Own the legacy......"
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:min-h-screen">
        {/* Filters */}
        <div className="left lg:w-[30%] w-full px-6 md:py-10 md:px-20 text-secondary">

          <div className="max-md:grid max-md:grid-cols-2 gap-4">
            {["Mint", "Restored", "Authentic", "Replica"].map(
              (condition) => (
                <div key={condition} className="flex items-center gap-4 mb-4">
                  <input
                    type="radio"
                    id={condition}
                    name="condition"
                    value={condition}
                    onChange={(e) => setSelectedCondition(e.target.value)}
                    className="hidden peer"
                  />
                  <label
                    htmlFor={condition}
                    className="w-6 h-6 rounded-full border-2 border-secondary flex items-center justify-center peer-checked:bg-light peer-checked:border-light relative"
                  >
                    <div className="w-3 h-3 bg-secondary rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                  </label>
                  <label htmlFor={condition} className="text-sm md:text-base lg:text-xl font-primary">
                    {condition}
                  </label>
                </div>
              )
            )}
          </div>
          {/* Clear Filter */}
          <button
            onClick={() => setSelectedCondition("")}
            className="mt-6 max-lg:w-full font-primary border-2 border-secondary px-4 py-2 hover:bg-light hover:text-primary duration-500"
          >
            Clear Filter
          </button>
        </div>

        {/* Products */}
        <div className="right flex-1">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductBox key={product.id} product={product} />
              ))
            ) : (
              <p className="text-xl font-primary">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsListSection;
