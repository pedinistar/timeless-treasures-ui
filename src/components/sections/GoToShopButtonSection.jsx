import React from "react";
import cup from "../../assets/cup2.png";
import Button from "../ui/Button";

const GoToShopButtonSection = () => {
  return (
    <section className="section-style overflow-hidden">
      <Button
        path="/shop"
        text="Got to Shop"
        rootClassName="mt-10 relative"
        image={cup}
        imageAlt="A cup."
        imageClassName="w-[140px] lg:-top-10 lg:-right-20 -top-20 right-10"
      />
      <p className="mt-8 font-secondary text-2xl text-light">
        Explore more antiques.....
      </p>
    </section>
  );
};

export default GoToShopButtonSection;
