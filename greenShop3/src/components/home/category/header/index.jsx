import { Button, Select } from "antd";
import { useSearchParams } from "../../../../hooks/useSearchParams";
import { BarsOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setcategoryModal } from "../../../../redux/generic_slices/modals";

const Header = () => {
  const dispatch = useDispatch();
  const { setParams, getParams } = useSearchParams();

  const activeSelection =
    "text-[#46A358] border-b-2 border-[#46A358] font-bold";

  const type = getParams("type") ?? "all-plants";
  const sort = getParams("sort") ?? "default";
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

      <div className="flex items-center gap-2 max-md:hidden">
        <h3>Sort by:</h3>
        <Select
          value={options?.filter((item) => item.value === sort)[0]}
          onChange={(value) => setParams({ sort: value })}
          style={{ width: 150 }}
          options={options}
        />
      </div>
      <Button
        onClick={() => dispatch(setcategoryModal())}
        className="hidden max-md:flex items-center justify-center"
      >
        <BarsOutlined />
      </Button>
    </div>
  );
};

export default Header;
