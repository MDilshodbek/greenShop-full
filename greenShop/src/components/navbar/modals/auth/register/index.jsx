import {
  FacebookFilled,
  GoogleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Divider, Form, Input, notification } from "antd";
import useAxios from "../../../../../hooks/axios";
import useAuth from "../../../../../configs/auth";
import { useDispatch } from "react-redux";
import { setauthModal } from "../../../../../redux/generic-slices/modals";
import { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const axios = useAxios();
  const dispatch = useDispatch();

  const onFinish = async (e) => {
    if (loading) return;

    setLoading(true);
    try {
      const { data } = await axios({
        url: "/user/sign-up",
        data: e,
        method: "POST",
      });

      const { token, user } = data.data;

      signIn({ token, user });
      dispatch(setauthModal());
      window.location.reload();

    } catch (error) {
      notification.error({
        message: "Error",
        description: error.response.data.extraMessage,
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="w-[80%] m-auto">
        <h3 className="text-sm mt-8 font-notmal">
          Enter your email and password to register
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
            name="name"
            rules={[{ required: true, message: "Please input your Name!" }]}
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
            rules={[
              { required: true, message: "Please input your email address!" },
            ]}
          >
            <Input placeholder="Enter your email addrress" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="input your password..." />
          </Form.Item>

          <Form.Item
            name="confirm-password"
            rules={[
              { required: true, message: "Please confirm your password!" },
            ]}
          >
            <Input.Password placeholder="Confirm your password..." />
          </Form.Item>

          <h3 className=" font-normal cursor-pointer w-fit ml-auto text-[#46A358]">
            Forgot Password?
          </h3>

          <button className="flex rounded-md bg-[#46A358] gap-1 text-base items-center justify-center text-white w-full h-[45px] my-[27px]">
            {loading ? <LoadingOutlined /> : "Register"}
          </button>
        </Form>

        <Divider>or register in with</Divider>

        <button
          type="button"
          className="cursor-pionter flex items-center gap-2 border border-[#eaeaea] h-[40px] w-full rounded-md mb-[15px]"
        >
          <GoogleOutlined className="pl-[15px]" />
          Continue with Google
        </button>
        <button
          type="button"
          className="cursor-pionter flex items-center gap-2 border border-[#eaeaea] h-[40px] w-full rounded-md mb-[15px]"
        >
          <FacebookFilled className="pl-[15px]" />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;
