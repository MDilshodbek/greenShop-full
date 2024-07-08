import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModal } from "../../../../redux/generic_slices/modals";
import Login from "./login";
import Register from "./register";
import { useState } from "react";

const AuthModal = () => {
  const dispatch = useDispatch();
  const { authModal } = useSelector(({ modal }) => modal);
  const [active, setActive] = useState("login");

  return (
    <Modal
      open={authModal}
      onCancel={() => dispatch(setAuthModal())}
      footer={false}
    >
      <div className="flex gap-2.5 mt-6 items-center justify-center">
        <h3
          onClick={() => setActive("login")}
          className={`cursor-pointer text-xl transition-all ${
            active === "login" && "text-[#46A358]"
          }`}
        >
          Login
        </h3>
        <div className="border h-4 bg-[#3D3D3D]" />
        <h3
          onClick={() => setActive("register")}
          className={`cursor-pointer text-xl transition-all ${
            active === "register" && "text-[#46A358]"
          }`}
        >
          Register
        </h3>
      </div>
      {active === "login" ? <Login /> : <Register />}
    </Modal>
  );
};

export default AuthModal;
