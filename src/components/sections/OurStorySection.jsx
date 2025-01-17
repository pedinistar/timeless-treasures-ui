import React from "react";
import Heading from "../ui/Heading";
import pen from "../../assets/pen.png";
import lamp from "../../assets/lamp.png";
import inkPot from "../../assets/inkpot.png";

const OurStorySection = () => {
  return (
    <section className="section-style relative">
      <img src={lamp} alt="A lamp." className="max-lg:hidden absolute left-0 top-20" />
      <img
        src={inkPot}
        alt="A ink pot."
        width={90}
        className="lg:hidden absolute right-0 -bottom-10"
      />
      <Heading text="{ Our Story }" rootClassName="mt-20"/>
      <div className="text-center relative border-t-2 border-secondary border-opacity-20">
        <p className="font-secondary text-2xl lg:text-4xl text-light mt-10 lg:mt-32">
          Welcome to a place of stories untold, <br />
          where treasures whisper of ages old. <br />
          each piece a keeper of time’s embrace, <br />
          crafted with care, with charm and grace. <br />
          discover the beauty in every find, <br />
          timeless treasures for heart and mind.....
        </p>
        <img src={pen} alt="A pen." className="max-lg:hidden absolute bottom-0 -right-72" />
      </div>
    </section>
  );
};

export default OurStorySection;
