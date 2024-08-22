import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/axios";
import { Skeleton } from "antd";
import Order from "./order";

const TrackOrder = () => {
  const axios = useAxios();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["track-order"],
    queryFn: async () => {
      const { data } = await axios({
        url: "/order/get-order",
      });
      return data.data.filter(Boolean);
    },
  });

  if (isLoading || isError)
    return (
      <div className="w-full p-[15px]">
        <h1 className="font-bold text-xl mb-[20px]">Track your orders</h1>
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="h-[300px] flex flex-col">
              <Skeleton.Image className="w-full main_card" active={true} />
              <h3 className="font-normal cursor-pointer mt-[12px]">
                <Skeleton.Input active={true} />
              </h3>
              <p className="font-bold text-[#46A358]">
                <Skeleton.Input active={true} />
              </p>
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div className="p-[15px] w-full">
      <h1 className="font-bold text-xl mb-[20px]">Track your orders</h1>
      <div className="flex flex-col gap-3">
        {data.map((value) => (
          <Order {...value} key={value._id} />
        ))}
      </div>
    </div>
  );
};

export default TrackOrder;
