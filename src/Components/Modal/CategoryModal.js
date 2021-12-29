import { useState } from "react";
import { Modal, Button, Typography, Input, Checkbox, Row, Col } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

const CategoryModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [material, setMaterial] = useState("");

  const [name, setName] = useState(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // if (name) {
    //   const categories = JSON.parse(localStorage.getItem("categories"));
    //   if (categories) {
    //     localStorage.setItem(
    //       "categories",
    //       JSON.stringify([...categories, { name }])
    //     );
    //   } else {
    //     localStorage.setItem("categories", JSON.stringify([{ name }]));
    //   }
    // }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="category-modal">
      <Button type="primary" onClick={showModal} icon={<PlusCircleFilled />}>
        Add Category
      </Button>
      <Modal
        title={
          <Typography.Title level={3} className="black">
            Add Category
          </Typography.Title>
        }
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"Save"}
      >
        <div style={{ margin: "20px 0" }}>
          <Typography.Title level={5} className="black">
            Material
          </Typography.Title>
          <Checkbox.Group
            value={material}
            onChange={(value) => setMaterial(value[value.length - 1])}
            style={{ width: "100%" }}
          >
            <Row gutter={[10, 10]}>
              <Col xs={12} md={8}>
                <Checkbox value="E-Books">E-Books</Checkbox>
              </Col>
              <Col xs={12} md={8}>
                <Checkbox value="Audio Books">Audio Books</Checkbox>
              </Col>
              <Col xs={12} md={8}>
                <Checkbox value="E-Magazines">E-Magazines</Checkbox>
              </Col>
              <Col xs={12} md={8}>
                <Checkbox value="E-Newspaper">E-Newspaper</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </div>
        <p className="black">Category Name</p>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </Modal>
    </div>
  );
};

export default CategoryModal;
