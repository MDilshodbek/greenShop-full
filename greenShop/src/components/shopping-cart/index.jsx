import ShoppingHeader from "./customs/header";
import Products from "./customs/products";
import Total from "./customs/total";

const ShoppingCart = () => {
  return (
    <div className="w-[80%] m-auto">
      <ShoppingHeader />
      <div className="flex justify-between gap-9 max-lg:flex-col mt-[50px]">
        <Products />
        <Total />
      </div>
    </div>
  );
};

export default ShoppingCart;
