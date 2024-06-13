import Categories from "./categories";
import Discount from "./discount";
import PriceRange from "./price-range";
import Sizes from "./size";

const SideNav = () => {
  return (
    <div className="w-[310px] mt-[46px] bg-[#f5f5f5] px-[18px] py-[14px] ml-[100px]">
      <Categories />
      <PriceRange />
      <Sizes />
      <Discount />
    </div>
  );
};

export default SideNav;
