import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/axios";

export const useProductFeatures = () => {
  const { category, productId } = useParams();
  const axios = useAxios();

  const product = useQuery({
    queryKey: [`product/${category}/${productId}`],
    queryFn: async () => {
      const { data } = await axios({
        url: `/flower/category/${category}/${productId}`,
      });

      return data?.data;
    },
  });

  return {
    product,
  };
};
