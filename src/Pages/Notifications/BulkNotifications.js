import Layout from "./../../Layout/LayoutMain";
import { Typography, Button } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import DataTable from "./../../Components/Table/DataTable";
import SendModal from "../../Components/Modal/SendModal";
const BulkNotifications = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let tempArr = [];
    [1, 2, 3, 4].map((item, i) => {
      tempArr.push({
        key: i,
        srno: i,
        name: i % 2 === 0 ? "Hassan" : "Yasir",
        email: i % 2 === 0 ? "hassan@gmail.com" : "yasir@gmail.com",
        // action: (
        //   <>
        //     <SendModal title={"Sms"} />
        //     <SendModal title={"Email"} margin={5} />
        //     <SendModal title={"Notification"} />
        //   </>
        // ),
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
    // {
    //   title: "Action",
    //   dataIndex: "action",
    //   key: "action",
    // },
  ];
  return (
    <Layout active={"2"}>
      <div className="white-card">
        <Typography.Title level={2}>Bulk Notifications</Typography.Title>
        <SendModal title={"Sms"} />
        <SendModal title={"Email"} margin={5} />
        <SendModal title={"Notification"} />
        <DataTable columns={columns} data={data} selection={true} />
      </div>
    </Layout>
  );
};

export default BulkNotifications;
