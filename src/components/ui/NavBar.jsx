import React from "react";
import { CgHomeAlt } from "react-icons/cg";
import { CiShop } from "react-icons/ci";
import { MdHistoryEdu } from "react-icons/md";
import { PiShoppingCartFill } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import clock from "../../assets/clock.png";

const NavBar = () => {
  const location = useLocation();

  // Function to check if a route is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="lg:gap-20 gap-10 w-full fixed z-50 top-0 left-0 p-4 lg:px-10 border-2 border-secondary flex items-center justify-center backdrop-filter backdrop-blur-md">
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
      <Link to="/" className="nav-link lg:hidden">
        <img src={clock} alt="A clock." width={40} />
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
