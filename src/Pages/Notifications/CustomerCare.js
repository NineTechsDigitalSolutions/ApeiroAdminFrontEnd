import Layout from "./../../Layout/LayoutMain";
import { Typography, Button } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import DataTable from "./../../Components/Table/DataTable";
const CustomerCare = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let tempArr = [];
    [1, 2, 3, 4].map((item, i) => {
      tempArr.push({
        key: i,
        srno: i,
        name: i % 2 === 0 ? "Hassan" : "Yasir",
        email: i % 2 === 0 ? "hassan@gmail.com" : "yasir@gmail.com",
        notifications: "but i must explain to you what happen",

        action: <Button type="primary">Reply</Button>,
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
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Notifications",
      dataIndex: "notifications",
      key: "notifications",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <Layout active="1">
      <div className="white-card">
        <Typography.Title level={2}>Notifications</Typography.Title>
        <DataTable columns={columns} data={data} />
      </div>
    </Layout>
  );
};

export default CustomerCare;
