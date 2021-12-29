import { useState } from "react";
import { Modal, Button, Typography, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

const SendModal = ({ title, margin }) => {
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
  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={margin && { margin: "0 5px" }}
      >
        Send {title}
      </Button>
      <Modal
        title={
          <Typography.Title className="black" level={3}>
            Send {title}
          </Typography.Title>
        }
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"send"}
      >
        <Input.TextArea
          rows={10}
          style={{ resize: "none" }}
          placeholder={`Enter ${title}`}
        />
      </Modal>
    </>
  );
};

export default SendModal;
