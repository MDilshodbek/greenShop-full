import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setauthModal } from "../../../../redux/generic-slices/modals";

const AuthModal = () => {
  const dispatch = useDispatch();
  const { authModal } = useSelector(({ modal }) => modal);
  return (
    <Modal
      open={authModal}
      footer={false}
      onCancel={() => dispatch(setauthModal())}
    >
      123
    </Modal>
  );
};

export default AuthModal;
