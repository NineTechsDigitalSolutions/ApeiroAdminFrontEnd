import { useEffect, useRef, useState } from "react";
import { Radio, Button, Typography } from "antd";

import LayoutMain from "./../../Layout/LayoutMain";
import { useDispatch } from "react-redux";
import { CKEditor } from "ckeditor4-react";
// import ReactHtmlParser from "react-html-parser";
const GeneralSettings = () => {
  const [type, setType] = useState("Aboutus");
  const [content, setContent] = useState(null);
  const [EditorData, setEditorData] = useState("");

  const [terms, setTerms] = useState(null);
  const dispatch = useDispatch();

  //   useEffect(async () => {
  //     // const content = await dispatch(getContent(type));
  //     console.log(content);
  //     setContent(content);
  //   }, [type]);

  //   useEffect(() => {
  //     content?.map((item) => {
  //       if (item.name === type) {
  //         // return item.name;
  //         setEditorData(item.content);
  //       }
  //     });
  //   }, [content]);

  const onEditorChange = (evt) => {
    const data = evt.editor.getData();
    setEditorData(data);
  };
  const handleTabChange = (e) => {
    setType(e.target.value);
  };
  const handleUpdateContent = () => {
    //   const payload = {
    //     name: type,
    //     content: EditorData,
    //   };
    //   dispatch(updateContent(payload));
  };
  return (
    <LayoutMain active="g-settings">
      <div className="white-card general-settings">
        <Typography.Title level={2}>General Settings</Typography.Title>
        <div className="radio-buttons">
          <Radio.Group
            defaultValue="Aboutus"
            buttonStyle="solid"
            onChange={handleTabChange}
            className="editor-radio-button"
          >
            <Radio.Button value="Aboutus">About Us</Radio.Button>
            <Radio.Button value="Contactus">Contact Us</Radio.Button>
            <Radio.Button value="Terms&Condition">
              Terms And Conditions
            </Radio.Button>
            <Radio.Button value="PrivacyPolicy">Privacy Policy</Radio.Button>
          </Radio.Group>
        </div>
        <CKEditor
          // initData={<p>Hello from CKEditor 4!</p>}
          data={EditorData}
          type="classic"
          onChange={onEditorChange}
        />
        <Button
          type={"primary"}
          style={{ display: "flex", marginLeft: "auto", marginTop: "10px" }}
          onClick={handleUpdateContent}
        >
          Update
        </Button>
      </div>
    </LayoutMain>
  );
};

export default GeneralSettings;
