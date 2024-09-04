import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../../hooks/axios";
import { useDispatch } from "react-redux";
import { setAddModal } from "../../../redux/generic-slices/modals";

export const useMyProductFeatures = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const onDelete = async ({ _id, category }) => {
    queryClient.setQueriesData(["my-products"], (oldData) => {
      return oldData.filter((product) => product._id !== _id);
    });

    await axios({
      url: `/user/product/${category}`,
      method: "DELETE",
      data: { _id },
    });
  };

  const onPublish = async (e) => {
    const formattedUploadData = {
      title: e.title,
      price: e.price,
      discount: Boolean(e.discount_price),
      short_description: e.short_description,
      description: e.description,
      main_image: e.main_image.file.response.image_url.url,
      discount_price: Number(e.discount_price),
      detailed_images: [
        e.detailed_image_1.file.response.image_url.url,
        e.detailed_image_2.file.response.image_url.url,
        e.detailed_image_3.file.response.image_url.url,
        e.detailed_image_4.file.response.image_url.url,
      ],
      category: e.category,
    };
    const { data } = await axios({
      url: `/flow/category/${e.category}`,
      method: "POST",
      data: formattedUploadData,
    });

    console.log(data);
  };

  const onCancelRequest = () => {
    dispatch(setAddModal({ addModal: false }));
  };

  const products = useQuery({
    queryKey: ["my-products"],
    queryFn: async () => {
      const { data } = await axios({
        method: "GET",
        url: "/user/products",
      });

      return data;
    },
  });

  const category = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const { data } = await axios({
        method: "GET",
        url: "/flower/category",
      });

      return data.data;
    },
  });

  return {
    onPublish,
    onDelete,
    products,
    category,
    onCancelRequest,
  };
};
