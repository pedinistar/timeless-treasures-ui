import React from "react";

const Heading = ({ text, secText, rootClassName }) => {
  return (
    <div className={`text-center ${rootClassName}`}>
      <h1 className="font-primary text-4xl text-light">
        {"{ "}
        {text}
        {" }"}
      </h1>
      <p className="font-secondary text-light text-2xl mt-6">{secText}</p>
    </div>
  );
};

export default Heading;
