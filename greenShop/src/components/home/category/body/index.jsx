import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "../../../../hooks/useSearchParams";
import useAxios from "../../../../hooks/axios";
import Card from "./card/index";
import Loading from "./card/loading";

const Body = () => {
  const axios = useAxios();
  const { getParams } = useSearchParams();

  const category = getParams("category") ?? "house-plants";
  const min = getParams("min") ?? 0;
  const max = getParams("max") ?? 1500;
  const sort = getParams("sort") ?? "default";
  const type = getParams("type") ?? "all-plants";

  const cache_key = `category=${category}&min=${min}&max=${max}&sort=${sort}`;

  const { data, isLoading } = useQuery({
    queryKey: [cache_key],
    queryFn: async () => {
      const { data } = await axios({
        url: `/flower/category/${category}`,
        params: {
          range_min: min,
          range_max: max,
          sort,
          type,
        },
      });

      return data.data;
    },
  });

  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {/* {data?.map((item) => (
        <Card key={item.id} {...item} />
      ))} */}
      {isLoading
        ? Array.from({ length: 15 }).map((_, idx) => <Loading key={idx} />)
        : data?.map((item) => <Card key={item.id} {...item} />)}
    </div>
  );
};

export default Body;
