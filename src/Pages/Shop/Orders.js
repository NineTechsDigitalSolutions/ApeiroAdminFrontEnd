import Layout from "./../../Layout/LayoutMain";
import { Image, Typography, Button } from "antd";
import DataTable from "./../../Components/Table/DataTable";
import { useState } from "react";
import { useEffect } from "react";
import equip1 from "../../Assets/equip1.jpg";
import equip2 from "../../Assets/equip2.jpg";
import { EditFilled } from "@ant-design/icons";
import { DeleteFilled, PlusOutlined } from "@ant-design/icons";
const Orders = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let tempArr = [];
    [1, 2, 3, 4].map((item, i) => {
      tempArr.push({
        key: i,
        srno: i,
        image:
          i % 2 === 0 ? (
            <Image src={equip1} height={100} width={100} />
          ) : (
            <Image src={equip2} height={100} width={100} />
          ),
        name: i % 2 === 0 ? "Amazon E-Kindle" : "Mi Kindle",
        user: i % 2 === 0 ? "Yasir" : "Hassan",
        quantity: i % 2 === 0 ? "2" : "3",
        amount: i % 2 === 0 ? "$500" : "$300",
        description:
          i % 2 === 0
            ? "lorem ipsum dolor sit amet"
            : "lorem ipsum dolor sit amet",
        action: (
          <div className="actions-buttons">
            <Button shape={"circle"} icon={<EditFilled />} />
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
      title: "Product Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total Amount",
      dataIndex: "amount",
      key: "amount",
    },

    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <Layout active="orders">
      <div className="white-card">
        <Typography.Title level={2}>Orders List</Typography.Title>
        <DataTable columns={columns} data={data} width={800} />
      </div>
    </Layout>
  );
};

export default Orders;
