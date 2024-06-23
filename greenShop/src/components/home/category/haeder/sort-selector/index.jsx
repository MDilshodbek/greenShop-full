import { Select } from "antd";
import { useSearchParams } from "../../../../../hooks/useSearchParams";

const SortSelector = () => {
  const { setParams, getParams } = useSearchParams();

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
    <div className="flex gap-2 items-center">
      <h3>Sort by:</h3>
      <Select
        value={options?.filter((item) => item.value === sort)[0]}
        onChange={(value) => {
          setParams({ sort: value });
        }}
        style={{ width: 150 }}
        options={options}
      />
    </div>
  );
};

export default SortSelector;
