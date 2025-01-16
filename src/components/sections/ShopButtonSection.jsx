import React from "react";
import flower from "../../assets/flower.png";
import Button from "../ui/Button";

const ShopButtonSection = () => {
  return (
    <section className="section-style">
      <Button
        path="/shop"
        text="Shop Treasure"
        rootClassName="mt-10 relative"
        image={flower}
        imageAlt="A flower."
        imageClassName="w-[200px] -right-20 -top-[100px]"
      />
      <p className="mt-8 font-secondary text-2xl text-light">
        Explore the shop.....
      </p>
    </section>
  );
};

export default ShopButtonSection;
