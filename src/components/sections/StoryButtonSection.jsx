import React from "react";
import womanReading from "../../assets/woman-reading.png";
import Button from "../ui/Button";

const StoryButtonSection = () => {
  return (
    <section className="section-style">
      <Button
        path="/about"
        text="Our Story"
        rootClassName="mt-10"
        image={womanReading}
        imageAlt="A woman reading."
        imageClassName="w-[250px] -top-[320px] right-[60px]"
      />
    </section>
  );
};

export default StoryButtonSection;
