import { Select } from "antd";
import { useSearchParams } from "../../../../hooks/useSearchParams";

const Header = () => {
  const { setParams, getParams } = useSearchParams();

  const activeSelection =
    "text-[#46A358] border-b-2 border-[#46A358] font-bold";

  const type = getParams("type");
  const sort = getParams("sort");
  const options = [
    {
      value: "default",
      label: "Default",
    },
    {
      value: "the-cheapest",
      label: "The Cheapest",
    },
    {
      value: "medium",
      label: "Medium",
    },
    {
      value: "most-expensive",
      label: "Most Expensive",
    },
  ];

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-5">
        <h3
          onClick={() => setParams({ type: "all-plants" })}
          className={`cursor-pointer ${
            type === "all-plants" && activeSelection
          }`}
        >
          All Plants
        </h3>
        <h3
          onClick={() => setParams({ type: "new-arrivals" })}
          className={`cursor-pointer ${
            type === "new-arrivals" && activeSelection
          }`}
        >
          New Arrivals
        </h3>
        <h3
          onClick={() => setParams({ type: "sale" })}
          className={`cursor-pointer ${type === "sale" && activeSelection}`}
        >
          Sale
        </h3>
      </div>

      <div className="flex items-center gap-2">
        <h3>Sort by:</h3>
        <Select
          labelInValue
          defaultValue={options?.filter((item) => item.value === sort)}
          onChange={(value) => setParams({ sort: value.value })}
          style={{ width: 150 }}
          options={options}
        />
      </div>
    </div>
  );
};

export default Header;
