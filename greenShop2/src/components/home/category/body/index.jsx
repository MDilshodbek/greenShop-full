import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "../../../../hooks/useSearchParams";
import useAxious from "../../../../hooks/axios";
import Card from "./card";

const Body = () => {
  const axios = useAxious();
  const { getParams } = useSearchParams();

  const category = getParams("category") ?? "house-plants";

  const { data } = useQuery({
    queryKey: [category],
    queryFn: async () => {
      const { data } = await axios({ url: `/flower/category/${category}` });

      return data.data;
    },
  });

  return (
    <div>
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Body;
