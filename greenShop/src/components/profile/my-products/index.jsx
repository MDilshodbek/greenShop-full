import Body from "./customs/body";
import Header from "./customs/header";
import Create from "./modals/create";

const MyProducts = () => {
  return (
    <>
      <Create />
      <div className="w-full">
        <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white px-[15px] py-[8px] ml-auto">
          Add New
        </button>
        <Header />
        <Body />
      </div>
    </>
  );
};

export default MyProducts;
