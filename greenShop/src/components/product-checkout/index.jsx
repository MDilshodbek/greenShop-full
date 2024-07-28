import BillingAdress from "./customs/billing-adress";
import CheckoutHeader from "./customs/header";
import Order from "./customs/order";

const ProductCheckout = () => {
  return (
    <div className="w-[80%] m-auto">
      <CheckoutHeader />
      <div className=" mt-[30px] mb-[30px] flex justify-between gap-9 max-md:flex-col mt-[50px]">
        <BillingAdress />
        <Order />
      </div>
    </div>
  );
};

export default ProductCheckout;
