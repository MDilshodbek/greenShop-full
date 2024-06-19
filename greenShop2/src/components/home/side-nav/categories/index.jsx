import { Skeleton } from "antd";
import { useSearchParams } from "../../../../hooks/useSearchParams";
import { useQuery } from "@tanstack/react-query";
import useAxious from "../../../../hooks/axios";

const Categories = () => {
  const axios = useAxious();
  const { getParams, setParams } = useSearchParams();

  const { data, isLoading } = useQuery({
    queryKey: "categories",
    queryFn: async () => {
      const { data } = await axios({ url: "/flower/category" });

      return data.data;
    },
  });

  const selectedCategory = getParams("category") ?? "house-plants";

  const normal_text =
    "w-full flex justify-between items-center mt-[7px] hover:text-[#46A358] cursor-pointer";

  const active_text =
    "w-full flex justify-between items-center mt-[7px] text-[#46A358] cursor-pointer";

  return (
    <div>
      <h2 className="font-bold text-[18px]">Categories</h2>
      <div className="pl-[30px] pr-[25px]">
        {isLoading
          ? Array.from({ length: 9 }).map((_, idx) => (
              <div
                key={idx}
                className="w-full flex justify-between items-center mt-[7px] hover:text-[#46A358] cursor-pointer"
              >
                <Skeleton.Input block key={idx} active />
              </div>
            ))
          : data?.map((category) => (
              <div
                key={category._id}
                className={
                  selectedCategory === category.route_path
                    ? active_text
                    : normal_text
                }
                onClick={() => setParams({ category: category.route_path })}
              >
                <h3>{category.title}</h3>
                <h3>({category.count})</h3>
              </div>
            ))}
      </div>
    </div>
  );
};
export default Categories;
