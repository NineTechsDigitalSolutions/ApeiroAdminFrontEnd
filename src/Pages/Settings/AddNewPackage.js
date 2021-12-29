import Layout from "./../../Layout/LayoutMain";
import { Typography, Form, Input } from "antd";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import swal from "sweetalert";

const AddNewPackage = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("form", values);
    swal("", "Package Created Successfully", "success");
    form.resetFields();
  };
  return (
    <Layout active="p-settings">
      <div className="white-card">
        <Button
          shape="circle"
          onClick={() => history.go(-1)}
          icon={<ArrowLeftOutlined />}
        />
        <Typography.Title level={2}>Add New Package</Typography.Title>
        <div>
          <Form
            //   {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="name"
              label="Package Name"
              rules={[{ required: true, message: "Package Name Is Required" }]}
              requiredMark={"optional"}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="duration"
              label="Package Duration"
              rules={[
                { required: true, message: "Package Duration Is Required" },
              ]}
              requiredMark={"optional"}
            >
              <Input type={"number"} />
            </Form.Item>
            <Form.Item
              name="amount"
              label="Package Amount"
              rules={[
                { required: true, message: "Package Amount Is Required" },
              ]}
              requiredMark={"optional"}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Package Description"
              rules={[{ required: true, message: "Description Is Required" }]}
              requiredMark={"optional"}
            >
              <Input.TextArea />
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

export default AddNewPackage;
