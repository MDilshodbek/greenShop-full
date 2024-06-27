import Categories from "./categories";
import Discount from "./discount";
import PriceRange from "./price-range";
import Size from "./size";

const SideNav = () => {
  return (
    <div className="w-[310px] bg-[#f5f5f5] flex flex-col px-[18px] py-[14px] max-md:hidden">
      <Categories />
      <PriceRange />
      <Size />
      <Discount />
    </div>
  );
};

export default SideNav;
