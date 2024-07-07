import SideNav from "./sidenav";
import SliderSection from "./carousel";
import Category from "./category";

const Home = () => {
  return (
    <div className=" w-[80%] m-auto">
      <SliderSection />
      <div className="flex mt-[46px] gap-8">
        <SideNav />
        <Category />
      </div>
    </div>
  );
};

export default Home;
