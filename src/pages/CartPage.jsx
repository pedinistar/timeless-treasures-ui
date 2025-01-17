import React from "react";
import { useProducts } from "../contexts/ProductsContext";
import Heading from "../components/ui/Heading";
import emptyCart from "../assets/empty-cart.png";
import { RxCross2 } from "react-icons/rx";
import CheckoutFormSection from "../components/sections/CheckoutFormSection";

const CartPage = () => {
  const { cart, removeFromCart } = useProducts();

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <section className="pt-40 lg:px-72 px-4 font-primary text-light">
      <Heading text="Cart" />
      {cart.length === 0 ? (
        <div className="w-full min-h-screen flex justify-center flex-col items-center">
          <h1 className="text-center mt-20 text-2xl text-secondary">
            Your cart is empty!
          </h1>
          <img
            src={emptyCart}
            alt="A woman sitting."
            className="w-[200px] md:w-[300px] mt-10"
          />
        </div>
      ) : (
        <div className="mt-10">
          <table className="w-full text-left text-xl mt-20 hidden lg:table">
            <thead>
              <tr className="max-lg:text-xs">
                <th className="border-b py-4">ID</th>
                <th className="border-b py-4">Name</th>
                <th className="border-b py-4">Price</th>
                <th className="border-b py-4 flex items-center justify-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item.id} className="border-b">
                  <td className="py-4">{index + 1}</td>
                  <td className="py-4">{item.productName}</td>
                  <td className="py-4">$ {item.price}</td>
                  <td className="py-4">
                    <button
                      className="text-secondary text-2xl w-full flex items-center justify-center"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <RxCross2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {cart.map((item, index) => (
              <div
                key={item.id}
                className="border-b py-4 flex justify-between items-center"
              >
                <div className="flex-1">
                  <p className="font-bold">Product {index + 1}</p>
                  <p>{item.productName}</p>
                  <p>$ {item.price}</p>
                </div>
                <button
                  className="text-secondary text-2xl"
                  onClick={() => removeFromCart(item.id)}
                >
                  <RxCross2 />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-end gap-10 text-right text-2xl">
            <h2 className="text-secondary">Total: </h2>
            <h2>${calculateTotal()}</h2>
          </div>
        </div>
      )}

      <CheckoutFormSection />
    </section>
  );
};

export default CartPage;
