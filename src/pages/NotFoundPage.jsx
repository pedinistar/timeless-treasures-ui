import React from "react";
import Button from "../components/ui/Button";
import cup from "../assets/cup.png";

const NotFound = () => {
  return (
    <section className="w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      <h1 className="text-6xl text-light font-bold font-primary mb-4">404</h1>
      <p className="text-light font-secondary text-2xl mb-6">Page Not Found</p>
      <Button
        path="/"
        text="Go Home"
        rootClassName="mt-10 relative"
        image={cup}
        imageAlt="A cup."
        imageClassName="w-36 absolute lg:-right-40 -right-20 -top-24"
      />
    </section>
  );
};

export default NotFound;
