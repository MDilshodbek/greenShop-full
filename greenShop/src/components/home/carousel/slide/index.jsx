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
    <div>
      <div className="flex w-full h-[450px] max-md:hidden">
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
          <img alt="flower img" src={bigImage} className="absolute" />
          <img
            className="w-[150px] h-[150px] absolute bottom-0 left-[40px]"
            alt="flower img"
            src={smallImage}
          />
        </div>
      </div>
      <div className="hidden max-md:flex h-[300px]">
        <div className="pl-[40px]">
          <h5 className="mt-[15px] text-[12px]">{subTitle}</h5>
          <h1 className="text-[24px] font-black">
            {title} <span className="text-[#46a358]">PLANET</span>
          </h1>
          <p className="mt-2 text-[12px] w-[60%]">{description}</p>
          <Button
            primary
            className="w-[140px] h-[36px] bg-[#46a358] flex gap-2 items-center text-white cursor-pointer mt-[10px]"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
