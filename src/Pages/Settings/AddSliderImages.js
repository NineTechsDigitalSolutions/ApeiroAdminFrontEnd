import Layout from "../../Layout/LayoutMain";
import { Typography, Upload, Modal, Button } from "antd";
import { PlusOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import swal from "sweetalert";

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
const AddSliderImages = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const history = useHistory();
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

  const handleAddImage = () => {
    if (fileList.length === 0) {
      swal("", "Please Upload Image", "info");
    } else {
      swal("", "Slider Image Added Successfully", "success");
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Layout>
      <div className="white-card">
        <Button
          shape={"circle"}
          icon={<ArrowLeftOutlined />}
          onClick={() => history.go(-1)}
        />

        <Typography.Title level={2}>Mobile Slider Images</Typography.Title>
        <h3>Add Mobile Slider Images</h3>
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
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
        <Button type="primary" onClick={handleAddImage}>
          Add
        </Button>
      </div>
    </Layout>
  );
};

export default AddSliderImages;
