import React from "react";

const Input = ({ type, placeholder, className, isDisabled }) => {
  return (
    <input
      type={type}
      disabled={isDisabled}
      className={`${className} input-style`}
      placeholder={placeholder}
    />
  );
};

export default Input;
