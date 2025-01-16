import React from "react";
import { CgHomeAlt } from "react-icons/cg";
import { CiShop } from "react-icons/ci";
import { MdHistoryEdu } from "react-icons/md";
import { PiShoppingCartFill } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  // Function to check if a route is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="max-lg:w-full lg:gap-20 w-fit fixed z-50 top-0 right-0 lg:mt-4 lg:mr-4 p-4 lg:px-10 border-2 border-secondary flex max-lg:justify-evenly items-center lg:justify-end justify-between max-md:left-0 max-md:right-0 backdrop-filter backdrop-blur-md">
      <Link to="/" className="nav-link">
        <h1 className="max-lg:hidden">{isActive("/") ? "{ Home }" : "Home"}</h1>
        <CgHomeAlt className="lg:hidden md:text-3xl text-2xl" />
      </Link>
      <Link to="/about" className="nav-link">
        <h1 className="max-lg:hidden">
          {isActive("/about") ? "{ Our Story }" : "Our Story"}
        </h1>
        <MdHistoryEdu className="lg:hidden md:text-3xl text-2xl" />
      </Link>
      <Link to="/shop" className="nav-link">
        <h1 className="max-lg:hidden">
          {isActive("/shop") ? "{ Shop Treasure }" : "Shop Treasure"}
        </h1>
        <CiShop className="lg:hidden md:text-3xl text-2xl" />
      </Link>
      <Link to="/cart" className="nav-link">
        <h1 className="max-lg:hidden">
          {isActive("/cart") ? "{ Cart }" : "Cart"}
        </h1>
        <PiShoppingCartFill className="lg:hidden md:text-3xl text-2xl" />
      </Link>
    </nav>
  );
};

export default NavBar;
