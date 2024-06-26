import Contacts from "./contacts";
import Footer_nav from "./footer_nav";
import Newsletter from "./newsletter";

const Footer = () => {
  return (
    <div className="mt-[100px]">
      <Newsletter />
      <Contacts />
      <Footer_nav />
    </div>
  );
};

export default Footer;
