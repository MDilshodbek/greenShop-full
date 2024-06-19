import disFlower from "../../../../assets/disFlower.png";

const Discount = () => {
  return (
    <div className="w-full h-[470px] bg-gradient-to-b from-[#46A3581A] to-[#46A35808] mt-[20px] relative">
      <h1 className="flex justify-center font-bold text-[23px] pt-[94px]">
        UP TO 70% OFF
      </h1>
      <img
        className="absolute bottom-0 flex justify-center h-[300px]"
        src={disFlower}
        alt=""
      />
    </div>
  );
};

export default Discount;
