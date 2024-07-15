import { useProductFeatures } from "../../../features";

const Pro_description = () => {
  const {
    product: { data },
  } = useProductFeatures();
  return (
    <div className="mt-4">
      <div dangerouslySetInnerHTML={{ __html: data?.description }} />
    </div>
  );
};

export default Pro_description;
