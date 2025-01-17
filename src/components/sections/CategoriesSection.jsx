import React from "react";
import CategoryBox from "../ui/CategoryBox";
import Heading from "../ui/Heading";

const CategoriesSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <Heading text="{ Categories }" secText="Vintage Treasures" />
      <div className="max-sm:mt-10 mt-20">
        <div className="grid lg:grid-cols-2 gap-14 mt-0 md:mt-10 lg:mt-20">
          {/* Category 1 */}
          <CategoryBox
            path="/shop"
            image="https://images.unsplash.com/photo-1614306539687-d59cc9ce2931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            text="Items"
          />

          {/* Category 2 */}
          <CategoryBox
            path="/shop"
            image="https://images.unsplash.com/photo-1464206704386-46415fa8107c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            text="Books"
          />
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
