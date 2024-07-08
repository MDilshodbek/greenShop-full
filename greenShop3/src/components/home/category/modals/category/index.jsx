import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setcategoryModal } from "../../../../../redux/generic_slices/modals";
import Categories from "../../../side-nav/categories";
import PriceRange from "../../../side-nav/price-range";
import SortSelector from "../../header/sort-Selector";

const Category = () => {
  const dispatch = useDispatch();
  const { categoryModal } = useSelector(({ modal }) => modal);

  return (
    <Modal
      onCancel={() => dispatch(setcategoryModal())}
      onOk={() => dispatch(setcategoryModal())}
      open={categoryModal}
      title="Categories"
    >
      <Categories />
      <PriceRange />
      <div className="mt-5">
        <SortSelector />
      </div>
    </Modal>
  );
};

export default Category;
