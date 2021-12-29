import Layout from "../../Layout/LayoutMain";
import { Button, Typography, Form, Input, Upload, Modal } from "antd";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { useState } from "react";
import swal from "sweetalert";

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
const AddNewProduct = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => {
    setPreviewVisible(false);
  };

  const handlePreview = async (file, type) => {
    console.log("58", file, type);
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file?.url || file?.preview);
    setPreviewTitle(
      file?.name || file?.url.substring(file?.url.lastIndexOf("/") + 1)
    );

    setPreviewVisible(true);
  };
  const handleChange = ({ fileList }, type) => {
    setFileList(fileList);
  };
  const onFinish = (values) => {
    console.log("form", values);
    swal("", "Product Created Successfully", "success");
    form.resetFields();
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <Layout active={"shop"}>
      <div className="white-card">
        <Button
          shape={"circle"}
          icon={<ArrowLeftOutlined />}
          onClick={() => history.go(-1)}
        />
        <Typography.Title level={2}>Add New Product</Typography.Title>
        <div className="add-new-form white-card">
          <Form
            //   {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            layout="vertical"
            scrollToFirstError={true}
          >
            <Form.Item
              name="Name"
              label="name"
              rules={[{ required: true, message: "Book Name Is Required" }]}
              requiredMark={"optional"}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="Price"
              label="price"
              rules={[{ required: true, message: "Price Is Required" }]}
              requiredMark={"optional"}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="Description"
              label="description"
              rules={[{ required: true, message: "Description Is Required" }]}
              requiredMark={"optional"}
            >
              <Input />
            </Form.Item>
            <Form.Item name="image" label="image">
              <div>
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={(file) => handlePreview(file, 1)}
                  onChange={(obj) => handleChange(obj, 1)}
                  accept="image/*"
                  multiple
                  maxCount={5}
                >
                  {fileList.length >= 5 ? null : uploadButton}
                </Upload>
              </div>
              <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: "100%" }}
                  src={previewImage}
                />
              </Modal>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default AddNewProduct;
