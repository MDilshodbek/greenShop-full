import {
  HeartFilled,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import useAuth from "../../../../../configs/auth";
import { useDispatch, useSelector } from "react-redux";
import { setauthModal } from "../../../../../redux/generic-slices/modals";
import { useNavigate } from "react-router-dom";
import { useShoppingService } from "../../../../../services/shopping";
import { notification } from "antd";
import { useEffect, useState } from "react";

const Card = (props) => {
  const { isAuthed } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { onAdd, likeAdd } = useShoppingService();
  const { likedFLowers } = useSelector(({ wishlist }) => wishlist); // Access the liked flowers state

  const { title, main_image, price, _id, category } = props;

  const [isLiked, setIsLiked] = useState(false);

  // Check if the current flower is in the wishlist
  useEffect(() => {
    setIsLiked(likedFLowers.some((item) => item._id === _id));
  }, [likedFLowers, _id]);

  const viewProduct = () => {
    navigate(`/product/${category}/${_id}`);
  };

  const handleAddToWishList = async () => {
    if (!isAuthed()) {
      // If the user is not logged in, show the authentication modal
      return dispatch(setauthModal());
    }

    try {
      await likeAdd(props);
      // Update local state to reflect the addition
      setIsLiked(true);
    } catch (error) {
      console.error("Failed to add flower to the wishlist:", error);
    }
  };

  return (
    <div>
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
              onClick={handleAddToWishList}
              className="w-[35px] h-[35px] rounded-md cursor-pointer bg-white flex items-center justify-center"
            >
              {isLiked ? (
                <HeartFilled className="text-[#ff0505]" />
              ) : (
                <HeartOutlined />
              )}
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
      <div className="hidden max-md:flex flex-col min-w-[640px]">
        <div className="w-fit h-[200px] bg-[#fbfbfb] relative group">
          <img className="w-full h-full" src={main_image} alt="flower" />
          <div className="absolute bottom-6 z-10 gap-4 left-[70px] hidden group-hover:flex">
            <div className="w-[35px] h-[35px] rounded-md cursor-pointer bg-white flex items-center justify-center">
              <ShoppingCartOutlined />
            </div>
            <div
              onClick={handleAddToWishList}
              className="w-[35px] h-[35px] rounded-md cursor-pointer bg-white flex items-center justify-center"
            >
              {isLiked ? (
                <HeartFilled className="text-[#ff0505]" />
              ) : (
                <HeartOutlined />
              )}
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
    </div>
  );
};

export default Card;
