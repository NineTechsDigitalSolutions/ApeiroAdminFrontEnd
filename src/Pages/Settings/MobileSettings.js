import { useState, useEffect } from "react";
import Layout from "./../../Layout/LayoutMain";
import { Typography, Button, Image } from "antd";
import { EditFilled, PlusOutlined, DeleteFilled } from "@ant-design/icons";
import { useHistory } from "react-router";
import DataTable from "../../Components/Table/DataTable";
import book1 from "../../Assets/book1.jpg";
import book2 from "../../Assets/book2.jpg";
const MobileSettings = () => {
  const history = useHistory();
  const [data, setData] = useState(null);
  useEffect(() => {
    let tempArr = [];
    [1, 2, 3, 4].map((item, i) => {
      tempArr.push({
        key: i,
        srno: i,
        image:
          i % 2 === 0 ? (
            <Image src={book1} height={100} />
          ) : (
            <Image src={book2} height={100} />
          ),

        action: (
          <div>
            <Button
              icon={<EditFilled style={{ color: "var(--primary-color)" }} />}
              shape={"circle"}
            />
            <Button
              icon={<DeleteFilled className="color-red" />}
              shape={"circle"}
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
      width: 100,
    },

    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: 200,
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <Layout active="m-settings">
      <div className="white-card">
        <Typography.Title level={2}>Mobile Settings</Typography.Title>
        <div className="ml-left-flex">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => history.push("/add-slider")}
          >
            Add New Mobile Slider Image
          </Button>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </Layout>
  );
};

export default MobileSettings;
