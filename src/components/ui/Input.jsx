import React from "react";

const Input = ({ type, placeholder, className }) => {
  return (
    <input
      type={type}
      className={`${className} input-style`}
      placeholder={placeholder}
    />
  );
};

export default Input;
