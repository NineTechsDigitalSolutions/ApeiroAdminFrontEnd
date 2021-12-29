import { useState } from "react";
import { Modal, Button, Typography, Input, Select } from "antd";
import { PlusCircleFilled, PlusOutlined } from "@ant-design/icons";

const SubCategoryModal = () => {
  const { Option } = Select;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div className="category-modal">
      <Button
        type={"primary"}
        onClick={showModal}
        icon={<PlusCircleFilled />}
        style={{ marginLeft: "10px" }}
      >
        Add Sub Category
      </Button>
      <Modal
        title={
          <Typography.Title level={3} className="black">
            Add Sub Category
          </Typography.Title>
        }
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"Save"}
      >
        <Typography.Title level={5} className="black">
          Add New Sub Category
        </Typography.Title>
        <br />
        <p className="black">Category Name</p>
        <Select
          showSearch
          style={{ width: "100%" }}
          placeholder="Select Category"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="jack">E-Books</Option>
          <Option value="e">E-Magazines</Option>
          <Option value="lucy">Audio Books</Option>
        </Select>
        <br />
        <br />
        <p className="black">Sub Categories</p>
        <Select
          showSearch
          style={{ width: "100%" }}
          placeholder="Select Category"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="jack">E-Books</Option>
          <Option value="e">E-Magazines</Option>
          <Option value="lucy">Audio Books</Option>
        </Select>
        <Button
          icon={<PlusOutlined />}
          style={{ margin: "10px 0 0 0", border: "none" }}
        >
          Add New Sub Category
        </Button>
      </Modal>
    </div>
  );
};

export default SubCategoryModal;
