import Layout from "./../../Layout/LayoutMain";
import { Typography, Button, Tag, Image } from "antd";
import DataTable from "../../Components/Table/DataTable";
import { useEffect } from "react";
import { useState } from "react";
import author1 from "../../Assets/author1.jpg";
import author2 from "../../Assets/author2.jpg";
import { useHistory } from "react-router";
import {
  EyeFilled,
  EditFilled,
  DeleteFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
const Authors = () => {
  const [data, setData] = useState(null);
  const history = useHistory();
  useEffect(() => {
    let tempArr = [];
    [1, 2, 3, 4, 5].map((item, i) => {
      tempArr.push({
        key: i,
        srno: i,
        pic: <Image height={80} src={i % 2 === 0 ? author1 : author2} />,
        name: i % 2 === 0 ? "James" : "Jack",
        designation: i % 2 === 0 ? "Economist" : "Associate Professor",
        email: i % 2 === 0 ? "james@gmail.com" : "jack@gmail.com",
        books:
          i % 2 === 0 &&
          ["heaven", "earth", "forest"].map((book) => (
            <Tag color={i % 2 === 0 ? "#617a45" : "#B4673B"}>{book}</Tag>
          )),
        actions: (
          <div className="actions-buttons">
            <Button shape={"circle"} icon={<EyeFilled />} />
            <Button
              shape={"circle"}
              onClick={() =>
                history.push({
                  pathname: "/add-author",
                  state: author1,
                })
              }
              icon={<EditFilled />}
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
      title: "Author Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Profile Picture",
      dataIndex: "pic",
      key: "pic",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Books In Library",
      dataIndex: "books",
      key: "books",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
    },
  ];
  return (
    <Layout active={"authors"}>
      <div className="white-card">
        <div className="justify-between">
          <Typography.Title level={2}>Authors List</Typography.Title>
          <Button
            type="primary"
            icon={<PlusCircleFilled />}
            onClick={() => history.push("add-author")}
          >
            Add Author
          </Button>
        </div>
        <DataTable columns={columns} data={data} width={1200} />
      </div>
    </Layout>
  );
};

export default Authors;
