import React from "react";
import Heading from "../components/ui/Heading";
import Button from "../components/ui/Button";
import cat from "../assets/cat.png";

const PaymentSuccess = () => {
  return (
    <section className="section-style">
      <Heading
        text="Payment Successfull"
        textClassName="lg:text-5xl"
        secText="Congratulations! You are a Timeless Treasurer now....."
        rootClassName="px-8"
      />
      <Button
        path="/"
        text="Got to Home"
        rootClassName="mt-60 relative"
        image={cat}
        imageAlt="A cat."
        imageClassName="w-[140px] -top-40 right-0"
      />
    </section>
  );
};

export default PaymentSuccess;
