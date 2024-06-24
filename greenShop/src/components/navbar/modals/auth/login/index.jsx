import {
  FacebookFilled,
  GoogleOutlined,
  ScanOutlined,
} from "@ant-design/icons";
import { Divider, Form, Input } from "antd";

const Login = () => {
  return (
    <div className="w-[80%] m-auto">
      <h3 className="text-sm mt-8 font-notmal">
        Enter your username and password to login
      </h3>
      <Form
        className="mt-4"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 32 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="input your username..." />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="input your password..." />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        ></Form.Item>

        <h3 className=" font-normal cursor-pointer w-fit ml-auto text-[#46A358]">
          Forgot Password?
        </h3>

        <button className="flex rounded-md bg-[#46A358] gap-1 text-base items-center justify-center text-white w-full h-[45px] my-[27px]">
          Login
        </button>
      </Form>

      <Divider>or log in with</Divider>

      <button
        type="button"
        className="cursor-pionter flex items-center gap-2 border border-[#eaeaea] h-[40px] w-full rounded-md mb-[15px]"
      >
        <FacebookFilled className="pl-[15px]" />
        Login with Facebook
      </button>
      <button
        type="button"
        className="cursor-pionter flex items-center gap-2 border border-[#eaeaea] h-[40px] w-full rounded-md mb-[15px]"
      >
        <GoogleOutlined className="pl-[15px]" />
        Login with Google
      </button>
      <button
        type="button"
        className="cursor-pionter flex items-center gap-2 border border-[#eaeaea] h-[40px] w-full rounded-md mb-[15px]"
      >
        <ScanOutlined className="pl-[15px]" />
        Login with Qr Code
      </button>
    </div>
  );
};

export default Login;
