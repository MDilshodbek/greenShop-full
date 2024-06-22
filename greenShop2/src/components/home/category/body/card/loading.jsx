import { Skeleton } from "antd";

const Loading = () => {
  return (
    <div className="w-[258px]">
      <div className="h-[300px] w-full bg-[#fbfbfb] flex items-center justify-center">
        <Skeleton.Image active />
      </div>
      <Skeleton.Input active />
      <Skeleton.Input active />
    </div>
  );
};

export default Loading;
