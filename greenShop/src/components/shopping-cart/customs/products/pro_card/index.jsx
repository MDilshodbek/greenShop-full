const Pro_Card = () => {
  return (
    <div className="bg-[#fbfbfb] h-[70px] w-full flex">
      <div className="w-[40%] flex items-center gap-2">
        <img src="" alt="" />
        <div>
          <h3>{"user.name"}</h3>
          <p className="font-light text-[14px]">"blabla"</p>
        </div>
      </div>
      <div className="w-[20%] flex items-center text-[#727272]">$7</div>
      <div className="w-[20%] flex items-center">
        <div className="flex gap-3">
          <button className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white">
            -
          </button>
          <h3 className="font-medium text-[18px]">8</h3>
          <button className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white">
            +
          </button>
        </div>
      </div>
      <div className="w-[20%] flex items-center justify-between pr-[10px]">
        <h3>$56.00</h3>
      </div>
    </div>
  );
};

export default Pro_Card;
