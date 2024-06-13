import { Slider } from "antd";
import { useState } from "react";

const PriceRange = () => {
  const [range, setRange] = useState([0, 1500]);
  return (
    <div className="mt-[38px]">
      <h3 className="font-bold">Price Range</h3>
      <div className="pl-[12px] w-full">
        <Slider min={0} max={1500} onChange={setRange} range />
        <div>
          price:
          <span className="text-[#46A358] font-bold">
            ${range[0]} - ${range[1]}
          </span>
        </div>
        <button
          primary
          className="w-[100px] h-[35px] bg-[#46a358] flex gap-2 items-center justify-center rounded-md text-white cursor-pointer mt-2"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default PriceRange;
