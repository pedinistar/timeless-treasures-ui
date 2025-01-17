import React from "react";
import bag from "../../assets/bag.png";
import Button from "../ui/Button";

const GoToCartButtonSection = () => {
  return (
    <section className="section-style overflow-hidden">
      <Button
        path="/cart"
        text="Got to Cart"
        rootClassName="mt-10 relative"
        image={bag}
        imageAlt="A bag."
        imageClassName="w-[100px] lg:w-[150px] lg:-left-[60px] lg:-top-[140px] -top-[100px] -left-0"
      />
      <p className="mt-8 font-secondary text-2xl text-light">
        Become a Timeless Treasurer.....
      </p>
    </section>
  );
};

export default GoToCartButtonSection;
