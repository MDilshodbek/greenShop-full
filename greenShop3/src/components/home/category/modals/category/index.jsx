import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import setcategoryModal from "../../../../../redux/generic_slices/modals";

const Category = () => {
  const dispatch = useDispatch();
  const { categoryModal } = useSelector(({ modal }) => modal);

  return (
    <Modal
      onCancel={() => dispatch(setcategoryModal())}
      open={categoryModal}
      title="Categories"
    >
      123
    </Modal>
  );
};

export default Category;
