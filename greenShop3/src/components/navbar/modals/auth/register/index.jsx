import { FacebookFilled, GoogleOutlined } from "@ant-design/icons";
import { Divider, Form, Input } from "antd";

const Register = () => {
  return (
    <div className="w-[80%] m-auto">
      <h3 className="mt-8 text-sm font-medium">
        Enter your email and password to register
      </h3>
      <Form
        className="mt-4"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 32 }}
        style={{ maxWidth: "100%" }}
        initialValues={{ remember: true }}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          name="surname"
          rules={[{ required: true, message: "Please input your surname!" }]}
        >
          <Input placeholder="Surname" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Enter your email address!" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Enter your password..." />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          rules={[{ required: true, message: "Please confirm your password!" }]}
        >
          <Input.Password placeholder="Confirm your password..." />
        </Form.Item>

        <button
          type="submit"
          className="rounded-md gap-1 bg-[#46A358] flex items-center justify-center text-base text-white w-full h-[45px] my-[27px]"
        >
          Register
        </button>
      </Form>

      <Divider>or register with</Divider>

      <button
        type="button"
        className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]"
      >
        <FacebookFilled className="pl-[15px]" />
        Login with Facebook
      </button>
      <button
        type="button"
        className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]"
      >
        <GoogleOutlined className="pl-[15px]" />
        Login with Google
      </button>
    </div>
  );
};

export default Register;
