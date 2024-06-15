import SideNav from "./sidenav";
import SliderSection from "./carousel";
import Category from "./category";

const Home = () => {
  return (
    <div>
      <SliderSection />
      <div className="flex w-[80%] m-auto mt-[46px] gap-8">
        <SideNav />
        <Category />
      </div>
    </div>
  );
};

export default Home;
