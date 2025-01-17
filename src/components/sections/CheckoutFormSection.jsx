import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";
import React from "react";

const CheckoutFormSection = () => {
  return (
    <section className="h-fit mt-32 mb-40">
      <div className="flex gap-4">
        <Input isDisabled={true} placeholder="Name" />
        <Input isDisabled={true} placeholder="E-mail" />
      </div>
      <div className="flex gap-4 mt-4">
        <Input isDisabled={true} placeholder="Card-DetailsXXXXX" />
        <Input isDisabled={true} placeholder="YYYY-XXXX" />
      </div>
      <div className="mt-20 text-center">
        <Button path="/payment-success" text="Proceed to Checkout" rootClassName="mb-6"/>
        <Link to="/" className="text-2xl text-center text-secondary">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default CheckoutFormSection;
