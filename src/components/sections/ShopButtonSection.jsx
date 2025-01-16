import React from "react";
import flower from "../../assets/flower.png";
import Button from "../ui/Button";

const ShopButtonSection = () => {
  return (
    <section className="section-style overflow-hidden">
      <Button
        path="/shop"
        text="Shop Treasure"
        rootClassName="mt-10 relative"
        image={flower}
        imageAlt="A flower."
        imageClassName="w-[150px] lg:w-[200px] lg:-right-20 lg:-top-[100px] -top-[80px] -right-14"
      />
      <p className="mt-8 font-secondary text-2xl text-light">
        Explore the shop.....
      </p>
    </section>
  );
};

export default ShopButtonSection;
