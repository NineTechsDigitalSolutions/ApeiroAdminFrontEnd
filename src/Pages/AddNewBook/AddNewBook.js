import Layout from "./../../Layout/LayoutMain";
import {
  Button,
  Typography,
  Form,
  Input,
  Select,
  Checkbox,
  Radio,
  InputNumber,
  Upload,
  Modal,
  Divider,
} from "antd";
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
const AddNewBook = () => {
  const { Title } = Typography;
  const [form] = Form.useForm();
  const { Option } = Select;
  const history = useHistory();
  const [isSeries, setISeries] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage1, setPreviewImage1] = useState("");
  const [previewTitle1, setPreviewTitle1] = useState("");
  const [fileList1, setFileList1] = useState([]);
  const [previewImage2, setPreviewImage2] = useState("");
  const [previewTitle2, setPreviewTitle2] = useState("");
  const [fileList2, setFileList2] = useState([]);
  const [previewImage3, setPreviewImage3] = useState("");
  const [previewTitle3, setPreviewTitle3] = useState("");
  const [series, setSeries] = useState(0);
  const [fileList3, setFileList3] = useState([]);

  const onFinish = (values) => {
    console.log(values);
    swal("", "Book Added Successfully", "success");
    form.resetFields();
  };
  const onSeriesChange = (e) => {
    console.log("radio checked", e.target.value);
    if (e.target.value === "yes") {
      setISeries(true);
    } else {
      setISeries(false);
    }
  };
  const handleCancel = () => {
    setPreviewVisible(false);
  };

  console.log(`series`, series);

  const handlePreview = async (file, type) => {
    console.log("58", file, type);
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    if (type === 1) {
      setPreviewImage1(file?.url || file?.preview);
      setPreviewTitle1(
        file?.name || file?.url.substring(file?.url.lastIndexOf("/") + 1)
      );
    } else if (type === 2) {
      setPreviewImage2(file?.url || file?.preview);
      setPreviewTitle2(
        file?.name || file?.url.substring(file?.url.lastIndexOf("/") + 1)
      );
    } else if (type === 3) {
      setPreviewImage3(file?.url || file?.preview);
      setPreviewTitle3(
        file?.name || file?.url.substring(file?.url.lastIndexOf("/") + 1)
      );
    }
    setPreviewVisible(true);
  };
  const handleChange = ({ fileList }, type) => {
    if (type === 1) {
      setFileList1(fileList);
    } else if (type === 2) {
      setFileList2(fileList);
    } else if (type === 3) {
      setFileList3(fileList);
    }
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Layout active="books">
      <div className="add-new-main">
        <div className="header">
          <Button
            shape={"circle"}
            icon={<ArrowLeftOutlined />}
            onClick={() => history.go(-1)}
          />
          <h2>Add New Book</h2>
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
                name="name"
                label="Name"
                // validateStatus={"success"}
                // hasFeedback
                rules={[{ required: true, message: "Book Name Is Required" }]}
                requiredMark={"optional"}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="writtenBy"
                label="Written By "
                rules={[{ required: true, message: "Written By Is Required" }]}
                requiredMark={"optional"}
              >
                <Select allowClear placeholder="select Author">
                  <Option value="hassan">Hassan</Option>
                  <Option value="yasir">Yasir</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="translated"
                label="Translated By"
                rules={[
                  { required: true, message: "Translated By Is Required" },
                ]}
                requiredMark={"optional"}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="publisher"
                label="Publisher"
                rules={[
                  { required: true, message: "Publisher Name Is Required" },
                ]}
                requiredMark={"optional"}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="printedIn"
                label="Year Of Printed"
                rules={[
                  { required: true, message: "Printed In Year Is Required" },
                ]}
                requiredMark={"optional"}
              >
                <Select allowClear placeholder="select year">
                  <Option value="2019">2019</Option>
                  <Option value="2020">2020</Option>
                  <Option value="2021">2021</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="isbn"
                label="ISBN"
                rules={[{ required: true, message: "ISBN Is Required" }]}
                requiredMark={"optional"}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="current_series"
                label="Current Series"
                rules={[{ required: true, message: "Series Is Required" }]}
                requiredMark={"optional"}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="description"
                label="Description"
                rules={[{ required: true, message: "Description Is Required" }]}
                requiredMark={"optional"}
              >
                <Input.TextArea
                  placeholder="book description"
                  rows={4}
                  style={{ resize: "none" }}
                />
              </Form.Item>
              <Form.Item
                name="library"
                label="Select Library"
                rules={[{ required: true, message: "Library Is Required" }]}
                requiredMark={"optional"}
              >
                <Select allowClear placeholder="select library">
                  <Option value="sinhala">Sinhala Only</Option>
                  <Option value="english">English Only</Option>
                  <Option value="all">All</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="category"
                label="Category"
                rules={[{ required: true, message: "Category Is Required" }]}
                requiredMark={"optional"}
                //   rules={[{ required: true ,message: "Email Is Required" }]}
              >
                <Select allowClear placeholder="select category">
                  <Option value="sinhala">Category 1</Option>
                  <Option value="english">Category 2</Option>
                  <Option value="all">Category 3</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="subCategory"
                label="Sub Category"
                rules={[
                  { required: true, message: "Sub-Category Is Required" },
                ]}
                requiredMark={"optional"}

                //   rules={[{ required: true ,message: "Email Is Required" }]}
              >
                <Select allowClear placeholder="select sub category">
                  <Option value="sinhala">sub category 1</Option>
                  <Option value="english">sub category 2</Option>
                  <Option value="english">sub category 3</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="series"
                label="Series"
                rules={[{ required: true, message: "Series Is Required" }]}
                requiredMark={"optional"}

                //   rules={[{ required: true ,message: "Email Is Required" }]}
              >
                <Radio.Group onChange={onSeriesChange}>
                  <Radio value={"no"}>No</Radio>
                  <Radio value={"yes"}>Yes</Radio>
                </Radio.Group>
              </Form.Item>
              {isSeries ? (
                <>
                  <Form.Item
                    name="numberOfBooks"
                    label="Number Of Books In Series"
                    rules={[
                      { required: true, message: "No of Books Is Required" },
                    ]}
                    requiredMark={"optional"}
                    //   rules={[{ required: true }]}
                  >
                    <InputNumber
                      value={series}
                      min={0}
                      onChange={(e) => setSeries(e)}
                    />
                  </Form.Item>
                  {new Array(series).fill(0).map((element, ind) => (
                    <Form.Item
                      name={`series ${ind + 1}`}
                      label={`Book link for series ${ind + 1}`}
                      rules={[
                        { required: true, message: "Series Is Required" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  ))}
                  <Divider />
                </>
              ) : (
                ""
              )}
              <Form.Item
                name="images"
                label="Add Images Of First Five Pages Of Books"

                //   rules={[{ required: true }]}
              >
                <div>
                  <Upload
                    listType="picture-card"
                    fileList={fileList1}
                    onPreview={(file) => handlePreview(file, 1)}
                    onChange={(obj) => handleChange(obj, 1)}
                    accept="image/*"
                    multiple
                    maxCount={5}
                  >
                    {fileList1.length >= 5 ? null : uploadButton}
                  </Upload>
                </div>
                <Modal
                  visible={previewVisible}
                  title={previewTitle1}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage1}
                  />
                </Modal>
              </Form.Item>
              <Form.Item
                name="images2"
                label="Add Back Cover of Books"

                //   rules={[{ required: true }]}
              >
                <div>
                  <Upload
                    listType="picture-card"
                    fileList={fileList2}
                    onPreview={(file) => handlePreview(file, 2)}
                    onChange={(obj) => handleChange(obj, 2)}
                    accept="image/*"
                    multiple
                    maxCount={2}
                  >
                    {fileList2.length >= 2 ? null : uploadButton}
                  </Upload>
                </div>
                <Modal
                  visible={previewVisible}
                  title={previewTitle2}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage2}
                  />
                </Modal>
              </Form.Item>
              <Form.Item
                name="images3"
                label="Add Front Cover"

                //   rules={[{ required: true }]}
              >
                <div>
                  <Upload
                    listType="picture-card"
                    fileList={fileList3}
                    onPreview={(file) => handlePreview(file, 3)}
                    onChange={(obj) => handleChange(obj, 3)}
                    accept="image/*"
                    multiple
                    maxCount={1}
                  >
                    {fileList3.length >= 1 ? null : uploadButton}
                  </Upload>
                </div>
                <Modal
                  visible={previewVisible}
                  title={previewTitle3}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage3}
                  />
                </Modal>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Add
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddNewBook;
