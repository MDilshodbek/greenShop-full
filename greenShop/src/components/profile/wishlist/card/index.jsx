import {
  HeartFilled,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../configs/auth";
import useAxios from "../../../../hooks/axios";
import { useQueryClient } from "@tanstack/react-query";
import { useShoppingService } from "../../../../services/shopping";

const Card = (props) => {
  const { getUser, updateUser } = useAuth();
  const user = getUser();
  const axios = useAxios();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { onAdd } = useShoppingService();

  const { title, main_image, price, _id, category } = props;

  const viewProduct = () => {
    navigate(`/product/${category}/${_id}`);
  };

  const onDislike = async ({ _id }) => {
    queryClient.setQueryData(["wishlist"], (prev = []) => {
      console.log(prev, "previous values");

      return prev.filter((value) => value._id !== _id);
    });

    updateUser({
      setter: {
        ...user,
        wishlist: user.wishlist.filter((value) => value._id !== _id),
      },
    });

    await axios({
      url: "/user/delete-wishlist",
      method: "DELETE",
      data: {
        _id,
      },
    });
  };

  return (
    <div className="flex flex-col max-md:hidden w-[300px]">
      <div className="w-full h-[300px] bg-[#fbfbfb] relative group">
        <img className="w-full h-full" src={main_image} alt="flower" />
        <div className="absolute bottom-6 z-10 gap-4 left-[70px] hidden group-hover:flex">
          <div
            onClick={() => onAdd(props)}
            className="w-[35px] h-[35px] rounded-md cursor-pointer bg-white flex items-center justify-center"
          >
            <ShoppingCartOutlined />
          </div>
          <div
            onClick={() => onDislike(props)}
            className="w-[35px] h-[35px] rounded-md cursor-pointer bg-white flex items-center justify-center"
          >
            <HeartFilled className="text-[#ff0505]" />
          </div>
          <div
            onClick={viewProduct}
            className="w-[35px] h-[35px] rounded-md cursor-pointer bg-white flex items-center justify-center"
          >
            <SearchOutlined />
          </div>
        </div>
      </div>
      <h3>{title}</h3>
      <p className="font-bold text-[#46A358]">$ {price}</p>
    </div>
  );
};

export default Card;
