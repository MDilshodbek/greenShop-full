import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "../../../../hooks/useSearchParams";
import useAxious from "../../../../hooks/axios";
import Card from "./card";
import Loading from "./loading";

const Body = () => {
  const axios = useAxious();
  const { getParams } = useSearchParams();

  const category = getParams("category") ?? "house-plants";
  const min = getParams("min") ?? 0;
  const max = getParams("max") ?? 1500;
  const sort = getParams("sort") ?? "Default";

  const cache_key = `category=${category}&min=${min}&max=${max}&=${sort}`;

  const { data, isLoading } = useQuery({
    queryKey: [cache_key],
    queryFn: async () => {
      const { data } = await axios({
        url: `/flower/category/${category}`,
        params: {
          range_min: min,
          range_max: max,
          sort,
        },
      });

      return data.data;
    },
  });

  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {isLoading
        ? Array.from({ length: 15 }).map((_, idx) => <Loading key={idx} />)
        : data?.map((item) => <Card key={item.id} {...item} />)}
    </div>
  );
};

export default Body;
