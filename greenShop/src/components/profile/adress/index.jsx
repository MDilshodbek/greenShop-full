import { Checkbox, Form } from "antd";
import { useAuth } from "../../../configs/auth";

const Adress = () => {
  const { getUser } = useAuth();
  const { user } = getUser();
  return (
    <div className="w-full">
      <div className="flex justify-between mb-[30px]">
        <div>
          <h3 className="mb-[10px] font-bold">Billing Address</h3>
          <p className="font-light">
            The following addresses will be used on the checkout page by
            default.
          </p>
        </div>
        <p className="text-[#46A358] font-bold cursor-pointer">Add</p>
      </div>
      <Form action=""></Form>
      <div className="flex justify-between mt-[30px]">
        <div>
          <h3 className="mb-[10px] font-bold">Shopping Address</h3>
          <p className="font-light">
            You have not set up this type of address yet
          </p>
        </div>
        <div>
          <Checkbox className="mb-[10px]">Same as billing address</Checkbox>
          <p className="font-bold text-[#46A358] cursor-pointer">Add</p>
        </div>
      </div>
    </div>
  );
};

export default Adress;
