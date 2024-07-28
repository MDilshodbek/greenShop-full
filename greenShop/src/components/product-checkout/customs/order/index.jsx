import { Descriptions } from "antd";
import { useShoppingService } from "../../../../services/shopping";
import OrderCard from "./customs/orderCard";

const Order = () => {
  const { products, coupon } = useShoppingService();
  return (
    <div className="w-[40%] max-md:w-[100%]">
      <h3 className="font-bold mb-[20px]">Your order</h3>

      <div className="flex flex-col gap-3">
        {products.map((item) => (
          <OrderCard {...item} key={item._id} />
        ))}
      </div>
      <Descriptions className="mt-[30px]">
        <Descriptions.Item span={3} label="Subtotal">
          ${total || 0}
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Coupon Discount">
          -$(
          {coupon
            ? Number(total * Number(`0.${coupon.discount_for}`)).toFixed(2)
            : "0.00"}
          )
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Shipping">
          $16
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default Order;
