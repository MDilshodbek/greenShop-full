import {
  FacebookFilled,
  GoogleOutlined,
  LoadingOutlined,
  ScanOutlined,
} from "@ant-design/icons";
import { Divider, Form, Input, notification } from "antd";
import { useState } from "react";
import useAxious from "../../../../../hooks/axios";
import useAuth from "../../../../../configs/auth";
import { useDispatch } from "react-redux";
import { setAuthModal } from "../../../../../redux/generic_slices/modals";
import { signInWithGoogle } from "../../../../../configs/farebase";

const Login = () => {
  const dispatch = useDispatch();
  const { signIn } = useAuth();
  const axios = useAxious();
  const [loading, setLoading] = useState(false);

  const onFinish = async (e) => {
    if (loading) return;

    setLoading(true);
    try {
      const { data } = await axios({
        method: "Post",
        url: "/user/sign-in",
        data: e,
      });

      const { token, user } = data.data;

      signIn({
        token,
        user,
      });
      notification.success({
        message: "Logged in",
        description: "You have logged in successfully",
      });

      console.log(e, data);

      dispatch(setAuthModal());
    } catch (error) {
      notification.error({
        message: "Oops! something went wrong!",
        description: error?.response?.data?.extraMessage,
      });
    }

    setLoading(false);
  };

  const signWithGoogle = async () => {
    try {
      const { user } = await signInWithGoogle();

      const { data } = await axios({
        url: "/user/sign-in/google",
        method: "POST",
        data: {
          email: user.email,
        },
      });

      const { token, user: AuthUser } = data;

      notification.success({
        message: "Logged in",
        description: "You have logged in successfully",
      });
      console.log(token, AuthUser);
    } catch (error) {
      notification.error({
        message: "Oops! Something went wrong!",
        description: error?.response?.data?.extraMessage,
      });
    }
  };

  return (
    <div className="w-[80%] m-auto">
      <h3 className="mt-8 text-sm font-medium">
        Enter your email and password
      </h3>
      <Form
        onFinish={onFinish}
        className="mt-4"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 32 }}
        style={{ maxWidth: "100%" }}
        initialValues={{ remember: true }}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Your email..." />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Your password..." />
        </Form.Item>

        <h3 className="mt-[14px] font-normal w-fit ml-auto cursor-pointer text-[#46A358]">
          Forgot Password?
        </h3>

        <button
          type="submit"
          className="rounded-md gap-1 bg-[#46A358] flex items-center justify-center text-base text-white w-full h-[45px] my-[27px]"
        >
          {loading ? <LoadingOutlined /> : "Login"}
        </button>
      </Form>

      <Divider>or login with</Divider>

      <button
        type="button"
        className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]"
      >
        <FacebookFilled className="pl-[15px]" />
        Login with Facebook
      </button>
      <button
        onClick={signWithGoogle}
        type="button"
        className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]"
      >
        <GoogleOutlined className="pl-[15px]" />
        Login with Google
      </button>
      <button
        type="button"
        className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]"
      >
        <ScanOutlined className="pl-[15px]" />
        Login with Qr Code
      </button>
    </div>
  );
};

export default Login;
