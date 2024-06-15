import disFlower from "../../../../assets/disFlower.png"

const Discount = () => {
  return (
    <div className="w-full h-[370px] bg-gradient-to-b from-[#46A3581A] to-[#46A35808] relative mt-[20px] ">
      <img alt="" src={disFlower} className="flex absolute bottom-[10px]" />
      <h1 className="font-bold text-[23px] flex justify-center pt-[50px]">
        UP TO 75% OFF
      </h1>
    </div>
  );
};

export default Discount;
