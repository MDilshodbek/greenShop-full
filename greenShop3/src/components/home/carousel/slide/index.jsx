const Slide = ({
  title,
  subTitle,
  description,
  buttonText,
  bigImage,
  smallImage,
}) => {
  return (
    <div className="w-full h-[450px] flex">
      <div className="w-[60%] pl-[43px] pt-[68px]">
        <h5 className="font-medium pb-[7px]">{subTitle}</h5>
        <h1 className="font-black text-[70px] leading-[70px] pb-[5px]">
          {title} <span className="text-[#46A358]">PLANET</span>
        </h1>
        <p>{description}</p>
        <button
          type="button"
          className="w-[100px] h-[36px] bg-[#46A358] rounded-md flex items-center justify-center text-white gap-2 cursor-pointer mt-[48px]"
        >
          {buttonText}
        </button>
      </div>
      <div className="w-[40%] flex items-center justify-center relative">
        <img src={bigImage} alt="" />
        <img
          className="absolute w-[135px] h-[135px] bottom-[37px] left-[25px]"
          src={smallImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Slide;
