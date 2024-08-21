import {
  DashboardOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import AccountDetails from "../../components/profile/account-details";
import Address from "../../components/profile/adress";
import Wishlist from "../../components/profile/wishlist";

export const carousel_mock = [
  {
    id: 1,
    subTitle: "WELCOME TO GREENSHOP",
    title: "LET'S MAKE A BETTER",
    description:
      " We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    buttonText: "SHOP NOW",
    bigImage:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
    smallImage:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
  },
  {
    id: 2,
    subTitle: "WELCOME TO GREENSHOP",
    title: "LET'S MAKE A BETTER",
    description:
      " We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    buttonText: "SHOP NOW",
    bigImage:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
    smallImage:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
  },
  {
    id: 3,
    subTitle: "WELCOME TO GREENSHOP",
    title: "LET'S MAKE A BETTER",
    description:
      " We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    buttonText: "SHOP NOW",
    bigImage:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
    smallImage:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
  },
];

export const dashboard_mock = [
  {
    path: "",
    Icon: UserOutlined,
    Component: AccountDetails,
    title: "Account Details",
    id: 0,
  },
  {
    path: "my-products",
    Icon: ShoppingOutlined,
    Component: AccountDetails,
    title: "My Products",
    id: 1,
  },
  {
    path: "address",
    Icon: EnvironmentOutlined,
    Component: Address,
    title: "Address",
    id: 2,
  },
  {
    path: "wishlist",
    Icon: HeartOutlined,
    Component: Wishlist,
    title: "Wishlist",
    id: 3,
  },
  {
    path: "track-order",
    Icon: DashboardOutlined,
    Component: AccountDetails,
    title: "Track Order",
    id: 4,
  },
];
