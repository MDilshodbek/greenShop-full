import Card from "./card";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "../../../../hooks";
import useAxios from "../../../../hooks/axios";

const Body = () => {
  const axios = useAxios();
  const { getParams } = useSearchParams();
  const category = getParams("category" ?? "house-plants");

  const { data } = useQuery({
    queryKey: [category],
    queryFn: async () => {
      const { data } = await axios({
        url: `/flower/category/${category}`,
      });
      return data.data;
    },
  });

  console.log(data);

  return (
    <div className="flex flex-wrap gap-4">
      {data?.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Body;
