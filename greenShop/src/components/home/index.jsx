import SideNav from "./sidenav";
import SliderSection from "./carousel";
import Category from "./category";

const Home = () => {
  return (
    <div className=" w-[80%] m-auto max-md:w-[95%]">
      <SliderSection />
      <div className="flex mt-[46px] gap-8 max-md:mt-[30px]">
        <SideNav />
        <Category />
      </div>
    </div>
  );
};

export default Home;
