import {
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthModal } from "../../redux/generic_slices/modals";
import AuthModal from "./modals/auth";
import useAuth from "../../configs/auth";

const Navbar = () => {
  const { isAuthed, getUser } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = getUser();

  return (
    <>
      <AuthModal />
      <div className="w-[80%] h-20 flex items-center justify-between border-b border-[#46A358] m-auto p-8">
        <div>
          <img
            className="cursor-pointer"
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            alt="logo"
          />
        </div>
        <div className="flex gap-[50px] items-center h-full">
          <h3
            onClick={() => navigate("/")}
            className="relative cursor-pointer before:w-full before:h-1 before:absolute hover:before:bg-[#46A358] before:bottom-[-28px]"
          >
            Home
          </h3>
          <h3 className="relative cursor-pointer before:w-full before:h-1 before:absolute  hover:before:bg-[#46A358] before:bottom-[-28px]">
            Blog
          </h3>
        </div>
        <div className="flex gap-[30px] ">
          <SearchOutlined className="text-[20px] cursor-pointer" />
          <ShoppingCartOutlined className="text-[20px] cursor-pointer" />
          {isAuthed() ? (
            <button className="w-[100px] h-[36px] bg-[#46A358] rounded-md flex items-center justify-center text-white gap-1">
              <LoginOutlined /> {user.name}
            </button>
          ) : (
            <button
              onClick={() => dispatch(setAuthModal())}
              className="w-[100px] h-[36px] bg-[#46A358] rounded-md flex items-center justify-center text-white gap-1"
            >
              <LoginOutlined /> Login
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
