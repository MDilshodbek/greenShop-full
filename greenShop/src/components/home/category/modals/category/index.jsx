import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryModal } from "../../../../../redux/generic-slices/modals";
import Categories from "../../../sidenav/categories";
import PriceRange from "../../../sidenav/price-range";
import Sizes from "../../../sidenav/size";
import SortSelector from "../../haeder/sort-selector";

const Category = () => {
  const dispatch = useDispatch();
  const { categoryModal } = useSelector(({ modal }) => modal);

  return (
    <Modal
      onCancel={() => dispatch(setCategoryModal())}
      onOk={() => dispatch(setCategoryModal())}
      open={categoryModal}
      title="Categories"
    >
      <Categories />
      <PriceRange />
      <Sizes />
      <div className="flex gap-2 items-center mt-4">
        <SortSelector />
      </div>
    </Modal>
  );
};

export default Category;
