import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../../hooks/axios";

export const useMyProductFeatures = () => {
  const queryClient = useQueryClient();
  const axios = useAxios();

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

  return { products, onDelete };
};