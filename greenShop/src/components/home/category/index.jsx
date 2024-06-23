import Header from "./haeder";
import Body from "./body";
import CategoryModal from "./modals/category";

const Category = () => {
  return (
    <>
      <CategoryModal />
      <div className="w-full">
        <Header />
        <Body />
      </div>
    </>
  );
};

export default Category;
