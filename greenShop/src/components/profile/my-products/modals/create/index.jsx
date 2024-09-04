import { Form, Input, Modal, Select, Upload } from "antd";
import { useState } from "react";
import { useMyProductFeatures } from "../../features";
import { useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";

const Create = () => {
  const {
    category: { data, isLoading },
    onPublish,
    onCancelRequest,
  } = useMyProductFeatures();

  const { addModal } = useSelector(({ modal }) => modal);
  const { loading, setLoading } = useState(false);

  const [isShow, setShow] = useState({
    isShowMainUpload: true,
    isShowAdditionalUpload_1: true,
    isShowAdditionalUpload_2: true,
    isShowAdditionalUpload_3: true,
    isShowAdditionalUpload_4: true,
  });

  const onUploadChange = (setter) => {
    setShow({ ...isShow, ...setter });
  };

  const onFinishHandle = async (e) => {
    setLoading(true);
    await onPublish(e);
    setLoading(false);
  };

  const uploadProps = {
    name: "image",
    action:
      "https://greenshop.abduvoitov.com/api/upload?access_token=64bebc1e2c6d3f056a8c85b7",
    listType: "picture-card",
    className: "w-full",
    data: { type: "img" },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    accept: ".png,.jpg,.jpeg",
  };

  return (
    <Modal
      width={700}
      title={"Add plant"}
      open={addModal}
      okText="Add"
      cancelButtonProps={{ type: "ghost", danger: true }}
      okButtonProps={{ type: "default" }}
      footer={false}
      onCancel={() => !loading && onCancelRequest()}
    >
      <Form
        name="complex-form"
        labelCol={{
          span: 12,
        }}
        wrapperCol={{
          span: 26,
        }}
        layout="vertical"
        className="w-full"
        size="large"
        onFinish={onFinishHandle}
      >
        <Form.Item
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            label="Name of plant"
            name="title"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Input placeholder="Type name of your plant..." />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input
              max={1000}
              addonBefore="$"
              type="number"
              placeholder="Type your product..."
            />
          </Form.Item>
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            label="Category"
            name="category"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Select
              options={data?.map((v) => ({
                ...v,
                label: v.title,
                value: v.route_path,
              }))}
              loading={isLoading}
              placeholder="Category your product..."
            />
          </Form.Item>
          <Form.Item
            label="Discount price (if it's available)"
            name="discount_price"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input max={1000} type="number" placeholder="Discount price..." />
          </Form.Item>
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            label="Short Description"
            name="short_description"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(100% - 8px)",
            }}
          >
            <Input.TextArea
              className="resize-none h-[120px]"
              showCount
              maxLength={300}
              placeholder="Short Description..."
            />
          </Form.Item>
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(100% - 8px)",
            }}
          >
            <Input.TextArea
              className="h-[240px]"
              showCount
              maxLength={5000}
              placeholder="Description..."
            />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Main image"
          name="main_image"
          rules={[
            {
              required: true,
              message: "Please, upload main image.",
            },
          ]}
          style={{
            display: "inline-block",
            width: "calc(100% - 8px)",
          }}
        >
          <Upload
            {...uploadProps}
            onChange={() => onUploadChange({ isShowMainUpload: false })}
          >
            {isShow.isShowMainUpload ? "Upload your main image!" : null}
          </Upload>
        </Form.Item>
        <Form.Item
          label="Additional Images"
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            name="detailed_image_1"
            rules={[
              {
                required: true,
                message: "Please, upload additional image.",
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              marginRight: "10px",
            }}
          >
            <Upload
              {...uploadProps}
              onChange={() =>
                onUploadChange({ isShowAdditionalUpload_1: false })
              }
            >
              {isShow.isShowMainUpload ? "Upload your image!" : null}
            </Upload>
          </Form.Item>
          <Form.Item
            name="detailed_image_2"
            rules={[
              {
                required: true,
                message: "Please, upload additional image.",
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Upload
              {...uploadProps}
              onChange={() =>
                onUploadChange({ isShowAdditionalUpload_2: false })
              }
            >
              {isShow.isShowMainUpload ? "Upload your image!" : null}
            </Upload>
          </Form.Item>
          <Form.Item
            name="detailed_image_3"
            rules={[
              {
                required: true,
                message: "Please, upload additional image.",
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              marginRight: "10px",
            }}
          >
            <Upload
              {...uploadProps}
              onChange={() =>
                onUploadChange({ isShowAdditionalUpload_3: false })
              }
            >
              {isShow.isShowMainUpload ? "Upload your image!" : null}
            </Upload>
          </Form.Item>
          <Form.Item
            name="detailed_image_4"
            rules={[
              {
                required: true,
                message: "Please, upload additional image.",
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Upload
              {...uploadProps}
              onChange={() =>
                onUploadChange({ isShowAdditionalUpload_4: false })
              }
            >
              {isShow.isShowMainUpload ? "Upload your image!" : null}
            </Upload>
          </Form.Item>
        </Form.Item>
        <div className="flex gap-4 justify-end">
          <button disabled={loading} onClick={onCancelRequest}>
            Cancel
          </button>
          <button
            htmlType="submit"
            disabled={loading}
            className="py-[10px] px-[15px] bg-[#46A358] rounded-md text-white"
          >
            {loading ? <LoadingOutlined /> : "Add"}
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default Create;
