import { Slider } from "antd";
import { useState } from "react";
import { useSearchParams } from "../../../../hooks/useSearchParams";

const PriceRange = () => {
  const { getParams, setParams } = useSearchParams();

  const min = Number(getParams("min") ?? 0);
  const max = Number(getParams("max") ?? 1500);
  const [range, SetRange] = useState([min, max]);

  return (
    <div className="mt-[36px] ">
      <h3 className="font-bold">Price Range</h3>
      <div className="pl-[30px] pr-[25px]">
        <Slider onChange={SetRange} value={range} range min={0} max={1500} />
        <div className="mt-[15px]">
          <p>
            Price:{" "}
            <span className="text-[#46a368] font-bold">
              ${range[0]} - ${range[1]}
            </span>
          </p>
        </div>
        <button
          type="button"
          className="w-[100px] h-[36px] bg-[#46A358] rounded-md flex items-center justify-center text-white gap-2 cursor-pointer mt-[16px]"
          onClick={() => {
            setParams({
              min: range[0],
              max: range[1],
            });
          }}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default PriceRange;
