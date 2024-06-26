import {
  FacebookFilled,
  InstagramOutlined,
  LinkedinFilled,
  TwitterOutlined,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";

const Footer_nav = () => {
  return (
    <>
      <div className="w-[80%] flex py-[30px] px-[23px] m-auto gap-[170px] border-b border-[#46A35833]">
        <div className="flex justify-between  items-center w-[65%]">
          <div className="gap-2 flex flex-col">
            <h3 className="font-bold text-[18px]">My Account</h3>
            <p>My account</p>
            <p>Our stores</p>
            <p>Contact us</p>
            <p>Career</p>
            <p>Specials</p>
          </div>
          <div className="gap-2 flex flex-col">
            <h3 className="font-bold text-[18px]">Help & Guide</h3>
            <p>Help Center</p>
            <p>Our stores</p>
            <p>Contact us</p>
            <p>Career</p>
            <p>Specials</p>
          </div>
          <div className="gap-2 flex flex-col">
            <h3 className="font-bold text-[18px]">Categories</h3>
            <p>My account</p>
            <p>Our stores</p>
            <p>Contact us</p>
            <p>Career</p>
            <p>Specials</p>
          </div>
        </div>
        <div className="flex justify-left flex-col w-[35%]">
          <h2 className="font-bold text-[18px]">Social Media</h2>
          <div className="mt-[20px] gap-[10px] flex">
            <FacebookFilled className="text-[#46A35899] h-[30px]" />
            <InstagramOutlined className="text-[#46A35899] h-[30px]" />
            <TwitterOutlined className="text-[#46A35899] h-[30px]" />
            <LinkedinFilled className="text-[#46A35899] h-[30px]" />
            <YoutubeFilled className="text-[#46A35899] h-[30px]" />
          </div>
          <h2 className="font-bold text-[18px] mt-[33px] mb-[13px]">
            We accept
          </h2>
          <img
            className="w-[224px] h-[26px]"
            src="https://s3-alpha-sig.figma.com/img/1e46/0c89/ee17b2b09a69f96d2552ed3b0b04ac05?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EhW~q1-pigguGusknaMptXEBo4SBiI2CL66jXQDZ71eNq5PkkltJTWHwmxrQpM~rYSMiakpOMRDc4POVjTOodq3t-FjgI2GH3FCU6M1qzq~HeqFsPSxYcsdX5c4eezTek9gh7wpBZiaEF8Zm7cNIUr8729Y3j4t~GV5ZbIcG-Y1GOCS-bSVg7u1d9bbbJ7ZG1hW0mpQrotAU1xVfBge2i32qqTqnIABhxxZW6og2hPr~kPDWx~mgDGXI0Eqb4Ip2kX4ca5ZQCc8jHmo14h8nh7Vh92WNDn2joucX~6tYOs0MhPNuTCr91MZv8WVsuhbOSL9yrYYVXg54EjEM73mpRA__"
            alt=""
          />
        </div>
      </div>
      <div className="w-[80%] h-[50px] flex justify-center items-center m-auto">
        <p>© 2021 GreenShop. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer_nav;
