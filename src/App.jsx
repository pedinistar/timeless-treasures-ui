import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import clock from "./assets/clock.png";
import { CgHomeAlt } from "react-icons/cg";
import { MdHistoryEdu } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { PiShoppingCartFill } from "react-icons/pi";

const App = () => {
  return (
    <BrowserRouter>
      <main className="w-full min-h-screen bg-primary">
        <nav className="max-md:w-full w-fit fixed z-50 top-0 right-0 lg:mt-4 mr-4 p-4 lg:px-14 border-2 border-secondary flex md:gap-20 max-md:justify-evenly items-center lg:justify-end justify-between max-md:left-0 max-md:right-0">
          <Link to="/" className="nav-link">
            <h1 className="max-lg:hidden">Home</h1>
            <CgHomeAlt className="lg:hidden md:text-4xl text-2xl" />
          </Link>
          <Link to="/about" className="text-light font-primary">
            <h1 className="max-lg:hidden">Our Story</h1>
            <MdHistoryEdu className="lg:hidden md:text-4xl text-2xl" />
          </Link>
          <Link to="/shop" className="text-light font-primary">
            <h1 className="max-lg:hidden">Shop Treasure</h1>
            <CiShop className="lg:hidden md:text-4xl text-2xl" />
          </Link>
          <Link to="/cart" className="text-light font-primary">
            <h1 className="max-lg:hidden">Cart</h1>
            <PiShoppingCartFill className="lg:hidden md:text-4xl text-2xl" />
          </Link>
          <img
            src={clock}
            alt="A clock."
            width={45}
            className="max-lg:hidden"
          />
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
