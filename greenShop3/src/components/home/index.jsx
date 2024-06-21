import SideNav from "./side-nav";
import SliderSection from "./carousel";
import Category from "./category";

const HomeComponent = () => {
  return (
    <div>
      <SliderSection />
      <div className="flex gap-8 w-[80%] mt-[46px] m-auto">
        <SideNav />
        <Category />
      </div>
    </div>
  );
};

export default HomeComponent;
