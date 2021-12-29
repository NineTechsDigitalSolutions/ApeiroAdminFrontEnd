import Layout from "./../../Layout/LayoutMain";
import { Typography, Select, Button, Image, Switch, Radio } from "antd";
import {
  PlusOutlined,
  EditFilled,
  DeleteFilled,
  EyeFilled,
} from "@ant-design/icons";
import DataTable from "./../../Components/Table/DataTable";
import { useEffect } from "react";
import { useState } from "react";
import book1 from "../../Assets/book1.jpg";
import book2 from "../../Assets/book2.jpg";
import { useHistory } from "react-router";
const Books = () => {
  const { Option } = Select;
  const history = useHistory();
  const [data, setData] = useState(null);
  const [type, setType] = useState("");
  useEffect(() => {
    let tempArr = [];
    [1, 2, 3, 4].map((item, i) => {
      tempArr.push({
        key: i,
        srno: i,
        image: <Image height={80} src={i % 2 === 0 ? book1 : book2} />,
        name: i % 2 === 0 ? "City On the edge" : "Last Pikachu",
        author: i % 2 === 0 ? "Hassan" : "Yasir",
        category: i % 2 === 0 ? "Fiction Books" : "Fantasy Book",
        type: i % 2 === 0 ? "E-book" : "Magazine",
        library: <Switch />,
        frequency: i % 2 === 0 ? "150" : "180",
        actions: (
          <div className="actions-buttons">
            <Button shape={"circle"} icon={<EyeFilled />} />
            <Button
              shape={"circle"}
              icon={<EditFilled />}
              onClick={() => history.push("/add-book")}
            />
            <Button
              shape={"circle"}
              icon={<DeleteFilled className="color-red" />}
            />
          </div>
        ),
      });
    });
    setData(tempArr);
  }, []);
  const columns = [
    {
      title: "Sr No",
      dataIndex: "srno",
      key: "srno",
    },

    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Book Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Category Name",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Book Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "View Library",
      dataIndex: "library",
      key: "library",
    },
    {
      title: "View Frequency",
      dataIndex: "frequency",
      key: "frequency",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
    },
  ];
  const handleTabChange = (e) => {
    setType(e.target.value);
  };
  return (
    <Layout active="books">
      <div className="books-main white-card">
        <Typography.Title level={2}>Books Listing</Typography.Title>
        <div className="justify-between">
          {/* <div>
            <span style={{ marginRight: "10px" }}>Select Library</span>
            <Select
              defaultValue="English"
              style={{ width: 120 }}
              onChange={(value) => console.log(value)}
            >
              <Option value="sinhala">Sinhala</Option>
              <Option value="english">English</Option>
              <Option value="all">All</Option>
            </Select>
          </div> */}
        </div>
        <div style={{ marginTop: "20px" }}>
          <Radio.Group
            defaultValue="Aboutus"
            buttonStyle="solid"
            onChange={handleTabChange}
            // className="editor-radio-button"
          >
            <Radio.Button value="E-Book">E-Books</Radio.Button>
            <Radio.Button value="E-Magazine">E-Magazines</Radio.Button>
            <Radio.Button value="Audio Book">Audio Books</Radio.Button>
            <Radio.Button value="E-Newspaper">News Papers</Radio.Button>
          </Radio.Group>
        </div>
        <div className="justify-between">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => history.push("/add-book")}
            style={{ margin: "20px 0" }}
          >
            Add New {type}
          </Button>
        </div>
        <DataTable
          columns={columns}
          data={data}
          width={1200}
          pagination={true}
        />
      </div>
    </Layout>
  );
};

export default Books;
