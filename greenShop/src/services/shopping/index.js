import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../configs/auth";
import useAxios from "../../hooks/axios";
import { setlikedFLowers } from "../../redux/slices/wishlist";

export const useShoppingService = () => {
  const { updateUser, getUser } = useAuth();
  const user = getUser();
  const axios = useAxios();
  const dispatch = useDispatch();
  const { products, coupon } = useSelector(({ shopping }) => shopping);
  const { likedFLowers } = useSelector(({ wishlist }) => wishlist);

  const likeAdd = async (flower) => {
    const isFlowerLiked = likedFLowers.some((item) => item._id === flower._id);
    console.log("Flower to be added:", flower);
    console.log("Current wishlist:", likedFLowers);

    if (isFlowerLiked) {
      return notification.error({
        message: "The flower you chose is already on the wishlist",
      });
    }

    // Add the flower to the wishlist in the local state
    const updatedFlowers = [...likedFLowers, { ...flower }];

    // Update Redux state
    dispatch(setlikedFLowers(updatedFlowers));

    // Update local storage
    localStorage.setItem("likedFLowers", JSON.stringify(updatedFlowers));

    try {
      // Make the API call to update the backend wishlist
      await axios({
        url: "/user/create-wishlist",
        method: "POST",
        data: {
          _id: flower._id,
        },
      });

      console.log("Flower added to wishlist:", flower);
    } catch (error) {
      console.error("Failed to add flower to the wishlist:", error);
      // Rollback local and Redux state if needed
      dispatch(setlikedFLowers(likedFLowers));
      localStorage.setItem("likedFLowers", JSON.stringify(likedFLowers));
    }
  };

  const onAdd = (product) => {
    const index = products.find((item) => item._id === product._id);

    notification.success({ message: "Product added to cart" });

    if (!index) {
      const newProduct = [...products, { ...product, quantity: 1 }];
      localStorage.setItem("products", JSON.stringify(newProduct));
      return dispatch(setShoppingProducts(newProduct));
    }

    const newProduct = products.map((item) =>
      item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
    );

    localStorage.setItem("products", JSON.stringify(newProduct));

    dispatch(setShoppingProducts(newProduct));
  };

  //   if (!index) {
  //     const newProduct = { ...product, quantity: 1 };
  //     const updatedProducts = [...products, newProduct];
  //     localStorage.setItem(
  //       "products",
  //       JSON.stringify([...products, updatedProducts])
  //     );
  //     return dispatch(setShoppingProducts(updatedProducts));
  //   }

  //   const updatedProducts = products.map((item) =>
  //     item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
  //   );

  //   localStorage.setItem("products", JSON.stringify(updatedProducts));

  //   dispatch(setShoppingProducts(updatedProducts));
  // };

  const onDelete = (product) => {
    const newProduct = products.filter((item) => item._id !== product._id);

    localStorage.setItem("products", JSON.stringify(newProduct));

    dispatch(setShoppingProducts(newProduct));
    notification.success({ message: "Product removed from cart" });
  };

  const onIncrement = (product) => {
    const newProduct = products.map((item) =>
      item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem("products", JSON.stringify(newProduct));

    dispatch(setShoppingProducts(newProduct));
  };

  const onDecrement = (product) => {
    const newProduct = products.map((item) =>
      item._id === product._id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );

    localStorage.setItem("products", JSON.stringify(newProduct));

    dispatch(setShoppingProducts(newProduct));
  };

  const onClear = () => {
    localStorage.removeItem("products");
    dispatch(setShoppingProducts([]));
  };

  const applyCoupon = async (coupon_code) => {
    const { data } = await axios({
      url: "/features/coupon",
      method: "GET",
      params: { coupon_code },
    });
    notification.success({ message: "Coupon applied successfully" });

    dispatch(setCoupon(data?.data));
  };

  const setInitial = () => {
    localStorage.removeItem("products");
    dispatch(setShoppingProducts([]));
    dispatch(setCoupon(null));
  };

  return {
    onAdd,
    products,
    onDelete,
    onIncrement,
    onDecrement,
    applyCoupon,
    onClear,
    setInitial,
    coupon,
    likeAdd,
  };
};
