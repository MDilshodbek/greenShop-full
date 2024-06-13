import { Button } from "antd";

const Slider1 = () => {
  return (
    <div className="w-full flex  h-[450px]">
      <div className="w-[60%] pl-[40px]">
        <h5 className="mt-[68px] mb-2 text-[14px]">WELCOME TO GREENSHOP</h5>
        <h1 className="text-[70px] font-black leading-[70px]">
          LET'S MAKE A BETTER <span className="text-[#46a358]">PLANET</span>
        </h1>
        <p className="mt-2 text-[14px] w-[60%]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <Button
          primary
          className="w-[100px] h-[35px] bg-[#46a358] flex gap-2 items-center text-white cursor-pointer mt-[48px]"
        >
          SHOP NOW
        </Button>
      </div>
      <div className="w-[40%] flex items-center justify-center relative">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt="flower img"
        />
        <img
          className="w-[150px] h-[150px] absolute bottom-0 left-[40px]"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt="flower img"
        />
      </div>
    </div>
  );
};

export default Slider1;
