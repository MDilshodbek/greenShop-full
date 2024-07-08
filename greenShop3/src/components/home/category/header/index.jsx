import { Button } from "antd";
import { useSearchParams } from "../../../../hooks/useSearchParams";
import { BarsOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setcategoryModal } from "../../../../redux/generic_slices/modals";
import SortSelector from "./sort-Selector";

const Header = () => {
  const dispatch = useDispatch();
  const { setParams, getParams } = useSearchParams();

  const activeSelection =
    "text-[#46A358] border-b-2 border-[#46A358] font-bold";

  const type = getParams("type") ?? "all-plants";

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
      <div className="max-md:hidden">
        <SortSelector />
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
