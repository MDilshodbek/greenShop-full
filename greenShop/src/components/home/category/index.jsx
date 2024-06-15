import { useSearchParams } from "react-router-dom";

const Category = () => {
  const [get] = useSearchParams();

  return (
    <div className="w-full">
      Category
      <p>{get.get("category") ?? "house-plants"}</p>
    </div>
  );
};

export default Category;
