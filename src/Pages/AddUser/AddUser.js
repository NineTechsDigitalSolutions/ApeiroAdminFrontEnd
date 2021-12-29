import Layout from "./../../Layout/LayoutMain";
import {
  Button,
  Typography,
  Form,
  Input,
  Select,
  Checkbox,
  Row,
  Col,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import swal from "sweetalert";
const AddNew = () => {
  const { Title } = Typography;
  const [form] = Form.useForm();
  const { Option } = Select;
  const history = useHistory();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const onFinish = (values) => {
    let payload = {
      ...values,
      name: values.firstName + " " + values.lastName,
    };
    let librarians = JSON.parse(localStorage.getItem("librarian"));
    console.log(librarians);
    localStorage.setItem("librarian", JSON.stringify([...librarians, payload]));
    history.push("/librarians");
    swal("", "librarian added", "success");
    console.log(`payload`, payload);
  };
  const menuOptions = [
    "Users",
    "Readers",
    "Categories",
    "Books",
    "Authors",
    "Statics",
    "Sales",
    "Packages",
    "Notifications",
    "Settings",
  ];
  return (
    <Layout active="librarians">
      <div className="add-new-main">
        <div className="header">
          <Button
            shape={"circle"}
            icon={<ArrowLeftOutlined />}
            onClick={() => history.go(-1)}
          />
          <h2>Add New User</h2>
        </div>
        <div className="add-form-cont">
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
                name="firstName"
                label="First Name"
                rules={[{ required: true, message: "First Name Is required" }]}
                requiredMark={"optional"}
                // hasFeedback
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{ required: true, message: "Last Name Is Required" }]}
                requiredMark={"optional"}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="nic"
                label="NIC"
                rules={[{ required: true, message: "Nic Is Required" }]}
                requiredMark={"optional"}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="address"
                label="Address"
                rules={[{ required: true, message: "Address Is Required" }]}
                requiredMark={"optional"}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="contact"
                label="Contact Number"
                rules={[
                  { required: true, message: "Contact Number Is Required" },
                ]}
                requiredMark={"optional"}
              >
                <Input />
              </Form.Item>
              {/* <Button type="primary" style={{ margin: "10px 0" }}>
                Send OTP
              </Button> */}
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Email Is Required" }]}
                requiredMark={"optional"}
              >
                <Input type={"email"} />
              </Form.Item>
              {/* <Button type="primary" style={{ margin: "10px 0" }}>
                Send Email Verification
              </Button> */}
              <Form.Item
                name="status"
                label="Status"
                rules={[{ required: true, message: "Status Is Required" }]}
                requiredMark={"optional"}
              >
                <Select>
                  <Option value="active">Active</Option>
                  <Option value="inactive">Inactive</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="access"
                label="Library Access Type"
                rules={[
                  { required: true, message: "Library Access Is Required" },
                ]}
                requiredMark={"optional"}
              >
                <Select>
                  <Option value="sinhala">Sinhala Only</Option>
                  <Option value="english">English Only</Option>
                  <Option value="all">All</Option>
                </Select>
              </Form.Item>
              {/* <Form.Item
                name="menu"
                label="Access To Menus"
                valuePropName="checked"
                rules={[{ required: true, message: "Menu Access Is Required" }]}
                requiredMark={"optional"}
              >
                <Checkbox.Group
                  style={{ width: "100%" }}
                  // onChange={onChange}
                >
                  <Row gutter={[20, 20]}>
                    {menuOptions.map((menu) => (
                      <Col span={8}>
                        <Checkbox value={menu}>{menu}</Checkbox>
                      </Col>
                    ))}
                  </Row>
                </Checkbox.Group>
              </Form.Item> */}
              {/* <Checkbox.Group options={menuOptions}>Users</Checkbox.Group> */}

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Create
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddNew;
