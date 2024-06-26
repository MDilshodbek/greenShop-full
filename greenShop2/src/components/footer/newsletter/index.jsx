import garder from "../../../assets/garden.png";

const Newsletter = () => {
  return (
    <div className="w-[80%] m-auto h-[250px] bg-[#fbfbfb] flex justif-between p-[25px] gap-[60px]">
      <div className="flex items-center justify-around w-[70%] gap-[25px]">
        <div className="flex flex-col items-left w-[]">
          <img
            className="w-[77px] h-[95px]"
            src={garder}
            alt="garden care image"
          />
          <h3 className="font-bold text-[17px] mt-[17px]">Garden Care</h3>
          <p className="text-[14px] text-[#727272] mt-[9px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="bg-[#46A3581A] h-[190px] flex justify-center w-[1px]" />
        <div className="flex flex-col items-left w-[]">
          <img
            className="w-[77px] h-[95px]"
            src={garder}
            alt="garden care image"
          />
          <h3 className="font-bold text-[17px] mt-[17px]">Garden Care</h3>
          <p className="text-[14px] text-[#727272] mt-[9px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="bg-[#46A3581A] h-[190px] flex justify-center w-[1px]" />

        <div className="flex flex-col items-left w-[]">
          <img
            className="w-[77px] h-[95px]"
            src={garder}
            alt="garden care image"
          />
          <h3 className="font-bold text-[17px] mt-[17px]">Garden Care</h3>
          <p className="text-[14px] text-[#727272] mt-[9px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
      </div>
      <div className="w-[30%]">
        <h3 className="font-bold text-[18px] mt-2">
          Would you like to join newsletters?
        </h3>
        <div className="flex items-center justify-center relative my-[18px]">
          <input
            type="email"
            placeholder="enter your email address..."
            className="w-[354px] h-[40px] bg-white"
          />
          <button className="bg-[#46a358] text-white font-bold flex items-center justify-center text-[18px] rounded-r-md w-[85px] h-[40px] absolute right-0">
            Join
          </button>
        </div>
        <p className="text-[#727272] text-[14px]">
          We usually post offers and challenges in newsletter. We’re your online
          houseplant destination. We offer a wide range of houseplants and
          accessories shipped directly from our green house to yours!
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
