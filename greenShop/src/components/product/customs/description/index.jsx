import { useState } from "react";
import { useProductFeatures } from "../../features";
import Pro_description from "./pro_description";
import Pro_review from "./pro_review";

const Description = () => {
  const [active, setActive] = useState("description");
  const {
    product: { data },
  } = useProductFeatures();

  const active_style = "hover:text-[#46A358] text-[#46A358]";

  return (
    <div>
      <div className="flex gap-5 border-b pb-[5px] border-[#46A358]">
        <div
          onClick={() => setActive("description")}
          className={`cursor-pointer ${
            active === "description" && active_style
          }`}
        >
          Product description
        </div>
        <div
          onClick={() => setActive("review")}
          className={`cursor-pointer ${active === "review" && active_style}`}
        >
          Reviews
        </div>
      </div>
      {active === "description" ? <Pro_description /> : <Pro_review />}
    </div>
  );
};

export default Description;
