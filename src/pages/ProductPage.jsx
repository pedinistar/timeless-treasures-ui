import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductsContext";
import Heading from "../components/ui/Heading";
import Button from "../components/ui/Button";
import GoToShopButtonSection from "../components/sections/GoToShopButtonSection";

const ProductPage = () => {
  const { id } = useParams();
  const { products, addToCart } = useProducts();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h1 className="text-center text-2xl mt-10">Product not found!</h1>;
  }

  return (
    <section className="w-full flex items-center flex-col pt-40 lg:px-80 px-10 font-primary text-light">
      <Heading text={product.productName} secText={product.description} />

      <div
        className="mt-8 border-4 border-secondary bg-cover bg-center h-[500px] w-full"
        style={{ backgroundImage: `url(${product.image})` }}
        aria-label={product.productName}
      />

      <div className="w-full flex max-lg:flex-col max-lg:gap-10 items-center justify-between mt-20">
        <h1 className="text-4xl">$ {product.price}</h1>
        <Button
          text="Add To Cart"
          rootClassName="w-fit"
          onClickHandler={() => addToCart(product)}
        />
      </div>

      <div className="w-full mt-20 lg:mt-40 text-center lg:text-left">
        <h1 className="text-4xl">Product History</h1>
        <p className="font-secondary text-3xl lg:text-4xl mt-10">
          {product.history}
        </p>
      </div>

      <div className="w-full mt-20 lg:mt-40 text-center lg:text-left">
        <h1 className="text-4xl">Product Condition</h1>
        <p className="font-secondary text-3xl lg:text-4xl mt-10">
          {product.conditionDetails}
        </p>
      </div>

      <GoToShopButtonSection />
    </section>
  );
};

export default ProductPage;
