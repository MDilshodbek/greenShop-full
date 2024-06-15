import { Button } from "antd";

const Slide = ({
  title,
  subTitle,
  description,
  buttonText,
  bigImage,
  smallImage,
}) => {
  return (
    <div className="w-full flex  h-[450px]">
      <div className="w-[60%] pl-[40px]">
        <h5 className="mt-[68px] mb-2 text-[14px]">{subTitle}</h5>
        <h1 className="text-[70px] font-black leading-[70px]">
          {title} <span className="text-[#46a358]">PLANET</span>
        </h1>
        <p className="mt-2 text-[14px] w-[60%]">{description}</p>
        <Button
          primary
          className="w-[100px] h-[35px] bg-[#46a358] flex gap-2 items-center text-white cursor-pointer mt-[48px]"
        >
          {buttonText}
        </Button>
      </div>
      <div className="w-[40%] flex items-center justify-center relative">
        <img alt="flower img" src={bigImage} />
        <img
          className="w-[150px] h-[150px] absolute bottom-0 left-[40px]"
          alt="flower img"
          src={smallImage}
        />
      </div>
    </div>
  );
};

export default Slide;
