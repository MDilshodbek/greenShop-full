import {
  FacebookFilled,
  GoogleOutlined,
  LoadingOutlined,
  ScanOutlined,
} from "@ant-design/icons";
import { Divider, Form, Input, notification } from "antd";
import { useState } from "react";
import useAxios from "../../../../../hooks/axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  const signIn = useSignIn();

  const onFinish = async (e) => {
    setLoading(true);
    try {
      const { data } = await axios({
        method: "POST",
        url: "/user/sign-in",
        data: e,
      });
      const { token, user } = data.data;

      signIn({
        auth: {
          token,
          type: "Bearer",
        },
        userState: user,
      });

      notification.success({ message: "Logged in", description: "You have logged in successfully" });

      console.log(data);
    } catch (error) {
      notification.error({
        message: "Oops! Something went wrong!",
        description: error?.response?.data?.extraMessage,
      });
    }

    setLoading(false);
  };

  return (
    <div className="w-[80%] m-auto">
      <h3 className="text-sm mt-8 font-notmal">
        Enter your username and password to login
      </h3>
      <Form
        onFinish={onFinish}
        className="mt-4"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 32 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="input your email..." />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="input your password..." />
        </Form.Item>

        <h3 className=" font-normal cursor-pointer w-fit ml-auto text-[#46A358]">
          Forgot Password?
        </h3>

        <button className="flex rounded-md bg-[#46A358] gap-1 text-base items-center justify-center text-white w-full h-[45px] my-[27px]">
          {loading ? <LoadingOutlined /> : "Login"}
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
