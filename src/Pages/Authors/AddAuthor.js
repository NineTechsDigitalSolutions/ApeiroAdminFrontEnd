import Layout from "../../Layout/LayoutMain";
import { Button, Typography, Form, Input, Upload, Modal } from "antd";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import { useHistory, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { BsFileSlides } from "react-icons/bs";
import swal from "sweetalert";
const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
const AddAuthor = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    if (location.state) {
      setFileList((prev) => [...prev, { thumbUrl: location.state }]);
    }
  }, []);
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
    console.log(fileList);
    setFileList(fileList);
  };
  const onFinish = (values) => {
    console.log("form", values);
    swal("", "Author Created Successfully", "success");
    form.resetFields();
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <Layout active={"authors"}>
      <div className="white-card">
        <Button
          shape={"circle"}
          icon={<ArrowLeftOutlined />}
          onClick={() => history.go(-1)}
        />
        <Typography.Title level={2}>Add New Author</Typography.Title>
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
              name="name"
              label="Author Name"
              rules={[{ required: true, message: "Author Name Is Required" }]}
              requiredMark={"optional"}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Author Email"
              rules={[{ required: true, message: "Author Email Is Required" }]}
              requiredMark={"optional"}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="designation"
              label="Author Designation"
              rules={[
                { required: true, message: "Author Designation Is Required" },
              ]}
              requiredMark={"optional"}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Author Description"
              rules={[{ required: true, message: "Description Is Required" }]}
              requiredMark={"optional"}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item name="image" label="Author Image">
              <div style={{ display: "flex" }}>
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={(file) => handlePreview(file, 1)}
                  onChange={(obj) => handleChange(obj, 1)}
                  accept="image/*"
                  multiple
                  maxCount={1}
                >
                  {fileList.length >= 2 ? null : uploadButton}
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

export default AddAuthor;
