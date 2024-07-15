import Contacts from "./contacts";
import Footer_nav from "./footer_nav";
import Newsletter from "./newsletter";

const Footer = () => {
  return (
    <div className="mt-[100px] w-[80%] m-auto max-md:w-[95%] mt-[50px]">
      <Newsletter />
      <Contacts />
      <Footer_nav />
    </div>
  );
};

export default Footer;
