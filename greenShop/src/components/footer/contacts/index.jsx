import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const Contacts = () => {
  return (
    <div>
      <div className="w-full h-[88px] bg-[#46A3581A] border-2 border-[#46A3582A] flex items-center justify-around pr-[200px] max-md:hidden">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-[10px]">
          <EnvironmentOutlined className="text-[#46A358]" />
          <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
        </div>
        <div className="flex items-center justify-center gap-[10px]">
          <MailOutlined className="text-[#46A358]" />
          <p>contact@greenshop.com</p>
        </div>
        <div className="flex items-center justify-center gap-[10px]">
          <PhoneOutlined className="text-[#46A358]" />
          <p>+88 01911 717 490</p>
        </div>
      </div>
      <div className="hidden max-md:flex flex-col justify-center h-[145px] w-full bg-[#46A3581A] border-2 border-[#46A3582A] flex items-center gap-1">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-[10px] text-sm font-medium text-center">
          <EnvironmentOutlined className="text-[#46A358]" />
          <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
        </div>
        <div className="flex items-center justify-center gap-[10px] text-sm font-medium text-center">
          <MailOutlined className="text-[#46A358]" />
          <p>contact@greenshop.com</p>
        </div>
        <div className="flex items-center justify-center gap-[10px] text-sm font-medium text-center">
          <PhoneOutlined className="text-[#46A358]" />
          <p>+88 01911 717 490</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
