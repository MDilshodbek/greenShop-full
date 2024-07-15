import { useProductFeatures } from "../../../features";

const Pro_review = () => {
  const {
    product: { data },
  } = useProductFeatures();
  return (
    <div className="mt-4">
      <div dangerouslySetInnerHTML={{ __html: data?.review }} />
    </div>
  );
};

export default Pro_review;
