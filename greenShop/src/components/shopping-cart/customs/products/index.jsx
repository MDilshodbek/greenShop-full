import Pro_Card from "./pro_card";

const Products = () => {
  return (
    <div className="w-[65%] max-lg:w-[100%]">
      <div className="pb-[11px] border-b border[#46A35880] flex max-md:hidden ">
        <h3 className="w-[40%]">Products</h3>
        <h3 className="w-[20%]">Price</h3>
        <h3 className="w-[20%]">Quantity</h3>
        <h3 className="w-[20%]">Total</h3>
      </div>
      <div className="flex flex-col gap-5 mt-[11px]">
        <Pro_Card />
      </div>
    </div>
  );
};

export default Products;
