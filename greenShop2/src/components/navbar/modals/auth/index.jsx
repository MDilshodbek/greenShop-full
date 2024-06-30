import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setauthModal } from "../../../../redux/generic-slices/modals";
import Login from "./login";
import { useState } from "react";
import Register from "./register";

const AuthModal = () => {
  const dispatch = useDispatch();
  const { authModal } = useSelector(({ modal }) => modal);
  const [active, setActive] = useState("login");
  return (
    <Modal
      open={authModal}
      footer={false}
      onCancel={() => dispatch(setauthModal())}
      onOk={() => dispatch(setauthModal())}
    >
      <div className="flex mt-6 gap-2.5 items-center justify-center">
        <h3
          className={`cursor-pointer text-xl transitio-all ${
            active === "login" && "text-[#46A358]"
          }`}
          onClick={() => setActive("login")}
        >
          Login
        </h3>
        <div className="border h-4 bg-[#3d3d3d]" />
        <h3
          className={`cursor-pointer text-xl transitio-all ${
            active === "register" && "text-[#46A358]"
          }`}
          onClick={() => setActive("register")}
        >
          Register
        </h3>
      </div>
      {active === "login" ? <Login /> : <Register />}
    </Modal>
  );
};

export default AuthModal;
